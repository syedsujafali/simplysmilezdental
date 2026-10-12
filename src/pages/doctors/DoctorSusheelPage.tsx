import Seo from '../../components/Seo';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DoctorSusheelPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Dr. Susheel Kumar – Pediatric Dentist & Implantologist in Hyderabad | Simply Smilez";
  }, []);

  return (
    <div className="page-wrapper doctorsusheelpage">
      <Seo
        title="Dr. Susheel Kumar MDS | Pediatric Dentist & Implantologist Hyderabad"
        description="Profile and qualifications of Dr. Susheel Kumar MDS, specialist in pediatric dentistry and dental implants at Simply Smilez Dental Clinic, Hyderabad."
        canonicalPath="/doctor/dr-susheel-kumar"
      />
      <><div className="doctor-hero-section">
    <div className="container">
      <div className="breadcrumb-custom">
        <a href="../index.html"><i className="fa-solid fa-house mr-1" /> Home</a>  &gt; 
        <a href="../doctor.html">Doctors</a>  &gt; 
        <span>Dr. Susheel Kumar</span>
      </div>
      <div className="doc-card-main">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-5 mb-4 mb-md-0 text-center">
            <div className="doc-avatar-wrapper">
              <img src="../images/susheel2.webp" alt="Dr. Susheel Kumar - Pediatric Dentist & Implantologist in Hyderabad" className="img-fluid doc-avatar-img" />
            </div>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="verified-badge">
              <i className="fa-solid fa-circle-check" /> Verified Specialist &bull; Senior Doctor
            </div>
            <h1 className="doc-title">Dr. Susheel Kumar</h1>
            <div className="doc-subtitle">Pediatric Dentist &amp; Implantologist in Hyderabad</div>
            <div className="doc-degrees">
              <i className="fa-solid fa-graduation-cap text-primary mr-1" /> <strong>BDS, MDS (Pediatric &amp; Preventive
                Dentistry)</strong>
            </div>
            <p style={{ fontSize: 15, color: "#495057", lineHeight: "1.6" }}>
              Dr. Susheel Kumar is a Pediatric Dentist and Implantologist in Hyderabad with <strong>9 years of
                experience</strong> in dentistry. He practices at <strong>Simply Smilez Dental Clinic, Manikonda,
                Hyderabad</strong>, and also works as a consultant across <strong>30 clinics in Hyderabad</strong>.
            </p>

            
            <div className="stats-badge-grid">
              <div className="stat-box">
                <span className="stat-number">9+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">30+</span>
                <span className="stat-label">Consulting Clinics</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">MDS &amp; BDS</span>
                <span className="stat-label">Master Degree</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">ISPPD</span>
                <span className="stat-label">Society Member</span>
              </div>
            </div>

            
            <div className="cta-btn-group">
              <a href="tel:+919603338904" className="btn-primary-custom">
                <i className="fa-solid fa-phone" /> Call for Appointment
              </a>
              <a href="https://wa.me/919603338904?text=Hello%20Dr.%20Susheel%20Kumar,%20I%20would%20like%20to%20book%20a%20consultation" target="_blank" className="btn-whatsapp-custom">
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
              <i className="fa-solid fa-user-doctor" /> About Dr. Susheel Kumar
            </h2>
            <p style={{ fontSize: 15, lineHeight: "1.7", color: "#374151" }}>
              Dr. Susheel Kumar is a Pediatric Dentist and Implantologist practicing in Hyderabad. With 9 years of
              experience, he provides dental care with a focus on pediatric dentistry and implantology. He currently
              practices at Simply Smilez Dental Clinic in Manikonda and also serves as a consultant at multiple dental
              clinics across Hyderabad.
            </p>
            <p style={{ fontSize: 15, lineHeight: "1.7", color: "#374151" }}>
              His academic qualifications include a BDS degree from P. M. N. M. Dental College in Bagalkot, Karnataka,
              and an MDS degree from Panineeya Dental College in Hyderabad. Dedicated to pediatric oral wellness,
              preventive healthcare for children, and advanced dental implant rehabilitation, Dr. Susheel Kumar combines
              clinical excellence with compassionate, child-friendly care.
            </p>
          </div>

          
          <div className="section-card">
            <h2 className="section-card-title">
              <i className="fa-solid fa-stethoscope" /> Areas of Practice &amp; Specializations
            </h2>
            <p className="text-muted" style={{ fontSize: 14, marginBottom: 16 }}>
              Dr. Susheel Kumar&apos;s comprehensive areas of clinical practice include:
            </p>
            <div className="practice-grid">
              <div className="practice-item">
                <i className="fa-solid fa-tooth" /> Pediatric Dentistry
              </div>
              <div className="practice-item">
                <i className="fa-solid fa-screwdriver-wrench" /> Implant Dentistry
              </div>
              <div className="practice-item">
                <i className="fa-solid fa-shield-heart" /> Preventive Dental Care
              </div>
              <div className="practice-item">
                <i className="fa-solid fa-child" /> Dental Care for Children
              </div>
              <div className="practice-item">
                <i className="fa-solid fa-clipboard-user" /> General Dental Consultation
              </div>
            </div>
          </div>

          
          <div className="section-card">
            <h2 className="section-card-title">
              <i className="fa-solid fa-images" /> Clinical Gallery &amp; Patient Care
            </h2>
            <div className="row">
              <div className="col-md-6 mb-3">
                <img src="../images/susheel2.webp" alt="Dr. Susheel Kumar Pediatric Dental Specialist" className="doc-gallery-img" />
                <p className="text-center text-muted mt-2" style={{ fontSize: 13 }}>Dr. Susheel Kumar &ndash; Pediatric Dentist
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <img src="../images/susheel3.webp" alt="Dr. Susheel Kumar Dental Practice at Simply Smilez" className="doc-gallery-img" />
                <p className="text-center text-muted mt-2" style={{ fontSize: 13 }}>Clinical Consultations &amp;
                  Implantology</p>
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
                <span className="text-muted">Panineeya Dental College, Hyderabad</span>
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
                <strong>9 Years of Dedicated Experience</strong> in Dentistry, Pediatric Dental Procedures &amp; Dental
                Implantology
              </li>
              <li>
                <strong>Senior Pediatric Dentist &amp; Implantologist</strong> at Simply Smilez Dental Clinic,
                Manikonda, Hyderabad
              </li>
              <li>
                <strong>Consultant Dentist</strong> across 30 premier dental clinics in Hyderabad
              </li>
              <li>
                <strong>Member</strong>, Indian Society of Pedodontics &amp; Preventive Dentistry (ISPPD)
              </li>
            </ul>
          </div>

          
          <div className="section-card">
            <h2 className="section-card-title">
              <i className="fa-solid fa-circle-question" /> Frequently Asked Questions
            </h2>

            
            <div className="faq-card">
              <div className="faq-header" data-toggle="collapse" data-target="#faq1" aria-expanded="true">
                <span>Who is Dr. Susheel Kumar?</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <div id="faq1" className="collapse show">
                <div className="faq-body">
                  Dr. Susheel Kumar is a Pediatric Dentist and Implantologist in Hyderabad with 9 years of experience in
                  dentistry.
                </div>
              </div>
            </div>

            
            <div className="faq-card">
              <div className="faq-header" data-toggle="collapse" data-target="#faq2" aria-expanded="false">
                <span>Where does Dr. Susheel Kumar practice?</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <div id="faq2" className="collapse">
                <div className="faq-body">
                  Dr. Susheel Kumar practices at Simply Smilez Dental Clinic in Manikonda, Hyderabad. He also works as a
                  consultant at 30 clinics across Hyderabad.
                </div>
              </div>
            </div>

            
            <div className="faq-card">
              <div className="faq-header" data-toggle="collapse" data-target="#faq3" aria-expanded="false">
                <span>What are Dr. Susheel Kumar&apos;s qualifications?</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <div id="faq3" className="collapse">
                <div className="faq-body">
                  Dr. Susheel Kumar completed his BDS from P. M. N. M. Dental College, Bagalkot, Karnataka, and his MDS
                  from Panineeya Dental College, Hyderabad.
                </div>
              </div>
            </div>

            
            <div className="faq-card">
              <div className="faq-header" data-toggle="collapse" data-target="#faq4" aria-expanded="false">
                <span>What is Dr. Susheel Kumar&apos;s specialization?</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <div id="faq4" className="collapse">
                <div className="faq-body">
                  Dr. Susheel Kumar practices as a Pediatric Dentist and Implantologist.
                </div>
              </div>
            </div>

            
            <div className="faq-card">
              <div className="faq-header" data-toggle="collapse" data-target="#faq5" aria-expanded="false">
                <span>How many years of experience does Dr. Susheel Kumar have?</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <div id="faq5" className="collapse">
                <div className="faq-body">
                  Dr. Susheel Kumar has 9 years of experience in dentistry.
                </div>
              </div>
            </div>

            
            <div className="faq-card">
              <div className="faq-header" data-toggle="collapse" data-target="#faq6" aria-expanded="false">
                <span>Is Dr. Susheel Kumar a member of a professional dental organization?</span>
                <i className="fa-solid fa-chevron-down" />
              </div>
              <div id="faq6" className="collapse">
                <div className="faq-body">
                  Yes. Dr. Susheel Kumar is a member of the Indian Society of Pedodontics &amp; Preventive Dentistry.
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
                Schedule an appointment with Dr. Susheel Kumar at Simply Smilez Dental Clinic, Manikonda.
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

              <a href="https://wa.me/919603338904?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment%20with%20Dr.%20Susheel%20Kumar." target="_blank" className="btn btn-block btn-whatsapp-custom text-center mb-2" style={{ display: "flex", justifyContent: "center" }}>
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
                <img src="../images/ankush.webp" alt="Dr. Ankush Kumar" style={{ width: 55, height: 55, borderRadius: "50%", objectFit: "cover", marginRight: 12 }} />
                <div>
                  <h5 style={{ fontSize: 14, fontWeight: "700", marginBottom: 2 }}>
                    <a href="dr-ankush-kumar-orthodontist-invisalign-provider-hyderabad.html" style={{ color: "#007bff", textDecoration: "none" }}>Dr. Ankush Kumar</a>
                  </h5>
                  <span style={{ fontSize: 12, color: "#6b7280" }}>Orthodontist &amp; Invisalign Provider</span>
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
