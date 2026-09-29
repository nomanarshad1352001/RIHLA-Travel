# Rihla Travel UK

> **Your Journey. Our Care.** — رحلتك · رعايتنا
>
> A premium, conversion-focused website & client-experience platform for a UK-based Islamic travel brand:
> **Umrah · Hajj · Family & Group · Ziyarat · Visa Assistance**

Built with **Next.js 16 + TypeScript + Tailwind CSS v4 + Framer Motion** — a cinematic, motion-rich,
multi-page experience with a 4K Kaaba video hero, an interactive Journey Planner wizard, infinite
testimonial rails, and a full pilgrim knowledge centre.

**No database. No CMS. No API keys.** All content is elegant dummy data + Pexels/Unsplash photography.

---

## ✦ Quick Start

```bash
npm install        # install dependencies
npm run dev        # start dev server  → http://localhost:3000
npm run build      # production build  (13 routes, all static)
npm start          # serve the production build
```

No environment variables are required to run the site.
*(The template's `.env` contains a `DATABASE_URL` for the starter kit's health route only —
the website itself never touches a database.)*

---

## ✦ The 10 Pages

| Route | Page | Highlights |
|---|---|---|
| `/` | **Home** | 4K Kaaba video hero (parallax), services marquee, Rihla Care path, featured packages, hadith quote band, **dual-row infinite testimonial rail**, Sacred Gallery, planner teaser |
| `/umrah` | **Umrah Packages** | 6 packages with animated category filters, inclusions grid, inspected-hotels showcase, preparation guides, 8-question FAQ |
| `/hajj` | **Hajj Packages** | 3 package tiers, animated Days-of-Hajj timeline, free seminar band, Hajj FAQs |
| `/family-group` | **Family & Group** | 6 traveller pillars, tailoring process, elderly-parents editorial, reviews |
| `/rihla-care` | **Rihla Care** | The signature **PLAN → PREPARE → TRAVEL → SUPPORT → RETURN** experience + measurable promises |
| `/journey-planner` | **Journey Planner** | 6-step animated wizard → validated brief → personal reference number |
| `/resources` | **Rihla Resources** | 12 guides, category filters, in-page modal reader, Arabic duas (RTL typography) |
| `/why-rihla` | **Why Rihla** | Five commitments + "industry vs Rihla" comparison table + stats |
| `/about` | **About** | Founding story, Arabic value cards, 8-year timeline, vision band |
| `/contact` | **Contact** | 4 contact methods, validated enquiry form (URL-prefilled from package CTAs), office panel |

---

## ✦ Feature Highlights

- **Cinematic hero** — 4K pilgrimage video with scroll parallax + two-line staggered headline reveal
- **Railing testimonial slider** — two infinite rows sliding in opposite directions, edge-fade masks, pause-on-hover
- **Sacred Gallery** — masonry photo wall with Arabic-caption hover reveals
- **Journey Planner** — multi-step wizard (journey → dates → travellers → comfort → details → review) with live summary sidebar, validation, and reference-numbered confirmation
- **Conversion everywhere** — sticky *Plan Your Rihla* CTA, floating WhatsApp button with deep-linked messages, per-package quote buttons that pre-fill the contact form
- **Premium Islamic design system** — deep navy / Islamic emerald / gold / cream, Cormorant Garamond display serif, Amiri Arabic calligraphy, 8-point-star geometric patterns
- **Motion with manners** — blur-fade scroll reveals, animated counters, Ken Burns imagery, modal transitions, and `prefers-reduced-motion` support
- **Accessible & SEO-ready** — semantic landmarks, skip link, ARIA states, per-page metadata, JSON-LD `TravelAgency` schema, SVG favicon

---

## ✦ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2 (App Router, RSC, static prerendering) |
| Language | TypeScript 5.9 (strict) |
| UI | React 19.2 |
| Styling | Tailwind CSS 4.1 — custom `@theme` tokens |
| Animation | Framer Motion 12 + CSS keyframes |
| Icons | Lucide React + custom inline SVG glyphs |
| Fonts | `next/font/google`: Cormorant Garamond · Manrope · Amiri |
| Media | Pexels / Unsplash URL-based imagery (+ Pexels 4K video) |
| Data | `src/lib/data.ts` — central typed dummy dataset |

---

## ✦ Project Structure

```
├── README.md                  ← you are here
├── PROJECT-OVERVIEW.md        ← full product brief & buyer documentation
├── src
│   ├── app
│   │   ├── layout.tsx         ← fonts, navbar, footer, WhatsApp float, JSON-LD
│   │   ├── page.tsx           ← Home
│   │   ├── globals.css        ← Tailwind v4 theme: palette, fonts, keyframes, buttons
│   │   ├── icon.svg           ← gold 8-point-star favicon
│   │   ├── umrah/page.tsx
│   │   ├── hajj/page.tsx
│   │   ├── family-group/page.tsx
│   │   ├── rihla-care/page.tsx
│   │   ├── journey-planner/page.tsx
│   │   ├── resources/page.tsx
│   │   ├── why-rihla/page.tsx
│   │   ├── about/page.tsx
│   │   └── contact/page.tsx
│   ├── components
│   │   ├── Navbar.tsx · Footer.tsx · WhatsAppFloat.tsx
│   │   ├── HomeHero.tsx       ← video hero with parallax
│   │   ├── TestimonialRail.tsx← infinite dual-direction review slider
│   │   ├── SacredGallery.tsx  ← masonry photo wall
│   │   ├── PlannerClient.tsx  ← 6-step journey wizard
│   │   ├── ResourcesBrowser.tsx ← guide grid + modal reader
│   │   ├── ContactForm.tsx    ← validated enquiry form
│   │   ├── PackageCard.tsx · PackageGrid.tsx · FAQ.tsx · Testimonials.tsx
│   │   ├── PageHero.tsx · CTABand.tsx
│   │   ├── decor.tsx          ← patterns, rules, headings, marquee
│   │   ├── motion.tsx         ← Reveal / Stagger / Counter primitives
│   │   └── icons.tsx          ← string → Lucide icon map
│   └── lib
│       ├── data.ts            ← ALL dummy content (packages, reviews, guides, FAQs…)
│       ├── site.ts            ← contact details, nav, WhatsApp link builder
│       └── utils.ts           ← cn() classnames helper
```

---

## ✦ Customisation Guide

| What you want to change | Where |
|---|---|
| Packages & prices | `src/lib/data.ts` → `UMRAH_PACKAGES`, `HAJJ_PACKAGES` |
| Testimonials / reviews | `src/lib/data.ts` → `TESTIMONIALS` |
| Guides & duas | `src/lib/data.ts` → `RESOURCES` |
| FAQs | `src/lib/data.ts` → `UMRAH_FAQS`, `HAJJ_FAQS` |
| Phone, WhatsApp, email, address | `src/lib/site.ts` → `SITE` |
| Images (swap any photo) | `src/lib/data.ts` → `IMG` |
| Colours & fonts | `src/app/globals.css` → `@theme` block |
| Hero video | `src/lib/data.ts` → `IMG.heroVideo` / `IMG.heroPoster` |

Everything is typed — your editor will autocomplete and validate every content edit.

---

## ✦ Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Development server with HMR |
| `npm run build` | Optimised production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npx next typegen` | Regenerate route types |

---

## ✦ Deployment

All 13 routes prerender statically — deploy to any Next.js-compatible host
(Vercel, Netlify, a Node server, or a container). No environment variables,
databases, or secrets are needed.

```bash
npm run build && npm start
```

---

## ✦ Notes & Credits

- **Dummy data disclaimer:** all packages, prices, reviews, statistics and contact
  details are illustrative placeholder content for demonstration purposes.
- **Photography & video:** courtesy of Pexels contributors (Earth Photart, Yasir Gürbüz,
  Sami TÜRK, Tarik Sami, Samet Kaplan and others) — replace with licensed client media
  before commercial launch.
- Typography: Cormorant Garamond, Manrope & Amiri via Google Fonts (self-hosted by Next).

---

<p align="center">
  <strong>RIHLA TRAVEL UK</strong><br/>
  <em>Your Journey. Our Care.</em> · رحلتك · رعايتنا
</p>
