import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for computeUS LLC.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 className="section__title">Privacy Policy</h1>
        <p className="section__subtitle">
          Last Updated: December 1, 2024
        </p>

        <article>
          <h2>1. Introduction</h2>
          <p>
            computeUS LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
            committed to protecting your personal data. This privacy policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We may collect information that you voluntarily provide to us when
            you contact us through our website, including your name, email
            address, company name, and any other information you choose to
            provide.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries,
            provide our services, send you relevant communications, and improve
            our website and services.
          </p>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal data against unauthorized access, alteration,
            disclosure, or destruction.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data.
            You may also have the right to restrict or object to certain
            processing of your data.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us through our website&apos;s contact form.
          </p>
        </article>
      </section>
    </div>
  );
}
