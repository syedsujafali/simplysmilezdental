'use client';

import React, { useEffect } from 'react';
import Link from '../../components/Link';
import ServiceFaq from '../../components/ServiceFaq';

const veneersSchema = {
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
      "@id": "https://www.simplysmilezdental.in/services/veneers",
      "url": "https://www.simplysmilezdental.in/services/veneers",
      "name": "Dental Veneers in Hyderabad | Simply Smilez Dental Clinic",
      "description": "Learn about dental veneers in Hyderabad, including benefits, treatment procedure, suitability, aftercare and veneer options at Simply Smilez Dental Clinic in Shaikpet.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/veneers#service"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/veneers#service",
      "name": "Dental Veneers",
      "serviceType": "Dental Veneer Treatment",
      "description": "Dental veneer treatment to improve the appearance of suitable teeth affected by discoloration, chips, uneven shapes, small gaps and other cosmetic concerns.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/veneers"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/services/veneers#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are dental veneers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Dental veneers are thin, custom-made restorations designed to cover the front surface of selected teeth and improve their appearance."
          }
        },
        {
          "@type": "Question",
          "name": "Can veneers fix chipped teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veneers may be suitable for some mildly chipped teeth. The appropriate treatment depends on the extent and location of the damage."
          }
        },
        {
          "@type": "Question",
          "name": "Are veneers the same as crowns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Veneers generally cover the front surface of a tooth, while crowns cover a larger portion of the tooth and may be recommended when greater structural restoration is required."
          }
        },
        {
          "@type": "Question",
          "name": "Can veneers close gaps between teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veneers may be considered for certain small cosmetic gaps. Orthodontic treatment or another option may be more appropriate depending on the size and cause of the gap."
          }
        },
        {
          "@type": "Question",
          "name": "Do veneers look natural?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Veneers can be designed to resemble natural teeth. The final appearance depends on factors including the material, colour, shape, tooth position and treatment planning."
          }
        },
        {
          "@type": "Question",
          "name": "How much do dental veneers cost in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on factors such as the type of veneer, number of teeth being treated, preparation required and complexity of the case. A consultation is needed to determine the appropriate treatment and current cost."
          }
        }
      ]
    }
  ]
};

export default function VeneersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Dental Veneers in Hyderabad | Simply Smilez Dental Clinic";

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
    canonical.href = "https://www.simplysmilezdental.in/services/veneers";

    // Metadata
    setMeta("description", "Get dental veneers in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Improve chipped, stained or uneven teeth with personalized veneer treatment.");
    setMeta("keywords", "dental veneers in Hyderabad, dental veneers in Shaikpet, veneers in Hyderabad, cosmetic dental veneers Hyderabad, veneers dentist Hyderabad, teeth veneers Hyderabad");
    setMeta("author", "Simply Smilez Dental Clinic");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Dental Veneers in Hyderabad | Simply Smilez Dental Clinic", true);
    setMeta("og:description", "Get dental veneers in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Improve chipped, stained or uneven teeth with personalized veneer treatment.", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/services/veneers", true);
    setMeta("og:site_name", "Simply Smilez Dental Clinic", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/veneers.webp", true);
    setMeta("og:image:alt", "Dental veneers treatment at Simply Smilez Dental Clinic in Hyderabad", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Dental Veneers in Hyderabad | Simply Smilez Dental Clinic");
    setMeta("twitter:description", "Explore dental veneers in Hyderabad for chipped, stained and uneven teeth at Simply Smilez Dental Clinic, Shaikpet.");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/veneers.webp");

    // Dynamic Schema script injection
    const scriptId = 'veneers-page-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(veneersSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper veneerspage">
      <div className="container py-5 text-left">
    <div className="row">
      <div className="col-lg-8 col-md-12 text-left">
        <div className="about-us text-left">
          <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: "#00b7ff" }}>Dental Veneers in Hyderabad for a
            Natural-Looking Smile</h1>
          <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

          <p className="lead text-left">A smile can have a big impact on how you feel about yourself. If you are unhappy
            with chipped teeth, uneven shapes, small gaps or noticeable discoloration, dental veneers may be one of the
            cosmetic dental treatments worth discussing with a dentist.</p>
          <p className="text-left">At Simply Smilez Dental Clinic in Shaikpet, Hyderabad, veneers are offered as part of
            cosmetic and restorative dental care. The clinic serves patients from Shaikpet, O.U. Colony, Dwaraka Nagar
            Colony, Manikonda, Tolichowki, Raidurg, Puppalaguda, Film Nagar and Jubilee Hills, along with nearby areas
            including Banjara Hills, Mehdipatnam, Langar Houz, Gachibowli and Narsingi.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Are Dental Veneers?</h3>
          <p className="text-left">Dental veneers are thin, custom-made coverings designed to bond to the front surface of a
            tooth. They can be used to improve the appearance of selected teeth by changing their colour, shape, size or
            overall appearance.</p>
          <p className="text-left">Veneers are primarily a cosmetic treatment. They are different from dental crowns, which
            cover a larger portion of a tooth and are generally used when a tooth needs more extensive structural
            restoration.</p>
          <p className="text-left">The type of veneer, preparation required and expected result depend on the condition of
            your teeth and your individual smile goals.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Dental Problems Can Veneers
            Address?</h3>
          <p className="text-left">Veneers may be considered for a variety of cosmetic concerns. Depending on the individual
            situation, they may help improve the appearance of:</p>
          <ul className="text-left pl-4">
            <li>Discoloured or stained teeth</li>
            <li>Chipped teeth</li>
            <li>Slightly worn teeth</li>
            <li>Uneven or irregularly shaped teeth</li>
            <li>Small gaps between certain teeth</li>
            <li>Teeth that appear disproportionate</li>
            <li>Mild cosmetic imperfections</li>
          </ul>
          <p className="text-left">Veneers are not suitable for every dental problem. If a tooth has significant decay,
            extensive damage, active gum disease or insufficient healthy tooth structure, another treatment may be more
            appropriate.</p>
          <p className="text-left">A dental examination is important before deciding whether veneers are suitable.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Benefits of Dental Veneers</h3>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Improve the Appearance of Teeth</h5>
          <p className="text-left">Veneers can change the visible appearance of selected teeth, including their shape,
            proportion and colour.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Natural-Looking Results</h5>
          <p className="text-left">Modern dental materials can be designed to resemble natural tooth enamel. The final
            appearance depends on factors such as the material, shade selection, tooth position and treatment planning.
          </p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Customized for Your Smile</h5>
          <p className="text-left">Veneers are planned for the individual tooth rather than being a one-size-fits-all
            treatment. Your dentist considers factors such as facial features, tooth proportions, smile line and
            surrounding teeth when planning the restoration.</p>

          <h5 className="font-weight-bold text-dark mt-3 text-left">Address Several Cosmetic Concerns</h5>
          <p className="text-left">For suitable patients, veneers can address more than one cosmetic concern at the same
            time, such as mild discoloration combined with uneven tooth shape.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Who May Be a Candidate for
            Veneers?</h3>
          <p className="text-left">Veneers may be appropriate for adults who have healthy teeth and gums and want to improve
            specific cosmetic concerns.</p>
          <p className="text-left">However, good oral health is an important part of veneer treatment. Problems such as
            untreated cavities or active gum disease may need to be addressed before cosmetic treatment begins.</p>
          <p className="text-left">Your dentist will also consider your bite, tooth structure, existing restorations and
            oral habits.</p>
          <p className="text-left">If you frequently bite hard objects, clench or grind your teeth, tell your dentist. These
            factors may affect whether veneers are appropriate and how they should be planned.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Is the Veneer Procedure Like?
          </h3>
          <p className="text-left">The process begins with a consultation and dental examination. Your dentist discusses
            what you would like to change and examines the condition of your teeth and gums.</p>
          <p className="text-left">If veneers are considered suitable, the treatment is planned around the teeth involved
            and the desired appearance.</p>
          <p className="text-left">Depending on the type of veneer and treatment plan, some preparation of the tooth surface
            may be necessary. Impressions or digital scans may be taken to help create accurately fitting restorations.
          </p>
          <p className="text-left">The dentist then evaluates the veneers for shape, colour and fit. Once the final
            restoration is ready and approved, it is bonded to the tooth surface.</p>
          <p className="text-left">The exact procedure can vary depending on the number of teeth being treated, the type of
            veneers selected and the individual&apos;s dental condition.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Veneers vs Dental Crowns</h3>
          <p className="text-left">Veneers and crowns are both dental restorations, but they are designed for different
            purposes.</p>
          <p className="text-left">A veneer generally covers the front surface of a tooth and is primarily used to improve
            its appearance.</p>
          <p className="text-left">A crown covers a much larger portion of the tooth and may be recommended when a tooth is
            significantly weakened, damaged or structurally compromised.</p>
          <p className="text-left">Choosing between veneers and crowns should be based on the condition of the tooth rather
            than cosmetic preference alone. Your dentist can explain which option is appropriate after examining your
            teeth.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>How to Care for Dental Veneers
          </h3>
          <p className="text-left">Veneers require regular oral care just like natural teeth. Good dental hygiene can help
            maintain the health of the underlying teeth and surrounding gums.</p>
          <p className="text-left">After receiving veneers:</p>
          <ul className="text-left pl-4">
            <li>Brush your teeth twice a day with fluoride toothpaste.</li>
            <li>Clean between your teeth every day.</li>
            <li>Attend regular dental check-ups.</li>
            <li>Avoid biting hard non-food objects.</li>
            <li>Do not use your teeth to open packages.</li>
            <li>Follow your dentist&apos;s recommendations for maintaining your veneers.</li>
            <li>Contact your dentist if a veneer becomes loose, chipped or damaged.</li>
          </ul>
          <p className="text-left">Although veneers can improve the appearance of teeth, they do not replace the need for
            good oral hygiene.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>How Long Do Dental Veneers Last?
          </h3>
          <p className="text-left">The lifespan of veneers varies from person to person. Factors such as the material used,
            oral hygiene, bite forces, eating habits and general dental care can affect their longevity.</p>
          <p className="text-left">Veneers are not considered permanent restorations. They may eventually require repair or
            replacement.</p>
          <p className="text-left">Regular dental visits allow your dentist to monitor the condition of the veneers as well
            as the natural teeth and gums around them.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Are Veneers Suitable for
            Discoloured Teeth?</h3>
          <p className="text-left">Veneers can be an option for certain types of tooth discoloration, particularly when a
            patient wants to change the visible colour of selected teeth.</p>
          <p className="text-left">However, teeth whitening may be a more conservative option when the primary concern is
            generalized staining. Whitening and veneers work differently, so your dentist can help determine which
            approach is appropriate.</p>
          <p className="text-left">If you are considering both treatments, it is useful to discuss the desired final shade
            before treatment begins.</p>

          <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Dental Veneers in Shaikpet,
            Hyderabad</h3>
          <p className="text-left">Simply Smilez Dental Clinic provides cosmetic and restorative dental care in Shaikpet,
            Hyderabad, including dental veneers.</p>
          <p className="text-left">The clinic is located at P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony
            Road, Shaikpet, Hyderabad &ndash; 500008.</p>
          <p className="text-left">The clinic serves patients from Shaikpet and surrounding areas such as Manikonda,
            Tolichowki, Raidurg, Puppalaguda, Film Nagar, Jubilee Hills, Banjara Hills, Mehdipatnam, Langar Houz,
            Gachibowli and Narsingi.</p>
          
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
            title="Frequently Asked Questions About Dental Veneers"
            faqs={[
              {
                question: "What are dental veneers?",
                answer: "Dental veneers are thin, custom-made restorations designed to cover the front surface of selected teeth and improve their appearance."
              },
              {
                question: "Can veneers fix chipped teeth?",
                answer: "Veneers may be suitable for some mildly chipped teeth. The appropriate treatment depends on the extent and location of the damage."
              },
              {
                question: "Are veneers the same as crowns?",
                answer: "No. Veneers generally cover the front surface of a tooth, while crowns cover a larger portion of the tooth and are often used when greater structural restoration is required."
              },
              {
                question: "Can veneers close gaps between teeth?",
                answer: "Veneers may be considered for certain small cosmetic gaps. However, orthodontic treatment or another option may be more appropriate depending on the size and cause of the gap."
              },
              {
                question: "Do veneers look natural?",
                answer: "Veneers can be designed to resemble natural teeth. The final appearance depends on factors including material, colour, shape, tooth position and treatment planning."
              },
              {
                question: "How much do dental veneers cost in Hyderabad?",
                answer: "The cost depends on factors such as the type of veneer, number of teeth being treated, preparation required and complexity of the case. A consultation is needed to determine the appropriate treatment and current cost."
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
            <img src="/images/veneers.webp" className="card-img-top rounded-top" alt="Dental Veneers in Hyderabad" />
            <div className="card-body text-left p-4">
              <h4 className="card-title font-weight-bold mb-2 text-left">Dental Veneers</h4>
              <p className="card-text text-muted text-left">Custom cosmetic shells to enhance your teeth&apos;s shape, shade, and
                alignment.</p>
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
