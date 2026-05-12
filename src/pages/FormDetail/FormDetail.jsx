import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import styles from './FormDetail.module.css'

// ── Icons ──────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#111" />
      <polyline points="5,10 8.5,13.5 15,7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className={styles.shieldIcon} viewBox="0 0 20 24" fill="none">
      <path d="M10 0L20 4v8c0 5.5-4.5 10-10 12C4.5 22 0 17.5 0 12V4L10 0z" fill="#111" />
    </svg>
  )
}

// ── Data ──────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: 'Is an NDA legally enforceable?',
    a: 'Yes. An NDA is a legally binding contract in the United States when it includes an offer, acceptance, and consideration. Courts can enforce NDA terms and award damages for breach, including injunctions to prevent further disclosure.',
  },
  {
    q: "What's the difference between a one-way and mutual NDA?",
    a: 'A one-way NDA protects information shared by one party to another — common when hiring contractors or vendors. A mutual NDA protects information shared by both parties and is used when two businesses are exploring a partnership or acquisition.',
  },
  {
    q: 'Do both parties need to sign?',
    a: 'Yes. Both the disclosing party and the receiving party must sign the NDA for it to be enforceable. Without both signatures there is no binding agreement, and either party could share the information without legal consequence.',
  },
  {
    q: 'Can I use this NDA for international agreements?',
    a: 'This template is designed for use in the United States and governed by U.S. law. For international agreements, we recommend consulting a LegalShield attorney to ensure the document meets the legal requirements of the relevant jurisdiction.',
  },
]

const RELATED_FORMS = [
  { id: 'contractor', category: 'Business', title: 'Independent Contractor Agreement' },
  { id: 'cease', category: 'Business', title: 'Cease and Desist Letter' },
  { id: 'partnership', category: 'Business', title: 'Business Partnership Agreement' },
  { id: 'employment', category: 'Employment', title: 'Employment Agreement' },
]

// ── Document Preview ──────────────────────────────────────────────────────────

function DocPreview() {
  return (
    <div className={styles.docPreviewWrap}>
      <div className={styles.docPanel}>
        <div className={styles.docInner}>
          {/* Document header */}
          <div className={`${styles.docLine} ${styles.docLineTitle}`} />
          <div className={`${styles.docLine} ${styles.docLineSubtitle}`} />
          <div className={styles.docDivider} />

          {/* Party block */}
          <div className={`${styles.docLine} ${styles.docLineSectionHead}`} />
          <div className={`${styles.docLine} ${styles.docLineW95}`} />
          <div className={`${styles.docLine} ${styles.docLineW88}`} />
          <div className={`${styles.docLine} ${styles.docLineW72}`} />
          <div className={styles.docSpacer} />

          {/* Recitals */}
          <div className={`${styles.docLine} ${styles.docLineSectionHead}`} />
          <div className={`${styles.docLine} ${styles.docLineW93}`} />
          <div className={`${styles.docLine} ${styles.docLineW85}`} />
          <div className={`${styles.docLine} ${styles.docLineW90}`} />
          <div className={`${styles.docLine} ${styles.docLineW68}`} />
          <div className={styles.docSpacer} />

          {/* Obligations */}
          <div className={`${styles.docLine} ${styles.docLineSectionHead}`} />
          <div className={`${styles.docLine} ${styles.docLineW96}`} />
          <div className={`${styles.docLine} ${styles.docLineW82}`} />
          <div className={`${styles.docLine} ${styles.docLineW88}`} />
          <div className={`${styles.docLine} ${styles.docLineW55}`} />
          <div className={styles.docSpacer} />

          {/* Term */}
          <div className={`${styles.docLine} ${styles.docLineSectionHead}`} />
          <div className={`${styles.docLine} ${styles.docLineW90}`} />
          <div className={`${styles.docLine} ${styles.docLineW78}`} />
          <div className={`${styles.docLine} ${styles.docLineW62}`} />

          {/* Watermark */}
          <div className={styles.watermark}>PREVIEW</div>
        </div>
      </div>
      <p className={styles.docPageLabel}>Preview: page 1 of 4</p>
    </div>
  )
}

// ── Main Component ─────────────────────────────────────────────────────────────

export default function FormDetail() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className={styles.page}>
      <Nav />

      {/* ── BREADCRUMB ── */}
      <div className={styles.breadcrumbBar}>
        <div className={styles.breadcrumbInner}>
          <Link to="/forms" className={styles.breadcrumb}>← Browse forms and documents</Link>
        </div>
      </div>

      {/* ── PAGE HEADER ── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className={styles.eyebrow}>BUSINESS — CONFIDENTIALITY</p>
          <h1 className={styles.headline}>Non-disclosure agreement (NDA)</h1>
          <p className={styles.description}>
            Protect your confidential information when sharing it with employees, contractors, partners, or anyone else who needs access to your sensitive business details.
          </p>
          <div className={styles.pills}>
            {['Takes about 5 minutes', 'Free to create', 'PDF download', 'Attorney review available'].map(label => (
              <span className={styles.pill} key={label}>{label}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── TWO COLUMN LAYOUT ── */}
      <div className={styles.twoColWrap}>
        <div className={styles.twoColInner}>

          {/* LEFT COLUMN */}
          <div className={styles.leftCol}>

            {/* What is an NDA? */}
            <section className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>What is an NDA?</h2>
              <p className={styles.sectionBody}>
                A non-disclosure agreement is a legally binding contract that establishes a confidential relationship between two or more parties. It prevents the receiving party from sharing or using your confidential information without permission. NDAs are one of the most common legal documents in business, used to protect trade secrets, proprietary processes, business plans, and other sensitive information before it is shared with outside parties.
              </p>
            </section>

            {/* When do you need one? */}
            <section className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>When do you need one?</h2>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}>
                  <CheckIcon />
                  <span>Hiring a freelancer or contractor who will access your business plans</span>
                </li>
                <li className={styles.checkItem}>
                  <CheckIcon />
                  <span>Sharing a product idea, invention, or trade secret with a potential partner</span>
                </li>
                <li className={styles.checkItem}>
                  <CheckIcon />
                  <span>Onboarding employees who will handle sensitive company information</span>
                </li>
                <li className={styles.checkItem}>
                  <CheckIcon />
                  <span>Entering into discussions with a potential buyer or investor</span>
                </li>
              </ul>
            </section>

            {/* What you'll need */}
            <section className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>What you'll need to fill this out</h2>
              <ul className={styles.checkList}>
                <li className={styles.checkItem}>
                  <CheckIcon />
                  <span>Full legal name and address of both parties</span>
                </li>
                <li className={styles.checkItem}>
                  <CheckIcon />
                  <span>Description of the confidential information being protected</span>
                </li>
                <li className={styles.checkItem}>
                  <CheckIcon />
                  <span>Duration of the confidentiality obligation</span>
                </li>
                <li className={styles.checkItem}>
                  <CheckIcon />
                  <span>State or jurisdiction governing the agreement</span>
                </li>
              </ul>
            </section>

            {/* FAQ */}
            <section className={styles.contentSection}>
              <h2 className={styles.sectionHeading}>FAQ</h2>
              <div className={styles.accordionList}>
                {FAQ_ITEMS.map((item, i) => (
                  <div className={styles.accordionItem} key={i}>
                    <button
                      className={styles.accordionTrigger}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      {item.q}
                      <span className={`${styles.accordionIcon} ${openFaq === i ? styles.open : ''}`}>+</span>
                    </button>
                    {openFaq === i && (
                      <p className={styles.accordionBody}>{item.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN */}
          <div className={styles.rightCol}>

            {/* CTA card */}
            <div className={styles.ctaCard}>
              <h2 className={styles.ctaHeading}>Create your NDA for free.</h2>
              <p className={styles.ctaSub}>Takes about 5 minutes. Your information is saved as you go.</p>
              <ul className={styles.trustList}>
                <li className={styles.trustItem}>
                  <ShieldIcon />
                  <span>Free to create and download</span>
                </li>
                <li className={styles.trustItem}>
                  <ShieldIcon />
                  <span>No account required to start</span>
                </li>
                <li className={styles.trustItem}>
                  <ShieldIcon />
                  <span>Attorney review available after download</span>
                </li>
              </ul>
              <button
                className={styles.btnStart}
                onClick={() => navigate('/forms/nda/create')}
              >
                Start for free
              </button>
            </div>

            {/* Document preview */}
            <DocPreview />

          </div>
        </div>
      </div>

      {/* ── RELATED FORMS ── */}
      <section className={styles.relatedSection}>
        <div className={styles.relatedInner}>
          <h2 className={styles.relatedHeading}>Related forms</h2>
          <div className={styles.relatedGrid}>
            {RELATED_FORMS.map(form => (
              <div className={styles.relatedCard} key={form.id}>
                <div className={styles.relatedCardImg}>
                  <span className={styles.imgLabel}>Image</span>
                </div>
                <span className={styles.relatedCategory}>{form.category}</span>
                <h3 className={styles.relatedTitle}>{form.title}</h3>
                <button className={styles.relatedLink}>View form →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
