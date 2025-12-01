import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Placeholder case study data - will be replaced with CMS content
const caseStudies: Record<
  string,
  {
    title: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string;
  }
> = {
  'healthcare-ai-transformation': {
    title: 'Healthcare AI Transformation',
    industry: 'Healthcare',
    challenge:
      'A major healthcare provider needed to implement AI solutions for patient data analysis while maintaining strict HIPAA compliance and ensuring no data left their secure environment.',
    solution:
      'We deployed a comprehensive private AI infrastructure using NVIDIA DGX systems, implementing custom fine-tuned models for medical image analysis and patient record processing.',
    results:
      'The organization achieved a 40% reduction in diagnostic time while maintaining complete data sovereignty and regulatory compliance.',
  },
  'financial-services-llm-deployment': {
    title: 'Financial Services LLM Deployment',
    industry: 'Finance',
    challenge:
      'A leading financial services firm required custom LLM capabilities for document analysis and risk assessment without exposing sensitive financial data to external services.',
    solution:
      'We implemented a private LLM deployment with custom fine-tuning on proprietary financial data, enabling intelligent document processing and automated risk analysis.',
    results:
      'The firm reduced document processing time by 60% and improved risk detection accuracy while maintaining complete control over their proprietary data and models.',
  },
  'legal-tech-rag-pipeline': {
    title: 'Legal Tech RAG Pipeline',
    industry: 'Legal',
    challenge:
      'A legal technology company needed an intelligent document analysis system that could process confidential legal documents while maintaining attorney-client privilege.',
    solution:
      'We built a sophisticated RAG pipeline on private infrastructure, enabling intelligent search and analysis across millions of legal documents without data ever leaving the secure environment.',
    results:
      'Legal research time was reduced by 70%, with improved accuracy in precedent identification and case law analysis.',
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const study = caseStudies[resolvedParams.slug];

  if (!study) {
    return { title: 'Case Study Not Found' };
  }

  return {
    title: study.title,
    description: study.challenge,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const study = caseStudies[resolvedParams.slug];

  if (!study) {
    notFound();
  }

  return (
    <div className="container">
      <article className="section">
        <span>{study.industry}</span>
        <h1 className="section__title">{study.title}</h1>

        <section>
          <h2>The Challenge</h2>
          <p>{study.challenge}</p>
        </section>

        <section>
          <h2>Our Solution</h2>
          <p>{study.solution}</p>
        </section>

        <section>
          <h2>The Results</h2>
          <p>{study.results}</p>
        </section>
      </article>
    </div>
  );
}
