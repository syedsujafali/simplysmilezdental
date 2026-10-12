import React from 'react';

interface AppointmentCtaProps {
  title?: string;
  subtitle?: string;
}

export default function AppointmentCta({
  title = 'Schedule Your Dental Consultation Today',
  subtitle = 'Experience personalized dental care from expert specialists in Shaikpet, Hyderabad.'
}: AppointmentCtaProps) {
  return (
    <section className="py-5" style={{ background: 'linear-gradient(135deg, #0b2545 0%, #134074 100%)', color: 'white' }}>
      <div className="container">
        <div className="row align-items-center text-center text-md-left">
          <div className="col-md-8 mb-4 mb-md-0 text-left">
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff' }} className="mb-2">
              {title}
            </h2>
            <p style={{ fontSize: '16px', color: '#e2e8f0', marginBottom: '15px' }}>
              {subtitle}
            </p>
            <div style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.6 }}>
              <p className="mb-1">
                <i className="fa-solid fa-phone mr-2 text-info" style={{ marginRight: '8px' }}></i>{' '}
                <strong>Call us:</strong>{' '}
                <a href="tel:+917799376656" className="text-white">+91 77993 76656</a> /{' '}
                <a href="tel:+919603338904" className="text-white">+91 96033 38904</a>
              </p>
              <p className="mb-0">
                <i className="fa-solid fa-location-dot mr-2 text-info" style={{ marginRight: '8px' }}></i>{' '}
                <strong>Visit us:</strong> P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad – 500008.
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
            <a
              href="https://wa.me/917799376656"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg px-4 py-3 font-weight-bold shadow-lg"
              style={{
                borderRadius: '30px',
                backgroundColor: '#0284c7',
                borderColor: '#0284c7',
                display: 'inline-block'
              }}
            >
              <i className="fa-brands fa-whatsapp mr-2" style={{ marginRight: '8px' }}></i> Book via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
