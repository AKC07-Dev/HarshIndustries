# Harsh Industries — Official Industrial Website

A complete, responsive, multi-page web platform engineered for **Harsh Industries**, specializing in the manufacturing and repairing of electrical transformers, Current Transformers (CTs), and Potential Transformers (PTs) located in MIDC Area, Jalgaon, Maharashtra.

---

## 🏢 Verified Business Information

| Field | Verified Detail |
|---|---|
| **Company Name** | Harsh Industries |
| **Category** | Industrial Electrical Equipment Manufacturing and Repairing |
| **Business Activities** | • Manufacturing of Transformers<br>• Manufacturing of Current Transformers (CTs)<br>• Manufacturing of Potential Transformers (PTs)<br>• Transformer Repairing |
| **Business Address** | V-95/B, MIDC Area, Ajanta Road, Jalgaon, Maharashtra, India. |
| **Primary Contact** | +91 93711 89970 |
| **Secondary Contact** | +91 95525 95500 |
| **Official Email** | [tusharchitte31@yahoo.co.in](mailto:tusharchitte31@yahoo.co.in) |
| **WhatsApp Enquiries** | +91 93711 89970 |
| **Google Maps Location** | [View on Google Maps](https://share.google/LNeZqBu9rRZYhdfw9) |
| **Developer Credit** | Made with care by Antara. |

---

## 🎨 Industrial Design System

- **Primary Colors**:
  - Deep Navy: `#101C2C` (`bg-navy-850`)
  - Industrial Blue: `#173B5E` (`bg-navy-700`)
  - Electric Blue: `#2679C9` (`bg-electric-500`)
- **Secondary Colors**:
  - Steel Grey: `#64748B` (`text-steel-400`)
  - Light Silver: `#E8EDF2` (`border-steel-100`)
  - Off-White: `#F7F9FC` (`bg-steel-50`)
- **Accent**:
  - Copper Windings Metallic: `#B86D4A` (`text-copper-500`)
- **Typography**:
  - Headings: `Space Grotesk` (Google Font via `next/font/google`)
  - Body: `Inter` (Google Font via `next/font/google`)

---

## 🌐 Website Architecture & Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | **Home** | Comprehensive industrial presentation, hero with factory background, confirmed product range, manufacturing & repair overview, infrastructure gallery preview, FAQ accordion, and enquiry form. |
| `/about` | **About Us** | Verified company overview, MIDC Jalgaon location details, confirmed business disciplines, and draft operational principles for owner review. |
| `/products` | **Products Catalogue** | Complete overview of all 3 confirmed categories with client drawing disclaimers. |
| `/products/transformers` | **Transformers** | Working principles of electromagnetic power transfer, distribution applications, structured placeholder specification table, and RFQ callouts. |
| `/products/current-transformers` | **Current Transformers (CTs)** | Current reduction principles, measuring vs. protection applications, parameter tables, and direct quotation requests. |
| `/products/potential-transformers` | **Potential Transformers (PTs)** | Voltage transformation, metering and telemetry sensing, and structured parameter checklist. |
| `/services` | **Services Overview** | All 4 confirmed activities with typical customer requirements and consultation shortcuts. |
| `/services/transformer-repair` | **Transformer Repairing** | Dedicated inspection, fault assessment, and repair requirements discussion for industrial equipment. |
| `/infrastructure` | **Workshop Infrastructure** | High-resolution photography of workshop hall, industrial machinery, winding materials, coils, and plant exterior with interactive category filters and full-screen lightbox modal. |
| `/contact` | **Contact Us** | Verified address, phone numbers, clickable email, interactive Google Maps embed, and complete equipment enquiry form. |
| `/api/enquiry` | **Enquiry API Route** | Validates mobile numbers, checks anti-spam honeypot, generates audit reference IDs, and prepares payloads for email dispatch. |
| `/sitemap.xml` | **Dynamic XML Sitemap** | Pre-rendered search engine indexing map. |
| `/robots.txt` | **Robots Configuration** | Search crawler indexing rules. |

---

## 🛠️ Centralized Content Architecture

All business details, products, specifications, and navigation items are decoupled from UI components in `src/data/`:

- `src/data/company.ts` — Single source of truth for name, phone numbers, email, address, WhatsApp link generator, and Google Maps URL.
- `src/data/products.ts` — Confirmed categories, detailed working principles, application lists, and structured placeholder specification tables.
- `src/data/services.ts` — Confirmed manufacturing and repairing scopes and step-by-step workflow stages.
- `src/data/infrastructure.ts` — Factory photographs mapped to categories with captions.
- `src/data/navigation.ts` — Navbar menus, dropdown items, and footer links.
- `src/data/faqs.ts` — Customer FAQs based strictly on confirmed information.
- `src/data/seo.ts` — Meta tags, OpenGraph data, and LocalBusiness Schema.org JSON-LD structured data.

---

## ⚙️ Connecting Production Email Service

The enquiry form submits to `/api/enquiry`. In development and initial review mode, submissions are verified and logged with reference IDs (e.g. `ENQ-1793954700311`).

To forward enquiries directly to `tusharchitte31@yahoo.co.in` via **Resend** or **Nodemailer**:

1. Install Resend:
   ```bash
   npm install resend
   ```
2. Add your API key to `.env.local`:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ENQUIRY_TO_EMAIL=tusharchitte31@yahoo.co.in
   ```
3. In `src/app/api/enquiry/route.ts`, uncomment or call the mail delivery dispatch.

---

## 🚀 Running the Project

```bash
# Run local development server
npm run dev

# Run production build & type check
npm run build

# Start production server
npm run start
```
