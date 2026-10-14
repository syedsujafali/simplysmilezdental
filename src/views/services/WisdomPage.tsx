'use client';

import React, { useEffect } from 'react';
import Link from '../../components/Link';
import ServiceFaq from '../../components/ServiceFaq';

const wisdomSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#webpage",
      "url": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction",
      "name": "Wisdom Tooth Extraction in Hyderabad | Simply Smilez",
      "description": "Wisdom tooth extraction in Shaikpet, Hyderabad for impacted, painful or infected wisdom teeth. Get a dental evaluation and personalized treatment plan.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#wisdom-tooth-extraction"
      },
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#wisdom-tooth-extraction"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.simplysmilezdental.in/images/wisdom.webp",
        "caption": "Wisdom tooth extraction at Simply Smilez Dental Clinic in Shaikpet, Hyderabad"
      }
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
      "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#wisdom-tooth-extraction",
      "name": "Wisdom Tooth Extraction",
      "alternateName": [
        "Wisdom Teeth Removal",
        "Impacted Wisdom Tooth Extraction",
        "Third Molar Extraction",
        "Surgical Wisdom Tooth Extraction"
      ],
      "serviceType": "Wisdom Tooth Extraction",
      "description": "Wisdom tooth extraction for problematic, impacted or symptomatic third molars, based on individual dental examination and treatment requirements.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction",
      "image": "https://www.simplysmilezdental.in/images/wisdom.webp"
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#procedure",
      "name": "Wisdom Tooth Extraction",
      "alternateName": "Third Molar Extraction",
      "description": "A dental extraction procedure used to remove a wisdom tooth when clinically indicated, including certain impacted or problematic third molars.",
      "bodyLocation": "Wisdom tooth",
      "procedureType": "http://schema.org/PercutaneousProcedure",
      "image": "https://www.simplysmilezdental.in/images/wisdom.webp"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does every wisdom tooth need to be removed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. A wisdom tooth does not automatically need to be removed. The decision depends on factors such as its position, symptoms, oral health, ability to maintain the area, and whether it is causing or likely to cause clinically significant problems."
          }
        },
        {
          "@type": "Question",
          "name": "What is an impacted wisdom tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An impacted wisdom tooth is a tooth that cannot erupt normally because of insufficient space or its position within the jaw. It may be partially erupted, completely covered by gum tissue, or positioned against another tooth."
          }
        },
        {
          "@type": "Question",
          "name": "How do I know if my wisdom tooth is infected?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pain, swelling, tenderness, gum inflammation, unpleasant taste, or difficulty opening the mouth can occur with dental infections. These symptoms can have other causes, so a dental examination is needed to determine the source."
          }
        },
        {
          "@type": "Question",
          "name": "Is wisdom tooth extraction painful?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The extraction is performed using appropriate anesthesia. Some soreness and swelling can occur during recovery. Your dentist can explain pain-control and anesthesia options and provide specific aftercare instructions based on the complexity of the extraction."
          }
        },
        {
          "@type": "Question",
          "name": "How long does wisdom tooth extraction take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The time required depends on the position and complexity of the tooth. A normally erupted wisdom tooth may be simpler to remove than a deeply impacted tooth. The dentist can explain the expected procedure after evaluating the tooth."
          }
        },
        {
          "@type": "Question",
          "name": "Can an impacted wisdom tooth damage another tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An impacted wisdom tooth can sometimes press against or contribute to problems involving the adjacent second molar. A dental examination and appropriate imaging can help assess the position of the wisdom tooth and its relationship with nearby teeth."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction#breadcrumb",
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
          "name": "Wisdom Tooth Extraction",
          "item": "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction"
        }
      ]
    }
  ]
};

export default function WisdomPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Wisdom Tooth Extraction in Hyderabad | Simply Smilez";

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
    canonical.href = "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction";

    // Metadata
    setMeta("description", "Wisdom tooth extraction in Shaikpet, Hyderabad for impacted, painful or infected wisdom teeth. Get a dental evaluation and personalized treatment plan.");
    setMeta("keywords", "wisdom tooth extraction Hyderabad, wisdom teeth removal Hyderabad, wisdom tooth dentist Hyderabad, wisdom tooth extraction Shaikpet, impacted wisdom tooth treatment, impacted tooth extraction Hyderabad, surgical tooth extraction Hyderabad, wisdom tooth pain treatment, wisdom tooth infection treatment, third molar extraction Hyderabad");
    setMeta("author", "Simply Smilez Dental Clinic");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Wisdom Tooth Extraction in Hyderabad | Simply Smilez", true);
    setMeta("og:description", "Wisdom tooth extraction in Shaikpet, Hyderabad for impacted, painful or infected wisdom teeth. Get a dental evaluation and personalized treatment plan.", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/services/wisdom-tooth-extraction", true);
    setMeta("og:site_name", "Simply Smilez Dental Clinic", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/wisdom.webp", true);
    setMeta("og:image:alt", "Wisdom tooth extraction and impacted tooth treatment at Simply Smilez Dental Clinic in Shaikpet, Hyderabad", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Wisdom Tooth Extraction in Hyderabad | Simply Smilez");
    setMeta("twitter:description", "Wisdom tooth extraction in Shaikpet, Hyderabad for impacted, painful or infected wisdom teeth. Get a dental evaluation and personalized treatment plan.");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/wisdom.webp");

    // Dynamic Schema script injection
    const scriptId = 'wisdom-tooth-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(wisdomSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper wisdompage">
      <div className="container py-5 text-left">
        <div className="row">
          <div className="col-lg-8 col-md-12 text-left">
            <div className="about-us text-left">
              <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: "#00b7ff" }}>
                Wisdom Tooth Extraction in Hyderabad | Simply Smilez Dental Clinic
              </h1>
              <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

              <h2 className="h4 font-weight-bold mb-3 text-left" style={{ color: "#0d3b66" }}>Professional Care for Impacted and Problematic Wisdom Teeth</h2>

              <p className="lead text-left">Wisdom tooth extraction is a dental procedure
                used to remove one or more third molars when they cause pain, infection, damage, or other dental problems.
                Simply Smilez Dental Clinic provides wisdom tooth extraction and surgical extraction services in Shaikpet,
                Hyderabad, serving patients from nearby areas including Manikonda, Tolichowki, Jubilee Hills, Banjara Hills,
                Gachibowli, Narsingi, and surrounding locations.</p>

              <p className="text-left">Wisdom teeth are the last permanent teeth to develop and commonly emerge during the late
                teenage years or early adulthood. Some wisdom teeth erupt normally and remain healthy, while others become
                impacted because there is insufficient room for normal eruption.</p>

              <div className="my-4 text-left">
                <Link to="/contact" className="btn btn-primary px-4 py-2">Book a Wisdom Tooth Consultation</Link>
              </div>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Is a Wisdom Tooth?</h3>
          <p className="text-left">Wisdom teeth, also called third molars, are located at the back of the upper and lower
            jaws. They are the last permanent teeth to erupt and generally appear between the ages of 17 and 25,
            although timing varies between individuals. Some people do not develop one or more wisdom teeth.</p>

          <p className="text-left">A wisdom tooth can sometimes become impacted, meaning it does not erupt normally into the
            mouth. It may remain partially or completely beneath the gum or jawbone.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>What Is an Impacted Wisdom Tooth?
          </h2>
          <p className="text-left">An impacted wisdom tooth does not have sufficient space to erupt normally or is
            positioned in a way that prevents normal eruption.</p>
          <p className="text-left font-weight-bold mb-2">An impacted tooth may:</p>
          <ul className="text-left pl-4 mb-4">
            <li>Grow toward the adjacent second molar.</li>
            <li>Tilt toward the back of the mouth.</li>
            <li>Remain horizontally positioned within the jaw.</li>
            <li>Remain trapped beneath the gum or within the jawbone.</li>
            <li>Partially erupt through the gum.</li>
          </ul>
          <p className="text-left">The position and condition of the tooth are important when determining whether removal is
            appropriate.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>When Is Wisdom Tooth Extraction
            Recommended?</h2>
          <p className="text-left">Not every wisdom tooth automatically needs to be removed. A dental examination helps
            determine whether monitoring or extraction is appropriate.</p>
          <p className="text-left font-weight-bold mb-2">Removal may be considered when a wisdom tooth is associated with:
          </p>
          <ul className="text-left pl-4 mb-4">
            <li>Persistent or significant pain</li>
            <li>Infection around the tooth</li>
            <li>Repeated gum inflammation</li>
            <li>Damage to an adjacent tooth</li>
            <li>Tooth decay that cannot be appropriately restored</li>
            <li>Cyst formation</li>
            <li>Damage to surrounding bone</li>
            <li>Other clinically significant complications</li>
          </ul>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Wisdom Tooth Extraction in
            Shaikpet, Hyderabad</h2>
          <p className="text-left">At Simply Smilez Dental Clinic, wisdom tooth extraction is one of the dental services
            offered at the Shaikpet clinic. The practice also lists surgical and impacted tooth extractions among its
            dental services.</p>
          <p className="text-left">A consultation allows the dentist to assess the tooth, surrounding gums, neighboring
            teeth, and the position of the wisdom tooth before recommending an appropriate course of treatment.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>How Wisdom Tooth Removal Works
          </h2>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>1. Dental Examination</h3>
          <p className="text-left">The dentist evaluates your symptoms and examines the wisdom tooth and surrounding area.
          </p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>2. Diagnostic Assessment</h3>
          <p className="text-left">Dental imaging may be required to understand the position of the wisdom tooth and its
            relationship to surrounding structures.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>3. Treatment Planning</h3>
          <p className="text-left">Based on the examination, the dentist determines whether extraction is appropriate and
            explains the procedure and relevant considerations.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>4. Tooth Removal</h3>
          <p className="text-left">The extraction approach depends on the position and accessibility of the tooth. A
            straightforward erupted wisdom tooth may require a different approach from a deeply impacted tooth.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>5. Recovery</h3>
          <p className="text-left">After extraction, your dental team provides instructions for protecting the extraction
            site and maintaining oral hygiene during healing.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Benefits of Treating a Problematic
            Wisdom Tooth</h2>
          <p className="text-left">When extraction is clinically indicated, removing a problematic wisdom tooth may help
            address issues associated with the tooth, such as pain, infection, or damage to a neighboring tooth.</p>
          <p className="text-left">Treatment can also prevent an existing wisdom tooth problem from continuing to affect the
            surrounding tissues. However, preventive removal of symptom-free wisdom teeth is not automatically
            appropriate for everyone. The decision should be based on an individual dental assessment.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>What Should You Expect After
            Extraction?</h2>
          <p className="text-left">Some soreness, swelling, or discomfort can occur after wisdom tooth removal. Recovery
            depends on the complexity of the extraction and the individual&apos;s healing response.</p>
          <p className="text-left font-weight-bold mb-2">Your dentist will provide specific instructions regarding:</p>
          <ul className="text-left pl-4 mb-4">
            <li>Eating and drinking after treatment</li>
            <li>Oral hygiene</li>
            <li>Protecting the extraction site</li>
            <li>Physical activity</li>
            <li>Medications, when prescribed</li>
            <li>Follow-up care</li>
          </ul>
          <p className="text-left">Contact your dental provider if you experience symptoms that are severe, worsening, or
            otherwise concerning after the procedure.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Cost of Wisdom Tooth Extraction
          </h2>
          <p className="text-left">The cost of wisdom tooth extraction varies because the procedure is different for every
            patient.</p>
          <p className="text-left font-weight-bold mb-2">Factors that can affect treatment cost include:</p>
          <ul className="text-left pl-4 mb-4">
            <li>Whether the tooth is erupted or impacted</li>
            <li>Position and complexity of the tooth</li>
            <li>Number of wisdom teeth requiring removal</li>
            <li>Diagnostic imaging</li>
            <li>Type of extraction required</li>
            <li>Additional treatment requirements</li>
          </ul>
          <p className="text-left">A dental consultation is the appropriate way to determine the treatment required and its
            associated cost.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Who Should Consider a Wisdom Tooth
            Consultation?</h2>
          <p className="text-left font-weight-bold mb-2">Consider arranging a dental assessment if you experience:</p>
          <ul className="text-left pl-4 mb-4">
            <li>Pain at the back of your mouth</li>
            <li>Swelling around a wisdom tooth</li>
            <li>Repeated gum infection</li>
            <li>Difficulty chewing near the back teeth</li>
            <li>Food repeatedly getting trapped around a partially erupted tooth</li>
            <li>Difficulty opening your mouth</li>
            <li>Symptoms affecting an adjacent molar</li>
          </ul>
          <p className="text-left">A dental examination can determine whether these symptoms are related to a wisdom tooth
            or another dental condition.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Why Choose Simply Smilez Dental
            Clinic?</h2>
          <p className="text-left">Simply Smilez Dental Clinic is located at P.V. Reddy Complex, 1st Floor, Dwaraka Nagar
            Colony, O.U. Colony Road, Shaikpet, Hyderabad &ndash; 500008. The clinic lists wisdom tooth extraction, surgical
            extraction, and impacted tooth extraction among its dental services.</p>
          <p className="text-left mb-4">The clinic also provides other dental services, including dental implants, laser
            root canal therapy, laser gum surgery, crowns, veneers, braces and aligners, pediatric dentistry, and
            composite fillings.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Service Areas</h2>
          <p className="text-left">Simply Smilez Dental Clinic welcomes patients from Shaikpet, O.U. Colony, Dwaraka Nagar
            Colony, Manikonda, Tolichowki, Raidurg, Puppalaguda, Film Nagar, Jubilee Hills, Banjara Hills, Mehdipatnam,
            Langar Houz, Gachibowli, Narsingi, and nearby areas.</p>
          
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
                    <p className="small text-muted mb-2 text-left">Advanced microscope-guided endodontics for precision tooth preservation.</p>
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
                question: "Does every wisdom tooth need to be removed?",
                answer: "No. A wisdom tooth does not automatically need to be removed. The decision depends on factors such as its position, symptoms, oral health, ability to maintain the area, and whether it is causing or likely to cause clinically significant problems."
              },
              {
                question: "What is an impacted wisdom tooth?",
                answer: "An impacted wisdom tooth is a tooth that cannot erupt normally because of insufficient space or its position within the jaw. It may be partially erupted, completely covered by gum tissue, or positioned against another tooth."
              },
              {
                question: "How do I know if my wisdom tooth is infected?",
                answer: "Pain, swelling, tenderness, gum inflammation, unpleasant taste, or difficulty opening the mouth can occur with dental infections. These symptoms can have other causes, so a dental examination is needed to determine the source."
              },
              {
                question: "Is wisdom tooth extraction painful?",
                answer: "The extraction is performed using appropriate anesthesia. Some soreness and swelling can occur during recovery. Your dentist can explain pain-control and anesthesia options and provide specific aftercare instructions based on the complexity of the extraction."
              },
              {
                question: "How long does wisdom tooth extraction take?",
                answer: "The time required depends on the position and complexity of the tooth. A normally erupted wisdom tooth may be simpler to remove than a deeply impacted tooth. The dentist can explain the expected procedure after evaluating the tooth."
              },
              {
                question: "Can an impacted wisdom tooth damage another tooth?",
                answer: "An impacted wisdom tooth can sometimes press against or contribute to problems involving the adjacent second molar. A dental examination and appropriate imaging can help assess the position of the wisdom tooth and its relationship with nearby teeth."
              },
              {
                question: "Where can I get wisdom tooth extraction in Shaikpet?",
                answer: "Simply Smilez Dental Clinic provides wisdom tooth extraction and surgical/impacted tooth extraction services at its Shaikpet location in Hyderabad. The clinic is at P.V. Reddy Complex, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad – 500008."
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
                <img src="/images/wisdom.webp" className="card-img-top rounded-top" alt="Wisdom Tooth Extraction in Hyderabad" />
                <div className="card-body text-left p-4">
                  <h4 className="card-title font-weight-bold mb-2 text-left">Wisdom Tooth Extraction</h4>
                  <p className="card-text text-muted text-left">Safe, effective extraction for impacted or problematic wisdom
                    teeth.</p>
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
