# 📿 PROJECT.md — Rihla Travel UK

> **Your Journey. Our Care.** — رحلتك · رعايتنا
> Premium pilgrimage website & lead-generation platform for a UK Islamic travel brand.

---

## 1 · Executive Summary

**Rihla Travel UK** is a premium, conversion-focused, 10-page marketing and client-experience
website for an Islamic travel agency offering **Umrah, Hajj, Family & Group, Ziyarat and Visa
Assistance** services from the United Kingdom.

The platform is designed to do one thing exceptionally well: make a visitor feel
*"I can trust Rihla with my journey"* — then give them five effortless ways to start a
conversation (Journey Planner wizard, quote CTAs, WhatsApp, phone, enquiry form).

It is delivered as a **fully static, database-free Next.js application**: instant page loads,
zero backend dependencies, and all content managed as typed dummy data — ready to be swapped
for real client content before launch.

---

## 2 · The Problem → The Solution

| Problem (typical Umrah/Hajj agency sites) | Rihla's answer |
|---|---|
| Generic template look → zero brand trust | Bespoke Islamic-luxury design system with Arabic calligraphy & geometric art direction |
| "From £999*" pricing with hidden supplements | No-hidden-charges positioning expressed in every component (itemised quotes, metres-to-Haram claims) |
| A PDF and a phone number as the only funnel | 6-step Journey Planner wizard producing structured, reference-numbered briefs |
| Pilgrims leave to Google "how to do Umrah" | Built-in 12-guide knowledge centre keeps them on-site and builds authority |
| No proof, no personality | 10 review profiles, animated testimonial rails, founding story, values & timeline |

---

## 3 · Target Client (Who Buys This)

1. **UK Umrah & Hajj travel agencies** — established operators whose current WordPress template undersells their service quality.
2. **New Islamic travel founders** — need a launch-ready premium identity: brand, copy, colour system, tone of voice included.
3. **Agencies modernising** — want a Next.js rebuild with a genuine lead funnel instead of a brochure PDF site.
4. **Mosque & community group organisers** — the Family & Group and group-leader flows are purpose-built for them.
5. **White-label buyers / freelancers** — the tokenised design system re-skins to any travel brand in under a day.

**End users:** British Muslim families, first-time pilgrims, elderly travellers needing mobility support,
sisters' groups, and Hajj registrants — people making a £1,000–£10,000 emotional purchase who need
reassurance above everything.

---

## 4 · Brand & Design System

### Palette (Tailwind `@theme` tokens)
| Token | Hex | Use |
|---|---|---|
| `navy-950 → 600` | `#050B16 → #1F4269` | Primary surfaces, text on light |
| `emerald-950 → 500` | `#06251F → #1A8570` | Islamic green accents, bands |
| `gold-100 → 700` | `#F7EDD3 → #87672D` | Luxury highlights, CTAs, rules |
| `cream-50 → 300` | `#FCFAF4 → #E5D8BA` | Light surfaces |
| `wa` | `#22C15E` | WhatsApp actions |

### Typography
- **Cormorant Garamond** — serif display (`font-display`) for headlines, prices, editorial italics
- **Manrope** — UI sans (`font-sans`) for body, labels, buttons
- **Amiri** — Arabic calligraphy (`font-arabic`) for kicker words, duas, watermarks (RTL)

### Signature motifs
- 8-point-star **geometric SVG pattern** (two overlapping squares) at 5–8% opacity on dark sections
- Gold hairline rules with centre diamond, rotated-square icon frames, Arabic watermark words,
  gold-shimmer gradient headline text

### Motion language
- Blur-fade scroll reveals (`Reveal`), staggered grids (`Stagger`), animated `Counter`s
- Hero video **parallax** via `useScroll`/`useTransform`
- Infinite **marquee rails** (services ticker, dual-direction testimonial slider, pause-on-hover)
- Wizard + modal transitions via `AnimatePresence`
- Full `prefers-reduced-motion` fallback

---

## 5 · Sitemap & Page Specifications

| # | Route | Purpose | Key components |
|---|---|---|---|
| 1 | `/` | Brand intro, services, trust, CTAs | Video hero (4K Kaaba, parallax), services marquee, stats counters, Rihla Care path, featured packages, hadith band, commitments strip, **TestimonialRail** (infinite dual-row slider), **SacredGallery** (masonry), resources teaser, planner teaser, CTA band |
| 2 | `/umrah` | Umrah packages & enquiries | Animated package filter (3★/4★/5★/Seasonal), inclusions grid, hotels showcase, prep guides, FAQ accordion |
| 3 | `/hajj` | Hajj packages & enquiries | 3 tiers, Days-of-Hajj timeline (alternating), seminar band, Hajj FAQ |
| 4 | `/family-group` | Tailored pilgrimage positioning | 6 traveller pillars, 4-step tailoring, elderly-parents editorial, dark testimonials |
| 5 | `/rihla-care` | Signature experience page | 5 editorial stages (PLAN→PREPARE→TRAVEL→SUPPORT→RETURN) with imagery, promise band, measurable care stats |
| 6 | `/journey-planner` | Personalised planning funnel | `PlannerClient` — 6-step wizard, live summary sidebar, validation, success screen with reference number |
| 7 | `/resources` | Knowledge centre | `ResourcesBrowser` — 12 guides, 7 category tabs, modal reader (paragraph/heading/list/dua block renderer), hash deeplinks |
| 8 | `/why-rihla` | Trust commitments | 5 numbered commitments, "industry vs Rihla" comparison table, stats, testimonials |
| 9 | `/about` | Story, vision, values | Story split, founder quote, Arabic value cards (Amanah/Ihsan/Sidq/Rahmah), 8-year timeline, vision band |
| 10 | `/contact` | Multi-channel contact | 4 method cards, `ContactForm` (URL-prefilled subject/message), office hours/address, "what happens next" |

Plus: `/api/health` (template healthcheck) and `icon.svg` (gold star favicon).

---

## 6 · Conversion Architecture

Every page funnels into one of five tracked-capable actions:

1. **Plan Your Rihla** → `/journey-planner` — wizard brief with reference `RH-YYYY-XXXXX`
2. **Request a Quote** → `/contact?subject=…&pkg=…` — form pre-filled per package
3. **WhatsApp Rihla** → `wa.me/447700900123?text=…` — context-aware message per entry point
4. **Call** → `tel:` CTAs in navbar, footer, CTA bands, sidebar cards
5. **Get Umrah Advice / Register Interest** → hero secondary CTAs

Post-conversion: animated confirmation screens with reference numbers and WhatsApp continuation.

---

## 7 · Tech Stack & Architecture

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 16.2 (App Router)** | RSC, static prerendering, file routing, image/metadata APIs |
| Language | **TypeScript 5.9 strict** | Typed dummy data, component contracts, safe edits |
| UI | **React 19.2** | Server components by default; client islands only where interactive |
| Styling | **Tailwind CSS 4.1** | Token-first design system in `@theme`; zero runtime CSS-in-JS |
| Animation | **Framer Motion 12** | Physics-based reveals, parallax, layout animations |
| Icons | **Lucide React** + custom SVGs | Consistent stroke set; brand glyphs (WhatsApp/social) inlined |
| Fonts | `next/font/google` self-hosted | Cormorant Garamond · Manrope · Amiri — zero CLS, GDPR-friendly |
| Media | Pexels URLs (+ 4K video) | No asset pipeline; swap URLs to re-skin |
| Data | `src/lib/data.ts` | Single typed source of truth for all content |
| SEO | Metadata API + JSON-LD | Per-page titles/descriptions, TravelAgency schema |

**Rendering strategy:** all 10 pages prerendered statically (`○`) at build — no server, no DB, no env
vars required at runtime.

---

## 8 · Content Model (Dummy Data)

Central `src/lib/data.ts` (typed `as const`):

- `UMRAH_PACKAGES` (6) · `HAJJ_PACKAGES` (3) — slug, category, nights, split, hotels, distance, price, features, image
- `TESTIMONIALS` (10) — quote, name, location, journey
- `RESOURCES` (12) — category, title, excerpt, minutes, icon, rich content blocks (`p | h | list | dua`)
- `UMRAH_FAQS` (8) · `HAJJ_FAQS` (5)
- `CARE_STAGES` (5) · `COMMITMENTS` (5) · `VALUES` (4) · `TIMELINE` (6) · `HAJJ_DAYS` (5)
- `STATS` · `HOTELS` · `FAMILY_PILLARS` · `INCLUSIONS`
- `IMG` — all photography/video URLs via a single `px()` helper

Contact identity in `src/lib/site.ts` (phone, WhatsApp, email, address, hours, nav, airports).

> ⚠️ **All prices, reviews, statistics and contact details are illustrative placeholder content.**

---

## 9 · Quality Attributes

- **Performance** — static pages, remote-optimised imagery (`lazy` below fold), zero DB queries, self-hosted fonts
- **Accessibility** — semantic landmarks, skip-to-content, ARIA on accordion/wizard/modal, focusable menu, alt text, keyboard-dismissable modal (ESC)
- **SEO** — metadata per page, JSON-LD, semantic headings, descriptive anchors
- **Responsiveness** — 360px-first; fullscreen staggered mobile menu; snap-scroll strips; adaptive grids
- **Maintainability** — content/pages/components 3-layer separation; icon-name mapping; single `cn()` util
- **Motion ethics** — `prefers-reduced-motion` disables all animation/parallax

---

## 10 · Validation & Commands

```bash
npm install                                # deps
npm run dev                                # develop
npx next typegen                           # route types
npm exec tsc -- --noEmit --pretty false    # typecheck
npm run build                              # 13 static routes
npm start                                  # serve
```

Latest verified run: typegen ✓ · tsc ✓ (0 errors) · build ✓ (13/13 static) · production server ✓

---

## 11 · Roadmap (Post-Demo)

1. Swap dummy data → CMS (Sanity/Strapi) or Drizzle/Postgres (schema already scaffoldable in `src/db`)
2. Persist Journey Planner & contact submissions (API route + email/CRM webhook)
3. Real review ingestion (Google Reviews API) behind the same rail UI
4. Booking/payment (Stripe deposits) per package
5. Multilingual (EN/AR/UR) via next-intl — Amiri/RTL already proven on Resources page
6. Blog/SEO expansion from the Resources model

---

## 12 · Repository Docs

| File | Purpose |
|---|---|
| `PROJECT.md` | This file — master specification |
| `PROJECT-OVERVIEW.md` | Condensed buyer-facing brief (title, stack, features, clients) |
| `README.md` | Setup, structure, customisation & deployment |

---

<p align="center">
  <strong>RIHLA TRAVEL UK</strong> · رحلة<br/>
  <em>Your Journey. Our Care.</em>
</p>
