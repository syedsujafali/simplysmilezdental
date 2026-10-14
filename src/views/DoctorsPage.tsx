'use client';

import React, { useEffect } from 'react';
import Link from '../components/Link';

const doctorsSchema = {
  "@context": "https://schema.org",
  "@graph": [
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
      "@type": "CollectionPage",
      "@id": "https://www.simplysmilezdental.in/doctors#webpage",
      "url": "https://www.simplysmilezdental.in/doctors",
      "name": "Experienced Dentists & Dental Specialists in Shaikpet, Hyderabad | Simply Smilez",
      "description": "Meet our team of experienced dentists and dental specialists at Simply Smilez Dental Clinic in Shaikpet, Hyderabad.",
      "isPartOf": {
        "@id": "https://www.simplysmilezdental.in/#website"
      },
      "about": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "breadcrumb": {
        "@id": "https://www.simplysmilezdental.in/doctors#breadcrumb"
      }
    },
    {
      "@type": "Person",
      "@id": "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar#person",
      "name": "Dr. Ankush Kumar",
      "jobTitle": "Orthodontist and Invisalign Provider",
      "worksFor": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "image": "https://www.simplysmilezdental.in/images/ankush.webp",
      "url": "https://www.simplysmilezdental.in/doctor/dr-ankush-kumar"
    },
    {
      "@type": "Person",
      "@id": "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar#person",
      "name": "Dr. Susheel Kumar",
      "jobTitle": "Pediatric Dentist and Implantologist",
      "worksFor": {
        "@id": "https://www.simplysmilezdental.in/#clinic"
      },
      "image": "https://www.simplysmilezdental.in/images/about.webp",
      "url": "https://www.simplysmilezdental.in/doctor/dr-susheel-kumar"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.simplysmilezdental.in/doctors#breadcrumb",
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
          "name": "Doctors",
          "item": "https://www.simplysmilezdental.in/doctors"
        }
      ]
    }
  ]
};

export default function DoctorsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Page Title
    document.title = "Experienced Dentists & Dental Specialists in Shaikpet, Hyderabad | Simply Smilez";

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
    canonical.href = "https://www.simplysmilezdental.in/doctors";

    // Metadata
    setMeta("description", "Meet our team of experienced dentists and dental specialists at Simply Smilez Dental Clinic in Shaikpet, Hyderabad. Expert care by Dr. Ankush Kumar (Orthodontist) and Dr. Susheel Kumar (Pediatric Dentist & Implantologist).");
    setMeta("keywords", "dentists in Shaikpet Hyderabad, dental specialists Hyderabad, Dr Ankush Kumar orthodontist, Dr Susheel Kumar pediatric dentist, implantologist Hyderabad, orthodontist Shaikpet, Simply Smilez doctors");
    setMeta("author", "Simply Smilez Dental Clinic");

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", "Experienced Dentists & Dental Specialists in Shaikpet, Hyderabad | Simply Smilez", true);
    setMeta("og:description", "Meet our team of experienced dental specialists at Simply Smilez Dental Clinic in Shaikpet, Hyderabad: Dr. Ankush Kumar (Orthodontist & Invisalign Provider) and Dr. Susheel Kumar (Pediatric Dentist & Implantologist).", true);
    setMeta("og:url", "https://www.simplysmilezdental.in/doctors", true);
    setMeta("og:site_name", "Simply Smilez Dental Clinic", true);
    setMeta("og:image", "https://www.simplysmilezdental.in/images/about.webp", true);
    setMeta("og:image:alt", "Expert dentists and dental team at Simply Smilez Dental Clinic in Shaikpet, Hyderabad", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Experienced Dentists & Dental Specialists in Shaikpet, Hyderabad | Simply Smilez");
    setMeta("twitter:description", "Meet our team of experienced dental specialists at Simply Smilez Dental Clinic in Shaikpet, Hyderabad: Dr. Ankush Kumar (Orthodontist) and Dr. Susheel Kumar (Pediatric Dentist & Implantologist).");
    setMeta("twitter:image", "https://www.simplysmilezdental.in/images/about.webp");

    // Dynamic Schema script injection
    const scriptId = 'doctors-schema';
    let scriptElement = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(doctorsSchema);

    return () => {
      const el = document.getElementById(scriptId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="page-wrapper doctorspage">
      <section>

    <section className="ftco-section test8">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-8 text-center heading-section">
            <h2 className="mb-4" id="doctorsour">Our Doctors</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <Link to="/doctor/dr-ankush-kumar" className="text-decoration-none text-dark">
              <div className="staff h-100 d-flex flex-column">
                <div className="img-wrap flex-grow-1">
                  <div className="img w-100 h-100" style={{ backgroundImage: "url('images/ankush.webp')", backgroundSize: "cover", backgroundPosition: "center", borderRadius: 10 }}>
                  </div>
                </div>
                <div className="text pt-4 text-center">
                  <h3 className="mb-1">ANKUSH KUMAR MDS</h3>
                  <span className="position mb-2 text-muted">(Orthodontist and Invisalign Provider)</span>
                  <div className="faded">
                    <b>- SR DOCTOR -</b>
                  </div>
                  <div className="mt-2">
                    <span className="btn btn-sm btn-primary px-3 py-1">View Full Profile</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          
          <div className="col-12 col-sm-10 col-md-6 col-lg-4">
            <Link to="/doctor/dr-susheel-kumar" className="text-decoration-none text-dark">
              <div className="staff h-100 d-flex flex-column">
                <div className="img-wrap flex-grow-1">
                  <div className="img w-100 h-100" style={{ backgroundImage: "url('/images/susheel1.png')", backgroundSize: "cover", backgroundPosition: "top center", borderRadius: 10 }}>
                  </div>
                </div>
                <div className="text pt-4 text-center">
                  <h3 className="mb-1">SUSHEEL KUMAR MDS</h3>
                  <span className="position mb-2 text-muted">(Pediatric Dentist and Implantologist)</span>
                  <div className="faded">
                    <b>- SR DOCTOR -</b>
                  </div>
                  <div className="mt-2">
                    <span className="btn btn-sm btn-primary px-3 py-1">View Full Profile</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section></section>
    </div>
  );
}
