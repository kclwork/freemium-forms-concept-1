# LegalShield Freemium Forms — Concept 1 Prototype
## Complete the form free, gate at download

---

## What This Is

A desktop wireframe prototype demonstrating Concept 1 of the LegalShield freemium forms experience. Stakeholder communication tool. Not a production build. Hi-fi design follows in Figma using the Stratos design system once direction is approved.

---

## The Problem We're Solving

LegalShield wants to offer a freemium forms experience on the marketing site to drive email lead capture and eventual membership conversion. Forms will be powered by a third-party vendor — LegalShield owns the prospect-facing experience around the vendor. This prototype demonstrates the ideal experience before vendor selection.

---

## Test Goal

- **Primary goal:** Email capture
- **Secondary goal:** Membership conversion
- All users are treated as prospects. No member check or authentication.

---

## The Concept

**Generosity model.** The prospect browses a forms catalog, selects an NDA, reads the form detail page, and fills out the complete four-step NDA form builder for free with no interruption. They review their answers, then hit the email gate only at the download moment. Email delivery and browser download are triggered simultaneously after valid email submission. An upgrade prompt appears after delivery.

---

## The Six Screens

1. **Homepage** — Existing LegalShield marketing homepage with a secondary hero CTA that enters the forms experience. Route: `/` — Reference: `01-homepage-entry.png`
2. **Forms Landing Page** — Forms marketing landing page with hero search, category tab filter, form card grid, FAQ, pricing, and footer. Route: `/forms` — Reference: `02-forms-landing-page.png`
3. **NDA Form Detail Page** — Two-column detail page with document preview (PREVIEW watermark), CTA card, FAQ, and related forms. Route: `/forms/nda` — Reference: `03-form-detail-nda.png`
4. **NDA Form Builder (Steps 1–3)** — Three-step form builder with live document preview; the right column updates in real time as the user types. Route: `/forms/nda/create` — Reference: `04-form-step-1-parties.png`
5. **Review & Email Gate (Step 4)** — Answer summary card and email capture gate that triggers the download. Route: `/forms/nda/create` (step 4) — Reference: `05-form-step-4-review-email-gate.png`
6. **Confirmation** — Post-download success screen with banner, delivery card, upgrade prompt, and unlocked document preview. Route: `/forms/nda/confirmation` — Reference: `06-email-submitted-confirmation.png`

---

## The Four Form Steps

1. **Step 1 — Parties**
   - Heading: "Who's involved in this agreement?"
   - Subheading: "Enter the names and roles of the parties entering into this NDA."
   - Fields: Disclosing Party Name, Disclosing Party Type (Individual / Company), Receiving Party Name, Receiving Party Type (Individual / Company)
   - CTA: "Continue"

2. **Step 2 — Dates & Terms**
   - Heading: "When does this agreement take effect?"
   - Subheading: "Set the start date and how long the confidentiality obligation lasts."
   - Fields: Effective Date, Confidentiality Period (dropdown), Governing State (dropdown)
   - CTA: "Continue"

3. **Step 3 — Confidential Information**
   - Heading: "What information is being protected?"
   - Subheading: "Describe the confidential information covered by this agreement."
   - Fields: Description of Confidential Information (textarea), Exclusions (textarea, optional)
   - CTA: "Continue"

4. **Step 4 — Review & Download**
   - Heading: "Review your NDA"
   - Subheading: "Check your answers before downloading. Enter your email to receive your completed document."
   - Content: Summary card with all answers from steps 1–3, each with an Edit link; email input field; download trigger button
   - CTA: "Get my free NDA"

---

## Key Copy Decisions

**Forms Landing Page**
- Hero headline: "Legal forms, done right."
- Hero subheadline: "Free to complete. Download when you're ready."
- Search placeholder: "Search forms — try 'NDA', 'lease', 'bill of sale'…"
- Browse section heading: "Browse all forms"

**NDA Form Card**
- Card label: "Non-Disclosure Agreement"
- Card description: "Protect confidential information shared between two parties."
- Card tag: "Free"

**Form Builder — Step headings and subheadings**
- Step 1: "Who's involved in this agreement?" / "Enter the names and roles of the parties entering into this NDA."
- Step 2: "When does this agreement take effect?" / "Set the start date and how long the confidentiality obligation lasts."
- Step 3: "What information is being protected?" / "Describe the confidential information covered by this agreement."
- Step 4: "Review your NDA" / "Check your answers before downloading. Enter your email to receive your completed document."

**Field labels and helper text**
- Disclosing Party Name — helper: "The party sharing confidential information"
- Disclosing Party Type — options: Individual, Company
- Receiving Party Name — helper: "The party receiving confidential information"
- Receiving Party Type — options: Individual, Company
- Effective Date — helper: "The date this agreement becomes binding"
- Confidentiality Period — helper: "How long the receiving party must keep information confidential"
- Governing State — helper: "The state whose laws govern this agreement"
- Description of Confidential Information — helper: "Be specific — vague descriptions are harder to enforce"
- Exclusions — helper: "Optional — list any information that is not covered by this NDA"

**Email gate**
- Heading: "Your NDA is ready."
- Subheadline: "Enter your email and we'll send your completed document. It also downloads instantly to your browser."
- Email placeholder: "Enter your email address"
- Disclaimer: "No account required. We'll send your document and occasional legal tips. Unsubscribe any time."
- CTA button: "Get my free NDA"

**Confirmation screen**
- Success banner: "Your NDA has been sent to [email]"
- Delivery card heading: "What happens next"
- Delivery card body: "Check your inbox — your completed NDA is on its way. The document also downloaded to your browser."
- Upgrade prompt heading: "Want a lawyer to review it?"
- Upgrade prompt body: "LegalShield members get unlimited document reviews from a dedicated provider law firm. Starting at $29/month."
- Upgrade bullet 1: "Unlimited legal consultations"
- Upgrade bullet 2: "Document review and attorney letters"
- Upgrade bullet 3: "Cancel any time"
- Primary upgrade CTA: "See plans"
- Secondary upgrade CTA: "Talk to an attorney"

---

## Key Design Decisions

- **Desktop only.** No responsive or mobile styling. Fixed layout, min-width assumed 1280px.
- **Black, white, and grey only.** The only color exceptions are LegalShield brand purple for primary buttons, green for the success banner and confirmation states, and red for invalid email error state.
- **system-ui font throughout.** No external typefaces loaded.
- **Two-column layout throughout.** Form detail page: 60% left (content) / 40% right (CTA + preview). Form builder: 40% left (form questions) / 60% right (live document preview).
- **Live document preview updates in real time.** As the user types into any field, the corresponding variable in the right-column document preview updates immediately. The update is a subtle fade, not an abrupt jump.
- **PREVIEW watermark on all builder steps.** The watermark is present on the document preview throughout the form builder and on the form detail page. It is removed on the confirmation screen once the email has been submitted.
- **Stepper updates with checkmarks.** Completed steps show a checkmark. The active step shows the step number. Future steps are visually muted.
- **All form values are preserved across steps.** Navigating back does not reset previously entered values. The stepper allows backward navigation to completed steps.
- **Edit links on the review step.** Each section in the Step 4 summary card has an Edit link that navigates directly to the correct step. Returning from an edit returns the user to Step 4.
- **Fake PDF download triggered on email submission.** A static placeholder PDF is served to the browser on form submit. No real document is generated.
- **"Talk to an attorney" scrolls to pricing.** The secondary CTA on the confirmation upgrade prompt scrolls to the pricing section on the same page (or navigates to the plans page).

---

## What This Prototype Does Not Include

- Final color or visual design (follows in Figma with Stratos)
- Real backend email capture or CRM integration
- Real document generation engine
- Third-party vendor integration
- Member check or authentication
- Mobile responsive design
- Accessibility compliance (WCAG)

---

## Next Steps After Stakeholder Approval

1. Hi-fi design in Figma using the Stratos design system
2. Concept 2 prototype built separately for comparison
3. Vendor evaluation informed by concept requirements (form builder, document preview, PDF generation)
4. Final build handed off to engineering with Figma specs

---

## Phase Log

- [x] **Phase 1** — Project setup, homepage, and routing
- [x] **Phase 2** — Forms landing page
- [x] **Phase 3** — NDA form detail page
- [x] **Phase 4** — NDA form builder (steps 1–4 with live preview)
- [x] **Phase 5** — Post-download confirmation screen
