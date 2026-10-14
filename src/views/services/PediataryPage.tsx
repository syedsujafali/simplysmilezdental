'use client';

import React, { useEffect } from 'react';
import Link from '../../components/Link';
import ServiceFaq from '../../components/ServiceFaq';

const pediatricSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.simplysmilezdental.in/services/pediatric-dentistry#webpage",
      "url": "https://www.simplysmilezdental.in/services/pediatric-dentistry",
      "name": "Best Child Dentists Near Me in Hyderabad | Pediatric Dentistry",
      "description": "Pediatric dentistry in Shaikpet, Hyderabad for children's dental checkups, preventive care, fillings, crowns, fluoride, sealants and orthodontic evaluation.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/pediatric-dentistry#pediatric-dentistry"
      },
      "mainEntity": {
        "@id": "https://www.simplysmilezdental.in/services/pediatric-dentistry#pediatric-dentistry"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.simplysmilezdental.in/images/pedia2.webp",
        "caption": "Pediatric dentistry and children's dental care at Simply Smilez Dental Clinic in Shaikpet, Hyderabad"
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
      "@id": "https://www.simplysmilezdental.in/services/pediatric-dentistry#pediatric-dentistry",
      "name": "Pediatric Dentistry",
      "alternateName": [
        "Pediatric Dental Care",
        "Children's Dentistry",
        "Kids Dental Care"
      ],
      "serviceType": "Pediatric Dentistry",
      "description": "Pediatric dental care in Shaikpet, Hyderabad, including children's dental checkups, preventive care, fluoride treatment, dental sealants, fillings, crowns, pediatric root canal treatment and early orthodontic evaluation.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/pediatric-dentistry",
      "image": "https://www.simplysmilezdental.in/images/pedia2.webp",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pediatric Dental Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pediatric Dental Checkup"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pediatric Dental Consultation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Preventive Pediatric Dentistry"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fluoride Treatment for Children"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dental Sealants for Children"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Children's Dental Fillings"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pediatric Root Canal Treatment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Stainless Steel Crowns"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pediatric Zirconia Crowns"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Space Maintainers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Early Orthodontic Evaluation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Interceptive Orthodontics"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Phase 1 Orthodontic Treatment"
            }
          }
        ]
      }
    },
    {
      "@type": "MedicalProcedure",
      "@id": "https://www.simplysmilezdental.in/services/pediatric-dentistry#procedure",
      "name": "Pediatric Dental Treatment",
      "description": "Dental procedures for children may include preventive treatments, restorative procedures and selected treatments for primary teeth based on individual clinical needs.",
      "bodyLocation": "Teeth",
      "procedureType": "http://schema.org/NoninvasiveProcedure"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/services/pediatric-dentistry#breadcrumb",
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
          "name": "Pediatric Dentistry",
          "item": "https://www.simplysmilezdental.in/services/pediatric-dentistry"
        }
      ]
    }
  ]
};

export default function PediataryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Best Child Dentists Near Me in Hyderabad | Pediatric Dentistry";

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
    canonical.href = "https://www.simplysmilezdental.in/services/pediatric-dentistry";

    // Metadata
    setMeta("description", "Pediatric dentistry in Shaikpet, Hyderabad for children's dental checkups, preventive care, fillings, crowns, fluoride, sealants and orthodontic evaluation.");
    setMeta("keywords", "pediatric dentistry Hyderabad, pediatric dentist Hyderabad, pediatric dental care Hyderabad, children's dentistry Hyderabad, kids dental checkup, pediatric dental consultation, preventive pediatric dentistry, fluoride treatment for children, dental sealants for children, children's dental fillings, pediatric root canal treatment, stainless steel crowns, pediatric zirconia crowns, space maintainers, early orthodontic evaluation, interceptive orthodontics, Phase 1 orthodontic treatment, pediatric dentist Shaikpet");
    setMeta("author", "Simply Smilez Dental Clinic");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Best Child Dentists Near Me in Hyderabad | Pediatric Dentistry", true);
    setMeta("og:description", "Pediatric dentistry in Shaikpet, Hyderabad for children's dental checkups, preventive care, fillings, crowns, fluoride, sealants and orthodontic evaluation.", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/services/pediatric-dentistry", true);
    setMeta("og:site_name", "Simply Smilez Dental Clinic", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/pedia2.webp", true);
    setMeta("og:image:alt", "Pediatric dentistry and children's dental care at Simply Smilez Dental Clinic in Shaikpet, Hyderabad", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Best Child Dentists Near Me in Hyderabad | Pediatric Dentistry");
    setMeta("twitter:description", "Pediatric dentistry in Shaikpet, Hyderabad for children's dental checkups, preventive care, fillings, crowns, fluoride, sealants and orthodontic evaluation.");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/pedia2.webp");

    // Dynamic Schema script injection
    const scriptId = 'pediatric-page-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(pediatricSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper pediatarypage">
      <div className="container py-5 text-left">
        <div className="row">
          <div className="col-lg-8 col-md-12 text-left">
            <div className="about-us text-left">
              <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: "#00b7ff" }}>
                Pediatric Dentistry in Hyderabad | Simply Smilez Dental Clinic
              </h1>
              <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

              <h2 className="h4 font-weight-bold mb-3 text-left" style={{ color: "#0d3b66" }}>Gentle, Preventive Dental Care for Children</h2>

              <p className="lead text-left">Pediatric dentistry focuses on the oral health of
                infants, children, and growing teenagers. At Simply Smilez Dental Clinic in Shaikpet, Hyderabad, pediatric
                dental care is designed around the changing needs of children&apos;s teeth, gums, bite, and oral development.</p>

              <p className="text-left">Regular dental visits can help identify tooth decay, developing bite concerns, oral
                habits, and other dental problems at an early stage. Pediatric dental care also gives parents practical
                guidance about brushing, fluoride, diet, oral habits, and protecting children&apos;s teeth. The clinic&apos;s
                pediatric dentistry approach focuses on creating a child-friendly environment and providing preventive
                guidance for parents.</p>

              <div className="my-4 text-left">
                <Link to="/contact" className="btn btn-primary px-4 py-2">Book a Pediatric Dental Consultation</Link>
              </div>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Is Pediatric Dentistry?</h3>
          <p className="text-left">Pediatric dentistry is the branch of dentistry focused on children&apos;s oral health and
            dental development. Children&apos;s teeth and jaws continue to develop as they grow, so their dental needs can
            differ from those of adults.</p>

          <p className="text-left font-weight-bold mb-2">A pediatric dentist can help with:</p>
          <ul className="text-left pl-4 mb-4">
            <li>Routine children&apos;s dental checkups</li>
            <li>Preventive pediatric dentistry</li>
            <li>Dental decay assessment</li>
            <li>Fluoride treatment</li>
            <li>Dental sealants</li>
            <li>Children&apos;s dental fillings</li>
            <li>Pediatric root canal treatment when clinically required</li>
            <li>Dental crowns for damaged primary teeth</li>
            <li>Monitoring tooth and jaw development</li>
            <li>Early orthodontic evaluation</li>
            <li>Guidance for parents on children&apos;s oral hygiene</li>
          </ul>
          <p className="text-left">The American Academy of Pediatric Dentistry recommends that a child&apos;s first dental visit
            should occur by the first birthday or within six months after the first tooth appears.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Pediatric Dental Care in Shaikpet,
            Hyderabad</h2>
          <p className="text-left">Children benefit from establishing a consistent relationship with their dental team.
            Early visits can make dental care familiar while allowing potential problems to be identified before they
            become more complicated.</p>
          <p className="text-left">At Simply Smilez Dental Clinic, pediatric dental care includes preventive guidance for
            parents and children. This can include advice about brushing and flossing, fluoride, dietary habits, thumb
            or pacifier habits, prevention of dental injuries, and children&apos;s oral growth and development.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Pediatric Dentistry Services</h2>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Pediatric Dental Checkup</h3>
          <p className="text-left">A children&apos;s dental checkup allows the dentist to assess the teeth, gums, oral hygiene,
            bite, and developing dentition. Regular examinations can help identify problems such as cavities or
            developing orthodontic concerns.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Pediatric Dental Consultation</h3>
          <p className="text-left">A pediatric dental consultation is useful when parents have concerns about tooth pain,
            cavities, delayed eruption, dental habits, tooth discoloration, oral injuries, or the development of the
            child&apos;s teeth and bite.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Preventive Pediatric Dentistry
          </h3>
          <p className="text-left">Preventive care focuses on reducing avoidable dental problems through regular
            examinations, oral hygiene instruction, appropriate fluoride use, dietary guidance, and other preventive
            measures.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Fluoride Treatment for Children
          </h3>
          <p className="text-left">Fluoride can help strengthen tooth enamel and reduce the risk of dental decay. Whether a
            professional fluoride treatment is appropriate depends on the child&apos;s age, dental health, cavity risk, and
            individual needs.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Dental Sealants for Children</h3>
          <p className="text-left">Dental sealants are protective coatings applied to the grooves of certain teeth,
            particularly the chewing surfaces of back teeth. They can help protect areas that may be difficult to clean
            effectively with a toothbrush.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Children&apos;s Dental Fillings</h3>
          <p className="text-left">When a child develops a cavity, a dental filling may be recommended to restore the
            affected tooth. Treating decay early can help preserve the tooth and maintain normal oral function.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Pediatric Root Canal Treatment
          </h3>
          <p className="text-left">If decay or injury reaches the pulp of a primary tooth, pulp treatment may sometimes be
            necessary. The appropriate treatment depends on the condition of the tooth, the child&apos;s age, the stage of
            tooth development, and the expected time before the tooth naturally comes out.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Stainless Steel Crowns</h3>
          <p className="text-left">Stainless steel crowns may be used to restore and protect primary teeth that have
            extensive decay or structural damage. They can be considered when a simple filling may not provide
            sufficient restoration.</p>

          <h3 className="h6 font-weight-bold mt-3 mb-2 text-left" style={{ color: "#0d3b66" }}>Pediatric Zirconia Crowns</h3>
          <p className="text-left">Zirconia crowns are tooth-colored restorative options that may be considered for certain
            primary teeth. Their suitability depends on the tooth, the extent of damage, and the dentist&apos;s clinical
            assessment.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Early Orthodontic Evaluation</h2>
          <p className="text-left">Not every child needs braces at an early age. However, an orthodontic evaluation during
            growth can help identify developing bite or alignment concerns.</p>
          <p className="text-left font-weight-bold mb-2">Early assessment may be useful when there are concerns involving:
          </p>
          <ul className="text-left pl-4 mb-4">
            <li>Crowded or misplaced teeth</li>
            <li>Crossbite</li>
            <li>Significant spacing</li>
            <li>Jaw growth patterns</li>
            <li>Difficulty with normal tooth eruption</li>
            <li>Persistent oral habits that may affect dental development</li>
          </ul>
          <p className="text-left">When appropriate, early evaluation can help determine whether monitoring, interceptive
            treatment, or later comprehensive orthodontic treatment is appropriate.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Interceptive Orthodontics for
            Growing Children</h2>
          <p className="text-left">Interceptive orthodontics refers to treatment intended to address certain developing
            orthodontic problems while a child is still growing. Depending on the individual case, treatment may focus
            on creating more favorable conditions for tooth eruption or improving aspects of developing bite and jaw
            relationships.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Phase 1 Orthodontic Treatment</h2>
          <p className="text-left">Phase 1 orthodontic treatment is an early stage of orthodontic care used in selected
            growing children when a developing orthodontic problem may benefit from earlier intervention.</p>
          <p className="text-left">It does not mean every child needs two phases of orthodontic treatment. An orthodontic
            assessment is necessary to determine whether early treatment is appropriate.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Space Maintainers</h2>
          <p className="text-left">When a primary tooth is lost earlier than expected, a space maintainer may sometimes be
            recommended to help preserve the space needed for the developing permanent tooth.</p>
          <p className="text-left font-weight-bold mb-2">Whether a space maintainer is necessary depends on factors such as:
          </p>
          <ul className="text-left pl-4 mb-4">
            <li>Which tooth was lost</li>
            <li>The child&apos;s age</li>
            <li>The position of neighboring teeth</li>
            <li>Development of the permanent tooth</li>
            <li>The child&apos;s overall dental development</li>
          </ul>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>How Pediatric Dental Care Works
          </h2>
          <p className="text-left font-weight-bold mb-2">A typical visit may include:</p>
          <ul className="text-left pl-4 mb-4">
            <li><strong>Dental assessment</strong> &ndash; The dentist examines the child&apos;s teeth, gums, bite, and oral
              development.</li>
            <li><strong>Discussion with parents</strong> &ndash; Existing concerns, oral habits, diet, brushing, and dental
              history can be discussed.</li>
            <li><strong>Risk assessment</strong> &ndash; The dentist evaluates factors such as tooth decay and developing
              orthodontic concerns.</li>
            <li><strong>Treatment planning</strong> &ndash; If treatment is required, the dentist explains appropriate
              options.</li>
            <li><strong>Preventive guidance</strong> &ndash; Parents receive practical advice for maintaining children&apos;s oral
              health at home.</li>
            <li><strong>Follow-up</strong> &ndash; Future dental visits are recommended according to the child&apos;s individual
              needs.</li>
          </ul>
          <p className="text-left">The exact process varies according to the child&apos;s age, dental condition, cooperation, and
            treatment requirements.</p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Why Early Dental Care Matters</h2>
          <p className="text-left">Primary teeth play important roles in chewing, speech, appearance, and maintaining space
            for permanent teeth. Although primary teeth eventually fall out, they still require appropriate care.</p>
          <p className="text-left font-weight-bold mb-2">Regular dental visits can help parents understand:</p>
          <ul className="text-left pl-4 mb-4">
            <li>How to clean their child&apos;s teeth effectively</li>
            <li>When fluoride may be useful</li>
            <li>How diet affects dental health</li>
            <li>How to manage thumb, finger, or pacifier habits</li>
            <li>How to prevent dental injuries</li>
            <li>When orthodontic evaluation may be appropriate</li>
            <li>When a dental problem requires professional treatment</li>
          </ul>
          <p className="text-left mb-4">Early attention can also help make dental care a familiar part of a child&apos;s routine.
          </p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Why Choose Simply Smilez Dental
            Clinic?</h2>
          <p className="text-left">Simply Smilez Dental Clinic is located in Shaikpet, Hyderabad, and provides pediatric
            dentistry as part of its broader dental services. The clinic&apos;s website identifies Dr. Susheel Kumar, MDS, as
            a pediatric dentist and implantologist.</p>
          <p className="text-left">The clinic&apos;s pediatric dentistry page specifically describes pediatric dental care,
            preventive guidance, caries risk assessment, oral-hygiene advice, dietary counseling, and guidance
            concerning children&apos;s oral habits and growth.</p>
          <p className="text-left">The clinic is located at: <strong>P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony,
              O.U. Colony Road, Shaikpet, Hyderabad &ndash; 500008.</strong></p>

          <h2 className="h4 font-weight-bold mt-5 mb-3 text-left" style={{ color: "#0d3b66" }}>Pediatric Dental Care for Families
            in Hyderabad</h2>
          <p className="text-left font-weight-bold mb-2">Simply Smilez Dental Clinic welcomes patients from Shaikpet and
            nearby areas, including:</p>
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
                question: "At what age should a child first visit the dentist?",
                answer: "The American Academy of Pediatric Dentistry recommends that children have their first dental visit by their first birthday or within six months after the first tooth appears. Early visits allow parents to receive preventive guidance and allow the dental team to monitor the child's developing oral health."
              },
              {
                question: "How often should children visit the dentist?",
                answer: "The appropriate interval depends on the child's oral health, cavity risk, dental development, and treatment needs. Regular examinations allow the dentist to monitor changes and identify problems early. Your child's dentist can recommend an appropriate recall schedule based on the individual situation."
              },
              {
                question: "What is preventive pediatric dentistry?",
                answer: "Preventive pediatric dentistry includes measures intended to maintain children's oral health and reduce the risk of dental disease. Depending on the child's needs, it can include dental examinations, oral-hygiene instruction, fluoride, sealants, dietary guidance, and advice about oral habits."
              },
              {
                question: "Are dental sealants useful for children?",
                answer: "Dental sealants can protect the grooves and pits of certain teeth where food and plaque can accumulate. They may be particularly useful on susceptible back teeth. The dentist should assess the child's teeth and cavity risk before recommending sealants."
              },
              {
                question: "When might a child need a pediatric root canal?",
                answer: "A primary tooth may require pulp treatment when decay or trauma has affected the pulp and the tooth needs to be maintained. The appropriate treatment depends on the tooth's condition, the child's development, and how long the tooth is expected to remain in the mouth."
              },
              {
                question: "What are space maintainers?",
                answer: "Space maintainers are dental appliances used in selected cases when a primary tooth is lost prematurely. They can help preserve space for an unerupted permanent tooth. The need for one depends on the child's age, the tooth that was lost, and the developing permanent dentition."
              },
              {
                question: "Does every child need early orthodontic treatment?",
                answer: "No. Early orthodontic treatment is recommended only when an assessment identifies a developing issue that may benefit from intervention during growth. Some children may simply need observation until they are older, while others may benefit from interceptive or Phase 1 orthodontic treatment."
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
                <img src="/images/pedia2.webp" className="card-img-top rounded-top" alt="Pediatric Dentistry in Hyderabad" />
                <div className="card-body text-left p-4">
                  <h4 className="card-title font-weight-bold mb-2 text-left">Pediatric Dentistry</h4>
                  <p className="card-text text-muted text-left">Gentle, preventive dental care designed for children&apos;s healthy
                    smiles.</p>
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
