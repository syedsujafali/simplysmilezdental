import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ServicesModal from './components/ServicesModal';
import MobileBottomBar from './components/MobileBottomBar';

// Dedicated Page Components
import HomePage from './views/HomePage';
import AboutPage from './views/AboutPage';
import AllServicesPage from './views/AllServicesPage';
import CompositeFillingsPage from './views/services/CompositeFillingsPage';
import CrownsPage from './views/services/CrownsPage';
import VeneersPage from './views/services/VeneersPage';
import BracesPage from './views/services/BracesPage';
import LaserTeethPage from './views/services/LaserTeethPage';
import MicroscopicRootCanalPage from './views/services/MicroscopicRootCanalPage';
import LaserGumPage from './views/services/LaserGumPage';
import DentalImplantPage from './views/services/DentalImplantPage';
import PediataryPage from './views/services/PediataryPage';
import WisdomPage from './views/services/WisdomPage';
import GalleryPage from './views/GalleryPage';
import BlogPage from './views/BlogPage';
import DoctorsPage from './views/DoctorsPage';
import DoctorAnkushPage from './views/doctors/DoctorAnkushPage';
import DoctorSusheelPage from './views/doctors/DoctorSusheelPage';
import TestimonialsPage from './views/TestimonialsPage';
import ContactPage from './views/ContactPage';

export default function App() {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <div className="app-root">
        {/* Top Header & Navigation */}
        <Header onOpenServices={() => setIsServicesModalOpen(true)} />

        {/* Multi-Page Routes */}
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage onOpenServices={() => setIsServicesModalOpen(true)} />} />

          {/* About */}
          <Route path="/about" element={<AboutPage />} />

          {/* All Services */}
          <Route path="/all-services" element={<AllServicesPage />} />
          <Route path="/services" element={<AllServicesPage />} />

          {/* Individual Specialty Services */}
          <Route path="/services/composite-fillings" element={<CompositeFillingsPage />} />
          <Route path="/services/crowns" element={<CrownsPage />} />
          <Route path="/services/veneers" element={<VeneersPage />} />
          <Route path="/services/braces" element={<BracesPage />} />
          <Route path="/services/laser-teeth-whitening" element={<LaserTeethPage />} />
          <Route path="/services/microscopic-root-canal" element={<MicroscopicRootCanalPage />} />
          <Route path="/services/laser-root-canal" element={<Navigate to="/services/microscopic-root-canal" replace />} />
          <Route path="/services/laser-gum-surgery" element={<LaserGumPage />} />
          <Route path="/services/dental-implants" element={<DentalImplantPage />} />
          <Route path="/services/pediatric-dentistry" element={<PediataryPage />} />
          <Route path="/services/wisdom-tooth-extraction" element={<WisdomPage />} />

          {/* Gallery */}
          <Route path="/gallery" element={<GalleryPage />} />

          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />

          {/* Doctors Listing */}
          <Route path="/doctors" element={<DoctorsPage />} />

          {/* Individual Doctor Profile Pages */}
          <Route path="/doctor/dr-ankush-kumar" element={<DoctorAnkushPage />} />
          <Route path="/doctor/dr-susheel-kumar" element={<DoctorSusheelPage />} />

          {/* Testimonials */}
          <Route path="/testimonials" element={<TestimonialsPage />} />

          {/* Contact Us */}
          <Route path="/contact" element={<ContactPage />} />

          {/* Legacy .html to React Page Redirects */}
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route path="/about.html" element={<Navigate to="/about" replace />} />
          <Route path="/all-services.html" element={<Navigate to="/all-services" replace />} />
          <Route path="/composite-fillings-hyderabad.html" element={<Navigate to="/services/composite-fillings" replace />} />
          <Route path="/crowns.html" element={<Navigate to="/services/crowns" replace />} />
          <Route path="/dental-veneers-hyderabad.html" element={<Navigate to="/services/veneers" replace />} />
          <Route path="/braces.html" element={<Navigate to="/services/braces" replace />} />
          <Route path="/laserteeth.html" element={<Navigate to="/services/laser-teeth-whitening" replace />} />
          <Route path="/laserroot.html" element={<Navigate to="/services/microscopic-root-canal" replace />} />
          <Route path="/lasergum.html" element={<Navigate to="/services/laser-gum-surgery" replace />} />
          <Route path="/dentalimplant.html" element={<Navigate to="/services/dental-implants" replace />} />
          <Route path="/pediatary.html" element={<Navigate to="/services/pediatric-dentistry" replace />} />
          <Route path="/wisdom.html" element={<Navigate to="/services/wisdom-tooth-extraction" replace />} />
          <Route path="/gallery.html" element={<Navigate to="/gallery" replace />} />
          <Route path="/doctor.html" element={<Navigate to="/doctors" replace />} />
          <Route path="/doctor/dr-ankush-kumar-orthodontist-invisalign-provider-hyderabad.html" element={<Navigate to="/doctor/dr-ankush-kumar" replace />} />
          <Route path="/doctor/dr-susheel-kumar-pediatric-dentist-implantologist-hyderabad.html" element={<Navigate to="/doctor/dr-susheel-kumar" replace />} />
          <Route path="/testimonal.html" element={<Navigate to="/testimonials" replace />} />
          <Route path="/contact.html" element={<Navigate to="/contact" replace />} />

          {/* Fallback to Home */}
          <Route path="*" element={<HomePage onOpenServices={() => setIsServicesModalOpen(true)} />} />
        </Routes>

        {/* Footer Section */}
        <Footer />

        {/* Mobile Fixed Bottom Action Bar */}
        <MobileBottomBar onOpenServices={() => setIsServicesModalOpen(true)} />

        {/* Services Modal */}
        <ServicesModal
          isOpen={isServicesModalOpen}
          onClose={() => setIsServicesModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
