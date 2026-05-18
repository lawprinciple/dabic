/**
 * Prospect config — single source of truth for everything that changes
 * between dental practice cold-pitch builds.
 *
 * Fork the template for a new prospect, edit THIS FILE, swap matching
 * images in /public/images/, and you're done.
 *
 * What ALSO needs to change per prospect but lives outside this file:
 *   - /public/images/logo.png       (the clinic logo)
 *   - /public/images/hero-ordinacija.jpg  (the hero background)
 *   - /public/images/dr-dejan-veljkov.jpg (the doctor's portrait — rename per prospect)
 *   - /public/images/before-after-*.jpg   (their actual before/after photos)
 *   - astro.config.mjs → `site` field (canonical URL for sitemap)
 *
 * Everything else flows from the data below.
 */

export interface TeamMember {
  name: string;
  role: string;
}

export interface Review {
  quote: string;
  author: string;
  when: string;
}

export interface Prospect {
  // ── Identity ────────────────────────────────────────────────────────
  /** Full clinic name as displayed in headers, footers, schema */
  clinic: string;
  /** Single-word short name (used in footer mega-text) */
  clinicShort: string;
  /** Alternate name for SEO (often "Dr {lastname}") */
  alternateName: string;

  // ── Doctor ──────────────────────────────────────────────────────────
  doctor: {
    /** Full title + name, e.g. "Dr Dejan Veljkov" */
    name: string;
    /** Professional role/title for Schema.org and About section */
    role: string;
    /** Dental school name in NOMINATIVE form for Schema.org alumniOf
     * (e.g. "Stomatološki fakultet Univerziteta u Beogradu" — not the
     * locative "Stomatološkom fakultetu" that bio paragraphs use) */
    school: string;
    /** Pull-quote in About section (no quotation marks — component wraps) */
    quote: string;
    /** Bio paragraphs in About section — free text, include any facts
     * like graduation year, specialization, institute, etc. directly here */
    bioParas: string[];
    /** Specialty fact in About facts table */
    specialty: string;
    /** Experience fact in About facts table */
    experience: string;
  };

  /** Other team members (orthodontist, general dentist, hygienist, etc.) */
  team: TeamMember[];

  // ── Location ────────────────────────────────────────────────────────
  address: {
    street: string;
    city: string;
    district: string;
    postalCode: string;
    /** ISO country code, e.g. "RS" */
    country: string;
  };
  /** Landmark sentence, e.g. "u neposrednoj blizini hrama Svetog Save" */
  nearLandmark: string;
  /** GPS coordinates for Schema.org */
  geo: { lat: number; lng: number };

  // ── Contact ─────────────────────────────────────────────────────────
  phone: {
    /** As displayed, e.g. "011 2430 791" */
    display: string;
    /** International format for tel: links, e.g. "+381112430791" */
    tel: string;
  };
  email?: string;

  // ── Hours ───────────────────────────────────────────────────────────
  hours: {
    /** Weekday range display, e.g. "12:00 — 20:00" */
    weekdays: string;
    /** Compact footer format, e.g. "Pon–Pet 12:00–20:00" */
    weekdaysFooter: string;
    /** Opens-at for Schema.org, ISO time, e.g. "12:00" */
    opensAt: string;
    /** Closes-at for Schema.org, e.g. "20:00" */
    closesAt: string;
    /** Days open for Schema.org */
    daysOpen: ('Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday')[];
    /** Weekend status line, e.g. "Subota i nedelja — neradni dani" */
    weekendNote: string;
    /** Short footer weekend note, e.g. "Sub, Ned — neradni dani" */
    weekendNoteShort: string;
  };

  // ── Trust stats (TrustStrip marquee + About facts) ──────────────────
  founded: number;
  yearsExperience: number;
  patientCount: number;

  // ── Site / SEO ──────────────────────────────────────────────────────
  site: {
    /** Bare domain, e.g. "veljkov.rs" */
    domain: string;
    /** Full canonical URL with trailing slash */
    canonicalUrl: string;
    /** Schema.org @id for the practice */
    schemaId: string;
    /** Schema.org @id for the doctor (Person) */
    doctorSchemaId: string;
  };
  /** OG / Schema image path relative to /public — practice exterior or interior shot */
  ogImage: string;
  /** Doctor portrait path relative to /public — filename usually includes doctor name */
  doctorImage: string;

  // ── Hero ────────────────────────────────────────────────────────────
  hero: {
    eyebrow: string;
    /** First line of hero title (serif) */
    titleLine1: string;
    /** Second line, before the italic phrase */
    titleLine2Pre: string;
    /** The italic-styled closing phrase */
    titleLine2Post: string;
    /** Editorial frame: top-left number */
    frameNumber: string;
    /** Editorial frame: top-right est-year line */
    frameEstYear: string;
  };

  // ── Reviews carousel ────────────────────────────────────────────────
  reviews: Review[];

  // ── Page meta ───────────────────────────────────────────────────────
  pageTitle: string;
  pageDescription: string;
}

export const prospect: Prospect = {
  clinic: 'Stomatološka ordinacija Veroslav Dabić',
  clinicShort: 'Dabić',
  alternateName: 'Dr Dabić',

  doctor: {
    name: 'Dr Veroslav Dabić',
    role: 'Stomatolog i osnivač ordinacije',
    school: 'Stomatološki fakultet Univerziteta u Beogradu',
    quote: 'Posle trideset godina, princip je isti — slušati pacijenta i raditi mirno.',
    bioParas: [
      'Ordinacija je osnovana 1995. godine, sa idejom da pacijent dobije punu pažnju u mirnoj atmosferi. Tri decenije rada, jedan pristup.',
      'Tim okuplja iskusne specijaliste — oralna hirurgija, implantologija, opšta stomatologija i estetika. Ordinacija se nalazi na Vračaru, u Sinđelićevoj 32.',
    ],
    specialty: 'Opšta stomatologija, oralna hirurgija i implantologija',
    experience: '30+ godina rada · multidisciplinarni tim',
  },

  team: [
    { name: 'Dr Ivan Golovko', role: 'oralna hirurgija i implantologija' },
    { name: 'Dr Aleksa Dabić', role: 'oralna hirurgija' },
    { name: 'Dr Anastasia', role: 'opšta stomatologija' },
  ],

  address: {
    street: 'Sinđelićeva 32',
    city: 'Beograd',
    district: 'Vračar',
    postalCode: '11104',
    country: 'RS',
  },
  nearLandmark: 'na Vračaru',
  // NOTE: approximate Vračar coordinates — replace with exact lat/lng of
  // Sinđelićeva 32 if available (Google Maps right-click → "What's here?").
  geo: { lat: 44.7960, lng: 20.4745 },

  phone: {
    display: '063 388 169',
    tel: '+381633881690',
  },

  hours: {
    weekdays: '13:00 — 20:00',
    weekdaysFooter: 'Pon–Pet 13:00–20:00',
    opensAt: '13:00',
    closesAt: '20:00',
    daysOpen: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    // Dabić is open Saturday — encoded in the weekend note since current
    // schema only supports one weekday range. Schema.org will miss Saturday;
    // template-level fix is a TODO if multiple practices need this.
    weekendNote: 'Subota 10:00 — 15:00 · Nedelja neradni dan',
    weekendNoteShort: 'Sub 10–15 · Ned neradni',
  },

  founded: 1995,
  yearsExperience: 30,
  patientCount: 5000,

  site: {
    domain: 'dabic.rs',
    canonicalUrl: 'https://dabic.rs/',
    schemaId: 'https://dabic.rs/#dentist',
    doctorSchemaId: 'https://dabic.rs/#dr-dabic',
  },
  ogImage: '/images/hero-ordinacija.jpg',
  // Filename intentionally does NOT exist yet — add the file when ready.
  doctorImage: '/images/dr-veroslav-dabic.jpg',

  hero: {
    eyebrow: 'Stomatološka ordinacija Veroslav Dabić',
    titleLine1: 'Stomatologija',
    titleLine2Pre: 'koja',
    titleLine2Post: 'traje.',
    frameNumber: 'N°1',
    frameEstYear: 'Est. 1995',
  },

  reviews: [
    {
      quote: 'Dr Dabić je genije! Već 20 godina sam njegov pacijent jer je plemenit čovek, savršen zubar i jako duhovit. A takva je i cela ekipa. U njegovoj ordinaciji niko ne oseća strah.',
      author: 'Biljana',
      when: 'pacijent · 2024.',
    },
    {
      quote: 'Ivan je najpoznatiji specijalista za oralnu hirurgiju i implantologiju među mojim prijateljima u Beogradu. Postavio mi je implant — najlakša ruka među svim stomatolozima koje sam ikada upoznao.',
      author: 'Aleksander Skrynnik',
      when: 'pacijent · 2025.',
    },
    {
      quote: 'Vađenje umnjaka obično plaši, ali je sve obavljeno tako pažljivo i brzo da nisam ni primetila kako se završilo. Hirurg od Boga.',
      author: 'Klara Volkova',
      when: 'pacijent · 2024.',
    },
    {
      quote: 'Iván je promenio kvalitet mog života. Vratio mi je mogućnost da slobodno žvaćem i da se nasmejem bez osećaja "nešto nije u redu".',
      author: 'Viktorija D.',
      when: 'pacijent · 2025.',
    },
  ],

  pageTitle: 'Stomatološka ordinacija Veroslav Dabić — Vračar, Beograd',
  pageDescription: 'Stomatološka ordinacija na Vračaru od 1995. godine. Oralna hirurgija, implantologija, opšta stomatologija i estetika. Multidisciplinarni tim, mirna atmosfera, individualni pristup.',
};
