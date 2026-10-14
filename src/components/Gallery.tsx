'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from './Link';
import { galleryImages, GalleryItem } from '../data';

export default function Gallery() {
  const [activeImg, setActiveImg] = useState<string | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const displayedImages = galleryImages;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Automatic smooth scrolling for mobile view
  useEffect(() => {
    if (isInteracting) return;

    // Only run interval on mobile view
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const step = 260;

      if (container.scrollLeft >= maxScrollLeft - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isInteracting]);

  return (
    <section
      className="album bg-light py-5 gallery-section-wrapper"
      id="gallery"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => setIsInteracting(false)}
    >
      <div className="container">
        <div className="d-flex flex-wrap align-items-end justify-content-between mb-4">
          <div className="heading-section text-center text-md-left mb-3 mb-md-0 w-100 w-md-auto">
            <h2 className="pb-1 pt-1" id="doctorsour" style={{ fontSize: '32px', fontWeight: 700, color: '#0b2545', margin: 0 }}>
              Our Gallery
            </h2>
            <p className="text-muted" style={{ maxWidth: '600px', fontSize: '15px', margin: '4px auto 0 auto' }}>
              Take a look inside Simply Smilez Dental Clinic &ndash; modern operatories, advanced dental technology, and hygienic patient care.
            </p>
          </div>

          {/* Navigation Controls (Mobile Slider only) */}
          {displayedImages.length > 0 && (
            <div className="gallery-nav-arrows d-flex d-md-none align-items-center mx-auto mt-2" style={{ gap: 8 }}>
              <button
                type="button"
                onClick={() => scroll('left')}
                className="gallery-scroll-arrow"
                aria-label="Previous image"
              >
                <i className="fa-solid fa-chevron-left" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="gallery-scroll-arrow"
                aria-label="Next image"
              >
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          )}
        </div>

        {displayedImages.length > 0 ? (
          <>
            {/* 1. DESKTOP VIEW: Normal clean responsive grid (6 featured images) */}
            <div className="row g-3 d-none d-md-flex justify-content-center">
              {displayedImages.slice(0, 6).map((item: GalleryItem) => (
                <div key={item.id} className="col-md-4 col-lg-4 mb-4">
                  <div
                    className="card shadow-sm h-100 border-0 gallery-card-item desktop-grid-card"
                    onClick={() => setActiveImg(item.src)}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                    />
                    <div className="gallery-card-overlay">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 2. MOBILE VIEW: Smooth auto-scroller */}
            <div
              ref={scrollContainerRef}
              className="gallery-horizontal-scroller d-flex d-md-none"
            >
              {displayedImages.map((item: GalleryItem) => (
                <div key={item.id} className="gallery-scroll-item">
                  <div
                    className="card shadow-sm h-100 border-0 gallery-card-item"
                    onClick={() => setActiveImg(item.src)}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                    />
                    <div className="gallery-card-overlay">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* See More Button */}
            <div className="text-center mt-3 mt-md-4">
              <Link
                to="/gallery"
                className="btn btn-primary px-4 py-2 font-weight-bold"
                style={{
                  borderRadius: '30px',
                  boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)',
                  fontSize: '15px'
                }}
              >
                View Full Gallery <i className="fa-solid fa-arrow-right ml-2" style={{ marginLeft: '8px' }}></i>
              </Link>
            </div>
          </>
        ) : (
          <div className="row justify-content-center">
            <div className="col-md-8 text-center py-4">
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(2, 132, 199, 0.1)',
                  color: '#0284c7',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '26px',
                  marginBottom: '14px'
                }}
              >
                <i className="fa-solid fa-camera"></i>
              </div>
              <h3 className="h4 font-weight-bold" style={{ color: '#0b2545' }}>
                Clinic Photos Being Updated
              </h3>
              <p className="text-muted mx-auto mb-3" style={{ maxWidth: '500px', fontSize: '15px' }}>
                We are currently capturing fresh, high-resolution photographs of our digital clinic and treatment suites. Please check back soon!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeImg && (
        <div className="lightbox-backdrop" onClick={() => setActiveImg(null)}>
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setActiveImg(null)}
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <img
            src={activeImg}
            alt="Enlarged view"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
