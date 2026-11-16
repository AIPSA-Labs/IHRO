//- Real API endpoint for retrieving registered IHRO programs from AIPSA Database
import type { APIRoute } from 'astro';
import { fetchPrograms } from '../../services/db';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const programs = await fetchPrograms();

    return new Response(
      JSON.stringify({
        success: true,
        data: programs,
        total: programs.length,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60',
        },
      }
    );
  } catch (err) {
    console.error("[IHRO API Programs Error]", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Unable to retrieve programs at this time.",
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

