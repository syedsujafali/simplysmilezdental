import type { Metadata } from 'next';
import BlogPage from '@/src/views/BlogPage';

export const metadata: Metadata = {
  title: 'Dental Health Blog & Articles | Simply Smilez Dental Clinic Hyderabad',
  description: 'Read the latest dental health insights, patient education guides, and expert oral care tips from doctors at Simply Smilez Dental Clinic in Shaikpet, Hyderabad.',
  alternates: {
    canonical: "https://www.simplysmilezdental.in/blog",
  },
  openGraph: {
    title: 'Dental Health Blog & Articles | Simply Smilez Dental Clinic',
    description: 'Oral health tips, braces advice, Invisalign care, and dental updates.',
    url: 'https://www.simplysmilezdental.in/blog',
    images: [{ url: 'https://www.simplysmilezdental.in/images/about.webp', alt: 'Dental Blog Simply Smilez' }],
  },
};

export default function Page() {
  return <BlogPage />;
}
