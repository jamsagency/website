# Jams Agency — Design System

> Jams is a creative agency that helps businesses boost revenue through cohesive product design and development. We build websites, web apps, mobile apps and enterprise AI through our business-first approach.

This folder contains brand assets (logos, fonts), a CSS token file, and UI kit HTML references. It is a **supporting resource** — the canonical design specification is `design.md` in the repository root. When values here conflict with `design.md`, trust `design.md`.

---

## Index

| File / folder | What's in it |
|---|---|
| `README.md` | This file — asset inventory and content fundamentals |
| `colors_and_type.css` | CSS custom properties. Referenced but partially superseded by `src/styles/global.css` — see note below. |
| `fonts/` | Font files — Instrument Serif, Neue Haas Grotesk Display Pro |
| `assets/logos/` | Jams wordmark + isotype, black & white variants |
| `ui_kits/marketing_site/` | Marketing website UI kit (desktop + mobile) — visual reference only |
| `ui_kits/web_app/` | Jams web-app template kit (dashboard chrome, table, chart) |

### Note on `colors_and_type.css`

This file defines CSS custom properties and `@font-face` rules. It was built from an earlier Figma spec. The live site overrides many of its values in `src/styles/global.css` and `tailwind.config.mjs`. When building pages, use the live CSS files as the source, not this file. It is kept here for the font assets and logo references.

---

## Who Jams is

Jams is a **creative agency for non-technical founders** — industry experts who know their business inside-out but lack the software or technical knowledge to solve growth challenges. The agency covers **product strategy, UX design, and development** (including Bubble and enterprise AI). Projects start at 6–8 weeks.

The brand position: founder-to-founder. No technical jargon. Business outcomes first.

---

## Content fundamentals

**Voice is founder-to-founder.** We / you, never "the client" or "our team of experts." Direct, conversational, confident — skip the agency-speak.

**Sentence case everywhere.** Display headings, nav items, button labels, section titles — all sentence case. Exceptions: proper product names (The Fold, Emendu, DropCar, Bubble, Webflow, AWS) and the brand name **Jams**.

**Contractions are on.** "We're", "it's", "that's rarely due to…"

**Punctuation.** Curly apostrophes in all copy. No Oxford comma preference. No em dashes — rewrite the sentence instead.

**Body copy is warm, plain, concrete.** Specific numbers over vague claims. Dollarized: $3,500 / $5,000/month / 8 weeks.

**No emoji. No exclamation points.**

**Tone cheat-sheet**

| ✅ Say it like this | ❌ Not like this |
|---|---|
| "We build websites, web apps, mobile apps and enterprise AI." | "We leverage cutting-edge AI solutions to deliver best-in-class digital experiences." |
| "How much do you charge?" | "Our transparent pricing model" |
| "Book a meeting, no strings attached." | "Schedule a consultation with our experts today!" |
| "Let's talk about your business." | "Get started!" |

---

## Visual foundations

See `design.md` in the repository root for the complete, confirmed visual specification. Below is a summary of the key points.

**One typeface: Geist.** Weights 400, 500, 600, 700. Used across all surfaces on the marketing site. Instrument Serif and Neue Haas Grotesk Display Pro are available as font assets in this folder but are not applied on the live site.

**Two oranges:**
- `#F55D11` — nav CTA, bullets, hover states
- `#F9AA43` — sticky notes, testimonial cards, sticky-style buttons

**Backgrounds (three treatments):**
1. `#FFFFFF` — default page background
2. `#F3F3F3` — alternating section grey
3. `#111` — dark sections (Why Jams, Pricing, interior dark heroes)

**Signature violet gradient** — `linear-gradient(180deg, #864ACC 0%, #A85CFF 51%, #864ACC 100%)` — used on accent elements, not on buttons.

**Dual-layer card shadow** — `0 2px 10px 0 rgba(0,0,0,0.06)` outer + `inset 0 2px 2px 0 rgb(254,254,254)` inner. Always use both together.

**Liquid glass** — hero card: `rgba(255,255,255,0.38)` fill, `blur(28px)`. CTA card: `rgba(255,255,255,0.10)` fill, `blur(32px)`. Full specs in `design.md`.

**Sticky notes** — `#F9AA43`, `border-radius: 4px`, rotation -6deg to +5deg. Testimonial cards use the same style at larger scale.

**Animation** — `cubic-bezier(0.22, 1, 0.36, 1)`, 120–200ms. No bounce, no spring.

**Layout** — 1280px max-width container, 48px desktop padding, 128px section vertical padding.

---

## Iconography

**Phosphor Icons** — line weight, regular, `currentColor`. CDN: `https://unpkg.com/@phosphor-icons/web@2.1.1`. Lucide also loaded as fallback.

No emoji in the UI. No unicode pictograms in isolation.

**Logos** live in `assets/logos/`:
- `jams-logo-black.svg` / `jams-logo-white.svg` — full wordmark
- `jams-logo-iso-black.svg` / `jams-logo-iso-white.svg` — isotype / favicon mark

Use the wordmark in the top-left of the marketing site. Use the isotype for favicons and any space narrower than 80px.

---

## Products represented

Two surfaces live in this system:

1. **Marketing website** (`ui_kits/marketing_site/`) — visual reference for the jams.agency homepage. Desktop 1440px + mobile 390px. Note: token values in the kit may differ from the live site — treat as a layout reference, not a spec.

2. **Web-app template** (`ui_kits/web_app/`) — dashboard chrome (sidebar, top bar, data table, charts) used as the boilerplate for client web apps. Geist is the correct font here too.
