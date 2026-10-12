import React, { useRef } from 'react';
import { servicesData, ServiceItem } from '../data';

interface ServicesSectionProps {
  onOpenServices: () => void;
}

export default function ServicesSection({ onOpenServices }: ServicesSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="ftco-services ftco-section bg-light py-5" id="services">
      <div className="container">
        <div className="row justify-content-center mb-4 pb-1">
          <div className="col-md-8 text-center heading-section">
            <span className="subheading" style={{ color: '#008dcc', fontWeight: 600, fontSize: '15px' }}>
              Dental Services in Shaikpet, Hyderabad
            </span>
            <h2 className="mb-4" style={{ color: '#0b2545', fontWeight: 700, fontSize: '32px' }}>
              Our Clinic Services
            </h2>
          </div>
        </div>

        {/* Carousel / Card List */}
        <div className="position-relative mb-4">
          <button
            type="button"
            className="carousel-arrow prev"
            onClick={scrollLeft}
            aria-label="Previous services"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            type="button"
            className="carousel-arrow next"
            onClick={scrollRight}
            aria-label="Next services"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <div
            ref={scrollRef}
            className="d-flex overflow-auto pb-3"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              gap: '20px'
            }}
          >
            {servicesData.map((service: ServiceItem) => (
              <div
                key={service.id}
                style={{
                  minWidth: '290px',
                  maxWidth: '300px',
                  flex: '0 0 auto',
                  scrollSnapAlign: 'start'
                }}
              >
                <div className="service-card-item d-flex flex-column text-center text-decoration-none bg-white rounded shadow-sm overflow-hidden h-100 p-3">
                  <div className="img-container overflow-hidden rounded mb-3" style={{ height: '200px' }}>
                    <img
                      src={service.image}
                      loading="lazy"
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: 'cover', transition: 'transform 0.35s ease' }}
                      alt={service.alt}
                    />
                  </div>
                  <div className="p-2 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <h3 className="heading font-weight-bold" style={{ fontSize: '18px', color: '#0d3b66' }}>
                        {service.title}
                      </h3>
                      <p className="text-muted" style={{ fontSize: '13.5px', lineHeight: '1.6' }}>
                        {service.description}
                      </p>
                    </div>
                    <div className="mt-2">
                      <button
                        type="button"
                        onClick={onOpenServices}
                        className="btn-learn-more text-primary font-weight-bold border-0 bg-transparent cursor-pointer"
                        style={{ fontSize: '14px', cursor: 'pointer' }}
                      >
                        View Service &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Services CTA Button */}
        <div className="row mt-4 pt-2">
          <div className="col-md-12 text-center">
            <button
              type="button"
              onClick={onOpenServices}
              className="btn btn-primary px-4 py-3 font-weight-bold shadow-sm services-cta"
              style={{
                borderRadius: '30px',
                fontSize: '16px',
                backgroundColor: '#00b7ff',
                borderColor: '#00b7ff'
              }}
            >
              Explore Our Dental Services <i className="fa-solid fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
