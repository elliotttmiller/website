import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Placeholder insights data - will be replaced with CMS content
const insights: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    content: string;
  }
> = {
  'private-ai-infrastructure-guide': {
    title: 'The Complete Guide to Private AI Infrastructure',
    category: 'Infrastructure',
    date: '2024-11-15',
    content:
      'Building private AI infrastructure is a strategic decision that offers significant advantages for organizations handling sensitive data. This guide covers the key considerations, from hardware selection to software stack decisions, that enable successful private AI deployments.',
  },
  'data-sovereignty-in-ai-era': {
    title: 'Data Sovereignty in the AI Era',
    category: 'Security',
    date: '2024-11-01',
    content:
      'As AI becomes increasingly central to business operations, the question of data sovereignty has never been more critical. Organizations must carefully consider where their data resides, who has access to it, and how it is used to train AI models.',
  },
  'rag-pipelines-enterprise': {
    title: 'Building Enterprise-Grade RAG Pipelines',
    category: 'Technical',
    date: '2024-10-15',
    content:
      'Retrieval-Augmented Generation (RAG) represents a powerful approach to grounding AI responses in organizational knowledge. This article explores best practices for implementing RAG pipelines that meet enterprise requirements for security, scalability, and accuracy.',
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(insights).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const insight = insights[resolvedParams.slug];

  if (!insight) {
    return { title: 'Insight Not Found' };
  }

  return {
    title: insight.title,
    description: insight.content.substring(0, 160),
  };
}

export default async function InsightPage({ params }: PageProps) {
  const resolvedParams = await params;
  const insight = insights[resolvedParams.slug];

  if (!insight) {
    notFound();
  }

  return (
    <div className="container">
      <article className="section">
        <span>{insight.category}</span>
        <time dateTime={insight.date}>
          {new Date(insight.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <h1 className="section__title">{insight.title}</h1>
        <p>{insight.content}</p>
      </article>
    </div>
  );
}
