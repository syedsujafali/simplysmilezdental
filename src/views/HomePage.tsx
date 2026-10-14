'use client';

import React, { useEffect } from 'react';
import HeroSlider from '../components/HeroSlider';
import WelcomeAbout from '../components/WelcomeAbout';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import DoctorsSection from '../components/DoctorsSection';
import GallerySection from '../components/GallerySection';
import FAQSection from '../components/FAQSection';
import GoogleReviewsSection from '../components/GoogleReviewsSection';

interface HomePageProps {
  onOpenServices?: () => void;
}

export default function HomePage({ onOpenServices }: HomePageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
