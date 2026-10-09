# RANA JEWELLERS — CONTENT & BUSINESS DATA CHECKLIST

This document lists every pending asset, unverified claim, provisional business detail, and future addition for **Rana Jewellers** (DHA Lahore).

---

## 1. BRAND ASSETS

| Asset | Status | Notes / Location |
| :--- | :--- | :--- |
| **Official Metallic Logo** | ✅ Available | `public/images/brand/rana-jewellers-logo.png` (Downloaded from owner's Google Drive) |
| **Vector Favicon** | ✅ Available | `public/favicon.svg` (Custom gold monogram generated) |
| **High-Res Transparent PNG Logo** | ⏳ Optional | If an alternate transparent vector SVG is needed for dark/light headers |
| **Brand Story Video / Reel** | ⏳ Pending | Can be placed in Hero section (`public/videos/hero-reel.mp4`) |

---

## 2. STORE LOCATION & VERIFICATION

| Detail | Current Setting | Action Needed |
| :--- | :--- | :--- |
| **Physical Address** | `DHA Main Boulevard, Lahore, Pakistan` | Confirm exact Commercial Plot / Building number and Sector/Phase (e.g. Phase 5 or Phase 6) |
| **Showroom Photos** | ✅ 3 Photos Added | `public/images/store/showroom-1.jpg`, `showroom-2.jpg`, `showroom-3.jpg` (From Google Drive) |
| **Google Maps Coordinates** | `31.47895, 74.37894` | Update if a dedicated Google Maps Place ID / URL is preferred |
| **Boutique Hours** | `Mon–Sat: 12:00 PM – 9:30 PM`, `Sun: Appointment Only` | Confirm if Sunday is fully open or closed |

---

## 3. CONTACT & CONCIERGE INFORMATION

| Field | Current Setting | File to Update |
| :--- | :--- | :--- |
| **WhatsApp Number** | `923001234567` | `src/data/site.ts` -> `siteConfig.contact.whatsappNumber` |
| **Landline / Phone** | `+92 42 35740000` | `src/data/site.ts` -> `siteConfig.contact.phone` |
| **Official Email** | `contact@ranajewellers.com` | `src/data/site.ts` -> `siteConfig.contact.email` |
| **Instagram Profile** | `https://instagram.com/ranajewellers` | `src/data/site.ts` -> `siteConfig.socialLinks` |
| **Facebook Page** | `https://facebook.com/ranajewellers` | `src/data/site.ts` -> `siteConfig.socialLinks` |

---

## 4. PRODUCT CATALOGUE & PHOTOGRAPHY

| Category | Current Showcase | Action Needed |
| :--- | :--- | :--- |
| **Bridal Trousseau** | Exemplary bridal sets (`priceOnRequest: true`) | Provide photography of real in-stock bridal sets & confirmed weights |
| **Diamond Solitaires** | Brilliant cut rings & pendants | Provide GIA / IGI certification details and stone specifications |
| **Pure Gold (21K & 22K)** | Royal haar, bangles, and rings | Add actual weights in tolas / grams and daily gold rate integration if desired |
| **Product Prices** | Hidden (`priceOnRequest: true`) | Intentionally kept on request to avoid fabricating figures |

---

## 5. FOUNDERS & ARTISANS

| Field | Current Status | Safeguard |
| :--- | :--- | :--- |
| **Founder Names** | `ADD_VERIFIED_FOUNDER_NAME` | Hidden (`isPublished: false`). Replaced by a dignified Master Karigars Atelier statement until approved |
| **Founder Biographies** | `ADD_APPROVED_FOUNDER_BIO` | Hidden until supplied by owners |
| **Founder Portraits** | Pending | Will be placed in `public/images/founders/` |

---

## 6. CLIENT TESTIMONIALS

| Field | Status | Notes |
| :--- | :--- | :--- |
| **Customer Reviews** | Verified Client placeholders | No fake reviews or fabricated quotes. Real reviews can be pasted into `src/data/testimonials.ts` |

---

## 7. DOMAIN & PRODUCTION DEPLOYMENT

| Task | Configuration |
| :--- | :--- |
| **Production Domain** | `https://ranajewellers.com` (configured in `site.ts` & `robots.txt`) |
| **Hosting Platform** | Ready for GitHub Pages, Vercel, Netlify, or Firebase App Hosting |
| **SSL / HTTPS** | Enabled automatically upon connecting custom domain |
