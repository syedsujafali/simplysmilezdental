'use client';

import React, { useEffect } from 'react';
import Link from '../../components/Link';
import ServiceFaq from '../../components/ServiceFaq';

const dentalImplantSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/dental-implants#webpage",
      "url": "https://www.simplysmilezdental.in/services/dental-implants",
      "name": "Dental Implants in Hyderabad | Simply Smilez Dental Clinic",
      "description": "Get dental implants in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Explore tooth replacement options and personalized implant care.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/dental-implants#service"
      },
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/services/dental-implants#service"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.simplysmilezdental.in/images/dentalimp.webp",
        "caption": "Dental implant treatment at Simply Smilez Dental Clinic in Shaikpet, Hyderabad"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.simplysmilezdental.in/#website",
      "url": "https://www.simplysmilezdental.in/",
      "name": "Simply Smilez Dental Clinic",
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#clinic",
      "name": "Simply Smilez Dental Clinic",
      "url": "https://www.simplysmilezdental.in/",
      "image": "https://www.simplysmilezdental.in/images/about.webp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.simplysmilezdental.in/images/logo-3.webp"
      },
      "telephone": [
        "+91-9603338904",
        "+91-7799376656"
      ],
      "email": "info.invisaligndental@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road",
        "addressLocality": "Shaikpet",
        "addressRegion": "Telangana",
        "postalCode": "500008",
        "addressCountry": "IN"
      },
      "areaServed": [
        "Shaikpet",
        "O.U. Colony",
        "Dwaraka Nagar Colony",
        "Manikonda",
        "Tolichowki",
        "Raidurg",
        "Puppalaguda",
        "Film Nagar",
        "Jubilee Hills",
        "Banjara Hills",
        "Mehdipatnam",
        "Langar Houz",
        "Gachibowli",
        "Narsingi"
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/dental-implants#service",
      "name": "Dental Implant Treatment",
      "alternateName": [
        "Dental Implants",
        "Dental Implant Treatment in Hyderabad",
        "Tooth Replacement with Dental Implants"
      ],
      "description": "Dental implant treatment for replacing missing teeth with implant-supported dental restorations at Simply Smilez Dental Clinic in Shaikpet, Hyderabad.",
      "serviceType": "Dental Implant Treatment",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/dental-implants",
      "image": "https://www.simplysmilezdental.in/images/dentalimp.webp"
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.simplysmilezdental.in/services/dental-implants#procedure",
      "name": "Dental Implant Placement",
      "alternateName": "Dental Implant Treatment",
      "description": "Dental implant placement is a procedure used to provide support for a dental crown, bridge, or denture when replacing missing teeth.",
      "procedureType": "http://schema.org/PercutaneousProcedure",
      "bodyLocation": "Jaw",
      "url": "https://www.simplysmilezdental.in/services/dental-implants",
      "image": "https://www.simplysmilezdental.in/images/dentalimp.webp"
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.simplysmilezdental.in/services/dental-implants#implant-options",
      "name": "Dental Implant Treatment Options",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Single Tooth Dental Implant"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multiple Dental Implants"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Implant-Supported Dental Restoration"
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/dental-implants#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.simplysmilezdental.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Dental Implants",
          "item": "https://www.simplysmilezdental.in/services/dental-implants"
        }
      ]
    }
  ]
};

export default function DentalImplantPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Dental Implants in Hyderabad | Simply Smilez Dental Clinic";

    // Meta Helper function
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(attr);
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Canonical link helper
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = "https://www.simplysmilezdental.in/services/dental-implants";

    // Metadata
    setMeta("description", "Get dental implants in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Explore tooth replacement options and personalized implant care.");
    setMeta("keywords", "dental implants Hyderabad, dental implant treatment Hyderabad, dental implants Shaikpet, dental implant dentist Hyderabad, dental implant clinic Hyderabad, single tooth implant Hyderabad, tooth replacement Hyderabad, implant dentist Shaikpet");
    setMeta("author", "Simply Smilez Dental Clinic");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Dental Implants in Hyderabad | Simply Smilez Dental Clinic", true);
    setMeta("og:description", "Get dental implants in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Explore tooth replacement options and personalized implant care.", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/services/dental-implants", true);
    setMeta("og:site_name", "Simply Smilez Dental Clinic", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/dentalimp.webp", true);
    setMeta("og:image:alt", "Dental implant treatment at Simply Smilez Dental Clinic in Shaikpet, Hyderabad", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Dental Implants in Hyderabad | Simply Smilez Dental Clinic");
    setMeta("twitter:description", "Get dental implants in Hyderabad at Simply Smilez Dental Clinic, Shaikpet, with personalized tooth replacement and implant care.");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/dentalimp.webp");

    // Dynamic Schema script injection
    const scriptId = 'dental-implant-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(dentalImplantSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper dentalimplantpage">
      <div className="container py-5 text-left">
        <div className="row">
          <div className="col-lg-8 col-md-12 text-left">
            <div className="about-us text-left">
              <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: "#00b7ff" }}>
                Dental Implants in Hyderabad | Simply Smilez Dental Clinic
              </h1>
              <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

              <h2 className="h4 font-weight-bold mb-3 text-left" style={{ color: "#0d3b66" }}>Replace Missing Teeth With Dental Implants in Hyderabad</h2>

              <p className="lead text-left">Dental implants are a fixed tooth-replacement
                option for people with one or more missing teeth. An implant is placed in the jawbone and can support a
                dental crown, bridge, or denture. The right treatment depends on your oral health, gum condition, available
                bone, and restoration needs.</p>

              <p className="text-left">Simply Smilez Dental Clinic provides dental implant treatment in Shaikpet, Hyderabad,
                with patients also welcomed from nearby areas including Manikonda, Tolichowki, Jubilee Hills, Banjara Hills,
                Gachibowli, Narsingi, and surrounding localities.</p>

              <div className="my-4 text-left">
                <Link to="/contact" className="btn btn-primary px-4 py-2">Book a Dental Implant Consultation</Link>
              </div>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Are Dental Implants?</h3>
          <p className="text-left">A dental implant is an artificial tooth root placed into the jawbone to provide support
            for a replacement tooth. Depending on the situation, an implant can support a single dental crown, bridge,
            or denture.</p>

          <p className="text-left">Unlike a removable denture, an implant-supported restoration is designed to remain fixed
            in the mouth. Dental implants may be considered for replacing one missing tooth, several missing teeth, or
            supporting a denture when clinically appropriate.</p>

          <p className="text-left">The Simply Smilez Dental Clinic website describes dental implants as a way to replace
            missing teeth and provide a fixed alternative to removable partial or complete dentures.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Who May Need Dental Implants?</h2>
          <p className="text-left font-weight-bold mb-2">Dental implants may be considered if you have:</p>
          <ul className="text-left pl-4 mb-4">
            <li>One missing tooth</li>
            <li>Several missing teeth</li>
            <li>Teeth that require extraction and replacement</li>
            <li>A removable denture that needs additional support</li>
            <li>A gap where you want to explore a fixed replacement option</li>
          </ul>
          <p className="text-left">Your dentist must first assess your teeth, gums, jawbone, bite, oral hygiene, and general
            health. Active dental disease or inadequate bone may need to be addressed before implant placement.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Benefits of Dental Implants</h2>
          <p className="text-left">When suitable for the patient, dental implants can offer several practical benefits:</p>
          <ul className="text-left pl-4 mb-4">
            <li><strong>Fixed tooth replacement:</strong> The restoration is secured to an implant rather than being a
              conventional removable denture.</li>
            <li><strong>Replacement of individual teeth:</strong> An implant-supported crown can replace a missing tooth
              without using neighboring teeth as bridge supports in suitable cases.</li>
            <li><strong>Support for multiple teeth:</strong> Implants can be used to support bridges or dentures.</li>
            <li><strong>Restored chewing function:</strong> Replacing missing teeth can help restore the ability to
              chew.</li>
            <li><strong>Natural-looking restoration:</strong> The visible crown or other restoration is designed to
              resemble a tooth.</li>
            <li><strong>Support for dentures:</strong> Implant-supported dentures can provide an alternative to
              conventional removable dentures.</li>
          </ul>
          <p className="text-left">Implants are not automatically the right choice for everyone. Your dentist should explain
            the benefits, limitations, risks, alternatives, and expected treatment stages before you decide.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>How Dental Implant Treatment Works
          </h2>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Step 1: Consultation and
            Assessment</h3>
          <p className="text-left">The first stage is a dental examination. Your dentist evaluates the missing tooth or
            teeth, gum health, remaining teeth, and available bone. Dental X-rays or other imaging may be used for
            treatment planning.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Step 2: Treatment Planning</h3>
          <p className="text-left">Your dentist determines whether an implant is appropriate and discusses the proposed
            restoration. If bone volume is insufficient, bone grafting may sometimes be considered. Not every patient
            requires a graft.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Step 3: Implant Placement</h3>
          <p className="text-left">The implant is surgically placed into the jawbone, generally using local anesthesia. The
            gum is positioned around the implant and allowed to heal.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Step 4: Healing</h3>
          <p className="text-left">The implant needs time to integrate with the surrounding bone before it is used to
            support the final restoration. The healing period varies depending on the individual treatment plan.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Step 5: Final Restoration</h3>
          <p className="text-left">Once healing and implant stability are appropriate, a crown, bridge, or denture can be
            connected to the implant.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Dental Implant Options</h2>
          <div className="table-responsive mb-4">
            <table className="table table-bordered text-left">
              <thead className="bg-light">
                <tr>
                  <th scope="col">Situation</th>
                  <th scope="col">Possible restoration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>One missing tooth</td>
                  <td>Implant-supported crown</td>
                </tr>
                <tr>
                  <td>Several missing teeth</td>
                  <td>Implant-supported bridge</td>
                </tr>
                <tr>
                  <td>Multiple missing teeth</td>
                  <td>Implant-supported denture or other restoration</td>
                </tr>
                <tr>
                  <td>Extensive tooth loss</td>
                  <td>Implant-supported full-arch restoration, where appropriate</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-left">The final choice depends on clinical examination, bone support, gum health, bite,
            remaining teeth, and the patient&apos;s treatment requirements.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Dental Implant Cost Considerations
          </h2>
          <p className="text-left">The cost of dental implant treatment cannot be accurately determined from the number of
            implants alone.</p>
          <p className="text-left font-weight-bold mb-2">Factors that may influence treatment cost include:</p>
          <ul className="text-left pl-4 mb-4">
            <li>Number of missing teeth</li>
            <li>Number of implants required</li>
            <li>Type of restoration</li>
            <li>Diagnostic imaging</li>
            <li>Bone grafting or additional procedures</li>
            <li>Complexity of the case</li>
            <li>Laboratory and restorative requirements</li>
          </ul>
          <p className="text-left">A consultation allows the dentist to assess your specific requirements and provide a
            treatment plan before treatment begins.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Who Is Not Automatically Suitable
            for Implants?</h2>
          <p className="text-left">Dental implants require adequate planning and maintenance. Patients with active dental
            infections, untreated gum disease, inadequate bone, poor oral hygiene, or certain medical considerations may
            need additional treatment or assessment before implant placement. Smoking can also increase certain
            implant-related risks.</p>
          <p className="text-left">This does not mean that every patient with one of these factors cannot receive an
            implant. Your dentist can evaluate the individual situation and discuss appropriate options.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Dental Implant Aftercare</h2>
          <p className="text-left">Dental implants need regular oral hygiene and professional monitoring. Brush and clean
            between your teeth as recommended by your dentist and attend follow-up appointments.</p>
          <p className="text-left">After implant surgery, some soreness, swelling, bruising, or minor bleeding may occur.
            Your dental team should provide personalized post-operative instructions and advise you about symptoms
            requiring further attention.</p>
          <p className="text-left mb-4">Long-term care is important because the gums and tissues surrounding an implant need
            to remain healthy. Good oral hygiene and regular dental examinations can help monitor the implant and
            restoration.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Why Choose Simply Smilez Dental
            Clinic?</h2>
          <p className="text-left">Simply Smilez Dental Clinic is a dental clinic in Shaikpet, Hyderabad, offering dental
            implants alongside other dental services including crowns, veneers, braces and aligners, microscopic root canal
            treatment, laser gum surgery, teeth whitening, pediatric dentistry, and wisdom tooth extractions.</p>
          <p className="text-left">The clinic&apos;s website identifies Dr. Susheel Kumar as a pediatric dentist and
            implantologist and Dr. Ankush Kumar as an orthodontist and Invisalign provider.</p>
          <p className="text-left">The clinic is located at: <strong>P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony,
              O.U. Colony Road, Shaikpet, Hyderabad &ndash; 500008.</strong></p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Service Area</h2>
          <p className="text-left font-weight-bold mb-2">Simply Smilez Dental Clinic welcomes patients from:</p>
          <ul className="text-left pl-4 mb-4">
            <li>O.U. Colony</li>
            <li>Dwaraka Nagar Colony</li>
            <li>Manikonda</li>
            <li>Tolichowki</li>
            <li>Raidurg</li>
            <li>Puppalaguda</li>
            <li>Film Nagar</li>
            <li>Jubilee Hills</li>
            <li>Banjara Hills</li>
            <li>Mehdipatnam</li>
            <li>Langar Houz</li>
            <li>Gachibowli</li>
            <li>Narsingi</li>
            <li>Nearby Hyderabad areas</li>
          </ul>
          
          <div className="mt-5 pt-4 border-top text-left">
            <h3 className="h4 font-weight-bold mb-3 text-left" style={{ color: "#0d3b66" }}>Explore Other Dental Services</h3>
            <p className="text-left mb-4">Simply Smilez Dental Clinic in Shaikpet, Hyderabad offers a full range of
              comprehensive dental treatments:</p>
            <div className="row">
              <div className="col-md-6 col-12 mb-3">
                <Link to="/services/composite-fillings" className="service-card-link p-3 text-left">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="h6 font-weight-bold service-title mb-0 text-left">Composite Teeth Fillings</h5>
                      <i className="fas fa-chevron-right text-primary small" />
                    </div>
                    <p className="small text-muted mb-2 text-left">Tooth-colored restorations for decay and minor tooth
                      repair.</p>
                  </div>
                  <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                </Link>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <Link to="/services/crowns" className="service-card-link p-3 text-left">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="h6 font-weight-bold service-title mb-0 text-left">Dental Crowns &amp; Bridges</h5>
                      <i className="fas fa-chevron-right text-primary small" />
                    </div>
                    <p className="small text-muted mb-2 text-left">Custom restorative crowns and bridges to restore broken
                      or missing teeth.</p>
                  </div>
                  <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                </Link>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <Link to="/services/veneers" className="service-card-link p-3 text-left">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="h6 font-weight-bold service-title mb-0 text-left">Dental Veneers</h5>
                      <i className="fas fa-chevron-right text-primary small" />
                    </div>
                    <p className="small text-muted mb-2 text-left">Custom cosmetic porcelain &amp; composite veneers for a
                      radiant smile.</p>
                  </div>
                  <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                </Link>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <Link to="/services/braces" className="service-card-link p-3 text-left">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="h6 font-weight-bold service-title mb-0 text-left">Braces &amp; Invisalign</h5>
                      <i className="fas fa-chevron-right text-primary small" />
                    </div>
                    <p className="small text-muted mb-2 text-left">Orthodontic treatment including metal/ceramic braces
                      &amp; clear aligners.</p>
                  </div>
                  <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                </Link>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <Link to="/services/laser-teeth-whitening" className="service-card-link p-3 text-left">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="h6 font-weight-bold service-title mb-0 text-left">Laser Teeth Whitening</h5>
                      <i className="fas fa-chevron-right text-primary small" />
                    </div>
                    <p className="small text-muted mb-2 text-left">Professional in-clinic laser teeth bleaching for a bright
                      smile.</p>
                  </div>
                  <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                </Link>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <Link to="/services/microscopic-root-canal" className="service-card-link p-3 text-left">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="h6 font-weight-bold service-title mb-0 text-left">Microscopic Root Canal Treatment</h5>
                      <i className="fas fa-chevron-right text-primary small" />
                    </div>
                    <p className="small text-muted mb-2 text-left">Advanced microscope-guided endodontics for precise tooth preservation.</p>
                  </div>
                  <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                </Link>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <Link to="/services/laser-gum-surgery" className="service-card-link p-3 text-left">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="h6 font-weight-bold service-title mb-0 text-left">Laser Gum Surgery</h5>
                      <i className="fas fa-chevron-right text-primary small" />
                    </div>
                    <p className="small text-muted mb-2 text-left">Minimally invasive laser periodontal treatment for
                      healthy gums.</p>
                  </div>
                  <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                </Link>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <Link to="/services/dental-implants" className="service-card-link p-3 text-left">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="h6 font-weight-bold service-title mb-0 text-left">Dental Implants</h5>
                      <i className="fas fa-chevron-right text-primary small" />
                    </div>
                    <p className="small text-muted mb-2 text-left">Permanent tooth replacement solution with titanium
                      implants.</p>
                  </div>
                  <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                </Link>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <Link to="/services/pediatric-dentistry" className="service-card-link p-3 text-left">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="h6 font-weight-bold service-title mb-0 text-left">Pediatric Dentistry</h5>
                      <i className="fas fa-chevron-right text-primary small" />
                    </div>
                    <p className="small text-muted mb-2 text-left">Gentle dental care, checkups, and preventive treatments
                      for children.</p>
                  </div>
                  <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                </Link>
              </div>
              <div className="col-md-6 col-12 mb-3">
                <Link to="/services/wisdom-tooth-extraction" className="service-card-link p-3 text-left">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="h6 font-weight-bold service-title mb-0 text-left">Wisdom Tooth Extraction</h5>
                      <i className="fas fa-chevron-right text-primary small" />
                    </div>
                    <p className="small text-muted mb-2 text-left">Painless removal of problematic or impacted third molars.
                    </p>
                  </div>
                  <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                </Link>
              </div>
            </div>
          </div>

          
          <ServiceFaq
            title="Frequently Asked Questions"
            faqs={[
              {
                question: "What are dental implants?",
                answer: "Dental implants are artificial tooth roots placed into the jawbone to support a crown, bridge, or denture. They can be used to replace one or multiple missing teeth. Whether implants are appropriate depends on factors such as bone support, gum health, oral hygiene, general health, and the planned restoration."
              },
              {
                question: "How long does dental implant treatment take?",
                answer: "The timeline varies according to the patient's condition and treatment plan. Implant treatment may involve assessment, implant placement, healing, and restoration. If bone grafting or other procedures are required, treatment may take longer. Your dentist can provide a more specific timeline after examining your teeth and jawbone."
              },
              {
                question: "Can one missing tooth be replaced with an implant?",
                answer: "Yes. A single missing tooth can often be replaced using an implant-supported crown. One potential advantage is that the replacement does not require preparation of neighboring healthy teeth for bridge support. Suitability depends on the condition of the implant site and surrounding oral tissues."
              },
              {
                question: "Do I need a bone graft before a dental implant?",
                answer: "Not necessarily. A bone graft may be recommended when there is not enough bone to provide suitable support for an implant. The need for grafting depends on the individual's jawbone and planned implant position. Dental imaging and clinical assessment help determine whether additional bone treatment is required."
              },
              {
                question: "Are dental implants permanent?",
                answer: "Dental implants are intended as long-term tooth-replacement solutions, but they are not maintenance-free. Implant components can loosen or wear over time, and the tissues around implants can develop problems. Regular oral hygiene, professional monitoring, and appropriate maintenance are important for long-term implant health."
              },
              {
                question: "What does dental implant treatment cost in Hyderabad?",
                answer: "There is no single price that applies to every implant case. Cost can depend on the number of implants, restoration type, imaging, bone grafting, complexity, and laboratory requirements. A consultation is the appropriate way to determine the treatment needed and its associated cost."
              },
              {
                question: "Where can I get dental implants in Shaikpet?",
                answer: "Simply Smilez Dental Clinic provides dental implant treatment at P.V. Reddy Complex, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad. The clinic also welcomes patients from Manikonda, Tolichowki, Jubilee Hills, Banjara Hills, Gachibowli, Narsingi, and nearby areas."
              }
            ]}
          />

          
          <div className="bg-light p-4 rounded text-left border mb-4">
            <h3 className="h4 font-weight-bold text-left mb-3" style={{ color: "#0d3b66" }}>Ready to Discuss Your Dental
              Treatment?</h3>
            <p className="text-left">If you are considering dental treatment in Hyderabad, start with a professional
              consultation rather than choosing a treatment based only on online information.</p>
            <p className="text-left">Book a consultation at Simply Smilez Dental Clinic in Shaikpet to discuss your
              concerns, available treatment options, expected treatment stages, and appropriate care.</p>
            <div className="mt-3 text-left">
              <p className="mb-1 text-left"><strong>Simply Smilez Dental Clinic</strong></p>
              <p className="mb-1 text-left">P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet,
                Hyderabad &ndash; 500008</p>
              <p className="mb-1 text-left">Opening hours: Monday&ndash;Saturday, 10:00 AM&ndash;8:30 PM; Sunday, 10:30 AM&ndash;1:00 PM.</p>
              <p className="mb-1 text-left">Phone: <a href="tel:+919603338904">96033 38904</a> / <a href="tel:+917799376656">77993 76656</a></p>
              <p className="mb-3 text-left">Email: <a href="mailto:info.invisaligndental@gmail.com">info.invisaligndental@gmail.com</a></p>
              <Link to="/contact" className="btn btn-primary px-4 py-2">Book Consultation</Link>
            </div>
          </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 mt-4 mt-lg-0 text-left">
            <div className="sticky-top" style={{ top: 100 }}>
              <div className="card border-0 shadow-sm mb-4">
                <img src="/images/dentalimp.webp" className="card-img-top rounded-top" alt="Dental Implants in Hyderabad" />
                <div className="card-body text-left p-4">
                  <h4 className="card-title font-weight-bold mb-2 text-left">Dental Implants</h4>
                  <p className="card-text text-muted text-left">Restore your smile and chewing function with fixed,
                    natural-looking dental implants.</p>
                  <Link to="/contact" className="btn btn-primary btn-block">Book Consultation</Link>
                </div>
              </div>

              <div className="bg-primary text-white p-4 rounded shadow-sm text-left">
                <h4 className="text-white font-weight-bold mb-3 text-left">Simply Smilez Dental Clinic</h4>
                <p className="mb-3 text-left"><i className="icon-map-marker mr-2" /> <a href="https://maps.app.goo.gl/wvkijcKcuaGCoHTq9" target="_blank" rel="noopener noreferrer" className="text-white">P.V.Reddy Complex 1st Floor, Dwaraka Nagar Colony, O.U Colony Road, Shaikpet,
                    Hyderabad, 500008</a></p>
                <p className="mb-3 text-left font-weight-bold" style={{ fontSize: "1.05rem" }}>
                  <a href="tel:+917799376656" className="text-white">77993 76656</a> / <a href="tel:+919603338904" className="text-white">96033 38904</a>
                </p>
                <p className="mb-0 text-left"><i className="ion-ios-time mr-2" /> Mon &ndash; Sat: 10:00am &ndash; 8:30pm<br /><span className="pl-4">Sun: 10:30am &ndash; 1:00pm</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
