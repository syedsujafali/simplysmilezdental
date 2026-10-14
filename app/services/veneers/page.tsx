import type { Metadata } from 'next';
import VeneersPage from '@/src/views/services/VeneersPage';

export const metadata: Metadata = {
  title: "Dental Veneers in Hyderabad | Simply Smilez Dental Clinic",
  description: "Get dental veneers in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Improve chipped, stained or uneven teeth with personalized veneer treatment.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/veneers",
  },
  openGraph: {
    title: "Dental Veneers in Hyderabad | Simply Smilez Dental Clinic",
    description: "Get dental veneers in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Improve chipped, stained or uneven teeth with personalized veneer treatment.",
    url: "https://www.simplysmilezdental.in/services/veneers",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/veneers.webp",
        alt: "Dental veneers treatment at Simply Smilez Dental Clinic in Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dental Veneers in Hyderabad | Simply Smilez Dental Clinic",
    description: "Explore dental veneers in Hyderabad for chipped, stained and uneven teeth at Simply Smilez Dental Clinic, Shaikpet.",
    images: ["https://www.simplysmilezdental.in/images/veneers.webp"],
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
      "telephone": "+917799376656",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500008",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/veneers",
      "url": "https://www.simplysmilezdental.in/services/veneers",
      "name": "Dental Veneers in Hyderabad | Simply Smilez Dental Clinic",
      "description": "Learn about dental veneers in Hyderabad, including benefits, treatment procedure, suitability, aftercare and veneer options at Simply Smilez Dental Clinic in Shaikpet.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/veneers#service"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/veneers#service",
      "name": "Dental Veneers",
      "serviceType": "Dental Veneer Treatment",
      "description": "Dental veneer treatment to improve the appearance of suitable teeth affected by discoloration, chips, uneven shapes, small gaps and other cosmetic concerns.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/veneers"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/services/veneers#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are dental veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental veneers are thin, custom-made restorations designed to cover the front surface of selected teeth and improve their appearance."
          }
        },
        {
          "@type": "Question",
          "name": "Can veneers fix chipped teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veneers may be suitable for some mildly chipped teeth. The appropriate treatment depends on the extent and location of the damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are veneers the same as crowns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Veneers generally cover the front surface of a tooth, while crowns cover a larger portion of the tooth and may be recommended when greater structural restoration is required."
          }
        },
        {
          "@type": "Question",
          "name": "Can veneers close gaps between teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veneers may be considered for certain small cosmetic gaps. Orthodontic treatment or another option may be more appropriate depending on the size and cause of the gap."
          }
        },
        {
          "@type": "Question",
          "name": "Do veneers look natural?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veneers can be designed to resemble natural teeth. The final appearance depends on factors including the material, colour, shape, tooth position and treatment planning."
          }
        },
        {
          "@type": "Question",
          "name": "How much do dental veneers cost in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on factors such as the type of veneer, number of teeth being treated, preparation required and complexity of the case. A consultation is needed to determine the appropriate treatment and current cost."
          }
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
      <VeneersPage />
    </>
  );
}
