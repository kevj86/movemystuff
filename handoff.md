# Move My Stuff — Lanarkshire · Handoff Notes

## Session date: 2026-06-10

### T&Cs lightbox (commit `05a3166`)
- Six branded Light Removals T&C graphics added to `images/terms/tc1–tc6.jpeg` (cover, customer's responsibilities, quotation, work not included, excluded property, insurance).
- Shown in a **lightbox overlay** — prev/next arrows, page counter, swipe, Esc/arrow keys, backdrop click to close.
- Opened from the footer "Terms & Conditions" link and the contact form fine print ("By booking, you accept our Terms & Conditions").
- A separate `terms.html` page was also built as an alternative, demoed to Gregg, and **removed** — he chose the lightbox.

### Contact form — Message placeholder
- Replaced the Message placeholder with a four-bullet checklist (collection address/postcode/floor, drop off address/postcode/floor, rough list or photos of items, preferred date). Textarea rows bumped 4 → 6 so all bullets show.
- **Previous placeholder (for revert):** `Postcode, dates, any access notes…`

### Our Work section — lede copy change
- Replaced the lede under "Real jobs. Real results." with:
  > From trade waste uplifts, to old furniture and house junk — we take it all!
  > UNSURE of an item, just ask!
  > **SAME AS A SKIP, BUT WE DO THE WORK!**
- **Previous lede (for revert):** `A glimpse at the kinds of jobs we tackle every week across Lanarkshire — from gentle furniture shifts to full garden green-waste runs.`

---

## Session date: 2026-06-09

---

## Project snapshot

One-page responsive website for Gregg's Lanarkshire man & van / removals / clearances business.
Single `index.html` + `style.css` + `app.js`. No JS framework. Hosted on GitHub (`kevj86/movemystuff`).

**Live repo:** https://github.com/kevj86/movemystuff

---

## What was done this session

### Copy tweaks
- **"local crew" → "local team"** in two places: hero eyebrow pill and the "Why choose us" section heading.

### Contact form — service type checkboxes
- Added two custom-styled checkboxes between the "What you need moved" and "Message" fields:
  - **1 Man & Van** — Customer helps load / unload
  - **2 Person Team** — We do all the loading
- Checkboxes highlight with an orange border and background when ticked.
- Selected option is included in the email and WhatsApp message body (`Service type: …`).
- Neither checkbox is required — both can be left blank.

### Our Work section — before/after carousel
- Replaced the four placeholder flyer images with a **10-image carousel** using the real before/after job photos (`images/beforeafter/ba1.jpeg` → `ba10.jpeg`).
- Carousel features:
  - Prev / Next arrow buttons (turn orange on hover)
  - 10 dot indicators below (active dot is orange)
  - Swipe support on mobile (pointer drag left/right)
  - Wraps around: after image 10 it loops back to 1
- The before/after images were renamed from UUID filenames (as uploaded to GitHub) to `ba1–ba10.jpeg` — git tracked these as renames, history preserved.

### Reviews section
- Replaced all three placeholder reviews with **real customer quotes**:
  1. Long review about service with a smile (font scaled to `0.82rem` to fit the card)
  2. Review praising communication and speed (Gregg + Move My Stuff)
  3. Review praising Greg and Lewis for a 9th-floor high-rise move
- **Footer alignment fix** — review cards made `display: flex; flex-direction: column` with `flex: 1` on the blockquote so all three footers sit at the same height regardless of text length.
- **Reviews note** updated to link both the Facebook page and the Yell page:
  - Yell: https://www.yell.com/biz/move-my-stuff-lanarkshire-strathaven-10854386/

---

## Pending / future work

### Carousel — card style
The carousel was discussed as potentially becoming a "carousel cards" style (showing multiple images at once). This was interrupted mid-change — the current carousel shows one image at a time. Can revisit.

### Contact form — no backend yet
Submissions route to email/WhatsApp via `mailto:` and `wa.me` links. Options for a proper backend:
- **Formspree or Web3Forms** — easiest, no server needed, free tier sufficient. Just add an `action` URL to the `<form>` tag.

### Speed lines on hero card
The `::after` speed lines decoration was disabled (`content: none`) rather than deleted. Can be re-enabled by changing back to `content: ""`.

### Review names
The reviewer names and locations on cards 2 and 3 are still placeholders (David R. / East Kilbride, Aisha K. / Wishaw). Update when real names are available.

---

## Key files

| File | Purpose |
|------|---------|
| `index.html` | Full one-page site |
| `style.css` | All styles, includes orange theme overrides at bottom |
| `app.js` | Carousel, contact form routing, scroll reveal, smooth scroll |
| `/images/beforeafter/` | Before/after job photos (ba1–ba10.jpeg) |
| `/images/` | Other site photos and logos |
| `/logos/` | All logo variants (orange, black, white, horizontal, stacked, emblem, circle) |

---

## Colour tokens (quick ref)

| Token | Hex | Role |
|-------|-----|------|
| `--navy` | `#16243F` | Primary text, header, footer |
| `--orange` | `#F97316` | Accent, buttons, icons |
| `--orange-deep` | `#EA580C` | Hover states |
| `--surface` | `#F7F8FA` | Section backgrounds |
| `--muted` | `#5B6472` | Secondary text |
| `--line` | `#E5E9EE` | Borders |

Orange theme overrides `--orange` to `#F26312` and `--orange-deep` to `#C44A12`.

---

## Breakpoints

| Width | Behaviour |
|-------|-----------|
| `< 540px` | Hero CTAs stack, header call button text hidden |
| `< 640px` | Service cards single column |
| `< 900px` | Hero goes single column, utility bar hidden, logo smaller |
| `< 1000px` | Primary nav hidden (hamburger only), service cards 2-col |

---

## Commits this session

| Hash | Message |
|------|---------|
| `b8f09b2` | Update footer credentials — SEPA Licensed Waste Carrier, remove duplicate SEPA line |
| `8a48c60` | Add service type checkboxes to contact form — copy tweak to local team |
| `e2688b9` | Replace work grid with image carousel — before/after photos |
| `69b48d6` | Update reviews with real customer feedback and layout fixes |
