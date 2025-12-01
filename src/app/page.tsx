import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Advanced AI Engineering
              <br />
              <span className={styles.heroAccent}>On Your Infrastructure</span>
            </h1>
            <p className={styles.heroDescription}>
              We architect and implement secure, custom AI solutions on private,
              on-premise infrastructure. Absolute data sovereignty. Fixed-price
              predictability. Unmatched customization.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className={styles.primaryButton}>
                Schedule a Consultation
              </Link>
              <Link href="/our-approach" className={styles.secondaryButton}>
                Learn Our Approach
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className={styles.uspSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>The Private Infrastructure Advantage</h2>
          <p className={styles.sectionSubtitle}>
            Three critical benefits unavailable from cloud-only competitors
          </p>
          <div className={styles.uspGrid}>
            <div className={styles.uspCard}>
              <div className={styles.uspIcon}>🛡️</div>
              <h3 className={styles.uspTitle}>Absolute Data Sovereignty</h3>
              <p className={styles.uspDescription}>
                Your data never leaves your secure, private hardware. Complete control
                over your most sensitive information.
              </p>
            </div>
            <div className={styles.uspCard}>
              <div className={styles.uspIcon}>💰</div>
              <h3 className={styles.uspTitle}>Cost Predictability</h3>
              <p className={styles.uspDescription}>
                Fixed-price projects and predictable retainers eliminate runaway cloud
                costs. Know your investment upfront.
              </p>
            </div>
            <div className={styles.uspCard}>
              <div className={styles.uspIcon}>⚙️</div>
              <h3 className={styles.uspTitle}>Unmatched Customization</h3>
              <p className={styles.uspDescription}>
                Total control over the entire hardware and software stack. Solutions
                tailored precisely to your requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Core Expertise</h2>
          <p className={styles.sectionSubtitle}>
            Specializing in the &quot;last mile&quot; of applied AI
          </p>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>High-Performance Compute</h3>
              <p className={styles.serviceDescription}>
                NVIDIA DGX Systems deployment and optimization for maximum AI workload performance.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Local LLM Deployment</h3>
              <p className={styles.serviceDescription}>
                Fine-tuning and deploying large language models on your private infrastructure.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Multi-Modal AI Systems</h3>
              <p className={styles.serviceDescription}>
                Advanced text and vision AI systems for comprehensive data understanding.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>RAG Pipelines</h3>
              <p className={styles.serviceDescription}>
                Retrieval-Augmented Generation for intelligent, context-aware AI responses.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>Agentic AI Workflows</h3>
              <p className={styles.serviceDescription}>
                Autonomous AI agents that can reason, plan, and execute complex tasks.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>AI-Powered SaaS</h3>
              <p className={styles.serviceDescription}>
                End-to-end design, build, launch, and scaling of industry-specific SaaS applications.
              </p>
            </div>
          </div>
          <div className={styles.servicesCta}>
            <Link href="/services" className={styles.primaryButton}>
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Transform Your AI Infrastructure?</h2>
            <p className={styles.ctaDescription}>
              Let&apos;s discuss how private AI infrastructure can give your organization
              a competitive advantage.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Start the Conversation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
