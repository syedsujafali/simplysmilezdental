import Seo from '../components/Seo';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import GoogleReviewsSection, { GOOGLE_REVIEWS_URL } from '../components/GoogleReviewsSection';

export default function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Patient Reviews & Testimonials | Simply Smilez Dental Hyderabad";
  }, []);

  return (
    <div className="page-wrapper testimonialspage">
      <Seo
        title="Patient Testimonials & Reviews | Simply Smilez Dental Clinic Hyderabad"
        description="Read Google reviews and testimonials from patients who visited Simply Smilez Dental Clinic in Shaikpet, Hyderabad for dental treatments."
        canonicalPath="/testimonials"
      />

      {/* Hero Header */}
      <section className="doctor-hero-section py-4" style={{ background: '#f0f9ff' }}>
        <div className="container">
          <div className="breadcrumb-custom">
            <Link to="/"><i className="fa-solid fa-house" /> Home</Link>
            <span>&gt;</span>
            <span style={{ color: '#0f172a', fontWeight: 600 }}>Patient Reviews &amp; Testimonials</span>
          </div>
        </div>
      </section>

      {/* Embedded Google Reviews Component */}
      <GoogleReviewsSection />
    </div>
  );
}
