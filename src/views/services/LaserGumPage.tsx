'use client';

import React, { useEffect } from 'react';
import Link from '../../components/Link';
import ServiceFaq from '../../components/ServiceFaq';

const laserGumSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/laser-gum-surgery#webpage",
      "url": "https://www.simplysmilezdental.in/services/laser-gum-surgery",
      "name": "Advanced Laser Gum Treatment in Hyderabad | Simply Smilez",
      "description": "Improve gum health with laser gum treatment in Hyderabad at Simply Smilez, Shaikpet. Get personalized periodontal care, gum treatment and professional dental cleaning.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/services/laser-gum-surgery#procedure"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/laser-gum-surgery#procedure"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.simplysmilezdental.in/images/lasergum.webp",
        "caption": "Laser gum treatment at Simply Smilez Dental Clinic in Shaikpet, Hyderabad"
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
      }
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
      "@type": "MedicalProcedure",
      "@id": "https://www.simplysmilezdental.in/services/laser-gum-surgery#procedure",
      "name": "Laser Gum Treatment",
      "alternateName": [
        "Laser Gum Surgery",
        "Laser Periodontal Treatment"
      ],
      "description": "Laser-assisted gum treatment for selected periodontal and gum conditions at Simply Smilez Dental Clinic in Shaikpet, Hyderabad.",
      "procedureType": "http://schema.org/NoninvasiveProcedure",
      "bodyLocation": "Gums",
      "url": "https://www.simplysmilezdental.in/services/laser-gum-surgery",
      "image": "https://www.simplysmilezdental.in/images/lasergum.webp"
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/laser-gum-surgery#gum-care-service",
      "name": "Hygiene & Gum Care",
      "serviceType": "Dental Hygiene and Gum Care",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Hygiene & Gum Care Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Teeth Cleaning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dental Scaling"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Teeth Scaling and Polishing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional Teeth Cleaning"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gum Disease Treatment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gum Infection Treatment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Periodontal Treatment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Gum Care"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Bad Breath Treatment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Plaque Removal"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Tartar Removal"
            }
          }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/laser-gum-surgery#breadcrumb",
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
          "name": "Laser Gum Treatment",
          "item": "https://www.simplysmilezdental.in/services/laser-gum-surgery"
        }
      ]
    }
  ]
};

export default function LaserGumPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Advanced Laser Gum Treatment in Hyderabad | Simply Smilez";

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
    canonical.href = "https://www.simplysmilezdental.in/services/laser-gum-surgery";

    // Metadata
    setMeta("description", "Improve gum health with laser gum treatment in Hyderabad at Simply Smilez, Shaikpet. Get personalized periodontal care, gum treatment and cleaning.");
    setMeta("keywords", "laser gum treatment Hyderabad, advanced laser gum treatment Hyderabad, laser gum treatment Shaikpet, laser periodontal treatment Hyderabad, gum disease treatment Shaikpet, gum infection treatment Hyderabad, periodontal care Hyderabad, gum specialist Shaikpet, teeth cleaning Shaikpet, dental scaling Hyderabad, teeth scaling and polishing Hyderabad, tartar removal Hyderabad, plaque removal Hyderabad, bad breath treatment Hyderabad, professional teeth cleaning Hyderabad, gum care Hyderabad");
    setMeta("author", "Simply Smilez Dental Clinic");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Advanced Laser Gum Treatment in Hyderabad | Simply Smilez", true);
    setMeta("og:description", "Improve gum health with laser gum treatment in Hyderabad at Simply Smilez, Shaikpet. Get personalized periodontal care, gum treatment and cleaning.", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/services/laser-gum-surgery", true);
    setMeta("og:site_name", "Simply Smilez Dental Clinic", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/lasergum.webp", true);
    setMeta("og:image:alt", "Advanced laser gum treatment and periodontal care at Simply Smilez Dental Clinic in Shaikpet, Hyderabad", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Advanced Laser Gum Treatment in Hyderabad | Simply Smilez");
    setMeta("twitter:description", "Improve gum health with laser gum treatment in Hyderabad at Simply Smilez, Shaikpet, with personalized periodontal and gum care.");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/lasergum.webp");

    // Dynamic Schema script injection
    const scriptId = 'laser-gum-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(laserGumSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper lasergumpage">
      <div className="container py-5 text-left">
        <div className="row">
          <div className="col-lg-8 col-md-12 text-left">
            <div className="about-us text-left">
              <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: "#00b7ff" }}>
                Laser Gum Treatment in Hyderabad | Simply Smilez Dental Clinic
              </h1>
              <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

              <p className="lead text-left">Healthy gums are an important part of maintaining
                strong teeth and a healthy smile. Gum problems can develop when plaque and tartar accumulate around the
                teeth, leading to inflammation, bleeding, bad breath, gum infection, and periodontal disease.</p>

              <p className="text-left">At Simply Smilez Dental Clinic in Shaikpet, Hyderabad, we provide comprehensive gum care
                and laser-assisted gum treatment for patients who require advanced periodontal care. Our dental team
                evaluates your oral health and recommends a suitable treatment based on the condition of your gums and
                supporting tissues.</p>

              <div className="my-4 text-left">
                <Link to="/contact" className="btn btn-primary px-4 py-2">Book a Gum Consultation</Link>
              </div>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Is Laser Gum Treatment?</h3>
          <p className="text-left">Laser gum treatment is an advanced dental procedure that uses focused laser energy to
            treat certain gum and periodontal conditions. Depending on the patient&apos;s dental condition, laser technology
            may be used to target affected gum tissue and assist with periodontal treatment.</p>

          <p className="text-left">Laser gum treatment may be considered for patients with specific gum problems after a
            thorough dental examination. The recommended treatment depends on factors such as gum inflammation,
            infection, plaque and tartar buildup, periodontal pockets, gum recession, and the overall health of the
            teeth and gums.</p>

          <p className="text-left">Not every gum problem requires laser treatment. In some cases, professional teeth
            cleaning, dental scaling, scaling and polishing, or conventional periodontal treatment may be sufficient.
          </p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Who May Need Laser Gum Treatment?
          </h2>
          <p className="text-left">Gum disease can develop gradually and may not always cause noticeable symptoms in its
            early stages. Regular dental examinations can help identify gum problems before they become more advanced.
          </p>
          <p className="text-left font-weight-bold mb-2">You may benefit from a dental evaluation if you experience:</p>
          <ul className="text-left pl-4 mb-4">
            <li>Bleeding while brushing or flossing</li>
            <li>Red or swollen gums</li>
            <li>Tender or sensitive gums</li>
            <li>Persistent bad breath</li>
            <li>Plaque or tartar buildup</li>
            <li>Gum infection</li>
            <li>Gum recession</li>
            <li>Loose teeth</li>
            <li>Discomfort while chewing</li>
            <li>Changes in the appearance of your gums</li>
          </ul>
          <p className="text-left">After examining your teeth and gums, the dentist can determine whether laser gum
            treatment, professional cleaning, periodontal treatment, or another procedure is appropriate.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Benefits of Laser-Assisted Gum
            Treatment</h2>
          <p className="text-left">Laser-assisted treatment can provide a precise approach to managing certain gum
            conditions. When clinically appropriate, laser technology may be used as part of a comprehensive periodontal
            treatment plan.</p>
          <p className="text-left font-weight-bold mb-2">Potential benefits may include:</p>
          <ul className="text-left pl-4 mb-4">
            <li>Precise treatment of affected gum tissue</li>
            <li>A minimally invasive approach for suitable procedures</li>
            <li>Controlled treatment of the affected area</li>
            <li>Support for periodontal disease management</li>
            <li>Potentially improved treatment comfort</li>
            <li>Individualized treatment planning</li>
          </ul>
          <p className="text-left">The suitability and expected results of laser gum treatment vary from person to person. A
            dental examination is necessary to determine the most appropriate treatment.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Hygiene &amp; Gum Care</h2>
          <p className="text-left">Good oral hygiene is essential for preventing and managing gum problems. At Simply Smilez
            Dental Clinic, we provide a range of Hygiene &amp; Gum Care services to help patients maintain healthy teeth
            and gums.</p>
          <p className="text-left font-weight-bold mb-2">Our services include:</p>
          <ul className="text-left pl-4 mb-4">
            <li>Teeth Cleaning</li>
            <li>Dental Scaling</li>
            <li>Teeth Scaling and Polishing</li>
            <li>Professional Teeth Cleaning</li>
            <li>Gum Disease Treatment</li>
            <li>Gum Infection Treatment</li>
            <li>Periodontal Treatment</li>
            <li>Gum Care</li>
            <li>Bad Breath Treatment</li>
            <li>Plaque Removal</li>
            <li>Tartar Removal</li>
          </ul>
          <p className="text-left">Professional teeth cleaning can remove plaque and tartar that cannot always be eliminated
            through regular brushing. Dental scaling helps clean deposits from the surfaces of the teeth and around the
            gumline, while polishing can help leave the tooth surfaces smoother.</p>
          <p className="text-left">Depending on your gum condition, your dentist may recommend routine cleaning, scaling and
            polishing, periodontal treatment, or additional gum care.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Laser Gum Treatment for Gum
            Disease</h2>
          <p className="text-left">Periodontal disease affects the gums and the tissues that support your teeth. Without
            appropriate treatment, gum disease can progress and potentially affect the structures supporting the teeth.
          </p>
          <p className="text-left">Laser-assisted gum treatment may be used as part of periodontal care in selected cases.
            The treatment approach depends on the severity and type of gum condition.</p>
          <p className="text-left">It is important to remember that professional treatment works together with good daily
            oral hygiene. Brushing twice a day, cleaning between your teeth, maintaining regular dental visits, and
            having professional cleaning when recommended can help support long-term gum health.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Laser Gum Treatment in Shaikpet,
            Hyderabad</h2>
          <p className="text-left">Simply Smilez Dental Clinic is a dental clinic in Shaikpet, Hyderabad, conveniently
            located to serve patients from nearby areas including O.U. Colony, Dwaraka Nagar Colony, Manikonda,
            Tolichowki, Raidurg, Puppalaguda, Film Nagar, and Jubilee Hills.</p>
          <p className="text-left">We also welcome patients from Banjara Hills, Mehdipatnam, Langar Houz, Gachibowli, and
            Narsingi for comprehensive dental care.</p>
          <p className="text-left font-weight-bold mb-2">Our dental services include:</p>
          <ul className="text-left pl-4 mb-4">
            <li>Laser gum treatment</li>
            <li>Gum disease treatment</li>
            <li>Periodontal treatment</li>
            <li>Professional teeth cleaning</li>
            <li>Dental scaling</li>
            <li>Teeth scaling and polishing</li>
            <li>Root canal treatment</li>
            <li>Dental implants</li>
            <li>Dental crowns</li>
            <li>Veneers</li>
            <li>Teeth whitening</li>
            <li>Invisalign</li>
            <li>Invisalign First for Kids</li>
            <li>Braces</li>
            <li>Pediatric dentistry</li>
            <li>Wisdom tooth extraction</li>
          </ul>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Why Choose Simply Smilez Dental
            Clinic?</h2>
          <p className="text-left">Every patient&apos;s dental needs are different. At Simply Smilez Dental Clinic, treatment is
            planned after evaluating your teeth, gums, and overall oral health.</p>
          <p className="text-left">Whether you need routine teeth cleaning, tartar removal, treatment for bleeding gums, gum
            infection treatment, periodontal care, or an assessment for laser gum treatment, our team can help you
            understand your available treatment options.</p>
          
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
                question: "What is laser gum treatment?",
                answer: "Laser gum treatment uses focused laser technology as part of the treatment of certain gum and periodontal conditions. The procedure is recommended only when clinically appropriate."
              },
              {
                question: "Is laser gum treatment suitable for everyone?",
                answer: "No. The appropriate treatment depends on the patient's gum condition, oral health, and treatment requirements. A dental examination is recommended before deciding on laser treatment."
              },
              {
                question: "Can laser treatment treat gum disease?",
                answer: "Laser-assisted treatment may be used as part of periodontal disease management in selected cases. Your dentist will evaluate your gums and recommend the appropriate treatment."
              },
              {
                question: "Do I need teeth cleaning even after gum treatment?",
                answer: "Yes. Regular professional cleaning and good daily oral hygiene remain important for maintaining healthy gums and preventing plaque and tartar buildup."
              },
              {
                question: "What are the signs of gum disease?",
                answer: "Common signs include bleeding gums, swelling, redness, gum tenderness, persistent bad breath, gum recession, plaque or tartar buildup, and loose teeth. If you experience these symptoms, a dental examination is recommended."
              },
              {
                question: "Where can I get laser gum treatment in Hyderabad?",
                answer: "Simply Smilez Dental Clinic provides laser gum treatment and comprehensive gum care in Shaikpet, Hyderabad, serving patients from Manikonda, Tolichowki, Jubilee Hills, Banjara Hills, Gachibowli, Narsingi, and surrounding areas."
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
                <img src="/images/lasergum.webp" className="card-img-top rounded-top" alt="Laser Gum Treatment in Hyderabad" />
                <div className="card-body text-left p-4">
                  <h4 className="card-title font-weight-bold mb-2 text-left">Laser Gum Therapy</h4>
                  <p className="card-text text-muted text-left">Advanced laser-assisted periodontal care for healthy gums and
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
