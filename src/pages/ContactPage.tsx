import Seo from '../components/Seo';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Dentist in Shaikpet, Hyderabad | Simply Smilez Dental";
  }, []);

  return (
    <div className="page-wrapper contactpage">
      <Seo
        title="Contact Simply Smilez Dental Clinic | Shaikpet, Hyderabad"
        description="Contact Simply Smilez Dental Clinic in Shaikpet, Hyderabad. Find phone numbers, address on O.U Colony Road, clinic hours, and directions."
        canonicalPath="/contact"
      />
      <><section className="hero-wrap hero-wrap-2" style={{ backgroundImage: "url('images/bg_1.webp')" }} data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row no-gutters slider-text align-items-center justify-content-center">
        <div className="col-md-9 ftco-animate text-center">
          <h1 className="mb-2 bread">Contact Us</h1>
          <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home <i className="ion-ios-arrow-forward" /></Link></span> <span>Contact <i className="ion-ios-arrow-forward" /></span></p>
        </div>
      </div>
    </div>
  </section>

  <section className="ftco-section ftco-no-pt ftco-no-pb contact-section">
    <div className="container">
      <div className="row d-flex align-items-stretch no-gutters">
        <div className="col-md-6 p-4 p-md-5 order-md-last bg-light text-center d-flex align-items-center justify-content-center">
          <a href="https://maps.app.goo.gl/wvkijcKcuaGCoHTq9" target="_blank" className="d-block">
            <img src="/images/gmb.webp" className="img-fluid rounded shadow-sm" alt="Simply Smilez Dental Clinic Google Business" />
          </a>
        </div>
        <div className="col-md-6 d-flex align-items-stretch" style={{ backgroundColor: "skyblue", margin: "30px 0px", padding: 15 }}>
          <div className="ftco-footer-widget mb-5 d-flex flex-column justify-content-center w-100">
            <div>
              <p style={{ color: "white" }}>Simply Smilez Dental Clinic provides comprehensive dental care for children and
                adults in Shaikpet, Hyderabad.<br />Our services include Invisalign, Invisalign First for Kids, dental
                implants, braces, root canal treatment, dental crowns, veneers, teeth whitening, pediatric dentistry,
                wisdom tooth extraction, and general dental care.</p>
            </div>
            <b className="ftco-heading-2" style={{ fontWeight: "600" }}>Our Address</b>
            <div className="block-23 mb-3">
              <ul>
                <li className="open-hours pl-4"><span className="icon icon-map-marker" /><span className="text">P.V.Reddy
                    Complex 1st Floor, Dwaraka Nagar
                    Colony,<br /> O.U Colony Road. Shaikpet , Hyderabad, 500008</span></li>

              </ul>
            </div>
            <b className="ftco-heading-2" style={{ fontWeight: "600" }}>Opening Hours</b>
            <div className="block-23 mb-3">
              <ul>
                <li className="open-hours pl-4"><span className="ion-ios-time mr-3" />Mon - Sat: 10:00am - 9:00pm <span className="ion-ios-time mr-3" />Sun:
                  11:00am - 4:00pm </li>
              </ul>
            </div>
            <b className="ftco-heading-2" style={{ fontWeight: "600" }}>Email address</b>
            <div className="block-23 mb-3">
              <ul>
                <li className="open-hours pl-4"><a href="#"><span className="icon icon-envelope" /><span className="text">info.invisaligndental@gmail.com</span></a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
    
  </section></>
    </div>
  );
}
