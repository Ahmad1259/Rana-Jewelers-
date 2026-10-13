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
      setIsScrolled(window.scrollY > 20);
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
          : 'bg-[#000000]/85 backdrop-blur-sm border-b border-white/10 py-2.5 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none"
            aria-label="Rana Jewellers Home"
          >
            <img
              src="/images/brand/rana-jewellers-logo.png"
              alt="Rana Jewellers Logo"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="flex flex-col">
              <span className="font-serif text-base sm:text-xl font-bold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-gold-metallic leading-tight">
                RANA JEWELLERS
              </span>
              <span className="text-[8px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[#A0A0A0] font-light">
                DHA LAHORE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8" aria-label="Main Navigation">
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

          {/* Mobile Right Controls: WhatsApp Quick Icon + Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={formatWhatsAppUrl(siteConfig.contact.whatsappNumber, 'Salam Rana Jewellers, I would like to inquire about your jewellery.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] active:scale-95 transition-transform"
              aria-label="Direct WhatsApp Chat"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center text-[#E8E8E8] hover:text-[#FCF6BA] focus:outline-none border border-white/10 active:bg-white/10 transition-colors"
              aria-label={isMobileMenuOpen ? "Close Navigation Menu" : "Open Navigation Menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-[#BF953F]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[56px] sm:top-[65px] z-50 bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-5 sm:p-6 overflow-y-auto safe-bottom"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col gap-5 pt-2">
            <nav className="flex flex-col text-center divide-y divide-white/5">
              {navigationData.menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-lg tracking-[0.15em] uppercase text-[#E8E8E8] hover:text-[#FCF6BA] py-3.5 transition-colors flex items-center justify-center gap-2"
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </nav>

            <div className="pt-3 flex flex-col gap-3">
              <GoldButton
                variant="primary"
                size="md"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAppointmentModal();
                }}
                className="w-full min-h-[48px] text-xs font-semibold"
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
                className="w-full min-h-[48px] text-xs gap-2 font-semibold"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                WhatsApp Concierge
              </GoldButton>
            </div>
          </div>

          {/* Mobile Footer Info in Drawer */}
          <div className="pt-6 border-t border-white/10 text-center text-xs text-[#A0A0A0] flex flex-col gap-2 mt-4">
            <p className="text-white font-medium text-xs">{siteConfig.location.fullAddress}</p>
            <div className="flex justify-center items-center gap-4 text-[#BF953F] pt-1">
              <a href={formatPhoneUrl(siteConfig.contact.phone)} className="flex items-center gap-1.5 py-1">
                <Phone className="w-4 h-4" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
