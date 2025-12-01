import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Explore real-world examples of how we have helped organizations transform their AI capabilities with private infrastructure solutions.',
};

// Placeholder case studies - will be replaced with CMS content
const caseStudies = [
  {
    slug: 'healthcare-ai-transformation',
    title: 'Healthcare AI Transformation',
    industry: 'Healthcare',
    summary:
      'How we helped a major healthcare provider implement secure, HIPAA-compliant AI solutions on private infrastructure.',
  },
  {
    slug: 'financial-services-llm-deployment',
    title: 'Financial Services LLM Deployment',
    industry: 'Finance',
    summary:
      'Deploying custom fine-tuned LLMs for a financial services firm while maintaining complete data sovereignty.',
  },
  {
    slug: 'legal-tech-rag-pipeline',
    title: 'Legal Tech RAG Pipeline',
    industry: 'Legal',
    summary:
      'Building an intelligent document analysis system for a leading legal technology company.',
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 className="section__title">Case Studies</h1>
        <p className="section__subtitle">
          Real Results from Private AI Infrastructure
        </p>

        <div className="grid">
          {caseStudies.map((study) => (
            <article key={study.slug}>
              <span>{study.industry}</span>
              <h2>{study.title}</h2>
              <p>{study.summary}</p>
              <Link href={`/case-studies/${study.slug}`}>Read Case Study →</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
