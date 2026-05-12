import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerNewsletter}>
          <p className={styles.footerNewsletterLabel}>
            Sign up for our newsletter to get tips, advice, and updates.
          </p>
          <div className={styles.footerNewsletterRow}>
            <input
              type="email"
              className={styles.footerEmailInput}
              placeholder="Enter your email address"
            />
            <button className={styles.footerEmailBtn}>Subscribe</button>
          </div>
        </div>

        <div className={styles.footerLinkGrid}>
          <div className={styles.footerLinkCol}>
            <h4>LegalShield</h4>
            <ul>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Media Kit</a></li>
            </ul>
          </div>
          <div className={styles.footerLinkCol}>
            <h4>Personal Plans</h4>
            <ul>
              <li><a href="#">Individual Plan</a></li>
              <li><a href="#">Family Plan</a></li>
              <li><a href="#">Estate Planning</a></li>
              <li><a href="#">Traffic Tickets</a></li>
              <li><a href="#">Identity Theft</a></li>
            </ul>
          </div>
          <div className={styles.footerLinkCol}>
            <h4>Business Plans</h4>
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
        <div className={styles.footerBottomInner}>
          <div className={styles.footerBottomBrand}>
            <div className={styles.footerShield} />
            <span className={styles.footerBrandName}>LegalShield</span>
            <span className={styles.footerCopyright}>© 2025 Pre-Paid Legal Services, Inc. All rights reserved.</span>
          </div>
          <div className={styles.footerLegalLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">🌐 United States</a>
          </div>
          <div className={styles.footerBadges}>
            <span className={styles.appBadge}>App Store</span>
            <span className={styles.appBadge}>Google Play</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
