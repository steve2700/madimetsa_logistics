# Madimetsa Logistics Gauteng

Freight transport, warehousing, fleet management and cross-border logistics website built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

Live site: [www.madimetsalogistics.co.za](https://www.madimetsalogistics.co.za)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Images | Next.js `<Image>` (WebP optimisation) |
| SEO | Metadata API + JSON-LD structured data |
| Package manager | pnpm |
| Deployment | Vercel |

---

## Project Structure

```
app/
├── page.tsx                        # Homepage
├── layout.tsx                      # Root layout (nav, footer, mobile call bar)
├── globals.css                     # Global styles + Tailwind base
├── robots.ts                       # robots.txt generation
├── sitemap.ts                      # sitemap.xml generation (36 URLs)
│
├── about/                          # About Us
├── areas/                          # Service areas overview
├── contact/                        # Contact & quote request form
├── faq/                            # Frequently asked questions
├── gallery/                        # Photo gallery with lightbox
├── privacy-policy/                 # Privacy policy (POPIA compliant)
├── services/                       # All services overview
├── terms/                          # Terms & conditions
│
├── freight-transport/              # Freight transport
├── warehousing/                    # Warehousing & distribution
├── fleet-management/               # Fleet management
├── supply-chain-solutions/         # Supply chain solutions
├── cross-border-logistics/         # Cross-border logistics
├── express-delivery/               # Express delivery
├── contract-logistics/             # Contract logistics
├── freight-forwarding/             # Freight forwarding
│
├── logistics-alberton/             # Area page, Alberton
├── logistics-benoni/               # Area page, Benoni
├── logistics-boksburg/             # Area page, Boksburg
├── logistics-centurion/            # Area page, Centurion
├── logistics-edenvale/             # Area page, Edenvale
├── logistics-fourways/             # Area page, Fourways
├── logistics-germiston/            # Area page, Germiston
├── logistics-johannesburg/         # Area page, Johannesburg
├── logistics-kempton-park/         # Area page, Kempton Park
├── logistics-krugersdorp/          # Area page, Krugersdorp
├── logistics-midrand/              # Area page, Midrand
├── logistics-pretoria/             # Area page, Pretoria
├── logistics-randburg/             # Area page, Randburg
├── logistics-roodepoort/           # Area page, Roodepoort
├── logistics-sandton/              # Area page, Sandton
├── logistics-soweto/               # Area page, Soweto
├── logistics-springs/              # Area page, Springs
└── logistics-vereeniging/          # Area page, Vereeniging

components/
├── site-header.tsx                 # Main nav, services & areas dropdowns
├── site-footer.tsx                 # Footer, brand plate, services & areas links
├── breadcrumbs.tsx                 # Breadcrumb nav (schema-ready)
└── gallery-grid.tsx                # Masonry gallery with category filter + lightbox

public/images/                      # All optimised images (WebP + PNG + JPG)
```

> Note: this structure is carried over from the previous build and updated for the logistics rebrand. Confirm folder names against your actual repo before relying on this as documentation, since some routes or components may differ.

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Install

```bash
pnpm install
```

### Run development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production

```bash
pnpm build
pnpm start
```

---

## SEO Architecture

Every page is built with a layered SEO approach:

### Metadata (per page)
- Unique `title` and `description`
- `canonical` URL
- `robots` directives (`index`, `follow`, `max-snippet`, `max-image-preview`)
- `openGraph` with real image URLs, dimensions and alt text
- `twitter:card` with `summary_large_image`
- Geo-targeted `keywords` (Johannesburg, Pretoria, Midrand, Centurion, Sandton, etc.)

### Structured Data (JSON-LD)
The homepage and services page inject the following schema blocks:

| Schema Type | Purpose |
|---|---|
| `LocalBusiness` | NAP, area served, offer catalogue |
| `ItemList` | Links to all 8 service pages |
| `Service` (×8) | One node per service, linked to `LocalBusiness` via `@id` |
| `FAQPage` | Q&As eligible for Google rich results |
| `BreadcrumbList` | Breadcrumb trail for rich results |

### Sitemap
Auto-generated at `/sitemap.xml` via `app/sitemap.ts`:
- 10 main/info pages
- 8 service pages
- 18 area pages (one per Gauteng location)
- 36 URLs total

### Robots
`/robots.txt` via `app/robots.ts`:
- Allows all crawlers
- Disallows `/api/`, `/_next/`, `/admin/`
- Points to sitemap

---

## Design System

| Token | Value |
|---|---|
| Brand black | `#0a0a0a` |
| Dark grey | `#1a1a1a` |
| Gold, amber | `#e8a33d` |
| Red, urgent freight | `#b91c1c` |
| Off-white surface | `#f5f4f0` |
| Body font | Geist, system sans-serif fallback |

Header and footer both use the amber accent (`#e8a33d`) for active links, dividers and buttons. The header runs on a light background (white top nav, cream contact bar) so the logo's black wordmark stays readable; the footer stays dark, with the logo placed on a small white plate for the same reason.

---

## Images

All images are stored in `public/images/` and served via Next.js `<Image>` for automatic:
- WebP conversion
- Responsive `srcset` generation
- Lazy loading (with `priority` on above-the-fold images)

Key images:

| File | Used on |
|---|---|
| `hero-madimetsa-logistics-truck.png` | Hero, services section, why choose us, pricing section |

> The site currently runs on a single fleet photo across several sections. Add more freight, warehouse and fleet photos to `public/images/` and swap them into `app/page.tsx` as they become available.

---

## Deployment

The site deploys automatically to **Vercel** on every push to `main`.

Environment variables required: none (no API keys or external services).

After deploying:
1. Submit `https://www.madimetsalogistics.co.za/sitemap.xml` to Google Search Console
2. Verify the canonical domain (`www`) in Search Console
3. Check structured data with [Google's Rich Results Test](https://search.google.com/test/rich-results)

---

## Contact

**Madimetsa Logistics**
Phone: 072 308 9983
Email: info@madimetsalogistics.co.za
Website: www.madimetsalogistics.co.za
