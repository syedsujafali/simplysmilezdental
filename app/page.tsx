import type { Metadata } from 'next';
import HomePage from '../src/views/HomePage';

export const metadata: Metadata = {
  title: 'Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental',
  description:
    'Simply Smilez Dental Clinic in Shaikpet offers Invisalign, Invisalign First for Kids, root canals, braces, implants and family dental care in Hyderabad.',
  alternates: {
    canonical: "https://www.simplysmilezdental.in/",
  },
  openGraph: {
    title: 'Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental',
    description:
      'Comprehensive dental care in Shaikpet, Hyderabad, including Invisalign, Invisalign First for Kids, root canals, braces, implants and more.',
    url: 'https://www.simplysmilezdental.in/',
    images: [{ url: 'https://www.simplysmilezdental.in/images/about.webp', alt: 'Simply Smilez Dental Clinic in Shaikpet, Hyderabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental',
    description:
      'Invisalign, Invisalign First for Kids, root canals, braces, implants and family dental care in Shaikpet, Hyderabad.',
    images: ['https://www.simplysmilezdental.in/images/about.webp'],
  },
};

const homeSchema = {
  "@context": "https://schema.org/",
  "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
  "@id": "https://www.simplysmilezdental.in/#dentist",
  "name": "Simply Smilez Dental Clinic",
  "url": "https://www.simplysmilezdental.in/",
  "description": "Simply Smilez Dental Clinic provides comprehensive dental care for children and adults in Shaikpet, Hyderabad, including Invisalign, Invisalign First for Kids, braces, root canal treatment, dental implants, cosmetic dentistry, pediatric dentistry and general dental care.",
  "medicalSpecialty": "Dentistry",
  "image": "https://www.simplysmilezdental.in/images/about.webp",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.simplysmilezdental.in/images/logo-3.webp"
  },
  "areaServed": [
    { "@type": "Place", "name": "Shaikpet, Hyderabad" },
    { "@type": "Place", "name": "Manikonda, Hyderabad" },
    { "@type": "Place", "name": "Kondapur, Hyderabad" },
    { "@type": "Place", "name": "Jubilee Hills, Hyderabad" },
    { "@type": "Place", "name": "Gachibowli, Hyderabad" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dental Treatments",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Invisalign" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Invisalign First for Kids" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Root Canal Treatment" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Dental Implants" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Braces" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Pediatric Dentistry" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "Cosmetic Dentistry" } },
      { "@type": "Offer", "itemOffered": { "@type": "MedicalProcedure", "name": "General Dentistry" } }
    ]
  },
  "sameAs": ["https://www.simplysmilezdental.in/"]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HomePage />
    </>
  );
}
