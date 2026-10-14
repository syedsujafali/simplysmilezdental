'use client';

import React, { useState } from 'react';
import Link from './Link';

export default function Footer() {
  const currentYear = 2026;
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (name: string) => {
    setOpenAccordion(prev => prev === name ? null : name);
  };

  return (
    <footer className="footer-main" id="contact">
      <div className="container">
        {/* =================================================================
            1. DESKTOP VIEW (>= 768px): 4-Column Layout
            ================================================================= */}
        <div className="d-none d-md-block">
          <div className="row">
            {/* Column 1: Brand & Action Buttons */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="footer-logo-badge mb-3">
                <img
                  src="/images/logo-3.webp"
                  alt="Simply Smilez Dental"
                  className="img-fluid"
                  style={{ maxHeight: '46px', width: 'auto' }}
                />
              </div>
              <p className="footer-desc mb-4">
                Comprehensive, painless dental care in Shaikpet / Manikonda, Hyderabad. Specializing in Invisalign, microscopic root canal treatments, pediatric dentistry, and dental implants.
              </p>
              <div className="footer-cta-btns d-flex flex-wrap align-items-center">
                <a href="tel:+917799376656" className="btn-footer-call mr-2 mb-2">
                  <i className="fa-solid fa-phone mr-1"></i> Call Clinic
                </a>
                <a
                  href="https://wa.me/+917799376656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-footer-whatsapp mb-2"
                >
                  <i className="fa-brands fa-whatsapp mr-1"></i> WhatsApp
                </a>
              </div>
            </div>

            {/* Column 2: Dental Treatments (Split into 2 Columns: 5 and 5) */}
            <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
              <h4 className="footer-heading">Dental Treatments</h4>
              <div className="footer-heading-bar"></div>
              <div className="row">
                {/* Treatments Part 1 (First 5) */}
                <div className="col-6 pr-1">
                  <ul className="footer-links-list list-unstyled mb-0">
                    <li>
                      <Link to="/services/braces">
                        <i className="fa-solid fa-chevron-right link-arrow"></i> Braces &amp; Invisalign
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/pediatric-dentistry">
                        <i className="fa-solid fa-chevron-right link-arrow"></i> Pediatric Dentistry
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/dental-implants">
                        <i className="fa-solid fa-chevron-right link-arrow"></i> Dental Implants
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/microscopic-root-canal">
                        <i className="fa-solid fa-chevron-right link-arrow"></i> Root Canal Treatment
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/crowns">
                        <i className="fa-solid fa-chevron-right link-arrow"></i> Dental Crowns
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Treatments Part 2 (Second 5) */}
                <div className="col-6 pl-1">
                  <ul className="footer-links-list list-unstyled mb-0">
                    <li>
                      <Link to="/services/veneers">
                        <i className="fa-solid fa-chevron-right link-arrow"></i> Dental Veneers
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/composite-fillings">
                        <i className="fa-solid fa-chevron-right link-arrow"></i> Composite Fillings
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/laser-teeth-whitening">
                        <i className="fa-solid fa-chevron-right link-arrow"></i> Teeth Whitening
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/laser-gum-surgery">
                        <i className="fa-solid fa-chevron-right link-arrow"></i> Laser Gum Surgery
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/wisdom-tooth-extraction">
                        <i className="fa-solid fa-chevron-right link-arrow"></i> Wisdom Extractions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 3: Contact, Timings & Clear Get Directions Button (Without Map) */}
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <h4 className="footer-heading">Contact &amp; Location</h4>
              <div className="footer-heading-bar"></div>

              <div className="footer-contact-item d-flex align-items-start mb-2">
                <i className="fa-solid fa-location-dot footer-contact-icon mr-2 mt-1"></i>
                <div>
                  <strong className="d-block footer-contact-label">Address:</strong>
                  <a
                    href="https://www.google.com/maps/place/Simply+Smilez+Dental/@17.4110386,78.3924029,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-0 footer-contact-text text-decoration-none d-block"
                    style={{ color: '#94a3b8', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#38bdf8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                    title="Open Simply Smilez Dental in Google Maps"
                  >
                    P.V.Reddy Complex 1st Floor, Dwaraka Nagar Colony, O.U Colony Road, Shaikpet, Hyderabad, Telangana 500008
                  </a>
                </div>
              </div>

              {/* High Visibility Get Directions Button */}


              <div className="row mt-2">
                <div className="col-sm-6 mb-2">
                  <strong className="d-block footer-contact-label">
                    <i className="fa-regular fa-clock mr-1 text-info"></i> Timings:
                  </strong>
                  <p className="mb-0 footer-contact-text" style={{ fontSize: '12.5px' }}>
                    Mon - Sat: 10:00am - 8:30pm<br />
                    Sunday: 10:30am - 1:00pm
                  </p>
                </div>

                <div className="col-sm-6 mb-2">
                  <strong className="d-block footer-contact-label">
                    <i className="fa-solid fa-phone mr-1 text-info"></i> Phone:
                  </strong>
                  <p className="mb-0 footer-contact-phones" style={{ fontSize: '13px' }}>
                    <a href="tel:+917799376656">+91 77993 76656</a><br />
                    <a href="tel:+919603338904">+91 96033 38904</a>
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div className="d-flex align-items-center mt-2 pt-2 border-top border-secondary">
                <span className="text-muted mr-3" style={{ fontSize: '12.5px' }}>Connect with us:</span>
                <div className="footer-social-icons d-flex align-items-center">
                  <a
                    href="https://www.instagram.com/sush_micro_dontist?stkn=cTMxejQ2ejl6djR0&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="footer-social-btn"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/share/1F4XvjRLHq/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="footer-social-btn"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://wa.me/917799376656"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="footer-social-btn"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Bottom Bar: Copyright & Navigation */}
          <div className="footer-bottom-bar mt-5 pt-4">
            <div className="row align-items-center">
              <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
                <p className="mb-0 footer-copyright">
                  &copy; {currentYear} Simply Smilez Dental Clinic. All rights reserved.
                </p>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <ul className="footer-bottom-nav list-inline mb-0">
                  <li className="list-inline-item mr-3">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="list-inline-item mr-3">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="list-inline-item mr-3">
                    <Link to="/doctors">Doctors</Link>
                  </li>
                  <li className="list-inline-item mr-3">
                    <Link to="/all-services">Treatments</Link>
                  </li>
                  <li className="list-inline-item mr-3">
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================================
            2. MOBILE VIEW (< 768px): Modern Collapsible Accordion Dropdown
            ================================================================= */}
        <div className="d-block d-md-none footer-mobile-view">
          {/* Logo Badge & Summary */}
          <div className="footer-logo-badge mb-3">
            <img
              src="/images/logo-3.webp"
              alt="Simply Smilez Dental"
              className="img-fluid"
              style={{ maxHeight: '44px', width: 'auto' }}
            />
          </div>
          <p className="footer-desc mb-4" style={{ maxWidth: '100%' }}>
            Comprehensive, painless dental care in Shaikpet / Manikonda, Hyderabad.
          </p>

          {/* Accordion 1: DENTAL TREATMENTS */}
          <div className="footer-accordion-item">
            <button
              type="button"
              className="footer-accordion-header"
              onClick={() => toggleAccordion('treatments')}
              aria-expanded={openAccordion === 'treatments'}
            >
              <span>DENTAL TREATMENTS</span>
              <i
                className="fa-solid fa-chevron-down chevron"
                style={{
                  transform: openAccordion === 'treatments' ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              ></i>
            </button>
            {openAccordion === 'treatments' && (
              <div className="footer-accordion-body">
                <ul className="footer-links-list list-unstyled mb-0">
                  <li>
                    <Link to="/services/braces">
                      <i className="fa-solid fa-chevron-right link-arrow"></i> Braces &amp; Clear Aligners (Invisalign)
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/pediatric-dentistry">
                      <i className="fa-solid fa-chevron-right link-arrow"></i> Pediatric Dentistry
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/dental-implants">
                      <i className="fa-solid fa-chevron-right link-arrow"></i> Dental Implants
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/microscopic-root-canal">
                      <i className="fa-solid fa-chevron-right link-arrow"></i> Microscopic Root Canal Treatment
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/crowns">
                      <i className="fa-solid fa-chevron-right link-arrow"></i> Dental Crowns
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/veneers">
                      <i className="fa-solid fa-chevron-right link-arrow"></i> Dental Veneers
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/composite-fillings">
                      <i className="fa-solid fa-chevron-right link-arrow"></i> Composite Fillings
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/laser-teeth-whitening">
                      <i className="fa-solid fa-chevron-right link-arrow"></i> Laser Teeth Whitening
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/laser-gum-surgery">
                      <i className="fa-solid fa-chevron-right link-arrow"></i> Laser Gum Surgery &amp; Care
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/wisdom-tooth-extraction">
                      <i className="fa-solid fa-chevron-right link-arrow"></i> Wisdom Tooth Extractions
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Accordion 2: QUICK LINKS */}
          <div className="footer-accordion-item">
            <button
              type="button"
              className="footer-accordion-header"
              onClick={() => toggleAccordion('links')}
              aria-expanded={openAccordion === 'links'}
            >
              <span>QUICK LINKS</span>
              <i
                className="fa-solid fa-chevron-down chevron"
                style={{
                  transform: openAccordion === 'links' ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              ></i>
            </button>
            {openAccordion === 'links' && (
              <div className="footer-accordion-body">
                <ul className="footer-links-list list-unstyled mb-0">
                  <li>
                    <Link to="/"><i className="fa-solid fa-chevron-right link-arrow"></i> Home</Link>
                  </li>
                  <li>
                    <Link to="/about"><i className="fa-solid fa-chevron-right link-arrow"></i> About Us</Link>
                  </li>
                  <li>
                    <Link to="/doctors"><i className="fa-solid fa-chevron-right link-arrow"></i> Doctors &amp; Specialists</Link>
                  </li>
                  <li>
                    <Link to="/all-services"><i className="fa-solid fa-chevron-right link-arrow"></i> All Treatments</Link>
                  </li>
                  <li>
                    <Link to="/gallery"><i className="fa-solid fa-chevron-right link-arrow"></i> Clinic Gallery</Link>
                  </li>
                  <li>
                    <Link to="/testimonials"><i className="fa-solid fa-chevron-right link-arrow"></i> Patient Testimonials</Link>
                  </li>
                  <li>
                    <Link to="/contact"><i className="fa-solid fa-chevron-right link-arrow"></i> Contact Us</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Accordion 3: CLINIC TIMINGS */}
          <div className="footer-accordion-item">
            <button
              type="button"
              className="footer-accordion-header"
              onClick={() => toggleAccordion('timings')}
              aria-expanded={openAccordion === 'timings'}
            >
              <span>CLINIC TIMINGS</span>
              <i
                className="fa-solid fa-chevron-down chevron"
                style={{
                  transform: openAccordion === 'timings' ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              ></i>
            </button>
            {openAccordion === 'timings' && (
              <div className="footer-accordion-body">
                <div className="footer-contact-item d-flex align-items-start py-2">
                  <i className="fa-regular fa-clock footer-contact-icon mr-2 mt-1"></i>
                  <div>
                    <strong className="d-block footer-contact-label">Working Hours:</strong>
                    <p className="mb-1 footer-contact-text">Monday - Saturday: 10:00am - 8:30pm</p>
                    <p className="mb-0 footer-contact-text">Sunday: 10:30am - 1:00pm</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Accordion 4: FIND OUR CLINIC */}
          <div className="footer-accordion-item">
            <button
              type="button"
              className="footer-accordion-header"
              onClick={() => toggleAccordion('map')}
              aria-expanded={openAccordion === 'map'}
            >
              <span>FIND OUR CLINIC</span>
              <i
                className="fa-solid fa-chevron-down chevron"
                style={{
                  transform: openAccordion === 'map' ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              ></i>
            </button>
            {openAccordion === 'map' && (
              <div className="footer-accordion-body">
                <div className="footer-map-card mb-3 mt-2">
                  <iframe
                    src="https://www.google.com/maps?q=Simply%20Smilez%20Dental%20Clinic%2C%20Shaikpet%2C%20Hyderabad&output=embed"
                    title="Simply Smilez Dental Clinic location mobile"
                    width="100%"
                    height="140"
                    style={{ border: 0, display: 'block', borderRadius: '12px' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="d-flex align-items-center justify-content-between pt-1 mb-2">
                  <a
                    href="https://maps.app.goo.gl/wvkijcKcuaGCoHTq9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-directions-link"
                  >
                    <i className="fa-solid fa-location-arrow mr-1"></i> Get Directions &rarr;
                  </a>
                  <div className="footer-social-icons d-flex align-items-center">
                    <a
                      href="https://www.instagram.com/sush_micro_dontist?stkn=cTMxejQ2ejl6djR0&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="footer-social-btn"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/share/1F4XvjRLHq/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="footer-social-btn"
                    >
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://wa.me/917799376656"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="footer-social-btn"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* INQUIRIES & APPOINTMENTS Section */}
          <div className="footer-mobile-inquiries mt-4 pt-2">
            <h5 className="footer-mobile-inquiries-title mb-3">
              INQUIRIES &amp; APPOINTMENTS
            </h5>
            <p className="footer-contact-text mb-3" style={{ lineHeight: 1.6 }}>
              P.V.Reddy Complex 1st Floor, Dwaraka Nagar Colony, O.U Colony Road, Shaikpet, Hyderabad, Telangana 500008
            </p>

            <div className="footer-mobile-contact-line d-flex align-items-center mb-2">
              <i className="fa-solid fa-phone footer-contact-icon mr-2"></i>
              <span>
                Call:{' '}
                <a href="tel:+917799376656" className="text-cyan font-weight-bold">77993 76656</a>
                {' '}&bull;{' '}
                <a href="tel:+919603338904" className="text-cyan font-weight-bold">96033 38904</a>
              </span>
            </div>

            <div className="footer-mobile-contact-line d-flex align-items-center mb-4">
              <i className="fa-regular fa-envelope footer-contact-icon mr-2"></i>
              <a href="mailto:info.invisaligndental@gmail.com" className="footer-contact-email">
                info.invisaligndental@gmail.com
              </a>
            </div>

            {/* Action Buttons Stack */}
            <div className="footer-mobile-buttons">
              <a
                href="https://wa.me/917799376656"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-mobile-whatsapp-cta mb-2"
              >
                <i className="fa-brands fa-whatsapp mr-2"></i> BOOK ON WHATSAPP
              </a>
              <a
                href="tel:+917799376656"
                className="btn-mobile-call-cta mb-3"
              >
                <i className="fa-solid fa-phone mr-2"></i> CALL NOW: 77993 76656
              </a>
            </div>
          </div>

          {/* Mobile Bottom Copyright */}
          <div className="footer-mobile-copyright text-center pt-3 border-top" style={{ borderColor: 'rgba(255, 255, 255, 0.08) !important' }}>
            <p className="mb-0 footer-copyright">
              &copy; {currentYear} Simply Smilez Dental Clinic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
