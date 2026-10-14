'use client';

import React, { useEffect } from 'react';
import Link from '../components/Link';

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Dental Health Blog | Simply Smilez Dental Clinic Hyderabad';
  }, []);

  return (
    <div className="page-wrapper blogpage">
      <section className="bg-light py-5 min-vh-100 d-flex align-items-center">
        <div className="container">
          {/* Breadcrumbs */}
          <div className="mb-4 text-left" style={{ fontSize: '14px', color: '#64748b' }}>
            <Link to="/" style={{ color: '#0284c7', textDecoration: 'none' }}>
              <i className="fa-solid fa-house mr-1"></i> Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span style={{ color: '#0f172a', fontWeight: 600 }}>Blog</span>
          </div>

          {/* Single Placeholder Card */}
          <div
            className="text-center py-5 px-4 bg-white rounded shadow-sm mx-auto"
            style={{
              maxWidth: '680px',
              borderRadius: '24px',
              border: '1px solid #e2e8f0'
            }}
          >
            <div
              className="d-inline-flex align-items-center justify-content-center mb-4"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.1) 0%, rgba(245, 158, 11, 0.1) 100%)',
                color: '#0284c7',
                fontSize: '36px'
              }}
            >
              <i className="fa-solid fa-newspaper"></i>
            </div>

            <h1 className="font-weight-bold mb-3" style={{ fontSize: '28px', color: '#0b2545' }}>
              Dental Health Articles Coming Soon
            </h1>

            <p className="text-muted mx-auto mb-4" style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '520px' }}>
              We are currently preparing informative guides, oral hygiene advice, and dental care tips curated by our specialists at Simply Smilez Dental Clinic. Stay tuned!
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-2">
              <Link
                to="/"
                className="btn btn-outline-secondary px-4 py-2 font-weight-bold mr-2"
                style={{ borderRadius: '25px', fontSize: '14px' }}
              >
                Back to Home
              </Link>
              <Link
                to="/contact"
                className="btn btn-primary px-4 py-2 font-weight-bold"
                style={{
                  borderRadius: '25px',
                  fontSize: '14px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  border: 'none'
                }}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
