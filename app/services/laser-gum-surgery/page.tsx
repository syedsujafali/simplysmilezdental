import type { Metadata } from 'next';
import LaserGumPage from '@/src/views/services/LaserGumPage';

export const metadata: Metadata = {
  title: "Advanced Laser Gum Treatment in Hyderabad | Simply Smilez",
  description: "Improve gum health with laser gum treatment in Hyderabad at Simply Smilez, Shaikpet. Get personalized periodontal care, gum treatment and cleaning.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/laser-gum-surgery",
  },
  openGraph: {
    title: "Advanced Laser Gum Treatment in Hyderabad | Simply Smilez",
    description: "Improve gum health with laser gum treatment in Hyderabad at Simply Smilez, Shaikpet. Get personalized periodontal care, gum treatment and cleaning.",
    url: "https://www.simplysmilezdental.in/services/laser-gum-surgery",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/lasergum.webp",
        alt: "Advanced laser gum treatment and periodontal care at Simply Smilez Dental Clinic in Shaikpet, Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Advanced Laser Gum Treatment in Hyderabad | Simply Smilez",
    description: "Improve gum health with laser gum treatment in Hyderabad at Simply Smilez, Shaikpet, with personalized periodontal and gum care.",
    images: ["https://www.simplysmilezdental.in/images/lasergum.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/laser-gum-surgery#webpage",
      "url": "https://www.simplysmilezdental.in/services/laser-gum-surgery",
      "name": "Advanced Laser Gum Treatment in Hyderabad | Simply Smilez",
      "description": "Improve gum health with laser gum treatment in Hyderabad at Simply Smilez, Shaikpet. Get personalized periodontal care, gum treatment and professional dental cleaning.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/services/laser-gum-surgery#procedure"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/laser-gum-surgery#procedure"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.simplysmilezdental.in/images/lasergum.webp",
        "caption": "Laser gum treatment at Simply Smilez Dental Clinic in Shaikpet, Hyderabad"
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
      }
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
      "@type": "MedicalProcedure",
      "@id": "https://www.simplysmilezdental.in/services/laser-gum-surgery#procedure",
      "name": "Laser Gum Treatment",
      "alternateName": [
        "Laser Gum Surgery",
        "Laser Periodontal Treatment"
      ],
      "description": "Laser-assisted gum treatment for selected periodontal and gum conditions at Simply Smilez Dental Clinic in Shaikpet, Hyderabad.",
      "procedureType": "http://schema.org/NoninvasiveProcedure",
      "bodyLocation": "Gums",
      "url": "https://www.simplysmilezdental.in/services/laser-gum-surgery",
      "image": "https://www.simplysmilezdental.in/images/lasergum.webp"
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/laser-gum-surgery#gum-care-service",
      "name": "Hygiene & Gum Care",
      "serviceType": "Dental Hygiene and Gum Care",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hygiene & Gum Care Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Teeth Cleaning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dental Scaling"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Teeth Scaling and Polishing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional Teeth Cleaning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gum Disease Treatment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gum Infection Treatment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Periodontal Treatment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gum Care"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bad Breath Treatment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Plaque Removal"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tartar Removal"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/laser-gum-surgery#breadcrumb",
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
          "name": "Laser Gum Treatment",
          "item": "https://www.simplysmilezdental.in/services/laser-gum-surgery"
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
      <LaserGumPage />
    </>
  );
}
