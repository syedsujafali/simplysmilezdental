'use client';

import React, { useEffect } from 'react';
import Link from '../../components/Link';
import ServiceFaq from '../../components/ServiceFaq';

const compositeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#dentist",
      "name": "Simply Smilez Dental Clinic",
      "url": "https://www.simplysmilezdental.in/",
      "medicalSpecialty": "https://schema.org/Dentistry",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Shaikpet",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/composite-fillings#service",
      "name": "Composite Fillings",
      "serviceType": "Composite Dental Fillings",
      "description": "Tooth-coloured composite fillings for restoring teeth affected by cavities, decay or minor damage.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/composite-fillings"
    },
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/composite-fillings#webpage",
      "url": "https://www.simplysmilezdental.in/services/composite-fillings",
      "name": "Composite Fillings in Hyderabad | Tooth-Coloured Dental Fillings",
      "description": "Learn about composite fillings in Hyderabad, including tooth-coloured fillings, benefits, procedure, suitability and aftercare.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/composite-fillings#service"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/services/composite-fillings#breadcrumb"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.simplysmilezdental.in/#website",
      "url": "https://www.simplysmilezdental.in/",
      "name": "Simply Smilez Dental Clinic",
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/composite-fillings#breadcrumb",
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
          "name": "Composite Fillings",
          "item": "https://www.simplysmilezdental.in/services/composite-fillings"
        }
      ]
    }
  ]
};

export default function CompositeFillingsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Composite Fillings in Hyderabad | Tooth-Coloured Dental Fillings";

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
    canonical.href = "https://www.simplysmilezdental.in/services/composite-fillings";

    // Metadata
    setMeta("description", "Looking for composite fillings in Hyderabad? Learn about tooth-coloured fillings, benefits, procedure, suitability and aftercare at Simply Smilez Dental Clinic, Shaikpet.");
    setMeta("keywords", "composite fillings Hyderabad, tooth-coloured dental fillings Hyderabad, composite dental fillings Shaikpet, dental fillings Shaikpet, Simply Smilez Dental Clinic");
    setMeta("author", "Simply Smilez Dental Clinic");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Composite Fillings in Hyderabad | Tooth-Coloured Dental Fillings", true);
    setMeta("og:description", "Looking for composite fillings in Hyderabad? Learn about tooth-coloured fillings, benefits, procedure, suitability and aftercare at Simply Smilez Dental Clinic, Shaikpet.", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/services/composite-fillings", true);
    setMeta("og:site_name", "Simply Smilez Dental Clinic", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/composite.webp", true);
    setMeta("og:image:alt", "Composite tooth-coloured dental fillings in Hyderabad", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Composite Fillings in Hyderabad | Tooth-Coloured Dental Fillings");
    setMeta("twitter:description", "Learn about composite fillings in Hyderabad, including benefits, procedure, suitability and aftercare at Simply Smilez Dental Clinic, Shaikpet.");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/composite.webp");

    // Dynamic Schema script injection
    const scriptId = 'composite-fillings-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(compositeSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper compositefillingspage">
      <div className="container py-5 text-left">
    <div className="row">
      <div className="col-lg-8 col-md-12 text-left">
        <div className="about-us text-left">
          <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: "#00b7ff" }}>Composite Fillings in Hyderabad for
            Natural-Looking Tooth Restoration</h1>
          <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

          <p className="lead text-left">A cavity, small chip or damaged portion of a tooth can affect both its appearance
            and function. Composite fillings offer a tooth-coloured way to restore suitable areas of tooth damage while
            keeping the restoration discreet.</p>
          <p className="text-left">At Simply Smilez Dental Clinic in Shaikpet, Hyderabad, composite fillings are offered as
            part of comprehensive restorative and family dental care. The clinic is conveniently located on O.U. Colony
            Road and serves patients from Shaikpet and nearby areas including Manikonda, Tolichowki, Raidurg,
            Puppalaguda, Film Nagar, Jubilee Hills, Banjara Hills, Mehdipatnam, Langar Houz, Gachibowli and Narsingi.
          </p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Are Composite Fillings?</h3>
          <p className="text-left">Composite fillings are restorations made from resin-based, tooth-coloured composite
            material. The material is placed directly into a prepared area of the tooth and shaped to restore its form.
          </p>
          <p className="text-left">One of the main advantages of composite is its appearance. Unlike a silver-coloured
            restoration, composite can be selected to blend with the natural shade of the tooth.</p>
          <p className="text-left">The American Dental Association notes that resin-based composites can be used for
            fillings and are particularly suited to many small- to medium-sized restorations, depending on the tooth and
            clinical situation. They can be used on both front and back teeth.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>When Is a Composite Filling
            Needed?</h3>
          <p className="text-left">A dentist may recommend a composite filling when a tooth has a cavity or limited damage
            that can be adequately restored with a direct filling.</p>
          <p className="text-left">Common situations may include:</p>
          <ul className="text-left pl-4">
            <li>Dental cavities caused by tooth decay</li>
            <li>Small or moderate areas of tooth damage</li>
            <li>Certain minor chips or fractures</li>
            <li>Replacement of an existing filling</li>
            <li>Restoration of teeth where appearance is an important consideration</li>
          </ul>
          <p className="text-left">However, every cavity is different. The appropriate treatment depends on the size and
            location of the affected area, the amount of healthy tooth structure remaining and the forces placed on the
            tooth during chewing.</p>
          <p className="text-left">If a tooth has extensive damage, a filling may not provide enough protection. In such
            cases, your dentist may discuss alternatives such as an inlay, onlay or dental crown.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Why Choose Tooth-Coloured
            Composite Fillings?</h3>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Natural-looking appearance</h5>
          <p className="text-left">Composite fillings can be matched to the colour of the surrounding tooth. This makes them
            particularly attractive for visible teeth where patients want their dental restoration to be less
            noticeable.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Suitable for selected front and back teeth</h5>
          <p className="text-left">Composite materials can be used for both anterior and posterior restorations when the
            clinical conditions are appropriate. The dentist will consider the size and position of the restoration
            before selecting the material.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Restoration of damaged tooth structure</h5>
          <p className="text-left">A filling can restore the shape of a tooth affected by decay or limited damage and help
            maintain normal function when the tooth is suitable for direct restoration.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Aesthetic alternative</h5>
          <p className="text-left">For patients concerned about the appearance of traditional silver-coloured restorations,
            tooth-coloured composite provides an aesthetic option.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Individualised treatment</h5>
          <p className="text-left">The choice of filling material should not be based on appearance alone. Dentists also
            consider the tooth&apos;s location, cavity size, expected longevity, chewing forces and cost when discussing
            restorative options.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>How Is a Composite Filling Placed?
          </h3>
          <p className="text-left">The procedure begins with an examination of the affected tooth. Depending on the symptoms
            and clinical findings, the dentist may recommend an X-ray to assess the tooth and surrounding structures.
          </p>
          <p className="text-left">If a composite filling is appropriate, the affected area is prepared and any decayed
            tooth structure that needs to be removed is treated. The tooth must be kept appropriately clean and dry
            during placement because moisture control is important when bonding composite materials.</p>
          <p className="text-left">The composite material is then placed into the prepared area and shaped to recreate the
            tooth&apos;s natural form. Depending on the material and technique, the composite is hardened using a dental
            curing light.</p>
          <p className="text-left">Finally, the dentist shapes and polishes the restoration and checks the bite to make sure
            the restored tooth functions comfortably.</p>
          <p className="text-left">The exact technique can vary depending on the tooth, the size of the restoration and the
            material selected.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Are Composite Fillings Suitable
            for Every Tooth?</h3>
          <p className="text-left">No. A composite filling is not automatically the right treatment for every cavity or
            damaged tooth.</p>
          <p className="text-left">For a relatively small or moderate restoration, composite may be appropriate. However, a
            large restoration in a heavily loaded area may require a different approach. The ADA identifies large
            restorations as a limitation for resin-based composite materials and emphasises that restorative material
            selection should be based on the clinical situation.</p>
          <p className="text-left">This is why an examination is important before deciding on a filling.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Composite Fillings vs Other Dental
            Restorations</h3>
          <p className="text-left">Patients sometimes ask whether a composite filling is better than a crown, veneer or
            another restoration. These treatments serve different purposes.</p>
          <p className="text-left">A composite filling is generally used to restore a limited area of tooth damage.</p>
          <p className="text-left">A dental crown covers the tooth and may be considered when substantial tooth structure
            needs protection.</p>
          <p className="text-left">A veneer is primarily used to change the appearance of the visible front surface of a
            tooth and is not simply another type of cavity filling.</p>
          <p className="text-left">The most appropriate treatment depends on the condition of your tooth rather than on the
            name of the procedure.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>How Long Do Composite Fillings
            Last?</h3>
          <p className="text-left">A composite filling is not a permanent restoration. Its lifespan can vary depending on
            factors such as the size and location of the filling, biting forces, oral hygiene, diet, tooth wear and the
            condition of the surrounding tooth.</p>
          <p className="text-left">The existing Simply Smilez Dental Clinic information also notes that dental fillings do
            not last forever and that composite restorations may require replacement over time.</p>
          <p className="text-left">Regular dental examinations can help your dentist monitor existing fillings and identify
            changes before they develop into more extensive problems.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Caring for a Composite Filling
          </h3>
          <p className="text-left">Good oral hygiene remains important after receiving a filling. A restored tooth can still
            develop decay around or elsewhere in the tooth if oral hygiene and preventive care are neglected.</p>
          <p className="text-left">For maintaining your oral health:</p>
          <ul className="text-left pl-4">
            <li>Brush your teeth twice a day with fluoride toothpaste.</li>
            <li>Clean between your teeth regularly.</li>
            <li>Reduce frequent sugary snacks and drinks.</li>
            <li>Attend recommended dental check-ups.</li>
            <li>Contact your dentist if you experience persistent sensitivity, pain or discomfort.</li>
            <li>Avoid biting very hard non-food objects with your teeth.</li>
          </ul>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Composite Fillings in Shaikpet,
            Hyderabad</h3>
          <p className="text-left">Simply Smilez Dental Clinic provides composite fillings and other restorative dental
            treatments in Shaikpet, Hyderabad. The clinic is located at P.V. Reddy Complex, 1st Floor, Dwaraka Nagar
            Colony, O.U. Colony Road, Shaikpet, Hyderabad &ndash; 500008. The clinic&apos;s listed services also include crowns,
            veneers, braces and aligners, Invisalign, dental implants, root canal treatment, laser gum treatment, teeth
            whitening, pediatric dentistry and wisdom tooth extraction.</p>
          
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
                question: "Are composite fillings tooth-coloured?",
                answer: "Yes. Composite resin is designed to provide a tooth-coloured restoration that can blend with the surrounding natural tooth."
              },
              {
                question: "Can composite fillings be used for front teeth?",
                answer: "Yes. Composite materials can be used for suitable front-tooth restorations, particularly when maintaining a natural appearance is important."
              },
              {
                question: "Can composite fillings be used for back teeth?",
                answer: "Yes, composite can be used on back teeth when the restoration is clinically suitable. The size, location and chewing forces need to be considered before treatment."
              },
              {
                question: "Are composite fillings permanent?",
                answer: "No dental filling should be considered permanent. Composite restorations can eventually require repair or replacement depending on their condition and the tooth's circumstances."
              },
              {
                question: "How much does a composite filling cost in Hyderabad?",
                answer: "The cost depends on the tooth being treated, the size and complexity of the restoration and the treatment required. An examination is necessary to determine the appropriate treatment and provide the current fee."
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
            <img src="/images/composite.webp" className="card-img-top rounded-top" alt="Composite Tooth-Coloured Filling" />
            <div className="card-body text-left p-4">
              <h4 className="card-title font-weight-bold mb-2 text-left">Composite Fillings</h4>
              <p className="card-text text-muted text-left">Discreet, tooth-coloured restorations for cavities and tooth
                damage.</p>
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
