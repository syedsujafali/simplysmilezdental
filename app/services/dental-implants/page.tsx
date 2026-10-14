import type { Metadata } from 'next';
import DentalImplantPage from '@/src/views/services/DentalImplantPage';

export const metadata: Metadata = {
  title: "Dental Implants in Hyderabad | Simply Smilez Dental Clinic",
  description: "Get dental implants in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Explore tooth replacement options and personalized implant care.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/dental-implants",
  },
  openGraph: {
    title: "Dental Implants in Hyderabad | Simply Smilez Dental Clinic",
    description: "Get dental implants in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Explore tooth replacement options and personalized implant care.",
    url: "https://www.simplysmilezdental.in/services/dental-implants",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/dentalimp.webp",
        alt: "Dental implant treatment at Simply Smilez Dental Clinic in Shaikpet, Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dental Implants in Hyderabad | Simply Smilez Dental Clinic",
    description: "Get dental implants in Hyderabad at Simply Smilez Dental Clinic, Shaikpet, with personalized tooth replacement and implant care.",
    images: ["https://www.simplysmilezdental.in/images/dentalimp.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/dental-implants#webpage",
      "url": "https://www.simplysmilezdental.in/services/dental-implants",
      "name": "Dental Implants in Hyderabad | Simply Smilez Dental Clinic",
      "description": "Get dental implants in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Explore tooth replacement options and personalized implant care.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/dental-implants#service"
      },
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/services/dental-implants#service"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.simplysmilezdental.in/images/dentalimp.webp",
        "caption": "Dental implant treatment at Simply Smilez Dental Clinic in Shaikpet, Hyderabad"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.simplysmilezdental.in/#website",
      "url": "https://www.simplysmilezdental.in/",
      "name": "Simply Smilez Dental Clinic",
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#clinic",
      "name": "Simply Smilez Dental Clinic",
      "url": "https://www.simplysmilezdental.in/",
      "image": "https://www.simplysmilezdental.in/images/about.webp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.simplysmilezdental.in/images/logo-3.webp"
      },
      "telephone": [
        "+91-9603338904",
        "+91-7799376656"
      ],
      "email": "info.invisaligndental@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road",
        "addressLocality": "Shaikpet",
        "addressRegion": "Telangana",
        "postalCode": "500008",
        "addressCountry": "IN"
      },
      "areaServed": [
        "Shaikpet",
        "O.U. Colony",
        "Dwaraka Nagar Colony",
        "Manikonda",
        "Tolichowki",
        "Raidurg",
        "Puppalaguda",
        "Film Nagar",
        "Jubilee Hills",
        "Banjara Hills",
        "Mehdipatnam",
        "Langar Houz",
        "Gachibowli",
        "Narsingi"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/dental-implants#service",
      "name": "Dental Implant Treatment",
      "alternateName": [
        "Dental Implants",
        "Dental Implant Treatment in Hyderabad",
        "Tooth Replacement with Dental Implants"
      ],
      "description": "Dental implant treatment for replacing missing teeth with implant-supported dental restorations at Simply Smilez Dental Clinic in Shaikpet, Hyderabad.",
      "serviceType": "Dental Implant Treatment",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/dental-implants",
      "image": "https://www.simplysmilezdental.in/images/dentalimp.webp"
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.simplysmilezdental.in/services/dental-implants#procedure",
      "name": "Dental Implant Placement",
      "alternateName": "Dental Implant Treatment",
      "description": "Dental implant placement is a procedure used to provide support for a dental crown, bridge, or denture when replacing missing teeth.",
      "procedureType": "http://schema.org/PercutaneousProcedure",
      "bodyLocation": "Jaw",
      "url": "https://www.simplysmilezdental.in/services/dental-implants",
      "image": "https://www.simplysmilezdental.in/images/dentalimp.webp"
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.simplysmilezdental.in/services/dental-implants#implant-options",
      "name": "Dental Implant Treatment Options",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Single Tooth Dental Implant"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multiple Dental Implants"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Implant-Supported Dental Restoration"
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/dental-implants#breadcrumb",
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
          "name": "Dental Implants",
          "item": "https://www.simplysmilezdental.in/services/dental-implants"
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
      <DentalImplantPage />
    </>
  );
}
