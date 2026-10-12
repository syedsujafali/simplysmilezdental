import Seo from '../components/Seo';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TestimonialsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Patient Reviews &amp; Testimonials | Simply Smilez Dental Hyderabad";
  }, []);

  return (
    <div className="page-wrapper testimonialspage">
      <Seo
        title="Patient Testimonials & Reviews | Simply Smilez Dental Clinic Hyderabad"
        description="Read reviews and testimonials from patients who visited Simply Smilez Dental Clinic in Shaikpet, Hyderabad for dental treatments."
        canonicalPath="/testimonials"
      />
      <section className="ftco-section testimony-section bg-light">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-2">
        <div className="col-md-8 text-center heading-section ftco-animate">
          <span className="subheading">Testimonials</span>
          <h2 className="mb-4">Our Patients Says About Us</h2>
        </div>
      </div>
      <div className="row ftco-animate justify-content-center">
        <div className="col-md-12">
          <div className="carousel-testimony owl-carousel">
            <div className="item">
              <div className="testimony-wrap d-flex">
                <div className="user-img" style={{ backgroundImage: "url(images/person_1.webp)" }}>
                </div>
                <div className="text pl-4 bg-light">
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                  <p>&quot;Dr. SUSHIL KUMAR is my dental doctor for years now. I am very happy and pleased with his work. He
                    is very smart and his work is excellent.&quot;</p>
                  <p className="name">Ashok</p>
                  <span className="position">Dental Expert</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap d-flex">
                <div className="user-img" style={{ backgroundImage: "url(images/person_2.webp)" }}>
                </div>
                <div className="text pl-4 bg-light">
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                  <p>&quot;Dr Ankush has been working on my problematic teeth for the last 6 months. I am so thankful to him.
                    He is very gentle and caring.&quot;</p>
                  <p className="name">Ankush</p>
                  <span className="position">Dental Expert</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap d-flex">
                <div className="user-img" style={{ backgroundImage: "url(images/person_3.webp)" }}>
                </div>
                <div className="text pl-4 bg-light">
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                  <p>&quot;Awesome Dentist Great and legitimate service. You will look forward to going to there.&quot;</p>
                  <p className="name">Samatha</p>
                  <span className="position">Dental Expert</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap d-flex">
                <div className="user-img" style={{ backgroundImage: "url(images/person_1.webp)" }}>
                </div>
                <div className="text pl-4 bg-light">
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                  <p>&quot;Dr. SUSHIL KUMAR is my dental doctor for years now. I am very happy and pleased with his work. He
                    is very smart and his work is excellent.&quot;</p>
                  <p className="name">Ashok</p>
                  <span className="position">Dental Expert</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap d-flex">
                <div className="user-img" style={{ backgroundImage: "url(images/person_2.webp)" }}>
                </div>
                <div className="text pl-4 bg-light">
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                  <p>&quot;Dr Ankush has been working on my problematic teeth for the last 6 months. I am so thankful to him.
                    He is very gentle and caring.&quot;</p>
                  <p className="name">Ankush</p>
                  <span className="position">Dental Expert</span>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="testimony-wrap d-flex">
                <div className="user-img" style={{ backgroundImage: "url(images/person_3.webp)" }}>
                </div>
                <div className="text pl-4 bg-light">
                  <span className="quote d-flex align-items-center justify-content-center">
                    <i className="icon-quote-left" />
                  </span>
                  <p>&quot;Awesome Dentist Great and legitimate service. You will look forward to going to there.&quot;</p>
                  <p className="name">Samatha</p>
                  <span className="position">Dental Expert</span>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}
