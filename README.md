# RANA JEWELLERS — LUXURY BRAND WEBSITE

> **Haute Joaillerie &amp; Pure Gold Heirlooms**  
> Flagship Boutique: DHA Main Boulevard, Lahore, Pakistan  
> Official Repository: [Ahmad1259/Rana-Jewelers-](https://github.com/Ahmad1259/Rana-Jewelers-)

---

## 1. PROJECT OVERVIEW

This repository houses the modern, high-performance, single-page luxury web experience for **Rana Jewellers**. Built with a **data-first architecture**, all business details, catalogue items, addresses, and contacts are separated from presentation components. You can add or update products, prices, and showroom information without altering application logic or rewriting code.

### Key Highlights
- **Design System:** Bespoke pure black (`#000000`), deep charcoal (`#0A0A0A`), metallic gold gradients, polished silver accents, and Cinzel/Jost luxury typography.
- **Brand Identity Integration:** Official metallic emblem downloaded from Google Drive and set up in `public/images/brand/rana-jewellers-logo.png`.
- **Verified Showroom Media:** Real showroom interior photography integrated from the brand's Google Maps assets.
- **Data-First Architecture:** Centralised configuration in `src/data/`.
- **Zero Fabrication Safeguards:** No unverified dates, fabricated founders, or artificial prices are exposed to visitors.
- **WhatsApp Concierge:** Dynamic appointment scheduler generating formatted, URL-encoded WhatsApp messages.
- **SEO & Schema Markup:** Includes LocalBusiness / JewelryStore structured data (JSON-LD), Open Graph metadata, `sitemap.xml`, and `robots.txt`.

---

## 2. TECHNOLOGY STACK

- **Framework:** React 18
- **Language:** TypeScript 5
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3 with custom luxury theme extensions
- **Icons:** Lucide React
- **Animations:** GSAP 3 / CSS keyframes with strict `prefers-reduced-motion` compliance
- **Code Quality:** ESLint &amp; Prettier

---

## 3. REPOSITORY DIRECTORY STRUCTURE

```text
Rana-Jewelers-/
├── public/
│   ├── favicon.svg               # Vector metallic gold monogram favicon
│   ├── robots.txt                # Search engine crawler instructions
│   ├── sitemap.xml               # Search engine index sitemap
│   ├── site.webmanifest          # PWA web manifest
│   └── images/
│       ├── brand/                # Official brand logo
│       ├── store/                # DHA Lahore showroom photography
│       ├── categories/           # Category thumbnails
│       ├── bridal/               # Bridal masterworks
│       ├── products/             # Product catalogue images
│       └── founders/             # Founder portraits
├── src/
│   ├── components/
│   │   ├── forms/
│   │   │   └── AppointmentModal.tsx  # Interactive WhatsApp booking modal
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.tsx   # Top announcement banner
│   │   │   ├── Navbar.tsx            # Sticky header with mobile drawer
│   │   │   └── Footer.tsx            # Comprehensive footer & legal notes
│   │   └── ui/
│   │       ├── GoldButton.tsx        # Accessible luxury button variants
│   │       └── SectionHeader.tsx     # Editorial header with divider
│   ├── data/
│   │   ├── site.ts               # Core business info, hours, map, SEO
│   │   ├── navigation.ts         # Menu items & announcements
│   │   ├── categories.ts         # Product categories configuration
│   │   ├── products.ts           # Product showcase items
│   │   ├── founders.ts           # Founders & artisans (safeguarded)
│   │   ├── testimonials.ts       # Verified client reviews
│   │   └── faqs.ts               # Frequently asked questions & benefits
│   ├── hooks/
│   │   └── useReducedMotion.ts   # Accessibility reduced-motion hook
│   ├── lib/
│   │   └── utils.ts              # URL encoders, class merging helpers
│   ├── sections/
│   │   ├── HeroSection.tsx       # Editorial jewellery hero
│   │   ├── CategorySection.tsx   # Shop by category
│   │   ├── FeaturedCollection.tsx# Product grid with category filters
│   │   ├── BridalSection.tsx     # Royal bridal trousseau highlight
│   │   ├── AboutSection.tsx      # Heritage & DHA showroom story
│   │   ├── FoundersSection.tsx   # Master karigars atelier
│   │   ├── WhyChooseUsSection.tsx# Craftsmanship & purity pillars
│   │   ├── TestimonialsSection.tsx# Verified client commendations
│   │   └── VisitUsSection.tsx    # Interactive map, hours & FAQs
│   ├── styles/
│   │   └── index.css             # Tailwind base & custom metallic classes
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   ├── App.tsx                   # Master page orchestrator
│   └── main.tsx                  # React DOM entry
├── tests/
│   └── site.test.ts              # Data integrity & placeholder test
├── .env.example                  # Environment configuration template
├── .gitignore                    # Git ignore file
├── CONTENT_CHECKLIST.md          # Full audit of pending business items
├── index.html                    # HTML entry with fonts & JSON-LD
├── package.json                  # Dependencies & scripts
├── postcss.config.js             # PostCSS plugins
├── tailwind.config.js            # Luxury theme extensions
├── tsconfig.json                 # TypeScript compiler options
└── vite.config.ts                # Vite bundler options
```

---

## 4. LOCAL DEVELOPMENT & COMMANDS

### Prerequisites
- Node.js (v18 or higher recommended)
- Git

### Installation
```bash
# Clone the repository (if not already cloned)
git clone https://github.com/Ahmad1259/Rana-Jewelers-.git
cd Rana-Jewelers-

# Install project dependencies
npm install
```

### Running Locally
```bash
npm run dev
```
The site will start at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Creates an optimized, minified production build in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

### Type Checking & Linting
```bash
npm run type-check
npm run lint
```

---

## 5. HOW TO UPDATE BUSINESS DATA

All business data is intentionally separated from UI code. To modify any content, simply edit the corresponding file in `src/data/`:

### A. Update WhatsApp & Contact Numbers
Open `src/data/site.ts`:
```typescript
contact: {
  phone: '+92 42 35740000',
  phoneDisplay: '+92 (042) 3574-0000',
  whatsappNumber: '923001234567', // digits only without +
  whatsappDisplay: '+92 300 1234567',
  email: 'contact@ranajewellers.com',
  defaultWhatsAppMessage: 'Your custom greeting message...',
}
```

### B. Update Address & Showroom Timings
Open `src/data/site.ts`:
```typescript
location: {
  fullAddress: 'Plot XX, Main Boulevard, Phase X, DHA, Lahore, Pakistan',
  googleMapsDirectionsUrl: 'https://maps.google.com/?q=Your+Exact+Location',
}
```

### C. Add or Update Products
Open `src/data/products.ts` and add a new item:
```typescript
{
  id: 'rj-bridal-07',
  name: 'Kundan Polki Bridal Set',
  category: 'bridal',
  description: 'Handcrafted in 22K gold with Colombian emerald drops.',
  purity: '22K Gold',
  priceOnRequest: true, // or provide numeric price if confirmed
  image: '/images/products/my-new-piece.jpg',
  isNewArrival: true,
  isBridal: true,
  isFeatured: true,
  inStock: true,
}
```

### D. Add Founders When Confirmed
Open `src/data/founders.ts`:
1. Change `isPublished` from `false` to `true`.
2. Replace `ADD_VERIFIED_FOUNDER_NAME` with the real name.
3. Replace `ADD_APPROVED_FOUNDER_BIO` with the approved biography.
4. Place portrait photo in `public/images/founders/`.

### E. Add Real Client Testimonials
Open `src/data/testimonials.ts` and add verified customer feedback:
```typescript
{
  id: 'review-03',
  author: 'Client Name',
  location: 'DHA Lahore',
  rating: 5,
  reviewText: 'Their bridal set design and gold finish was immaculate.',
  date: 'Verified Client',
  isVerified: true,
}
```

---

## 6. DEPLOYMENT OPTIONS

This project is ready to deploy directly to:

- **GitHub Pages:**
  Add `"base": "/Rana-Jewelers-/"` in `vite.config.ts` if deploying to project subpath, or keep `"/"` for custom domains (`ranajewellers.com`).
- **Vercel / Netlify:**
  Connect the GitHub repository and use build command `npm run build` with output directory `dist`.
- **Firebase App Hosting / Firebase Hosting:**
  Use `firebase deploy --only hosting`.

---

## 7. LICENSE & COPYRIGHT

Copyright © 2026 Rana Jewellers. All rights reserved. Handcrafted in Pakistan.
