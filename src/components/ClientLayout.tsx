'use client';

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MobileBottomBar from '../components/MobileBottomBar';
import ServicesModal from '../components/ServicesModal';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isServicesModalOpen, setIsServicesModalOpen] = useState(false);

  return (
    <div className="app-root" suppressHydrationWarning>
      {/* Top Header & Navigation */}
      <Header onOpenServices={() => setIsServicesModalOpen(true)} />

      {/* Main Page Content */}
      <main id="main-content">
        {children}
      </main>

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
  );
}
