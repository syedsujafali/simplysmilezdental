import React, { useEffect } from 'react';
import Seo from '../components/Seo';
import HeroSlider from '../components/HeroSlider';
import WelcomeAbout from '../components/WelcomeAbout';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import DoctorsSection from '../components/DoctorsSection';
import GallerySection from '../components/GallerySection';
import FAQSection from '../components/FAQSection';

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
  "logo": "https://www.simplysmilezdental.in/images/logo-3.webp",
  "telephone": "+919603338904",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "P.V.Reddy Complex 1st Floor, Dwaraka Nagar Colony, O.U Colony Road, Shaikpet",
    "addressLocality": "Hyderabad",
    "postalCode": "500008",
    "addressCountry": "IN"
  }
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
        canonicalPath="/"
        structuredData={homeSchema}
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
    </>
  );
}
