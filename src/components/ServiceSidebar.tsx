import React from 'react';
import Link from './Link';

const quickServices = [
  { name: 'All Services', path: '/all-services', icon: 'fa-layer-group', highlight: true },
  { name: 'Braces & Clear Aligners (Invisalign)', path: '/services/braces', icon: 'fa-teeth-open' },
  { name: 'Pediatric Dentistry', path: '/services/pediatric-dentistry', icon: 'fa-child' },
  { name: 'Dental Implants', path: '/services/dental-implants', icon: 'fa-tooth' },
  { name: 'Microscopic Root Canal Treatment', path: '/services/microscopic-root-canal', icon: 'fa-microscope' },
  { name: 'Dental Crowns', path: '/services/crowns', icon: 'fa-crown' },
  { name: 'Dental Veneers', path: '/services/veneers', icon: 'fa-smile' },
  { name: 'Composite Fillings', path: '/services/composite-fillings', icon: 'fa-fill-drip' },
  { name: 'Laser Teeth Whitening', path: '/services/laser-teeth-whitening', icon: 'fa-wand-magic-sparkles' },
  { name: 'Laser Gum Surgery & Care', path: '/services/laser-gum-surgery', icon: 'fa-hand-holding-medical' },
  { name: 'Wisdom Tooth Extractions', path: '/services/wisdom-tooth-extraction', icon: 'fa-user-doctor' },
];

export default function ServiceSidebar() {
  return (
    <div className="sidebar-box p-4 bg-light rounded shadow-sm mb-4">
      <h3 className="h5 font-weight-bold mb-3 pb-2 border-bottom" style={{ color: '#0d3b66' }}>
        Our Treatments
      </h3>
      <ul className="list-unstyled mb-0" style={{ fontSize: '14.5px' }}>
        {quickServices.map((s, idx) => (
          <li key={idx} className="mb-2">
            <Link
              to={s.path}
              className={`d-flex align-items-center p-2 rounded text-decoration-none ${
                s.highlight ? 'bg-primary text-white font-weight-bold' : 'text-dark bg-white'
              }`}
              style={{
                transition: 'all 0.2s',
                border: '1px solid #e2e8f0',
                backgroundColor: s.highlight ? '#00b7ff' : '#ffffff',
                color: s.highlight ? '#ffffff' : '#334155'
              }}
            >
              <i className={`fa-solid ${s.icon} mr-2`} style={{ width: '20px', marginRight: '8px' }}></i>
              <span>{s.name}</span>
              <i className="fa-solid fa-chevron-right ml-auto" style={{ fontSize: '11px', marginLeft: 'auto' }}></i>
            </Link>
          </li>
        ))}
      </ul>

      {/* Quick Contact Card */}
      <div className="mt-4 p-3 rounded text-white" style={{ background: '#0d3b66' }}>
        <h4 className="h6 font-weight-bold text-white mb-2">Need Immediate Help?</h4>
        <p style={{ fontSize: '13px', marginBottom: '10px', color: '#cbd5e1' }}>
          Call our expert dental team for appointment scheduling.
        </p>
        <a href="tel:+917799376656" className="btn btn-sm btn-info btn-block font-weight-bold text-white w-100 d-block text-center py-2">
          <i className="fa-solid fa-phone mr-1"></i> +91 77993 76656
        </a>
      </div>
    </div>
  );
}
