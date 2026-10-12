import React, { useState } from 'react';
import { faqsData, FAQItem } from '../data';

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="ftco-section bg-light py-5" id="faq-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section">
            <h2 className="mb-3" style={{ fontSize: '28px', fontWeight: 700, color: '#0b2545' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#6b7280', fontSize: '15px' }}>
              Have questions about our dental services in Shaikpet, Hyderabad? Find answers to common questions below.
            </p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="accordion" id="faqAccordion">
              {faqsData.map((faq: FAQItem) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className="card mb-3 border-0 shadow-sm rounded overflow-hidden">
                    <div className="card-header bg-white p-0">
                      <button
                        className="btn btn-block text-left font-weight-bold p-3 text-dark d-flex justify-content-between align-items-center w-100 border-0 bg-transparent"
                        type="button"
                        onClick={() => toggle(faq.id)}
                        aria-expanded={isOpen}
                        style={{
                          fontSize: '16px',
                          color: '#0b2545',
                          textDecoration: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        <span className="text-left pr-2">
                          <i className="fa-solid fa-circle-question mr-2" style={{ color: '#0284c7', marginRight: '8px' }}></i>{' '}
                          {faq.question}
                        </span>
                        <i
                          className={`fa-solid fa-chevron-down text-muted transition-all`}
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                            flexShrink: 0
                          }}
                        ></i>
                      </button>
                    </div>
                    {isOpen && (
                      <div className="card-body text-muted px-4 py-3 border-top" style={{ fontSize: '14.5px', lineHeight: 1.7, backgroundColor: '#fbfcfd' }}>
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
