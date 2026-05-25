# CLAUDE.md — jams.agency Website

## Project overview

Marketing website for Jams (jams.agency) — a custom software and AI studio. Built with **Astro 4 + Tailwind CSS 3**, deployed on Vercel.

The master content reference is a private file in the owner's Dropbox (path known locally). It contains all copy, SEO metadata, sitemap, and per-page implementation notes. Ask the owner for the path if needed.

---

## Design system — read this first

**`design.md` in the repo root is the canonical design reference.** Read it before writing any CSS or component. It is derived directly from the live site code and screenshots — not from Figma or an earlier spec.

CSS custom properties live in `src/styles/global.css`. Tailwind tokens are in `tailwind.config.mjs`.

### Font
**Geist only** across the entire marketing site — weights 400, 500, 600, 700. Loaded from Google Fonts via `@import` in `global.css`. Do not use any other typeface.

### Colors
Two oranges — understand both before touching any component:
- `#F55D11` — nav CTA button, list bullet points, hover states
- `#F9AA43` — sticky notes, testimonial cards, sticky-style CTA buttons

Other key values:
- Dark sections: `background: #111` (inline, not a class)
- Section grey: `#F3F3F3` (alternating light sections)
- Default background: `#FFFFFF`
- Body text: `#1A1A1A` (hero/body), `#404040` (muted)
- Violet gradient token: `linear-gradient(180deg, #864ACC 0%, #A85CFF 51%, #864ACC 100%)` — used on accent elements, not buttons

### Layout
- Container max-width: 1280px, 48px side padding desktop, 24px tablet, 16px mobile
- Section vertical padding: 128px desktop / 64px tablet / 48px mobile
- Mobile viewport: 390px

### Nav
Full-width fixed bar. `background: rgba(255,255,255,0.72)`, `backdrop-filter: blur(20px)`, `border-bottom: 1px solid rgba(0,0,0,0.06)`. Not a floating capsule.

### Radii
4 / 8 / 12 / 16 / 24 / 32 / 999px (pill). Buttons and inputs: **8px**. Liquid glass cards: 24px. Large section cards: 16px. Sticky notes: 4px.

### Shadows
- Cards: `0 2px 10px 0 rgba(0,0,0,0.06)` outer + `inset 0 2px 2px 0 rgb(254,254,254)` inset highlight (always together)
- Sticky notes: `2px 3px 8px rgba(0,0,0,0.1)`

### Animations
120–200ms, `cubic-bezier(0.22, 1, 0.36, 1)`. Hover fades, no bounce. Card scroll-reveal only.

### Icons
Phosphor Icons (line weight, regular, `currentColor`). CDN: `https://unpkg.com/@phosphor-icons/web@2.1.1`. Lucide also loaded as fallback. No emoji. No unicode arrows.

---

## File structure

```
src/
├── components/
│   ├── SEOHead.astro          ← accepts title, description, ogImage, canonical, schema, noindex
│   ├── Nav.astro
│   ├── Footer.astro
│   ├── CaseStudyCard.astro
│   ├── BlogCard.astro
│   ├── CTASection.astro       ← reusable "book workshop" CTA block
│   └── TestimonialCard.astro
├── layouts/
│   ├── BaseLayout.astro       ← Nav + Footer + SEOHead + PostHog
│   ├── CaseStudyLayout.astro
│   ├── BlogLayout.astro
│   └── LandingPageLayout.astro
└── pages/
    ├── index.astro
    ├── work/
    │   ├── index.astro
    │   ├── the-fold.astro
    │   ├── dropcar.astro
    │   ├── emendu.astro
    │   ├── the-arena.astro
    │   ├── red-horse-mountain-ranch.astro
    │   ├── 93-percent-club.astro
    │   ├── qmius.astro
    │   └── fletech.astro
    ├── faqs.astro
    ├── blog/
    │   ├── index.astro
    │   └── [slug].astro
    ├── start.astro
    ├── hospitality.astro
    ├── bubble.astro
    ├── stripe.astro
    ├── cloudflare.astro
    ├── convex.astro
    ├── checkfront.astro
    ├── oms.astro
    └── blueprint.astro

public/
├── favicon.ico
├── favicon.svg
├── apple-touch-icon.png
├── og-default.jpg             ← 1200×630, dot-grid + gradient background, Jams logo + headline
├── robots.txt
└── llm.txt
```

---

## SEO requirements

### Every page
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- `<meta name="robots" content="index, follow">` on all pages
- Canonical URL
- Favicon set: `/favicon.ico`, `/favicon.svg`, `/apple-touch-icon.png`
- OG image fallback: `/og-default.jpg`

### Open Graph
```
og:type — website (article for blog posts)
og:site_name — Jams
og:title, og:description, og:image, og:url
twitter:card — summary_large_image
twitter:site — @jamsdotio
```

### Schema markup
- Sitewide: `Organization` + `WebSite` with `SearchAction`
- Case studies: `BreadcrumbList`
- Blog posts: `Article`
- Landing pages: `Service`

### Title tag formula
- Homepage: `Jams — Custom Software and AI for Operators and Founders`
- Case studies: `[Project Name] — [One-line result] | Jams`
- Blog posts: `[Post Title] | Jams`
- Landing pages: `[Vertical/Tool] Software Development | Jams`
- FAQs: `Frequently Asked Questions | Jams`

### Meta descriptions
150–160 characters. Specific outcome or value prop. No generic filler.

### Performance targets
- Lighthouse 90+ across Performance, Accessibility, Best Practices, SEO
- LCP under 2.5s, CLS under 0.1
- All images via Astro `<Image>` component with explicit width/height and descriptive alt text

---

## SEOHead component contract

```astro
---
interface Props {
  title: string;
  description: string;
  ogImage?: string;       // falls back to /og-default.jpg
  canonical?: string;     // defaults to current URL
  schema?: object;        // JSON-LD
  noindex?: boolean;      // default false
}
---
```

---

## Tailwind config

- Colors, font families, font sizes, radii, shadows, and transitions all extended in `tailwind.config.mjs`
- Dark mode: `class` strategy — but dark sections on the marketing site use `background: #111` inline, not the `.dark` class
- Typography plugin: yes
- Primary CTA is defined in `global.css` as `.btn-primary`:
  ```css
  .btn-primary {
    background: #F55D11;
    color: #fff;
    border-radius: 8px;
  }
  .btn-primary:hover {
    background: #D94D0A;
  }
  ```

---

## Analytics

PostHog snippet in `BaseLayout.astro` on every page. Track: page views, CTA clicks (workshop booking), form submissions.

---

## Astro config

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://jams.agency',
  output: 'hybrid',
  adapter: vercel(),
  integrations: [tailwind(), sitemap()],
});
```

`output: 'hybrid'` allows static pages alongside server-rendered API routes (e.g. `/api/subscribe`). All pages included in sitemap except `/start`.

---

## Content voice

- Founder-to-founder. Direct, warm, concrete. No agency-speak.
- Sentence case everywhere (including headings and nav items).
- No emoji. No exclamation points.
- Contractions on: "we're", "it's", "that's".
- Numbers are specific and dollarized: $3,500, $5,000/month, 8 weeks.
- Copy status per page is tracked in the master reference file. Pages marked "COPY NEEDED" get placeholder structure only — do not invent copy.

---

## Build order

When implementing pages, follow this priority:
1. Boilerplate setup (Astro + Tailwind + dependencies + font loading + BaseLayout)
2. `SEOHead`, `Nav`, `Footer`, `CTASection` components
3. Homepage (`/`) — full copy available
4. FAQs (`/faqs`) — full copy available
5. Case studies with copy: The Fold, DropCar, Emendu, The Arena, Red Horse Mountain Ranch
6. Blog post template + Blog index template
7. `/start` page
8. `/hospitality` landing page
9. Remaining pages (stubs for "COPY NEEDED" pages)
10. `robots.txt`, `llm.txt`, sitemap config, OG image

---

## Key decisions

- Geist loaded from Google Fonts CDN (`global.css`); only font in use on the marketing site
- `/start` is the canonical booking page — all CTAs site-wide link to it
- Blog posts live as `.astro` files
- Dark sections use `background: #111` inline — there is no site-wide dark mode toggle
- `design.md` in the repo root is the single source of truth for all visual decisions
