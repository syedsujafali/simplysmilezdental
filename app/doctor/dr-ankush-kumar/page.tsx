import type { Metadata } from 'next';
import DoctorAnkushPage from '@/src/views/doctors/DoctorAnkushPage';

export const metadata: Metadata = {
  title: "Dr. Ankush Kumar – Orthodontist & Invisalign Provider in Hyderabad | Simply Smilez",
  description: "Consult Dr. Ankush Kumar, leading Orthodontist and Certified Invisalign Provider in Hyderabad with 9+ years experience. Expert in braces, aligners, and smile makeovers at Simply Smilez Dental Clinic.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar",
  },
  openGraph: {
    title: "Dr. Ankush Kumar – Orthodontist & Invisalign Provider in Hyderabad | Simply Smilez",
    description: "Consult Dr. Ankush Kumar, leading Orthodontist and Certified Invisalign Provider in Hyderabad with 9+ years experience. Expert in braces, aligners, and smile makeovers at Simply Smilez Dental Clinic.",
    url: "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/ankush.webp",
        alt: "Dr. Ankush Kumar - Orthodontist & Invisalign Provider in Hyderabad at Simply Smilez Dental Clinic",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Ankush Kumar – Orthodontist & Invisalign Provider in Hyderabad | Simply Smilez",
    description: "Consult Dr. Ankush Kumar, leading Orthodontist and Certified Invisalign Provider in Hyderabad with 9+ years experience at Simply Smilez Dental Clinic.",
    images: ["https://www.simplysmilezdental.in/images/ankush.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar#physician",
      "name": "Dr. Ankush Kumar",
      "jobTitle": "Orthodontist and Certified Invisalign Provider",
      "description": "Dr. Ankush Kumar is an Orthodontist and Certified Invisalign Provider in Hyderabad with 9 years of dedicated clinical experience in orthodontic care, clear aligners, and smile designing.",
      "image": "https://www.simplysmilezdental.in/images/ankush.webp",
      "url": "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar",
      "telephone": [
        "+91-9603338904",
        "+91-7799376656"
      ],
      "medicalSpecialty": [
        "Dentistry",
        "Orthodontics"
      ],
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "SVS Institute of Dental Sciences"
        },
        {
          "@type": "EducationalOrganization",
          "name": "P. M. N. M. Dental College, Bagalkot, Karnataka"
        }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Indian Orthodontic Society (IOS)"
      },
      "worksFor": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      }
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
      "email": "info.invisaligndental@gmail.com",
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
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar#webpage",
      "url": "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar",
      "name": "Dr. Ankush Kumar – Orthodontist & Invisalign Provider in Hyderabad | Simply Smilez",
      "description": "Consult Dr. Ankush Kumar, leading Orthodontist and Certified Invisalign Provider in Hyderabad with 9+ years experience. Expert in braces, aligners, and smile makeovers at Simply Smilez Dental Clinic.",
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar#physician"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar#breadcrumb"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Dr. Ankush Kumar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Ankush Kumar is an Orthodontist and Certified Invisalign Provider in Hyderabad with 9 years of dedicated clinical experience in orthodontic and dental care."
          }
        },
        {
          "@type": "Question",
          "name": "Where does Dr. Ankush Kumar practice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Ankush Kumar practices at Simply Smilez Dental Clinic in Manikonda / Shaikpet, Hyderabad. He also works as a consultant orthodontist across 20 dental clinics throughout the city."
          }
        },
        {
          "@type": "Question",
          "name": "What are Dr. Ankush Kumar's qualifications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Ankush Kumar completed his BDS from P. M. N. M. Dental College, Bagalkot, Karnataka, and earned his Master's degree (MDS in Orthodontics & Dentofacial Orthopedics) from SVS Institute of Dental Sciences."
          }
        },
        {
          "@type": "Question",
          "name": "What is Dr. Ankush Kumar's specialization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Ankush Kumar specializes in orthodontics, clear aligners (Invisalign), digital smile design, corrective jaw alignment, and braces treatment for adolescents and adults."
          }
        },
        {
          "@type": "Question",
          "name": "How many years of experience does Dr. Ankush Kumar have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Ankush Kumar has over 9 years of specialized orthodontic and clinical dentistry experience."
          }
        },
        {
          "@type": "Question",
          "name": "Is Dr. Ankush Kumar a member of a professional organization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dr. Ankush Kumar is an active registered life member of the Indian Orthodontic Society (IOS)."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar#breadcrumb",
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
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Dr. Ankush Kumar",
          "item": "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar"
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
      <DoctorAnkushPage />
    </>
  );
}
