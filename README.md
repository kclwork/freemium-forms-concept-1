# LegalShield Freemium Forms — Concept 1 Prototype

## Overview

This is a desktop wireframe prototype demonstrating Concept 1 of the LegalShield freemium forms experience — complete the form free, gate at download. Built for stakeholder presentation alongside Concept 2. Not a production build. Hi-fi design follows in Figma using Stratos once direction is approved.

## Key Concept

The prospect completes the full NDA form builder for free with no interruption. The only gate is at the download moment — a valid email is required to receive the completed document. This is the generosity model. The email capture hits at the highest intent moment after all the work is done.

## Flow Summary

1. **Homepage** — Existing LegalShield marketing homepage with a secondary hero CTA ("Get a free legal form") that enters the forms experience. Route: `/`
2. **Forms Landing Page** — Forms marketing landing page with hero search, category tab filter, form card grid, FAQ, pricing, and footer. Route: `/forms`
3. **NDA Form Detail Page** — Two-column detail page with document preview (PREVIEW watermark), CTA card, FAQ, and related forms. Route: `/forms/nda`
4. **NDA Form Builder** — Four-step form builder with live document preview on the right; fields update the preview in real time as the user types. Route: `/forms/nda/create`
5. **Review & Email Gate** — Step 4 review screen with answer summary card and email capture gate that triggers the download. Route: `/forms/nda/create` (step 4)
6. **Confirmation** — Post-download confirmation with success banner, delivery card, upgrade prompt, and unlocked document preview. Route: `/forms/nda/confirmation`

## References Folder

| File | Description |
|------|-------------|
| `00-user-flow-concept-1.png` | Full user flow diagram for Concept 1 — read this first |
| `01-homepage-entry.png` | Existing LegalShield homepage screenshot |
| `01-homepage-entry-annotation.png` | Annotation notes for the homepage screen |
| `02-forms-landing-page.png` | Forms marketing landing page screenshot |
| `02-forms-landing-page-annotation.png` | Annotation notes for the forms landing page |
| `03-form-detail-nda.png` | NDA form detail page screenshot |
| `03-form-detail-nda-annotation.png` | Annotation notes for the NDA detail page |
| `04-form-step-1-parties.png` | Form builder step 1 screenshot |
| `04-form-step-1-parties annotation.png` | Annotation notes for form step 1 |
| `05-form-step-4-review-email-gate.png` | Step 4 review and email gate screenshot |
| `06-email-submitted-confirmation.png` | Post-download confirmation page screenshot |
| `06-email-submitted-confirmation-annotation.png` | Annotation notes for the confirmation screen |
| `GENERAL INSTRUCTIONS FOR ALL SCREENS.png` | Global design and interaction rules that apply to every screen |
| `src:components:Homepage:/` | Source files for the homepage component copied from the document review prototype |

## How to Run Locally

```bash
cd freemium-forms-concept-1
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## How to Deploy

```bash
npx vercel --prod
```

Run from the project root. Vercel auto-detects the Vite build. The `vercel.json` catch-all rewrite handles client-side routing so all routes load correctly on hard refresh. Expected URL format: `https://freemium-forms-concept-1.vercel.app`

## Phase Log

- [x] **Phase 1** — Project setup, homepage, and routing
- [x] **Phase 2** — Forms landing page
- [x] **Phase 3** — NDA form detail page
- [x] **Phase 4** — NDA form builder (steps 1–4 with live preview)
- [x] **Phase 5** — Post-download confirmation screen

## Notes for Developers

- **Wireframe prototype only.** Desktop only. No responsive or mobile styling. Do not attempt to adapt for mobile.
- **Homepage is copied.** The homepage component is copied exactly from the document review prototype (`elle-summary-variant-1-v2`). The only change is the secondary CTA text ("Get a free legal form") and its link (`/forms`). Do not modify anything else on the homepage.
- **Email capture is not connected to a real backend.** The email submission on the review step simulates success for any valid email format. No data is sent anywhere.
- **PDF download is a static placeholder.** The download triggered after email submission serves a placeholder file. There is no real document generation.
- **Live document preview is simulated.** The right-column document preview on the form builder updates in response to form state changes using React state. It is not powered by a real document engine.
- **Form values are held in React state only.** No data is persisted to a database, localStorage, or any external service. Refreshing the page resets all form progress.
