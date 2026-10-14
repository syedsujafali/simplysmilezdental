import type { Metadata } from 'next';
import MicroscopicRootCanalPage from '@/src/views/services/MicroscopicRootCanalPage';

export const metadata: Metadata = {
  title: "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez",
  description: "Get microscopic root canal treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Advanced 25x surgical magnification endodontics to preserve infected or damaged teeth.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/microscopic-root-canal",
  },
  openGraph: {
    title: "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez",
    description: "Get microscopic root canal treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Advanced 25x surgical magnification endodontics to preserve infected or damaged teeth.",
    url: "https://www.simplysmilezdental.in/services/microscopic-root-canal",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/microscopic-rct.jpg",
        alt: "Microscopic root canal treatment at Simply Smilez Dental Clinic in Shaikpet, Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez",
    description: "Microscopic root canal treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet, for infected or damaged teeth.",
    images: ["https://www.simplysmilezdental.in/images/microscopic-rct.jpg"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#webpage",
      "url": "https://www.simplysmilezdental.in/services/microscopic-root-canal",
      "name": "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez",
      "description": "Get microscopic root canal treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Advanced 25x surgical magnification endodontics to preserve infected or damaged teeth.",
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#procedure"
      },
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#procedure"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#procedure",
      "name": "Microscopic Root Canal Treatment",
      "alternateName": "Laser Root Canal Treatment in Hyderabad",
      "description": "Microscopic root canal treatment using surgical dental operating microscopes for infected or damaged teeth at Simply Smilez Dental Clinic in Shaikpet, Hyderabad.",
      "procedureType": "http://schema.org/NoninvasiveProcedure",
      "bodyLocation": "Tooth",
      "url": "https://www.simplysmilezdental.in/services/microscopic-root-canal",
      "image": "https://www.simplysmilezdental.in/images/microscopic-rct.jpg"
    },
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#clinic",
      "name": "Simply Smilez Dental Clinic",
      "url": "https://www.simplysmilezdental.in/",
      "image": "https://www.simplysmilezdental.in/images/about.webp",
      "telephone": [
        "+91-9603338904",
        "+91-7799376656"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road",
        "addressLocality": "Shaikpet",
        "addressRegion": "Telangana",
        "postalCode": "500008",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is microscopic root canal treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Microscopic root canal treatment incorporates high-magnification surgical operating microscopes (up to 25x) into endodontic therapy. It allows the specialist to locate hidden extra canals, navigate calcified canals, and thoroughly eliminate infection while preserving natural tooth structure."
          }
        },
        {
          "@type": "Question",
          "name": "Is root canal treatment suitable for everyone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment suitability depends on the condition of the tooth, the extent of infection, remaining tooth structure and other clinical factors. A dental examination is required before treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Can root canal treatment save an infected tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Root canal treatment can save many teeth affected by pulp infection or damage when the tooth has sufficient remaining structure and can be properly restored."
          }
        },
        {
          "@type": "Question",
          "name": "Does root canal treatment hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local anaesthesia is generally used during root canal treatment. Some temporary tenderness may occur afterward. Modern microscopic procedures are virtually painless."
          }
        },
        {
          "@type": "Question",
          "name": "Will I need a crown after root canal treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most back teeth require a protective crown after root canal treatment to prevent fractures and restore full chewing function."
          }
        },
        {
          "@type": "Question",
          "name": "How much does root canal treatment cost in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on the tooth being treated (anterior, premolar, or molar), complexity of the case, and whether re-treatment or retrieval is required."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#breadcrumb",
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
          "name": "Microscopic Root Canal",
          "item": "https://www.simplysmilezdental.in/services/microscopic-root-canal"
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
      <MicroscopicRootCanalPage />
    </>
  );
}
