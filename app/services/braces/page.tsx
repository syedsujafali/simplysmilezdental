import type { Metadata } from 'next';
import BracesPage from '@/src/views/services/BracesPage';

export const metadata: Metadata = {
  title: "Dental Braces Clinic in Hyderabad | Braces & Orthodontic Treatment",
  description: "Get braces in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Explore braces, clear aligners and orthodontic treatment for a straighter smile.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/braces",
  },
  openGraph: {
    title: "Dental Braces Clinic in Hyderabad | Braces & Orthodontic Treatment",
    description: "Get braces in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Explore braces, clear aligners and orthodontic treatment for a straighter smile.",
    url: "https://www.simplysmilezdental.in/services/braces",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/braces.webp",
        alt: "Dental braces treatment at Simply Smilez Dental Clinic in Shaikpet, Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dental Braces Clinic in Hyderabad | Braces & Orthodontic Treatment",
    description: "Explore braces, clear aligners and orthodontic treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet.",
    images: ["https://www.simplysmilezdental.in/images/braces.webp"],
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
      "@id": "https://www.simplysmilezdental.in/services/braces",
      "url": "https://www.simplysmilezdental.in/services/braces",
      "name": "Dental Braces Clinic in Hyderabad | Braces & Orthodontic Treatment",
      "description": "Learn about braces, clear aligners and orthodontic treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/braces#service"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/braces#service",
      "name": "Dental Braces",
      "serviceType": "Orthodontic Treatment",
      "description": "Orthodontic treatment using dental braces to address suitable cases of crowded, crooked, spaced or misaligned teeth and certain bite concerns.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/braces"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/services/braces#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are braces used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Braces are used to gradually move teeth and address certain alignment and bite problems, including suitable cases of crowded, crooked or spaced teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Are braces only for children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Teenagers and adults may also undergo orthodontic treatment when their teeth and gums are suitable for treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Are braces better than clear aligners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Braces and clear aligners are different orthodontic options. The appropriate choice depends on the individual's teeth, bite, treatment requirements and clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "How long does braces treatment take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment time varies according to the complexity of the case and the amount of tooth movement required. An orthodontist can provide an estimated treatment timeline after an examination."
          }
        },
        {
          "@type": "Question",
          "name": "Can braces fix crowded teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Braces can be used to address many cases of dental crowding. Suitability depends on the severity and underlying cause of the crowding."
          }
        },
        {
          "@type": "Question",
          "name": "Can braces correct gaps between teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Orthodontic treatment can be used to correct many cases of spacing. The treatment approach depends on the size and cause of the spaces."
          }
        },
        {
          "@type": "Question",
          "name": "Are retainers necessary after braces?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Retainers are commonly recommended after active orthodontic treatment to help maintain tooth position. Your orthodontist will advise you on the appropriate retainer and wearing schedule."
          }
        },
        {
          "@type": "Question",
          "name": "How much do braces cost in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost varies according to the type of braces, complexity of the orthodontic case, expected treatment duration and other clinical factors. A consultation is required for an individualized treatment plan and current cost."
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
      <BracesPage />
    </>
  );
}
