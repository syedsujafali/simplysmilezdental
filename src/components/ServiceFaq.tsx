'use client';

import React, { useState } from 'react';

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

interface ServiceFaqProps {
  title?: string;
  faqs: ServiceFaqItem[];
}

export default function ServiceFaq({ title = "Frequently Asked Questions", faqs }: ServiceFaqProps) {
  const [openId, setOpenId] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenId(prev => (prev === idx ? null : idx));
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="service-faq-container mt-5 mb-4">
      <h3 className="h4 font-weight-bold mb-4 text-left" style={{ color: "#0d3b66" }}>
        {title}
      </h3>
      <div className="accordion faq-service-accordion">
        {faqs.map((faq, idx) => {
          const isOpen = openId === idx;
          return (
            <div key={idx} className="card mb-3 border-0 shadow-sm rounded-3 overflow-hidden faq-item-card">
              <div className="card-header bg-white p-0">
                <button
                  className="btn btn-block text-left font-weight-bold p-3 text-dark d-flex justify-content-between align-items-center w-100 border-0 bg-transparent"
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  style={{
                    fontSize: '16px',
                    color: '#0b2545',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span className="text-left pr-2 d-flex align-items-start">
                    <i
                      className="fa-solid fa-circle-question mr-2 mt-1"
                      style={{ color: '#0284c7', marginRight: '10px', flexShrink: 0 }}
                    ></i>
                    <span>{faq.question}</span>
                  </span>
                  <i
                    className="fa-solid fa-chevron-down text-muted"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      marginLeft: '12px'
                    }}
                  ></i>
                </button>
              </div>
              {isOpen && (
                <div
                  className="card-body text-muted px-4 py-3 border-top"
                  style={{ fontSize: '14.5px', lineHeight: 1.7, backgroundColor: '#fbfcfd' }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
