# Move My Stuff — Lanarkshire · Handoff Notes

## Session date: 2026-08-23

### Contact form — rebuilt as a branching quote form
The form now asks only what's relevant to the job type. Order: **Name → Phone → Service type → branch fields.**

**Service type** is two options, **mutually exclusive** — pick one:
- Removals / Man & Van
- Waste Uplift / Clearance

They're `<input type="radio">` under `name="service_type"`, styled with the existing `.check-option` / `.check-box` rules so they still *look* like the tick-boxes Gregg signed off on. Radios give native one-at-a-time behaviour and correct semantics — no JS needed to enforce it. (`.check-option input[type="checkbox"]` in `style.css` was broadened to `.check-option input` so radios get hidden too.)

Nothing below the service type shows until one is picked (`#jobFields` is `hidden`).

**Removals branch:**
- Collection address (inc. floor) & postcode
- Drop off address (inc. floor) & postcode
- Rough list of items you're looking to move
- Does this move need… 1 Man & Van / 2 Person Team (radios, `name="crew"`)
- What date are you looking for?

**Waste branch:** same minus drop off and crew, and the item-list label swaps to "Rough list of the items you're looking to have uplifted".

The shared fields (collection, item list, date) are **one set of inputs reused by both branches** — only `#dropoffField` and `#crewField` toggle, and the item label/placeholder swap via the `ITEMS_COPY` map in `app.js`. Switching Removals → Waste clears the drop-off value and crew choice so they can't leak into the message body.

**Removed:** the old "What you need moved" text input (`f-job`) and the free-text Message textarea (`f-message`) — the bullet-list placeholder in that textarea is now real fields. Gregg's call: no catch-all notes box, exactly the listed fields.

**Validation** — all fields are required: name, phone, service type, then the branch's fields (crew included for Removals). Invalid fields go red; check groups redden their option cards via the new `.field--checks.invalid` rules, since the real input is visually hidden. First invalid field scrolls into view on a failed submit.

**Message body / Web3Forms payload** rebuilt to match: `Service type`, `Collection address`, `Drop off address`, `Items`, `Crew`, `Preferred date`. Email subject now includes the service type. Same for the WhatsApp text.

**CSS added:** `.field[hidden] { display: none }` (needed — `.field` is `display: grid`, which beats the UA `[hidden]` rule), `.field--compact textarea { min-height: 76px }` for the address boxes, and the `.field--checks.invalid` states. Dead `.check-subgroup` rules removed.

**Tested 2026-08-23:** Kevin ran a real submission through the rebuilt form — **Send by email** delivered to getintouch@movemystuff.info. Web3Forms works with the new payload shape. The **WhatsApp** route on the new form is still untested.

---

## Session date: 2026-08-16

### Web3Forms email backend — now LIVE
- Pasted the real access key into `WEB3FORMS_KEY` (`app.js:97`): `e8ebd5fb-5798-4cac-a381-6678217d6035`.
- The contact form's **email** button now POSTs directly to `api.web3forms.com` → submissions land in **getintouch@movemystuff.info**. No more `mailto:` fallback (the fallback code stays in place and only triggers if the key is ever blanked). WhatsApp route unchanged.
- Web3Forms keys are public by design (client-side JS); spam handled by their honeypot + the `#f-botcheck` field.
- Committed `aba9da5` and pushed to `origin/main`.
- **Verified 2026-08-23:** a real send from the live site landed in the inbox. The email backend is confirmed working end to end.

---

## Session date: 2026-06-11

### FAQ lightbox
- Three branded FAQ graphics (12 questions) pulled from GitHub upload, renamed `images/faq/faq1–faq3.jpeg` (git renames, history preserved).
- T&Cs lightbox in `app.js` generalised into a shared image lightbox (`#imageLightbox`, was `#termsLightbox`) driven by a `SETS` map — `data-lightbox="terms"` and `data-lightbox="faq"` open the respective set with correct alts, counter, and dialog label.
- FAQ triggers: orange **"More questions? Read our FAQs"** button in the Straight Talk section (`.dont-do__faq-btn`), and an **FAQs** link next to Terms & Conditions in the footer bottom row.

### Hero card speed lines — removed for good
- The disabled `::after` speed lines were investigated: they never showed because `overflow: hidden` on `.hero__card` clipped them. Tried a fixed version (horizontal streaks, then animated) — didn't earn its place, so the `::after` block and its orange-theme override were **deleted entirely**.
- **Side effect kept:** `overflow: hidden` was removed from `.hero__card`, which un-clipped the `::before` chevron — the card's right edge now shows its intended arrow point. If the chevron is unwanted, re-add `overflow: hidden` to `.hero__card` (or delete the `::before` block).

---

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

### Carousel — card style — settled 2026-08-23
A multi-image "carousel cards" style was discussed, then dropped. **One large image at a time is the final call.** Don't re-propose it.

### Contact form — Web3Forms backend ✅ DONE (2026-08-16)
Access key added and pushed live — email submissions now POST directly to Web3Forms and land in `getintouch@movemystuff.info`. See the 2026-08-16 session note above. Only outstanding item is a real end-to-end test send from the live site.

### Review names — settled 2026-08-23
Names and locations on all three review cards (Lauren M. / Hamilton, David R. / East Kilbride, Aisha K. / Wishaw) are **final**. Not placeholders — leave them as they are.

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
