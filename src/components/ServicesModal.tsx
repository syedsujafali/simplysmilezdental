import React from 'react';
import { Link } from 'react-router-dom';

interface ModalServiceItem {
  title: string;
  desc: string;
  icon: string;
  path: string;
}

const modalServices: ModalServiceItem[] = [
  {
    title: 'Composite Fillings',
    desc: 'Tooth-colored resin restorations',
    icon: 'fa-fill-drip',
    path: '/services/composite-fillings'
  },
  {
    title: 'Crowns & Bridges',
    desc: 'Durable ceramic & zirconia crowns',
    icon: 'fa-crown',
    path: '/services/crowns'
  },
  {
    title: 'Veneers',
    desc: 'Porcelain veneers for a perfect smile',
    icon: 'fa-smile',
    path: '/services/veneers'
  },
  {
    title: 'Braces & Invisalign',
    desc: 'Teeth straightening & clear aligners',
    icon: 'fa-teeth-open',
    path: '/services/braces'
  },
  {
    title: 'Laser Teeth Whitening',
    desc: 'Instant brightening & stain removal',
    icon: 'fa-wand-magic-sparkles',
    path: '/services/laser-teeth-whitening'
  },
  {
    title: 'Laser Root Canal Therapy',
    desc: 'Painless & precision RCT treatment',
    icon: 'fa-microscope',
    path: '/services/laser-root-canal'
  },
  {
    title: 'Laser Gum Surgery',
    desc: 'Minimally invasive periodontal care',
    icon: 'fa-hand-holding-medical',
    path: '/services/laser-gum-surgery'
  },
  {
    title: 'Dental Implants',
    desc: 'Permanent natural tooth replacement',
    icon: 'fa-tooth',
    path: '/services/dental-implants'
  },
  {
    title: 'Pediatric Dentistry',
    desc: 'Gentle dental care for kids',
    icon: 'fa-child',
    path: '/services/pediatric-dentistry'
  },
  {
    title: 'Wisdom Tooth Extractions',
    desc: 'Safe & comfortable tooth removal',
    icon: 'fa-user-doctor',
    path: '/services/wisdom-tooth-extraction'
  }
];

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ServicesModal({ isOpen, onClose }: ServicesModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="services-modal-backdrop show"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="services-modal-content">
        <div className="services-modal-header">
          <div className="d-flex align-items-center">
            <div className="services-modal-icon-header">
              <i className="fa-solid fa-tooth"></i>
            </div>
            <div>
              <h5 className="services-modal-title">Our Dental Services</h5>
              <p className="services-modal-subtitle">Select a service to view details</p>
            </div>
          </div>
          <button
            type="button"
            className="services-modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="services-modal-body">
          <Link
            to="/all-services"
            onClick={onClose}
            className="services-modal-item featured-item"
          >
            <div className="item-icon-box featured">
              <i className="fa-solid fa-layer-group"></i>
            </div>
            <div className="item-text flex-grow-1">
              <div className="item-title">All Services</div>
              <div className="item-desc">Browse our complete range of treatments</div>
            </div>
            <i className="fa-solid fa-arrow-right item-arrow text-primary"></i>
          </Link>

          <div className="services-modal-divider">Dental Treatments</div>

          {modalServices.map((s: ModalServiceItem, idx: number) => (
            <Link
              key={idx}
              to={s.path}
              onClick={onClose}
              className="services-modal-item"
            >
              <div className="item-icon-box">
                <i className={`fa-solid ${s.icon}`}></i>
              </div>
              <div className="item-text flex-grow-1">
                <div className="item-title">{s.title}</div>
                <div className="item-desc">{s.desc}</div>
              </div>
              <i className="fa-solid fa-chevron-right item-arrow text-muted" style={{ fontSize: '12px' }}></i>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
