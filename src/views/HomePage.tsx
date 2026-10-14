'use client';

import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Doctors from '../components/Doctors';
import Gallery from '../components/Gallery';
import Faqs from '../components/Faqs';
import Testimonial from '../components/Testimonial';

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
      <Hero />


      {/* Welcome & About Section */}
      <About />

      {/* Clinic Services Slider */}
      <Services onOpenServices={onOpenServices} />

      {/* Why Choose Us & CTA Banners */}
      <WhyUs />

      {/* Senior Doctors Showcase */}
      <Doctors />

      {/* Clinical Image Gallery */}
      <Gallery />

      {/* Frequently Asked Questions */}
      <Faqs />

      {/* Patient Google Reviews & Direct Feedback */}
      <Testimonial />
    </>
  );
}
