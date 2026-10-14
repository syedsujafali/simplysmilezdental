'use client';

import React, { useEffect, useState } from 'react';
import Link from '../../components/Link';

const bracesSchema = {
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
      "@id": "https://www.simplysmilezdental.in/services/braces",
      "url": "https://www.simplysmilezdental.in/services/braces",
      "name": "Dental Braces Clinic in Hyderabad | Braces & Orthodontic Treatment",
      "description": "Learn about braces, clear aligners and orthodontic treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/services/braces#service"
      },
      "publisher": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.simplysmilezdental.in/services/braces#service",
      "name": "Dental Braces",
      "serviceType": "Orthodontic Treatment",
      "description": "Orthodontic treatment using dental braces to address suitable cases of crowded, crooked, spaced or misaligned teeth and certain bite concerns.",
      "provider": {
        "@id": "https://www.simplysmilezdental.in/#dentist"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "url": "https://www.simplysmilezdental.in/services/braces"
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.simplysmilezdental.in/services/braces#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are braces used for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Braces are used to gradually move teeth and address certain alignment and bite problems, including suitable cases of crowded, crooked or spaced teeth."
          }
        },
        {
          "@type": "Question",
          "name": "Are braces only for children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Teenagers and adults may also undergo orthodontic treatment when their teeth and gums are suitable for treatment."
          }
        },
        {
          "@type": "Question",
          "name": "Are braces better than clear aligners?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Braces and clear aligners are different orthodontic options. The appropriate choice depends on the individual's teeth, bite, treatment requirements and clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "How long does braces treatment take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Treatment time varies according to the complexity of the case and the amount of tooth movement required. An orthodontist can provide an estimated treatment timeline after an examination."
          }
        },
        {
          "@type": "Question",
          "name": "Can braces fix crowded teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Braces can be used to address many cases of dental crowding. Suitability depends on the severity and underlying cause of the crowding."
          }
        },
        {
          "@type": "Question",
          "name": "Can braces correct gaps between teeth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Orthodontic treatment can be used to correct many cases of spacing. The treatment approach depends on the size and cause of the spaces."
          }
        },
        {
          "@type": "Question",
          "name": "Are retainers necessary after braces?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Retainers are commonly recommended after active orthodontic treatment to help maintain tooth position. Your orthodontist will advise you on the appropriate retainer and wearing schedule."
          }
        },
        {
          "@type": "Question",
          "name": "How much do braces cost in Hyderabad?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost varies according to the type of braces, complexity of the orthodontic case, expected treatment duration and other clinical factors. A consultation is required for an individualized treatment plan and current cost."
          }
        }
      ]
    }
  ]
};

export default function BracesPage() {
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Dental Braces Clinic in Hyderabad | Braces & Orthodontic Treatment";

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
    canonical.href = "https://www.simplysmilezdental.in/services/braces";

    // Metadata
    setMeta('description', "Get braces in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Explore braces, clear aligners and orthodontic treatment for a straighter smile.");
    setMeta('keywords', "braces in Hyderabad, dental braces in Hyderabad, braces in Shaikpet, orthodontist in Hyderabad, braces treatment Hyderabad, clear aligners Hyderabad, Invisalign Hyderabad, braces dentist near Manikonda, orthodontic treatment Shaikpet");
    setMeta('author', "Simply Smilez Dental Clinic");
    setMeta('robots', "index,follow");
    setMeta('theme-color', "#ffffff");
    setMeta('referrer', "strict-origin-when-cross-origin");

    // Open Graph
    setMeta('og:type', "website", true);
    setMeta('og:title', "Dental Braces Clinic in Hyderabad | Braces & Orthodontic Treatment", true);
    setMeta('og:description', "Get braces in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Explore braces, clear aligners and orthodontic treatment for a straighter smile.", true);
    setMeta('og:url', "https://www.simplysmilezdental.in/services/braces", true);
    setMeta('og:site_name', "Simply Smilez Dental Clinic", true);
    setMeta('og:image', "https://www.simplysmilezdental.in/images/braces.webp", true);
    setMeta('og:image:alt', "Dental braces treatment at Simply Smilez Dental Clinic in Shaikpet, Hyderabad", true);

    // Twitter Card
    setMeta('twitter:card', "summary_large_image");
    setMeta('twitter:title', "Dental Braces Clinic in Hyderabad | Braces & Orthodontic Treatment");
    setMeta('twitter:description', "Explore braces, clear aligners and orthodontic treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet.");
    setMeta('twitter:image', "https://www.simplysmilezdental.in/images/braces.webp");

    // Structured Schema Script
    let schemaScript = document.getElementById('braces-page-schema') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'braces-page-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.text = JSON.stringify(bracesSchema);

    return () => {
      const currentSchema = document.getElementById('braces-page-schema');
      if (currentSchema) {
        currentSchema.remove();
      }
    };
  }, []);


  return (
    <div className="page-wrapper bracespage">
      <div className="container py-5 text-left">
        <div className="row">
          <div className="col-lg-8 col-md-12 text-left">
            <div className="about-us text-left">
              <h1 className="h2 font-weight-bold mb-3 text-left" style={{ color: "#00b7ff" }}>Dental Braces Clinic in Hyderabad |
                Braces &amp; Orthodontic Treatment</h1>
              <hr className="short mb-4 ml-0" style={{ marginLeft: "0", width: 60, borderTop: "3px solid #00b7ff" }} />

              <p className="lead text-left">A straight, well-aligned smile can make everyday dental care easier and improve the
                overall appearance of your teeth. Crowding, spacing, crooked teeth and certain bite problems can affect how
                your teeth come together and may make brushing and cleaning between teeth more difficult.</p>
              <p className="text-left">At Simply Smilez Dental Clinic in Shaikpet, Hyderabad, braces and orthodontic treatment
                are provided for children, teenagers and adults. Treatment is planned according to the patient&apos;s dental
                development, tooth position, bite and individual orthodontic needs.</p>
              <p className="text-left">The clinic is located at P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony
                Road, Shaikpet, Hyderabad &ndash; 500008, and welcomes patients from Shaikpet and nearby areas including
                Manikonda, Tolichowki, Jubilee Hills, Banjara Hills, Gachibowli, Narsingi and surrounding localities.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Are Dental Braces?</h3>
              <p className="text-left">Dental braces are orthodontic appliances used to gradually move teeth into planned
                positions. They work by applying controlled forces over time, helping address various tooth alignment and
                bite concerns.</p>
              <p className="text-left">Traditional braces generally consist of brackets attached to the teeth and an archwire
                that guides tooth movement. Depending on the patient&apos;s needs, different types of braces or clear aligners
                may be considered.</p>
              <p className="text-left">Orthodontic treatment is not only about creating a straighter smile. An orthodontist also
                evaluates how the upper and lower teeth meet, the available space, tooth position and overall oral health
                before recommending treatment.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>When May Braces Be Recommended?
              </h3>
              <p className="text-left">Braces may be considered for several orthodontic concerns, including:</p>
              <ul className="text-left pl-4">
                <li>Crowded or overlapping teeth</li>
                <li>Crooked or rotated teeth</li>
                <li>Gaps or spaces between teeth</li>
                <li>Certain overbite and underbite concerns</li>
                <li>Dental crowding</li>
                <li>Problems with tooth alignment</li>
                <li>Certain bite irregularities</li>
                <li>Teeth that are difficult to clean because of their position</li>
              </ul>
              <p className="text-left">Not every patient requires the same type of orthodontic treatment. Some cases may be
                suitable for conventional braces, while others may be considered for ceramic braces or clear aligners.</p>
              <p className="text-left">An orthodontic consultation helps determine the most appropriate approach.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Braces &amp; Orthodontics Services
              </h3>
              <p className="text-left">At Simply Smilez Dental Clinic, orthodontic care can include:</p>
              <ul className="text-left pl-4">
                <li>Orthodontic Consultation</li>
                <li>Metal Braces</li>
                <li>Ceramic Braces</li>
                <li>Traditional Braces</li>
                <li>Orthodontic Treatment</li>
                <li>Early Orthodontic Treatment</li>
                <li>Interceptive Orthodontics</li>
                <li>Child Orthodontics</li>
                <li>Teen Orthodontics</li>
                <li>Adult Orthodontics</li>
                <li>Class II Malocclusion Treatment</li>
                <li>Teeth Alignment Treatment</li>
                <li>Dental Crowding Treatment</li>
                <li>Spacing Correction</li>
                <li>Retainers</li>
              </ul>
              <p className="text-left">The treatment recommended depends on the patient&apos;s age, dental development, bite, tooth
                position and overall orthodontic requirements.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Types of Braces</h3>

              <h5 className="font-weight-bold text-dark mt-3 text-left">Metal Braces</h5>
              <p className="text-left">Metal braces are a conventional orthodontic option that uses brackets and archwires to
                guide tooth movement. They can be used for a wide range of orthodontic cases.</p>

              <h5 className="font-weight-bold text-dark mt-3 text-left">Ceramic Braces</h5>
              <p className="text-left">Ceramic braces use tooth-coloured or less noticeable brackets. They work on the same
                basic principle as conventional fixed braces while offering a more discreet appearance.</p>

              <h5 className="font-weight-bold text-dark mt-3 text-left">Traditional Braces</h5>
              <p className="text-left">Traditional fixed braces remain attached to the teeth throughout treatment and are
                adjusted periodically by the orthodontist according to the treatment plan.</p>
              <p className="text-left">Your orthodontist can explain which type of braces is appropriate after examining your
                teeth and bite.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Early Orthodontic Treatment for
                Children</h3>
              <p className="text-left">Some orthodontic concerns can benefit from evaluation while a child is still growing.
                Early orthodontic treatment and interceptive orthodontics are designed to identify and manage certain
                developing dental or bite problems at an appropriate stage.</p>
              <p className="text-left">The timing of treatment varies from child to child. An orthodontic assessment can help
                determine whether immediate treatment is necessary or whether monitoring until a later stage is more
                appropriate.</p>
              <p className="text-left">Simply Smilez Dental Clinic also provides pediatric dental care for children.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Orthodontic Treatment for
                Teenagers</h3>
              <p className="text-left">Teenage years are a common time for orthodontic assessment because many permanent teeth
                have erupted and the bite can be evaluated more comprehensively.</p>
              <p className="text-left">Teen orthodontic treatment may address concerns such as crowding, spacing, crooked teeth
                and certain bite irregularities.</p>
              <p className="text-left">The orthodontist will assess the patient&apos;s dental development before recommending braces
                or another treatment option.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Adult Orthodontics</h3>
              <p className="text-left">Braces and orthodontic treatment are not limited to children and teenagers. Adults can
                also seek treatment for crowded teeth, spacing, crooked teeth and certain bite concerns.</p>
              <p className="text-left">Before starting orthodontic treatment, the health of the teeth and gums should be
                evaluated. Existing dental problems may need to be treated before orthodontic movement begins.</p>
              <p className="text-left">Adults can discuss conventional braces, ceramic braces and clear aligner options with
                their orthodontist to understand which approach may be suitable for their needs.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Class II Malocclusion Treatment
              </h3>
              <p className="text-left">A Class II malocclusion refers to a particular relationship between the upper and lower
                teeth and jaws. Treatment depends on the patient&apos;s age, growth pattern, dental relationship and severity of
                the problem.</p>
              <p className="text-left">An orthodontist may use different approaches depending on the individual case. A detailed
                assessment is necessary before deciding on a treatment plan.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Teeth Alignment, Crowding and
                Spacing Correction</h3>
              <p className="text-left">Crowded teeth occur when there is insufficient space for teeth to align properly.
                Spacing, on the other hand, involves visible gaps between teeth.</p>
              <p className="text-left">Orthodontic treatment can be used to address many cases of crowding and spacing by
                gradually moving teeth into planned positions.</p>
              <p className="text-left">The amount and type of tooth movement required vary between patients. The orthodontist
                will assess the available space, tooth position and bite before recommending treatment.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Braces vs Clear Aligners</h3>
              <p className="text-left">Braces and clear aligners are different orthodontic options.</p>
              <p className="text-left">Fixed braces use brackets and wires attached to the teeth. Clear aligners use a series of
                removable trays designed to move teeth according to a planned sequence.</p>
              <p className="text-left">Simply Smilez Dental Clinic also provides aligner and Invisalign-related orthodontic
                services. The appropriate option depends on the complexity of tooth movement, dental condition, treatment
                goals and other clinical considerations.</p>
              <p className="text-left">An orthodontic consultation is the best way to understand which option may be suitable.
              </p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>What Happens During Braces
                Treatment?</h3>
              <p className="text-left">Treatment usually begins with an orthodontic consultation. The orthodontist examines the
                teeth and bite and evaluates the patient&apos;s overall oral condition.</p>
              <p className="text-left">If braces are recommended, a personalized treatment plan is prepared. The braces are then
                placed on the teeth, and regular follow-up appointments are scheduled to monitor progress and make necessary
                adjustments.</p>
              <p className="text-left">Treatment duration varies. Simple alignment concerns may require less time than more
                complex bite or tooth-position problems.</p>
              <p className="text-left">Your orthodontist can provide an estimated treatment timeline after evaluating your
                individual case.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>How to Care for Your Teeth During
                Braces Treatment</h3>
              <p className="text-left">Good oral hygiene is especially important when wearing fixed braces because food
                particles and plaque can collect around brackets and wires.</p>
              <p className="text-left">During orthodontic treatment:</p>
              <ul className="text-left pl-4">
                <li>Brush carefully around brackets and along the gumline.</li>
                <li>Clean between your teeth regularly.</li>
                <li>Follow your orthodontist&apos;s cleaning instructions.</li>
                <li>Attend scheduled orthodontic appointments.</li>
                <li>Follow dietary recommendations provided by your orthodontist.</li>
                <li>Avoid habits that could damage brackets or wires.</li>
                <li>Continue routine dental check-ups.</li>
                <li>Contact your dental clinic if a bracket becomes loose or a wire causes persistent discomfort.</li>
              </ul>
              <p className="text-left">Keeping your teeth and gums healthy throughout treatment supports good oral hygiene while
                your teeth are being moved.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>How Long Do Braces Take?</h3>
              <p className="text-left">There is no standard treatment duration that applies to every patient. Treatment time can
                depend on the severity of crowding or spacing, bite relationship, required tooth movement, age and how
                consistently appointments and treatment instructions are followed.</p>
              <p className="text-left">Your orthodontist can provide a more individualized estimate after examining your teeth.
              </p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Do Braces Hurt?</h3>
              <p className="text-left">Some pressure or temporary tenderness can occur after braces are initially fitted or
                adjusted. This is generally associated with the forces used to move the teeth.</p>
              <p className="text-left">If you experience severe, persistent or unusual pain, contact your orthodontist for
                advice rather than attempting to manage the problem yourself.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Retainers After Orthodontic
                Treatment</h3>
              <p className="text-left">Retainers are commonly used after active orthodontic treatment to help maintain the
                position of the teeth.</p>
              <p className="text-left">Teeth can naturally shift over time, so following your orthodontist&apos;s instructions
                regarding retainer use is important.</p>
              <p className="text-left">Your orthodontist will explain the appropriate retainer type and wearing schedule based
                on your treatment.</p>

              <h3 className="h4 font-weight-bold mt-4 mb-3 text-left" style={{ color: "#0d3b66" }}>Braces in Shaikpet, Hyderabad</h3>
              <p className="text-left">Simply Smilez Dental Clinic provides braces and orthodontic treatment in Shaikpet,
                Hyderabad.</p>
              <p className="text-left">The clinic serves patients from:</p>
              <ul className="text-left pl-4">
                <li>Shaikpet</li>
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
                          <p className="small text-muted mb-2 text-left">Professional in-clinic laser teeth bleaching for a
                            bright smile.</p>
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
                          <p className="small text-muted mb-2 text-left">Painless removal of problematic or impacted third
                            molars.</p>
                        </div>
                        <span className="btn-learn-more text-left mt-2">View Service <i className="fas fa-arrow-right ml-1" /></span>
                      </Link>
                    </div>
                  </div>
                </div>

                <h3 className="h4 font-weight-bold mt-5 mb-4 text-left" style={{ color: "#0d3b66" }}>Frequently Asked Questions About Braces</h3>
                <div className="accordion faq-service-accordion mb-4">
                  {[
                    {
                      id: 1,
                      question: "What are dental braces used for?",
                      answer: "Dental braces are used to gradually move teeth and address suitable cases of tooth misalignment, crowding, spacing and certain bite problems."
                    },
                    {
                      id: 2,
                      question: "Are braces suitable for adults?",
                      answer: "Yes. Adults can undergo orthodontic treatment when their teeth and gums are healthy enough for treatment and orthodontic movement is appropriate."
                    },
                    {
                      id: 3,
                      question: "What types of braces are available?",
                      answer: "Depending on the individual case, orthodontic options may include metal braces, ceramic braces, traditional fixed braces and clear aligners."
                    },
                    {
                      id: 4,
                      question: "Can braces correct crowded teeth?",
                      answer: "Braces can address many cases of dental crowding. The appropriate treatment depends on the severity of crowding, available space and the patient's overall orthodontic condition."
                    },
                    {
                      id: 5,
                      question: "Can braces correct gaps between teeth?",
                      answer: "Orthodontic treatment can be used to correct many cases of spacing. The treatment approach depends on the size and cause of the spaces."
                    },
                    {
                      id: 6,
                      question: "How long does braces treatment take?",
                      answer: "Treatment time varies from patient to patient. The orthodontist can provide an estimated treatment period after examining the teeth and bite."
                    },
                    {
                      id: 7,
                      question: "Are retainers necessary after braces?",
                      answer: "Retainers are commonly recommended after active orthodontic treatment to help maintain tooth position. Your orthodontist will advise you on the appropriate retainer and wearing schedule."
                    },
                    {
                      id: 8,
                      question: "How much do braces cost in Hyderabad?",
                      answer: "The cost depends on the type of braces, complexity of the orthodontic case, expected treatment duration and individual treatment requirements. A consultation is recommended for an accurate treatment plan and current cost."
                    }
                  ].map((item) => {
                    const isOpen = openFaqId === item.id;
                    return (
                      <div key={item.id} className="card mb-3 border-0 shadow-sm rounded-3 overflow-hidden faq-item-card">
                        <div className="card-header bg-white p-0">
                          <button
                            className="btn btn-block text-left font-weight-bold p-3 text-dark d-flex justify-content-between align-items-center w-100 border-0 bg-transparent"
                            type="button"
                            onClick={() => toggleFaq(item.id)}
                            aria-expanded={isOpen}
                            style={{
                              fontSize: '16px',
                              color: '#0b2545',
                              textDecoration: 'none',
                              cursor: 'pointer'
                            }}
                          >
                            <span className="text-left pr-2 d-flex align-items-start">
                              <i className="fa-solid fa-circle-question mr-2 mt-1" style={{ color: '#0284c7', marginRight: '10px', flexShrink: 0 }}></i>
                              <span>{item.question}</span>
                            </span>
                            <i
                              className="fa-solid fa-chevron-down text-muted"
                              style={{
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.25s ease',
                                flexShrink: 0,
                                marginLeft: '12px'
                              }}
                            ></i>
                          </button>
                        </div>
                        {isOpen && (
                          <div className="card-body text-muted px-4 py-3 border-top" style={{ fontSize: '14.5px', lineHeight: 1.7, backgroundColor: '#fbfcfd' }}>
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

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

              </ul></div>
          </div>

          <div className="col-lg-4 col-md-12 mt-4 mt-lg-0 text-left">
            <div className="sticky-top" style={{ top: 100 }}>
              <div className="card border-0 shadow-sm mb-4">
                <img src="/images/braces.webp" className="card-img-top rounded-top" alt="Braces & Orthodontic Treatment in Hyderabad" />
                <div className="card-body text-left p-4">
                  <h4 className="card-title font-weight-bold mb-2 text-left">Braces &amp; Invisalign</h4>
                  <p className="card-text text-muted text-left">Comprehensive orthodontic solutions including metal braces,
                    ceramic braces, and clear aligners.</p>
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
