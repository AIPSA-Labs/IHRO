//- Real API endpoint for processing contact inquiries, partnership proposals, and donations via AIPSA Database
import type { APIRoute } from 'astro';
import { saveContactInquiry, fetchContactInquiries } from '../../services/db';
import { getStrings } from '../../constants/strings';

export const prerender = false;

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  topic?: string;
  locale?: string;
}

const MIN_MESSAGE_LENGTH = 5;

//- GET endpoint to list received inquiries
export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const limitParam = Number.parseInt(url.searchParams.get('limit') || '50', 10);
    const limitCount = Number.isNaN(limitParam) ? 50 : limitParam;

    const inquiries = await fetchContactInquiries(limitCount);

    return new Response(
      JSON.stringify({
        success: true,
        data: inquiries,
        total: inquiries.length,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      }
    );
  } catch (err) {
    console.error("[IHRO API Contact GET Error]", err);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Unable to retrieve messages.",
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const sDefault = getStrings('en');
      return new Response(
        JSON.stringify({
          success: false,
          error: sDefault.api.invalidFormat,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const payload = (await request.json()) as ContactPayload;
    const s = getStrings(payload.locale || 'en');
    const name = payload.name ? payload.name.trim() : '';
    const email = payload.email ? payload.email.trim() : '';
    const message = payload.message ? payload.message.trim() : '';
    const topic = payload.topic ? payload.topic.trim() : 'General Inquiry';

    //- Validate required fields
    if (!name) {
      return new Response(
        JSON.stringify({
          success: false,
          error: s.api.contactNameRequired,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    //- Validate email syntax with standard pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: s.api.contactEmailInvalid,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    if (!message || message.length < MIN_MESSAGE_LENGTH) {
      return new Response(
        JSON.stringify({
          success: false,
          error: s.api.contactMessageTooShort,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    //- Persist inquiry directly into AIPSA Database
    const dbResult = await saveContactInquiry({
      name: name,
      email: email,
      topic: topic,
      message: message,
    });

    if (!dbResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: s.api.contactSaveFailed,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.log(`[IHRO API Contact] Saved inquiry #${dbResult.id} from ${name} <${email}> regarding [${topic}]`);

    return new Response(
      JSON.stringify({
        success: true,
        message: s.api.contactSuccess,
        data: {
          id: dbResult.id,
          receivedAt: new Date().toISOString(),
          topic: topic,
          sender: name,
        },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    console.error("[IHRO API Contact Error]", err);
    const sDefault = getStrings('en');
    return new Response(
      JSON.stringify({
        success: false,
        error: sDefault.api.contactSaveFailed,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
