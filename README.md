# jams.agency — Website

Marketing website for [Jams](https://jams.agency) — a custom software and AI development studio that builds web and mobile applications for operators and founders.

## Stack

- **Framework:** Astro 4
- **Styling:** Tailwind CSS 3
- **Deploy:** Vercel
- **Analytics:** PostHog
- **Domain:** jams.agency

## Design System

The full design system lives in `jams-agency-design-system/`. Read `jams-agency-design-system/project/README.md` before touching any CSS. The `project/colors_and_type.css` file is the single source of truth for all CSS custom properties — import it globally.

**Fonts** (self-hosted, in `jams-agency-design-system/project/fonts/`):
- **Instrument Serif** — all display headings (H1–H3, hero, section titles)
- **Neue Haas Grotesk Display Pro** — body copy, nav, buttons, UI text
- **Geist** — web app template only (dashboards, data tables); not used on marketing site

## Site Structure

| URL | Page |
|-----|------|
| `/` | Homepage |
| `/work` | Work index |
| `/work/[slug]` | Case study pages (8 total) |
| `/faqs` | FAQs |
| `/blog` | Blog index |
| `/blog/[slug]` | Blog post template |
| `/start` | Book workshop (noindex) |
| `/hospitality` | Hospitality landing page |
| `/bubble` | Bubble agency landing page |
| `/stripe` | Stripe integration landing page |
| `/cloudflare` | Cloudflare hybrid architecture landing page |
| `/convex` | Convex backend landing page |
| `/checkfront` | Checkfront integration landing page |
| `/oms` | OMS landing page |
| `/blueprint` | Blueprint offer landing page |

## Key Dependencies

```
@astrojs/tailwind
@astrojs/sitemap
astro:assets (built-in image handling)
PostHog (analytics, via script tag in BaseLayout)
```

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Content Reference

All copy, SEO metadata, page structure, and implementation notes live in a private master reference file (Dropbox, not in this repo).

## Deployment

Deployed to Vercel. Auto-deploys on push to `main`.
