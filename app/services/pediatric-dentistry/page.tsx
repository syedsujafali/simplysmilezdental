import type { Metadata } from 'next';
import PediataryPage from '@/src/views/services/PediataryPage';

export const metadata: Metadata = {
  title: "Best Child Dentists Near Me in Hyderabad | Pediatric Dentistry",
  description: "Pediatric dentistry in Shaikpet, Hyderabad for children's dental checkups, preventive care, fillings, crowns, fluoride, sealants and orthodontic evaluation.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/pediatric-dentistry",
  },
  openGraph: {
    title: "Best Child Dentists Near Me in Hyderabad | Pediatric Dentistry",
    description: "Pediatric dentistry in Shaikpet, Hyderabad for children's dental checkups, preventive care, fillings, crowns, fluoride, sealants and orthodontic evaluation.",
    url: "https://www.simplysmilezdental.in/services/pediatric-dentistry",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/pedia2.webp",
        alt: "Pediatric dentistry and children's dental care at Simply Smilez Dental Clinic in Shaikpet, Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Child Dentists Near Me in Hyderabad | Pediatric Dentistry",
    description: "Pediatric dentistry in Shaikpet, Hyderabad for children's dental checkups, preventive care, fillings, crowns, fluoride, sealants and orthodontic evaluation.",
    images: ["https://www.simplysmilezdental.in/images/pedia2.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/pediatric-dentistry#webpage",
      "url": "https://www.simplysmilezdental.in/services/pediatric-dentistry",
      "name": "Best Child Dentists Near Me in Hyderabad | Pediatric Dentistry",
      "description": "Pediatric dentistry in Shaikpet, Hyderabad for children's dental checkups, preventive care, fillings, crowns, fluoride, sealants and orthodontic evaluation.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/pediatric-dentistry#pediatric-dentistry"
      },
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/services/pediatric-dentistry#pediatric-dentistry"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.simplysmilezdental.in/images/pedia2.webp",
        "caption": "Pediatric dentistry and children's dental care at Simply Smilez Dental Clinic in Shaikpet, Hyderabad"
      }
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
      "@id": "https://www.simplysmilezdental.in/services/pediatric-dentistry#pediatric-dentistry",
      "name": "Pediatric Dentistry",
      "alternateName": [
        "Pediatric Dental Care",
        "Children's Dentistry",
        "Kids Dental Care"
      ],
      "serviceType": "Pediatric Dentistry",
      "description": "Pediatric dental care in Shaikpet, Hyderabad, including children's dental checkups, preventive care, fluoride treatment, dental sealants, fillings, crowns, pediatric root canal treatment and early orthodontic evaluation.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/pediatric-dentistry",
      "image": "https://www.simplysmilezdental.in/images/pedia2.webp",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pediatric Dental Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pediatric Dental Checkup"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pediatric Dental Consultation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Preventive Pediatric Dentistry"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fluoride Treatment for Children"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dental Sealants for Children"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Children's Dental Fillings"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pediatric Root Canal Treatment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Stainless Steel Crowns"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pediatric Zirconia Crowns"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Space Maintainers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Early Orthodontic Evaluation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Interceptive Orthodontics"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Phase 1 Orthodontic Treatment"
            }
          }
        ]
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.simplysmilezdental.in/services/pediatric-dentistry#procedure",
      "name": "Pediatric Dental Treatment",
      "description": "Dental procedures for children may include preventive treatments, restorative procedures and selected treatments for primary teeth based on individual clinical needs.",
      "bodyLocation": "Teeth",
      "procedureType": "http://schema.org/NoninvasiveProcedure"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/pediatric-dentistry#breadcrumb",
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
          "name": "Pediatric Dentistry",
          "item": "https://www.simplysmilezdental.in/services/pediatric-dentistry"
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
      <PediataryPage />
    </>
  );
}
