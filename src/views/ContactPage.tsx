'use client';

import React, { useEffect, useState } from 'react';
import Link from '../components/Link';

const HYDERABAD_AREAS = [
  "Shaikpet",
  "Manikonda",
  "Kondapur",
  "Jubilee Hills",
  "Gachibowli",
  "Tolichowki",
  "Raidurg",
  "Puppalguda",
  "Film Nagar",
  "Banjara Hills",
  "Mehdipatnam",
  "Narsingi"
];

const TREATMENTS_LIST = [
  "Braces & Clear Aligners (Invisalign)",
  "Pediatric Dentistry",
  "Dental Implants",
  "Microscopic Root Canal Treatment",
  "Dental Crowns",
  "Dental Veneers",
  "Composite Fillings",
  "Laser Teeth Whitening",
  "Laser Gum Surgery & Care",
  "Wisdom Tooth Extractions",
  "General Dental Consultation"
];

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#clinic",
      "name": "Simply Smilez Dental Clinic",
      "url": "https://www.simplysmilezdental.in/",
      "description": "Simply Smilez Dental Clinic provides family and comprehensive dental care in Shaikpet, Hyderabad, including Invisalign, braces, dental implants, root canal treatment, crowns, veneers, pediatric dentistry and gum treatment.",
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
      "priceRange": "$$",
      "medicalSpecialty": "https://schema.org/Dentistry",
      "foundingDate": "2018",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road",
        "addressLocality": "Shaikpet",
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
        "Narsingi",
        "Kondapur"
      ]
    },
    {
      "@type": "ContactPage",
      "@id": "https://www.simplysmilezdental.in/contact#webpage",
      "url": "https://www.simplysmilezdental.in/contact",
      "name": "Contact Simply Smilez Dental Clinic | Shaikpet, Hyderabad",
      "description": "Contact Simply Smilez Dental Clinic in Shaikpet, Hyderabad, for comprehensive family dental care and appointments.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/contact#breadcrumb"
      }
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
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/contact#breadcrumb",
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
          "name": "Contact Us",
          "item": "https://www.simplysmilezdental.in/contact"
        }
      ]
    }
  ]
};

export default function ContactPage() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [treatment, setTreatment] = useState(TREATMENTS_LIST[0]);
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Contact Dentist in Shaikpet, Hyderabad | Simply Smilez Dental";

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
    canonical.href = "https://www.simplysmilezdental.in/contact";

    // Metadata
    setMeta("description", "Contact Simply Smilez Dental Clinic in Shaikpet, Hyderabad, for Invisalign, braces, implants, root canal and comprehensive dental care.");
    setMeta("keywords", "contact dentist Shaikpet, dental clinic Shaikpet Hyderabad, dentist Hyderabad, Simply Smilez Dental Clinic contact, dental appointment Hyderabad");
    setMeta("author", "Simply Smilez Dental Clinic");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Contact Dentist in Shaikpet, Hyderabad | Simply Smilez Dental", true);
    setMeta("og:description", "Contact Simply Smilez Dental Clinic in Shaikpet, Hyderabad, for Invisalign, braces, implants, root canal and comprehensive dental care.", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/contact", true);
    setMeta("og:site_name", "Simply Smilez Dental Clinic", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/gmb.webp", true);
    setMeta("og:image:alt", "Contact Simply Smilez Dental Clinic in Shaikpet, Hyderabad", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Contact Dentist in Shaikpet, Hyderabad | Simply Smilez Dental");
    setMeta("twitter:description", "Contact Simply Smilez Dental Clinic in Shaikpet, Hyderabad, for Invisalign, braces, implants, root canal and comprehensive dental care.");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/gmb.webp");

    // Dynamic Schema script injection
    const scriptId = 'contact-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(contactSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedText = `*New Online Consultation Request*%0A` +
      `*Name:* ${encodeURIComponent(fullName || 'Not provided')}%0A` +
      `*Phone:* ${encodeURIComponent(phoneNumber || 'Not provided')}%0A` +
      `*Treatment:* ${encodeURIComponent(treatment)}%0A` +
      `*Preferred Date:* ${encodeURIComponent(preferredDate || 'Not specified')}%0A` +
      `*Message:* ${encodeURIComponent(message || 'No additional message')}`;

    window.open(`https://api.whatsapp.com/send?phone=919603338904&text=${formattedText}`, '_blank');
  };

  return (
    <div className="page-wrapper contactpage">

      {/* Breadcrumb Header */}
      <section className="doctor-hero-section py-4" style={{ background: '#f0f9ff' }}>
        <div className="container">
          <div className="breadcrumb-custom">
            <Link to="/"><i className="fa-solid fa-house" /> Home</Link>
            <span>&gt;</span>
            <span style={{ color: '#0f172a', fontWeight: 600 }}>Contact &amp; Book a Visit</span>
          </div>
        </div>
      </section>

      {/* Main Content Layout matching user screenshot */}
      <section className="ftco-section contact-page-section py-5">
        <div className="container">
          <div className="row">
            {/* Left Column: Form Card */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="contact-form-card">
                <div className="contact-badge-pill">
                  <i className="fa-solid fa-notes-medical" /> ONLINE CONSULTATION FORM
                </div>
                <h1 className="contact-title">
                  Send Us a Message / Book a Visit
                </h1>
                <p className="contact-subtitle">
                  Fill out your details below and our team will get back to you immediately to confirm your appointment.
                </p>

                <form onSubmit={handleWhatsAppSubmit}>
                  {/* Full Name */}
                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="fullName">
                      Your Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Suresh Reddy"
                      className="contact-input-field"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="phoneNumber">
                      Contact Phone Number *
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. 9603338904"
                      className="contact-input-field"
                    />
                  </div>

                  {/* Select Treatment / Service */}
                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="treatmentSelect">
                      Select Treatment / Service
                    </label>
                    <select
                      id="treatmentSelect"
                      value={treatment}
                      onChange={(e) => setTreatment(e.target.value)}
                      className="contact-input-field contact-select-field"
                    >
                      {TREATMENTS_LIST.map((t, idx) => (
                        <option key={idx} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="preferredDate">
                      Preferred Date
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="contact-input-field"
                    />
                  </div>

                  {/* Additional Message / Dental Concerns */}
                  <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="additionalMessage">
                      Additional Message / Dental Concerns (Optional)
                    </label>
                    <textarea
                      id="additionalMessage"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your dental symptoms or preferences..."
                      className="contact-input-field"
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  {/* WhatsApp Submit Button */}
                  <button type="submit" className="contact-submit-btn">
                    <i className="fa-brands fa-whatsapp" style={{ fontSize: 18 }} /> Submit via WhatsApp
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column: Google QR Card, Map Card, & Areas We Serve */}
            <div className="col-lg-6">
              {/* Google Business QR Card */}
              <div className="contact-google-card mb-4 text-center">
                <a
                  href="https://www.google.com/search?sca_esv=bfa957c708c098d7&cs=1&output=search&kgmid=/g/11f525jy3x&q=Simply+Smilez+Dental+Clinic+-Fully+Digital+Invisalign+Centre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-block w-100"
                >
                  <img
                    src="/images/gmb.webp"
                    alt="Simply Smilez Dental Clinic - Fully Digital Invisalign Centre - Check us out on Google"
                    className="contact-gmb-img mx-auto"
                  />
                </a>
              </div>

              {/* Interactive Google Map Card */}
              <div className="contact-map-card mb-4">
                <iframe
                  src="https://www.google.com/maps?q=Simply%20Smilez%20Dental%20Clinic%2C%20Shaikpet%2C%20Hyderabad&output=embed"
                  title="Simply Smilez Dental Clinic location map"
                  width="100%"
                  height="260"
                  style={{ border: 0, display: 'block', borderRadius: '14px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Areas We Serve in Hyderabad Card */}
              <div className="contact-areas-card">
                <h3 className="contact-areas-title">
                  Areas We Serve in Hyderabad
                </h3>
                <div className="contact-area-pills-wrap">
                  {HYDERABAD_AREAS.map((area, index) => (
                    <span key={index} className="contact-area-pill">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
