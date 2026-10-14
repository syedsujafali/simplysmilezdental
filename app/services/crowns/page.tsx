import type { Metadata } from 'next';
import CrownsPage from '@/src/views/services/CrownsPage';

export const metadata: Metadata = {
  title: "Dental Crowns in Hyderabad | Simply Smilez Dental Clinic",
  description: "Get dental crowns in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Learn about crown types, benefits, procedure, aftercare, and treatment options.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/crowns",
  },
  openGraph: {
    title: "Dental Crowns in Hyderabad | Simply Smilez Dental Clinic",
    description: "Get dental crowns in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Learn about crown types, benefits, procedure, aftercare, and treatment options.",
    url: "https://www.simplysmilezdental.in/services/crowns",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/crowns.webp",
        alt: "Dental crowns at Simply Smilez Dental Clinic in Shaikpet, Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dental Crowns in Hyderabad | Simply Smilez Dental Clinic",
    description: "Learn about dental crowns, zirconia and porcelain options, benefits, procedure, and aftercare at Simply Smilez Dental Clinic, Shaikpet.",
    images: ["https://www.simplysmilezdental.in/images/crowns.webp"],
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
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet",
        "addressLocality": "Hyderabad",
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
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/crowns#webpage",
      "url": "https://www.simplysmilezdental.in/services/crowns",
      "name": "Dental Crowns in Hyderabad | Simply Smilez Dental Clinic",
      "description": "Learn about dental crowns in Hyderabad, including crown types, benefits, procedure, aftercare and treatment options at Simply Smilez Dental Clinic in Shaikpet.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/crowns#service"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/crowns#service",
      "name": "Dental Crowns",
      "serviceType": "Dental Crown Treatment",
      "description": "Dental crown treatment for damaged, weakened, cracked or extensively restored teeth, including suitable porcelain, ceramic and zirconia crown options.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/crowns"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/services/crowns#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a dental crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental crown is a custom restoration that covers a tooth above the gum line to restore its shape, function and, where appropriate, appearance."
          }
        },
        {
          "@type": "Question",
          "name": "Does every damaged tooth need a crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The appropriate treatment depends on the extent of damage and the amount of healthy tooth structure remaining. A filling, inlay, onlay or another restoration may be suitable in some cases."
          }
        },
        {
          "@type": "Question",
          "name": "Are zirconia crowns available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zirconia is a ceramic material that can be used to make dental crowns. Your dentist can determine whether a zirconia crown is suitable for your particular tooth."
          }
        },
        {
          "@type": "Question",
          "name": "How many appointments are needed for a dental crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The number of appointments depends on the condition of the tooth, the type of crown and any additional treatment required."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a dental crown cost in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on the type of crown, tooth being treated, preparation required and any additional dental treatment needed. A dental examination is required to determine the appropriate treatment and current cost."
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
      <CrownsPage />
    </>
  );
}
