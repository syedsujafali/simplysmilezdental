'use client';

import React, { useEffect } from 'react';
import Link from '../components/Link';
import Faqs from '../components/Faqs';

const aboutSchema = {
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
        { "@type": "Place", "name": "Shaikpet" },
        { "@type": "Place", "name": "Manikonda" },
        { "@type": "Place", "name": "Tolichowki" },
        { "@type": "Place", "name": "Jubilee Hills" },
        { "@type": "Place", "name": "Banjara Hills" },
        { "@type": "Place", "name": "Gachibowli" },
        { "@type": "Place", "name": "Narsingi" },
        { "@type": "Place", "name": "Mehdipatnam" }
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

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Invisalign & Root Canal Dentist in Hyderabad | Simply Smilez";

    // Meta Helper function
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(attr);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Canonical link helper
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.simplysmilezdental.in/about";

    // Metadata
    setMeta('description', "Simply Smilez Dental Clinic offers Invisalign, Invisalign First for Kids, root canal treatment, and family dental care in Shaikpet, Hyderabad.");
    setMeta('keywords', "Invisalign dentist Hyderabad, root canal dentist Hyderabad, Invisalign First for Kids, dentist in Shaikpet, dental clinic Shaikpet, Simply Smilez Dental");
    setMeta('author', "Simply Smilez Dental Clinic");
    setMeta('robots', "index,follow");
    setMeta('theme-color', "#ffffff");
    setMeta('referrer', "strict-origin-when-cross-origin");

    // Open Graph
    setMeta('og:type', "website", true);
    setMeta('og:title', "Invisalign & Root Canal Dentist in Hyderabad | Simply Smilez", true);
    setMeta('og:description', "Simply Smilez Dental Clinic offers Invisalign, Invisalign First for Kids, root canal treatment, and family dental care in Shaikpet, Hyderabad.", true);
    setMeta('og:url', "https://www.simplysmilezdental.in/about", true);
    setMeta('og:site_name', "Simply Smilez Dental Clinic", true);
    setMeta('og:image', "https://www.simplysmilezdental.in/images/about.webp", true);
    setMeta('og:image:alt', "Simply Smilez Dental Clinic in Shaikpet, Hyderabad", true);

    // Twitter Card
    setMeta('twitter:card', "summary_large_image");
    setMeta('twitter:title', "Invisalign & Root Canal Dentist in Hyderabad | Simply Smilez");
    setMeta('twitter:description', "Simply Smilez Dental Clinic offers Invisalign, Invisalign First for Kids, root canal treatment, and family dental care in Shaikpet, Hyderabad.");
    setMeta('twitter:image', "https://www.simplysmilezdental.in/images/about.webp");

    // Structured Schema Script
    let schemaScript = document.getElementById('about-page-schema') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'about-page-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.text = JSON.stringify(aboutSchema);

    return () => {
      // Cleanup schema on navigation
      const currentSchema = document.getElementById('about-page-schema');
      if (currentSchema) {
        currentSchema.remove();
      }
    };
  }, []);


  return (
    <div className="page-wrapper aboutpage">
      <section className="ftco-section">
    <div className="container">
      
      <div className="row justify-content-center mb-5 pt-3">
        <div className="col-md-10 text-center heading-section">
          <h1 className="mb-3 font-weight-bold" style={{ color: "#00b7ff", fontSize: "38px" }}>
            About Simply Smilez Dental Clinic
          </h1>
          <p
            className="mb-4 text-uppercase font-weight-bold"
            style={{ color: "#374151", fontSize: "14px", letterSpacing: "2.5px" }}
          >
            TRUSTED DENTAL CARE IN SHAIKPET, HYDERABAD SINCE 2018
          </p>
          <p className="lead mx-auto" style={{ fontSize: "17px", color: "#4b5563", lineHeight: 1.8, maxWidth: "860px" }}>
            Established in 2018, Simply Smilez Dental Clinic is a patient-focused dental clinic in Shaikpet, Hyderabad, offering comprehensive dental care for children, teens, and adults.
          </p>
        </div>
      </div>

      
      <div className="row mb-5">
        <div className="col-md-12">
          <p>With two specialty doctors, we provide personalized treatment with clear communication and a comfortable
            approach. Our services include Invisalign, Invisalign First for Kids, braces, dental implants, root canal
            treatment, crowns, veneers, teeth whitening, pediatric dentistry, wisdom tooth extraction, laser gum
            treatment, and preventive dental care.</p>
          <p>We welcome patients from O.U. Colony, Dwaraka Nagar Colony, Manikonda, Tolichowki, Raidurg, Puppalaguda,
            Film Nagar, Jubilee Hills, Banjara Hills, Mehdipatnam, Langar Houz, Gachibowli, Narsingi, and nearby areas.
          </p>
        </div>
      </div>

      
      {/* 2 Feature Cards with 3D Depth */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="p-4 rounded-4 h-100 about-3d-card d-flex flex-column">
            <h3 className="h4 font-weight-bold mb-3" style={{ color: "#00b7ff" }}>Dental Care Designed Around You</h3>
            <p className="mb-0 text-muted" style={{ lineHeight: 1.7 }}>
              Every smile is different. We take time to understand your concerns, explain suitable treatment options,
              and provide care based on your individual dental needs. Whether you need routine care, teeth
              straightening, treatment for a damaged or missing tooth, or cosmetic dental treatment, our goal is to help
              you maintain healthy teeth and a confident smile.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 rounded-4 h-100 about-3d-card d-flex flex-column">
            <h3 className="h4 font-weight-bold mb-3" style={{ color: "#00b7ff" }}>Our Commitment</h3>
            <p className="text-muted mb-3" style={{ lineHeight: 1.7 }}>
              From children&apos;s dentistry and orthodontics to restorative and cosmetic treatments, we aim to make quality
              dental care simple, comfortable, and accessible.
            </p>
            <p className="font-weight-bold text-dark mt-auto mb-0" style={{ lineHeight: 1.6 }}>
              Simply Smilez Dental Clinic &mdash; personalized dental care for healthier, confident smiles in Shaikpet, Hyderabad.
            </p>
          </div>
        </div>
      </div>

      {/* Specialist Doctor Cards with 3D Depth */}
      <div className="row mb-5">
        <div className="col-md-12 text-center mb-4">
          <h2 className="font-weight-bold" style={{ color: "#00b7ff" }}>Our Specialist Doctors</h2>
        </div>
        <div className="col-md-6 mb-4">
          <div className="about-3d-card h-100 rounded-4 p-4 d-flex flex-column">
            <h3 className="mb-2">
              <Link to="/doctor/dr-susheel-kumar" style={{ color: "#0b2545", textDecoration: "none", fontWeight: 700 }}>
                Dr. Susheel Kumar
              </Link>
            </h3>
            <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
              Dr. Susheel Kumar is a Pediatric dentist and Implantologist in Hyderabad and has experience of 9 years in
              these fields. Dr. Susheel practices at Simply Smilez Dental Clinic in Manikonda, Hyderabad and works as a
              consultant in 30 clinics around the city. He completed his BDS From P. M. N. M.Dental
              college,Bagalkot,Karnataka and MDS from Panineeya Dental College, Hyderabad. He is a member of Indian
              Society Of Pedodontics &amp; Preventive Dentistry.
            </p>
            <div className="mt-auto">
              <Link
                to="/doctor/dr-susheel-kumar"
                className="btn-about-doctor"
              >
                Read More About Dr. Susheel Kumar &rarr;
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="about-3d-card h-100 rounded-4 p-4 d-flex flex-column">
            <h3 className="mb-2">
              <Link to="/doctor/dr-ankush-kumar" style={{ color: "#0b2545", textDecoration: "none", fontWeight: 700 }}>
                Dr. Ankush Kumar
              </Link>
            </h3>
            <p className="text-muted mb-4" style={{ lineHeight: 1.7 }}>
              Dr. Ankush Kumar is Orthodontist and Invisalign provider with an experience of 9 years. Dr. Ankush Kumar
              practices at Simply Smilez Dental Clinic in Manikonda, Hyderabad and works as a consultant in 20 clinics
              around the city. He completed his BDS From P. M. N. M.Dental college,Bagalkot, Karnataka and MDS From SVS
              Institute of Dental Sciences. He is a member of Indian Orthodontic Society.
            </p>
            <div className="mt-auto">
              <Link
                to="/doctor/dr-ankush-kumar"
                className="btn-about-doctor"
              >
                Read More About Dr. Ankush Kumar &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Frequently Asked Questions */}
  <Faqs />
</div>
);
}
