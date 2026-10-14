import type { Metadata } from 'next';
import DoctorSusheelPage from '@/src/views/doctors/DoctorSusheelPage';

export const metadata: Metadata = {
  title: "Dr. Susheel Kumar – Pediatric Dentist & Implantologist in Hyderabad | Simply Smilez",
  description: "Consult Dr. Susheel Kumar, leading Pediatric Dentist & Implantologist in Hyderabad with 9+ years experience. Expert in child dental care and dental implants at Simply Smilez Dental Clinic.",
  alternates: {
    canonical: "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar",
  },
  openGraph: {
    title: "Dr. Susheel Kumar – Pediatric Dentist & Implantologist in Hyderabad | Simply Smilez",
    description: "Consult Dr. Susheel Kumar, leading Pediatric Dentist & Implantologist in Hyderabad with 9+ years experience. Expert in child dental care and dental implants at Simply Smilez Dental Clinic.",
    url: "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar",
    images: [
      {
        url: "https://www.simplysmilezdental.in/images/susheel2.webp",
        alt: "Dr. Susheel Kumar - Pediatric Dentist and Implantologist in Hyderabad at Simply Smilez Dental Clinic",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dr. Susheel Kumar – Pediatric Dentist & Implantologist in Hyderabad | Simply Smilez",
    description: "Consult Dr. Susheel Kumar, leading Pediatric Dentist & Implantologist in Hyderabad with 9+ years experience at Simply Smilez Dental Clinic.",
    images: ["https://www.simplysmilezdental.in/images/susheel2.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar#physician",
      "name": "Dr. Susheel Kumar",
      "jobTitle": "Pediatric Dentist and Dental Implantologist",
      "description": "Dr. Susheel Kumar is a Pediatric Dentist and Implantologist in Hyderabad with 9 years of dedicated clinical experience in advanced pediatric dental care, preventive dentistry, and dental implantology.",
      "image": "https://www.simplysmilezdental.in/images/susheel2.webp",
      "url": "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar",
      "telephone": [
        "+91-9603338904",
        "+91-7799376656"
      ],
      "medicalSpecialty": [
        "Dentistry",
        "PediatricDentistry"
      ],
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Panineeya Dental College, Hyderabad"
        },
        {
          "@type": "EducationalOrganization",
          "name": "P. M. N. M. Dental College, Bagalkot, Karnataka"
        }
      ],
      "memberOf": {
        "@type": "Organization",
        "name": "Indian Society of Pedodontics & Preventive Dentistry (ISPPD)"
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
      "@id": "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar#webpage",
      "url": "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar",
      "name": "Dr. Susheel Kumar – Pediatric Dentist & Implantologist in Hyderabad | Simply Smilez",
      "description": "Consult Dr. Susheel Kumar, leading Pediatric Dentist & Implantologist in Hyderabad with 9+ years experience. Expert in child dental care and dental implants at Simply Smilez Dental Clinic.",
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar#physician"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar#breadcrumb"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is Dr. Susheel Kumar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Susheel Kumar is a Pediatric Dentist and Implantologist in Hyderabad with 9 years of clinical experience in advanced pediatric oral care and dental implantology."
          }
        },
        {
          "@type": "Question",
          "name": "Where does Dr. Susheel Kumar practice?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Susheel Kumar practices at Simply Smilez Dental Clinic in Manikonda / Shaikpet, Hyderabad. He also works as a consultant across 30 premier dental clinics throughout Hyderabad."
          }
        },
        {
          "@type": "Question",
          "name": "What are Dr. Susheel Kumar's qualifications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Susheel Kumar completed his BDS from P. M. N. M. Dental College, Bagalkot, Karnataka, and earned his MDS in Pediatric & Preventive Dentistry from Panineeya Dental College, Hyderabad."
          }
        },
        {
          "@type": "Question",
          "name": "What is Dr. Susheel Kumar's specialization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Susheel Kumar specializes in pediatric dentistry, painless preventive dental care for children, early orthodontics, cavity management, and advanced dental implant placements."
          }
        },
        {
          "@type": "Question",
          "name": "How many years of experience does Dr. Susheel Kumar have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dr. Susheel Kumar has over 9 years of specialized clinical experience in dentistry, pediatric dental surgery, and implantology."
          }
        },
        {
          "@type": "Question",
          "name": "Is Dr. Susheel Kumar a member of a professional dental organization?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Dr. Susheel Kumar is an active life member of the Indian Society of Pedodontics & Preventive Dentistry (ISPPD)."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar#breadcrumb",
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
          "name": "Dr. Susheel Kumar",
          "item": "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar"
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
      <DoctorSusheelPage />
    </>
  );
}
