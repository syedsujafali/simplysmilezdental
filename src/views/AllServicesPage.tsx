'use client';

import React, { useEffect } from 'react';
import Link from '../components/Link';

interface ServiceCardItem {
  title: string;
  category: string;
  image: string;
  alt: string;
  link: string;
  description: string;
}

const allServicesList: ServiceCardItem[] = [
  {
    title: "Braces & Clear Aligners (Invisalign)",
    category: "Orthodontics & Aligners",
    image: "/images/braces.webp",
    alt: "Braces & Clear Aligners (Invisalign)",
    link: "/services/braces",
    description: "Advanced orthodontic solutions including traditional metal/ceramic braces and Invisalign clear aligners for teenagers and adults."
  },
  {
    title: "Pediatric Dentistry",
    category: "Pediatric Dentistry",
    image: "/images/pedia2.webp",
    alt: "Pediatric Dentistry",
    link: "/services/pediatric-dentistry",
    description: "Child-friendly dental care including preventive checkups, fluorides, sealants, cavity fillings, and early orthodontic evaluations for kids."
  },
  {
    title: "Dental Implants",
    category: "Implantology",
    image: "/images/dentalimp.webp",
    alt: "Dental Implants in Hyderabad",
    link: "/services/dental-implants",
    description: "Fixed, natural-looking tooth replacement option to restore missing teeth, improve chewing function, facial structure, and smiling confidence."
  },
  {
    title: "Microscopic Root Canal Treatment",
    category: "Endodontics",
    image: "/images/microscopic-rct.jpg",
    alt: "Microscopic Root Canal Treatment",
    link: "/services/microscopic-root-canal",
    description: "High-magnification surgical operating microscope endodontics designed to eliminate canal infection, retrieve broken instruments, relieve pain, and save your natural tooth."
  },
  {
    title: "Dental Crowns",
    category: "Prosthodontics",
    image: "/images/crowns.webp",
    alt: "Dental Crowns",
    link: "/services/crowns",
    description: "Durable ceramic and zirconia crowns to protect weak teeth after root canal treatment or severe tooth damage, restoring strength and aesthetics."
  },
  {
    title: "Dental Veneers",
    category: "Cosmetic Dentistry",
    image: "/images/veneers.webp",
    alt: "Dental Veneers",
    link: "/services/veneers",
    description: "Ultra-thin porcelain or composite veneers designed to correct discoloured, chipped, gapped, or slightly misaligned teeth for a red-carpet smile."
  },
  {
    title: "Composite Fillings",
    category: "Restorative Dentistry",
    image: "/images/composite.webp",
    alt: "Composite Fillings",
    link: "/services/composite-fillings",
    description: "Tooth-coloured composite resin restorations to treat decay, repair minor chips, and restore natural tooth structure seamlessly."
  },
  {
    title: "Laser Teeth Whitening",
    category: "Laser & Whitening",
    image: "/images/laserteeth.webp",
    alt: "Laser Teeth Whitening",
    link: "/services/laser-teeth-whitening",
    description: "Fast, safe laser-assisted bleaching treatments to remove stubborn stains and brighten your smile by several shades in a single in-clinic session."
  },
  {
    title: "Laser Gum Surgery & Care",
    category: "Periodontics",
    image: "/images/lasergum.webp",
    alt: "Laser Gum Treatment",
    link: "/services/laser-gum-surgery",
    description: "Minimally invasive laser gum therapy to treat periodontitis, bleeding gums, gum recession, and aesthetic gum depigmentation."
  },
  {
    title: "Wisdom Tooth Extractions",
    category: "Oral Surgery",
    image: "/images/wisdom.webp",
    alt: "Wisdom Tooth Extraction",
    link: "/services/wisdom-tooth-extraction",
    description: "Gentle, expert surgical removal of impacted, painful, or overcrowded third molars to prevent infection and structural jaw pain."
  }
];

const allServicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#dentist",
      "name": "Simply Smilez Dental Clinic",
      "url": "https://www.simplysmilezdental.in/",
      "telephone": "+91-7799376656",
      "email": "info@simplysmilezdental.in",
      "image": "https://www.simplysmilezdental.in/images/logo.png",
      "description": "Simply Smilez Dental Clinic provides comprehensive dental care in Hyderabad, including Invisalign and clear aligners, pediatric dentistry, braces, root canal treatment, cosmetic dentistry, teeth whitening, gum care and oral surgery.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet",
        "addressLocality": "Hyderabad",
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
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "sameAs": [
        "https://www.simplysmilezdental.in/"
      ]
    },
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/all-services#webpage",
      "url": "https://www.simplysmilezdental.in/all-services",
      "name": "Dental Services in Hyderabad | Simply Smilez Dental",
      "headline": "Comprehensive Dental Services in Hyderabad",
      "description": "Explore comprehensive dental services in Hyderabad at Simply Smilez Dental, including Invisalign, pediatric dentistry, braces, root canals, whitening and more.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/all-services#breadcrumb"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.simplysmilezdental.in/#website",
      "url": "https://www.simplysmilezdental.in/",
      "name": "Simply Smilez Dental",
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/all-services#breadcrumb",
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
          "name": "All Services",
          "item": "https://www.simplysmilezdental.in/all-services"
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.simplysmilezdental.in/all-services#services",
      "name": "Dental Services at Simply Smilez Dental",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "General Dentistry"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Invisalign & Clear Aligners"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Pediatric Dentistry"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Braces & Orthodontics"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Root Canal & Endodontics"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Restorative & Cosmetic Dentistry"
        },
        {
          "@type": "ListItem",
          "position": 7,
          "name": "Hygiene & Gum Care"
        },
        {
          "@type": "ListItem",
          "position": 8,
          "name": "Oral Surgery"
        },
        {
          "@type": "ListItem",
          "position": 9,
          "name": "Teeth Whitening"
        },
        {
          "@type": "ListItem",
          "position": 10,
          "name": "Advanced Dentistry"
        }
      ]
    }
  ]
};

export default function AllServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Dental Services in Hyderabad | Simply Smilez Dental";

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
    canonical.href = "https://www.simplysmilezdental.in/all-services";

    // Metadata
    setMeta('description', "Explore comprehensive dental services in Hyderabad at Simply Smilez Dental, including Invisalign, pediatric dentistry, braces, root canals, whitening and more.");
    setMeta('keywords', "dental services Hyderabad, dentist Hyderabad, Invisalign Hyderabad, clear aligners, pediatric dentistry, braces, root canal treatment, teeth whitening, cosmetic dentistry");
    setMeta('author', "Simply Smilez Dental");
    setMeta('robots', "index,follow");
    setMeta('theme-color', "#ffffff");
    setMeta('referrer', "strict-origin-when-cross-origin");

    // Open Graph
    setMeta('og:type', "website", true);
    setMeta('og:title', "Dental Services in Hyderabad | Simply Smilez Dental", true);
    setMeta('og:description', "Explore comprehensive dental services in Hyderabad at Simply Smilez Dental, including Invisalign, pediatric dentistry, braces, root canals, whitening and more.", true);
    setMeta('og:url', "https://www.simplysmilezdental.in/all-services", true);
    setMeta('og:site_name', "Simply Smilez Dental", true);
    setMeta('og:image', "https://www.simplysmilezdental.in/images/dental-services.jpg", true);
    setMeta('og:image:alt', "Dental services at Simply Smilez Dental", true);

    // Twitter Card
    setMeta('twitter:card', "summary_large_image");
    setMeta('twitter:title', "Dental Services in Hyderabad | Simply Smilez Dental");
    setMeta('twitter:description', "Explore comprehensive dental services in Hyderabad at Simply Smilez Dental, including Invisalign, pediatric dentistry, braces, root canals, whitening and more.");
    setMeta('twitter:image', "https://www.simplysmilezdental.in/images/dental-services.jpg");

    // Structured Schema Script
    let schemaScript = document.getElementById('all-services-schema') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'all-services-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.text = JSON.stringify(allServicesSchema);

    return () => {
      // Cleanup schema on navigation
      const currentSchema = document.getElementById('all-services-schema');
      if (currentSchema) {
        currentSchema.remove();
      }
    };
  }, []);


  return (
    <div className="page-wrapper allservicespage">
      <><section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('images/bg_1.webp')" }} data-stellar-background-ratio="0.5">
    <div className="overlay" style={{ background: "rgba(13, 59, 102, 0.75)" }} />
    <div className="container">
      <div className="row no-gutters slider-text align-items-center justify-content-center">
        <div className="col-md-9 text-center">
          <p className="breadcrumbs mb-2"><span className="mr-2"><Link to="/" className="text-white">Home <i className="ion-ios-arrow-forward" /></Link></span> <span className="text-white-50">Services <i className="ion-ios-arrow-forward" /></span></p>
          <h1 className="mb-0 bread text-white font-weight-bold">Dental Services in Hyderabad</h1>
          <p className="text-white-50 mt-2" style={{ fontSize: 16 }}>Comprehensive, modern &amp; painless dental care for
            your whole family under one roof.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="ftco-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-8 text-center heading-section">
          <span className="subheading" style={{ color: "#00b7ff", fontWeight: "600" }}>Complete Dental Care</span>
          <h2 className="mb-3" style={{ color: "#0d3b66", fontWeight: "700" }}>Explore Our Dental Services</h2>
          <p className="text-muted">At Simply Smilez Dental Clinic in Shaikpet, Hyderabad, we combine advanced dental
            technology with compassionate care to protect, restore, and enhance your smile.</p>
        </div>
      </div>

      <div className="row">
        {allServicesList.map((svc, idx) => (
          <div key={idx} className="col-md-6 col-lg-4 mb-4 d-flex">
            <div className="service-card-box h-100 p-3 d-flex flex-column justify-content-between w-100">
              <div>
                <div className="service-img-wrap mb-3">
                  <Link to={svc.link}>
                    <img src={svc.image} alt={svc.alt} />
                  </Link>
                </div>
                <span className="service-badge">
                  <i className="fa-solid fa-sparkles" style={{ fontSize: '9px' }}></i> {svc.category}
                </span>
                <h3 className="service-card-title">
                  <Link to={svc.link} className="text-decoration-none">
                    {svc.title}
                  </Link>
                </h3>
                <p className="service-card-desc">{svc.description}</p>
              </div>
              <div className="mt-3 pt-3 border-top">
                <Link to={svc.link} className="service-card-btn">
                  <span>View Full Details</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  
  <section className="ftco-section bg-light py-5">
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-md-8 text-center heading-section">
          <span className="subheading" style={{ color: "#00b7ff", fontWeight: "600" }}>Full Treatment Index</span>
          <h2 className="mb-3" style={{ color: "#0d3b66", fontWeight: "700" }}>Specialized Treatments &amp; Services Directory</h2>
          <p className="text-muted">A comprehensive overview of all dental procedures, specialized consultations, and treatments available at Simply Smilez Dental Clinic.</p>
        </div>
      </div>

      <div className="row">
        
        <div className="col-lg-6 mb-4 d-flex">
          <div className="directory-3d-card p-4 w-100 h-100">
            <h3 className="h5 font-weight-bold pb-2 border-bottom" style={{ color: "#0d3b66" }}>
              <i className="fa-solid fa-stethoscope mr-2" style={{ color: "#00b7ff" }} /> General Dentistry
            </h3>
            <ul className="list-unstyled row mt-3 mb-0" style={{ fontSize: 14, lineHeight: "1.8" }}>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Consultation</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Comprehensive Dental Exam</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Digital Dental X-Ray</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Preventive Dentistry</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Tooth-Colored Fillings</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Composite Dental Fillings</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Bonding</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Toothache Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Sensitive Teeth Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Emergency Dental Care</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Preventive Dental Care</li>
            </ul>
          </div>
        </div>

        
        <div className="col-lg-6 mb-4 d-flex">
          <div className="directory-3d-card p-4 w-100 h-100">
            <h3 className="h5 font-weight-bold pb-2 border-bottom" style={{ color: "#0d3b66" }}>
              <i className="fa-solid fa-teeth-open mr-2" style={{ color: "#00b7ff" }} /> Invisalign &amp; Clear Aligners
            </h3>
            <ul className="list-unstyled row mt-3 mb-0" style={{ fontSize: 14, lineHeight: "1.8" }}>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Invisalign Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Invisalign Consultation</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Invisalign First</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Invisalign Teen</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Invisalign for Children</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Clear Aligners</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Adult Clear Aligners</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Teen Clear Aligners</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Pediatric Clear Aligners</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Invisalign Orthodontics</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Digital Orthodontic Exam</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Digital Smile Assessment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Invisalign Treatment Plan</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Invisalign Retainers</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Vivera Retainers</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Invisalign Refinement</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Invisalign Go</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Invisalign Go Plus</li>
            </ul>
          </div>
        </div>

        
        <div className="col-lg-6 mb-4 d-flex">
          <div className="directory-3d-card p-4 w-100 h-100">
            <h3 className="h5 font-weight-bold pb-2 border-bottom" style={{ color: "#0d3b66" }}>
              <i className="fa-solid fa-child mr-2" style={{ color: "#00b7ff" }} /> Pediatric Dentistry
            </h3>
            <ul className="list-unstyled row mt-3 mb-0" style={{ fontSize: 14, lineHeight: "1.8" }}>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Pediatric Dentistry</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Pediatric Dental Care</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Children&rsquo;s Dentistry</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Kids Dental Checkup</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Pediatric Consultation</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Preventive Pediatric Care</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Kids Fluoride Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Sealants for Kids</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Children&rsquo;s Dental Fillings</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Pediatric Root Canal</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Stainless Steel Crowns</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Pediatric Zirconia Crowns</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Space Maintainers</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Early Ortho Evaluation</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Interceptive Orthodontics</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Phase 1 Orthodontics</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Growing Child Ortho Care</li>
            </ul>
          </div>
        </div>

        
        <div className="col-lg-6 mb-4 d-flex">
          <div className="directory-3d-card p-4 w-100 h-100">
            <h3 className="h5 font-weight-bold pb-2 border-bottom" style={{ color: "#0d3b66" }}>
              <i className="fa-solid fa-teeth mr-2" style={{ color: "#00b7ff" }} /> Braces &amp; Orthodontics
            </h3>
            <ul className="list-unstyled row mt-3 mb-0" style={{ fontSize: 14, lineHeight: "1.8" }}>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Orthodontic Consultation</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Metal Braces</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Ceramic Braces</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Traditional Braces</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Orthodontic Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Early Ortho Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Interceptive Orthodontics</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Child Orthodontics</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Teen Orthodontics</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Adult Orthodontics</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Class II Malocclusion Care</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Teeth Alignment Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Crowding Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Spacing Correction</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Orthodontic Retainers</li>
            </ul>
          </div>
        </div>

        
        <div className="col-lg-6 mb-4 d-flex">
          <div className="directory-3d-card p-4 w-100 h-100">
            <h3 className="h5 font-weight-bold pb-2 border-bottom" style={{ color: "#0d3b66" }}>
              <i className="fa-solid fa-tooth mr-2" style={{ color: "#00b7ff" }} /> Root Canal &amp; Endodontics
            </h3>
            <ul className="list-unstyled row mt-3 mb-0" style={{ fontSize: 14, lineHeight: "1.8" }}>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Root Canal Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Single Visit Root Canal</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Microscopic Root Canal</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Re-Root Canal Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Root Canal Retreatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Broken File Retrieval</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Separated Instrument Retrieval</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Trauma Care</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Abscess Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Pulpotomy Procedure</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Pulpectomy Procedure</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Pediatric Root Canal</li>
            </ul>
          </div>
        </div>

        
        <div className="col-lg-6 mb-4 d-flex">
          <div className="directory-3d-card p-4 w-100 h-100">
            <h3 className="h5 font-weight-bold pb-2 border-bottom" style={{ color: "#0d3b66" }}>
              <i className="fa-solid fa-wand-magic-sparkles mr-2" style={{ color: "#00b7ff" }} /> Restorative &amp; Cosmetic Dentistry
            </h3>
            <ul className="list-unstyled row mt-3 mb-0" style={{ fontSize: 14, lineHeight: "1.8" }}>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Cosmetic Dentistry</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Smile Makeover</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Crowns</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Zirconia Crowns</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Ceramic Crowns</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Bridges</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Tooth-Colored Crowns</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Veneers</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Composite Veneers</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Tooth Reshaping</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Restoration</li>
            </ul>
          </div>
        </div>

        
        <div className="col-lg-6 mb-4 d-flex">
          <div className="directory-3d-card p-4 w-100 h-100">
            <h3 className="h5 font-weight-bold pb-2 border-bottom" style={{ color: "#0d3b66" }}>
              <i className="fa-solid fa-pump-medical mr-2" style={{ color: "#00b7ff" }} /> Hygiene &amp; Gum Care
            </h3>
            <ul className="list-unstyled row mt-3 mb-0" style={{ fontSize: 14, lineHeight: "1.8" }}>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Teeth Cleaning</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Scaling</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Scaling &amp; Polishing</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Professional Teeth Cleaning</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Gum Disease Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Gum Infection Care</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Periodontal Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Preventive Gum Care</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Bad Breath Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Plaque Removal</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Tartar Removal</li>
            </ul>
          </div>
        </div>

        
        <div className="col-lg-6 mb-4 d-flex">
          <div className="directory-3d-card p-4 w-100 h-100">
            <h3 className="h5 font-weight-bold pb-2 border-bottom" style={{ color: "#0d3b66" }}>
              <i className="fa-solid fa-notes-medical mr-2" style={{ color: "#00b7ff" }} /> Oral Surgery
            </h3>
            <ul className="list-unstyled row mt-3 mb-0" style={{ fontSize: 14, lineHeight: "1.8" }}>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Extractions</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Wisdom Tooth Extraction</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Surgical Extractions</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Atraumatic Extractions</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Impacted Tooth Treatment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Laser Gum Surgery</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Minor Oral Surgery</li>
            </ul>
          </div>
        </div>

        
        <div className="col-lg-6 mb-4 d-flex">
          <div className="directory-3d-card p-4 w-100 h-100">
            <h3 className="h5 font-weight-bold pb-2 border-bottom" style={{ color: "#0d3b66" }}>
              <i className="fa-solid fa-sparkles mr-2" style={{ color: "#00b7ff" }} /> Teeth Whitening
            </h3>
            <ul className="list-unstyled row mt-3 mb-0" style={{ fontSize: 14, lineHeight: "1.8" }}>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Professional Teeth Whitening</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Laser Teeth Bleaching</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Dental Bleaching</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> In-Office Whitening</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Cosmetic Teeth Whitening</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Smile Brightening</li>
            </ul>
          </div>
        </div>

        
        <div className="col-lg-6 mb-4 d-flex">
          <div className="directory-3d-card p-4 w-100 h-100">
            <h3 className="h5 font-weight-bold pb-2 border-bottom" style={{ color: "#0d3b66" }}>
              <i className="fa-solid fa-microscope mr-2" style={{ color: "#00b7ff" }} /> Advanced Dentistry
            </h3>
            <ul className="list-unstyled row mt-3 mb-0" style={{ fontSize: 14, lineHeight: "1.8" }}>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Microscopic Root Canal</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Broken Instrument Retrieval</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Separated Instrument Retrieval</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Digital Dentistry</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Digital Smile Assessment</li>
              <li className="col-md-6 mb-2"><i className="fa-solid fa-angle-right mr-2" style={{ color: "#00b7ff" }} /> Digital Orthodontic Planning</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>

  
  <section className="py-5" style={{ background: "linear-gradient(135deg, #0b2545 0%, #134074 100%)", color: "white" }}>
    <div className="container">
      <div className="row align-items-center text-center text-md-left">
        <div className="col-md-8 mb-4 mb-md-0">
          <h2 style={{ fontSize: 28, fontWeight: "700", color: "#ffffff" }} className="mb-2">Schedule Your Dental Consultation
            Today</h2>
          <p style={{ fontSize: 16, color: "#e2e8f0", marginBottom: 15 }}>Experience personalized dental care from
            expert specialists in Shaikpet, Hyderabad.</p>
          <div style={{ fontSize: 14, color: "#cbd5e1", lineHeight: "1.6" }}>
            <p className="mb-1"><i className="fa-solid fa-phone mr-2 text-info" /> <strong>Call us:</strong> <a href="tel:+917799376656" className="text-white">+91 77993 76656</a> / <a href="tel:+919603338904" className="text-white">+91 96033 38904</a></p>
            <p className="mb-0"><i className="fa-solid fa-location-dot mr-2 text-info" /> <strong>Visit us:</strong> P.V.
              Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad &ndash; 500008.</p>
          </div>
        </div>
        <div className="col-md-4 text-center text-md-right">
          <a href="https://wa.me/917799376656" target="_blank" className="btn btn-primary btn-lg px-4 py-3 font-weight-bold shadow-lg" style={{ borderRadius: 30, backgroundColor: "#0284c7", borderColor: "#0284c7" }}>
            <i className="fa-brands fa-whatsapp mr-2" /> Book via WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section></>
    </div>
  );
}
