import React from 'react';
import { siteConfig } from '../../data/site';
import { navigationData } from '../../data/navigation';
import { MapPin, Phone, MessageCircle, Mail, Sparkles } from 'lucide-react';
import { formatPhoneUrl, formatWhatsAppUrl } from '../../lib/utils';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const whatsappUrl = formatWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    'Salam Rana Jewellers, I would like to inquire about your jewellery.'
  );

  return (
    <footer className="bg-[#000000] border-t border-[#BF953F]/30 text-[#A0A0A0] relative overflow-hidden">
      {/* Top Gold Accent Line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#BF953F] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src="/images/brand/rana-jewellers-logo.png"
                alt="Rana Jewellers Logo"
                className="h-12 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div>
                <span className="font-serif text-xl tracking-[0.15em] uppercase text-gold-metallic font-bold block">
                  Rana Jewellers
                </span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#777]">
                  DHA LAHORE
                </span>
              </div>
            </a>

            <p className="text-xs text-[#8E8E8E] font-light leading-relaxed">
              {siteConfig.shortDescription}
            </p>

            <div className="pt-2 text-xs text-[#BF953F] font-serif italic">
              {siteConfig.taglineUrdu}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-white mb-4 border-b border-white/10 pb-2">
              Collections &amp; Atelier
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navigationData.menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#FCF6BA] transition-colors flex items-center gap-2 group"
                  >
                    <span className="text-[#BF953F] opacity-0 group-hover:opacity-100 transition-opacity">✦</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Showroom Location & Timings */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-white mb-4 border-b border-white/10 pb-2">
              Boutique Hours
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#BF953F] shrink-0 mt-0.5" />
                <span className="text-white/90">{siteConfig.location.fullAddress}</span>
              </div>

              {siteConfig.openingHours.map((h, idx) => (
                <div key={idx} className="pl-6 text-[#888888]">
                  <span className="text-white/80 block">{h.days}</span>
                  <span>{h.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Col 4: Private Concierge & Direct Contact */}
          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-white mb-4 border-b border-white/10 pb-2">
              Private Concierge
            </h4>
            <div className="space-y-3 text-xs">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#25D366] hover:underline"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {siteConfig.contact.whatsappDisplay}</span>
              </a>

              <a
                href={formatPhoneUrl(siteConfig.contact.phone)}
                className="flex items-center gap-2.5 text-white/90 hover:text-[#FCF6BA]"
              >
                <Phone className="w-4 h-4 text-[#BF953F]" />
                <span>Phone: {siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-2.5 text-[#888] hover:text-white"
              >
                <Mail className="w-4 h-4 text-[#BF953F]" />
                <span>{siteConfig.contact.email}</span>
              </a>

              <div className="pt-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0E0E0E] border border-[#BF953F]/30 text-[10px] text-[#FCF6BA]">
                  <Sparkles className="w-3 h-3 text-[#BF953F]" />
                  <span>Private Valet &amp; Security on Site</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#6E6E6E] text-center sm:text-left">
          <div>
            <p>© {currentYear} Rana Jewellers. All rights reserved. Handcrafted in Pakistan.</p>
            <p className="mt-1 text-[#8A8A8A]">
              Developed by <span className="text-[#FCF6BA] font-medium tracking-wide">Ahmad Asif</span>
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-[10px] sm:text-[11px]">
            <span>DHA Lahore Flagship</span>
            <span>&bull;</span>
            <span>Hallmarked Pure Gold</span>
            <span>&bull;</span>
            <span>Certified Solitaires</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
