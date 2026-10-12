import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title: string;
  description?: string;
  canonicalPath?: string;
  keywords?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
}

const BASE_URL = 'https://www.simplysmilezdental.in';

export default function Seo({
  title,
  description = 'Simply Smilez Dental Clinic in Shaikpet, Hyderabad offers Invisalign, Invisalign First for Kids, root canals, braces, implants and family dental care.',
  canonicalPath = '',
  keywords = 'dental clinic in Shaikpet, dentist in Shaikpet Hyderabad, Invisalign Shaikpet, Invisalign First for Kids Hyderabad, root canal Shaikpet, dental implants Hyderabad',
  ogImage = '/images/about.webp',
  structuredData
}: SeoProps) {
  const canonicalUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage.startsWith('/') ? ogImage : `/${ogImage}`}`;

  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content="Simply Smilez Dental" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
