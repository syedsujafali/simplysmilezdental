'use client';

import React, { useEffect } from 'react';
import Link from '../../components/Link';
import ServiceFaq from '../../components/ServiceFaq';

const crownsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#dentist",
      "name": "Simply Smilez Dental Clinic",
      "url": "https://www.simplysmilezdental.in/",
      "telephone": "+91-7799376656",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet",
        "addressLocality": "Hyderabad",
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
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/crowns#webpage",
      "url": "https://www.simplysmilezdental.in/services/crowns",
      "name": "Dental Crowns in Hyderabad | Simply Smilez Dental Clinic",
      "description": "Learn about dental crowns in Hyderabad, including crown types, benefits, procedure, aftercare and treatment options at Simply Smilez Dental Clinic in Shaikpet.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/crowns#service"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/crowns#service",
      "name": "Dental Crowns",
      "serviceType": "Dental Crown Treatment",
      "description": "Dental crown treatment for damaged, weakened, cracked or extensively restored teeth, including suitable porcelain, ceramic and zirconia crown options.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/crowns"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/services/crowns#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is a dental crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A dental crown is a custom restoration that covers a tooth above the gum line to restore its shape, function and, where appropriate, appearance."
          }
        },
        {
          "@type": "Question",
          "name": "Does every damaged tooth need a crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The appropriate treatment depends on the extent of damage and the amount of healthy tooth structure remaining. A filling, inlay, onlay or another restoration may be suitable in some cases."
          }
        },
        {
          "@type": "Question",
          "name": "Are zirconia crowns available?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zirconia is a ceramic material that can be used to make dental crowns. Your dentist can determine whether a zirconia crown is suitable for your particular tooth."
          }
        },
        {
          "@type": "Question",
          "name": "How many appointments are needed for a dental crown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The number of appointments depends on the condition of the tooth, the type of crown and any additional treatment required."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a dental crown cost in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on the type of crown, tooth being treated, preparation required and any additional dental treatment needed. A dental examination is required to determine the appropriate treatment and current cost."
          }
        }
      ]
    }
  ]
};

export default function CrownsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Dental Crowns in Hyderabad | Simply Smilez Dental Clinic";

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
    canonical.href = "https://www.simplysmilezdental.in/services/crowns";

    // Metadata
    setMeta("description", "Get dental crowns in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Learn about crown types, benefits, procedure, aftercare, and treatment options.");
    setMeta("keywords", "dental crowns in Hyderabad, dental crowns in Shaikpet, dental crown treatment Hyderabad, tooth cap in Hyderabad, zirconia crowns Hyderabad, porcelain crowns Hyderabad");
    setMeta("author", "Simply Smilez Dental Clinic");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Dental Crowns in Hyderabad | Simply Smilez Dental Clinic", true);
    setMeta("og:description", "Get dental crowns in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Learn about crown types, benefits, procedure, aftercare, and treatment options.", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/services/crowns", true);
    setMeta("og:site_name", "Simply Smilez Dental Clinic", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/crowns.webp", true);
    setMeta("og:image:alt", "Dental crowns at Simply Smilez Dental Clinic in Shaikpet, Hyderabad", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Dental Crowns in Hyderabad | Simply Smilez Dental Clinic");
    setMeta("twitter:description", "Learn about dental crowns, zirconia and porcelain options, benefits, procedure, and aftercare at Simply Smilez Dental Clinic, Shaikpet.");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/crowns.webp");

    // Dynamic Schema script injection
    const scriptId = 'crowns-page-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(crownsSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper crownspage">
      <div className="container py-5 text-left">
    <div className="row">
      <div className="col-lg-8 col-md-12 text-left">
        <div className="about-us text-left">
          <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: "#00b7ff" }}>Dental Crowns in Hyderabad for Damaged
            or Weakened Teeth</h1>
          <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

          <p className="lead text-left">A severely damaged, cracked or heavily restored tooth may need more protection than
            a regular filling can provide. A dental crown is a custom-made restoration designed to cover the visible
            portion of a tooth and help restore its shape, function and appearance.</p>
          <p className="text-left">At Simply Smilez Dental Clinic in Shaikpet, Hyderabad, dental crowns are offered as part
            of restorative and cosmetic dental care. The clinic is located on O.U. Colony Road and serves patients from
            Shaikpet, O.U. Colony, Dwaraka Nagar Colony, Manikonda, Tolichowki, Raidurg, Puppalaguda, Film Nagar and
            Jubilee Hills, as well as nearby areas such as Banjara Hills, Mehdipatnam, Langar Houz, Gachibowli and
            Narsingi.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Is a Dental Crown?</h3>
          <p className="text-left">A dental crown, sometimes called a tooth cap, is a custom restoration that covers a
            damaged or weakened tooth. Unlike a filling, which restores a smaller area of the tooth, a crown covers the
            tooth above the gum line.</p>
          <p className="text-left">Crowns may be considered when a tooth has lost significant structure because of decay,
            fracture, a large existing restoration or treatment such as root canal therapy.</p>
          <p className="text-left">The purpose of a crown is not simply to improve appearance. When clinically appropriate,
            it can also help restore the tooth&apos;s shape and function and provide coverage for the remaining tooth
            structure.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>When Might You Need a Dental
            Crown?</h3>
          <p className="text-left">A dentist may recommend a crown when a tooth has substantial structural damage that
            cannot be adequately restored with a conventional filling.</p>
          <p className="text-left">Common situations include:</p>
          <ul className="text-left pl-4">
            <li>A heavily decayed tooth</li>
            <li>A cracked or fractured tooth</li>
            <li>A tooth with a large existing filling</li>
            <li>A weakened tooth after root canal treatment</li>
            <li>A tooth that requires significant structural restoration</li>
            <li>Certain cosmetic or restorative dental situations</li>
          </ul>
          <p className="text-left">The decision depends on the individual tooth. Not every damaged tooth requires a crown.
            In some cases, a composite filling, inlay, onlay or another conservative restoration may be more
            appropriate.</p>
          <p className="text-left">A dental examination is therefore important before choosing the treatment.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Benefits of Dental Crowns</h3>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Restores Tooth Shape</h5>
          <p className="text-left">A damaged tooth can lose its natural shape and function. A crown is designed to recreate
            the external form of the tooth.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Provides Coverage</h5>
          <p className="text-left">A crown covers the remaining tooth structure, which can be useful when a tooth has been
            substantially weakened.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Helps Restore Chewing Function</h5>
          <p className="text-left">Once properly fitted and adjusted, a crown can help restore the tooth&apos;s role in chewing.
          </p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Natural-Looking Appearance</h5>
          <p className="text-left">Modern tooth-coloured crown materials can provide an appearance that blends with
            surrounding teeth. The final result depends on factors such as the material selected, shade matching, tooth
            position and individual circumstances.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Can Be Used After Root Canal Treatment</h5>
          <p className="text-left">Some teeth that have undergone root canal treatment may require additional restoration to
            protect the remaining tooth structure. Whether a crown is necessary depends on the tooth and the amount of
            remaining structure.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Types of Dental Crowns Are
            Available?</h3>
          <p className="text-left">The most appropriate crown material depends on the tooth being treated, its location,
            functional requirements, aesthetics and other clinical considerations.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Porcelain or Ceramic Crowns</h5>
          <p className="text-left">All-ceramic and porcelain-based crowns can provide a natural-looking appearance. They may
            be particularly suitable for visible teeth where aesthetics are important.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Zirconia Crowns</h5>
          <p className="text-left">Zirconia is a ceramic material commonly used for dental restorations. Zirconia crowns are
            metal-free and can provide a natural-looking option for suitable teeth.</p>
          <p className="text-left">The choice of zirconia or another crown material depends on the tooth being treated, its
            location, bite forces, aesthetic requirements and your dentist&apos;s assessment.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Other Crown Materials</h5>
          <p className="text-left">Depending on the clinical situation, dentists may also consider other materials or
            combinations of materials. Your dentist can explain which option is appropriate for your particular tooth.
          </p>
          <p className="text-left">There is no single crown material that is automatically suitable for every patient.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>How Is a Dental Crown Placed?</h3>
          <p className="text-left">The crown procedure generally involves an examination followed by preparation of the
            tooth and fabrication of the final restoration.</p>
          <p className="text-left">At the first appointment, the dentist evaluates the tooth and determines whether a crown
            is appropriate. Any necessary treatment, such as addressing decay or completing root canal treatment, may
            need to be carried out before the crown is placed.</p>
          <p className="text-left">The tooth is then prepared to create space for the restoration. An impression or digital
            scan may be taken so that the crown can be made to fit the tooth accurately.</p>
          <p className="text-left">A temporary crown may be provided while the permanent crown is being prepared.</p>
          <p className="text-left">At the subsequent appointment, the dentist evaluates the permanent crown, checks its fit
            and appearance, and makes any necessary adjustments before cementing it into place.</p>
          <p className="text-left">The exact number of appointments can vary depending on the condition of the tooth and the
            treatment required.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Dental Crown Aftercare</h3>
          <p className="text-left">Taking care of a crowned tooth is similar to caring for your natural teeth. Good oral
            hygiene is important because the tooth and surrounding gum tissue remain susceptible to dental problems.</p>
          <p className="text-left">After receiving a crown:</p>
          <ul className="text-left pl-4">
            <li>Brush twice daily with fluoride toothpaste.</li>
            <li>Clean between your teeth every day.</li>
            <li>Follow your dentist&apos;s specific instructions.</li>
            <li>Avoid using your teeth to open packages or bite hard non-food objects.</li>
            <li>Attend regular dental examinations.</li>
            <li>Inform your dentist if the crown feels loose, uncomfortable or different when you bite.</li>
          </ul>
          <p className="text-left">A crown does not prevent decay in the surrounding tooth structure, so maintaining good
            oral hygiene remains important.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>How Long Does a Dental Crown Last?
          </h3>
          <p className="text-left">A dental crown is designed as a long-term restoration, but it is not necessarily
            permanent. Its lifespan can vary according to the crown material, tooth location, bite forces, oral hygiene,
            habits and the condition of the tooth underneath.</p>
          <p className="text-left">Regular dental visits allow your dentist to monitor the crown and the surrounding tooth
            and gums.</p>
          <p className="text-left">If you grind or clench your teeth, have a particularly strong bite or frequently consume
            hard foods, your dentist may discuss additional precautions.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Dental Crowns After Root Canal
            Treatment</h3>
          <p className="text-left">A tooth that has undergone root canal treatment may have lost substantial tooth structure
            because of decay, fracture or previous dental treatment. Depending on the remaining structure and the tooth
            involved, a crown may be recommended to restore and protect it.</p>
          <p className="text-left">However, the need for a crown should be assessed individually. Your dentist will evaluate
            the amount of remaining tooth structure and the functional demands placed on the tooth before recommending
            the final restoration.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Dental Crowns vs Fillings</h3>
          <p className="text-left">A common question is whether a crown is better than a filling.</p>
          <p className="text-left">The two treatments serve different purposes.</p>
          <p className="text-left">A filling is generally used to restore a more limited area of tooth damage. A crown
            covers the tooth and may be considered when more extensive structural restoration or coverage is required.
          </p>
          <p className="text-left">If enough healthy tooth structure remains, a filling or other conservative restoration
            may be possible. If the tooth is significantly weakened, a crown may provide the coverage required.</p>
          <p className="text-left">Your dentist should assess the tooth before recommending either option.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Dental Crowns in Shaikpet,
            Hyderabad</h3>
          <p className="text-left">Simply Smilez Dental Clinic provides dental crown treatment in Shaikpet, Hyderabad, along
            with other restorative, cosmetic and general dental services.</p>
          <p className="text-left">The clinic is located at P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony
            Road, Shaikpet, Hyderabad &ndash; 500008.</p>
          <p className="text-left">Patients from nearby areas including Manikonda, Tolichowki, Raidurg, Puppalaguda, Film
            Nagar, Jubilee Hills, Banjara Hills, Mehdipatnam, Langar Houz, Gachibowli and Narsingi can contact the
            clinic to discuss their dental concerns.</p>
          
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
            title="Frequently Asked Questions About Dental Crowns"
            faqs={[
              {
                question: "What is a dental crown?",
                answer: "A dental crown is a custom restoration that covers a tooth above the gum line to restore its shape, function and, where appropriate, appearance."
              },
              {
                question: "Does every damaged tooth need a crown?",
                answer: "No. The appropriate treatment depends on the extent of damage and the amount of healthy tooth structure remaining. A filling, inlay, onlay or another restoration may be suitable in some cases."
              },
              {
                question: "Are zirconia crowns available?",
                answer: "Zirconia is a ceramic material that can be used to make dental crowns. Your dentist can determine whether a zirconia crown is suitable for your particular tooth."
              },
              {
                question: "How many appointments are needed for a dental crown?",
                answer: "The number of appointments depends on the condition of the tooth, the type of crown and any additional treatment required."
              },
              {
                question: "How much does a dental crown cost in Hyderabad?",
                answer: "The cost depends on the type of crown, tooth being treated, preparation required and any additional dental treatment needed. A dental examination is required to determine the appropriate treatment and current cost."
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
            <img src="/images/crowns.webp" className="card-img-top rounded-top" alt="Dental Crowns in Hyderabad" />
            <div className="card-body text-left p-4">
              <h4 className="card-title font-weight-bold mb-2 text-left">Dental Crowns</h4>
              <p className="card-text text-muted text-left">Custom-made tooth caps to restore shape, strength, and
                appearance.</p>
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
