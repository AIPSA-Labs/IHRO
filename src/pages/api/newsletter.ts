//- Real API endpoint for processing newsletter subscriptions via AIPSA Database
import type { APIRoute } from 'astro';
import { saveNewsletterSubscriber } from '../../services/db';
import { getStrings } from '../../constants/strings';

export const prerender = false;

interface NewsletterPayload {
  email?: string;
  locale?: string;
}

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

    const payload = (await request.json()) as NewsletterPayload;
    const s = getStrings(payload.locale || 'en');
    const email = payload.email ? payload.email.trim() : '';

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: s.api.newsletterEmailInvalid,
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    //- Persist subscriber directly into AIPSA Database
    const dbResult = await saveNewsletterSubscriber(email);

    if (!dbResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: s.api.newsletterSaveFailed,
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    if (dbResult.alreadySubscribed) {
      return new Response(
        JSON.stringify({
          success: true,
          message: s.api.newsletterAlreadySubscribed,
          data: {
            email: email,
            status: 'existing',
          },
        }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    console.log(`[IHRO API Newsletter] New subscriber enrolled: ${email}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: s.api.newsletterSuccess,
        data: {
          subscribedAt: new Date().toISOString(),
          email: email,
          status: 'new',
        },
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    console.error("[IHRO API Newsletter Error]", err);
    const sDefault = getStrings('en');
    return new Response(
      JSON.stringify({
        success: false,
        error: sDefault.api.newsletterSaveFailed,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
