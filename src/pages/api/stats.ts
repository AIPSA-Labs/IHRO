//- Real API endpoint for serving organization statistics and operational network metrics via AIPSA Database
import type { APIRoute } from 'astro';
import { fetchOrganizationMetrics } from '../../services/db';
import { CONFIG } from '../../constants/config';
import { getStrings } from '../../constants/strings';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const locale = url.searchParams.get('locale') || 'en';
    const s = getStrings(locale);

    //- Retrieve live metrics from AIPSA Database (with automatic local fallback)
    const metrics = await fetchOrganizationMetrics();

    return new Response(
      JSON.stringify({
        success: true,
        stats: {
          nations: metrics.nations,
          chapters: metrics.chapters,
          casesSupported: metrics.casesSupported,
          volunteers: metrics.volunteers,
        },
        contact: {
          email: metrics.contact.email,
          phone: metrics.contact.phone,
          phoneFormatted: metrics.contact.phoneFormatted,
          headquarters: metrics.contact.headquarters,
        },
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': `public, max-age=${CONFIG.AIPSA_DB.CACHE_MAX_AGE_SECONDS}`,
        },
      }
    );
  } catch (err) {
    console.error("[IHRO API Stats Error]", err);
    const sDefault = getStrings('en');
    return new Response(
      JSON.stringify({
        success: false,
        error: sDefault.api.statsError,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
