---
version: live
name: Jams
description: Design system for Jams Agency — the AI and software team for founders who need the right thing built. Source of truth is the live jams.agency website (Astro 4 + Tailwind CSS 3, deployed on Vercel).
colors:
  bg: "#FFFFFF"
  bg-muted: "#F3F3F5"
  bg-section-grey: "#F3F3F3"
  bg-inverse: "#111111"
  fg: "#171717"
  fg-body: "#1A1A1A"
  fg-muted: "#404040"
  fg-subtle: "#737373"
  fg-faint: "#A0A0A3"
  fg-on-dark: "#FEFEFE"
  fg-on-dark-muted: "#CCCCCC"
  fg-on-dark-soft: "#EBEBED"
  border: "#E3E3E5"
  border-soft: "rgba(227,227,229,0.5)"
  border-dark: "rgba(255,255,255,0.1)"
  orange: "#F55D11"
  orange-hover: "#D94D0A"
  light-orange: "#F9AA43"
  light-violet: "#A85DFF"
  skyline: "#C3E8DA"
  jams-black: "#0F1112"
  violet-500: "#8B5CF6"
  primary-gradient: "linear-gradient(180deg, #864ACC 0%, #A85CFF 51%, #864ACC 100%)"
  primary-highlight: "#CC9EFF"
typography:
  font: Geist
  weights: [400, 500, 600, 700]
  display:
    fontSize: "clamp(64px, 8vw, 128px)"
    lineHeight: 0.95
    letterSpacing: "-0.02em"
    fontWeight: 500
  h1:
    fontSize: "clamp(40px, 5.5vw, 80px)"
    lineHeight: 1.0
    letterSpacing: "-0.025em"
    fontWeight: 500
  h2:
    fontSize: "clamp(36px, 4.2vw, 60px)"
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    fontWeight: 500
  h3:
    fontSize: 28px
    lineHeight: 1.3
    letterSpacing: "-0.01em"
    fontWeight: 500
  h4:
    fontSize: 18px
    lineHeight: 1.25
    letterSpacing: "-0.02em"
    fontWeight: 500
  body-hero:
    fontSize: 22px
    lineHeight: 1.5
    letterSpacing: "-0.01em"
    fontWeight: 400
  body-lg:
    fontSize: 20px
    lineHeight: 1.55
    letterSpacing: "-0.01em"
    fontWeight: 400
  body:
    fontSize: 17px
    lineHeight: 1.65
    letterSpacing: "-0.01em"
    fontWeight: 400
  p-s:
    fontSize: 15px
    lineHeight: 1.5
    fontWeight: 400
  eyebrow:
    fontSize: 12px
    lineHeight: 1
    letterSpacing: "0.12em"
    fontWeight: 500
    textTransform: uppercase
rounded:
  xs: 4px
  sm: 8px
  DEFAULT: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  pill: 999px
shadows:
  card: "0 2px 10px 0 rgba(0,0,0,0.06)"
  card-hover: "0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10)"
  inset-top: "inset 0 2px 2px 0 rgb(254,254,254)"
  pill: "0 2px 10px 0 rgba(0,0,0,0.06), inset 0 2px 2px 0 rgb(254,254,254)"
  sticky: "2px 3px 8px rgba(0,0,0,0.1)"
  sticky-lg: "3px 4px 12px rgba(0,0,0,0.1)"
  primary: "inset 2px 2px 4px 0 #CC9EFF"
animation:
  ease: "cubic-bezier(0.22, 1, 0.36, 1)"
  fast: 120ms
  base: 200ms
---

## Overview

Jams is a technical brand with human warmth. The design language is precise, direct, and confident — no decoration for its own sake. Every visual decision serves clarity or builds trust.

**The website is the single source of truth** for all brand and design decisions. Any marketing piece, deck, or printed material should be derived from the patterns documented here.

**One typeface. Two oranges. Restrained everything else.** The brand's personality comes from composition, rotation, and a warm amber accent — not visual complexity.

---

## Typography

**Geist is the only typeface across all surfaces.** Regular (400), Medium (500), SemiBold (600), Bold (700). No serif, no mixing.

Load from Google Fonts:
```
https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap
```

Instrument Serif is loaded as a font asset in the codebase but is not applied anywhere on the marketing site. Do not use it.

### Type scale

Sizes are px (or clamp for fluid headings). Line-heights are unitless. Letter-spacing in em.

| Token | Size | Line-height | Letter-spacing | Weight | Usage |
|---|---|---|---|---|---|
| h1 | clamp(40–80px) | 1.0 | -0.025em | 500 | Page hero titles |
| h2 | clamp(36–60px) | 1.1 | -0.02em | 500 | Section headings |
| h3 | 28px | 1.3 | -0.01em | 500 | Card titles, sub-section heads |
| h4 | 18px | 1.25 | -0.02em | 500 | Grid cell heads, sidebar labels |
| body-hero | 22px | 1.5 | -0.01em | 400 | Hero paragraphs, primary body |
| body-lg | 20px | 1.55 | -0.01em | 400 | Pricing text, editorial paragraphs |
| body | 17px | 1.65 | -0.01em | 400 | Dark section body, supporting copy |
| p-s | 15px | 1.5 | — | 400 | Metadata, footer links, labels |
| eyebrow | 12px | 1 | +0.12em | 500 | Section markers (always uppercase) |

All headings share `letter-spacing: -0.02em` from the base reset unless overridden above. Body copy uses `-0.01em` — slightly compressed, never wide-tracked.

**Eyebrow pattern** — uppercase, `letter-spacing: 0.12em`, `color: #737373`. Used for section category labels and breadcrumbs. Example: `Our work`, `How it works`.

---

## Colors

### The two oranges — understand both

This is the most important color distinction in the system. There are two separate orange values with completely different roles:

| Name | Hex | Role |
|---|---|---|
| `--orange` | `#F55D11` | Navigation CTA button, bullet points in lists, contact link hover, primary action contexts |
| `--light-orange` | `#F9AA43` | Sticky notes, testimonial cards, sticky-style CTA buttons, warm accent surfaces |

**`#F55D11`** is the true brand orange — saturated, energetic, used on interactive controls.
**`#F9AA43`** is the light amber — warmer, softer, used on tactile paper-like surfaces (sticky notes, testimonial cards) and on CTA buttons that appear within those sticky contexts.

Never swap them. A sticky note in `#F55D11` is wrong. A nav button in `#F9AA43` is wrong.

### Semantic tokens

| Token | Value | Role |
|---|---|---|
| `--bg` | `#FFFFFF` | Default page background |
| `--bg-section-grey` | `#F3F3F3` | Alternating section background (feels section, process section) |
| `--bg-muted` | `#F3F3F5` | Subtle fills, input backgrounds |
| `--bg-inverse` | `#111111` | Dark sections (Why Jams, Pricing, dark hero on interior pages) |
| `--fg` | `#171717` | High-contrast headings |
| `--fg-body` | `#1A1A1A` | Primary body text on light sections |
| `--fg-muted` | `#404040` | Standard body text |
| `--fg-subtle` | `#737373` | Labels, secondary metadata |
| `--fg-faint` | `#A0A0A3` | Placeholder, disabled |
| `--fg-on-dark` | `#FEFEFE` | Headings on dark sections |
| `--fg-on-dark-muted` | `#CCCCCC` | Body text on dark sections |
| `--fg-on-dark-soft` | `#EBEBED` | Softer body text on dark (pricing section) |
| `--border` | `#E3E3E5` | Standard hairline |
| `--border-soft` | `rgba(227,227,229,0.5)` | Card and chip borders |
| `--border-dark` | `rgba(255,255,255,0.1)` | Borders inside dark sections |

### Violet (brand primary, used for accents and process numbers)

`#F5F3FF` (50) → `#A78BFA` (400) → **`#8B5CF6` (500, anchor)** → `#7C3AED` (600) → `#6D28D9` (700)

`--light-violet: #A85DFF` — used specifically for process step numbers (01/02/03).

`--primary-gradient: linear-gradient(180deg, #864ACC 0%, #A85CFF 51%, #864ACC 100%)` — used on accent elements, not on buttons.

---

## Layout

- **Container max-width:** 1280px, centered, `margin: 0 auto`
- **Desktop padding:** 48px horizontal
- **Tablet (≤768px):** 24px horizontal
- **Mobile (≤480px):** 16px horizontal
- **Section vertical padding:** 128px desktop / 64px tablet / 48px mobile
- **`.section` utility:** `py-[100px]` — used on standardized pages

### Hero layout variants

**Homepage (2-column split):** Large fluid heading centered above the grid, then two equal columns: editorial body copy left, liquid glass CTA card right. Gap: 80px. Collapses to single column at 768px with 32px gap.

**Interior pages (single wide column):** Large fluid heading left-aligned, body paragraphs below. No right column. Used on shaping, blog, landing pages.

---

## Backgrounds

### 1. Flat white (default)
`#FFFFFF` — most content sections, case study cards, the footer.

### 2. Section grey
`#F3F3F3` — alternating light sections that need separation from white without going dark. Used on the "It probably feels like this" and "A process crafted for operators" sections. Slightly cooler than white.

### 3. Dot grid (hero)
Applied via `.hero-bg` on the page hero area. A dot pattern layered over a white-to-lavender gradient:

```css
background:
  radial-gradient(circle, #C8C8CC 1.5px, transparent 1.5px) 0 0 / 24px 24px,
  linear-gradient(in oklab 180deg, oklab(100% 0 0) 14%, oklab(84.3% 0.005 -0.016) 120%);
```

Dot color: `#C8C8CC`. Dot radius: `1.5px`. Grid: `24px × 24px`. The gradient beneath fades from pure white at the top to barely-perceptible cool lavender at the bottom. Used only on the hero, not throughout the page.

The sticky board section also uses a simplified version of the dot grid as its container background:
```css
background: radial-gradient(circle, #C8C8CC 1.5px, transparent 1.5px), #fff;
background-size: 24px 24px, 100% 100%;
```

### 4. Dark sections (`#111`)
`background: #111` — used for Why Jams, Pricing, and dark hero sections on interior pages. This is a very dark near-black with a warmer cast than pure black. Inside dark sections all text and border tokens shift to their dark-context values (see Dark context below).

### 5. CTA photo background
The recurring CTA section (`CTASection.astro`) uses a full-bleed photo background (`/cta-bg.jpg`, an orange-to-pink-to-violet gradient image) with a dark glass card overlaid. This is a JPG, not a CSS gradient.

---

## Dark context

When a section has `background: #111`, apply these token overrides:

```css
--fg:        #FEFEFE;          /* headings */
--fg-muted:  #CCCCCC;          /* body paragraphs */
--fg-soft:   #EBEBED;          /* softer body (pricing) */
--border:    rgba(255,255,255,0.1);
```

Dark section internal grid borders also use `rgba(255,255,255,0.1)`.

---

## Elevation and shadows

### Standard card (dual-layer)
Every elevated surface uses two layers together — outer drop + inner top highlight:

```
outer:  0 2px 10px 0 rgba(0,0,0,0.06)
inset:  inset 0 2px 2px 0 rgb(254,254,254)
```

The inset highlight is the signature detail. Never omit it.

### Card hover
Shadow lifts; no scale transform:
```
0 10px 15px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.10)
```

### Sticky note shadow
```
2px 3px 8px rgba(0,0,0,0.1)
```

### Sticky board shadow
```
0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)
```

### CTA glass card shadow
```
0 8px 40px rgba(0,0,0,0.25),
inset 0 1.5px 0 rgba(255,255,255,0.35),
inset 0 -1px 0 rgba(255,255,255,0.1)
```

---

## Corner radii

Scale: `4px / 8px / 12px (default) / 16px / 24px / 32px / 999px (pill)`

| Value | Used for |
|---|---|
| 4px | Sticky notes, testimonial cards, sticky CTA buttons |
| 8px | Standard buttons, inputs |
| 16px | Case study cards, process cards, section containers, dark grid wrapper |
| 24px | Liquid glass (hero card, CTA card) |
| 999px | Chips, tags |

---

## Components

### Primary button (`.btn-primary`)
Used in standard page CTAs and the CTASection component.

```css
background: #F55D11;
color: #fff;
padding: 12px 20px;
border-radius: 8px;
font-size: 18px;
font-weight: 500;
```

Hover: background `#D94D0A`. Arrow icon slides in from left, label slides right. Transition: `120ms cubic-bezier(0.22, 1, 0.36, 1)`.

### Ghost button (`.btn-ghost`)
```css
background: transparent;
border: 1px solid rgba(0,0,0,0.18);
border-radius: 8px;
font-size: 15px;
font-weight: 500;
padding: 12px 20px;
color: #111;
```

Hover: `background: rgba(0,0,0,0.05)`, `border-color: rgba(0,0,0,0.28)`.

### Sticky-style button (`.sticky-btn`)
Used inside the hero liquid glass card and the process section. Looks like a sticky note — amber background, slight rotation, paper shadow.

```css
background: #F9AA43;
color: #111;
padding: 12px 24px;
border-radius: 8px;
font-size: 18px;
font-weight: 500;
transform: rotate(-1deg);
box-shadow: 2px 5px 14px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06);
```

Hover: `rotate(-1deg) scale(1.01)`, shadow lifts. Arrow slides in from left on hover (same pattern as `.btn-primary`).

### Liquid glass card (hero variant, `.liquid-glass`)
Used in the homepage hero right column. Light and airy — high white fill opacity.

```css
background: rgba(255, 255, 255, 0.38);
backdrop-filter: blur(28px) saturate(180%);
border-radius: 24px;
border: 1px solid rgba(255, 255, 255, 0.7);
box-shadow:
  0 8px 32px rgba(0, 0, 0, 0.08),
  inset 0 1.5px 0 rgba(255, 255, 255, 0.9),
  inset 0 -1px 0 rgba(255, 255, 255, 0.25),
  inset 1px 0 0 rgba(255, 255, 255, 0.5),
  inset -1px 0 0 rgba(255, 255, 255, 0.5);
```

Add `::before` shimmer:
```css
background: linear-gradient(135deg,
  rgba(255,255,255,0.28) 0%,
  rgba(255,255,255,0.06) 50%,
  rgba(180,160,255,0.06) 100%
);
```

Requires the dot grid background behind it to read correctly.

### CTA glass card (dark variant, `.jams-cta-card`)
Used in `CTASection.astro` over the photo background. Much darker fill than the hero variant — reads as a semi-transparent dark pane.

```css
background: rgba(255, 255, 255, 0.10);
backdrop-filter: blur(32px) saturate(160%);
border-radius: 24px;
border: 1px solid rgba(255, 255, 255, 0.22);
box-shadow:
  0 8px 40px rgba(0,0,0,0.25),
  inset 0 1.5px 0 rgba(255,255,255,0.35),
  inset 0 -1px 0 rgba(255,255,255,0.1);
padding: 72px 56px;
max-width: 820px;
text-align: center;
```

### Sticky notes (`.sticky`)
Used in the "It probably feels like this" section. Scattered across a contained whiteboard-style area. 11 notes per section, placed with `position: absolute` at percentage-based coordinates.

```css
background: #F9AA43;
padding: 14px 16px;
border-radius: 4px;
font-size: 15px;
font-weight: 500;
line-height: 1.45;
color: #111;
box-shadow: 2px 3px 8px rgba(0,0,0,0.1);
max-width: 210px;
```

Rotation range: `-6deg` to `+5deg`. Each note has a different rotation value set inline. They overlap naturally — the arrangement should feel organic, not grid-like.

**Sticky board container:**
```css
position: relative;
height: 500px;
background:
  radial-gradient(circle, #C8C8CC 1.5px, transparent 1.5px),
  #fff;
background-size: 24px 24px, 100% 100%;
border-radius: 16px;
box-shadow: 0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
```

The board sits inside a `#F3F3F3` section background.

### Testimonial cards (`.testimonial-sticky`)
Large-format sticky notes used for customer quotes. Same amber color and corner radius as regular sticky notes, but full card width with more internal padding.

```css
background: #F9AA43;
padding: 32px;
border-radius: 4px;
box-shadow: 3px 4px 12px rgba(0,0,0,0.1);
```

Displayed in a 2-column grid. Each card has a slight rotation applied inline: one at `-1.8deg`, one at `+2.2deg`. A horizontal rule (`border-top: 1px solid rgba(0,0,0,0.12)`) separates the quote from the attribution below it.

### Process steps (01/02/03)
Three white cards on a `#F3F3F3` section background, displayed in a 3-column grid.

```css
background: #fff;
border-radius: 16px;
padding: 32px 28px;
```

Step number: `font-size: 40px; font-weight: 500; color: #A85DFF; line-height: 1;`

The first card (step 01) contains a `.sticky-btn` CTA at the bottom. Cards 02 and 03 contain only text.

### Dark grid ("Why Jams" pattern)
A bordered container on a `#111` background holding a 2×2 text grid. The outer wrapper has a `1px solid rgba(255,255,255,0.1)` border with `border-radius: 16px`. Internal cells are separated by the same `rgba(255,255,255,0.1)` border. Each cell has `40px` padding.

Cell structure: `h4` heading (18px, 500, `#fff`) + body paragraph (17px, 1.65 line-height, `#CCCCCC`).

### Case study cards
`background: #F6F6F6`, `border-radius: 16px`, `overflow: hidden`. Full-bleed image at the top (fixed `height: 360px`, `object-fit: cover`). Content area: `padding: 28px 28px 36px`. Client name in `#555`, 16px, 400 weight. Heading 28px, 500 weight. List items use `#F55D11` bullet dots.

### Chip (`.chip`)
```css
border-radius: 999px;
border: 0.5px solid rgba(227,227,229,0.5);
box-shadow: 0 2px 10px 0 rgba(0,0,0,0.06), inset 0 2px 2px 0 rgb(254,254,254);
font-size: 12px;
font-weight: 500;
```

### Eyebrow label (`.eyebrow`)
```css
font-size: 12px;
font-weight: 500;
letter-spacing: 0.12em;
text-transform: uppercase;
color: #737373;
```

### Read link (`.read-link`)
Underlined text link with a slide-in arrow on hover. The underline is always visible (a `1px` absolute-positioned rule). On hover, an arrow icon slides in from the left and the label nudges right by 4px.

```css
font-size: 16px;
font-weight: 400;
letter-spacing: -0.01em;
color: #0F1112;
```

---

## Rotation

Rotation is used deliberately on specific elements to create tactile, paper-like energy. It is never applied to structural layout elements (sections, grids, nav, cards).

| Element | Rotation |
|---|---|
| Sticky notes | -6deg to +5deg (varied per note) |
| Testimonial cards | -1.8deg / +2.2deg (alternating) |
| Sticky-style CTA button | -1deg (always) |
| Sticky CTA overlay button | -2.5deg (always) |

All rotated elements use the same transition timing as everything else: `120–200ms cubic-bezier(0.22, 1, 0.36, 1)`.

---

## Page section rhythm

Both homepage and interior pages follow this structural sequence:

1. **Hero** — dot grid background, fluid heading, body copy, CTA. 2-col on homepage, single wide on interior pages.
2. **Credentials bar** (homepage only) — white background, partner badges + client logos, 32px vertical padding.
3. **Light content section** — white or `#F3F3F3`, main feature content.
4. **Dark section** (`#111`) — "Why Jams" or "Pricing" or interior-page hero variant.
5. **Light content section** — white or `#F3F3F3`.
6. **Dark section** (`#111`) — second dark beat, usually pricing or a bold statement.
7. **CTA section** — full-bleed photo background (`/cta-bg.jpg`) with dark glass card.
8. **Footer** — white background, newsletter form left, contact right, nav links below.

White and grey (`#F3F3F3`) sections alternate to create rhythm without using a border.

---

## Navigation

Full-width fixed bar, not a floating capsule. `background: rgba(255,255,255,0.72)`, `backdrop-filter: blur(20px)`, `border-bottom: 1px solid rgba(0,0,0,0.06)`. Logo left, nav links right, "Book a call" orange button far right. Link hover: underline slides up from below (`opacity 0→1`, `translateY 4px→0`). No uppercase, no letter-spacing on nav links — 16px, 400 weight, `-0.01em`.

---

## Animation

Single easing curve used everywhere:

```
ease: cubic-bezier(0.22, 1, 0.36, 1)
fast: 120ms   ← background fills, color shifts, button press
base: 200ms   ← arrows, underlines, opacity fades, position nudges
```

No bounce. No spring. No scroll-jacking. The only scroll-triggered animation is a subtle reveal on case study cards.

---

## Iconography

**Phosphor Icons** — line weight, regular, `currentColor`. CDN:
```
https://unpkg.com/@phosphor-icons/web@2.1.1
```

Usage: `<i class="ph ph-arrow-right"></i>`. Size: 16–24px.

**Lucide** is also loaded as fallback (`https://unpkg.com/lucide@latest`). Both libraries coexist. Prefer Phosphor for new work.

No emoji. No unicode arrows in isolation.

---

## Content voice

- Founder-to-founder. Direct, warm, concrete. No agency-speak.
- Sentence case everywhere — headings, nav, buttons.
- No emoji. No exclamation points.
- Contractions on: "we're", "it's", "that's".
- Numbers are specific and dollarized: $3,500 / $5,000/month / 8 weeks.
- No em dashes (—). Rewrite the sentence instead.

---

## Do's and Don'ts

**Do:**
- Use `#F9AA43` for sticky notes, testimonial cards, and sticky-style buttons — always together as a system
- Use `#F55D11` for nav buttons, bullet points, and standard CTAs only
- Use the dot grid only on hero sections — not throughout the page
- Apply `#F3F3F3` as the alternating light section background (not grey-tinted white — it's a specific value)
- Rotate sticky notes between -6deg and +5deg, testimonial cards at ±1.8–2.2deg, sticky buttons at -1deg
- Use the dual-layer shadow (outer drop + inset-top highlight) on all standard elevated cards
- Apply `#111` for dark sections (not `#0B0B0B` — this is slightly warmer)
- Keep process step numbers in `#A85DFF` (violet), not orange

**Don't:**
- Use Instrument Serif — it's loaded but not applied anywhere on the site
- Use the violet gradient (`--primary-gradient`) on CTA buttons — that's for accent elements only
- Apply rotation to structural layout elements (sections, grids, containers)
- Use yellow (`#FFF9C4`) for sticky notes — the color is `#F9AA43`
- Use `#F55D11` for sticky notes or testimonial cards
- Scale cards on hover — only lift the shadow
- Use more than one primary CTA per section
- Apply the dark glass card spec on a light background — it needs the photo/dark backdrop to read
- Add bounce, spring, or scroll-jacking to any animation
