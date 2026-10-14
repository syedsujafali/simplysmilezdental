import type { Metadata } from 'next';
import CompositeFillingsPage from '@/src/views/services/CompositeFillingsPage';

export const metadata: Metadata = {
  title: "Composite Fillings in Hyderabad | Tooth-Coloured Dental Fillings",
  description: "Looking for composite fillings in Hyderabad? Learn about tooth-coloured fillings, benefits, procedure, suitability and aftercare at Simply Smilez Dental Clinic, Shaikpet.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/composite-fillings",
  },
  openGraph: {
    title: "Composite Fillings in Hyderabad | Tooth-Coloured Dental Fillings",
    description: "Looking for composite fillings in Hyderabad? Learn about tooth-coloured fillings, benefits, procedure, suitability and aftercare at Simply Smilez Dental Clinic, Shaikpet.",
    url: "https://www.simplysmilezdental.in/services/composite-fillings",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/composite.webp",
        alt: "Composite tooth-coloured dental fillings in Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Composite Fillings in Hyderabad | Tooth-Coloured Dental Fillings",
    description: "Learn about composite fillings in Hyderabad, including benefits, procedure, suitability and aftercare at Simply Smilez Dental Clinic, Shaikpet.",
    images: ["https://www.simplysmilezdental.in/images/composite.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#dentist",
      "name": "Simply Smilez Dental Clinic",
      "url": "https://www.simplysmilezdental.in/",
      "medicalSpecialty": "https://schema.org/Dentistry",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Shaikpet",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/composite-fillings#service",
      "name": "Composite Fillings",
      "serviceType": "Composite Dental Fillings",
      "description": "Tooth-coloured composite fillings for restoring teeth affected by cavities, decay or minor damage.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/composite-fillings"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/composite-fillings#webpage",
      "url": "https://www.simplysmilezdental.in/services/composite-fillings",
      "name": "Composite Fillings in Hyderabad | Tooth-Coloured Dental Fillings",
      "description": "Learn about composite fillings in Hyderabad, including tooth-coloured fillings, benefits, procedure, suitability and aftercare.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/composite-fillings#service"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/services/composite-fillings#breadcrumb"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.simplysmilezdental.in/#website",
      "url": "https://www.simplysmilezdental.in/",
      "name": "Simply Smilez Dental Clinic",
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/composite-fillings#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.simplysmilezdental.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Composite Fillings",
          "item": "https://www.simplysmilezdental.in/services/composite-fillings"
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <CompositeFillingsPage />
    </>
  );
}
