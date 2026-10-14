import type { Metadata } from 'next';
import LaserTeethPage from '@/src/views/services/LaserTeethPage';

export const metadata: Metadata = {
  title: "Laser Teeth Whitening Treatment in Hyderabad | Simply Smilez",
  description: "Get laser teeth whitening treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Professional whitening for a brighter, more confident smile.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/services/laser-teeth-whitening",
  },
  openGraph: {
    title: "Laser Teeth Whitening Treatment in Hyderabad | Simply Smilez",
    description: "Get laser teeth whitening treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Professional whitening for a brighter, more confident smile.",
    url: "https://www.simplysmilezdental.in/services/laser-teeth-whitening",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/laserteeth.webp",
        alt: "Laser teeth whitening treatment at Simply Smilez Dental Clinic in Hyderabad",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Laser Teeth Whitening Treatment in Hyderabad | Simply Smilez",
    description: "Professional laser teeth whitening in Hyderabad at Simply Smilez Dental Clinic, Shaikpet, for a brighter-looking smile.",
    images: ["https://www.simplysmilezdental.in/images/laserteeth.webp"],
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
      "@id": "https://www.simplysmilezdental.in/services/laser-teeth-whitening",
      "url": "https://www.simplysmilezdental.in/services/laser-teeth-whitening",
      "name": "Laser Teeth Whitening Treatment in Hyderabad | Simply Smilez",
      "description": "Professional laser teeth whitening treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet, for improving the appearance of naturally discoloured teeth.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/laser-teeth-whitening#service"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/laser-teeth-whitening#service",
      "name": "Laser Teeth Whitening",
      "serviceType": "Professional Teeth Whitening",
      "description": "Professional teeth whitening treatment designed to improve the appearance of certain types of natural tooth discoloration and staining.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/laser-teeth-whitening"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/services/laser-teeth-whitening#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is laser teeth whitening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laser teeth whitening is a professional cosmetic dental procedure intended to lighten the colour of natural teeth and reduce certain types of discoloration."
          }
        },
        {
          "@type": "Question",
          "name": "Can laser teeth whitening remove all stains?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Whitening does not guarantee that every type of discoloration will disappear. The result depends on the cause and depth of the staining."
          }
        },
        {
          "@type": "Question",
          "name": "How long does laser teeth whitening take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment time depends on the whitening system used and the patient's individual needs. The dentist can explain the expected treatment duration during the consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Can sensitive teeth be professionally whitened?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "People with sensitive teeth should inform their dentist before treatment. The dentist can assess the cause of sensitivity and determine whether whitening is appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Will teeth whitening change the colour of crowns or veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Whitening primarily affects natural teeth. Existing crowns, veneers and other restorations generally do not whiten in the same way as natural tooth enamel."
          }
        },
        {
          "@type": "Question",
          "name": "How much does laser teeth whitening cost in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on the whitening treatment, dental condition and treatment plan. A consultation is recommended for an accurate current cost."
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
      <LaserTeethPage />
    </>
  );
}
