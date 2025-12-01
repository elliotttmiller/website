import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with computeUS LLC to discuss your AI engineering and consultation needs.',
};

export default function ContactPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 className="section__title">Contact Us</h1>
        <p className="section__subtitle">
          Let&apos;s Discuss Your AI Infrastructure Needs
        </p>

        <div className="grid">
          <article>
            <h2>Schedule a Consultation</h2>
            <p>
              Ready to explore how private AI infrastructure can transform your
              organization? Schedule a consultation with our team to discuss
              your specific needs and objectives.
            </p>
            {/* Calendly widget will be integrated here */}
            <div
              style={{
                padding: '2rem',
                backgroundColor: 'var(--input-color)',
                borderRadius: 'var(--border-radius-md)',
                textAlign: 'center',
              }}
            >
              <p>[Scheduling Widget Placeholder]</p>
              <p>Calendly or similar integration will be added here.</p>
            </div>
          </article>

          <article>
            <h2>Send Us a Message</h2>
            <form>
              <div style={{ marginBottom: 'var(--mb-1)' }}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  style={{
                    width: '100%',
                    padding: 'var(--mb-0-75)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--border-radius-sm)',
                    marginTop: 'var(--mb-0-5)',
                  }}
                />
              </div>

              <div style={{ marginBottom: 'var(--mb-1)' }}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    padding: 'var(--mb-0-75)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--border-radius-sm)',
                    marginTop: 'var(--mb-0-5)',
                  }}
                />
              </div>

              <div style={{ marginBottom: 'var(--mb-1)' }}>
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Your company"
                  style={{
                    width: '100%',
                    padding: 'var(--mb-0-75)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--border-radius-sm)',
                    marginTop: 'var(--mb-0-5)',
                  }}
                />
              </div>

              <div style={{ marginBottom: 'var(--mb-1-5)' }}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  style={{
                    width: '100%',
                    padding: 'var(--mb-0-75)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--border-radius-sm)',
                    marginTop: 'var(--mb-0-5)',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button type="submit" className="button">
                Send Message
              </button>
            </form>
          </article>
        </div>
      </section>
    </div>
  );
}
