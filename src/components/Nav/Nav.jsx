import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.navBrand}>
        <div className={styles.shieldIcon} />
        LegalShield
      </Link>
      <ul className={styles.navLinks}>
        <li><a href="#">Personal</a></li>
        <li><a href="#">Business</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>
      <div className={styles.navRight}>
        <span className={styles.helpLine}>Questions? (833) 721-6883</span>
        <a href="#" className={styles.signIn}>Sign in</a>
      </div>
    </nav>
  )
}
