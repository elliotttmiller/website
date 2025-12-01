import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about computeUS LLC, an elite AI Engineering & Consultation firm specializing in secure, custom AI solutions on private infrastructure.',
};

export default function AboutPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 className="section__title">About computeUS LLC</h1>
        <p className="section__subtitle">
          Elite AI Engineering & Consultation
        </p>

        <div className="grid">
          <article>
            <h2>Who We Are</h2>
            <p>
              computeUS LLC is an elite AI Engineering & Consultation firm. We
              specialize in architecting and implementing secure, custom AI
              solutions on private, on-premise infrastructure. For visionary
              clients, we extend this partnership to build and scale entire
              AI-powered SaaS applications.
            </p>
          </article>

          <article>
            <h2>Our Mission</h2>
            <p>
              We believe that organizations should not have to choose between
              leveraging cutting-edge AI capabilities and maintaining complete
              control over their data. Our mission is to deliver the full power
              of modern AI while ensuring absolute data sovereignty.
            </p>
          </article>

          <article>
            <h2>Our Expertise</h2>
            <p>
              Our technical domain is the &quot;last mile&quot; of applied AI. We are a
              deeply technical company with key competencies in High-Performance
              Compute, Local LLM Deployment, Multi-Modal AI Systems, RAG
              Pipelines, Agentic AI Workflows, and AI-Powered SaaS Product
              Development.
            </p>
          </article>

          <article>
            <h2>Who We Serve</h2>
            <p>
              We partner with sophisticated, technically-literate organizations
              in data-sensitive industries like Healthcare, Finance, and Legal
              Tech. Our clients are leaders who understand the strategic value
              of private AI infrastructure.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
