import type { Metadata } from 'next';
import ContactPage from '@/src/views/ContactPage';

export const metadata: Metadata = {
  title: "Contact Dentist in Shaikpet, Hyderabad | Simply Smilez Dental",
  description: "Contact Simply Smilez Dental Clinic in Shaikpet, Hyderabad, for Invisalign, braces, implants, root canal and comprehensive dental care.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/contact",
  },
  openGraph: {
    title: "Contact Dentist in Shaikpet, Hyderabad | Simply Smilez Dental",
    description: "Contact Simply Smilez Dental Clinic in Shaikpet, Hyderabad, for Invisalign, braces, implants, root canal and comprehensive dental care.",
    url: "https://www.simplysmilezdental.in/contact",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/gmb.webp",
        alt: "Contact Simply Smilez Dental Clinic in Shaikpet, Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Dentist in Shaikpet, Hyderabad | Simply Smilez Dental",
    description: "Contact Simply Smilez Dental Clinic in Shaikpet, Hyderabad, for Invisalign, braces, implants, root canal and comprehensive dental care.",
    images: ["https://www.simplysmilezdental.in/images/gmb.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#clinic",
      "name": "Simply Smilez Dental Clinic",
      "url": "https://www.simplysmilezdental.in/",
      "description": "Simply Smilez Dental Clinic provides family and comprehensive dental care in Shaikpet, Hyderabad, including Invisalign, braces, dental implants, root canal treatment, crowns, veneers, pediatric dentistry and gum treatment.",
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
      "priceRange": "$$",
      "medicalSpecialty": "https://schema.org/Dentistry",
      "foundingDate": "2018",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road",
        "addressLocality": "Shaikpet",
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
        "Narsingi",
        "Kondapur"
      ]
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.simplysmilezdental.in/contact#webpage",
      "url": "https://www.simplysmilezdental.in/contact",
      "name": "Contact Simply Smilez Dental Clinic | Shaikpet, Hyderabad",
      "description": "Contact Simply Smilez Dental Clinic in Shaikpet, Hyderabad, for comprehensive family dental care and appointments.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/contact#breadcrumb"
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
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/contact#breadcrumb",
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
          "name": "Contact Us",
          "item": "https://www.simplysmilezdental.in/contact"
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
      <ContactPage />
    </>
  );
}
