import type { Metadata } from 'next';
import AboutPage from '@/src/views/AboutPage';

export const metadata: Metadata = {
  title: "Invisalign & Root Canal Dentist in Hyderabad | Simply Smilez",
  description: "Simply Smilez Dental Clinic offers Invisalign, Invisalign First for Kids, root canal treatment, and family dental care in Shaikpet, Hyderabad.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/about",
  },
  openGraph: {
    title: "Invisalign & Root Canal Dentist in Hyderabad | Simply Smilez",
    description: "Simply Smilez Dental Clinic offers Invisalign, Invisalign First for Kids, root canal treatment, and family dental care in Shaikpet, Hyderabad.",
    url: "https://www.simplysmilezdental.in/about",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/about.webp",
        alt: "Simply Smilez Dental Clinic in Shaikpet, Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Invisalign & Root Canal Dentist in Hyderabad | Simply Smilez",
    description: "Simply Smilez Dental Clinic offers Invisalign, Invisalign First for Kids, root canal treatment, and family dental care in Shaikpet, Hyderabad.",
    images: ["https://www.simplysmilezdental.in/images/about.webp"],
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
      "description": "Simply Smilez Dental Clinic is a dental clinic in Shaikpet, Hyderabad, providing personalized dental care including Invisalign, braces, dental implants, root canal treatment, crowns, veneers, teeth whitening, pediatric dentistry, wisdom tooth extraction and laser gum treatment.",
      "image": "https://www.simplysmilezdental.in/images/about.webp",
      "priceRange": "$$",
      "medicalSpecialty": "https://schema.org/Dentistry",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Shaikpet",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "areaServed": [
        {
          "@type": "Place",
          "name": "Shaikpet"
        },
        {
          "@type": "Place",
          "name": "Manikonda"
        },
        {
          "@type": "Place",
          "name": "Tolichowki"
        },
        {
          "@type": "Place",
          "name": "Jubilee Hills"
        },
        {
          "@type": "Place",
          "name": "Banjara Hills"
        },
        {
          "@type": "Place",
          "name": "Gachibowli"
        },
        {
          "@type": "Place",
          "name": "Narsingi"
        },
        {
          "@type": "Place",
          "name": "Mehdipatnam"
        }
      ],
      "foundingDate": "2018"
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
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/about#webpage",
      "url": "https://www.simplysmilezdental.in/about",
      "name": "About Simply Smilez Dental Clinic",
      "description": "Learn about Simply Smilez Dental Clinic, a dental clinic in Shaikpet, Hyderabad, established in 2018.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/about#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/about#breadcrumb",
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
          "name": "About Us",
          "item": "https://www.simplysmilezdental.in/about"
        }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/about#invisalign",
      "name": "Invisalign Treatment",
      "serviceType": "Invisalign",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/about#root-canal",
      "name": "Root Canal Treatment",
      "serviceType": "Root Canal Treatment",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/about#dental-implants",
      "name": "Dental Implants",
      "serviceType": "Dental Implants",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/about#braces",
      "name": "Braces and Orthodontic Treatment",
      "serviceType": "Braces",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/about#pediatric-dentistry",
      "name": "Pediatric Dentistry",
      "serviceType": "Pediatric Dentistry",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/about#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Simply Smilez Dental Clinic located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We are located in Shaikpet, Hyderabad, serving patients from surrounding areas."
          }
        },
        {
          "@type": "Question",
          "name": "What treatments do you offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our services include Invisalign, braces, dental implants, root canal treatment, crowns, veneers, teeth whitening, pediatric dentistry, wisdom tooth extraction, laser gum treatment, and preventive care."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide Invisalign for children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We offer Invisalign First for Kids where clinically appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "When was Simply Smilez Dental Clinic established?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The clinic was established in 2018 and has been providing dental care in Hyderabad since then."
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
      <AboutPage />
    </>
  );
}
