import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name    = data.get('name')?.toString()            || '';
  const email   = data.get('email')?.toString()           || '';
  const problem = data.get('problem')?.toString()         || '';
  const users   = data.get('users')?.toString()           || '';
  const existing       = data.get('existing')?.toString()        || '';
  const existingDetail = data.get('existing_detail')?.toString() || '';
  const success  = data.get('success')?.toString()        || '';
  const timeline = data.get('timeline')?.toString()       || '';
  const deadline = data.get('deadline')?.toString()       || '';
  const revenue  = data.get('revenue')?.toString()        || '';
  const team     = data.get('team')?.toString()           || '';
  const budget   = data.get('budget')?.toString()         || '';
  const source   = data.get('source')?.toString()         || '';
  const referral = data.get('referral')?.toString()       || '';

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; color: #171717;">
      <h2 style="margin-bottom: 4px;">New application from ${name}</h2>
      <p style="color: #737373; margin-top: 0;">Reply to: <a href="mailto:${email}">${email}</a></p>
      <hr style="border: none; border-top: 1px solid #E5E5E5; margin: 24px 0;" />

      <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 6px;">Problem</h3>
      <p style="margin-top: 0;">${problem}</p>

      <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 6px;">Users</h3>
      <p style="margin-top: 0;">${users}</p>

      <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 6px;">Existing work</h3>
      <p style="margin-top: 0;">${existing}${existingDetail ? '<br/><em>' + existingDetail + '</em>' : ''}</p>

      <h3 style="font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #737373; margin-bottom: 6px;">Success in 6 months</h3>
      <p style="margin-top: 0;">${success}</p>

      <hr style="border: none; border-top: 1px solid #E5E5E5; margin: 24px 0;" />

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #F3F3F5; color: #737373; font-size: 13px; width: 140px;">Timeline</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #F3F3F5; font-size: 14px;">${timeline}${deadline ? ' — ' + deadline : ''}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #F3F3F5; color: #737373; font-size: 13px;">Revenue</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #F3F3F5; font-size: 14px;">${revenue}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #F3F3F5; color: #737373; font-size: 13px;">Team size</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #F3F3F5; font-size: 14px;">${team}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; border-bottom: 1px solid #F3F3F5; color: #737373; font-size: 13px;">Budget</td>
          <td style="padding: 8px 0; border-bottom: 1px solid #F3F3F5; font-size: 14px;">${budget}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #737373; font-size: 13px;">Source</td>
          <td style="padding: 8px 0; font-size: 14px;">${source}${referral ? ' — ' + referral : ''}</td>
        </tr>
      </table>
    </div>
  `;

  try {
    await resend.emails.send({
      from: 'Jams Applications <apply@jams.agency>',
      to: 'j@jams.agency',
      replyTo: email,
      subject: `New application: ${name}`,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Resend error:', err);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
