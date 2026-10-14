import type { Metadata } from 'next';
import AllServicesPage from '@/src/views/AllServicesPage';

export const metadata: Metadata = {
  title: "Dental Services in Hyderabad | Simply Smilez Dental",
  description: "Explore comprehensive dental services in Hyderabad at Simply Smilez Dental, including Invisalign, pediatric dentistry, braces, root canals, whitening and more.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/all-services",
  },
  openGraph: {
    title: "Dental Services in Hyderabad | Simply Smilez Dental",
    description: "Explore comprehensive dental services in Hyderabad at Simply Smilez Dental, including Invisalign, pediatric dentistry, braces, root canals, whitening and more.",
    url: "https://www.simplysmilezdental.in/all-services",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/dental-services.jpg",
        alt: "Dental services at Simply Smilez Dental",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dental Services in Hyderabad | Simply Smilez Dental",
    description: "Explore comprehensive dental services in Hyderabad at Simply Smilez Dental, including Invisalign, pediatric dentistry, braces, root canals, whitening and more.",
    images: ["https://www.simplysmilezdental.in/images/dental-services.jpg"],
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
      "telephone": "+91-7799376656",
      "email": "info@simplysmilezdental.in",
      "image": "https://www.simplysmilezdental.in/images/logo.png",
      "description": "Simply Smilez Dental Clinic provides comprehensive dental care in Hyderabad, including Invisalign and clear aligners, pediatric dentistry, braces, root canal treatment, cosmetic dentistry, teeth whitening, gum care and oral surgery.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500008",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "10:00",
          "closes": "20:30"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:30",
          "closes": "13:00"
        }
      ],
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "sameAs": [
        "https://www.simplysmilezdental.in/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/all-services#webpage",
      "url": "https://www.simplysmilezdental.in/all-services",
      "name": "Dental Services in Hyderabad | Simply Smilez Dental",
      "headline": "Comprehensive Dental Services in Hyderabad",
      "description": "Explore comprehensive dental services in Hyderabad at Simply Smilez Dental, including Invisalign, pediatric dentistry, braces, root canals, whitening and more.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/all-services#breadcrumb"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.simplysmilezdental.in/#website",
      "url": "https://www.simplysmilezdental.in/",
      "name": "Simply Smilez Dental",
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/all-services#breadcrumb",
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
          "name": "All Services",
          "item": "https://www.simplysmilezdental.in/all-services"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.simplysmilezdental.in/all-services#services",
      "name": "Dental Services at Simply Smilez Dental",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "General Dentistry"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Invisalign & Clear Aligners"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pediatric Dentistry"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Braces & Orthodontics"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Root Canal & Endodontics"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Restorative & Cosmetic Dentistry"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Hygiene & Gum Care"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Oral Surgery"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Teeth Whitening"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Advanced Dentistry"
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
      <AllServicesPage />
    </>
  );
}
