<wizard-report>
# PostHog post-wizard report

The wizard extended the existing PostHog integration for jams.agency with five new client-side events. The project already had a solid foundation — `posthog.astro` snippet in all layouts, a server-side `posthog-node` singleton, and events on the main conversion path (application form steps, newsletter, nav CTA). The wizard added coverage for content engagement pages, mobile navigation, and direct contact actions.

**Files modified:**
- `src/layouts/CaseStudyLayout.astro` — Added `case_study_viewed` event with `project_name` and `tags` properties.
- `src/layouts/BlogLayout.astro` — Added `blog_post_viewed` event with `title`, `slug`, `author`, and `publish_date` properties.
- `src/components/Nav.astro` — Added `mobile_cta_clicked` event on the mobile overlay "Book a call" button; added `id="mobile-cta-btn"` to the link.
- `src/components/Footer.astro` — Added `contact_link_clicked` event (with `method`: email / phone / whatsapp) and `social_link_clicked` event (with `platform`: linkedin / x / instagram). Added `data-contact` and `data-social` attributes to the respective links.

## Events instrumented

| Event | Description | File |
|---|---|---|
| `case_study_viewed` | User lands on a case study page — top-of-funnel signal for portfolio-driven leads | `src/layouts/CaseStudyLayout.astro` |
| `blog_post_viewed` | User lands on a blog post — content engagement signal for inbound leads | `src/layouts/BlogLayout.astro` |
| `mobile_cta_clicked` | User clicks the "Book a call" CTA inside the mobile navigation overlay | `src/components/Nav.astro` |
| `contact_link_clicked` | User clicks a direct contact link (email, phone, or WhatsApp) in the footer | `src/components/Footer.astro` |
| `social_link_clicked` | User clicks a social media link (LinkedIn, X, or Instagram) in the footer | `src/components/Footer.astro` |

**Pre-existing events (already instrumented):**

| Event | Description | File |
|---|---|---|
| `application_submitted` | Application form fully submitted — primary conversion (server-side) | `src/pages/api/apply.ts` |
| `application_step_completed` | User completes a step in the multi-step form | `src/pages/start.astro` |
| `newsletter_subscribed` | Footer newsletter subscription confirmed (server-side) | `src/pages/api/subscribe.ts` |
| `nav_cta_clicked` | Desktop nav "Book a call" CTA clicked | `src/components/Nav.astro` |
| `cta_clicked` | CTA section "Book a call" button clicked | `src/components/CTASection.astro` |
| `cal_booking_clicked` | Post-submission cal.com booking link clicked | `src/pages/start.astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/456099/dashboard/1675110)
- [Application submission funnel](https://us.posthog.com/project/456099/insights/WNZuLDJp) — Conversion from form start → submitted → cal.com booked
- [Applications submitted](https://us.posthog.com/project/456099/insights/mg9i87Pg) — Total applications in the last 30 days (bold number)
- [CTA clicks by location](https://us.posthog.com/project/456099/insights/sanoQBsj) — Nav vs. mobile vs. CTA section click comparison
- [Content engagement](https://us.posthog.com/project/456099/insights/lXHclPEX) — Case study and blog post views over time
- [Newsletter subscriptions](https://us.posthog.com/project/456099/insights/Qi3vP9dJ) — Footer newsletter sign-ups over time

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
