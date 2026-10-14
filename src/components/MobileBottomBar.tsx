'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from './Link';
import { usePathname } from 'next/navigation';

interface MobileBottomBarProps {
  onOpenServices?: () => void;
}

const serviceItems = [
  { title: 'All Services', path: '/all-services', icon: 'fa-layer-group', isHeader: true },
  { title: 'Braces & Invisalign', path: '/services/braces', icon: 'fa-teeth-open' },
  { title: 'Pediatric Dentistry', path: '/services/pediatric-dentistry', icon: 'fa-child' },
  { title: 'Dental Implants', path: '/services/dental-implants', icon: 'fa-tooth' },
  { title: 'Microscopic Root Canal', path: '/services/microscopic-root-canal', icon: 'fa-microscope' },
  { title: 'Dental Crowns', path: '/services/crowns', icon: 'fa-crown' },
  { title: 'Dental Veneers', path: '/services/veneers', icon: 'fa-smile' },
  { title: 'Composite Fillings', path: '/services/composite-fillings', icon: 'fa-fill-drip' },
  { title: 'Laser Teeth Whitening', path: '/services/laser-teeth-whitening', icon: 'fa-wand-magic-sparkles' },
  { title: 'Laser Gum Surgery', path: '/services/laser-gum-surgery', icon: 'fa-hand-holding-medical' },
  { title: 'Wisdom Extractions', path: '/services/wisdom-tooth-extraction', icon: 'fa-user-doctor' },
];

export default function MobileBottomBar({ onOpenServices }: MobileBottomBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropupRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropup when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scrolling when dropup is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('services-dropup-open'); document.documentElement.classList.add('services-dropup-open');
    } else {
      document.body.classList.remove('services-dropup-open'); document.documentElement.classList.remove('services-dropup-open');
    }
    return () => {
      document.body.classList.remove('services-dropup-open'); document.documentElement.classList.remove('services-dropup-open');
    };
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropupRef.current && !dropupRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const toggleDropup = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mobile-bottom-bar-wrapper" ref={dropupRef}>
      {/* Backdrop overlay when dropup is open */}
      {isOpen && (
        <div
          className="mobile-services-dropup-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Services Dropup Menu */}
      <div className={`mobile-services-dropup ${isOpen ? 'show' : ''}`} role="menu" aria-label="Services Menu">
        <div className="dropup-header">
          <div className="dropup-header-title">
            <i className="fa-solid fa-tooth"></i>
            <span>Our Dental Services</span>
          </div>
          <button
            type="button"
            className="dropup-close-btn"
            onClick={() => setIsOpen(false)}
            aria-label="Close dropup menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="dropup-list">
          {serviceItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`dropup-item ${item.isHeader ? 'featured' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <div className="dropup-icon">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <span className="dropup-label">{item.title}</span>
              <i className="fa-solid fa-chevron-right dropup-arrow"></i>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Fixed Bar */}
      <div className="mobile-bottom-bar">
        <a href="tel:+917799376656" className="mobile-bar-item">
          <i className="fa-solid fa-phone"></i>
          <span>Call</span>
        </a>

        <button
          type="button"
          className={`mobile-bar-item ${isOpen ? 'active-dropup' : ''}`}
          onClick={toggleDropup}
          aria-label="Services Menu"
          aria-expanded={isOpen}
        >
          <i className={`fa-solid ${isOpen ? 'fa-chevron-down' : 'fa-tooth'}`}></i>
          <span>Services {isOpen ? '▲' : '▲'}</span>
        </button>

        <a
          href="https://maps.app.goo.gl/wvkijcKcuaGCoHTq9"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-item"
        >
          <i className="fa-solid fa-location-dot"></i>
          <span>Location</span>
        </a>

        <a
          href="https://wa.me/917799376656"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-bar-item whatsapp-item"
        >
          <i className="fa-brands fa-whatsapp"></i>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
