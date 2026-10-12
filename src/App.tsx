import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ServicesModal from './components/ServicesModal';
import MobileBottomBar from './components/MobileBottomBar';

// Dedicated Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AllServicesPage from './pages/AllServicesPage';
import CompositeFillingsPage from './pages/services/CompositeFillingsPage';
import CrownsPage from './pages/services/CrownsPage';
import VeneersPage from './pages/services/VeneersPage';
import BracesPage from './pages/services/BracesPage';
import LaserTeethPage from './pages/services/LaserTeethPage';
import MicroscopicRootCanalPage from './pages/services/MicroscopicRootCanalPage';
import LaserGumPage from './pages/services/LaserGumPage';
import DentalImplantPage from './pages/services/DentalImplantPage';
import PediataryPage from './pages/services/PediataryPage';
import WisdomPage from './pages/services/WisdomPage';
import GalleryPage from './pages/GalleryPage';
import DoctorsPage from './pages/DoctorsPage';
import DoctorAnkushPage from './pages/doctors/DoctorAnkushPage';
import DoctorSusheelPage from './pages/doctors/DoctorSusheelPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState<boolean>(false);

  return (
    <HelmetProvider>
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

            {/* Doctors Listing */}
            <Route path="/doctors" element={<DoctorsPage />} />

            {/* Individual Doctor Profile Pages */}
            <Route path="/doctor/dr-ankush-kumar" element={<DoctorAnkushPage />} />
            <Route path="/doctor/dr-susheel-kumar" element={<DoctorSusheelPage />} />

            {/* Testimonials */}
            <Route path="/testimonials" element={<TestimonialsPage />} />

            {/* Contact Us */}
            <Route path="/contact" element={<ContactPage />} />

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
    </HelmetProvider>
  );
}
