# Dentistry Cold-Pitch Template

Astro 5 site for dental practice cold-pitch mockups. Reusable base — fork per prospect, edit one config file, swap a few images, deploy.

## Stack

- **Astro 5** (static site)
- **GSAP + ScrollTrigger** — scroll-driven reveals
- **Lenis** — smooth scroll
- **Three.js** — hero WebGL shader (desktop only, lazy-loaded)
- **lightningcss** — CSS minification

## How to fork for a new prospect

```bash
# 1. Clone this template into a new folder named after the prospect
git clone https://github.com/lawprinciple/dentistry-template nikolic
cd nikolic

# 2. Remove the template's git history, init fresh
rm -rf .git && git init -b main

# 3. Install deps
npm install
```

Then edit **one file** and swap **three images**:

### Edit `src/prospect.ts`

Open it and replace every value with the new prospect's info. Most fields are commented. The form-shape is:

- **Identity** — clinic name, doctor name, alternate name
- **Doctor** — name, role, school (Schema.org), quote, bio paragraphs, specialty, experience
- **Team** — array of other team members
- **Address** — street, city, district, postal code
- **Contact** — phone (display + tel format), optional email
- **Hours** — weekday range, opens/closes for SEO
- **Trust stats** — founded year, years experience, patient count
- **Site** — canonical URL, Schema.org IDs (just replace `veljkov.rs` everywhere)
- **Hero copy** — eyebrow text, title pieces, editorial frame strings
- **Reviews** — array of `{ quote, author, when }`
- **Page meta** — title and description for `<title>` and OG tags

Once you edit `prospect.ts`, every component (Hero, TrustStrip, About, Contact, Footer, Reviews, Base) automatically renders the new data. The Schema.org JSON-LD in `Base.astro` reads from the same source — no separate SEO config to remember.

### Swap images in `public/images/`

These filenames stay constant — just replace the JPG/PNG contents:

- `logo.png` — clinic logo (any aspect, ideally square-ish, navy/cream palette matches site colors)
- `smile.jpg` — hero background, close-up smile/teeth photo
- `hero-ordinacija.jpg` — practice interior shot (used for OG/social previews)

These vary per prospect — change the filename and update the `doctorImage` field in `prospect.ts`:

- `dr-dejan-veljkov.jpg` → `dr-{prospect-doctor}.jpg` (the doctor portrait, About section)

Optional swaps (Results before/after section uses these — fine to leave for the mockup, swap only if prospect signs):

- `before-after-1.jpg`, `before-after-3.jpg`, `before-after-4.jpg`

Service icons (`service-1.jpg` through `service-6.jpg`, `smile.jpg`, `laboratorija.jpg`) are dental-generic AI-generated shots — reusable across all dental builds.

### Run + deploy

```bash
npm run dev              # local preview at http://localhost:5173
npm run build            # static build into dist/
```

Deploy `dist/` to Netlify (drag-and-drop or CLI). Netlify will give you a `{name}.netlify.app` URL — that's what goes in the cold outreach message.

Then push to a new private GitHub repo so you have a real backup of the build.

## Time targets

- Fork + clone: 2 min
- Edit `prospect.ts`: 5–10 min
- Swap images: 5–10 min
- Test locally + deploy to Netlify: 5 min
- **Total per prospect: ~15–25 min**

If you find yourself spending more than 30 min, something's wrong — check for hardcoded strings that should have been read from `prospect.ts`.

## Files NOT to edit (the template chrome)

These are the design system — leave them alone unless you're improving the template itself:

- `src/components/*.astro` — all components read from `prospect.ts`
- `src/layouts/Base.astro` — Schema.org JSON-LD, OG tags, fonts
- `src/styles/global.css` — design tokens (colors, spacing, type scale)
- `astro.config.ts` — reads canonical URL from prospect config
- `tsconfig.json`, `package.json` — standard

## What's hardcoded but probably fine

These are the "Serbian dental clinic" defaults that are true for nearly every dental prospect in the niche — change only if a specific prospect needs different framing:

- **Services list** (Services.astro) — Implantologija / Estetska / Konzervativna / Protetika / Endodoncija / Profesionalno čišćenje. All dentists offer roughly this set.
- **TrustStrip 4th item** — "Komora / Stomatološka komora Srbije" (every Serbian dentist is registered with the Stomatološka komora)
- **Theme color** (`#0F1C2A` navy) — brand-default
- **Form fields** — Ime, Telefon, Poruka (universal dental form)
- **Disclaimer copy** in Footer

## Workflow context

This template is part of the **Light Mode** sales cycle described in `../README.md` at the agency root. The full flow:

1. Find a prospect (Google Maps scrape for dentists in target Belgrade neighborhoods)
2. Fork this template, customize, deploy to Netlify
3. Send cold pitch with the live URL + price (€500 upfront, yes/no close)
4. If yes → invoice via LemonSqueezy → Branch A (files) or Branch B (€25/mo hosting)
5. If no → archive, move on

The whole point of templating is to make step 2 take 15–25 min instead of 6+ hours, so the volume game in the playbook (20–30 sends/week) becomes playable.
