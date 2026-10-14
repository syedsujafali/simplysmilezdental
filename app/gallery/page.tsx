import type { Metadata } from 'next';
import GalleryPage from '@/src/views/GalleryPage';

export const metadata: Metadata = {
  title: "Inside Simply Smilez Dental Clinic | Shaikpet, Hyderabad",
  description: "Take a look inside Simply Smilez Dental Clinic in Shaikpet, Hyderabad, and explore our dental clinic environment and patient care facilities.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/gallery",
  },
  openGraph: {
    title: "Inside Simply Smilez Dental Clinic | Shaikpet, Hyderabad",
    description: "Take a look inside Simply Smilez Dental Clinic in Shaikpet, Hyderabad, and explore our dental clinic environment and patient care facilities.",
    url: "https://www.simplysmilezdental.in/gallery",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/gallery-1.webp",
        alt: "Simply Smilez Dental Clinic interior and facilities in Shaikpet, Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Inside Simply Smilez Dental Clinic | Shaikpet, Hyderabad",
    description: "Take a look inside Simply Smilez Dental Clinic in Shaikpet, Hyderabad, and explore our dental clinic environment and patient care facilities.",
    images: ["https://www.simplysmilezdental.in/images/gallery-1.webp"],
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
      "description": "Simply Smilez Dental Clinic provides comprehensive dental care in Shaikpet, Hyderabad, including Invisalign, braces, dental implants, root canal treatment, cosmetic dentistry and pediatric dentistry.",
      "medicalSpecialty": "https://schema.org/Dentistry",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Shaikpet",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "areaServed": [
        "Shaikpet",
        "Manikonda",
        "Tolichowki",
        "Jubilee Hills",
        "Banjara Hills",
        "Gachibowli",
        "Narsingi",
        "Mehdipatnam"
      ]
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
      "@type": "CollectionPage",
      "@id": "https://www.simplysmilezdental.in/gallery#webpage",
      "url": "https://www.simplysmilezdental.in/gallery",
      "name": "Inside Simply Smilez Dental Clinic | Shaikpet, Hyderabad",
      "description": "Explore the Simply Smilez Dental Clinic gallery and view the clinic environment and dental care facilities in Shaikpet, Hyderabad.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/gallery#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/gallery#breadcrumb",
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
          "name": "Gallery",
          "item": "https://www.simplysmilezdental.in/gallery"
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
      <GalleryPage />
    </>
  );
}
