'use client';

import React, { useEffect } from 'react';
import Link from '../components/Link';
import Testimonial, { GOOGLE_REVIEWS_URL } from '../components/Testimonial';

const testimonialsSchema = {
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

export default function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Patient Reviews & Testimonials | Simply Smilez Dental Hyderabad";

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
    canonical.href = "https://www.simplysmilezdental.in/testimonials";

    // Metadata
    setMeta("description", "Read verified patient reviews and testimonials for Simply Smilez Dental Clinic in Shaikpet, Hyderabad. Discover 5-star experiences with Invisalign, braces, root canals, and implants.");
    setMeta("keywords", "Simply Smilez Dental reviews, dental clinic testimonials Hyderabad, dentist reviews Shaikpet, Simply Smilez testimonials, dentist Hyderabad, best dental clinic reviews Shaikpet");
    setMeta("author", "Simply Smilez Dental Clinic");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Patient Reviews & Testimonials | Simply Smilez Dental Hyderabad", true);
    setMeta("og:description", "Read verified patient reviews and testimonials for Simply Smilez Dental Clinic in Shaikpet, Hyderabad. Discover 5-star experiences with Invisalign, braces, root canals, and implants.", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/testimonials", true);
    setMeta("og:site_name", "Simply Smilez Dental Clinic", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/about.webp", true);
    setMeta("og:image:alt", "Patient reviews and testimonials for Simply Smilez Dental Clinic in Shaikpet, Hyderabad", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Patient Reviews & Testimonials | Simply Smilez Dental Hyderabad");
    setMeta("twitter:description", "Read verified patient reviews and testimonials for Simply Smilez Dental Clinic in Shaikpet, Hyderabad. Discover 5-star experiences with Invisalign, braces, root canals, and implants.");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/about.webp");

    // Dynamic Schema script injection
    const scriptId = 'testimonials-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(testimonialsSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper testimonialspage">

      {/* Hero Header */}
      <section className="doctor-hero-section py-4" style={{ background: '#f0f9ff' }}>
        <div className="container">
          <div className="breadcrumb-custom">
            <Link to="/"><i className="fa-solid fa-house" /> Home</Link>
            <span>&gt;</span>
            <span style={{ color: '#0f172a', fontWeight: 600 }}>Patient Reviews &amp; Testimonials</span>
          </div>
        </div>
      </section>

      {/* Embedded Google Reviews Component */}
      <Testimonial />
    </div>
  );
}
