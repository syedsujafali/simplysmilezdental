import type { Metadata } from 'next';
import TestimonialsPage from '@/src/views/TestimonialsPage';

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials | Simply Smilez Dental Hyderabad",
  description: "Read verified patient reviews and testimonials for Simply Smilez Dental Clinic in Shaikpet, Hyderabad. Discover 5-star experiences with Invisalign, braces, root canals, and implants.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/testimonials",
  },
  openGraph: {
    title: "Patient Reviews & Testimonials | Simply Smilez Dental Hyderabad",
    description: "Read verified patient reviews and testimonials for Simply Smilez Dental Clinic in Shaikpet, Hyderabad. Discover 5-star experiences with Invisalign, braces, root canals, and implants.",
    url: "https://www.simplysmilezdental.in/testimonials",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/about.webp",
        alt: "Patient reviews and testimonials for Simply Smilez Dental Clinic in Shaikpet, Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Patient Reviews & Testimonials | Simply Smilez Dental Hyderabad",
    description: "Read verified patient reviews and testimonials for Simply Smilez Dental Clinic in Shaikpet, Hyderabad. Discover 5-star experiences with Invisalign, braces, root canals, and implants.",
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
      "description": "Simply Smilez Dental Clinic provides comprehensive dental care in Shaikpet, Hyderabad, including Invisalign, braces, dental implants, root canal treatment, cosmetic dentistry and pediatric dentistry.",
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "150",
        "bestRating": "5",
        "worstRating": "1"
      },
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
        "Manikonda",
        "Tolichowki",
        "Jubilee Hills",
        "Banjara Hills",
        "Gachibowli",
        "Narsingi",
        "Mehdipatnam"
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
      "@id": "https://www.simplysmilezdental.in/testimonials#webpage",
      "url": "https://www.simplysmilezdental.in/testimonials",
      "name": "Patient Reviews & Testimonials | Simply Smilez Dental Hyderabad",
      "description": "Read patient testimonials and verified experiences with Simply Smilez Dental Clinic in Shaikpet, Hyderabad.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/testimonials#breadcrumb"
      }
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "author": {
        "@type": "Person",
        "name": "Zufisha Zareen"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I recently completed my braces treatment with Dr. Ankush, and I could not be happier with the results! My teeth are now perfectly aligned and look amazing. Highly recommended!"
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "author": {
        "@type": "Person",
        "name": "Shanmukh Pyata"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I would like to sincerely thank Dr. Susheel Kumar for the outstanding care and treatment provided to my child with Invisalign. The entire Invisalign journey has been smooth."
    },
    {
      "@type": "Review",
      "itemReviewed": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "author": {
        "@type": "Person",
        "name": "Atul Sahu"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "I visited the clinic for a re-root canal treatment, which was performed by Dr. Susheel. My case was complicated because there was a broken instrument inside the root canal. The entire procedure was virtually painless."
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/testimonials#breadcrumb",
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
          "name": "Testimonials",
          "item": "https://www.simplysmilezdental.in/testimonials"
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
      <TestimonialsPage />
    </>
  );
}
