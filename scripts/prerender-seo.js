import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '..', 'dist');
const templatePath = path.resolve(distDir, 'index.html');


if (!fs.existsSync(templatePath)) {
  console.error("dist/index.html not found. Run vite build first.");
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

// Configuration for all routes with their exact metadata & schemas
export const pageSeoData = {
  '/about': {
    title: 'Invisalign & Root Canal Dentist in Hyderabad | Simply Smilez',
    description: 'Simply Smilez Dental Clinic offers Invisalign, Invisalign First for Kids, root canal treatment, and family dental care in Shaikpet, Hyderabad.',
    keywords: 'Invisalign dentist Hyderabad, root canal dentist Hyderabad, Invisalign First for Kids, dentist in Shaikpet, dental clinic Shaikpet, Simply Smilez Dental',
    author: 'Simply Smilez Dental Clinic',
    canonical: 'https://www.simplysmilezdental.in/about.html',
    ogTitle: 'Invisalign & Root Canal Dentist in Hyderabad | Simply Smilez',
    ogDescription: 'Simply Smilez Dental Clinic offers Invisalign, Invisalign First for Kids, root canal treatment, and family dental care in Shaikpet, Hyderabad.',
    ogUrl: 'https://www.simplysmilezdental.in/about.html',
    ogImage: 'https://www.simplysmilezdental.in/images/about.webp',
    ogImageAlt: 'Simply Smilez Dental Clinic in Shaikpet, Hyderabad',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Invisalign & Root Canal Dentist in Hyderabad | Simply Smilez',
    twitterDescription: 'Simply Smilez Dental Clinic offers Invisalign, Invisalign First for Kids, root canal treatment, and family dental care in Shaikpet, Hyderabad.',
    twitterImage: 'https://www.simplysmilezdental.in/images/about.webp',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Dentist",
          "@id": "https://www.simplysmilezdental.in/#dentist",
          "name": "Simply Smilez Dental Clinic",
          "url": "https://www.simplysmilezdental.in/",
          "description": "Simply Smilez Dental Clinic is a dental clinic in Shaikpet, Hyderabad, providing personalized dental care including Invisalign, braces, dental implants, root canal treatment, crowns, veneers, teeth whitening, pediatric dentistry, wisdom tooth extraction and laser gum treatment.",
          "image": "https://www.simplysmilezdental.in/images/about.webp",
          "priceRange": "$$",
          "medicalSpecialty": "https://schema.org/Dentistry",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Shaikpet",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
          },
          "areaServed": [
            { "@type": "Place", "name": "Shaikpet" },
            { "@type": "Place", "name": "Manikonda" },
            { "@type": "Place", "name": "Tolichowki" },
            { "@type": "Place", "name": "Jubilee Hills" },
            { "@type": "Place", "name": "Banjara Hills" },
            { "@type": "Place", "name": "Gachibowli" },
            { "@type": "Place", "name": "Narsingi" },
            { "@type": "Place", "name": "Mehdipatnam" }
          ],
          "foundingDate": "2018"
        },
        {
          "@type": "WebSite",
          "@id": "https://www.simplysmilezdental.in/#website",
          "url": "https://www.simplysmilezdental.in/",
          "name": "Simply Smilez Dental Clinic",
          "publisher": { "@id": "https://www.simplysmilezdental.in/#dentist" }
        },
        {
          "@type": "WebPage",
          "@id": "https://www.simplysmilezdental.in/about.html#webpage",
          "url": "https://www.simplysmilezdental.in/about.html",
          "name": "About Simply Smilez Dental Clinic",
          "description": "Learn about Simply Smilez Dental Clinic, a dental clinic in Shaikpet, Hyderabad, established in 2018.",
          "isPartOf": { "@id": "https://www.simplysmilezdental.in/#website" },
          "about": { "@id": "https://www.simplysmilezdental.in/#dentist" },
          "breadcrumb": { "@id": "https://www.simplysmilezdental.in/about.html#breadcrumb" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.simplysmilezdental.in/about.html#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.simplysmilezdental.in/" },
            { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://www.simplysmilezdental.in/about.html" }
          ]
        },
        {
          "@type": "Service",
          "@id": "https://www.simplysmilezdental.in/about.html#invisalign",
          "name": "Invisalign Treatment",
          "serviceType": "Invisalign",
          "provider": { "@id": "https://www.simplysmilezdental.in/#dentist" },
          "areaServed": { "@type": "City", "name": "Hyderabad" }
        },
        {
          "@type": "Service",
          "@id": "https://www.simplysmilezdental.in/about.html#root-canal",
          "name": "Root Canal Treatment",
          "serviceType": "Root Canal Treatment",
          "provider": { "@id": "https://www.simplysmilezdental.in/#dentist" },
          "areaServed": { "@type": "City", "name": "Hyderabad" }
        },
        {
          "@type": "Service",
          "@id": "https://www.simplysmilezdental.in/about.html#dental-implants",
          "name": "Dental Implants",
          "serviceType": "Dental Implants",
          "provider": { "@id": "https://www.simplysmilezdental.in/#dentist" },
          "areaServed": { "@type": "City", "name": "Hyderabad" }
        },
        {
          "@type": "Service",
          "@id": "https://www.simplysmilezdental.in/about.html#braces",
          "name": "Braces and Orthodontic Treatment",
          "serviceType": "Braces",
          "provider": { "@id": "https://www.simplysmilezdental.in/#dentist" },
          "areaServed": { "@type": "City", "name": "Hyderabad" }
        },
        {
          "@type": "Service",
          "@id": "https://www.simplysmilezdental.in/about.html#pediatric-dentistry",
          "name": "Pediatric Dentistry",
          "serviceType": "Pediatric Dentistry",
          "provider": { "@id": "https://www.simplysmilezdental.in/#dentist" },
          "areaServed": { "@type": "City", "name": "Hyderabad" }
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.simplysmilezdental.in/about.html#faq",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Where is Simply Smilez Dental Clinic located?",
              "acceptedAnswer": { "@type": "Answer", "text": "We are located in Shaikpet, Hyderabad, serving patients from surrounding areas." }
            },
            {
              "@type": "Question",
              "name": "What treatments do you offer?",
              "acceptedAnswer": { "@type": "Answer", "text": "Our services include Invisalign, braces, dental implants, root canal treatment, crowns, veneers, teeth whitening, pediatric dentistry, wisdom tooth extraction, laser gum treatment, and preventive care." }
            },
            {
              "@type": "Question",
              "name": "Do you provide Invisalign for children?",
              "acceptedAnswer": { "@type": "Answer", "text": "Yes. We offer Invisalign First for Kids where clinically appropriate." }
            },
            {
              "@type": "Question",
              "name": "When was Simply Smilez Dental Clinic established?",
              "acceptedAnswer": { "@type": "Answer", "text": "The clinic was established in 2018 and has been providing dental care in Hyderabad since then." }
            }
          ]
        }
      ]
    }
  },
  '/all-services': {
    title: 'Dental Services in Hyderabad | Simply Smilez Dental',
    description: 'Explore comprehensive dental services in Hyderabad at Simply Smilez Dental, including Invisalign, pediatric dentistry, braces, root canals, whitening and more.',
    keywords: 'dental services Hyderabad, dentist Hyderabad, Invisalign Hyderabad, clear aligners, pediatric dentistry, braces, root canal treatment, teeth whitening, cosmetic dentistry',
    author: 'Simply Smilez Dental',
    canonical: 'https://www.simplysmilezdental.in/all-services.html',
    ogTitle: 'Dental Services in Hyderabad | Simply Smilez Dental',
    ogDescription: 'Explore comprehensive dental services in Hyderabad at Simply Smilez Dental, including Invisalign, pediatric dentistry, braces, root canals, whitening and more.',
    ogUrl: 'https://www.simplysmilezdental.in/all-services.html',
    ogImage: 'https://www.simplysmilezdental.in/images/dental-services.jpg',
    ogImageAlt: 'Dental services at Simply Smilez Dental',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Dental Services in Hyderabad | Simply Smilez Dental',
    twitterDescription: 'Explore comprehensive dental services in Hyderabad at Simply Smilez Dental, including Invisalign, pediatric dentistry, braces, root canals, whitening and more.',
    twitterImage: 'https://www.simplysmilezdental.in/images/dental-services.jpg',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Dentist",
          "@id": "https://www.simplysmilezdental.in/#dentist",
          "name": "Simply Smilez Dental Clinic",
          "url": "https://www.simplysmilezdental.in/",
          "telephone": "+91-7799376656",
          "email": "info@simplysmilezdental.in",
          "image": "https://www.simplysmilezdental.in/images/logo.png",
          "description": "Simply Smilez Dental Clinic provides comprehensive dental care in Hyderabad, including Invisalign and clear aligners, pediatric dentistry, braces, root canal treatment, cosmetic dentistry, teeth whitening, gum care and oral surgery.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "P.V. Reddy Complex, 1st Floor, Dwaraka Nagar Colony, O.U. Colony Road, Shaikpet",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "postalCode": "500008",
            "addressCountry": "IN"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "10:00",
              "closes": "21:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Sunday",
              "opens": "11:00",
              "closes": "16:00"
            }
          ],
          "areaServed": { "@type": "City", "name": "Hyderabad" },
          "sameAs": ["https://www.simplysmilezdental.in/"]
        },
        {
          "@type": "WebPage",
          "@id": "https://www.simplysmilezdental.in/all-services.html#webpage",
          "url": "https://www.simplysmilezdental.in/all-services.html",
          "name": "Dental Services in Hyderabad | Simply Smilez Dental",
          "headline": "Comprehensive Dental Services in Hyderabad",
          "description": "Explore comprehensive dental services in Hyderabad at Simply Smilez Dental, including Invisalign, pediatric dentistry, braces, root canals, whitening and more.",
          "isPartOf": { "@id": "https://www.simplysmilezdental.in/#website" },
          "about": { "@id": "https://www.simplysmilezdental.in/#dentist" },
          "breadcrumb": { "@id": "https://www.simplysmilezdental.in/all-services.html#breadcrumb" }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.simplysmilezdental.in/#website",
          "url": "https://www.simplysmilezdental.in/",
          "name": "Simply Smilez Dental",
          "publisher": { "@id": "https://www.simplysmilezdental.in/#dentist" }
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.simplysmilezdental.in/all-services.html#breadcrumb",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.simplysmilezdental.in/" },
            { "@type": "ListItem", "position": 2, "name": "All Services", "item": "https://www.simplysmilezdental.in/all-services.html" }
          ]
        },
        {
          "@type": "ItemList",
          "@id": "https://www.simplysmilezdental.in/all-services.html#services",
          "name": "Dental Services at Simply Smilez Dental",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "General Dentistry" },
            { "@type": "ListItem", "position": 2, "name": "Invisalign & Clear Aligners" },
            { "@type": "ListItem", "position": 3, "name": "Pediatric Dentistry" },
            { "@type": "ListItem", "position": 4, "name": "Braces & Orthodontics" },
            { "@type": "ListItem", "position": 5, "name": "Root Canal & Endodontics" },
            { "@type": "ListItem", "position": 6, "name": "Restorative & Cosmetic Dentistry" },
            { "@type": "ListItem", "position": 7, "name": "Hygiene & Gum Care" },
            { "@type": "ListItem", "position": 8, "name": "Oral Surgery" },
            { "@type": "ListItem", "position": 9, "name": "Teeth Whitening" },
            { "@type": "ListItem", "position": 10, "name": "Advanced Dentistry" }
          ]
        }
      ]
    }
  },
  '/services/braces': {
    title: 'Dental Braces Clinic in Hyderabad | Braces & Orthodontic Treatment',
    description: 'Get braces in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Explore braces, clear aligners and orthodontic treatment for a straighter smile.',
    keywords: 'braces in Hyderabad, dental braces in Hyderabad, braces in Shaikpet, orthodontist in Hyderabad, braces treatment Hyderabad, clear aligners Hyderabad, Invisalign Hyderabad, braces dentist near Manikonda, orthodontic treatment Shaikpet',
    author: 'Simply Smilez Dental Clinic',
    canonical: 'https://www.simplysmilezdental.in/braces.html',
    ogTitle: 'Dental Braces Clinic in Hyderabad | Braces & Orthodontic Treatment',
    ogDescription: 'Get braces in Hyderabad at Simply Smilez Dental Clinic, Shaikpet. Explore braces, clear aligners and orthodontic treatment for a straighter smile.',
    ogUrl: 'https://www.simplysmilezdental.in/braces.html',
    ogImage: 'https://www.simplysmilezdental.in/images/braces.webp',
    ogImageAlt: 'Dental braces treatment at Simply Smilez Dental Clinic in Shaikpet, Hyderabad',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Dental Braces Clinic in Hyderabad | Braces & Orthodontic Treatment',
    twitterDescription: 'Explore braces, clear aligners and orthodontic treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet.',
    twitterImage: 'https://www.simplysmilezdental.in/images/braces.webp',
    schema: {
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
          "@id": "https://www.simplysmilezdental.in/braces.html",
          "url": "https://www.simplysmilezdental.in/braces.html",
          "name": "Dental Braces Clinic in Hyderabad | Braces & Orthodontic Treatment",
          "description": "Learn about braces, clear aligners and orthodontic treatment in Hyderabad at Simply Smilez Dental Clinic, Shaikpet.",
          "isPartOf": {
            "@id": "https://www.simplysmilezdental.in/#website"
          },
          "about": {
            "@id": "https://www.simplysmilezdental.in/braces.html#service"
          },
          "publisher": {
            "@id": "https://www.simplysmilezdental.in/#dentist"
          }
        },
        {
          "@type": "Service",
          "@id": "https://www.simplysmilezdental.in/braces.html#service",
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
          "url": "https://www.simplysmilezdental.in/braces.html"
        },
        {
          "@type": "FAQPage",
          "@id": "https://www.simplysmilezdental.in/braces.html#faq",
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
    }
  },
  '/services/pediatric-dentistry': {
    title: 'Best Child Dentists Near Me in Hyderabad | Pediatric Dentistry',
    description: "Pediatric dentistry in Shaikpet, Hyderabad for children's dental checkups, preventive care, fillings, crowns, fluoride, sealants and orthodontic evaluation.",
    keywords: "pediatric dentistry Hyderabad, pediatric dentist Hyderabad, pediatric dental care Hyderabad, children's dentistry Hyderabad, kids dental checkup, pediatric dental consultation, preventive pediatric dentistry, fluoride treatment for children, dental sealants for children, children's dental fillings, pediatric root canal treatment, stainless steel crowns, pediatric zirconia crowns, space maintainers, early orthodontic evaluation, interceptive orthodontics, Phase 1 orthodontic treatment, pediatric dentist Shaikpet",
    author: 'Simply Smilez Dental Clinic',
    canonical: 'https://www.simplysmilezdental.in/pediatary.html',
    ogTitle: 'Best Child Dentists Near Me in Hyderabad | Pediatric Dentistry',
    ogDescription: "Pediatric dentistry in Shaikpet, Hyderabad for children's dental checkups, preventive care, fillings, crowns, fluoride, sealants and orthodontic evaluation.",
    ogUrl: 'https://www.simplysmilezdental.in/pediatary.html',
    ogImage: 'https://www.simplysmilezdental.in/images/pedia2.webp',
    ogImageAlt: "Pediatric dentistry and children's dental care at Simply Smilez Dental Clinic in Shaikpet, Hyderabad",
    twitterCard: 'summary_large_image',
    twitterTitle: 'Best Child Dentists Near Me in Hyderabad | Pediatric Dentistry',
    twitterDescription: "Pediatric dentistry in Shaikpet, Hyderabad for children's dental checkups, preventive care, fillings, crowns, fluoride, sealants and orthodontic evaluation.",
    twitterImage: 'https://www.simplysmilezdental.in/images/pedia2.webp',
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://www.simplysmilezdental.in/pediatary.html#webpage",
          "url": "https://www.simplysmilezdental.in/pediatary.html",
          "name": "Best Child Dentists Near Me in Hyderabad | Pediatric Dentistry",
          "description": "Pediatric dentistry in Shaikpet, Hyderabad for children's dental checkups, preventive care, fillings, crowns, fluoride, sealants and orthodontic evaluation.",
          "inLanguage": "en-IN",
          "isPartOf": {
            "@id": "https://www.simplysmilezdental.in/#website"
          },
          "about": {
            "@id": "https://www.simplysmilezdental.in/pediatary.html#pediatric-dentistry"
          },
          "mainEntity": {
            "@id": "https://www.simplysmilezdental.in/pediatary.html#pediatric-dentistry"
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
          "@id": "https://www.simplysmilezdental.in/pediatary.html#pediatric-dentistry",
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
          "url": "https://www.simplysmilezdental.in/pediatary.html",
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
          "@id": "https://www.simplysmilezdental.in/pediatary.html#procedure",
          "name": "Pediatric Dental Treatment",
          "description": "Dental procedures for children may include preventive treatments, restorative procedures and selected treatments for primary teeth based on individual clinical needs.",
          "bodyLocation": "Teeth",
          "procedureType": "http://schema.org/NoninvasiveProcedure"
        },
        {
          "@type": "BreadcrumbList",
          "@id": "https://www.simplysmilezdental.in/pediatary.html#breadcrumb",
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
              "item": "https://www.simplysmilezdental.in/pediatary.html"
            }
          ]
        }
      ]
    }
  }
};

function generatePageHtml(baseHtml, meta) {
  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);

  // Replace Description (including multiline)
  html = html.replace(/<meta\s+name="description"\s+content=".*?"\s*\/>/s, `<meta name="description"\n    content="${meta.description}" />`);

  // Replace Author
  html = html.replace(/<meta\s+name="author"\s+content=".*?"\s*\/>/s, `<meta name="author" content="${meta.author}" />`);

  // Replace Keywords (including multiline)
  html = html.replace(/<meta\s+name="keywords"\s+content=".*?"\s*\/>/s, `<meta name="keywords"\n    content="${meta.keywords}" />`);

  // Replace Canonical
  html = html.replace(/<link\s+rel="canonical"\s+href=".*?"\s*\/>/s, `<link rel="canonical" href="${meta.canonical}" />`);

  // Replace Open Graph
  html = html.replace(/<meta\s+property="og:title"\s+content=".*?"\s*\/>/s, `<meta property="og:title" content="${meta.ogTitle}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content=".*?"\s*\/>/s, `<meta property="og:description"\n    content="${meta.ogDescription}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content=".*?"\s*\/>/s, `<meta property="og:url" content="${meta.ogUrl}" />`);
  html = html.replace(/<meta\s+property="og:image"\s+content=".*?"\s*\/>/s, `<meta property="og:image" content="${meta.ogImage}" />`);
  html = html.replace(/<meta\s+property="og:image:alt"\s+content=".*?"\s*\/>/s, `<meta property="og:image:alt" content="${meta.ogImageAlt}" />`);

  // Replace Twitter
  html = html.replace(/<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/s, `<meta name="twitter:title" content="${meta.twitterTitle}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/s, `<meta name="twitter:description"\n    content="${meta.twitterDescription}" />`);
  html = html.replace(/<meta\s+name="twitter:image"\s+content=".*?"\s*\/>/s, `<meta name="twitter:image" content="${meta.twitterImage}" />`);

  // Replace Schema JSON-LD
  const schemaRegex = /<script type="application\/ld\+json">.*?<\/script>/s;
  const newSchemaScript = `<script type="application/ld+json">\n${JSON.stringify(meta.schema, null, 2)}\n  </script>`;
  html = html.replace(schemaRegex, newSchemaScript);

  return html;
}


// Generate static HTML for each defined page
for (const [route, meta] of Object.entries(pageSeoData)) {
  const pageHtml = generatePageHtml(template, meta);
  const routeFolder = path.join(distDir, route.replace(/^\//, ''));
  fs.mkdirSync(routeFolder, { recursive: true });
  fs.writeFileSync(path.join(routeFolder, 'index.html'), pageHtml, 'utf8');
  // Also write legacy .html filename (e.g. dist/about.html)
  fs.writeFileSync(path.join(distDir, `${route.replace(/^\//, '')}.html`), pageHtml, 'utf8');
  console.log(`Generated static SEO HTML for ${route} and ${route}.html`);
}
