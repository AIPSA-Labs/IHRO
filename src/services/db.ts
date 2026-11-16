//- AIPSA Database REST API service layer for IHRO application

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

//- Internal helper to execute fetch with timeout against AIPSA Database REST API
async function aipsaFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const baseUrl = CONFIG.AIPSA_DB.BASE_URL;
  const url = `${baseUrl}${path}`;
  const controller = new AbortController();
  const timer = setTimeout(() => {
    controller.abort();
  }, CONFIG.AIPSA_DB.TIMEOUT_MS);

  try {
    const headers = new Headers(options.headers || {});
    if (!headers.has('Authorization')) {
      headers.set('Authorization', `Bearer ${CONFIG.AIPSA_DB.SERVICE_KEY}`);
    }
    if (!headers.has('Content-Type') && options.body) {
      headers.set('Content-Type', 'application/json');
    }

    const response = await fetch(url, {
      ...options,
      headers: headers,
      signal: controller.signal,
    });
    return response;
  } finally {
    clearTimeout(timer);
  }
}

//- Save a validated contact inquiry directly to AIPSA Database
export async function saveContactInquiry(inquiry: {
  name: string;
  email: string;
  topic: string;
  message: string;
}): Promise<{ success: boolean; id?: number; error?: string }> {
  try {
    const response = await aipsaFetch('/tables/contact_inquiries', {
      method: 'POST',
      body: JSON.stringify({
        name: inquiry.name,
        email: inquiry.email,
        topic: inquiry.topic,
        message: inquiry.message,
        status: 'pending',
      }),
    });

    const result = await response.json();

    if (response.ok && result.id) {
      return {
        success: true,
        id: result.id,
      };
    }

    const errorMessage = result.message || "Failed to record contact inquiry.";
    return {
      success: false,
      error: errorMessage,
    };
  } catch (err) {
    console.error("[AIPSA DB Error: saveContactInquiry]", err);
    return {
      success: false,
      error: "Database communication failure.",
    };
  }
}

//- Save a newsletter subscription with unique constraint check
export async function saveNewsletterSubscriber(email: string): Promise<{
  success: boolean;
  alreadySubscribed?: boolean;
  error?: string;
}> {
  try {
    const response = await aipsaFetch('/tables/newsletter_subscribers', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        status: 'active',
      }),
    });

    const result = await response.json();

    if (response.ok && result.id) {
      return {
        success: true,
      };
    }

    //- Check if unique email constraint was triggered
    const msg = result.message || '';
    if (msg.includes('duplicate key') || msg.includes('23505')) {
      return {
        success: true,
        alreadySubscribed: true,
      };
    }

    return {
      success: false,
      error: result.message || "Failed to record newsletter subscriber.",
    };
  } catch (err) {
    console.error("[AIPSA DB Error: saveNewsletterSubscriber]", err);
    return {
      success: false,
      error: "Database communication failure.",
    };
  }
}

//- Fetch organization metrics from AIPSA Database with fallback to local defaults
export async function fetchOrganizationMetrics(): Promise<OrganizationMetricsData> {
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
    const response = await aipsaFetch('/tables/organization_metrics');
    if (!response.ok) {
      return fallback;
    }

    const result = await response.json();
    if (!result.data || !Array.isArray(result.data)) {
      return fallback;
    }

    const metricsMap = new Map<string, string>();
    for (let i = 0; i < result.data.length; i += 1) {
      const row = result.data[i];
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
    console.error("[AIPSA DB Error: fetchOrganizationMetrics]", err);
    return fallback;
  }
}

//- Fetch registered programs from AIPSA Database
export async function fetchPrograms(): Promise<ProgramRecord[]> {
  try {
    const response = await aipsaFetch('/tables/programs?sort=id:asc');
    if (!response.ok) {
      return [];
    }
    const result = await response.json();
    if (result.data && Array.isArray(result.data)) {
      return result.data as ProgramRecord[];
    }
    return [];
  } catch (err) {
    console.error("[AIPSA DB Error: fetchPrograms]", err);
    return [];
  }
}

//- Health check verifying real-time database connection
export async function checkDatabaseHealth(): Promise<{
  connected: boolean;
  latencyMs: number;
  timestamp?: string;
  error?: string;
}> {
  const startTime = Date.now();
  try {
    const response = await aipsaFetch('/query', {
      method: 'POST',
      body: JSON.stringify({
        query: 'select current_timestamp as now;',
      }),
    });

    const latencyMs = Date.now() - startTime;

    if (!response.ok) {
      return {
        connected: false,
        latencyMs: latencyMs,
        error: `Database HTTP ${response.status}`,
      };
    }

    const result = await response.json();
    const serverNow = result.rows && result.rows[0] ? result.rows[0].now : undefined;

    return {
      connected: true,
      latencyMs: latencyMs,
      timestamp: serverNow,
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

