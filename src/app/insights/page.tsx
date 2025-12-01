import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Expert perspectives on AI engineering, private infrastructure, and the future of enterprise AI.',
};

// Placeholder insights - will be replaced with CMS content
const insights = [
  {
    slug: 'private-ai-infrastructure-guide',
    title: 'The Complete Guide to Private AI Infrastructure',
    category: 'Infrastructure',
    date: '2024-11-15',
    summary:
      'A comprehensive overview of building and maintaining private AI infrastructure for enterprise organizations.',
  },
  {
    slug: 'data-sovereignty-in-ai-era',
    title: 'Data Sovereignty in the AI Era',
    category: 'Security',
    date: '2024-11-01',
    summary:
      'Why data sovereignty matters more than ever and how private AI infrastructure enables it.',
  },
  {
    slug: 'rag-pipelines-enterprise',
    title: 'Building Enterprise-Grade RAG Pipelines',
    category: 'Technical',
    date: '2024-10-15',
    summary:
      'Best practices for implementing Retrieval-Augmented Generation in enterprise environments.',
  },
];

export default function InsightsPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 className="section__title">Insights</h1>
        <p className="section__subtitle">
          Expert Perspectives on Enterprise AI
        </p>

        <div className="grid">
          {insights.map((insight) => (
            <article key={insight.slug}>
              <span>{insight.category}</span>
              <time dateTime={insight.date}>
                {new Date(insight.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <h2>{insight.title}</h2>
              <p>{insight.summary}</p>
              <Link href={`/insights/${insight.slug}`}>Read More →</Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
