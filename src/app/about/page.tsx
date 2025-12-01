import type { Metadata } from 'next';
import Link from 'next/link';
import footerStyles from '@/components/Footer.module.css';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about computeUS LLC — we help teams build secure, on-premise AI systems and platforms you own, so you get capability without compromise.',
};

export default function AboutPage() {
  return (
    <div className="container">
      <section className="section">
        <div className="section__content">
          <h1 className="section__title">Building Your Definitive Edge.</h1>

          <p className="section__paragraph">
            Accessing enterprise-grade AI shouldn&apos;t require handing over
            your data, your systems, or your control. That trade-off feels wrong
            to us — and we think there&apos;s a better way.
          </p>

          <p className="section__paragraph">
            We help teams build secure, on-premise AI systems and platforms that
            they own and operate. The result is capability you can rely on —
            without surprise costs, vendor lock-in, or weakened security.
          </p>

          <p className="section__paragraph">
            In short: if you want powerful AI systems and platforms that become
            a competitive asset, we design and deliver them so they live inside
            your control and fit your operations.
          </p>

          <h2 className="section__subtitle">Built on better foundations</h2>
          <p className="section__paragraph">
            AI systems and platforms need infrastructure that’s purpose-built
            for the work — not a one-size-fits-all cloud tenant. We build on
            dedicated, on-premise NVIDIA compute so performance, cost
            predictability, and security are reliable and auditable.
          </p>

          <h2 className="section__subtitle">From projects to permanent advantage</h2>
          <p className="section__paragraph">
            We build durable capabilities, not temporary integrations. That can
            mean custom models, internal tools, or entire AI-powered platforms —
            whatever creates a defensible asset for your organization.
          </p>
          <p className="section__paragraph">
            Our approach avoids vendor lock-in and hands you a system you can
            evolve and operate long after the initial engagement.
          </p>

          <h2 className="section__subtitle">Our work speaks for itself</h2>
          <p className="section__paragraph">
            We prefer to show results rather than make promises. The systems we
            deliver are the clearest proof of what we do — reliable, measurable,
            and built to your needs.
          </p>

          <h2 className="section__subtitle">Let’s start a practical conversation</h2>
          <p className="section__paragraph">
            If you&apos;re curious about building ownable AI systems and platforms,
            let&apos;s chat — no sales pitch, just ideas and practical next steps.
          </p>

          <div className="section__cta">
            <Link href="/contact" className={footerStyles.contactButton}>
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
