import React from 'react';

interface MobileBottomBarProps {
  onOpenServices: () => void;
}

export default function MobileBottomBar({ onOpenServices }: MobileBottomBarProps) {
  return (
    <div className="mobile-bottom-bar">
      <a href="tel:+919603338904" className="mobile-bar-item">
        <i className="fa-solid fa-phone"></i>
        <span>Call</span>
      </a>
      <button
        type="button"
        className="mobile-bar-item"
        onClick={onOpenServices}
        aria-label="Services"
      >
        <i className="fa-solid fa-tooth"></i>
        <span>Services</span>
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
  );
}
