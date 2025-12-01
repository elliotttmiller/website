import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'Learn about our methodology for delivering secure, custom AI solutions on private infrastructure.',
};

export default function OurApproachPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 className="section__title">Our Approach</h1>
        <p className="section__subtitle">
          A Methodology Built on Trust, Expertise, and Results
        </p>

        <div className="grid">
          <article>
            <h2>Discovery & Assessment</h2>
            <p>
              We begin with a deep dive into your organization&apos;s needs, existing
              infrastructure, and strategic objectives. Understanding your unique
              challenges enables us to architect solutions that deliver real value.
            </p>
          </article>

          <article>
            <h2>Architecture & Design</h2>
            <p>
              Our team architects comprehensive solutions tailored to your specific
              requirements. We design systems that prioritize security, scalability,
              and performance from the ground up.
            </p>
          </article>

          <article>
            <h2>Implementation & Deployment</h2>
            <p>
              Expert implementation on your private infrastructure. We handle the
              complexity of deployment while ensuring minimal disruption to your
              existing operations.
            </p>
          </article>

          <article>
            <h2>Training & Knowledge Transfer</h2>
            <p>
              We don&apos;t just build solutions—we ensure your team can operate and
              maintain them. Comprehensive training and documentation empower your
              organization for long-term success.
            </p>
          </article>

          <article>
            <h2>Ongoing Partnership</h2>
            <p>
              Our relationship doesn&apos;t end at deployment. We offer ongoing support,
              optimization, and strategic guidance to help you maximize the value of
              your AI infrastructure.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
