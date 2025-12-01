import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  services: [
    { name: 'AI Engineering', href: '/services#ai-engineering' },
    { name: 'Private LLM Deployment', href: '/services#llm-deployment' },
    { name: 'RAG Pipelines', href: '/services#rag-pipelines' },
    { name: 'SaaS Development', href: '/services#saas-development' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Approach', href: '/our-approach' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Insights', href: '/insights' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Brand Section */}
          <div className={styles.footerBrand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoText}>compute</span>
              <span className={styles.logoAccent}>US</span>
            </Link>
            <p className={styles.brandDescription}>
              Exceptional AI Engineering & Consultation. Architecting secure, custom AI solutions 
              on private infrastructure.
            </p>
          </div>

          {/* Services Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Services</h4>
            <ul className={styles.footerList}>
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Company</h4>
            <ul className={styles.footerList}>
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Get In Touch</h4>
            <Link href="/contact" className={styles.contactButton}>
              Schedule a Consultation
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} computeUS LLC. All rights reserved.
          </p>
          <div className={styles.legalLinks}>
            {footerLinks.legal.map((link, index) => (
              <span key={link.name}>
                <Link href={link.href} className={styles.legalLink}>
                  {link.name}
                </Link>
                {index < footerLinks.legal.length - 1 && (
                  <span className={styles.separator}>|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
