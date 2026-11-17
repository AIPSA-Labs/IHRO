//- High-performance AIPSA Database service layer for IHRO application
//- Features pure lowercase SQL queries, exact column projections, named parameters, and sub-millisecond in-memory caching

import { CONFIG } from '../constants/config';

export interface ContactInquiryRecord {
  id?: number;
  name: string;
  email: string;
  topic: string;
  message: string;
  status?: string;
  created_at?: string;
}

export interface NewsletterSubscriberRecord {
  id?: number;
  email: string;
  status?: string;
  created_at?: string;
}

export interface OrganizationMetricsData {
  nations: number;
  chapters: number;
  casesSupported: number;
  volunteers: number;
  contact: {
    email: string;
    phone: string;
    phoneFormatted: string;
    headquarters: string;
  };
}

export interface ProgramRecord {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string;
}

//- In-memory cache structures for sub-millisecond query responses
interface CacheItem<T> {
  data: T;
  cachedAt: number;
}

const DEFAULT_METRICS: OrganizationMetricsData = {
  nations: CONFIG.STATS.NATIONS_COUNT,
  chapters: CONFIG.STATS.CHAPTERS_COUNT,
  casesSupported: CONFIG.STATS.CASES_SUPPORTED,
  volunteers: CONFIG.STATS.VOLUNTEERS_COUNT,
  contact: {
    email: CONFIG.CONTACT_INFO.EMAIL,
    phone: CONFIG.CONTACT_INFO.PHONE,
    phoneFormatted: CONFIG.CONTACT_INFO.PHONE_FORMATTED,
    headquarters: CONFIG.CONTACT_INFO.ADDRESS,
  },
};

let cachedMetrics: CacheItem<OrganizationMetricsData> = {
  data: DEFAULT_METRICS,
  cachedAt: 0,
};
let cachedPrograms: CacheItem<ProgramRecord[]> | null = null;
let isRefreshingMetrics = false;
let isRefreshingPrograms = false;

//- Reusable low-latency query executor against AIPSA PostgreSQL REST API
export async function runSqlQuery<T = Record<string, unknown>>(
  query: string,
  params?: Record<string, unknown>
): Promise<{ rows: T[]; rowCount: number; ok: boolean; status: number; error?: string }> {
  const baseUrl = CONFIG.AIPSA_DB.BASE_URL;
  const url = `${baseUrl}/query`;
  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort();
  }, CONFIG.AIPSA_DB.TIMEOUT_MS);

  try {
    const bodyPayload: Record<string, unknown> = {
      query: query,
    };
    if (params) {
      bodyPayload.params = params;
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${CONFIG.AIPSA_DB.SERVICE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyPayload),
      signal: controller.signal,
    });

    if (!response.ok) {
      const errorJson = await response.json().catch(() => ({}));
      return {
        rows: [],
        rowCount: 0,
        ok: false,
        status: response.status,
        error: errorJson.message || `Query failed with status ${response.status}`,
      };
    }

    const result = await response.json();
    return {
      rows: (result.rows || []) as T[],
      rowCount: result.row_count || 0,
      ok: true,
      status: response.status,
    };
  } catch (err) {
    return {
      rows: [],
      rowCount: 0,
      ok: false,
      status: 500,
      error: err instanceof Error ? err.message : "Database communication error",
    };
  } finally {
    clearTimeout(timer);
  }
}

//- Save contact inquiry with named parameters and exact column projection
export async function saveContactInquiry(inquiry: {
  name: string;
  email: string;
  topic: string;
  message: string;
}): Promise<{ success: boolean; id?: number; error?: string }> {
  try {
    const qObj = {
      name: inquiry.name,
      email: inquiry.email,
      topic: inquiry.topic,
      message: inquiry.message,
      status: 'pending',
    };

    const query = 'insert into contact_inquiries (name, email, topic, message, status) values (:name, :email, :topic, :message, :status) returning id;';
    const result = await runSqlQuery<{ id: number }>(query, qObj);

    if (result.ok && result.rows.length > 0) {
      return {
        success: true,
        id: result.rows[0].id,
      };
    }

    return {
      success: false,
      error: result.error || "Failed to record contact inquiry.",
    };
  } catch (err) {
    console.error("[AIPSA DB Error: saveContactInquiry]", err);
    return {
      success: false,
      error: "Database communication failure.",
    };
  }
}

//- Save newsletter subscriber with conflict resolution for instant zero-error insertion
export async function saveNewsletterSubscriber(email: string): Promise<{
  success: boolean;
  alreadySubscribed?: boolean;
  error?: string;
}> {
  try {
    const qObj = {
      email: email,
      status: 'active',
    };

    const query = 'insert into newsletter_subscribers (email, status) values (:email, :status) on conflict (email) do nothing returning id;';
    const result = await runSqlQuery<{ id: number }>(query, qObj);

    if (result.ok) {
      if (result.rows.length > 0) {
        return {
          success: true,
        };
      }
      return {
        success: true,
        alreadySubscribed: true,
      };
    }

    return {
      success: false,
      error: result.error || "Failed to record newsletter subscriber.",
    };
  } catch (err) {
    console.error("[AIPSA DB Error: saveNewsletterSubscriber]", err);
    return {
      success: false,
      error: "Database communication failure.",
    };
  }
}

//- Internal helper to execute live metrics query from PostgreSQL
async function queryLiveMetrics(): Promise<OrganizationMetricsData | null> {
  const fallback: OrganizationMetricsData = {
    nations: CONFIG.STATS.NATIONS_COUNT,
    chapters: CONFIG.STATS.CHAPTERS_COUNT,
    casesSupported: CONFIG.STATS.CASES_SUPPORTED,
    volunteers: CONFIG.STATS.VOLUNTEERS_COUNT,
    contact: {
      email: CONFIG.CONTACT_INFO.EMAIL,
      phone: CONFIG.CONTACT_INFO.PHONE,
      phoneFormatted: CONFIG.CONTACT_INFO.PHONE_FORMATTED,
      headquarters: CONFIG.CONTACT_INFO.ADDRESS,
    },
  };

  try {
    const query = 'select metric_key, metric_value from organization_metrics;';
    const result = await runSqlQuery<{ metric_key: string; metric_value: string }>(query);

    if (!result.ok || result.rows.length === 0) {
      return fallback;
    }

    const metricsMap = new Map<string, string>();
    for (let i = 0; i < result.rows.length; i += 1) {
      const row = result.rows[i];
      if (row.metric_key && row.metric_value) {
        metricsMap.set(row.metric_key, row.metric_value);
      }
    }

    const parsedNations = Number.parseInt(metricsMap.get('nations') || '', 10);
    const parsedChapters = Number.parseInt(metricsMap.get('chapters') || '', 10);
    const parsedCases = Number.parseInt(metricsMap.get('cases_supported') || '', 10);
    const parsedVolunteers = Number.parseInt(metricsMap.get('volunteers') || '', 10);

    return {
      nations: Number.isNaN(parsedNations) ? fallback.nations : parsedNations,
      chapters: Number.isNaN(parsedChapters) ? fallback.chapters : parsedChapters,
      casesSupported: Number.isNaN(parsedCases) ? fallback.casesSupported : parsedCases,
      volunteers: Number.isNaN(parsedVolunteers) ? fallback.volunteers : parsedVolunteers,
      contact: {
        email: metricsMap.get('contact_email') || fallback.contact.email,
        phone: metricsMap.get('contact_phone') || fallback.contact.phone,
        phoneFormatted: metricsMap.get('contact_phone_formatted') || fallback.contact.phoneFormatted,
        headquarters: metricsMap.get('headquarters') || fallback.contact.headquarters,
      },
    };
  } catch (err) {
    console.error("[AIPSA DB Error: queryLiveMetrics]", err);
    return fallback;
  }
}

//- Fetch organization metrics instantly from cache with background non-blocking revalidation
export async function fetchOrganizationMetrics(): Promise<OrganizationMetricsData> {
  const now = Date.now();

  //- Return cached result in sub-millisecond time if fresh
  if (now - cachedMetrics.cachedAt < CONFIG.AIPSA_DB.CACHE_TTL_MS) {
    return cachedMetrics.data;
  }

  //- Non-blocking background revalidation: return current data immediately, refresh in background
  if (!isRefreshingMetrics) {
    isRefreshingMetrics = true;
    queryLiveMetrics().then((freshData) => {
      if (freshData) {
        cachedMetrics = {
          data: freshData,
          cachedAt: Date.now(),
        };
      }
    }).finally(() => {
      isRefreshingMetrics = false;
    });
  }

  return cachedMetrics.data;
}

//- Internal helper to execute live programs query from PostgreSQL
async function queryLivePrograms(): Promise<ProgramRecord[]> {
  try {
    const query = 'select id, slug, title, description, icon from programs order by id asc;';
    const result = await runSqlQuery<ProgramRecord>(query);
    if (result.ok && result.rows.length > 0) {
      return result.rows;
    }
    return [];
  } catch (err) {
    console.error("[AIPSA DB Error: queryLivePrograms]", err);
    return [];
  }
}

//- Fetch registered programs with sub-millisecond memory cache and background revalidation
export async function fetchPrograms(): Promise<ProgramRecord[]> {
  const now = Date.now();

  //- Return cached result in sub-millisecond time if fresh
  if (cachedPrograms && (now - cachedPrograms.cachedAt < CONFIG.AIPSA_DB.CACHE_TTL_MS)) {
    return cachedPrograms.data;
  }

  //- Stale-while-revalidate: return immediate stale data and refresh asynchronously
  if (cachedPrograms && (now - cachedPrograms.cachedAt < CONFIG.AIPSA_DB.STALE_TTL_MS)) {
    if (!isRefreshingPrograms) {
      isRefreshingPrograms = true;
      queryLivePrograms().then((freshData) => {
        if (freshData.length > 0) {
          cachedPrograms = {
            data: freshData,
            cachedAt: Date.now(),
          };
        }
      }).finally(() => {
        isRefreshingPrograms = false;
      });
    }
    return cachedPrograms.data;
  }

  //- Synchronous fetch and cache
  const data = await queryLivePrograms();
  if (data.length > 0) {
    cachedPrograms = {
      data: data,
      cachedAt: now,
    };
    return data;
  }

  return [];
}

//- Health check verifying real-time database connection and query response latency
export async function checkDatabaseHealth(): Promise<{
  connected: boolean;
  latencyMs: number;
  timestamp?: string;
  error?: string;
}> {
  const startTime = Date.now();
  try {
    const query = 'select current_timestamp as now;';
    const result = await runSqlQuery<{ now: string }>(query);
    const latencyMs = Date.now() - startTime;

    if (!result.ok || result.rows.length === 0) {
      return {
        connected: false,
        latencyMs: latencyMs,
        error: result.error || "Health query failed",
      };
    }

    return {
      connected: true,
      latencyMs: latencyMs,
      timestamp: result.rows[0].now,
    };
  } catch (err) {
    const latencyMs = Date.now() - startTime;
    return {
      connected: false,
      latencyMs: latencyMs,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

//- Fetch recent contact inquiries from AIPSA Database for admin review
export async function fetchContactInquiries(limitCount: number = 50): Promise<ContactInquiryRecord[]> {
  try {
    const query = 'select id, name, email, topic, message, status, created_at from contact_inquiries order by created_at desc limit :limit;';
    const result = await runSqlQuery<ContactInquiryRecord>(query, { limit: limitCount });
    if (result.ok && result.rows.length > 0) {
      return result.rows;
    }
    return [];
  } catch (err) {
    console.error("[AIPSA DB Error: fetchContactInquiries]", err);
    return [];
  }
}

