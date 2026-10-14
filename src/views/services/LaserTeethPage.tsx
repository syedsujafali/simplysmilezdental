'use client';

import React, { useEffect } from 'react';
import Link from '../../components/Link';
import ServiceFaq from '../../components/ServiceFaq';

const laserTeethSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#dentist",
      "name": "Simply Smilez Dental Clinic",
      "url": "https://www.simplysmilezdental.in/",
      "telephone": "+917799376656",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500008",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/laser-teeth-whitening",
      "url": "https://www.simplysmilezdental.in/services/laser-teeth-whitening",
      "name": "Laser Teeth Whitening Treatment in Hyderabad | Simply Smilez",
      "description": "Professional laser teeth whitening treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet, for improving the appearance of naturally discoloured teeth.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/laser-teeth-whitening#service"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/laser-teeth-whitening#service",
      "name": "Laser Teeth Whitening",
      "serviceType": "Professional Teeth Whitening",
      "description": "Professional teeth whitening treatment designed to improve the appearance of certain types of natural tooth discoloration and staining.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/laser-teeth-whitening"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/services/laser-teeth-whitening#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is laser teeth whitening?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laser teeth whitening is a professional cosmetic dental procedure intended to lighten the colour of natural teeth and reduce certain types of discoloration."
          }
        },
        {
          "@type": "Question",
          "name": "Can laser teeth whitening remove all stains?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Whitening does not guarantee that every type of discoloration will disappear. The result depends on the cause and depth of the staining."
          }
        },
        {
          "@type": "Question",
          "name": "How long does laser teeth whitening take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment time depends on the whitening system used and the patient's individual needs. The dentist can explain the expected treatment duration during the consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Can sensitive teeth be professionally whitened?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "People with sensitive teeth should inform their dentist before treatment. The dentist can assess the cause of sensitivity and determine whether whitening is appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Will teeth whitening change the colour of crowns or veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Whitening primarily affects natural teeth. Existing crowns, veneers and other restorations generally do not whiten in the same way as natural tooth enamel."
          }
        },
        {
          "@type": "Question",
          "name": "How much does laser teeth whitening cost in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on the whitening treatment, dental condition and treatment plan. A consultation is recommended for an accurate current cost."
          }
        }
      ]
    }
  ]
};

export default function LaserTeethPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Laser Teeth Whitening Treatment in Hyderabad | Simply Smilez";

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
    canonical.href = "https://www.simplysmilezdental.in/services/laser-teeth-whitening";

    // Metadata
    setMeta("description", "Get laser teeth whitening treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Professional whitening for a brighter, more confident smile.");
    setMeta("keywords", "Laser Teeth Whitening in Hyderabad, laser teeth whitening Hyderabad, laser teeth bleaching Hyderabad, teeth whitening in Shaikpet, professional teeth whitening Hyderabad, laser teeth bleaching in Shaikpet, teeth whitening near Manikonda, cosmetic dentist Hyderabad");
    setMeta("author", "Simply Smilez Dental Clinic");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Laser Teeth Whitening Treatment in Hyderabad | Simply Smilez", true);
    setMeta("og:description", "Get laser teeth whitening treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Professional whitening for a brighter, more confident smile.", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/services/laser-teeth-whitening", true);
    setMeta("og:site_name", "Simply Smilez Dental Clinic", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/laserteeth.webp", true);
    setMeta("og:image:alt", "Laser teeth whitening treatment at Simply Smilez Dental Clinic in Hyderabad", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Laser Teeth Whitening Treatment in Hyderabad | Simply Smilez");
    setMeta("twitter:description", "Professional laser teeth whitening in Hyderabad at Simply Smilez Dental Clinic, Shaikpet, for a brighter-looking smile.");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/laserteeth.webp");

    // Dynamic Schema script injection
    const scriptId = 'laser-teeth-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(laserTeethSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper laserteethpage">
      <div className="container py-5 text-left">
    <div className="row">
      <div className="col-lg-8 col-md-12 text-left">
        <div className="about-us text-left">
          <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: "#00b7ff" }}>Laser Teeth Whitening in Hyderabad |
            Simply Smilez Dental Clinic</h1>
          <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

          <p className="lead text-left">A brighter smile can make you feel more confident, especially when your teeth have
            become darker or stained over time. Laser teeth whitening is a professional cosmetic dental treatment
            designed to lighten the colour of natural teeth and reduce certain types of tooth discoloration.</p>
          <p className="text-left">At Simply Smilez Dental Clinic in Shaikpet, Hyderabad, laser teeth bleaching/whitening is
            listed among the clinic&apos;s dental services. The clinic is located on O.U. Colony Road and serves patients
            from Shaikpet and nearby areas including O.U. Colony, Dwaraka Nagar Colony, Manikonda, Tolichowki, Raidurg,
            Puppalaguda, Film Nagar, Jubilee Hills, Banjara Hills, Mehdipatnam, Langar Houz, Gachibowli and Narsingi.
          </p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Is Laser Teeth Whitening?
          </h3>
          <p className="text-left">Laser teeth whitening is a professional tooth-whitening procedure performed under dental
            supervision. The treatment is intended to lighten the natural colour of teeth by addressing certain types of
            stains and discoloration.</p>
          <p className="text-left">Unlike cosmetic dental restorations such as veneers or crowns, professional whitening
            does not involve placing a restoration over the tooth. The goal is to improve the shade of the existing
            natural tooth structure.</p>
          <p className="text-left">The result can vary depending on the original tooth colour, type of staining, oral health
            and individual response to whitening treatment.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Why Do Teeth Become Discoloured?
          </h3>
          <p className="text-left">Teeth can become darker for many different reasons. Some discoloration develops gradually
            as part of normal aging, while other stains may be related to diet or lifestyle.</p>
          <p className="text-left">Common contributors include:</p>
          <ul className="text-left pl-4">
            <li>Tea and coffee</li>
            <li>Tobacco use</li>
            <li>Certain foods and beverages</li>
            <li>Natural aging</li>
            <li>Poor oral hygiene</li>
            <li>Surface staining</li>
            <li>Certain medications or dental conditions</li>
            <li>Deep internal discoloration</li>
          </ul>
          <p className="text-left">Not every type of discoloration responds equally to whitening. During a consultation,
            your dentist can assess the type of staining and discuss whether professional whitening is appropriate.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Who May Consider Professional
            Teeth Whitening?</h3>
          <p className="text-left">Laser teeth whitening may be considered by adults who want to improve the appearance of
            naturally discoloured teeth.</p>
          <p className="text-left">It can be particularly useful for people who have noticed staining from common foods and
            beverages or who want a brighter smile for personal or cosmetic reasons.</p>
          <p className="text-left">However, whitening is not suitable for every dental situation. Existing cavities, gum
            problems, significant tooth sensitivity or other oral health concerns may need to be addressed before
            cosmetic whitening.</p>
          <p className="text-left">A dental examination helps determine whether whitening is suitable for you.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Benefits of Laser Teeth Whitening
          </h3>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Professional Dental Assessment</h5>
          <p className="text-left">Because treatment is carried out in a dental setting, your dentist can assess your teeth
            and gums before whitening and identify issues that may need attention first.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Brighter-Looking Teeth</h5>
          <p className="text-left">Professional whitening can lighten the natural colour of teeth and reduce certain types
            of discoloration.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">No Veneers or Crowns Required</h5>
          <p className="text-left">Teeth whitening works on natural tooth structure and does not require covering the teeth
            with veneers or crowns.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Convenient Cosmetic Treatment</h5>
          <p className="text-left">Depending on the treatment plan, professional whitening can provide a cosmetic
            improvement without requiring extensive restorative dental treatment.</p>
          <p className="text-left">The exact result and degree of whitening vary between patients, so it is better to
            discuss realistic expectations with your dentist rather than expecting a particular number of shades of
            improvement.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Happens During Laser Teeth
            Whitening?</h3>
          <p className="text-left">Treatment generally starts with an examination of your teeth and gums. Your dentist will
            discuss your concerns, existing dental work and the type of discoloration you have.</p>
          <p className="text-left">If professional whitening is considered suitable, the teeth and surrounding tissues are
            prepared for treatment. A whitening product is then applied according to the dentist&apos;s treatment protocol,
            with the light or laser component used as part of the professional whitening procedure where applicable.</p>
          <p className="text-left">The dentist monitors the treatment and provides instructions for aftercare.</p>
          <p className="text-left">The exact steps, treatment duration and whitening system used can vary. Your dentist can
            explain the procedure before treatment begins.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Does Teeth Whitening Remove All
            Stains?</h3>
          <p className="text-left">No. Whitening does not guarantee that every type of discoloration will disappear.</p>
          <p className="text-left">Surface stains may respond well to professional whitening, while deeper or intrinsic
            discoloration can be more difficult to change. Existing crowns, veneers, fillings and other restorations may
            not change colour in the same way as natural teeth.</p>
          <p className="text-left">If you have visible restorations on your front teeth, tell your dentist before whitening
            so the expected result can be discussed.</p>
          <p className="text-left">In some cases, another cosmetic treatment may be more suitable.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Laser Whitening vs Home Whitening
          </h3>
          <p className="text-left">Professional whitening and home whitening are different approaches.</p>
          <p className="text-left">Professional treatment is performed under dental supervision, while home whitening uses
            products and instructions designed for use outside the dental clinic.</p>
          <p className="text-left">The most appropriate option depends on factors such as your dental health, the type of
            discoloration, sensitivity and the result you are hoping to achieve.</p>
          <p className="text-left">A dentist can explain the available options rather than assuming that one whitening
            method is suitable for everyone.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Is Laser Teeth Whitening Safe?
          </h3>
          <p className="text-left">Professional teeth whitening should be carried out with appropriate assessment and dental
            guidance.</p>
          <p className="text-left">Some people may experience temporary tooth sensitivity or gum irritation following
            whitening. These effects can vary depending on the individual and the whitening treatment used.</p>
          <p className="text-left">If you already experience sensitive teeth, let your dentist know before treatment. Your
            dentist can take this into consideration when planning your whitening procedure.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>How to Maintain a Brighter Smile
            After Whitening</h3>
          <p className="text-left">Whitening does not prevent future staining. Your teeth can gradually become darker again
            depending on your diet, oral hygiene and lifestyle.</p>
          <p className="text-left">To help maintain your results:</p>
          <ul className="text-left pl-4">
            <li>Brush twice a day with fluoride toothpaste.</li>
            <li>Clean between your teeth every day.</li>
            <li>Attend regular dental check-ups.</li>
            <li>Limit frequent consumption of strongly staining foods and drinks.</li>
            <li>Avoid tobacco products.</li>
            <li>Follow the aftercare instructions provided by your dentist.</li>
            <li>Have professional dental cleaning when recommended.</li>
          </ul>
          <p className="text-left">Good oral hygiene is important even after cosmetic whitening because whitening does not
            replace routine dental care.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Can Whitening Be Combined With
            Other Cosmetic Dental Treatments?</h3>
          <p className="text-left">Yes, depending on the patient&apos;s needs, whitening may be considered alongside other
            cosmetic treatments.</p>
          <p className="text-left">For example, a patient may be interested in veneers because of tooth shape or persistent
            discoloration, while another patient may only need professional whitening.</p>
          <p className="text-left">Simply Smilez Dental Clinic also lists veneers, crowns and composite fillings among its
            dental services.</p>
          <p className="text-left">The appropriate sequence of treatments should be decided with your dentist, particularly
            when existing restorations are present.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Laser Teeth Whitening in Shaikpet,
            Hyderabad</h3>
          <p className="text-left">Simply Smilez Dental Clinic provides laser teeth bleaching/whitening in Hyderabad as part
            of its cosmetic dental services.</p>
          <p className="text-left">The clinic&apos;s published address is P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony,
            O.U. Colony Road, Shaikpet, Hyderabad &ndash; 500008.</p>
          <p className="text-left">The clinic lists its contact numbers as <a href="tel:+917799376656">+91 77993 76656</a>
            and <a href="tel:+919603338904">+91 96033 38904</a>. Its published opening hours are Monday to Saturday,
            10:00 AM to 8:30 PM, and Sunday, 10:30 AM to 1:00 PM.</p>
          
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
            title="Frequently Asked Questions About Laser Teeth Whitening"
            faqs={[
              {
                question: "What is laser teeth whitening?",
                answer: "Laser teeth whitening is a professional cosmetic dental procedure intended to lighten the colour of natural teeth and reduce certain types of discoloration."
              },
              {
                question: "Can laser teeth whitening remove all stains?",
                answer: "No. Whitening does not guarantee that every type of discoloration will disappear. The result depends on the cause and depth of the staining."
              },
              {
                question: "How long does laser teeth whitening take?",
                answer: "Treatment time depends on the whitening system used and the patient's individual needs. The dentist can explain the expected treatment duration during the consultation."
              },
              {
                question: "Can sensitive teeth be professionally whitened?",
                answer: "People with sensitive teeth should inform their dentist before treatment. The dentist can assess the cause of sensitivity and determine whether whitening is appropriate."
              },
              {
                question: "Will teeth whitening change the colour of crowns or veneers?",
                answer: "Whitening primarily affects natural teeth. Existing crowns, veneers and other restorations generally do not whiten in the same way as natural tooth enamel."
              },
              {
                question: "How much does laser teeth whitening cost in Hyderabad?",
                answer: "The cost depends on the whitening treatment, dental condition and treatment plan. A consultation is recommended for an accurate current cost."
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
            <img src="/images/laserteeth.webp" className="card-img-top rounded-top" alt="Laser Teeth Whitening Treatment in Hyderabad" />
            <div className="card-body text-left p-4">
              <h4 className="card-title font-weight-bold mb-2 text-left">Laser Teeth Whitening</h4>
              <p className="card-text text-muted text-left">Professional in-clinic whitening for a noticeably brighter,
                stain-free smile.</p>
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
