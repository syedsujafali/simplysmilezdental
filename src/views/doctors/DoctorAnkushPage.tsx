'use client';

import React, { useEffect, useState } from 'react';
import Link from '../../components/Link';

const ankushFaqs = [
  {
    q: "Who is Dr. Ankush Kumar?",
    a: "Dr. Ankush Kumar is an Orthodontist and Certified Invisalign Provider in Hyderabad with 9 years of dedicated clinical experience in orthodontic and dental care."
  },
  {
    q: "Where does Dr. Ankush Kumar practice?",
    a: "Dr. Ankush Kumar practices at Simply Smilez Dental Clinic in Manikonda / Shaikpet, Hyderabad. He also works as a consultant orthodontist across 20 dental clinics throughout the city."
  },
  {
    q: "What are Dr. Ankush Kumar's qualifications?",
    a: "Dr. Ankush Kumar completed his BDS from P. M. N. M. Dental College, Bagalkot, Karnataka, and earned his Master's degree (MDS in Orthodontics & Dentofacial Orthopedics) from SVS Institute of Dental Sciences."
  },
  {
    q: "What is Dr. Ankush Kumar's specialization?",
    a: "Dr. Ankush Kumar specializes in orthodontics, clear aligners (Invisalign), digital smile design, corrective jaw alignment, and braces treatment for adolescents and adults."
  },
  {
    q: "How many years of experience does Dr. Ankush Kumar have?",
    a: "Dr. Ankush Kumar has over 9 years of specialized orthodontic and clinical dentistry experience."
  },
  {
    q: "Is Dr. Ankush Kumar a member of a professional organization?",
    a: "Yes. Dr. Ankush Kumar is an active registered life member of the Indian Orthodontic Society (IOS)."
  }
];

const ankushSchema = {
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

export default function DoctorAnkushPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const sidebarRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Dr. Ankush Kumar – Orthodontist & Invisalign Provider in Hyderabad | Simply Smilez";

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
    canonical.href = "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar";

    // Metadata
    setMeta('description', "Consult Dr. Ankush Kumar, leading Orthodontist and Certified Invisalign Provider in Hyderabad with 9+ years experience. Expert in braces, aligners, and smile makeovers at Simply Smilez Dental Clinic.");
    setMeta('keywords', "Dr Ankush Kumar orthodontist, orthodontist in Hyderabad, Invisalign provider Hyderabad, clear aligners doctor Hyderabad, braces specialist Shaikpet, orthodontic consultation Manikonda, Simply Smilez orthodontist");
    setMeta('author', "Simply Smilez Dental Clinic");
    setMeta('robots', "index,follow");
    setMeta('theme-color', "#ffffff");
    setMeta('referrer', "strict-origin-when-cross-origin");

    // Open Graph
    setMeta('og:type', "profile", true);
    setMeta('og:title', "Dr. Ankush Kumar – Orthodontist & Invisalign Provider in Hyderabad | Simply Smilez", true);
    setMeta('og:description', "Consult Dr. Ankush Kumar, leading Orthodontist and Certified Invisalign Provider in Hyderabad with 9+ years experience. Expert in braces, aligners, and smile makeovers at Simply Smilez Dental Clinic.", true);
    setMeta('og:url', "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar", true);
    setMeta('og:site_name', "Simply Smilez Dental Clinic", true);
    setMeta('og:image', "https://www.simplysmilezdental.in/images/ankush.webp", true);
    setMeta('og:image:alt', "Dr. Ankush Kumar - Orthodontist & Invisalign Provider in Hyderabad at Simply Smilez Dental Clinic", true);

    // Twitter Card
    setMeta('twitter:card', "summary_large_image");
    setMeta('twitter:title', "Dr. Ankush Kumar – Orthodontist & Invisalign Provider in Hyderabad | Simply Smilez");
    setMeta('twitter:description', "Consult Dr. Ankush Kumar, leading Orthodontist and Certified Invisalign Provider in Hyderabad with 9+ years experience at Simply Smilez Dental Clinic.");
    setMeta('twitter:image', "https://www.simplysmilezdental.in/images/ankush.webp");

    // Structured Schema Script
    let schemaScript = document.getElementById('doctor-ankush-schema') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'doctor-ankush-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.text = JSON.stringify(ankushSchema);

    const updateStickyOffset = () => {
      if (sidebarRef.current && window.innerWidth >= 992) {
        const height = sidebarRef.current.offsetHeight;
        const vh = window.innerHeight;
        // If sidebar is taller than viewport, stick when bottom edge is 24px above bottom of window:
        if (height + 100 > vh) {
          const topOffset = vh - height - 24;
          sidebarRef.current.style.top = `${topOffset}px`;
        } else {
          // If sidebar is shorter than viewport, stick comfortably 90px from top
          sidebarRef.current.style.top = '90px';
        }
      }
    };

    updateStickyOffset();
    window.addEventListener('resize', updateStickyOffset);
    return () => window.removeEventListener('resize', updateStickyOffset);
  }, []);

  return (
    <div className="page-wrapper doctorankushpage">

      {/* Doctor Hero Header */}
      <div className="doctor-hero-section">
        <div className="container">
          <div className="breadcrumb-custom">
            <Link to="/"><i className="fa-solid fa-house" /> Home</Link>
            <span>&gt;</span>
            <Link to="/doctors">Doctors</Link>
            <span>&gt;</span>
            <span style={{ color: '#0f172a', fontWeight: 600 }}>Dr. Ankush Kumar</span>
          </div>

          <div className="doc-card-main">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-5 mb-4 mb-md-0 text-center">
                <div className="doc-avatar-wrapper">
                  <img
                    src="/images/ankush.webp"
                    alt="Dr. Ankush Kumar - Orthodontist & Invisalign Provider in Hyderabad"
                    className="doc-avatar-img"
                  />
                </div>
              </div>

              <div className="col-lg-8 col-md-7">
                <div className="verified-badge">
                  <i className="fa-solid fa-circle-check" /> Certified Invisalign Provider &bull; Senior Doctor
                </div>

                <h1 className="doc-title">Dr. Ankush Kumar</h1>
                <div className="doc-subtitle">Orthodontist &amp; Invisalign Provider in Hyderabad</div>

                <div className="doc-degrees">
                  <i className="fa-solid fa-graduation-cap text-primary" />
                  <strong>BDS, MDS (Orthodontics &amp; Dentofacial Orthopedics)</strong>
                </div>

                <p style={{ fontSize: 15, color: "#475569", lineHeight: "1.7" }}>
                  Dr. Ankush Kumar is an Orthodontist and Invisalign Provider in Hyderabad with <strong>9 years of experience</strong> in orthodontic and dental care. He practices at <strong>Simply Smilez Dental Clinic in Manikonda / Shaikpet, Hyderabad</strong>, and also works as a consultant orthodontist across <strong>20 clinics across the city</strong>.
                </p>

                {/* Key Experience Stats */}
                <div className="stats-badge-grid">
                  <div className="stat-box">
                    <span className="stat-number">9+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-number">20+</span>
                    <span className="stat-label">Consulting Clinics</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-number">Invisalign</span>
                    <span className="stat-label">Certified Provider</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-number">IOS</span>
                    <span className="stat-label">Society Member</span>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div className="cta-btn-group">
                  <a href="tel:+919603338904" className="btn-primary-custom">
                    <i className="fa-solid fa-phone" /> Call for Appointment
                  </a>
                  <a
                    href="https://wa.me/919603338904?text=Hello%20Dr.%20Ankush%20Kumar,%20I%20would%20like%20to%20book%20an%20Invisalign/Orthodontic%20consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-custom"
                  >
                    <i className="fa-brands fa-whatsapp" /> WhatsApp Booking
                  </a>
                  <Link to="/contact" className="btn-location-custom">
                    <i className="fa-solid fa-location-dot" /> Clinic Location
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Body Information & Sidebar */}
      <section className="ftco-section py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Main Content Column */}
            <div className="col-lg-8">
              {/* About Section */}
              <div className="section-card">
                <h2 className="section-card-title">
                  <i className="fa-solid fa-user-doctor" /> About Dr. Ankush Kumar
                </h2>
                <p style={{ fontSize: 15, lineHeight: "1.75", color: "#374151" }}>
                  Dr. Ankush Kumar is an Orthodontist and Invisalign Provider practicing in Hyderabad. He has 9 years of experience and currently practices at Simply Smilez Dental Clinic in Manikonda / Shaikpet. He also works as a consultant at 20 clinics across Hyderabad.
                </p>
                <p style={{ fontSize: 15, lineHeight: "1.75", color: "#374151", marginBottom: 0 }}>
                  He completed his BDS from P. M. N. M. Dental College, Bagalkot, Karnataka, and his MDS from SVS Institute of Dental Sciences. He is an active member of the Indian Orthodontic Society. Specializing in advanced orthodontic techniques, clear aligners (Invisalign), and full smile makeovers, Dr. Ankush Kumar is recognized for delivering precision smiles with maximum patient comfort.
                </p>
              </div>

              {/* Specializations & Practice Grid */}
              <div className="section-card">
                <h2 className="section-card-title">
                  <i className="fa-solid fa-stethoscope" /> Areas of Practice &amp; Specializations
                </h2>
                <p className="text-muted" style={{ fontSize: 14, marginBottom: 16 }}>
                  Dr. Ankush Kumar&apos;s specialized areas of orthodontic and clinical practice include:
                </p>
                <div className="practice-grid">
                  <div className="practice-item">
                    <i className="fa-solid fa-tooth" /> Orthodontics
                  </div>
                  <div className="practice-item">
                    <i className="fa-solid fa-gem" /> Invisalign Treatment
                  </div>
                  <div className="practice-item">
                    <i className="fa-solid fa-arrows-left-right-to-line" /> Teeth Alignment
                  </div>
                  <div className="practice-item">
                    <i className="fa-solid fa-clipboard-check" /> Orthodontic Consultation
                  </div>
                  <div className="practice-item">
                    <i className="fa-solid fa-face-smile" /> Correcting Dental Alignment &amp; Bite Concerns
                  </div>
                </div>
              </div>

              {/* Education & Qualifications */}
              <div className="section-card">
                <h2 className="section-card-title">
                  <i className="fa-solid fa-graduation-cap" /> Education &amp; Qualifications
                </h2>
                <ul className="timeline-list">
                  <li>
                    <strong style={{ fontSize: "15.5px", color: "#0f172a" }}>MDS (Master of Dental Surgery in Orthodontics &amp; Dentofacial Orthopedics)</strong>
                    <div className="text-muted mt-1">SVS Institute of Dental Sciences</div>
                  </li>
                  <li>
                    <strong style={{ fontSize: "15.5px", color: "#0f172a" }}>BDS (Bachelor of Dental Surgery)</strong>
                    <div className="text-muted mt-1">P. M. N. M. Dental College, Bagalkot, Karnataka</div>
                  </li>
                </ul>
              </div>

              {/* Professional Experience */}
              <div className="section-card">
                <h2 className="section-card-title">
                  <i className="fa-solid fa-briefcase" /> Professional Experience &amp; Memberships
                </h2>
                <ul className="timeline-list">
                  <li>
                    <strong style={{ color: "#0f172a" }}>9 Years of Dedicated Experience</strong> in Orthodontic and Dental Care
                  </li>
                  <li>
                    <strong style={{ color: "#0f172a" }}>Certified Orthodontist &amp; Invisalign Provider</strong>
                  </li>
                  <li>
                    <strong style={{ color: "#0f172a" }}>Practices at Simply Smilez Dental Clinic</strong>, Manikonda / Shaikpet, Hyderabad
                  </li>
                  <li>
                    <strong style={{ color: "#0f172a" }}>Consultant Orthodontist</strong> at 20 dental clinics across Hyderabad
                  </li>
                  <li>
                    <strong style={{ color: "#0f172a" }}>Member</strong>, Indian Orthodontic Society (IOS)
                  </li>
                </ul>
              </div>

              {/* Interactive FAQ Section */}
              <div className="section-card">
                <h2 className="section-card-title">
                  <i className="fa-solid fa-circle-question" /> Frequently Asked Questions
                </h2>

                <div className="doc-faq-list">
                  {ankushFaqs.map((faq, idx) => {
                    const isOpen = openFaq === idx;
                    return (
                      <div key={idx} className={`doc-faq-item ${isOpen ? 'active' : ''}`}>
                        <div
                          className="doc-faq-header"
                          onClick={() => setOpenFaq(isOpen ? null : idx)}
                        >
                          <span>{faq.q}</span>
                          <i className="fa-solid fa-chevron-down faq-chevron" />
                        </div>
                        {isOpen && (
                          <div className="doc-faq-body">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <div className="col-lg-4">
              <div ref={sidebarRef} className="sidebar-sticky-wrap">
                {/* Book Consultation Card */}
                <div className="appointment-card">
                  <h3 style={{ fontSize: 20, fontWeight: "700", color: "#0b2545", marginBottom: 12 }}>
                    <i className="fa-regular fa-calendar-check text-primary mr-2" /> Book Consultation
                  </h3>
                  <p style={{ fontSize: 14, color: "#475569", marginBottom: 16, lineHeight: "1.6" }}>
                    Schedule an orthodontic / Invisalign appointment with Dr. Ankush Kumar at Simply Smilez Dental Clinic.
                  </p>

                  <div style={{ background: "#ffffff", padding: "14px 16px", borderRadius: 12, marginBottom: 16, border: "1px solid #bae6fd" }}>
                    <div style={{ fontSize: 11.5, color: "#64748b", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.04em" }}>
                      Direct Phone Line
                    </div>
                    <div style={{ fontSize: 18, fontWeight: "800", color: "#0284c7", marginTop: 4 }}>
                      <a href="tel:+919603338904" style={{ color: "#0284c7", textDecoration: "none" }}>+91 96033 38904</a>
                    </div>
                    <div style={{ fontSize: 16, fontWeight: "700", color: "#0284c7", marginTop: 2 }}>
                      <a href="tel:+917799376656" style={{ color: "#0284c7", textDecoration: "none" }}>+91 77993 76656</a>
                    </div>
                  </div>

                  <div style={{ marginBottom: 18, background: "#ffffff", padding: "12px 16px", borderRadius: 12, border: "1px solid #e2e8f0" }}>
                    <div style={{ fontSize: 13.5, fontWeight: "700", color: "#1e293b" }}>
                      <i className="fa-regular fa-clock text-primary mr-1" /> Consulting Hours:
                    </div>
                    <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>Mon - Sat: 10:00 AM &ndash; 8:30 PM</div>
                    <div style={{ fontSize: 13, color: "#64748b" }}>Sunday: 10:30 AM &ndash; 1:00 PM</div>
                  </div>

                  <a
                    href="https://wa.me/919603338904?text=Hi,%20I%20would%20like%20to%20book%20an%20Orthodontic/Invisalign%20consultation%20with%20Dr.%20Ankush%20Kumar."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp-custom w-100 justify-content-center mb-2"
                  >
                    <i className="fa-brands fa-whatsapp" /> Book via WhatsApp
                  </a>

                  <a
                    href="tel:+919603338904"
                    className="btn-primary-custom w-100 justify-content-center"
                  >
                    <i className="fa-solid fa-phone" /> Call Clinic Now
                  </a>
                </div>

                {/* Primary Clinic Card */}
                <div className="section-card mb-4">
                  <h4 style={{ fontSize: 17, fontWeight: "700", color: "#0b2545", marginBottom: 12 }}>
                    <i className="fa-solid fa-hospital text-primary mr-2" /> Primary Clinic
                  </h4>
                  <p style={{ fontSize: 13.5, color: "#4b5563", marginBottom: 14, lineHeight: "1.6" }}>
                    <strong>Simply Smilez Dental Clinic</strong><br />
                    P.V. Reddy Complex 1st Floor, Dwaraka Nagar Colony, O.U Colony Road, Shaikpet / Manikonda, Hyderabad, Telangana 500008
                  </p>
                  <a
                    href="https://maps.app.goo.gl/wvkijcKcuaGCoHTq9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline-primary btn-block font-weight-bold"
                    style={{ borderRadius: "10px", padding: "8px 14px", borderColor: "#0284c7", color: "#0284c7" }}
                  >
                    <i className="fa-solid fa-diamond-turn-right mr-1" /> View on Google Maps
                  </a>
                </div>

                {/* Other Specialists Card */}
                <div className="section-card">
                  <h4 style={{ fontSize: 17, fontWeight: "700", color: "#0b2545", marginBottom: 14 }}>
                    <i className="fa-solid fa-user-group text-primary mr-2" /> Other Specialists
                  </h4>
                  <div className="d-flex align-items-center mb-3 p-3" style={{ background: "#f8fbff", borderRadius: 12, border: "1px solid #e0f2fe" }}>
                    <img
                      src="/images/about.webp"
                      alt="Dr. Susheel Kumar"
                      style={{ width: 55, height: 55, borderRadius: "50%", objectFit: "cover", marginRight: 14, border: "2px solid #ffffff", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}
                    />
                    <div>
                      <h5 style={{ fontSize: 14.5, fontWeight: "700", marginBottom: 2 }}>
                        <Link to="/doctor/dr-susheel-kumar" style={{ color: "#0284c7", textDecoration: "none" }}>
                          Dr. Susheel Kumar
                        </Link>
                      </h5>
                      <span style={{ fontSize: 12, color: "#64748b" }}>Pediatric Dentist &amp; Implantologist</span>
                    </div>
                  </div>
                  <Link
                    to="/doctors"
                    className="btn btn-sm btn-light btn-block font-weight-bold"
                    style={{ borderRadius: "10px", padding: "8px 14px", color: "#0284c7" }}
                  >
                    View All Doctors &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
