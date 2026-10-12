import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  onOpenServices: () => void;
}

export default function Header({ onOpenServices }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header>
      {/* Top Discount Bar */}
      <div className="top-bar">
        <div className="scrolling-text">
          <span className="highlight">30% Discount</span> on Invisalign &amp; Dental Implants
        </div>
      </div>

      {/* Main Info Bar with Logo, Phone, Address, Hours, Socials */}
      <div className="py-md-5 py-4 border-bottom bg">
        <div className="container">
          <div className="row no-gutters d-flex align-items-start align-items-center px-3 px-md-0">
            {/* Center Logo on mobile / Order 2 on md */}
            <div className="col-md-4 order-md-2 mb-2 mb-md-0 align-items-center text-center" style={{ paddingBottom: '20px' }}>
              <Link className="navbar-brand" to="/">
                <img
                  src="/images/logo-3.webp"
                  width="404"
                  height="93"
                  className="logo-3 img-fluid"
                  alt="Simply Smilez Dental Clinic"
                />
              </Link>
            </div>

            {/* Address & Tel / Order 1 on md */}
            <div className="col-md-4 order-md-1 d-flex topper mb-md-0 mb-2 align-items-center text-md-right">
              <div className="icon d-flex justify-content-center align-items-center order-md-last">
                <span className="fa-solid fa-map-location-dot" style={{ fontSize: '24px', color: '#008dcc' }}></span>
              </div>
              <div className="pr-md-4 pl-md-0 pl-3 text">
                <p className="con">
                  <span style={{ color: 'darkblue' }}>Tel No. :</span>{' '}
                  <a href="tel:+919603338904" style={{ fontWeight: 'bold' }}>9603338904</a>,{' '}
                  <a href="tel:+917799376656" style={{ fontWeight: 'bold' }}>7799376656</a>
                </p>
                <p className="con">
                  <a
                    href="https://www.google.com/maps/place/Simply+Smilez+Dental/@17.4110386,78.3924029,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb90c618ceaaab:0x5543d8d68ff843d2!8m2!3d17.4110335!4d78.3949778!16s%2Fg%2F11f525jy3x?entry=tts"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <strong>P.V.Reddy Complex 1st Floor, Dwaraka Nagar Colony, O.U Colony Road. Shaikpet , Hyderabad, 500008</strong>
                  </a>
                </p>
              </div>
            </div>

            {/* Hours & Socials / Order 3 on md */}
            <div className="col-md-4 order-md-3 topper mb-md-0 align-items-center test5">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="fa-regular fa-paper-plane" style={{ fontSize: '24px', color: '#008dcc' }}></span>
              </div>
              <div className="text pl-3 pl-md-3">
                <p className="hr"><span>Open Hours</span></p>
                <p className="time">
                  <span><b>Mon - Sat :</b></span> <span style={{ color: 'darkblue' }}>10:00am - 9:00pm</span>
                </p>
                <p className="time">
                  <span><b>Sunday &nbsp;&nbsp;&nbsp;&nbsp;</b></span> <span style={{ color: 'darkblue' }}>:11:00am - 4:00pm</span>
                </p>
                <div className="h-100 d-inline-flex align-items-center" id="icon4">
                  <a
                    className="btn btn-sm-square bg-white me-1 mr-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/share/1F4XvjRLHq/?mibextid=wwXIfr"
                  >
                    <i className="fab fa-facebook-f fa-lg" style={{ color: 'rgb(0, 0, 255)' }}></i>
                  </a>
                  <a
                    className="btn btn-sm-square bg-white me-1 mr-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/sush_micro_dontist?stkn=cTMxejQ2ejl6djR0&utm_source=qr"
                  >
                    <i className="fab fa-instagram fa-lg" style={{ color: 'red' }}></i>
                  </a>
                  <a
                    className="btn btn-sm-square bg-white me-1 mr-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com"
                  >
                    <i className="fa-brands fa-x-twitter fa-lg" style={{ color: '#000' }}></i>
                  </a>
                  <a
                    className="btn btn-sm-square bg-white me-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/917799376656"
                  >
                    <i className="fa-brands fa-whatsapp fa-lg" style={{ color: 'rgb(16, 182, 16)' }}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light kohli"
        id="ftco-navbar"
        style={{ backgroundColor: 'white' }}
      >
        <div className="container d-flex align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="ftco-nav"
            aria-expanded={menuOpen}
            aria-label="Menu"
            style={{ paddingLeft: '12px', background: '#0284c7', border: 'none', borderRadius: '4px' }}
          >
            <i className="fa-solid fa-bars" style={{ display: 'inline-block', color: 'white', marginRight: '6px' }}></i>
            <span style={{ display: 'inline-block', padding: '10px 0', margin: 0, color: 'white', fontSize: '18px', fontWeight: 600 }}>
              Menu
            </span>
          </button>
          
          <div
            className={`collapse navbar-collapse nav-items ${menuOpen ? 'show' : ''}`}
            id="ftco-nav"
            style={{ display: menuOpen ? 'block' : undefined }}
          >
            <ul className="navbar-nav m-auto">
              <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                <Link to="/" className="nav-link pl-0" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
                <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About Us</Link>
              </li>
              <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#specialities"
                  role="button"
                  onClick={(e) => {
                    e.preventDefault();
                    setDropdownOpen(!dropdownOpen);
                  }}
                  aria-expanded={dropdownOpen}
                >
                  Specialities <i className="fa-solid fa-chevron-down ml-1" style={{ fontSize: '11px' }}></i>
                </a>
                <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} id="flaw" style={{ display: dropdownOpen ? 'block' : undefined }}>
                  <li>
                    <Link
                      to="/all-services"
                      onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}
                      className="dropdown-item font-weight-bold"
                      style={{ color: '#00b7ff' }}
                    >
                      All Services
                    </Link>
                  </li>
                  <li><Link to="/services/composite-fillings" className="dropdown-item" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Composite Fillings</Link></li>
                  <li><Link to="/services/crowns" className="dropdown-item" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Crowns</Link></li>
                  <li><Link to="/services/veneers" className="dropdown-item" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Veneers</Link></li>
                  <li><Link to="/services/braces" className="dropdown-item" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Braces &amp; Invisalign</Link></li>
                  <li><Link to="/services/laser-teeth-whitening" className="dropdown-item" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Laser Teeth Bleaching/Whitening</Link></li>
                  <li><Link to="/services/laser-root-canal" className="dropdown-item" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Laser Root Canal Therapy</Link></li>
                  <li><Link to="/services/laser-gum-surgery" className="dropdown-item" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Laser Gum Surgery</Link></li>
                  <li><Link to="/services/dental-implants" className="dropdown-item" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Dental Implants</Link></li>
                  <li><Link to="/services/pediatric-dentistry" className="dropdown-item" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Pediatric Dentistry</Link></li>
                  <li><Link to="/services/wisdom-tooth-extraction" className="dropdown-item" onClick={() => { setDropdownOpen(false); setMenuOpen(false); }}>Wisdom Tooth Extractions</Link></li>
                </ul>
              </li>
              <li className={`nav-item ${isActive('/gallery') ? 'active' : ''}`}>
                <Link to="/gallery" className="nav-link" onClick={() => setMenuOpen(false)}>Gallery</Link>
              </li>
              <li className={`nav-item ${isActive('/doctors') ? 'active' : ''}`}>
                <Link to="/doctors" className="nav-link" onClick={() => setMenuOpen(false)}>Doctors</Link>
              </li>
              <li className={`nav-item ${isActive('/testimonials') ? 'active' : ''}`}>
                <Link to="/testimonials" className="nav-link" onClick={() => setMenuOpen(false)}>Testimonial</Link>
              </li>
              <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
                <Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
