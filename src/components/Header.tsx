'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from './Link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onOpenServices: () => void;
}

interface SpecialtyMenuItem {
  name: string;
  path: string;
}

const specialtiesList: SpecialtyMenuItem[] = [
  { name: 'Braces & Clear Aligners (Invisalign)', path: '/services/braces' },
  { name: 'Pediatric Dentistry', path: '/services/pediatric-dentistry' },
  { name: 'Dental Implants', path: '/services/dental-implants' },
  { name: 'Microscopic Root Canal Treatment', path: '/services/microscopic-root-canal' },
  { name: 'Dental Crowns', path: '/services/crowns' },
  { name: 'Dental Veneers', path: '/services/veneers' },
  { name: 'Composite Fillings', path: '/services/composite-fillings' },
  { name: 'Laser Teeth Whitening', path: '/services/laser-teeth-whitening' },
  { name: 'Laser Gum Surgery & Care', path: '/services/laser-gum-surgery' },
  { name: 'Wisdom Tooth Extractions', path: '/services/wisdom-tooth-extraction' },
];

export default function Header({ onOpenServices }: HeaderProps) {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState<boolean>(false);
  const [mobileSpecialtiesOpen, setMobileSpecialtiesOpen] = useState<boolean>(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLLIElement>(null);
  const moreDropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setDropdownOpen(false);
    setMoreDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target as Node)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll and hide mobile bottom bar when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('mobile-menu-open');
      document.documentElement.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
      document.documentElement.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.documentElement.classList.remove('mobile-menu-open');
    };
  }, [drawerOpen]);

  // Close menus on page navigation
  useEffect(() => {
    setDrawerOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`ssd-header-wrapper ${isScrolled ? 'is-scrolled' : ''}`}>
      {/* 1. TOP NOTICE / UTILITY BAR */}
      <div className="ssd-topbar">
        <div className="container">
          <div className="ssd-topbar-content">
            {/* Promo banner */}
            <div className="ssd-promo-badge">
              <span className="ssd-pill-tag">
                <i className="fa-solid fa-bolt"></i> Special Offer
              </span>
              <span>
                <strong>30% OFF</strong> on Invisalign &amp; Dental Implants
              </span>
            </div>

            {/* Timings, emergency and socials */}
            <div className="ssd-topbar-actions d-none d-md-flex">
              <div className="ssd-topbar-item">
                <i className="fa-regular fa-clock"></i>
                <span>Mon - Sat: 10:00 AM - 8:30 PM | Sun: 10:30 AM - 1:00 PM</span>
              </div>

              <div className="ssd-topbar-socials">
                <a
                  href="https://wa.me/7799376656"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ssd-social-circle whatsapp"
                  title="Chat on WhatsApp"
                  aria-label="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
                <a
                  href="https://www.instagram.com/sush_micro_dontist?stkn=cTMxejQ2ejl6djR0&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ssd-social-circle instagram"
                  title="Follow on Instagram"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/share/1F4XvjRLHq/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ssd-social-circle facebook"
                  title="Follow on Facebook"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.google.com/maps/place/Simply+Smilez+Dental/@17.4110386,78.3924029,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ssd-social-circle"
                  title="Find on Google Maps"
                  aria-label="Google Maps Location"
                >
                  <i className="fa-solid fa-location-dot"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav className="ssd-navbar" aria-label="Main Navigation">
        <div className="container">
          <div className="ssd-nav-container">
            {/* Logo and clinic identity */}
            <Link to="/" className="ssd-brand" aria-label="Simply Smilez Dental Homepage">
              <img
                src="/images/logo-3.webp"
                alt="Simply Smilez Dental Clinic"
                className="ssd-brand-logo"
                width="280"
                height="70"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="ssd-nav-menu">
              <li className="ssd-nav-item">
                <Link to="/" className={`ssd-nav-link ${isActive('/') ? 'active' : ''}`}>
                  Home
                </Link>
              </li>

              <li className="ssd-nav-item">
                <Link to="/about" className={`ssd-nav-link ${isActive('/about') ? 'active' : ''}`}>
                  About Us
                </Link>
              </li>

              {/* Specialities Dropdown */}
              <li
                ref={dropdownRef}
                className={`ssd-nav-item ${dropdownOpen ? 'dropdown-open' : ''}`}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <div
                  className={`ssd-nav-link ${pathname.startsWith('/services') || isActive('/all-services') ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDropdownOpen((prev) => !prev);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setDropdownOpen((prev) => !prev);
                    }
                  }}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                >
                  Specialities <i className="fa-solid fa-chevron-down chevron"></i>
                </div>

                {/* Sleek Specialities Dropdown Panel */}
                <div className={`ssd-specialties-dropdown ${dropdownOpen ? 'show' : ''}`}>
                  <Link
                    to="/all-services"
                    className="ssd-spec-dropdown-top"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span>All Services</span>
                    <i className="fa-solid fa-arrow-right-long spec-arrow"></i>
                  </Link>

                  <div className="ssd-spec-dropdown-list">
                    {specialtiesList.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="ssd-spec-dropdown-item"
                        onClick={() => setDropdownOpen(false)}
                      >
                        <span className="ssd-spec-bullet"></span>
                        <span className="ssd-spec-name">{item.name}</span>
                        <i className="fa-solid fa-chevron-right ssd-spec-item-arrow"></i>
                      </Link>
                    ))}
                  </div>
                </div>
              </li>

              <li className="ssd-nav-item">
                <Link to="/blog" className={`ssd-nav-link ${isActive('/blog') ? 'active' : ''}`}>
                  Blog
                </Link>
              </li>

              <li className="ssd-nav-item">
                <Link to="/contact" className={`ssd-nav-link ${isActive('/contact') ? 'active' : ''}`}>
                  Contact
                </Link>
              </li>

              {/* More Dropdown (Doctors, Gallery, Testimonials) */}
              <li
                ref={moreDropdownRef}
                className={`ssd-nav-item ${moreDropdownOpen ? 'dropdown-open' : ''}`}
                onMouseEnter={() => setMoreDropdownOpen(true)}
                onMouseLeave={() => setMoreDropdownOpen(false)}
              >
                <div
                  className={`ssd-nav-link ${isActive('/doctors') || isActive('/gallery') || isActive('/testimonials') ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setMoreDropdownOpen((prev) => !prev);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setMoreDropdownOpen((prev) => !prev);
                    }
                  }}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                >
                  More <i className="fa-solid fa-chevron-down chevron"></i>
                </div>

                <div className={`ssd-specialties-dropdown ssd-more-dropdown ${moreDropdownOpen ? 'show' : ''}`} style={{ width: '220px' }}>
                  <div className="ssd-spec-dropdown-list">
                    <Link
                      to="/doctors"
                      className="ssd-spec-dropdown-item"
                      onClick={() => setMoreDropdownOpen(false)}
                    >
                      <i className="fa-solid fa-user-doctor mr-2" style={{ color: '#38bdf8', fontSize: '13px', width: '16px' }}></i>
                      <span className="ssd-spec-name">Doctors</span>
                      <i className="fa-solid fa-chevron-right ssd-spec-item-arrow"></i>
                    </Link>

                    <Link
                      to="/gallery"
                      className="ssd-spec-dropdown-item"
                      onClick={() => setMoreDropdownOpen(false)}
                    >
                      <i className="fa-solid fa-images mr-2" style={{ color: '#38bdf8', fontSize: '13px', width: '16px' }}></i>
                      <span className="ssd-spec-name">Gallery</span>
                      <i className="fa-solid fa-chevron-right ssd-spec-item-arrow"></i>
                    </Link>

                    <Link
                      to="/testimonials"
                      className="ssd-spec-dropdown-item"
                      onClick={() => setMoreDropdownOpen(false)}
                    >
                      <i className="fa-solid fa-comments mr-2" style={{ color: '#38bdf8', fontSize: '13px', width: '16px' }}></i>
                      <span className="ssd-spec-name">Testimonials</span>
                      <i className="fa-solid fa-chevron-right ssd-spec-item-arrow"></i>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>

            {/* Right Action Container: Quick Call, Appointment Button, Mobile Toggle */}
            <div className="ssd-nav-actions">
              {/* Direct Click to Call - Icon + Number only */}
              <a href="tel:+917799376656" className="ssd-quick-phone" title="Call: 77993 76656">
                <span className="ssd-quick-phone-icon">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <span className="ssd-quick-phone-number">77993 76656</span>
              </a>

              {/* Primary CTA Book Appointment - Desktop and tablet only */}
              <Link to="/contact" className="ssd-btn-appointment d-none d-md-inline-flex">
                <i className="fa-regular fa-calendar-check"></i>
                <span>Book Appointment</span>
              </Link>

              {/* Mobile Menu Hamburger Toggle */}
              <button
                type="button"
                className="ssd-mobile-toggle"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open Mobile Menu"
                aria-expanded={drawerOpen}
              >
                <i className="fa-solid fa-bars-staggered"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE OFF-CANVAS DRAWER */}
      <div
        className={`ssd-drawer-overlay ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />

      <aside className={`ssd-drawer ${drawerOpen ? 'open' : ''}`} aria-label="Mobile Navigation Menu">
        {/* Drawer Header */}
        <div className="ssd-drawer-header">
          <Link to="/" onClick={() => setDrawerOpen(false)}>
            <img
              src="/images/logo-3.webp"
              alt="Simply Smilez Dental"
              className="ssd-drawer-logo"
            />
          </Link>
          <button
            type="button"
            className="ssd-drawer-close"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close Mobile Menu"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Quick Call & WhatsApp Action Strip */}
        <div className="ssd-drawer-quick-actions">
          <a href="tel:+917799376656" className="ssd-drawer-quick-btn call">
            <i className="fa-solid fa-phone"></i> Call Now
          </a>
          <a
            href="https://wa.me/917799376656"
            target="_blank"
            rel="noopener noreferrer"
            className="ssd-drawer-quick-btn whatsapp"
          >
            <i className="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
        </div>

        {/* Drawer Navigation Links */}
        <div className="ssd-drawer-body">
          <ul className="ssd-drawer-nav">
            <li>
              <Link
                to="/"
                className={`ssd-drawer-link ${isActive('/') ? 'active' : ''}`}
                onClick={() => setDrawerOpen(false)}
              >
                <span>Home</span>
                <i className="fa-solid fa-chevron-right" style={{ fontSize: '11px', opacity: 0.5 }}></i>
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`ssd-drawer-link ${isActive('/about') ? 'active' : ''}`}
                onClick={() => setDrawerOpen(false)}
              >
                <span>About Us</span>
                <i className="fa-solid fa-chevron-right" style={{ fontSize: '11px', opacity: 0.5 }}></i>
              </Link>
            </li>

            {/* Expandable Specialities Accordion */}
            <li>
              <button
                type="button"
                className={`ssd-drawer-accordion-btn ${mobileSpecialtiesOpen ? 'expanded' : ''}`}
                onClick={() => setMobileSpecialtiesOpen(!mobileSpecialtiesOpen)}
              >
                <span>Specialities &amp; Services</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>

              {mobileSpecialtiesOpen && (
                <ul className="ssd-drawer-submenu">
                  <li>
                    <Link
                      to="/all-services"
                      className="ssd-drawer-sublink"
                      style={{ fontWeight: 700, color: '#0284c7' }}
                      onClick={() => setDrawerOpen(false)}
                    >
                      <i className="fa-solid fa-list-check"></i> View All Services
                    </Link>
                  </li>
                  {specialtiesList.map((s, i) => (
                    <li key={i}>
                      <Link
                        to={s.path}
                        className="ssd-drawer-sublink"
                        onClick={() => setDrawerOpen(false)}
                      >
                        <i className="fa-solid fa-tooth"></i> {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link
                to="/blog"
                className={`ssd-drawer-link ${isActive('/blog') ? 'active' : ''}`}
                onClick={() => setDrawerOpen(false)}
              >
                <span>Dental Blog</span>
                <i className="fa-solid fa-chevron-right" style={{ fontSize: '11px', opacity: 0.5 }}></i>
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`ssd-drawer-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => setDrawerOpen(false)}
              >
                <span>Contact Us</span>
                <i className="fa-solid fa-chevron-right" style={{ fontSize: '11px', opacity: 0.5 }}></i>
              </Link>
            </li>

            {/* Expandable More Accordion (Doctors, Gallery, Testimonials) */}
            <li>
              <button
                type="button"
                className={`ssd-drawer-accordion-btn ${mobileMoreOpen ? 'expanded' : ''}`}
                onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
              >
                <span>More</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>

              {mobileMoreOpen && (
                <ul className="ssd-drawer-submenu">
                  <li>
                    <Link
                      to="/doctors"
                      className="ssd-drawer-sublink"
                      onClick={() => setDrawerOpen(false)}
                    >
                      <i className="fa-solid fa-user-doctor"></i> Doctors &amp; Specialists
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gallery"
                      className="ssd-drawer-sublink"
                      onClick={() => setDrawerOpen(false)}
                    >
                      <i className="fa-solid fa-images"></i> Clinic Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/testimonials"
                      className="ssd-drawer-sublink"
                      onClick={() => setDrawerOpen(false)}
                    >
                      <i className="fa-solid fa-comments"></i> Patient Testimonials
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* Quick Clinic Info Box */}
          <div className="ssd-drawer-info-card">
            <div className="ssd-drawer-info-title">
              <i className="fa-solid fa-location-dot mr-1"></i> Clinic Location
            </div>
            <div className="ssd-drawer-info-text">
              P.V. Reddy Complex 1st Floor, Dwaraka Nagar Colony, O.U Colony Road, Shaikpet, Hyderabad - 500008
            </div>
            <div className="ssd-drawer-info-title" style={{ marginTop: '12px' }}>
              <i className="fa-regular fa-clock mr-1"></i> Working Hours
            </div>
            <div className="ssd-drawer-info-text">
              <strong>Mon - Sat:</strong> 10:00 AM – 8:30 PM<br />
              <strong>Sunday:</strong> 10:30 AM – 1:00 PM
            </div>
          </div>
        </div>

        {/* Drawer Bottom CTA */}
        <div className="ssd-drawer-footer">
          <Link
            to="/contact"
            className="ssd-drawer-cta"
            onClick={() => setDrawerOpen(false)}
          >
            <i className="fa-regular fa-calendar-check"></i> Book Appointment
          </Link>
        </div>
      </aside>
    </header>
  );
}
