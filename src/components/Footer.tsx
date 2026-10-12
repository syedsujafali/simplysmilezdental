import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section pt-5" id="contact" style={{ backgroundColor: '#0d1b2a', color: '#cbd5e1' }}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-8">
            <div className="ftco-footer-widget mb-5">
              <div>
                <p style={{ color: '#e2e8f0', fontSize: '14.5px', lineHeight: 1.8 }}>
                  Simply Smilez Dental Clinic provides comprehensive dental care for children and adults in Shaikpet, Hyderabad.<br />
                  Our services include Invisalign, Invisalign First for Kids, dental implants, braces, root canal treatment, dental crowns, veneers, teeth whitening, pediatric dentistry, wisdom tooth extraction, and general dental care.
                </p>
              </div>

              <b className="ftco-heading-2 d-block text-white mt-4 mb-2" style={{ fontWeight: 600, fontSize: '18px' }}>
                Our Address
              </b>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start">
                    <span className="fa-solid fa-location-dot mr-3 mt-1" style={{ color: '#00b7ff', marginRight: '12px' }}></span>
                    <span className="text">
                      P.V.Reddy Complex 1st Floor, Dwaraka Nagar Colony,<br />
                      O.U Colony Road. Shaikpet , Hyderabad, 500008
                    </span>
                  </li>
                </ul>
              </div>

              <b className="ftco-heading-2 d-block text-white mt-4 mb-2" style={{ fontWeight: 600, fontSize: '18px' }}>
                Opening Hours
              </b>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center">
                    <span className="fa-regular fa-clock mr-3" style={{ color: '#00b7ff', marginRight: '12px' }}></span>
                    <span>
                      Mon - Sat: 10:00am - 9:00pm &nbsp;|&nbsp; Sun: 11:00am - 4:00pm
                    </span>
                  </li>
                </ul>
              </div>

              <b className="ftco-heading-2 d-block text-white mt-4 mb-2" style={{ fontWeight: 600, fontSize: '18px' }}>
                Call
              </b>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center">
                    <span className="fa-solid fa-phone mr-3" style={{ color: '#00b7ff', marginRight: '12px' }}></span>
                    <span className="text">
                      <a href="tel:+919603338904" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: 600 }}>96033 38904</a>
                      {' '}|{' '}
                      <a href="tel:+917799376656" style={{ color: '#e2e8f0', textDecoration: 'none', fontWeight: 600 }}>77993 76656</a>
                    </span>
                  </li>
                </ul>
              </div>

              <b className="ftco-heading-2 d-block text-white mt-4 mb-2" style={{ fontWeight: 600, fontSize: '18px' }}>
                Email address
              </b>
              <div className="block-23 mb-3">
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center">
                    <span className="fa-solid fa-envelope mr-3" style={{ color: '#00b7ff', marginRight: '12px' }}></span>
                    <a href="mailto:info.invisaligndental@gmail.com" style={{ color: '#e2e8f0', textDecoration: 'none' }}>
                      info.invisaligndental@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 footer-maps">
            <div className="maps">
              <a href="#home">
                <img
                  src="/images/map.webp"
                  width="404"
                  height="93"
                  loading="lazy"
                  alt="Simply Smilez Dental Clinic Map"
                  className="img-fluid mb-3 rounded"
                />
              </a>
              <iframe
                src="https://www.google.com/maps?q=Simply%20Smilez%20Dental%20Clinic%2C%20Shaikpet%2C%20Hyderabad&output=embed"
                title="Simply Smilez Dental Clinic location"
                width="100%"
                height="240"
                style={{ border: 0, borderRadius: '8px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 text-center py-3" style={{ backgroundColor: '#070f18', margin: '0 -15px' }}>
            <p className="mb-0" style={{ color: '#94a3b8', fontSize: '13.5px' }}>
              &copy; {currentYear} All rights reserved | Simply Smilez Dental Clinic
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
