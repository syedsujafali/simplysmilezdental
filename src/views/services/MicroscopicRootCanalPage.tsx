'use client';

import React, { useEffect } from 'react';
import Link from '../../components/Link';
import ServiceFaq from '../../components/ServiceFaq';

const microscopicRctSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#webpage",
      "url": "https://www.simplysmilezdental.in/services/microscopic-root-canal",
      "name": "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez",
      "description": "Get microscopic root canal treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Advanced 25x surgical magnification endodontics to preserve infected or damaged teeth.",
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#procedure"
      },
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#procedure"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#procedure",
      "name": "Microscopic Root Canal Treatment",
      "alternateName": "Laser Root Canal Treatment in Hyderabad",
      "description": "Microscopic root canal treatment using surgical dental operating microscopes for infected or damaged teeth at Simply Smilez Dental Clinic in Shaikpet, Hyderabad.",
      "procedureType": "http://schema.org/NoninvasiveProcedure",
      "bodyLocation": "Tooth",
      "url": "https://www.simplysmilezdental.in/services/microscopic-root-canal",
      "image": "https://www.simplysmilezdental.in/images/microscopic-rct.jpg"
    },
    {
      "@type": "Dentist",
      "@id": "https://www.simplysmilezdental.in/#clinic",
      "name": "Simply Smilez Dental Clinic",
      "url": "https://www.simplysmilezdental.in/",
      "image": "https://www.simplysmilezdental.in/images/about.webp",
      "telephone": [
        "+91-9603338904",
        "+91-7799376656"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road",
        "addressLocality": "Shaikpet",
        "addressRegion": "Telangana",
        "postalCode": "500008",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is microscopic root canal treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Microscopic root canal treatment incorporates high-magnification surgical operating microscopes (up to 25x) into endodontic therapy. It allows the specialist to locate hidden extra canals, navigate calcified canals, and thoroughly eliminate infection while preserving natural tooth structure."
          }
        },
        {
          "@type": "Question",
          "name": "Is root canal treatment suitable for everyone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment suitability depends on the condition of the tooth, the extent of infection, remaining tooth structure and other clinical factors. A dental examination is required before treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Can root canal treatment save an infected tooth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Root canal treatment can save many teeth affected by pulp infection or damage when the tooth has sufficient remaining structure and can be properly restored."
          }
        },
        {
          "@type": "Question",
          "name": "Does root canal treatment hurt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Local anaesthesia is generally used during root canal treatment. Some temporary tenderness may occur afterward. Modern microscopic procedures are virtually painless."
          }
        },
        {
          "@type": "Question",
          "name": "Will I need a crown after root canal treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most back teeth require a protective crown after root canal treatment to prevent fractures and restore full chewing function."
          }
        },
        {
          "@type": "Question",
          "name": "How much does root canal treatment cost in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on the tooth being treated (anterior, premolar, or molar), complexity of the case, and whether re-treatment or retrieval is required."
          }
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/microscopic-root-canal#breadcrumb",
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
          "name": "Microscopic Root Canal",
          "item": "https://www.simplysmilezdental.in/services/microscopic-root-canal"
        }
      ]
    }
  ]
};

export default function MicroscopicRootCanalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez";

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
    canonical.href = "https://www.simplysmilezdental.in/services/microscopic-root-canal";

    // Metadata
    setMeta("description", "Get microscopic root canal treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Advanced 25x surgical magnification endodontics to preserve infected or damaged teeth.");
    setMeta("keywords", "microscopic root canal treatment in Hyderabad, microscopic root canal Hyderabad, laser root canal treatment Shaikpet, root canal treatment Hyderabad, endodontic specialist Hyderabad, root canal dentist Shaikpet, root canal near Manikonda, broken instrument retrieval Hyderabad");
    setMeta("author", "Simply Smilez Dental Clinic");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez", true);
    setMeta("og:description", "Get microscopic root canal treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Advanced 25x surgical magnification endodontics to preserve infected or damaged teeth.", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/services/microscopic-root-canal", true);
    setMeta("og:site_name", "Simply Smilez Dental Clinic", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/microscopic-rct.jpg", true);
    setMeta("og:image:alt", "Microscopic root canal treatment at Simply Smilez Dental Clinic in Shaikpet, Hyderabad", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Microscopic Root Canal Treatment in Hyderabad | Simply Smilez");
    setMeta("twitter:description", "Microscopic root canal treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet, for infected or damaged teeth.");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/microscopic-rct.jpg");

    // Dynamic Schema script injection
    const scriptId = 'microscopic-rct-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(microscopicRctSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper laserrootpage">
      <div className="container py-5 text-left">
        <div className="row">
          <div className="col-lg-8 col-md-12 text-left">
            <div className="about-us text-left">
              <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: "#00b7ff" }}>
                Microscopic Root Canal Treatment in Hyderabad | Simply Smilez Dental Clinic
              </h1>
              <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

              <p className="lead text-left">
                A painful, infected or severely damaged tooth does not always need to be extracted. In many cases, advanced root canal treatment can eliminate deep bacterial infection from inside the tooth and preserve your natural tooth structure for life.
              </p>
              <p className="text-left">
                At <strong>Simply Smilez Dental Clinic</strong> in Shaikpet, Hyderabad, we provide specialized <strong>Microscopic Root Canal Treatment (Micro-Endodontics)</strong> using surgical dental operating microscopes. Treatment is planned precisely according to the condition of the tooth, the anatomical complexity of the root canals, and the patient&apos;s individual oral health needs.
              </p>
              <p className="text-left">
                The clinic is located at P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad &ndash; 500008 and serves patients from Shaikpet and nearby areas including Manikonda, Tolichowki, Raidurg, Puppalaguda, Film Nagar, Jubilee Hills, Banjara Hills, Mehdipatnam, Langar Houz, Gachibowli and Narsingi.
              </p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                What Is Microscopic Root Canal Treatment?
              </h3>
              <p className="text-left">
                Root canal treatment is a specialized dental procedure used to treat a tooth when the pulp inside it becomes infected, inflamed or irreversibly damaged. The pulp contains sensitive nerves and blood vessels. Deep tooth decay, fractures, dental trauma or repeated dental procedures can allow harmful bacteria to penetrate deep into the pulp chamber.
              </p>
              <p className="text-left">
                <strong>Microscopic Root Canal Treatment</strong> incorporates high-magnification <strong>surgical dental operating microscopes</strong> into the procedure. While conventional endodontics relies largely on tactile feedback and low-magnification loupes, a surgical microscope magnifies the interior canal anatomy up to <strong>25 times</strong> with shadowless coaxial fiber-optic illumination.
              </p>
              <p className="text-left">
                This extreme optical magnification allows the endodontist to examine intricate canal structures, locate hidden extra canals (such as MB2 canals in upper molars), identify hairline micro-cracks, and clean out stubborn bacterial biofilm that would otherwise remain hidden and cause treatment failure.
              </p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                When Might You Need a Root Canal?
              </h3>
              <p className="text-left">
                A dentist may recommend root canal treatment when the pulp inside a tooth is infected, non-vital or exposed to bacteria. Common clinical signs and symptoms include:
              </p>
              <ul className="text-left pl-4">
                <li>Severe, throbbing tooth pain while chewing or biting</li>
                <li>Prolonged sensitivity to hot or cold foods and liquids that lingers long after the source is removed</li>
                <li>Deep dental decay reaching into the pulp chamber</li>
                <li>Dark discoloration or graying of a single tooth</li>
                <li>Swelling, tenderness or a recurring pimple-like bump (abscess) on the surrounding gums</li>
                <li>A cracked, fractured or traumatized tooth with nerve exposure</li>
              </ul>
              <p className="text-left">
                In some instances, infected teeth may show minimal symptoms in early stages and are discovered during routine clinical checkups or digital radiographs. An accurate dental examination with digital imaging is essential before determining treatment.
              </p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                Benefits of Microscopic Root Canal Treatment
              </h3>

              <h5 className="font-weight-bold text-dark mt-3 text-left">Superior Magnification &amp; Illumination</h5>
              <p className="text-left">
                With up to 25x magnification, the endodontist can clearly inspect root canal orifices, accessory canals, calcified pulp chambers, and anatomical variations that are impossible to discern with the naked eye.
              </p>

              <h5 className="font-weight-bold text-dark mt-3 text-left">Maximum Preservation of Natural Tooth Structure</h5>
              <p className="text-left">
                Microscope-guided endodontics allows for minimally invasive conservative access cavities. This preserves healthy tooth enamel and dentin, ensuring the tooth retains structural integrity for long-term chewing durability.
              </p>

              <h5 className="font-weight-bold text-dark mt-3 text-left">Broken Instrument &amp; File Retrieval</h5>
              <p className="text-left">
                In complicated or failed previous root canal treatments where an endodontic instrument or needle broke inside the canal, a surgical microscope combined with ultrasonic micro-tips enables safe visualization, bypass, and retrieval of the separated instrument to save the tooth from extraction.
              </p>

              <h5 className="font-weight-bold text-dark mt-3 text-left">Painless &amp; Single-Sitting Convenience</h5>
              <p className="text-left">
                Modern computer-controlled local anesthesia, rotary nickel-titanium instruments, and digital apex locators make microscopic RCT virtually painless, comfortable, and frequently achievable in a single focused sitting.
              </p>

              <h5 className="font-weight-bold text-dark mt-3 text-left">Significantly Higher Clinical Success Rate</h5>
              <p className="text-left">
                By ensuring complete removal of bacterial infection and creating a 3D hermetic seal, microscopic root canal therapy delivers clinically proven success rates exceeding 95%.
              </p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>
                The Microscopic RCT Procedure Step-by-Step
              </h3>

              <h5 className="font-weight-bold text-dark mt-3 text-left">1. Comprehensive Clinical &amp; Digital X-Ray Examination</h5>
              <p className="text-left">
                High-resolution digital radiographs and CBCT scans are evaluated to examine the root curvature, number of canals, bone density, and surrounding periapical tissues.
              </p>

              <h5 className="font-weight-bold text-dark mt-3 text-left">2. Gentle Local Anesthesia &amp; Rubber Dam Isolation</h5>
              <p className="text-left">
                Targeted local anesthesia is administered to ensure a 100% painless experience. A specialized rubber dam is placed over the tooth to isolate it from saliva and maintain a completely sterile working field.
              </p>

              <h5 className="font-weight-bold text-dark mt-3 text-left">3. Microscopic Access &amp; Canal Disinfection</h5>
              <p className="text-left">
                Under the surgical operating microscope, a precision micro-opening is made into the pulp chamber. Infected pulp tissue is gently removed, and canals are thoroughly disinfected using advanced ultrasonic irrigation and rotary instruments.
              </p>

              <h5 className="font-weight-bold text-dark mt-3 text-left">4. 3D Biocompatible Obturation (Sealing)</h5>
              <p className="text-left">
                Once completely sanitized, the prepared root canals are filled with biocompatible gutta-percha and bioceramic sealer, hermetically sealing the canals against future bacterial penetration.
              </p>

              <h5 className="font-weight-bold text-dark mt-3 text-left">5. Permanent Restoration &amp; Crown Placement</h5>
              <p className="text-left">
                The access cavity is restored with a durable tooth-colored composite core. In most cases, a custom-fitted ceramic or zirconia dental crown is placed to protect the tooth from biting forces and restore full chewing strength.
              </p>

              {/* FAQs accordion matching design */}
              <ServiceFaq
                title="Frequently Asked Questions"
                faqs={[
                  {
                    question: "Is Microscopic Root Canal Treatment painful?",
                    answer: "No. Modern dental anesthesia and precision microscope techniques ensure the procedure is virtually painless. Most patients experience immediate relief from the throbbing pain caused by their infected tooth pulp."
                  },
                  {
                    question: "Can a broken instrument / file be retrieved from a root canal?",
                    answer: "Yes. Under high surgical magnification and with ultrasonic tips, Dr. Susheel Kumar specializes in locating, bypassing, and retrieving separated endodontic instruments from previously complicated cases."
                  },
                  {
                    question: "How many visits are required for a root canal?",
                    answer: "Most standard root canal treatments are comfortably completed in a single appointment of 45 to 60 minutes. Complex re-treatments or severe infections may require two appointments to ensure thorough disinfection."
                  },
                  {
                    question: "Is a dental crown necessary after a root canal?",
                    answer: "Yes, in almost all cases. Teeth requiring root canal therapy have usually lost substantial tooth structure due to decay. A custom dental crown seals the tooth, restores biting strength, and protects against future fractures."
                  }
                ]}
              />

              {/* Ready to Discuss Box matching other service pages */}
              <div className="bg-light p-4 rounded text-left border mb-4">
                <h3 className="h4 font-weight-bold text-left mb-3" style={{ color: "#0d3b66" }}>
                  Ready to Discuss Your Root Canal Treatment?
                </h3>
                <p className="text-left">
                  If you are experiencing tooth pain or considering dental treatment in Hyderabad, start with a professional clinical consultation rather than choosing a treatment based only on online information.
                </p>
                <p className="text-left">
                  Book a consultation at Simply Smilez Dental Clinic in Shaikpet to discuss your symptoms, examine your tooth with digital imaging, and receive expert care.
                </p>
                <div className="mt-3 text-left">
                  <p className="mb-1 text-left"><strong>Simply Smilez Dental Clinic</strong></p>
                  <p className="mb-1 text-left">
                    P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet, Hyderabad &ndash; 500008
                  </p>
                  <p className="mb-1 text-left">
                    Opening hours: Monday&ndash;Saturday, 10:00 AM&ndash;8:30 PM; Sunday, 10:30 AM&ndash;1:00 PM.
                  </p>
                  <p className="mb-1 text-left">
                    Phone: <a href="tel:+919603338904">96033 38904</a> / <a href="tel:+917799376656">77993 76656</a>
                  </p>
                  <p className="mb-3 text-left">
                    Email: <a href="mailto:info.invisaligndental@gmail.com">info.invisaligndental@gmail.com</a>
                  </p>
                  <Link to="/contact" className="btn btn-primary px-4 py-2">Book Consultation</Link>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Sticky Sidebar matching CrownsPage / other service pages */}
          <div className="col-lg-4 col-md-12 mt-4 mt-lg-0 text-left">
            <div className="sticky-top" style={{ top: 100 }}>
              <div className="card border-0 shadow-sm mb-4">
                <img
                  src="/images/microscopic-rct.jpg"
                  className="card-img-top rounded-top"
                  alt="Microscopic Root Canal Treatment in Hyderabad"
                />
                <div className="card-body text-left p-4">
                  <h4 className="card-title font-weight-bold mb-2 text-left">
                    Microscopic Root Canal Treatment
                  </h4>
                  <p className="card-text text-muted text-left">
                    High-magnification surgical operating microscope endodontics to eliminate infection, retrieve broken instruments, and preserve natural teeth.
                  </p>
                  <Link to="/contact" className="btn btn-primary btn-block">Book Consultation</Link>
                </div>
              </div>

              <div className="bg-primary text-white p-4 rounded shadow-sm text-left">
                <h4 className="text-white font-weight-bold mb-3 text-left">Simply Smilez Dental Clinic</h4>
                <p className="mb-3 text-left">
                  <i className="icon-map-marker mr-2" />
                  <a href="https://maps.app.goo.gl/wvkijcKcuaGCoHTq9" target="_blank" rel="noopener noreferrer" className="text-white">
                    P.V.Reddy Complex 1st Floor, Dwaraka Nagar Colony, O.U Colony Road, Shaikpet, Hyderabad, 500008
                  </a>
                </p>
                <p className="mb-3 text-left font-weight-bold" style={{ fontSize: "1.05rem" }}>
                  <a href="tel:+917799376656" className="text-white">77993 76656</a> / <a href="tel:+919603338904" className="text-white">96033 38904</a>
                </p>
                <p className="mb-0 text-left">
                  <i className="ion-ios-time mr-2" />
                  Mon &ndash; Sat: 10:00am &ndash; 8:30pm<br />
                  <span className="pl-4">Sun: 10:30am &ndash; 1:00pm</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
