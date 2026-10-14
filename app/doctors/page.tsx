import type { Metadata } from 'next';
import DoctorsPage from '@/src/views/DoctorsPage';

export const metadata: Metadata = {
  title: "Experienced Dentists & Dental Specialists in Shaikpet, Hyderabad | Simply Smilez",
  description: "Meet our team of experienced dentists and dental specialists at Simply Smilez Dental Clinic in Shaikpet, Hyderabad. Expert care by Dr. Ankush Kumar (Orthodontist) and Dr. Susheel Kumar (Pediatric Dentist & Implantologist).",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/doctors",
  },
  openGraph: {
    title: "Experienced Dentists & Dental Specialists in Shaikpet, Hyderabad | Simply Smilez",
    description: "Meet our team of experienced dental specialists at Simply Smilez Dental Clinic in Shaikpet, Hyderabad: Dr. Ankush Kumar (Orthodontist & Invisalign Provider) and Dr. Susheel Kumar (Pediatric Dentist & Implantologist).",
    url: "https://www.simplysmilezdental.in/doctors",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/about.webp",
        alt: "Expert dentists and dental team at Simply Smilez Dental Clinic in Shaikpet, Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Experienced Dentists & Dental Specialists in Shaikpet, Hyderabad | Simply Smilez",
    description: "Meet our team of experienced dental specialists at Simply Smilez Dental Clinic in Shaikpet, Hyderabad: Dr. Ankush Kumar (Orthodontist) and Dr. Susheel Kumar (Pediatric Dentist & Implantologist).",
    images: ["https://www.simplysmilezdental.in/images/about.webp"],
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
      "@type": "CollectionPage",
      "@id": "https://www.simplysmilezdental.in/doctors#webpage",
      "url": "https://www.simplysmilezdental.in/doctors",
      "name": "Experienced Dentists & Dental Specialists in Shaikpet, Hyderabad | Simply Smilez",
      "description": "Meet our team of experienced dentists and dental specialists at Simply Smilez Dental Clinic in Shaikpet, Hyderabad.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/doctors#breadcrumb"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar#person",
      "name": "Dr. Ankush Kumar",
      "jobTitle": "Orthodontist and Invisalign Provider",
      "worksFor": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "image": "https://www.simplysmilezdental.in/images/ankush.webp",
      "url": "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar"
    },
    {
      "@type": "Person",
      "@id": "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar#person",
      "name": "Dr. Susheel Kumar",
      "jobTitle": "Pediatric Dentist and Implantologist",
      "worksFor": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "image": "https://www.simplysmilezdental.in/images/about.webp",
      "url": "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/doctors#breadcrumb",
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
          "name": "Doctors",
          "item": "https://www.simplysmilezdental.in/doctors"
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
      <DoctorsPage />
    </>
  );
}
