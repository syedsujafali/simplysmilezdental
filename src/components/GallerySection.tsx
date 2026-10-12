import React, { useState } from 'react';
import { galleryImages, GalleryItem } from '../data';

export default function GallerySection() {
  const [activeImg, setActiveImg] = useState<string | null>(null);

  return (
    <section className="album bg-light py-5" id="gallery">
      <div className="container">
        <div className="col-md-12 text-center heading-section mb-4">
          <h2 className="pb-2 pt-2" id="doctorsour" style={{ fontSize: '32px', fontWeight: 700, color: '#0b2545' }}>
            Our Gallery
          </h2>
        </div>

        <div className="row g-3">
          {galleryImages.map((item: GalleryItem) => (
            <div key={item.id} className="col-6 col-md-3" style={{ margin: '8px 0px' }}>
              <div
                className="card shadow-sm h-100"
                style={{ cursor: 'pointer', overflow: 'hidden' }}
                onClick={() => setActiveImg(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '220px',
                    objectFit: 'cover'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
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
