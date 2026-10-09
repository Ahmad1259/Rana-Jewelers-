import React, { useState } from 'react';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { CategorySection } from './sections/CategorySection';
import { FeaturedCollection } from './sections/FeaturedCollection';
import { BridalSection } from './sections/BridalSection';
import { AboutSection } from './sections/AboutSection';
import { FoundersSection } from './sections/FoundersSection';
import { WhyChooseUsSection } from './sections/WhyChooseUsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { VisitUsSection } from './sections/VisitUsSection';
import { AppointmentModal } from './components/forms/AppointmentModal';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from './data/site';
import { formatWhatsAppUrl } from './lib/utils';

export const App: React.FC = () => {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [appointmentService, setAppointmentService] = useState('Bridal Consultation');

  const handleOpenAppointment = (serviceName?: string) => {
    if (serviceName) {
      setAppointmentService(serviceName);
    }
    setIsAppointmentModalOpen(true);
  };

  const floatingWhatsAppUrl = formatWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    'Salam Rana Jewellers, I would like to inquire about your jewellery designs.'
  );

  return (
    <div className="min-h-screen bg-[#000000] text-[#E8E8E8] flex flex-col selection:bg-[#B38728] selection:text-black">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Main Navigation */}
      <Navbar onOpenAppointmentModal={() => handleOpenAppointment('Private Viewing')} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection onOpenAppointmentModal={() => handleOpenAppointment('Private Viewing')} />

        {/* Shop by Category */}
        <CategorySection />

        {/* Featured Collection / New Arrivals */}
        <FeaturedCollection onOpenAppointmentModal={handleOpenAppointment} />

        {/* Bridal Couture Section */}
        <BridalSection onOpenAppointmentModal={handleOpenAppointment} />

        {/* About Rana Jewellers */}
        <AboutSection />

        {/* Master Artisans / Founders */}
        <FoundersSection />

        {/* Why Choose Us */}
        <WhyChooseUsSection />

        {/* Verified Patron Testimonials */}
        <TestimonialsSection />

        {/* Visit Us: Location, Map & FAQs */}
        <VisitUsSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Appointment & Private Viewing Modal */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        initialService={appointmentService}
      />

      {/* Floating Instant WhatsApp Button for Luxury Concierge */}
      <aside aria-label="Quick WhatsApp Concierge">
        <a
          href={floatingWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
          aria-label="Direct WhatsApp Concierge"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase">
            WhatsApp Concierge
          </span>
        </a>
      </aside>
    </div>
  );
};

export default App;
