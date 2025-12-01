import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'ComputeUS LLC | Premier AI Engineering & Consultation',
    template: '%s | ComputeUS LLC',
  },
  description:
    'ComputeUS LLC specializes in architecting and implementing secure, custom AI solutions on private, on-premise infrastructure. High-Performance Compute, Local LLM Deployment, RAG Pipelines, and AI-Powered SaaS Development.',
  keywords: [
    'AI Engineering',
    'AI Consultation',
    'Private AI Infrastructure',
    'LLM Deployment',
    'RAG Pipelines',
    'AI SaaS Development',
    'NVIDIA DGX',
    'On-Premise AI',
    'Data Sovereignty',
  ],
  authors: [{ name: 'ComputeUS LLC' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ComputeUS LLC',
    title: 'ComputeUS LLC | Premier AI Engineering & Consultation',
    description:
      'Architecting secure, custom AI solutions on private infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ paddingTop: 'var(--header-height)' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
