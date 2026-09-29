# Rihla Travel UK — Premium Pilgrimage Website

> **"Your Journey. Our Care."**
> A premium, conversion-focused marketing website & client-experience platform for a UK-based Islamic travel brand (Umrah · Hajj · Ziyarat · Family & Group · Visa Assistance).

---

## 1 · Project Title

**Rihla Travel UK — Premium Pilgrimage Experience Platform**
Codename internally: *"Rihla" (رحلة — Arabic for "journey")*

---

## 2 · Tech Stack

| Layer | Technology | Version / Notes |
|---|---|---|
| **Framework** | Next.js (App Router) | 16.2 — React Server Components, static prerendering |
| **Language** | TypeScript | 5.9, strict mode, fully typed data layer |
| **UI Library** | React | 19.2 |
| **Styling** | Tailwind CSS v4 | Custom `@theme` design tokens (navy / emerald / gold / cream) |
| **Animation** | Framer Motion (Motion) | Scroll reveals, parallax hero, staggered grids, animated wizard, modal transitions |
| **Icons** | Lucide React | + custom inline SVG brand glyphs (WhatsApp, socials, 8-point star) |
| **Typography** | next/font/google — self-hosted | Cormorant Garamond (serif display), Manrope (sans UI), Amiri (Arabic calligraphy) |
| **Media** | Pexels / Unsplash (URL-based) | 4K Kaaba hero video + ~25 optimised photographs — no local assets, no CMS needed |
| **Data** | Static dummy dataset | `src/lib/data.ts` — typed, centrally managed, zero database required |
| **SEO** | Next Metadata API | Per-page titles/descriptions, JSON-LD TravelAgency schema, SVG favicon |
| **Quality Gates** | next typegen · tsc --noEmit · next build | All 13 routes prerender static (○) |

**Deliberately not used:** WordPress, a database, or a headless CMS — the brief required fast, dummy-data-driven static delivery with stock photography.

---

## 3 · What the Platform Does

Rihla is a **complete digital shopfront + consultation funnel** for an Islamic travel agency. It:

1. **Sells trust before packages** — a cinematic brand experience (4K Kaaba video hero, Arabic calligraphy, geometric patterns) built to make visitors feel *"I can trust Rihla with my journey."*
2. **Presents 9 dummy travel products** — 6 Umrah packages + 3 Hajj packages with honest pricing, hotel distances in metres, inclusions and animated category filtering.
3. **Generates qualified leads through 5 conversion paths** — Journey Planner wizard, Request-a-Quote CTAs (deep-linked per package), WhatsApp deep links, phone CTAs, and a smart contact form.
4. **Captures structured requirements via the Journey Planner** — a 6-step animated wizard (journey type → dates/flexibility → travellers & mobility needs → airport/hotels/budget → contact details → review) that produces a reference-numbered brief.
5. **Educates pilgrims with a knowledge centre** — 12 guides (Umrah step-by-step, Hajj countdown, packing checklist, duas with Arabic + transliteration, Makkah/Madinah city guides, health & money advice) in a searchable, in-page reading experience.
6. **Operationalises the brand promise** — the signature **Rihla Care: PLAN → PREPARE → TRAVEL → SUPPORT → RETURN** framework has a dedicated editorial page, alongside commitments, storytelling, FAQs and social proof.

### Pages (10)
`/` Home · `/umrah` · `/hajj` · `/family-group` · `/rihla-care` · `/journey-planner` · `/resources` · `/why-rihla` · `/about` · `/contact`

---

## 4 · Who Buys This (Target Client)

**Primary buyer:** UK-based Umrah & Hajj travel agencies and Islamic tour operators who want to look as trustworthy online as they are offline — replacing template WordPress sites that undersell them.

Also fits:
- **New travel brand founders** needing a launch-ready premium identity (copy, colour system, tone — all included).
- **Established agencies** wanting a modern Next.js rebuild with a proper lead funnel instead of a brochure site.
- **Muslim community organisations / mosque groups** organising group pilgrimages (the Family & Group + group-leader flows are built for them).
- **White-label / agency resale** — the design system and dummy-data architecture re-skins to any travel brand in under a day.

**End user:** British Muslim families, first-time pilgrims, elderly travellers, sisters' groups and Hajj registrants — people making an expensive, emotional, once-in-a-lifetime purchase who need reassurance above all.

---

## 5 · Qualities

- **Premium Islamic-luxury aesthetic** — deep navy + Islamic emerald + gold + cream; Cormorant Garamond display serif; Amiri Arabic accents; 8-point-star geometric patterning. Not a generic travel template.
- **Motion-rich but tasteful** — blur-fade scroll reveals, hero video parallax, Ken Burns imagery, animated counters, dual-direction testimonial rails (pause on hover), animated wizard transitions; `prefers-reduced-motion` respected.
- **Mobile-first & responsive** — designed from 360px up; fullscreen staggered mobile menu; snap-scroll card strips on small screens.
- **Fast** — statically prerendered pages, remote-optimised imagery, zero database queries, tiny runtime.
- **Accessible & SEO-ready** — semantic landmarks, skip link, aria states on accordions/wizard, per-page metadata, JSON-LD schema, alt text throughout.
- **Honest by design** — the product copy itself models the brand's promise (itemised pricing, metres-to-Haram claims, "or similar" bans).

---

## 6 · Feature List

**Experience & Design**
- 4K Kaaba video hero with parallax scroll + animated two-line headline reveal
- Sacred Gallery — masonry photo wall with hover captions (Arabic labels)
- Dual-row infinite testimonial rail (opposite directions, edge-fade masks, pause-on-hover)
- Islamic geometric SVG pattern system + gold hairline rules + Arabic watermarks
- Marquee service ticker, hadith quote band, animated stat counters

**Commerce & Conversion**
- 9 packages with animated filtering, pricing bands and per-package quote CTAs (URL-prefilled subject/message into the contact form)
- Rihla Journey Planner — 6-step wizard, live summary sidebar, validation, reference-numbered confirmation
- Sticky navbar CTA, floating WhatsApp button (scroll-aware, deep-linked messages), CTA bands on every journey page
- Contact hub: call / WhatsApp / consultation / office cards + validated form with confirmation reference

**Content & Trust**
- 12-resource knowledge centre with category filters and modal reader (dua blocks with Arabic RTL typography)
- Dedicated Rihla Care (5-stage) page, Why Rihla commitments + comparison table, About with values & timeline
- 18-question FAQ system (Umrah + Hajj) with animated accordions
- 10 review profiles, star ratings, verified badges

---

## 7 · Run It

```bash
npm install
npm run dev      # local development
npm run build    # production build (13 static routes)
npm start        # serve production build
```

No environment variables, database or API keys are required.
