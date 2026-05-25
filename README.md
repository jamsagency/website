# jams.agency — Website

Marketing website for [Jams](https://jams.agency) — a custom software and AI development studio that builds web and mobile applications for operators and founders.

## Stack

- **Framework:** Astro 4
- **Styling:** Tailwind CSS 3
- **Deploy:** Vercel
- **Analytics:** PostHog
- **Domain:** jams.agency

## Design system

`design.md` in the repo root is the canonical design reference — read it before touching any CSS. It documents all confirmed values derived from the live site code: colors, typography, layout, shadows, animations, and component patterns.

CSS custom properties live in `src/styles/global.css`. Tailwind tokens are in `tailwind.config.mjs`.

**Font:** Geist only (weights 400, 500, 600, 700) — loaded from Google Fonts in `global.css`.

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
