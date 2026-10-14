'use client';

import React, { useRef, useState, useEffect } from 'react';

// Exact Google Write Review Link (triggers review dialog directly with 5-star prompt)
export const GOOGLE_WRITE_REVIEW_URL = "https://www.google.com/search?sca_esv=bfa957c708c098d7&cs=1&output=search&kgmid=/g/11f525jy3x&q=Simply+Smilez+Dental+Clinic+-Fully+Digital+Invisalign+Centre#lrd=0x3bcb90c618ceaaab:0x5543d8d68ff843d2,3,,,,";

// Exact Google See All Reviews Link (opens full Google Reviews modal/tab)
export const GOOGLE_ALL_REVIEWS_URL = "https://www.google.com/search?sca_esv=bfa957c708c098d7&cs=1&output=search&kgmid=/g/11f525jy3x&q=Simply+Smilez+Dental+Clinic+-Fully+Digital+Invisalign+Centre#lrd=0x3bcb90c618ceaaab:0x5543d8d68ff843d2,1,,,,";

// Fallback / General Link
export const GOOGLE_REVIEWS_URL = GOOGLE_ALL_REVIEWS_URL;

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  avatarColor: string;
  treatment: string;
  text: string;
  verified: boolean;
  reviewUrl: string;
}

export const clinicReviews: GoogleReview[] = [
  {
    id: "rev-1",
    author: "Zufisha Zareen",
    rating: 5,
    timeAgo: "a month ago",
    avatarColor: "#0284c7",
    treatment: "Braces & Orthodontics",
    text: "I recently completed my braces treatment with Dr. Ankush, and I could not be happier with the results! My teeth are now perfectly aligned and look amazing. Dr. Ankush is an exceptional orthodontist. Throughout the entire journey, he explained every single step of the process with incredible patience and care, making me feel completely at ease. His technique is top-notch, and the actual treatment was smooth and comfortable. What makes him even better is the clinic environment-it is extremely clean, well-maintained, and equipped with great facilities. To top it all off, the treatment pricing is very reasonable and much more affordable compared to other clinics in the area, without compromising an ounce on quality. If you are looking for the best doctor for braces or any orthodontic dental work, Dr. Ankush is hands down the absolute best. Highly recommended!",
    verified: true,
    reviewUrl: "https://maps.app.goo.gl/EGBhYS74HgA4sUsH7"
  },
  {
    id: "rev-2",
    author: "Shanmukh Pyata",
    rating: 5,
    timeAgo: "2 months ago",
    avatarColor: "#10b981",
    treatment: "Child Invisalign Treatment",
    text: "I would like to sincerely thank Dr. Susheel Kumar for the outstanding care and treatment provided to my child with Invisalign. From the very first consultation, Dr. Susheel Kumar was patient, kind, and explained every step of the treatment clearly, making both my child and us feel comfortable and confident. The entire Invisalign journey has been smooth, and we are already seeing excellent improvements in my child's smile and teeth alignment. The doctor's expertise, attention to detail, and friendly approach made every visit a pleasant experience. I highly recommend Dr. Susheel Kumar to any parent looking for the best orthodontic care for their child. Thank you for giving my child a beautiful smile and a wonderful treatment experience!",
    verified: true,
    reviewUrl: "https://share.google/ocZOoe4kLOgZ2QGeQ"
  },
  {
    id: "rev-3",
    author: "Atul Sahu",
    rating: 5,
    timeAgo: "3 months ago",
    avatarColor: "#8b5cf6",
    treatment: "Broken Instrument Retrieval & Re-RCT",
    text: "I visited the clinic for a re-root canal treatment, which was performed by Dr. Susheel. My case was complicated because there was a broken instrument (needle) inside the root canal. Dr. Susheel explained the entire procedure clearly, discussed all the possible options, and carried out the treatment with great skill and care. The entire procedure was virtually painless, and I felt comfortable throughout. The clinic staff was also very professional, polite, and supportive. Overall, I had an excellent experience and would highly recommend Dr. Susheel and the clinic to anyone looking for quality dental treatment.",
    verified: true,
    reviewUrl: "https://share.google/jm95RkvL08okNFXkK"
  },
  {
    id: "rev-4",
    author: "Vishal Pitti",
    rating: 5,
    timeAgo: "4 months ago",
    avatarColor: "#f59e0b",
    treatment: "CBCT Scan & Root Canal Retrieval",
    text: "I was recommended Dr Sushil of Simply Smilez dental - Shaikpet, by a family friend who is also a dentist for my case of Retrieval of an Instrument from the root canal. I Was suffering with severe pain and infection. A thorough examination & CBCT scan was done and very patiently I was explained the treatment process of Retrieval attempts. I had got the procedure done & was very much alright in a weeks time. I was lucky enough to get my tooth saved and Dr Sushil has successfully Retrieved the Instrument piece in course of treatment. My wishes to him and a big thank you to him for taking up my case. I will strongly recommend DR SUSHIL SIR C/o SIMPLY SMILEZ DENTAL CLINIC.",
    verified: true,
    reviewUrl: "https://share.google/UM0FvnttkODvJbM8c"
  },
  {
    id: "rev-5",
    author: "snehalatha keshetty",
    rating: 5,
    timeAgo: "5 months ago",
    avatarColor: "#ec4899",
    treatment: "Dental Caps & Crown Fixing",
    text: "A big thank you to Dr. Ankush for fixing my dental caps! I had been experiencing issues, but he handled the entire process with remarkable patience and precision. His meticulous approach ensured everything was done right. Highly recommended—God bless you, Dr. Ankush, for your amazing service!",
    verified: true,
    reviewUrl: "https://share.google/eQpPhGp9Imyu9puLt"
  },
  {
    id: "rev-6",
    author: "A Sirisha",
    rating: 5,
    timeAgo: "6 months ago",
    avatarColor: "#06b6d4",
    treatment: "Invisalign Aligners for Kids",
    text: "Both my daughter and son are undergoing Invisalign treatment, and our experience has been excellent. The aligners are comfortable, easy to manage. A special thanks to Dr Susheel for the exceptional care, patience, and clear guidance throughout the treatment. The doctor made both of my children feel comfortable and confident.",
    verified: true,
    reviewUrl: "https://share.google/JLpSQUgiWYJzlf6MR"
  }
];

export default function Testimonial() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [expandedReviews, setExpandedReviews] = useState<{ [key: string]: boolean }>({});
  const [isInteracting, setIsInteracting] = useState(false);

  const toggleExpand = (id: string) => {
    setExpandedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Automatic smooth scrolling with loop and pause on hover/touch
  useEffect(() => {
    if (isInteracting) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const step = 380;

      // If reached the end, smoothly loop back to start
      if (container.scrollLeft >= maxScrollLeft - 20) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isInteracting]);

  return (
    <section
      className="ftco-section google-reviews-section py-5"
      style={{ background: '#f8fafc' }}
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onTouchStart={() => setIsInteracting(true)}
      onTouchEnd={() => setIsInteracting(false)}
    >
      <div className="container">
        {/* Header with Google Badge */}
        <div className="row justify-content-center mb-4">
          <div className="col-lg-9 text-center">
            <div className="google-rating-pill mb-3 d-inline-flex align-items-center">
              <svg width="22" height="22" viewBox="0 0 24 24" style={{ marginRight: 8 }}>
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span style={{ fontWeight: 800, color: '#0f172a', marginRight: 6 }}>4.9</span>
              <div className="google-stars mr-2" style={{ color: '#f59e0b' }}>
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <span style={{ color: '#475569', fontSize: 13, fontWeight: 600 }}>Google Reviews</span>
            </div>

            <h2 style={{ fontSize: '2.1rem', fontWeight: 800, color: '#0b2545', letterSpacing: '-0.02em', marginBottom: 10 }}>
              Real Patient Stories on Google
            </h2>
            <p style={{ color: '#64748b', fontSize: '15.5px', maxWidth: 620, margin: '0 auto 24px' }}>
              Read 100% genuine reviews from our patients treated by Dr. Ankush Kumar and Dr. Susheel Kumar at Simply Smilez Dental Clinic.
            </p>

            {/* Direct CTA Buttons */}
            <div className="d-flex flex-wrap justify-content-center align-items-center" style={{ gap: 12 }}>
              <a
                href={GOOGLE_WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-google-review-primary"
              >
                <i className="fa-solid fa-pen-to-square" /> Write a Review on Google
              </a>
              <a
                href={GOOGLE_ALL_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-google-review-secondary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" style={{ marginRight: 6, verticalAlign: '-3px' }}>
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                </svg>
                View All Google Reviews
              </a>
            </div>
          </div>
        </div>

        {/* Carousel / Scroller Container with Nav Arrows */}
        <div className="position-relative mt-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span style={{ fontSize: 13, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <i className="fa-solid fa-arrows-left-right mr-1" /> Scroll horizontally to see all stories
            </span>
            <div className="review-scroll-controls d-flex gap-2">
              <button
                type="button"
                onClick={() => scroll('left')}
                className="review-scroll-arrow"
                aria-label="Previous review"
              >
                <i className="fa-solid fa-chevron-left" />
              </button>
              <button
                type="button"
                onClick={() => scroll('right')}
                className="review-scroll-arrow"
                aria-label="Next review"
              >
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </div>

          {/* Horizontal Scroller */}
          <div
            ref={scrollContainerRef}
            className="reviews-horizontal-scroller"
          >
            {clinicReviews.map((rev) => {
              const isExpanded = !!expandedReviews[rev.id];
              const isLong = rev.text.length > 210;
              const displayText = isExpanded || !isLong 
                ? rev.text 
                : `${rev.text.slice(0, 210)}...`;

              return (
                <div key={rev.id} className="review-scroll-item">
                  <div className="google-review-card h-100 d-flex flex-column">
                    {/* Header */}
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <div
                          className="google-review-avatar"
                          style={{ background: rev.avatarColor }}
                        >
                          {rev.author.charAt(0)}
                        </div>
                        <div>
                          <div className="google-review-author">{rev.author}</div>
                          <div className="google-review-time">{rev.timeAgo}</div>
                        </div>
                      </div>
                      {/* Google G Icon */}
                      <div className="google-badge-small">
                        <svg width="18" height="18" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Stars & Verified Tag */}
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <div className="google-stars" style={{ color: '#f59e0b', fontSize: 14 }}>
                        {[...Array(rev.rating)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star" />
                        ))}
                      </div>
                      <span className="google-verified-tag">
                        <i className="fa-solid fa-circle-check" /> Verified Patient
                      </span>
                    </div>

                    {/* Treatment Pill */}
                    <div className="google-treatment-pill mb-2">
                      {rev.treatment}
                    </div>

                    {/* Review Text with Read More */}
                    <p className="google-review-text flex-grow-1">
                      &ldquo;{displayText}&rdquo;
                      {isLong && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(rev.id)}
                          className="btn-read-more"
                        >
                          {isExpanded ? " Read Less" : " Read More"}
                        </button>
                      )}
                    </p>

                    {/* Card Footer */}
                    <div className="pt-3 mt-auto border-top d-flex justify-content-between align-items-center">
                      <span style={{ fontSize: 11.5, color: '#94a3b8' }}>Verified on Google Maps</span>
                      <a
                        href={rev.reviewUrl || GOOGLE_ALL_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="google-card-link"
                      >
                        View Review on Google &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
