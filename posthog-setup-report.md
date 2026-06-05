<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into jams.agency. Here's a summary of all changes made:

**New files created:**
- `src/components/posthog.astro` — Reusable PostHog client-side snippet using `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` environment variables. Included in all layouts.
- `src/lib/posthog-server.ts` — Singleton `posthog-node` client for server-side event tracking in API routes.

**Files modified:**
- `src/layouts/BaseLayout.astro` — Replaced the old hardcoded PostHog snippet with the new `<PostHog />` component. Removed the outdated `PUBLIC_POSTHOG_KEY` env var reference.
- `src/pages/index.astro` — Added `<PostHog />` to the head (this page has its own HTML structure and wasn't previously tracked). Added client-side tracking for hero CTA clicks, phone call clicks, WhatsApp clicks, and first hero video play.
- `src/components/CTASection.astro` — Added tracking for the "Book a call" CTA button in the shared section CTA component.
- `src/components/Nav.astro` — Added tracking for the "Book a call" nav CTA button.
- `src/pages/start.astro` — Added `application_step_completed` tracking on each Next button click, `identify()` call with the applicant's email on successful submission, session ID forwarding to the API, and `cal_booking_clicked` tracking on the post-submission booking link.
- `src/pages/api/apply.ts` — Added server-side `application_submitted` event with session correlation via `X-PostHog-Session-Id` header. Captures budget, timeline, revenue, source, and existing-stack properties. Also calls `posthog.identify()` server-side to tie the email to the person.
- `src/pages/api/subscribe.ts` — Added server-side `newsletter_subscribed` event.
- `package.json` — Added `posthog-js` and `posthog-node` dependencies. Run `npm install` to install them.
- `.env` — Added `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` values (file is gitignored).

## Events instrumented

| Event | Description | File |
|---|---|---|
| `application_submitted` | Server-side: shaping session application successfully sent — primary conversion | `src/pages/api/apply.ts` |
| `newsletter_subscribed` | Server-side: email list subscription confirmed | `src/pages/api/subscribe.ts` |
| `application_step_completed` | Client-side: visitor advances a step in the multi-step application form (includes step number) | `src/pages/start.astro` |
| `cal_booking_clicked` | Client-side: visitor clicks "Book a call now" on the post-submission success card | `src/pages/start.astro` |
| `cta_clicked` | Client-side: "Book a call" clicked in the reusable CTASection component | `src/components/CTASection.astro` |
| `nav_cta_clicked` | Client-side: "Book a call" clicked in the main navigation bar | `src/components/Nav.astro` |
| `hero_cta_clicked` | Client-side: any "Book a call" or "Book a session" CTA clicked in the homepage hero | `src/pages/index.astro` |
| `phone_call_clicked` | Client-side: "Call me" telephone link clicked in the homepage hero card | `src/pages/index.astro` |
| `whatsapp_clicked` | Client-side: "WhatsApp" link clicked in the homepage hero card | `src/pages/index.astro` |
| `hero_video_played` | Client-side: first play of the hero video on the homepage | `src/pages/index.astro` |

## Next steps

We've built a dashboard with 5 insights to monitor user behavior and conversion:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/456099/dashboard/1675051)
- [Application conversion funnel](https://us.posthog.com/project/456099/insights/cJG1wDhS) — Funnel from hero CTA click → application submitted
- [Applications submitted](https://us.posthog.com/project/456099/insights/fK5b2Iyo) — Daily trend of submitted applications
- [CTA engagement](https://us.posthog.com/project/456099/insights/XD1ESBon) — Clicks across nav, hero, and section CTAs
- [Newsletter subscriptions](https://us.posthog.com/project/456099/insights/hxMHOWaw) — Email list signup trend
- [Post-application cal.com bookings](https://us.posthog.com/project/456099/insights/w1FCj20s) — How many applicants follow through to book a call

**One action needed:** Run `npm install` to install the new `posthog-js` and `posthog-node` packages.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
