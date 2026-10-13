import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  robots?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

export default function Seo({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  ogImageAlt,
  twitterCard = 'summary_large_image',
  twitterTitle,
  twitterDescription,
  twitterImage,
  robots = 'index,follow',
  schema,
}: SeoProps) {
  const displayTitle = title;
  const displayDesc = description;
  const displayOgTitle = ogTitle || displayTitle;
  const displayOgDesc = ogDescription || displayDesc;
  const displayTwitterTitle = twitterTitle || displayTitle;
  const displayTwitterDesc = twitterDescription || displayDesc;

  return (
    <Helmet>
      {displayTitle && <title>{displayTitle}</title>}
      {displayDesc && <meta name="description" content={displayDesc} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {robots && <meta name="robots" content={robots} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      {ogType && <meta property="og:type" content={ogType} />}
      {displayOgTitle && <meta property="og:title" content={displayOgTitle} />}
      {displayOgDesc && <meta property="og:description" content={displayOgDesc} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}

      {/* Twitter */}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {displayTwitterTitle && <meta name="twitter:title" content={displayTwitterTitle} />}
      {displayTwitterDesc && <meta name="twitter:description" content={displayTwitterDesc} />}
      {twitterImage && <meta name="twitter:image" content={twitterImage} />}

      {/* Structured Schema */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
