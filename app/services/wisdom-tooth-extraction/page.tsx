import type { Metadata } from 'next';
import WisdomPage from '@/src/views/services/WisdomPage';

export const metadata: Metadata = {
  title: "Wisdom Tooth Extraction in Hyderabad | Simply Smilez",
  description: "Wisdom tooth extraction in Shaikpet, Hyderabad for impacted, painful or infected wisdom teeth. Get a dental evaluation and personalized treatment plan.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction",
  },
  openGraph: {
    title: "Wisdom Tooth Extraction in Hyderabad | Simply Smilez",
    description: "Wisdom tooth extraction in Shaikpet, Hyderabad for impacted, painful or infected wisdom teeth. Get a dental evaluation and personalized treatment plan.",
    url: "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/wisdom.webp",
        alt: "Wisdom tooth extraction and impacted tooth treatment at Simply Smilez Dental Clinic in Shaikpet, Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Wisdom Tooth Extraction in Hyderabad | Simply Smilez",
    description: "Wisdom tooth extraction in Shaikpet, Hyderabad for impacted, painful or infected wisdom teeth. Get a dental evaluation and personalized treatment plan.",
    images: ["https://www.simplysmilezdental.in/images/wisdom.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#webpage",
      "url": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction",
      "name": "Wisdom Tooth Extraction in Hyderabad | Simply Smilez",
      "description": "Wisdom tooth extraction in Shaikpet, Hyderabad for impacted, painful or infected wisdom teeth. Get a dental evaluation and personalized treatment plan.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#wisdom-tooth-extraction"
      },
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#wisdom-tooth-extraction"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.simplysmilezdental.in/images/wisdom.webp",
        "caption": "Wisdom tooth extraction at Simply Smilez Dental Clinic in Shaikpet, Hyderabad"
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
      "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#wisdom-tooth-extraction",
      "name": "Wisdom Tooth Extraction",
      "alternateName": [
        "Wisdom Teeth Removal",
        "Impacted Wisdom Tooth Extraction",
        "Third Molar Extraction",
        "Surgical Wisdom Tooth Extraction"
      ],
      "serviceType": "Wisdom Tooth Extraction",
      "description": "Wisdom tooth extraction for problematic, impacted or symptomatic third molars, based on individual dental examination and treatment requirements.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction",
      "image": "https://www.simplysmilezdental.in/images/wisdom.webp"
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#procedure",
      "name": "Wisdom Tooth Extraction",
      "alternateName": "Third Molar Extraction",
      "description": "A dental extraction procedure used to remove a wisdom tooth when clinically indicated, including certain impacted or problematic third molars.",
      "bodyLocation": "Wisdom tooth",
      "procedureType": "http://schema.org/PercutaneousProcedure",
      "image": "https://www.simplysmilezdental.in/images/wisdom.webp"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does every wisdom tooth need to be removed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A wisdom tooth does not automatically need to be removed. The decision depends on factors such as its position, symptoms, oral health, ability to maintain the area, and whether it is causing or likely to cause clinically significant problems."
          }
        },
        {
          "@type": "Question",
          "name": "What is an impacted wisdom tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An impacted wisdom tooth is a tooth that cannot erupt normally because of insufficient space or its position within the jaw. It may be partially erupted, completely covered by gum tissue, or positioned against another tooth."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if my wisdom tooth is infected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pain, swelling, tenderness, gum inflammation, unpleasant taste, or difficulty opening the mouth can occur with dental infections. These symptoms can have other causes, so a dental examination is needed to determine the source."
          }
        },
        {
          "@type": "Question",
          "name": "Is wisdom tooth extraction painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The extraction is performed using appropriate anesthesia. Some soreness and swelling can occur during recovery. Your dentist can explain pain-control and anesthesia options and provide specific aftercare instructions based on the complexity of the extraction."
          }
        },
        {
          "@type": "Question",
          "name": "How long does wisdom tooth extraction take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The time required depends on the position and complexity of the tooth. A normally erupted wisdom tooth may be simpler to remove than a deeply impacted tooth. The dentist can explain the expected procedure after evaluating the tooth."
          }
        },
        {
          "@type": "Question",
          "name": "Can an impacted wisdom tooth damage another tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An impacted wisdom tooth can sometimes press against or contribute to problems involving the adjacent second molar. A dental examination and appropriate imaging can help assess the position of the wisdom tooth and its relationship with nearby teeth."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#breadcrumb",
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
          "name": "Wisdom Tooth Extraction",
          "item": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction"
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
      <WisdomPage />
    </>
  );
}
