import Seo from '../../components/Seo';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DoctorAnkushPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dr. Ankush Kumar – Orthodontist & Invisalign Provider in Hyderabad | Simply Smilez";
  }, []);

  return (
    <div className="page-wrapper doctorankushpage">
      <Seo
        title="Dr. Ankush Kumar MDS | Orthodontist & Invisalign Provider Hyderabad"
        description="Profile and qualifications of Dr. Ankush Kumar MDS, Orthodontist and Certified Invisalign Provider at Simply Smilez Dental Clinic, Hyderabad."
        canonicalPath="/doctor/dr-ankush-kumar"
      />
      <><div className="doctor-hero-section">
    <div className="container">
      <div className="breadcrumb-custom">
        <a href="../index.html"><i className="fa-solid fa-house mr-1" /> Home</a>  &gt; 
        <a href="../doctor.html">Doctors</a>  &gt; 
        <span>Dr. Ankush Kumar</span>
      </div>
      <div className="doc-card-main">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-5 mb-4 mb-md-0 text-center">
            <div className="doc-avatar-wrapper">
              <img src="../images/ankush.webp" alt="Dr. Ankush Kumar - Orthodontist & Invisalign Provider in Hyderabad" className="img-fluid doc-avatar-img" />
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="verified-badge">
              <i className="fa-solid fa-circle-check" /> Certified Invisalign Provider &bull; Senior Doctor
            </div>
            <h1 className="doc-title">Dr. Ankush Kumar</h1>
            <div className="doc-subtitle">Orthodontist &amp; Invisalign Provider in Hyderabad</div>
            <div className="doc-degrees">
              <i className="fa-solid fa-graduation-cap text-primary mr-1" /> <strong>BDS, MDS (Orthodontics &amp;
                Dentofacial Orthopedics)</strong>
            </div>
            <p style={{ fontSize: 15, color: "#495057", lineHeight: "1.6" }}>
              Dr. Ankush Kumar is an Orthodontist and Invisalign Provider in Hyderabad with <strong>9 years of
                experience</strong> in orthodontic and dental care. He practices at <strong>Simply Smilez Dental Clinic
                in Manikonda, Hyderabad</strong>, and also works as a consultant at <strong>20 clinics across the
                city</strong>.
            </p>

            
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

            
            <div className="cta-btn-group">
              <a href="tel:+919603338904" className="btn-primary-custom">
                <i className="fa-solid fa-phone" /> Call for Appointment
              </a>
              <a href="https://wa.me/919603338904?text=Hello%20Dr.%20Ankush%20Kumar,%20I%20would%20like%20to%20book%20an%20Invisalign/Orthodontic%20consultation" target="_blank" className="btn-whatsapp-custom">
                <i className="fa-brands fa-whatsapp" /> WhatsApp Booking
              </a>
              <a href="../contact.html" className="btn btn-outline-secondary" style={{ borderRadius: 8, fontWeight: "600", padding: "10px 20px" }}>
                <i className="fa-solid fa-location-dot" /> Clinic Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  <section className="ftco-section py-5">
    <div className="container">
      <div className="row">

        
        <div className="col-lg-8">

          
          <div className="section-card">
            <h2 className="section-card-title">
              <i className="fa-solid fa-user-doctor" /> About Dr. Ankush Kumar
            </h2>
            <p style={{ fontSize: 15, lineHeight: "1.7", color: "#374151" }}>
              Dr. Ankush Kumar is an Orthodontist and Invisalign Provider practicing in Hyderabad. He has 9 years of
              experience and currently practices at Simply Smilez Dental Clinic in Manikonda. He also works as a
              consultant at 20 clinics across Hyderabad.
            </p>
            <p style={{ fontSize: 15, lineHeight: "1.7", color: "#374151" }}>
              He completed his BDS from P. M. N. M. Dental College, Bagalkot, Karnataka, and his MDS from SVS Institute
              of Dental Sciences. He is an active member of the Indian Orthodontic Society. Specializing in advanced
              orthodontic techniques, clear aligners (Invisalign), and full smile makeovers, Dr. Ankush Kumar is
              recognized for delivering precision smiles with maximum patient comfort.
            </p>
          </div>

          
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

          
          <div className="section-card">
            <h2 className="section-card-title">
              <i className="fa-solid fa-graduation-cap" /> Education &amp; Qualifications
            </h2>
            <ul className="timeline-list">
              <li>
                <strong>MDS (Master of Dental Surgery)</strong><br />
                <span className="text-muted">SVS Institute of Dental Sciences</span>
              </li>
              <li>
                <strong>BDS (Bachelor of Dental Surgery)</strong><br />
                <span className="text-muted">P. M. N. M. Dental College, Bagalkot, Karnataka</span>
              </li>
            </ul>
          </div>

          
          <div className="section-card">
            <h2 className="section-card-title">
              <i className="fa-solid fa-briefcase" /> Professional Experience &amp; Memberships
            </h2>
            <ul className="timeline-list">
              <li>
                <strong>9 Years of Dedicated Experience</strong> in Orthodontic and Dental Care
              </li>
              <li>
                <strong>Certified Orthodontist &amp; Invisalign Provider</strong>
              </li>
              <li>
                <strong>Practices at Simply Smilez Dental Clinic</strong>, Manikonda, Hyderabad
              </li>
              <li>
                <strong>Consultant Orthodontist</strong> at 20 dental clinics across Hyderabad
              </li>
              <li>
                <strong>Member</strong>, Indian Orthodontic Society (IOS)
              </li>
            </ul>
          </div>

          
          <div className="section-card">
            <h2 className="section-card-title">
              <i className="fa-solid fa-circle-question" /> Frequently Asked Questions
            </h2>

            
            <div className="faq-card">
              <div className="faq-header" data-toggle="collapse" data-target="#faq-ankush-1" aria-expanded="true">
                <span>Who is Dr. Ankush Kumar?</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <div id="faq-ankush-1" className="collapse show">
                <div className="faq-body">
                  Dr. Ankush Kumar is an Orthodontist and Invisalign Provider in Hyderabad with 9 years of experience.
                </div>
              </div>
            </div>

            
            <div className="faq-card">
              <div className="faq-header" data-toggle="collapse" data-target="#faq-ankush-2" aria-expanded="false">
                <span>Where does Dr. Ankush Kumar practice?</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <div id="faq-ankush-2" className="collapse">
                <div className="faq-body">
                  Dr. Ankush Kumar practices at Simply Smilez Dental Clinic in Manikonda, Hyderabad. He also works as a
                  consultant at 20 clinics across Hyderabad.
                </div>
              </div>
            </div>

            
            <div className="faq-card">
              <div className="faq-header" data-toggle="collapse" data-target="#faq-ankush-3" aria-expanded="false">
                <span>What are Dr. Ankush Kumar&apos;s qualifications?</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <div id="faq-ankush-3" className="collapse">
                <div className="faq-body">
                  Dr. Ankush Kumar completed his BDS from P. M. N. M. Dental College, Bagalkot, Karnataka, and his MDS
                  from SVS Institute of Dental Sciences.
                </div>
              </div>
            </div>

            
            <div className="faq-card">
              <div className="faq-header" data-toggle="collapse" data-target="#faq-ankush-4" aria-expanded="false">
                <span>What is Dr. Ankush Kumar&apos;s specialization?</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <div id="faq-ankush-4" className="collapse">
                <div className="faq-body">
                  Dr. Ankush Kumar specializes in orthodontics and provides Invisalign treatment.
                </div>
              </div>
            </div>

            
            <div className="faq-card">
              <div className="faq-header" data-toggle="collapse" data-target="#faq-ankush-5" aria-expanded="false">
                <span>How many years of experience does Dr. Ankush Kumar have?</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <div id="faq-ankush-5" className="collapse">
                <div className="faq-body">
                  Dr. Ankush Kumar has 9 years of experience.
                </div>
              </div>
            </div>

            
            <div className="faq-card">
              <div className="faq-header" data-toggle="collapse" data-target="#faq-ankush-6" aria-expanded="false">
                <span>Is Dr. Ankush Kumar a member of a professional organization?</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <div id="faq-ankush-6" className="collapse">
                <div className="faq-body">
                  Yes. Dr. Ankush Kumar is a member of the Indian Orthodontic Society.
                </div>
              </div>
            </div>

          </div>

        </div>

        
        <div className="col-lg-4">
          <div className="sidebar-sticky-wrap">

            
            <div className="appointment-card">
              <h3 style={{ fontSize: 20, fontWeight: "700", color: "#0b2545", marginBottom: 12 }}>
                <i className="fa-regular fa-calendar-check text-primary mr-1" /> Book Consultation
              </h3>
              <p style={{ fontSize: 14, color: "#555", marginBottom: 16 }}>
                Schedule an orthodontic / Invisalign appointment with Dr. Ankush Kumar at Simply Smilez Dental Clinic,
                Manikonda.
              </p>

              <div style={{ background: "#fff", padding: 14, borderRadius: 8, marginBottom: 16, border: "1px solid #e3e8ee" }}>
                <div style={{ fontSize: 13, color: "#6c757d", fontWeight: "600", textTransform: "uppercase" }}>Direct Phone
                  Line</div>
                <div style={{ fontSize: 18, fontWeight: "700", color: "#007bff", marginTop: 2 }}>
                  <a href="tel:+919603338904" style={{ color: "#007bff", textDecoration: "none" }}>+91 96033 38904</a>
                </div>
                <div style={{ fontSize: 16, fontWeight: "700", color: "#007bff", marginTop: 2 }}>
                  <a href="tel:+917799376656" style={{ color: "#007bff", textDecoration: "none" }}>+91 77993 76656</a>
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 14, fontWeight: "600", color: "#333" }}><i className="fa-regular fa-clock text-primary mr-1" /> Consulting Hours:</div>
                <div style={{ fontSize: 13, color: "#555", marginTop: 4 }}>Mon - Sat: 10:00 AM &ndash; 9:00 PM</div>
                <div style={{ fontSize: 13, color: "#555" }}>Sunday: 11:00 AM &ndash; 4:00 PM</div>
              </div>

              <a href="https://wa.me/919603338904?text=Hi,%20I%20would%20like%20to%20book%20an%20Orthodontic/Invisalign%20consultation%20with%20Dr.%20Ankush%20Kumar." target="_blank" className="btn btn-block btn-whatsapp-custom text-center mb-2" style={{ display: "flex", justifyContent: "center" }}>
                <i className="fa-brands fa-whatsapp mr-1" /> Book via WhatsApp
              </a>

              <a href="tel:+919603338904" className="btn btn-block btn-primary-custom text-center" style={{ display: "flex", justifyContent: "center" }}>
                <i className="fa-solid fa-phone mr-1" /> Call Clinic Now
              </a>
            </div>

            
            <div className="section-card mb-3">
              <h4 style={{ fontSize: 17, fontWeight: "700", color: "#0b2545", marginBottom: 12 }}>
                <i className="fa-solid fa-hospital text-primary mr-1" /> Primary Clinic
              </h4>
              <p style={{ fontSize: 14, color: "#4b5563", marginBottom: 10 }}>
                <strong>Simply Smilez Dental Clinic</strong><br />
                P.V. Reddy Complex 1st Floor, Dwaraka Nagar Colony, O.U Colony Road, Shaikpet / Manikonda, Hyderabad,
                Telangana 500008
              </p>
              <a href="https://maps.app.goo.gl/wvkijcKcuaGCoHTq9" target="_blank" className="btn btn-sm btn-outline-primary btn-block">
                <i className="fa-solid fa-diamond-turn-right mr-1" /> View on Google Maps
              </a>
            </div>

            
            <div className="section-card">
              <h4 style={{ fontSize: 17, fontWeight: "700", color: "#0b2545", marginBottom: 14 }}>
                <i className="fa-solid fa-user-group text-primary mr-1" /> Other Specialists
              </h4>
              <div className="d-flex align-items-center mb-3 p-2" style={{ background: "#f8fbff", borderRadius: 8 }}>
                <img src="../images/susheel2.webp" alt="Dr. Susheel Kumar" style={{ width: 55, height: 55, borderRadius: "50%", objectFit: "cover", marginRight: 12 }} />
                <div>
                  <h5 style={{ fontSize: 14, fontWeight: "700", marginBottom: 2 }}>
                    <a href="dr-susheel-kumar-pediatric-dentist-implantologist-hyderabad.html" style={{ color: "#007bff", textDecoration: "none" }}>Dr. Susheel Kumar</a>
                  </h5>
                  <span style={{ fontSize: 12, color: "#6b7280" }}>Pediatric Dentist &amp; Implantologist</span>
                </div>
              </div>
              <a href="../doctor.html" className="btn btn-sm btn-light btn-block text-primary font-weight-bold">
                View All Doctors &rarr;
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section></>
    </div>
  );
}
