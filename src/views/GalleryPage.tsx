'use client';

import React, { useEffect, useState } from 'react';
import Link from '../components/Link';
import { galleryImages, GalleryItem } from '../data';

const gallerySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#dentist",
      "name": "Simply Smilez Dental Clinic",
      "url": "https://www.simplysmilezdental.in/",
      "description": "Simply Smilez Dental Clinic provides comprehensive dental care in Shaikpet, Hyderabad, including Invisalign, braces, dental implants, root canal treatment, cosmetic dentistry and pediatric dentistry.",
      "medicalSpecialty": "https://schema.org/Dentistry",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Shaikpet",
        "addressRegion": "Telangana",
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
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.simplysmilezdental.in/gallery#webpage",
      "url": "https://www.simplysmilezdental.in/gallery",
      "name": "Inside Simply Smilez Dental Clinic | Shaikpet, Hyderabad",
      "description": "Explore the Simply Smilez Dental Clinic gallery and view the clinic environment and dental care facilities in Shaikpet, Hyderabad.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/gallery#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/gallery#breadcrumb",
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
          "name": "Gallery",
          "item": "https://www.simplysmilezdental.in/gallery"
        }
      ]
    }
  ]
};

export default function GalleryPage() {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Inside Simply Smilez Dental Clinic | Shaikpet, Hyderabad";

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
    canonical.href = "https://www.simplysmilezdental.in/gallery";

    // Metadata
    setMeta("description", "Take a look inside Simply Smilez Dental Clinic in Shaikpet, Hyderabad, and explore our dental clinic environment and patient care facilities.");
    setMeta("keywords", "Simply Smilez Dental Clinic gallery, dental clinic Shaikpet Hyderabad, dentist clinic gallery Hyderabad, dental clinic photos Shaikpet");
    setMeta("author", "Simply Smilez Dental Clinic");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Inside Simply Smilez Dental Clinic | Shaikpet, Hyderabad", true);
    setMeta("og:description", "Take a look inside Simply Smilez Dental Clinic in Shaikpet, Hyderabad, and explore our dental clinic environment and patient care facilities.", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/gallery", true);
    setMeta("og:site_name", "Simply Smilez Dental Clinic", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/gallery-1.webp", true);
    setMeta("og:image:alt", "Simply Smilez Dental Clinic interior and facilities in Shaikpet, Hyderabad", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Inside Simply Smilez Dental Clinic | Shaikpet, Hyderabad");
    setMeta("twitter:description", "Take a look inside Simply Smilez Dental Clinic in Shaikpet, Hyderabad, and explore our dental clinic environment and patient care facilities.");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/gallery-1.webp");

    // Dynamic Schema script injection
    const scriptId = 'gallery-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(gallerySchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper gallerypage">

      <section className="album bg-light py-5 min-vh-100">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-4 text-left" style={{ fontSize: '14px', color: '#64748b' }}>
            <Link to="/" style={{ color: '#0284c7', textDecoration: 'none' }}>
              <i className="fa-solid fa-house mr-1"></i> Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span style={{ color: '#0f172a', fontWeight: 600 }}>Gallery</span>
          </div>

          <div className="col-md-12 text-center heading-section mb-4">
            <h1 className="pb-2 pt-2" style={{ fontSize: '32px', fontWeight: 700, color: '#0b2545' }}>
              Our Clinic Gallery
            </h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Explore our state-of-the-art dental facility, advanced digital dental equipment, and treatment operatories in Shaikpet, Hyderabad.
            </p>
          </div>

          {galleryImages.length > 0 ? (
            <div className="row g-3">
              {galleryImages.map((item: GalleryItem) => (
                <div key={item.id} className="col-6 col-md-4 col-lg-3 mb-4">
                  <div
                    className="card shadow-sm h-100 border-0"
                    style={{
                      cursor: 'pointer',
                      overflow: 'hidden',
                      borderRadius: '12px',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onClick={() => setActiveImg(item.src)}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '240px',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-10 text-center py-5 my-3 bg-white rounded shadow-sm border">
                <div
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(2, 132, 199, 0.1)',
                    color: '#0284c7',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '32px',
                    marginBottom: '18px'
                  }}
                >
                  <i className="fa-solid fa-camera"></i>
                </div>
                <h2 className="h4 font-weight-bold mb-2" style={{ color: '#0b2545' }}>
                  Gallery Photos Being Updated
                </h2>
                <p className="text-muted mx-auto mb-4" style={{ maxWidth: '540px', fontSize: '15px', lineHeight: '1.7' }}>
                  We are currently updating our clinic tour, dental microscope operatory, and patient smile transformation gallery with high-resolution imagery. Please check back soon or visit our clinic in person!
                </p>
                <div className="d-flex justify-content-center flex-wrap gap-2">
                  <Link to="/contact" className="btn btn-primary px-4 py-2 mr-2 mb-2">
                    <i className="fa-solid fa-calendar-check mr-2"></i> Visit Our Clinic
                  </Link>
                  <Link to="/all-services" className="btn btn-outline-secondary px-4 py-2 mb-2">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImg && (
        <div className="lightbox-backdrop" onClick={() => setActiveImg(null)}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setActiveImg(null)}
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <img
            src={activeImg}
            alt="Enlarged view"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
