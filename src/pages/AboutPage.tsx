import Seo from '../components/Seo';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Invisalign &amp; Root Canal Dentist in Hyderabad | Simply Smilez";
  }, []);

  return (
    <div className="page-wrapper aboutpage">
      <Seo
        title="About Us | Simply Smilez Dental Clinic in Shaikpet, Hyderabad"
        description="Established in 2018, Simply Smilez Dental Clinic offers Invisalign, pediatric dentistry, implants, and gentle dental care in Shaikpet, Hyderabad."
        canonicalPath="/about"
      />
      <section className="ftco-section">
    <div className="container">
      
      <div className="row justify-content-center mb-5">
        <div className="col-md-10 text-center heading-section ftco-animate">
          <h1 className="mb-3" style={{ color: "#00b7ff", fontWeight: "700" }}>About Simply Smilez Dental Clinic</h1>
          <h4 className="subheading mb-4" style={{ color: "#333", fontWeight: "600" }}>Trusted Dental Care in Shaikpet, Hyderabad
            Since 2018</h4>
          <p className="lead">Established in 2018, Simply Smilez Dental Clinic is a patient-focused dental clinic in
            Shaikpet, Hyderabad, offering comprehensive dental care for children, teens, and adults.</p>
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

      
      <div className="row mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="p-4 bg-light rounded h-100 shadow-sm">
            <h3 className="h4 font-weight-bold text-primary mb-3">Dental Care Designed Around You</h3>
            <p>Every smile is different. We take time to understand your concerns, explain suitable treatment options,
              and provide care based on your individual dental needs. Whether you need routine care, teeth
              straightening, treatment for a damaged or missing tooth, or cosmetic dental treatment, our goal is to help
              you maintain healthy teeth and a confident smile.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="p-4 bg-light rounded h-100 shadow-sm">
            <h3 className="h4 font-weight-bold text-primary mb-3">Our Commitment</h3>
            <p>From children&apos;s dentistry and orthodontics to restorative and cosmetic treatments, we aim to make quality
              dental care simple, comfortable, and accessible.</p>
            <p className="font-weight-bold text-dark mt-3">Simply Smilez Dental Clinic &mdash; personalized dental care for
              healthier, confident smiles in Shaikpet, Hyderabad.</p>
          </div>
        </div>
      </div>

      
      <div className="row mb-5">
        <div className="col-md-12 text-center mb-4">
          <h2 className="font-weight-bold" style={{ color: "#00b7ff" }}>Our Specialist Doctors</h2>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h3><Link to="/doctor/dr-susheel-kumar" style={{ color: "inherit", textDecoration: "none" }}>Dr. Susheel Kumar</Link></h3>
            <p>Dr. Susheel Kumar is a Pediatric dentist and Implantologist in Hyderabad and has experience of 9 years in
              these fields. Dr. Susheel practices at Simply Smilez Dental Clinic in Manikonda, Hyderabad and works as a
              consultant in 30 clinics around the city. He completed his BDS From P. M. N. M.Dental
              college,Bagalkot,Karnataka and MDS from Panineeya Dental College, Hyderabad. He is a member of Indian
              Society Of Pedodontics &amp; Preventive Dentistry.</p>
            <p className="mt-auto"><Link to="/doctor/dr-susheel-kumar" className="btn btn-sm btn-primary">Read More About Dr. Susheel Kumar &rarr;</Link></p>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h3><Link to="/doctor/dr-ankush-kumar" style={{ color: "inherit", textDecoration: "none" }}>Dr. Ankush Kumar</Link></h3>
            <p>Dr. Ankush Kumar is Orthodontist and Invisalign provider with an experience of 9 years. Dr. Ankush Kumar
              practices at Simply Smilez Dental Clinic in Manikonda, Hyderabad and works as a consultant in 20 clinics
              around the city. He completed his BDS From P. M. N. M.Dental college,Bagalkot, Karnataka and MDS From SVS
              Institute of Dental Sciences. He is a member of Indian Orthodontic Society.</p>
            <p className="mt-auto"><Link to="/doctor/dr-ankush-kumar" className="btn btn-sm btn-primary">Read More About Dr. Ankush Kumar &rarr;</Link></p>
          </div>
        </div>
      </div>

      
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Answers to common questions about our dental services and clinic.</p>
          </div>

          <div className="faq-container">

            <div className="faq-item">
              <button className="faq-question">
                <span>Where is Simply Smilez Dental Clinic located in Hyderabad?</span>
                <i className="fas fa-chevron-down faq-icon" />
              </button>
              <div className="faq-answer">
                <p>
                  Simply Smilez Dental Clinic is located at P.V. Reddy Complex, 1st Floor,
                  Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad &ndash; 500008.
                  The clinic is conveniently accessible to patients from Shaikpet,
                  O.U. Colony, Manikonda, Tolichowki, Mehdipatnam, and nearby areas.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>Do you offer Invisalign treatment?</span>
                <i className="fas fa-chevron-down faq-icon" />
              </button>
              <div className="faq-answer">
                <p>
                  Yes. We provide Invisalign clear aligners for teens and adults who want
                  a comfortable, discreet alternative to traditional braces. We also offer
                  Invisalign First for children with developing smiles.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>What dental services do you provide?</span>
                <i className="fas fa-chevron-down faq-icon" />
              </button>
              <div className="faq-answer">
                <p>
                  Our services include Invisalign, Invisalign First for Kids, Root Canal
                  Treatment, Dental Implants, Cosmetic Dentistry, Teeth Whitening,
                  Crowns &amp; Bridges, Smile Makeovers, and General Dental Care.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>Is Root Canal Treatment painful?</span>
                <i className="fas fa-chevron-down faq-icon" />
              </button>
              <div className="faq-answer">
                <p>
                  Modern root canal treatment is typically comfortable and performed under
                  local anesthesia. Most patients experience little to no pain during the
                  procedure and feel significant relief afterward.
                </p>
              </div>
            </div>

            <div className="faq-item">
              <button className="faq-question">
                <span>How can I book an appointment?</span>
                <i className="fas fa-chevron-down faq-icon" />
              </button>
              <div className="faq-answer">
                <p>
                  You can book an appointment by calling our clinic directly or using the
                  appointment form on our website. Our team will help you schedule a
                  convenient time for your visit.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  </section>
    </div>
  );
}
