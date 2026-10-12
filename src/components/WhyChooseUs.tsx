import React from 'react';

interface ReasonItem {
  icon: string;
  title: string;
  desc: string;
}

const reasons: ReasonItem[] = [
  {
    icon: 'fa-user-doctor',
    title: 'Experienced Dental Team',
    desc: 'Our dentists provide care across orthodontics, Invisalign, pediatric dentistry, dental implants and general dental treatment.'
  },
  {
    icon: 'fa-hospital',
    title: 'Comprehensive Dental Care',
    desc: 'From routine dental care to advanced treatments, we provide a wide range of dental services for children and adults.'
  },
  {
    icon: 'fa-heart-pulse',
    title: 'Patient-Focused Care',
    desc: 'We focus on clear communication, comfortable treatment and personalized care for every patient.'
  },
  {
    icon: 'fa-microscope',
    title: 'Modern Dental Treatment',
    desc: 'We use modern dental techniques and equipment to support accurate diagnosis and effective treatment.'
  },
  {
    icon: 'fa-location-dot',
    title: 'Convenient Location',
    desc: 'Our dental clinic is located on O.U. Colony Road in Shaikpet, Hyderabad.'
  },
  {
    icon: 'fa-users',
    title: 'Family Dental Care',
    desc: 'We provide dental services for children, teenagers and adults under one roof.'
  }
];

export default function WhyChooseUs() {
  return (
    <>
      <section className="ftco-section bg-light py-5">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-8 text-center heading-section">
              <h2 className="mb-3" style={{ fontSize: '28px', fontWeight: 700, color: '#0b2545' }}>
                Why Choose Simply Smilez Dental Clinic?
              </h2>
              <p style={{ color: '#6b7280', fontSize: '15px' }}>
                Discover why patients trust us for their family's complete dental care in Shaikpet, Hyderabad.
              </p>
            </div>
          </div>
          <div className="row">
            {reasons.map((r, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div
                  className="p-4 bg-white rounded shadow-sm h-100 border-top"
                  style={{ borderTop: '4px solid #0284c7 !important' }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="icon-box mr-3 d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: '#e0f2fe',
                        color: '#0284c7',
                        fontSize: '20px',
                        marginRight: '15px'
                      }}
                    >
                      <i className={`fa-solid ${r.icon}`}></i>
                    </div>
                    <h4 className="mb-0" style={{ fontSize: '18px', fontWeight: 700, color: '#0b2545' }}>
                      {r.title}
                    </h4>
                  </div>
                  <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: 0, lineHeight: 1.6 }}>
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blue CTA Banner */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #0b2545 0%, #134074 100%)', color: 'white' }}>
        <div className="container">
          <div className="row align-items-center text-center text-md-left">
            <div className="col-md-8 mb-4 mb-md-0 text-left">
              <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#ffffff' }} className="mb-2">
                Need a Dentist in Hyderabad?
              </h2>
              <p style={{ fontSize: '16px', color: '#e2e8f0', marginBottom: '15px' }}>
                Book an appointment with Simply Smilez Dental Clinic for personalized dental care.
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
                  <strong>Visit us:</strong>{' '}
                  <a
                    href="https://maps.app.goo.gl/wvkijcKcuaGCoHTq9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad – 500008.
                  </a>
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
                <i className="fa-brands fa-whatsapp mr-2" style={{ marginRight: '8px' }}></i> Book Your Dental Appointment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Parallax Banner */}
      <section
        className="ftco-section intro py-5"
        style={{
          backgroundImage: 'url(/images/bg_3.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative'
        }}
      >
        <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '40px 15px' }}>
          <div className="row">
            <div className="col-md-7">
              <h3 className="mb-4 text-white" style={{ fontSize: '32px', fontWeight: 700 }}>
                We promised to take care our patients and we delivered.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
