import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { galleryImages, GalleryItem } from '../data';

export default function GallerySection() {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  // Show only 6 images in homepage gallery section
  const displayedImages = galleryImages.slice(0, 6);

  return (
    <section className="album bg-light py-5" id="gallery">
      <div className="container">
        <div className="col-md-12 text-center heading-section mb-4">
          <h2 className="pb-2 pt-2" id="doctorsour" style={{ fontSize: '32px', fontWeight: 700, color: '#0b2545' }}>
            Our Gallery
          </h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px', fontSize: '15px' }}>
            Take a look inside Simply Smilez Dental Clinic &ndash; modern operatories, advanced dental technology, and hygienic patient care.
          </p>
        </div>

        {displayedImages.length > 0 ? (
          <>
            <div className="row g-3 justify-content-center">
              {displayedImages.map((item: GalleryItem) => (
                <div key={item.id} className="col-6 col-md-4 col-lg-4 mb-4">
                  <div
                    className="card shadow-sm h-100 border-0"
                    style={{
                      cursor: 'pointer',
                      overflow: 'hidden',
                      borderRadius: '12px',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onClick={() => setActiveImg(item.src)}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: '240px',
                        objectFit: 'cover',
                        transition: 'transform 0.4s ease'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* See More Button */}
            <div className="text-center mt-3">
              <Link
                to="/gallery"
                className="btn btn-primary px-4 py-2 font-weight-bold"
                style={{
                  borderRadius: '30px',
                  boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)',
                  fontSize: '15px'
                }}
              >
                See More <i className="fa-solid fa-arrow-right ml-2" style={{ marginLeft: '8px' }}></i>
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
