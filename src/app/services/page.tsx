import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore our comprehensive AI engineering services including High-Performance Compute, LLM Deployment, RAG Pipelines, and AI-Powered SaaS Development.',
};

export default function ServicesPage() {
  return (
    <div className="container">
      <section className="section">
        <h1 className="section__title">Our Services</h1>
        <p className="section__subtitle">
          Comprehensive AI Engineering & Consultation Services
        </p>

        <div className="grid">
          <article>
            <h2>High-Performance Compute</h2>
            <p>
              NVIDIA DGX Systems deployment and optimization. We architect and deploy
              high-performance computing infrastructure designed for maximum AI workload
              throughput and efficiency.
            </p>
          </article>

          <article>
            <h2>Local LLM Deployment & Fine-Tuning</h2>
            <p>
              Deploy and fine-tune large language models on your private infrastructure.
              Maintain complete control over your AI capabilities while ensuring data
              never leaves your secure environment.
            </p>
          </article>

          <article>
            <h2>Multi-Modal AI Systems</h2>
            <p>
              Advanced text and vision AI systems that enable comprehensive understanding
              of diverse data types. Build intelligent systems that can process and analyze
              multiple forms of input.
            </p>
          </article>

          <article>
            <h2>RAG Pipelines</h2>
            <p>
              Retrieval-Augmented Generation systems that ground AI responses in your
              organization&apos;s knowledge base. Create intelligent, context-aware AI that
              leverages your proprietary data.
            </p>
          </article>

          <article>
            <h2>Agentic AI Workflows</h2>
            <p>
              Autonomous AI agents capable of reasoning, planning, and executing complex
              multi-step tasks. Transform your operations with AI that can work
              independently to achieve defined objectives.
            </p>
          </article>

          <article>
            <h2>AI-Powered SaaS Development</h2>
            <p>
              End-to-end design, build, launch, and scaling of industry-specific SaaS
              applications. We act as your dedicated product team to bring AI-powered
              products to market.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
