import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import styles from './FormsLanding.module.css'

// ── Data ──────────────────────────────────────────────────────────────────────

const ALL_CARDS = [
  {
    id: 'nda',
    category: 'Business',
    title: 'Standard NDA',
    description: 'Protect your confidential information with this standard non-disclosure agreement.',
    href: '/forms/nda',
  },
  {
    id: 'lease',
    category: 'Real Estate',
    title: 'Residential Lease Agreement',
    description: 'Create a legally sound rental agreement for residential property between landlord and tenant.',
  },
  {
    id: 'will',
    category: 'Estate Planning',
    title: 'Last Will and Testament',
    description: 'Document your final wishes and ensure your assets are distributed to the right people.',
  },
  {
    id: 'poa',
    category: 'Estate Planning',
    title: 'Power of Attorney',
    description: 'Authorize a trusted person to make legal and financial decisions on your behalf.',
  },
  {
    id: 'contractor',
    category: 'Business',
    title: 'Independent Contractor Agreement',
    description: 'Define the terms of a working relationship between a business and an independent contractor.',
  },
  {
    id: 'cease',
    category: 'Business',
    title: 'Cease and Desist Letter',
    description: 'Formally demand that an individual or organization stop an activity that infringes on your rights.',
  },
  {
    id: 'demand',
    category: 'Business',
    title: 'Demand Letter',
    description: 'Request payment or action from another party before pursuing formal legal proceedings.',
  },
  {
    id: 'bill-of-sale',
    category: 'Business',
    title: 'Bill of Sale',
    description: 'Document the transfer of ownership of personal property or goods from seller to buyer.',
  },
  {
    id: 'offer',
    category: 'Employment',
    title: 'Employment Offer Letter',
    description: 'Extend a formal offer of employment outlining compensation, start date, and key terms.',
  },
]

const TABS = ['View all', 'Real estate', 'Estate planning', 'Family', 'Business', 'Employment']

const TAB_PLACEHOLDERS = {
  'Real estate': [
    { id: 'ph-re-1', category: 'Real Estate', title: 'Commercial Lease Agreement', description: 'Establish terms for leasing commercial space between a business tenant and property owner.' },
    { id: 'ph-re-2', category: 'Real Estate', title: 'Property Purchase Agreement', description: 'Define the terms and conditions for the sale and purchase of residential or commercial property.' },
    { id: 'ph-re-3', category: 'Real Estate', title: 'Sublease Agreement', description: 'Allow a tenant to rent out part or all of their leased property to a third party.' },
  ],
  'Estate planning': [
    { id: 'ph-ep-1', category: 'Estate Planning', title: 'Living Trust', description: 'Transfer assets to beneficiaries without going through probate court.' },
    { id: 'ph-ep-2', category: 'Estate Planning', title: 'Healthcare Proxy', description: 'Designate someone to make medical decisions on your behalf if you become incapacitated.' },
    { id: 'ph-ep-3', category: 'Estate Planning', title: 'Advance Healthcare Directive', description: 'Document your wishes for end-of-life medical care and treatment preferences.' },
  ],
  'Family': [
    { id: 'ph-fa-1', category: 'Family', title: 'Divorce Settlement Agreement', description: 'Outline the terms of a mutual divorce including asset division, custody, and support.' },
    { id: 'ph-fa-2', category: 'Family', title: 'Child Custody Agreement', description: 'Establish a formal custody arrangement and visitation schedule for minor children.' },
    { id: 'ph-fa-3', category: 'Family', title: 'Prenuptial Agreement', description: 'Define financial rights and obligations between partners before marriage.' },
  ],
  'Employment': [
    { id: 'ph-em-1', category: 'Employment', title: 'Non-Compete Agreement', description: 'Restrict an employee or contractor from working with competitors after leaving your company.' },
    { id: 'ph-em-2', category: 'Employment', title: 'Employee Separation Agreement', description: 'Document the terms of an employment termination, including severance and release of claims.' },
    { id: 'ph-em-3', category: 'Employment', title: 'Workplace Confidentiality Agreement', description: 'Protect proprietary business information shared with employees during their tenure.' },
  ],
}

const VIEW_MORE_CARDS = [
  { id: 'vm-1', category: 'Business', title: 'Partnership Agreement', description: 'Establish roles, responsibilities, and profit sharing between business partners.' },
  { id: 'vm-2', category: 'Real Estate', title: 'Quitclaim Deed', description: 'Transfer property ownership interest without warranty of title.' },
  { id: 'vm-3', category: 'Estate Planning', title: 'Living Will', description: 'Specify your medical treatment wishes in the event you cannot communicate them yourself.' },
  { id: 'vm-4', category: 'Business', title: 'Promissory Note', description: 'Document a written promise to repay a loan under agreed terms and conditions.' },
  { id: 'vm-5', category: 'Employment', title: 'Freelance Contract', description: 'Set clear expectations for project scope, payment, and deliverables with freelance workers.' },
  { id: 'vm-6', category: 'Family', title: 'Child Support Agreement', description: 'Formalize ongoing financial support obligations for a minor child between two parties.' },
]

const FAQ_ITEMS = [
  {
    q: 'What types of documents can I create?',
    a: 'LegalShield offers hundreds of attorney-drafted legal forms covering business, real estate, family, estate planning, employment, and more. All documents are free to create and download with your email.',
  },
  {
    q: 'Are these documents legally binding?',
    a: 'Attorney-drafted documents from LegalShield are designed to meet standard legal requirements in most U.S. states. We recommend having a LegalShield attorney review your completed document to confirm it meets your specific needs and jurisdiction.',
  },
  {
    q: 'Can I edit the legal language in the documents?',
    a: 'The documents use standardized legal language prepared by attorneys. You fill in the required fields — names, dates, and specifics — but the core legal language remains fixed to protect its enforceability.',
  },
  {
    q: 'What happens after I download my document?',
    a: 'Your completed document downloads as a PDF and is sent to your email. You can print, sign, and share it immediately. LegalShield members can also have an attorney review the document before signing.',
  },
]

// ── Component ─────────────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function FormCard({ card, onNavigate }) {
  const isClickable = !!card.href
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <span className={styles.imgLabel}>Image</span>
      </div>
      <span className={styles.cardCategory}>{card.category}</span>
      <h3 className={styles.cardTitle}>{card.title}</h3>
      <p className={styles.cardDesc}>{card.description}</p>
      <button
        className={`${styles.cardLink} ${!isClickable ? styles.cardLinkDisabled : ''}`}
        onClick={isClickable ? () => onNavigate(card.href) : undefined}
      >
        View form →
      </button>
    </div>
  )
}

export default function FormsLanding() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [activeTab, setActiveTab] = useState('View all')
  const [showMore, setShowMore] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const searchRef = useRef(null)

  // close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const searchResults = query.trim()
    ? ALL_CARDS.filter(c => c.title.toLowerCase().includes(query.toLowerCase()))
    : []

  function handleSearchInput(e) {
    setQuery(e.target.value)
    setShowDropdown(true)
  }

  function handleResultClick(card) {
    if (card.href) {
      navigate(card.href)
    }
    setShowDropdown(false)
    setQuery('')
  }

  // Cards to display in grid
  let gridCards
  if (activeTab === 'View all') {
    gridCards = ALL_CARDS
  } else if (activeTab === 'Business') {
    gridCards = ALL_CARDS.filter(c => c.category === 'Business')
  } else {
    gridCards = TAB_PLACEHOLDERS[activeTab] || []
  }

  const showViewMore = activeTab === 'View all'

  return (
    <div className={styles.page}>
      <Nav />

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroHeadline}>Find the right legal form for your situation.</h1>
          <p className={styles.heroSubheadline}>
            Browse hundreds of attorney-drafted legal documents — free to create, no account needed.
          </p>
          <div className={styles.searchWrap} ref={searchRef}>
            <div className={styles.searchInputWrap}>
              <SearchIcon />
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search to explore documents and forms..."
                value={query}
                onChange={handleSearchInput}
                onFocus={() => query.trim() && setShowDropdown(true)}
              />
            </div>
            {showDropdown && searchResults.length > 0 && (
              <ul className={styles.searchDropdown}>
                {searchResults.map(card => (
                  <li key={card.id}>
                    <button
                      className={`${styles.searchResult} ${!card.href ? styles.searchResultDisabled : ''}`}
                      onClick={() => handleResultClick(card)}
                    >
                      <span className={styles.searchResultTitle}>{card.title}</span>
                      <span className={styles.searchResultCategory}>{card.category}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {showDropdown && query.trim() && searchResults.length === 0 && (
              <div className={styles.searchNoResults}>No forms found for "{query}"</div>
            )}
          </div>
        </div>
      </section>

      {/* ── BROWSE FORMS ── */}
      <section className={styles.browseSection}>
        <div className={styles.browseInner}>
          <h2 className={styles.browseHeading}>Browse legal documents and forms by area of law.</h2>
          <p className={styles.browseSub}>Attorney-drafted templates for the most common legal situations.</p>

          {/* Tabs */}
          <div className={styles.tabRow}>
            {TABS.map(tab => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                onClick={() => { setActiveTab(tab); setShowMore(false) }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Card grid */}
          <div className={styles.cardGrid}>
            {gridCards.map(card => (
              <FormCard key={card.id} card={card} onNavigate={navigate} />
            ))}
            {showMore && VIEW_MORE_CARDS.map(card => (
              <FormCard key={card.id} card={card} onNavigate={navigate} />
            ))}
          </div>

          {showViewMore && (
            <div className={styles.viewMoreRow}>
              <button
                className={styles.viewMoreBtn}
                onClick={() => setShowMore(v => !v)}
              >
                {showMore ? 'View less' : 'View more'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
          <button className={styles.helpCenterBtn}>Help Center</button>
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
        </div>
      </section>

      {/* ── PLANS ── */}
      <section className={styles.plansSection}>
        <div className={styles.plansInner}>
          <h2 className={styles.plansSectionHeading}>
            Affordable plans for <em>every</em> need.
          </h2>
          <p className={styles.plansSubtext}>No hourly fees. No surprise bills.</p>

          <div className={styles.plansGrid}>
            <div className={styles.planCard}>
              <div className={styles.planName}>Personal &amp; Family</div>
              <p className={styles.planDesc}>
                Legal advice on a wide range of personal legal issues from lawyers with an average of 21 years of experience.
              </p>
              <div className={styles.planPrice}>
                $35<span className={styles.planPricePer}>+/mo</span>
              </div>
              <button className={styles.btnPlanFilled}>Shop Plans</button>
            </div>

            <div className={styles.planCard}>
              <div className={styles.planName}>Small Business</div>
              <p className={styles.planDesc}>
                Contracts &amp; Agreements, Business formations, Intellectual Property, and add-on coverage for your business.
              </p>
              <div className={styles.planPrice}>
                $53.95<span className={styles.planPricePer}>+/mo</span>
              </div>
              <button className={styles.btnPlanFilled}>Shop Plans</button>
            </div>

            <div className={styles.planCard}>
              <div className={styles.planName}>Enterprise</div>
              <p className={styles.planDesc}>
                Legal services and protections designed to give your employees something they truly value — a sense of security.
              </p>
              <div className={styles.planPriceContact}>Contact sales for pricing</div>
              <button className={styles.btnPlanOutlined}>Learn more</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
