import React, { useEffect } from 'react';
import Seo from '../components/Seo';
import HeroSlider from '../components/HeroSlider';
import WelcomeAbout from '../components/WelcomeAbout';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import DoctorsSection from '../components/DoctorsSection';
import GallerySection from '../components/GallerySection';
import FAQSection from '../components/FAQSection';
import GoogleReviewsSection from '../components/GoogleReviewsSection';

interface HomePageProps {
  onOpenServices: () => void;
}

const homeSchema = {
  "@context": "https://schema.org/",
  "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
  "@id": "https://www.simplysmilezdental.in/#dentist",
  "name": "Simply Smilez Dental Clinic",
  "url": "https://www.simplysmilezdental.in/",
  "description": "Simply Smilez Dental Clinic provides comprehensive dental care for children and adults in Shaikpet, Hyderabad, including Invisalign, Invisalign First for Kids, braces, root canal treatment, dental implants, cosmetic dentistry, pediatric dentistry and general dental care.",
  "medicalSpecialty": "Dentistry",
  "image": "https://www.simplysmilezdental.in/images/about.webp",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.simplysmilezdental.in/images/logo-3.webp"
  },
  "areaServed": [
    {
      "@type": "Place",
      "name": "Shaikpet, Hyderabad"
    },
    {
      "@type": "Place",
      "name": "Manikonda, Hyderabad"
    },
    {
      "@type": "Place",
      "name": "Kondapur, Hyderabad"
    },
    {
      "@type": "Place",
      "name": "Jubilee Hills, Hyderabad"
    },
    {
      "@type": "Place",
      "name": "Gachibowli, Hyderabad"
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dental Treatments",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Invisalign"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Invisalign First for Kids"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Root Canal Treatment"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Dental Implants"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Braces"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Pediatric Dentistry"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "Cosmetic Dentistry"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalProcedure",
          "name": "General Dentistry"
        }
      }
    ]
  },
  "sameAs": [
    "https://www.simplysmilezdental.in/"
  ]
};

export default function HomePage({ onOpenServices }: HomePageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Seo
        title="Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental"
        description="Simply Smilez Dental Clinic in Shaikpet offers Invisalign, Invisalign First for Kids, root canals, braces, implants and family dental care in Hyderabad."
        keywords="dental clinic in Shaikpet, dentist in Shaikpet Hyderabad, Invisalign Shaikpet, Invisalign First for Kids Hyderabad, root canal Shaikpet, dental implants Hyderabad, braces Shaikpet, pediatric dentist Hyderabad, dentist Manikonda, dentist Kondapur, dentist Jubilee Hills, dentist Gachibowli"
        canonical="https://www.simplysmilezdental.in/"
        robots="index,follow"
        ogType="website"
        ogTitle="Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental"
        ogDescription="Comprehensive dental care in Shaikpet, Hyderabad, including Invisalign, Invisalign First for Kids, root canals, braces, implants and more."
        ogUrl="https://www.simplysmilezdental.in/"
        ogImage="https://www.simplysmilezdental.in/images/about.webp"
        ogImageAlt="Simply Smilez Dental Clinic in Shaikpet, Hyderabad"
        twitterCard="summary_large_image"
        twitterTitle="Dental Clinic in Shaikpet, Hyderabad | Simply Smilez Dental"
        twitterDescription="Invisalign, Invisalign First for Kids, root canals, braces, implants and family dental care in Shaikpet, Hyderabad."
        twitterImage="https://www.simplysmilezdental.in/images/about.webp"
        schema={homeSchema}
      />

      {/* Main Hero Banner Slider */}
      <HeroSlider />

      {/* Welcome & About Section */}
      <WelcomeAbout />

      {/* Clinic Services Slider */}
      <ServicesSection onOpenServices={onOpenServices} />

      {/* Why Choose Us & CTA Banners */}
      <WhyChooseUs />

      {/* Senior Doctors Showcase */}
      <DoctorsSection />

      {/* Clinical Image Gallery */}
      <GallerySection />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Patient Google Reviews & Direct Feedback */}
      <GoogleReviewsSection />
    </>
  );
}
