import React from 'react';
import { doctorsData, DoctorItem } from '../data';

export default function DoctorsSection() {
  return (
    <section className="ftco-section test8 py-5" id="doctors">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section">
            <h2 className="mb-4" id="doctorsour" style={{ fontSize: '32px', fontWeight: 700, color: '#0b2545' }}>
              Our Doctors
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          {doctorsData.map((doc: DoctorItem) => (
            <div key={doc.id} className="col-12 col-sm-10 col-md-6 col-lg-4 mb-4">
              <div className="text-decoration-none text-dark">
                <div
                  className="staff h-100 d-flex flex-column bg-white shadow-sm rounded overflow-hidden"
                  style={{ border: '1px solid #e2e8f0', transition: 'transform 0.3s' }}
                >
                  <div className="img-wrap" style={{ height: '360px' }}>
                    <div
                      className="img w-100 h-100"
                      style={{
                        backgroundImage: `url(${doc.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                        borderTopLeftRadius: '8px',
                        borderTopRightRadius: '8px'
                      }}
                    ></div>
                  </div>
                  <div className="text pt-4 pb-4 px-3 text-center">
                    <h3 className="mb-1" style={{ fontSize: '20px', fontWeight: 700, color: '#0b2545' }}>
                      {doc.name}
                    </h3>
                    <span className="position mb-2 text-muted d-block" style={{ fontSize: '14px' }}>
                      {doc.role}
                    </span>
                    <div className="faded mt-2" style={{ color: '#008dcc', fontWeight: 700, letterSpacing: '1px' }}>
                      <b>{doc.tag}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
