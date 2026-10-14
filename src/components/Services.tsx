'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from './Link';
import { servicesData, ServiceItem } from '../data';

interface ServicesProps {
  onOpenServices: () => void;
}

export default function Services({ onOpenServices }: ServicesProps) {
  // Filter out wisdom tooth extraction service card
  const filteredServices = servicesData.filter(
    (service: ServiceItem) => !service.title.toLowerCase().includes('wisdom')
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchOffset, setTouchOffset] = useState<number>(0);
  const [isSwiping, setIsSwiping] = useState<boolean>(false);
  const totalSlides = filteredServices.length;

  // Auto slide ONLY in mobile (< 768px)
  useEffect(() => {
    // Only run on small screens
    const isMobileScreen = window.innerWidth < 768;
    if (!isMobileScreen || isPaused || isSwiping) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, isSwiping, totalSlides]);

  // Touch Swipe Handlers for Buttery Smooth Mobile Swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setIsSwiping(true);
    setTouchStart(e.touches[0].clientX);
    setTouchOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStart;
    // Dampen edges
    if ((currentIndex === 0 && diff > 0) || (currentIndex === totalSlides - 1 && diff < 0)) {
      setTouchOffset(diff * 0.3);
    } else {
      setTouchOffset(diff);
    }
  };

  const handleTouchEnd = () => {
    setIsSwiping(false);
    if (touchStart !== null) {
      // Threshold to trigger slide change
      if (touchOffset < -50 && currentIndex < totalSlides - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (touchOffset > 50 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      } else if (touchOffset < -50 && currentIndex === totalSlides - 1) {
        // Loop back to start on swipe left at end
        setCurrentIndex(0);
      } else if (touchOffset > 50 && currentIndex === 0) {
        // Loop to end on swipe right at start
        setCurrentIndex(totalSlides - 1);
      }
    }
    setTouchStart(null);
    setTouchOffset(0);

    // Resume auto-slide after brief pause
    setTimeout(() => {
      setIsPaused(false);
    }, 4000);
  };

  return (
    <section className="ftco-services ftco-section bg-light py-5" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-9 text-center heading-section">
            <span
              className="subheading d-inline-block mb-2"
              style={{
                color: '#0284c7',
                fontWeight: 700,
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em'
              }}
            >
              Advanced Dental Care in Shaikpet, Hyderabad
            </span>
            <h2
              className="mb-3"
              style={{
                color: '#0b2545',
                fontWeight: 800,
                fontSize: '34px',
                letterSpacing: '-0.02em'
              }}
            >
              Our Clinic Services &amp; Specialities
            </h2>
            <p className="text-muted mx-auto" style={{ maxWidth: '640px', fontSize: '15px' }}>
              From routine family care and cosmetic enhancements to advanced implantology and laser treatments,
              discover expert dental solutions tailored to your smile.
            </p>
          </div>
        </div>

        {/* 1. DESKTOP & TABLET VIEW: Clean Multi-column Grid (>= 768px, Static, No lag) */}
        <div className="d-none d-md-flex row g-4 justify-content-center">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="col-md-6 col-lg-4 mb-4 d-flex"
            >
              <div className="service-card-item w-100 d-flex flex-column bg-white rounded-4 overflow-hidden">
                {/* Image Container with zoom */}
                <Link
                  to={service.link}
                  className="service-card-img-wrap d-block overflow-hidden position-relative"
                  aria-label={service.title}
                >
                  <img
                    src={service.image}
                    loading="lazy"
                    className="w-100 h-100"
                    alt={service.alt}
                  />
                </Link>

                {/* Card Content */}
                <div className="service-card-body d-flex flex-column flex-grow-1 p-4">
                  <h3 className="service-card-title mb-2">
                    <Link to={service.link} className="text-decoration-none">
                      {service.title}
                    </Link>
                  </h3>

                  <p className="service-card-desc flex-grow-1 mb-3 text-muted">
                    {service.description}
                  </p>

                  <div className="service-card-action pt-2 d-flex justify-content-end">
                    <Link
                      to={service.link}
                      className="service-link-arrow"
                    >
                      View Service &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. MOBILE VIEW: GPU Hardware-Accelerated Auto-Slider (< 768px) */}
        <div className="d-block d-md-none position-relative">
          <div
            className="services-slider-viewport overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="services-slider-track"
              style={{
                display: 'flex',
                transform: `translate3d(calc(-${currentIndex * 100}% + ${touchOffset}px), 0, 0)`,
                transition: isSwiping ? 'none' : 'transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)',
                willChange: 'transform'
              }}
            >
              {filteredServices.map((service: ServiceItem) => (
                <div
                  key={service.id}
                  className="services-slider-slide px-1"
                  style={{
                    flex: '0 0 100%',
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box'
                  }}
                >
                  <div className="service-card-item w-100 d-flex flex-column bg-white rounded-4 overflow-hidden">
                    <Link
                      to={service.link}
                      className="service-card-img-wrap d-block overflow-hidden position-relative"
                      aria-label={service.title}
                    >
                      <img
                        src={service.image}
                        loading="lazy"
                        className="w-100 h-100"
                        alt={service.alt}
                      />
                    </Link>

                    <div className="service-card-body d-flex flex-column flex-grow-1 p-4">
                      <h3 className="service-card-title mb-2">
                        <Link to={service.link} className="text-decoration-none">
                          {service.title}
                        </Link>
                      </h3>

                      <p className="service-card-desc flex-grow-1 mb-3 text-muted">
                        {service.description}
                      </p>

                      <div className="service-card-action pt-2 d-flex justify-content-end">
                        <Link
                          to={service.link}
                          className="service-link-arrow"
                        >
                          View Service &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Smooth Indicator Dots */}
          <div className="services-slider-dots">
            {filteredServices.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`services-slider-dot ${currentIndex === idx ? 'active' : ''}`}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 4000);
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA to explore all treatments */}
        <div className="row mt-4 pt-3">
          <div className="col-12 text-center">
            <Link
              to="/all-services"
              className="btn-all-services-cta"
            >
              Explore Our Dental Services <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
