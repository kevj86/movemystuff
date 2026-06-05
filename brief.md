# Move My Stuff — Lanarkshire · Website Build Prompt

> Paste this whole file to your developer or AI builder. It contains the brand, copy, structure, design direction, custom SVG icons, and separate mobile + desktop specs. **No emojis anywhere — use the SVGs provided.**

---

## 1. Project goal

Build a **professional, trustworthy, high-converting one-page website** (with optional sub-pages) for a Lanarkshire-based man & van and removals/clearance business. The single most important job of the site is to get the visitor to **call, WhatsApp, or message** the business. Every section should funnel toward those contact actions.

Deliver **two layouts from one responsive codebase**:

- A **desktop / large-screen** version. (please use one of the stacked logos for the hero)
- A **mobile** version with its own navigation pattern and a sticky contact bar.

Both must look polished, modern, and credible — the kind of site that makes someone confident handing over their belongings.

---

## 2. Business details (use exactly as written)

- **Business name:** Move My Stuff — Lanarkshire
- **Tagline / trust words:** Trusted · Reliable · Reviewed
- **Primary CTA line:** Need your stuff moved? Contact Move My Stuff — Lanarkshire today!
- **Service area:** Lanarkshire, Scotland (North & South Lanarkshire — e.g. Hamilton, Motherwell, East Kilbride, Wishaw, Airdrie, Coatbridge, Bellshill, Lanark, Carluke, Larkhall, Blantyre, Cambuslang, Rutherglen).

### Contact

- **Phone:** 07850 694243 — link as `tel:+447850694243`
- **Email:** getintouch@movemystuff.info — link as `mailto:getintouch@movemystuff.info`
- **WhatsApp:** open chat to the number above — link as `https://wa.me/447850694243`
- **Facebook:** Move My Stuff - Lanarkshire
- **Instagram:** @\_movemystuff
- **TikTok:** @movemystufflanarkshire

### Credentials (display prominently — these build trust)

- Licensed Waste Carrier
- H & R Goods in Transit Insurance

### Services (six)

1. Man & Van
2. Light Removals
3. Clearances
4. Shed Demolition
5. Waste Uplifts
6. Bush Removal

### What we DON'T do (include as an honest, friendly section — this actually builds credibility)

Keep the tone polite and matter-of-fact, e.g. "To keep things clear, here's what we don't cover:"

- Empty bins
- Uplift scrap appliances for free
- Food waste

---

## 3. Images

Use the photos in the local **`/images`** folder as the visual backbone. Suggested mapping (adjust to whatever's actually in the folder):

- **Hero background:** best wide shot of the van / a loaded van / a team-at-work photo. Apply a dark gradient overlay so white text stays readable.
- **Service cards:** if you have a relevant photo per service, use it as the card image with the matching SVG icon on top; otherwise icon-only cards are fine.
- **Gallery / "Our work" strip:** any before/after or job photos.
- **Logo:** if a logo file exists in `/images`, use it in the header and footer; otherwise set the wordmark in the heading font (see typography).

Always include descriptive `alt` text on every image (good for accessibility and Google).

---

## 4. Design direction

**Feel:** clean, solid, dependable, local. Not flashy. Lots of whitespace, strong type, confident buttons.

### Colour palette (sample exact values from the logo if one exists; otherwise use this)

- **Primary / Navy:** `#16243F` (headers, footer, text)
- **Accent / Action orange:** `#F97316` (buttons, highlights, icon accents)
- **Support blue:** `#2563EB` (links, secondary accents) — optional
- **Surface / off-white:** `#F7F8FA` (section backgrounds)
- **White:** `#FFFFFF` (cards)
- **Muted text:** `#5B6472`

The navy-and-orange combination reads as professional + energetic. Keep one accent colour for all primary buttons so the CTA is unmistakable.

### Typography (Google Fonts)

- **Headings:** Poppins or Plus Jakarta Sans — 600/700 weight, slightly tightened letter-spacing.
- **Body:** Inter — 400/500, 16–18px base, generous line-height (1.6).

### Components

- **Buttons:** solid pill or 10px-radius. Primary = orange with white text; secondary = navy outline. Clear hover/press states. Large tap targets (min 48px tall).
- **Cards:** white, soft shadow (`0 6px 24px rgba(16,36,63,.08)`), 16px radius, subtle lift on hover.
- **Trust badges:** small rounded chips with an SVG + label.
- Smooth scroll, subtle fade/slide-in on scroll. No autoplay sound, no aggressive popups.

---

## 5. Page structure (top to bottom)

1. **Top utility bar** _(desktop)_: phone (click-to-call), email, social icons. Sits above the header.
2. **Header / nav** (sticky): logo/wordmark left; nav links (Services · Areas · Why Us · Contact); a prominent "Call Now" button right. On mobile this becomes a hamburger + a persistent call button.
3. **Hero**: full-width image with overlay. H1 = "Move My Stuff — Lanarkshire". Sub = the trust words (Trusted · Reliable · Reviewed). One line: "Need your stuff moved? Contact Move My Stuff — Lanarkshire today!" Two buttons: **Call 07850 694243** (orange) and **WhatsApp Us** (navy/outline).
4. **Trust strip**: three chips — Licensed Waste Carrier · Goods in Transit Insurance · Trusted · Reliable · Reviewed (use the badge SVGs).
5. **Services grid**: 6 cards, each with its custom SVG, a short one-line description, and a "Get a quote" / "Ask about this" link that scrolls to contact. Suggested blurbs:
   - **Man & Van** — Flexible help with loading, moving and lifting — one item or a full van.
   - **Light Removals** — Home and flat moves done carefully and on time.
   - **Clearances** — House, flat, garage and office clear-outs, tidied and gone.
   - **Shed Demolition** — Safe take-down and removal of old sheds and outbuildings.
   - **Waste Uplifts** — Licensed uplift and disposal of unwanted items and waste.
   - **Bush Removal** — Overgrown bushes, shrubs and garden green waste cleared.
6. **Why choose us**: expand Trusted / Reliable / Reviewed into three short value props.
7. **Gallery / Our work**: image grid from `/images`.
8. **What we don't do**: the honest exclusions section (see §2).
9. **Service area**: short paragraph + the town list; optional simple map graphic.
10. **Reviews**: 2–3 testimonial cards (use placeholders; mention they can paste real Facebook/Google reviews here). Link to the Facebook page.
11. **Contact / final CTA**: big repeat of phone + WhatsApp + email + all socials, plus a simple contact form (Name, Phone, What you need moved, Message). Form can submit to email or WhatsApp.
12. **Footer**: wordmark, credentials repeated, socials, service area line, copyright, "Licensed Waste Carrier · H & R Goods in Transit Insurance".

---

## 6. Mobile version — specifics

- Single column throughout; cards stack full-width.
- **Header:** compact — small logo left, hamburger right. Tapping opens a full-screen menu.
- **Sticky bottom bar** (always visible): two big buttons split 50/50 — **Call** (orange) and **WhatsApp** (green/navy). This is the most important mobile feature; it must never scroll away.
- Hero text scaled down but punchy; CTA buttons full-width stacked.
- Services as a vertical list of cards or a 2-up grid on wider phones.
- Phone number, email and WhatsApp are all tap-to-action (`tel:`, `mailto:`, `wa.me`).
- Min 48px tap targets, 16px+ body text, no horizontal scroll, fast-loading compressed images.

## 7. Desktop version — specifics

- Max content width ~1200px, centred, generous side padding.
- Top utility bar + sticky header with the "Call Now" button always visible.
- Services in a 3-column grid (2 on tablet). Hover lift on cards.
- Hero is a two-zone layout (text left, image right) **or** full-bleed image with left-aligned text block.
- Gallery in a 3–4 column masonry/grid with lightbox on click (optional).
- Contact section as two columns: details/socials left, form right.

---

## 8. Custom SVG assets (drop-in, no emojis)

All icons use `currentColor` so you can set their colour with CSS (`color: #F97316` etc.) and scale them freely. Recommended display size 56–64px inside service cards.

### Service icons

**Man & Van**

```svg
<svg viewBox="0 0 64 48" width="64" height="48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Man and van">
  <path d="M4 10h30v26H4z"/>
  <path d="M34 18h12l10 9v9H34z"/>
  <path d="M40 18v9h16"/>
  <circle cx="17" cy="40" r="4"/>
  <circle cx="47" cy="40" r="4"/>
  <path d="M4 40h6M21 40h22M51 40h5"/>
</svg>
```

**Light Removals**

```svg
<svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Moving boxes">
  <rect x="8" y="34" width="22" height="22" rx="1.5"/>
  <rect x="34" y="34" width="22" height="22" rx="1.5"/>
  <rect x="21" y="10" width="22" height="22" rx="1.5"/>
  <path d="M19 34v6M45 34v6M32 10v6"/>
</svg>
```

**Clearances** (broom)

```svg
<svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Clearances">
  <line x1="48" y1="10" x2="30" y2="34"/>
  <path d="M30 34l-13 9 9 13 18-11z"/>
  <path d="M21 42l4 11M27 39l3 12M33 37l2 11"/>
</svg>
```

**Shed Demolition** (shed + sledgehammer)

```svg
<svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Shed demolition">
  <path d="M8 32l15-13 15 13v22H8z"/>
  <rect x="19" y="40" width="8" height="14"/>
  <line x1="42" y1="16" x2="55" y2="40"/>
  <path d="M36 8l14 6-4 9-14-6z"/>
</svg>
```

**Waste Uplifts** (skip + up arrow = uplift, not bin-emptying)

```svg
<svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Waste uplifts">
  <path d="M8 30h48l-6 24H14z"/>
  <path d="M10 38h44"/>
  <path d="M32 6v16M25 13l7-7 7 7"/>
</svg>
```

**Bush Removal** (shrub + pruning shears)

```svg
<svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Bush removal">
  <path d="M14 52c-6 0-10-5-10-10 0-4 2-7 6-8-1-7 4-12 11-12 5 0 9 3 11 7"/>
  <path d="M14 52h20"/>
  <circle cx="48" cy="20" r="3"/>
  <circle cx="48" cy="30" r="3"/>
  <line x1="50" y1="22" x2="60" y2="13"/>
  <line x1="50" y1="28" x2="60" y2="37"/>
  <line x1="46" y1="22" x2="36" y2="26"/>
  <line x1="46" y1="28" x2="36" y2="24"/>
</svg>
```

### Trust / credential badges

**Licensed Waste Carrier** (shield + check)

```svg
<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Licensed waste carrier">
  <path d="M24 4l16 6v10c0 11-7 18-16 22C15 38 8 31 8 20V10z"/>
  <path d="M17 23l5 5 9-11"/>
</svg>
```

**Goods in Transit Insurance** (van inside shield)

```svg
<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Goods in transit insurance">
  <path d="M24 4l16 6v10c0 11-7 18-16 22C15 38 8 31 8 20V10z"/>
  <path d="M15 19h9v10h-9z"/>
  <path d="M24 22h5l4 4v3H24z"/>
  <circle cx="19" cy="31" r="1.6"/>
  <circle cx="30" cy="31" r="1.6"/>
</svg>
```

**Reviewed / Trusted** (star)

```svg
<svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Reviewed and trusted">
  <path d="M24 5l5.6 11.4 12.6 1.8-9.1 8.9 2.1 12.5L24 33.6 12.8 39.6l2.1-12.5-9.1-8.9 12.6-1.8z"/>
</svg>
```

### Contact icons

**Phone**

```svg
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Phone">
  <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1z"/>
</svg>
```

**Email**

```svg
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Email">
  <rect x="2" y="4" width="20" height="16" rx="2"/>
  <path d="m3 6 9 7 9-7"/>
</svg>
```

**Location / area**

```svg
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Service area">
  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
  <circle cx="12" cy="10" r="3"/>
</svg>
```

### Social icons (simple monoline — recognisable without using brand emoji)

**WhatsApp**

```svg
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="WhatsApp">
  <path d="M3 21l1.6-5A8.5 8.5 0 1 1 8 19.4z"/>
  <path d="M9 8.5c0 4 2.5 6.5 6.5 6.5l1-2-2.3-1-1 1c-1.2-.5-2.2-1.5-2.7-2.7l1-1-1-2.3z"/>
</svg>
```

**Facebook**

```svg
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Facebook">
  <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3h2v9h3v-9h2.5l.5-3H12V6.8c0-.6.4-.8.9-.8H15z"/>
</svg>
```

**Instagram**

```svg
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Instagram">
  <rect x="3" y="3" width="18" height="18" rx="5"/>
  <circle cx="12" cy="12" r="4"/>
  <circle cx="17.5" cy="6.5" r="1"/>
</svg>
```

**TikTok**

```svg
<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="TikTok">
  <path d="M14 4v9.5a4 4 0 1 1-3-3.9"/>
  <path d="M14 4c.5 2.5 2 4 4.5 4.3"/>
</svg>
```

---

## 9. Copy bank (ready to paste)

- **H1:** Move My Stuff — Lanarkshire
- **Sub-headline:** Trusted · Reliable · Reviewed
- **Hero line:** Need your stuff moved? Contact Move My Stuff — Lanarkshire today!
- **Button A:** Call 07850 694243
- **Button B:** WhatsApp Us
- **Why us — Trusted:** A local, fully licensed service you can rely on with your belongings.
- **Why us — Reliable:** We turn up when we say we will and get the job done right.
- **Why us — Reviewed:** Real feedback from happy customers across Lanarkshire.
- **What we don't do (intro):** To keep things clear and honest, here's what we don't cover: we don't empty bins, we don't uplift scrap appliances for free, and we don't handle food waste.
- **Footer credentials line:** Licensed Waste Carrier · H & R Goods in Transit Insurance

---

## 10. Technical & quality checklist

- [ ] Fully responsive — verified at 360px, 768px, 1024px, 1440px.
- [ ] Mobile sticky **Call + WhatsApp** bottom bar.
- [ ] All phone/email/WhatsApp links are tappable (`tel:` / `mailto:` / `wa.me`).
- [ ] Custom SVGs only — **no emojis** anywhere.
- [ ] Images compressed (WebP where possible) with descriptive `alt` text.
- [ ] Accessible: colour contrast AA, focus states, semantic headings, `aria-label`s on icon buttons.
- [ ] SEO basics: `<title>` = "Move My Stuff — Lanarkshire | Man & Van, Removals & Clearances"; meta description mentioning man & van, removals, clearances, waste uplifts in Lanarkshire; Open Graph image; LocalBusiness schema with phone, area served, and credentials.
- [ ] Fast: lazy-load gallery images, minimal JS.
- [ ] Contact form validates and routes to email or WhatsApp.
- [ ] Footer repeats credentials, socials, and service area.

---

_Build it clean, make the phone number and WhatsApp impossible to miss, and let the trust signals (Licensed Waste Carrier, Goods in Transit Insurance, Trusted · Reliable · Reviewed) do the heavy lifting._
