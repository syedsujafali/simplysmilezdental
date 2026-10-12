import Seo from '../components/Seo';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function DoctorsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Simply Smilez Dental Clinic";
  }, []);

  return (
    <div className="page-wrapper doctorspage">
      <Seo
        title="Expert Dentists in Shaikpet, Hyderabad | Simply Smilez Dental Team"
        description="Meet our senior dentists: Dr. Ankush Kumar MDS (Orthodontist & Invisalign Provider) and Dr. Susheel Kumar MDS (Pediatric Dentist & Implantologist)."
        canonicalPath="/doctors"
      />
      <section>

    <section className="ftco-section test8">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section">
            <h2 className="mb-4" id="doctorsour">Our Doctors</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <Link to="/doctor/dr-ankush-kumar" className="text-decoration-none text-dark">
              <div className="staff h-100 d-flex flex-column">
                <div className="img-wrap flex-grow-1">
                  <div className="img w-100 h-100" style={{ backgroundImage: "url('images/ankush.webp')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: 10 }}>
                  </div>
                </div>
                <div className="text pt-4 text-center">
                  <h3 className="mb-1">ANKUSH KUMAR MDS</h3>
                  <span className="position mb-2 text-muted">(Orthodontist and Invisalign Provider)</span>
                  <div className="faded">
                    <b>- SR DOCTOR -</b>
                  </div>
                  <div className="mt-2">
                    <span className="btn btn-sm btn-primary px-3 py-1">View Full Profile</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <Link to="/doctor/dr-susheel-kumar" className="text-decoration-none text-dark">
              <div className="staff h-100 d-flex flex-column">
                <div className="img-wrap flex-grow-1">
                  <div className="img w-100 h-100" style={{ backgroundImage: "url('/images/susheel1.png')", backgroundSize: "cover", backgroundPosition: "top center", borderRadius: 10 }}>
                  </div>
                </div>
                <div className="text pt-4 text-center">
                  <h3 className="mb-1">SUSHEEL KUMAR MDS</h3>
                  <span className="position mb-2 text-muted">(Pediatric Dentist and Implantologist)</span>
                  <div className="faded">
                    <b>- SR DOCTOR -</b>
                  </div>
                  <div className="mt-2">
                    <span className="btn btn-sm btn-primary px-3 py-1">View Full Profile</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section></section>
    </div>
  );
}
