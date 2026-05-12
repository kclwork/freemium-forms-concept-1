import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Homepage.module.css'

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

const FAQ_ITEMS = [
  {
    q: 'What is LegalShield and how does it work?',
    a: 'LegalShield gives you access to a dedicated provider law firm for a low monthly fee. Your provider law firm handles an unlimited number of personal and business legal matters — from letters and calls to full representation.',
  },
  {
    q: 'How quickly can I speak with a lawyer?',
    a: 'Most members speak with a lawyer within 4 business hours of calling. Emergency consultations are available 24/7.',
  },
  {
    q: 'Is there a limit to how many times I can use LegalShield?',
    a: 'No. Your plan covers an unlimited number of covered legal matters for you and your family.',
  },
  {
    q: 'What legal issues are covered under a personal plan?',
    a: 'Covered matters include family law, estate planning, real estate, traffic tickets, identity theft, and more. See the full list in your plan documents.',
  },
]

export default function Homepage() {
  const navigate = useNavigate()
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className={styles.page}>

      {/* ── NAV ── */}
      <nav className={styles.nav}>
        <div className={styles.navBrand}>
          <div className={styles.shieldIcon} />
          LegalShield
        </div>
        <ul className={styles.navLinks}>
          <li><a href="#">Personal</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
        <div className={styles.navActions}>
          <button className={styles.navIconBtn} aria-label="Search"><SearchIcon /></button>
          <button className={styles.navIconBtn} aria-label="Cart"><CartIcon /></button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroHeadline}>Real lawyers.<br />Unreal prices.</h1>
          <p className={styles.heroBody}>
            We help millions of people just like you. Get legal help starting at about $1/day for an unlimited number of personal and business issues.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.btnPrimary}>Shop Plans</button>
            <button className={styles.btnSecondary} onClick={() => navigate('/elle')}>
              Get a free document review
            </button>
          </div>
          <div className={styles.trustpilot}>
            <div className={styles.tpStars}>
              <div className={styles.tpStar} />
              <div className={styles.tpStar} />
              <div className={styles.tpStar} />
              <div className={styles.tpStar} />
              <div className={styles.tpStarHalf} />
            </div>
            <span className={styles.tpText}>7,000+ reviews on Trustpilot</span>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroCollageTop}>
            <span className={styles.imgLabel}>Image</span>
          </div>
          <div className={styles.heroCollageBtm}>
            <div className={styles.heroCollageSmall}><span className={styles.imgLabel}>Image</span></div>
            <div className={styles.heroCollageSmall}><span className={styles.imgLabel}>Image</span></div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className={styles.statsBar}>
        <div className={styles.statsInner}>
          <div className={styles.stat}>
            <div className={styles.statNum}>4.5M</div>
            <div className={styles.statLabel}>Members served</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>22 yrs</div>
            <div className={styles.statLabel}>Trusted experience</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNum}>$1/day</div>
            <div className={styles.statLabel}>Zero hourly rates</div>
          </div>
        </div>
      </div>

      {/* ── VALUE PROP ── */}
      <section className={styles.valueSection}>
        <div className={styles.valuePlaceholder}>
          <span className={styles.imgLabel}>Image</span>
        </div>
        <div className={styles.valueRight}>
          <h2 className={styles.valueHeadline}>One simple legal solution. Zero hourly rates.</h2>
          <p className={styles.valueBody}>
            Your dedicated provider law firm handles everything — consultations, letters, calls, and full legal representation — for one flat monthly rate.
          </p>
          <div className={styles.accordionList}>
            {['Access to dedicated lawyers', 'Unlimited covered legal matters', 'No hidden fees or hourly charges'].map((label) => (
              <div className={styles.accordionRow} key={label}>
                <span className={styles.accordionLabel}>{label}</span>
                <div className={styles.accordionIcon}>+</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS BAR ── */}
      <div className={styles.pressBar}>
        <div className={styles.pressInner}>
          {['Forbes', 'Fortune', "Barron's", 'MarketWatch', 'Bloomberg'].map((name) => (
            <div className={styles.pressLogoPlaceholder} key={name}>
              <span className={styles.pressLogoText}>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW WE HELP ── */}
      <section className={styles.sectionWrap}>
        <h2 className={styles.sectionHeading}>How we help</h2>
        <div className={styles.helpCards}>
          <div className={styles.helpCard}>
            <div className={styles.helpCardImg}><span className={styles.imgLabel}>Image</span></div>
            <span className={styles.helpCardCategory}>Family Law</span>
            <h3 className={styles.helpCardTitle}>Protect what matters most to your family</h3>
            <p className={styles.helpCardDesc}>From custody agreements to wills and estates, get legal guidance when it counts.</p>
          </div>
          <div className={styles.helpCard}>
            <div className={styles.helpCardImg}><span className={styles.imgLabel}>Image</span></div>
            <span className={styles.helpCardCategory}>Real Estate</span>
            <h3 className={styles.helpCardTitle}>Navigate buying, selling, and renting</h3>
            <p className={styles.helpCardDesc}>Review contracts, resolve disputes, and understand your rights as a homeowner or tenant.</p>
          </div>
          <div className={styles.helpCard}>
            <div className={styles.helpCardImg}><span className={styles.imgLabel}>Image</span></div>
            <span className={styles.helpCardCategory}>Business</span>
            <h3 className={styles.helpCardTitle}>Legal support for your business, big or small</h3>
            <p className={styles.helpCardDesc}>Entity formation, contracts, employment issues — covered under one low monthly rate.</p>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.howItWorks}>
        <div className={styles.howInner}>
          <h2 className={`${styles.sectionHeading} ${styles.centered}`}>How it works</h2>
          <div className={styles.howSteps}>

            <div className={styles.howStep}>
              <div className={styles.howStepContent}>
                <div className={styles.stepBadge}>1</div>
                <h3 className={styles.stepTitle}>Select your plan and get started</h3>
                <p className={styles.stepBody}>Choose the personal or business plan that fits your needs. No long-term contract required — cancel any time.</p>
              </div>
              <div className={styles.howStepImg}><span className={styles.imgLabel}>Image</span></div>
            </div>

            <div className={`${styles.howStep} ${styles.reverse}`}>
              <div className={styles.howStepContent}>
                <div className={styles.stepBadge}>2</div>
                <h3 className={styles.stepTitle}>We connect you with a law firm</h3>
                <p className={styles.stepBody}>You're matched with a dedicated provider law firm in your state. Call, email, or meet — it's up to you.</p>
              </div>
              <div className={styles.howStepImg}><span className={styles.imgLabel}>Image</span></div>
            </div>

            <div className={styles.howStep}>
              <div className={styles.howStepContent}>
                <div className={styles.stepBadge}>3</div>
                <h3 className={styles.stepTitle}>Relax while they take care of it</h3>
                <p className={styles.stepBody}>Your lawyers handle the paperwork, calls, and negotiations. You focus on living your life.</p>
              </div>
              <div className={styles.howStepImg}><span className={styles.imgLabel}>Image</span></div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className={styles.testimonialSection}>
        <p className={styles.testimonialQuote}>
          LegalShield delivered prompt, reliable service at a rate that's nearly impossible to find today.
        </p>
        <p className={styles.testimonialAttribution}>— LegalShield member, verified Trustpilot review</p>
      </section>

      {/* ── PLANS ── */}
      <section className={styles.plansSection}>
        <h2 className={`${styles.sectionHeading} ${styles.centered}`}>Affordable plans for every need.</h2>
        <p className={styles.plansSub}>No hourly fees. No surprise bills. Just legal peace of mind.</p>
        <div className={styles.plansGrid}>

          <div className={styles.planCard}>
            <span className={styles.planBadge}>Personal</span>
            <h3 className={styles.planName}>Individual Plan</h3>
            <div className={styles.planPrice}>$29<span className={styles.planPricePer}>/mo</span></div>
            <p className={styles.planDesc}>For individuals who need reliable legal access for everyday personal matters.</p>
            <ul className={styles.planFeatures}>
              <li>Unlimited consultations</li>
              <li>Family law & estate planning</li>
              <li>Real estate & traffic</li>
              <li>Identity theft protection</li>
            </ul>
            <div className={styles.planCta}>
              <button className={styles.btnPlanFilled}>Shop Plans</button>
            </div>
          </div>

          <div className={`${styles.planCard} ${styles.featured}`}>
            <span className={styles.planBadge}>Most Popular — Family</span>
            <h3 className={styles.planName}>Family Plan</h3>
            <div className={styles.planPrice}>$39<span className={styles.planPricePer}>/mo</span></div>
            <p className={styles.planDesc}>Covers you, your spouse, and dependent children for personal legal matters.</p>
            <ul className={styles.planFeatures}>
              <li>Everything in Individual</li>
              <li>Spouse &amp; dependent coverage</li>
              <li>Minor children included</li>
              <li>Will preparation for family</li>
            </ul>
            <div className={styles.planCta}>
              <button className={styles.btnPlanFilled}>Shop Plans</button>
            </div>
          </div>

          <div className={styles.planCard}>
            <span className={styles.planBadge}>Business</span>
            <h3 className={styles.planName}>Small Business Plan</h3>
            <div className={styles.planPrice}>$49<span className={styles.planPricePer}>/mo</span></div>
            <p className={styles.planDesc}>Legal support for small business owners — contracts, disputes, and more.</p>
            <ul className={styles.planFeatures}>
              <li>Business contract review</li>
              <li>Entity formation guidance</li>
              <li>Employment & HR issues</li>
              <li>Debt collection defense</li>
            </ul>
            <div className={styles.planCta}>
              <button className={styles.btnPlanOutlined}>Learn More</button>
            </div>
          </div>

        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <h2 className={styles.sectionHeading}>Frequently Asked Questions</h2>
          <button className={styles.helpCenterBtn}>Visit Help Center</button>
          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item, i) => (
              <div className={styles.faqItem} key={i}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {item.q}
                  <span className={`${styles.faqChevron} ${openFaq === i ? styles.open : ''}`}>∨</span>
                </button>
                {openFaq === i && (
                  <p className={styles.faqAnswer}>{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── READY CTA ── */}
      <section className={styles.readySection}>
        <h2 className={styles.readyHeadline}>Ready to get legal help?</h2>
        <button className={styles.btnPrimary}>Shop Plans</button>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.footerNewsletter}>
            <input
              type="email"
              className={styles.footerEmailInput}
              placeholder="Enter your email address"
            />
            <button className={styles.footerEmailBtn}>Subscribe</button>
          </div>
          <div className={styles.footerLinkGrid}>
            <div className={styles.footerLinkCol}>
              <h4>Personal</h4>
              <ul>
                <li><a href="#">Individual Plan</a></li>
                <li><a href="#">Family Plan</a></li>
                <li><a href="#">Estate Planning</a></li>
                <li><a href="#">Traffic Tickets</a></li>
                <li><a href="#">Identity Theft</a></li>
              </ul>
            </div>
            <div className={styles.footerLinkCol}>
              <h4>Business</h4>
              <ul>
                <li><a href="#">Small Business</a></li>
                <li><a href="#">Contract Review</a></li>
                <li><a href="#">Employment Law</a></li>
                <li><a href="#">Business Formation</a></li>
                <li><a href="#">Debt Collection</a></li>
              </ul>
            </div>
            <div className={styles.footerLinkCol}>
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Legal Blog</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Find a Lawyer</a></li>
                <li><a href="#">Document Library</a></li>
                <li><a href="#">Webinars</a></li>
              </ul>
            </div>
            <div className={styles.footerLinkCol}>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Partner With Us</a></li>
                <li><a href="#">Investor Relations</a></li>
              </ul>
            </div>
            <div className={styles.footerLinkCol}>
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Disclosures</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLeft}>
            <div className={styles.footerShield} />
            <span className={styles.footerBrandName}>LegalShield</span>
            <span style={{ color: '#555', fontSize: 12, marginLeft: 12 }}>© 2025 Pre-Paid Legal Services, Inc. All rights reserved.</span>
          </div>
          <div className={styles.footerBottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">🌐 United States</a>
          </div>
          <div className={styles.footerBadges}>
            <span className={styles.appBadge}>App Store</span>
            <span className={styles.appBadge}>Google Play</span>
          </div>
        </div>
      </footer>

    </div>
  )
}
