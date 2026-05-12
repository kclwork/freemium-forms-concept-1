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
   - Heading: "Who is this NDA between?"
   - Subheading: "Tell us about the two parties involved. This information will appear at the top of your agreement."
   - Fields: Disclosing party name, Relationship to other party (dropdown), Receiving party name, Agreement start date (date input)
   - CTA: "Save and continue →"

2. **Step 2 — Confidential info**
   - Heading: "What information needs to stay confidential?"
   - Subheading: "Describe the confidential information you're sharing. The more specific you are, the stronger your protection."
   - Fields: Information types (multi-select checkboxes), Description (textarea), Duration of confidentiality (dropdown)
   - CTA: "Save and continue →"

3. **Step 3 — Obligations**
   - Heading: "What can the recipient do with your information?"
   - Subheading: "These are the rules the receiving party must follow. We've set sensible defaults — review and adjust if needed."
   - Fields: Permitted use (radio buttons), Sharing permissions (radio buttons), Governing state (dropdown)
   - CTA: "Save and continue →"

4. **Step 4 — Review**
   - Heading: "Your NDA is ready to download."
   - Subheading: "Take a moment to review your details below. Everything look right? Enter your email to get your completed NDA."
   - Content: Summary table with all answers from steps 1–3, each row has an Edit link that jumps to the relevant step; email capture card with inline submit button; disclaimer text
   - Back button only — no "next" CTA on this step; submission is triggered from the email card

---

## Key Copy Decisions

**Forms Landing Page**
- Hero headline: "Find the right legal form for your situation."
- Hero subheadline: "Browse hundreds of attorney-drafted legal documents — free to create, no account needed."
- Search placeholder: "Search to explore documents and forms..."
- Browse section heading: "Browse legal documents and forms by area of law."

**NDA Form Card**
- Card label: "Standard NDA"
- Card description: "Protect your confidential information with this standard non-disclosure agreement."

**Form Builder — Step headings and subheadings**
- Step 1: "Who is this NDA between?" / "Tell us about the two parties involved. This information will appear at the top of your agreement."
- Step 2: "What information needs to stay confidential?" / "Describe the confidential information you're sharing. The more specific you are, the stronger your protection."
- Step 3: "What can the recipient do with your information?" / "These are the rules the receiving party must follow. We've set sensible defaults — review and adjust if needed."
- Step 4: "Your NDA is ready to download." / "Take a moment to review your details below. Everything look right? Enter your email to get your completed NDA."

**Email gate**
- Heading: "Your NDA is ready."
- Subheadline: "Enter your email and we'll send you a copy and unlock your download."
- Email placeholder: "Email address"
- Disclaimer: "By continuing you agree to receive emails from LegalShield. View our Privacy Policy. Legal language is provided by LegalShield attorneys and may not be edited without a paid plan."
- CTA: Inline arrow button (→) inside the email input row

**Confirmation screen**
- Success banner heading: "Your NDA is ready"
- Success banner sub: "A copy has been sent to [email] and your download is starting now."
- Delivery card label: "Your document"
- Download row: filename "NDA_JaneSmith_AcmeCorp.pdf" / sub "Check your downloads folder" / action "Download again"
- Email row: "Sent to [email]" / sub "PDF and Word versions included" / action "Resend" (non-functional)
- Upgrade heading: "Make sure your NDA actually holds up."
- Upgrade body: "Your NDA was generated using standard legal language. A LegalShield attorney can review it for your specific situation and make sure it protects you the way you intend."
- Upgrade bullet 1: "Attorney review of your completed NDA"
- Upgrade bullet 2: "Unlimited legal questions on any topic"
- Upgrade bullet 3: "Access to 900+ provider law firms nationwide"
- Upgrade bullet 4: "Create unlimited documents and forms"
- Primary CTA: "Talk to an attorney" — smooth scrolls to pricing section on same page
- Secondary CTA: "I'm done for now" — non-functional placeholder

---

## Key Design Decisions

- **Desktop only.** No responsive or mobile styling. Fixed layout, min-width assumed 1280px.
- **Black, white, and grey only.** The only color exceptions are LegalShield brand purple `#692BEE` for primary filled buttons, green for the success banner on the confirmation screen, and red `#d32f2f` for the invalid email error state.
- **system-ui font throughout** except the document preview, which uses Georgia serif to simulate a real legal document.
- **Two-column layout throughout.** Form detail page: 60% left (content) / 40% right (CTA + preview). Form builder and confirmation: 40% left / 60% right. Right column is `position: sticky` on all three pages.
- **Live document preview is a realistic NDA text simulation.** The right-column preview renders actual NDA legal language in Georgia serif at 10px. Party names, agreement date, confidentiality duration, and governing state update in real time as the user types or selects. Unfilled values show as italic grey placeholders; filled values render bold and dark.
- **PREVIEW watermark on all pre-submission states.** Present on the form detail page and throughout the form builder steps 1–4. Removed on the confirmation screen — absence signals the document is complete and unlocked.
- **Confirmation document shows the fully populated NDA.** The complete form state is passed via React Router `location.state` to the confirmation page. All values the user entered render as filled text in the document; no placeholders remain for a completed form.
- **Stepper updates with checkmarks.** Completed steps show a checkmark in a filled dark circle. The active step shows the step number. Future steps are muted grey. All connecting lines are filled dark on the confirmation screen.
- **All form values are preserved across steps.** Navigating back does not reset previously entered values.
- **Edit links on the review step.** Each row in the Step 4 summary table has an Edit link that jumps directly to the relevant step. Returning from an edit returns the user to Step 4.
- **Fake PDF download triggered on email submission.** A `Blob` is generated in the browser on form submit and again on the confirmation screen "Download again" link. No real document is generated.
- **"Talk to an attorney" scrolls to pricing.** The primary CTA on the confirmation upgrade card smooth-scrolls to the plans section at the bottom of the same page.

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
