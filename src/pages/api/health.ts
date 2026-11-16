//- Real API endpoint for checking backend service and database health
import type { APIRoute } from 'astro';
import { checkDatabaseHealth } from '../../services/db';

export const prerender = false;

export const GET: APIRoute = async () => {
  const dbHealth = await checkDatabaseHealth();

  const statusCode = dbHealth.connected ? 200 : 503;

  return new Response(
    JSON.stringify({
      status: dbHealth.connected ? 'healthy' : 'degraded',
      service: 'ihro-website-api',
      database: {
        provider: 'AIPSA Database (PostgreSQL)',
        connected: dbHealth.connected,
        latencyMs: dbHealth.latencyMs,
        timestamp: dbHealth.timestamp,
        error: dbHealth.error,
      },
      timestamp: new Date().toISOString(),
    }),
    {
      status: statusCode,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    }
  );
};

