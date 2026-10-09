import React, { useState, useEffect } from 'react';
import { navigationData } from '../../data/navigation';
import { siteConfig } from '../../data/site';
import { GoldButton } from '../ui/GoldButton';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { formatPhoneUrl, formatWhatsAppUrl } from '../../lib/utils';

interface NavbarProps {
  onOpenAppointmentModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointmentModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#000000]/95 backdrop-blur-md border-b border-[#BF953F]/30 shadow-2xl py-2'
          : 'bg-[#000000]/80 backdrop-blur-sm border-b border-white/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#BF953F]"
            aria-label="Rana Jewellers Home"
          >
            <img
              src="/images/brand/rana-jewellers-logo.png"
              alt="Rana Jewellers Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              onError={(e) => {
                // If logo fails to load, gracefully hide img and show stylized text
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.18em] uppercase text-gold-metallic">
                RANA JEWELLERS
              </span>
              <span className="text-[9px] tracking-[0.3em] uppercase text-[#A0A0A0] font-light">
                DHA LAHORE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navigationData.menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-widest text-[#D1D1D1] hover:text-[#FCF6BA] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#BF953F] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <GoldButton
              variant="outline"
              size="sm"
              onClick={onOpenAppointmentModal}
              className="text-[11px] tracking-widest"
            >
              Book Viewing
            </GoldButton>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#E8E8E8] hover:text-[#FCF6BA] focus:outline-none focus:ring-2 focus:ring-[#BF953F]"
              aria-label={isMobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[60px] z-50 bg-black/90 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col gap-6 pt-4">
            <nav className="flex flex-col gap-4 text-center">
              {navigationData.menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-lg tracking-widest uppercase text-[#E8E8E8] hover:text-[#FCF6BA] py-2 border-b border-white/5 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="pt-4 flex flex-col gap-3">
              <GoldButton
                variant="primary"
                size="md"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full text-xs"
              >
                Book Private Viewing
              </GoldButton>

              <GoldButton
                variant="whatsapp"
                size="md"
                asLink
                href={formatWhatsAppUrl(
                  siteConfig.contact.whatsappNumber,
                  'Salam Rana Jewellers, I would like to book a private viewing.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-xs gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Concierge
              </GoldButton>
            </div>
          </div>

          {/* Mobile Footer Info */}
          <div className="pt-8 border-t border-white/10 text-center text-xs text-[#A0A0A0] flex flex-col gap-2">
            <p className="text-white font-medium">{siteConfig.location.fullAddress}</p>
            <div className="flex justify-center items-center gap-4 text-[#BF953F] pt-2">
              <a href={formatPhoneUrl(siteConfig.contact.phone)} className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
