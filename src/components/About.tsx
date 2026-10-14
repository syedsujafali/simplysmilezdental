import React from 'react';
import Link from './Link';

export default function About() {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb pb-md-2" id="about">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-12 wrap-about py-4 py-md-5">
            <div className="heading-section mb-4">
              <div className="pl-md-5 ml-md-5 pt-md-2">
                <span className="subheading mb-2">
                  <h1 style={{ fontSize: '32px', fontWeight: 700, color: '#0d3b66' }}>Welcome to Simply Smilez</h1>
                </span>
              </div>
            </div>
            <div className="pl-md-5 ml-md-5 mb-5">
              <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.8 }}>
                SIMPLY SMILEZ DENTAL IS COMMITTED TO PROVIDE A POSITIVE EXPERIENCE FOR EACH PATIENT. COMBINING THIS
                ATTITUDE OF COMFORT AND SERVICE WITH TECHNOLOGY, WE AIM TO OFFER NEW STANDARDS OF DENTAL CARE.
              </p>
              <p style={{ fontSize: '15px', color: '#4b5563', lineHeight: 1.8 }}>
                Most Traditional Insurance Filed Dentures Repaired &amp; Relied On Same Day Root Canal Treatment Dentures,
                Partials &amp; Overlay Denture Porcelain Veneers &amp; Crowns White Fillings &amp; Bonding Invisalign Wireless.
              </p>

              <div className="mt-4 pt-4 border-top">
                <h2 style={{ fontSize: '26px', fontWeight: 700, color: '#0b2545' }} className="mb-2">
                  Dental Clinic in Shaikpet, Hyderabad
                </h2>
                <h3 style={{ fontSize: '19px', fontWeight: 600, color: '#184e77' }} className="mb-3">
                  Quality Dental Care for Children and Adults
                </h3>
                <p>
                  Looking for a trusted dental clinic in Shaikpet, Hyderabad? Simply Smilez Dental Clinic provides
                  comprehensive dental care for children and adults, with personalized treatments designed to support your
                  oral health and give you a confident smile.
                </p>
                <p>
                  We serve patients in Shaikpet and nearby areas including Manikonda, Kondapur, Jubilee Hills, and
                  Gachibowli.
                </p>

                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0b2545' }} className="mt-4 mb-3">
                  Our Dental Treatments
                </h4>
                <ul style={{ lineHeight: 1.8, color: '#4b5563' }} className="pl-3 mb-4">
                  <li>
                    <Link to="/services/braces" className="treatment-link">Braces &amp; Clear Aligners (Invisalign)</Link> – Advanced orthodontic treatment to improve tooth alignment and smile aesthetics.
                  </li>
                  <li>
                    <Link to="/services/pediatric-dentistry" className="treatment-link">Pediatric Dentistry</Link> – Gentle, child-friendly preventive and restorative dental care for growing smiles.
                  </li>
                  <li>
                    <Link to="/services/dental-implants" className="treatment-link">Dental Implants</Link> – Permanent tooth replacement designed to restore natural function, comfort, and appearance.
                  </li>
                  <li>
                    <Link to="/services/microscopic-root-canal" className="treatment-link">Microscopic Root Canal Treatment</Link> – High-precision surgical microscope-guided treatment to eliminate infection and save your natural tooth.
                  </li>
                  <li>
                    <Link to="/services/crowns" className="treatment-link">Dental Crowns</Link> – Durable custom restorations to strengthen and protect damaged or weakened teeth.
                  </li>
                  <li>
                    <Link to="/services/veneers" className="treatment-link">Dental Veneers</Link> – Custom porcelain and composite laminates to enhance and transform your smile.
                  </li>
                  <li>
                    <Link to="/services/composite-fillings" className="treatment-link">Composite Fillings</Link> – Natural tooth-coloured aesthetic fillings for invisible cavity restoration.
                  </li>
                  <li>
                    <Link to="/services/laser-teeth-whitening" className="treatment-link">Laser Teeth Whitening</Link> – Professional in-office brightening and stain removal for a radiant smile.
                  </li>
                  <li>
                    <Link to="/services/laser-gum-surgery" className="treatment-link">Laser Gum Surgery &amp; Care</Link> – Minimally invasive laser periodontal care for healthier gums.
                  </li>
                  <li>
                    <Link to="/services/wisdom-tooth-extraction" className="treatment-link">Wisdom Tooth Extractions</Link> – Safe, gentle assessment and comfortable extraction for problematic wisdom teeth.
                  </li>
                </ul>

                <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#0b2545' }} className="mt-4 mb-2">
                  Your Local Dental Clinic in Hyderabad
                </h4>
                <p>
                  Whether you need Invisalign in Shaikpet, Invisalign First for Kids, a root canal, dental implants,
                  braces, or regular dental care, our experienced dental team is committed to providing comfortable and
                  personalized treatment.
                </p>
                <p>
                  Conveniently serving patients from Shaikpet, Manikonda, Kondapur, Jubilee Hills, and Gachibowli, Simply
                  Smilez Dental Clinic is dedicated to helping families maintain healthy teeth and beautiful smiles.
                </p>
                <p className="font-weight-bold mb-0 p-3 rounded" style={{ backgroundColor: '#fff3cd', borderLeft: '4px solid #008dcc', color: '#0b2545' }}>
                  <a href="/contact" style={{ color: '#008dcc', textDecoration: 'underline' }}>Book an appointment today</a> and take the next step toward healthier teeth and a confident smile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
