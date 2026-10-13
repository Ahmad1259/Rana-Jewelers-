import React from 'react';
import { siteConfig } from '../../data/site';
import { navigationData } from '../../data/navigation';
import { MapPin, Phone, MessageCircle } from 'lucide-react';
import { formatPhoneUrl, formatWhatsAppUrl } from '../../lib/utils';

export const AnnouncementBar: React.FC = () => {
  if (!navigationData.announcement.enabled) return null;

  const whatsappUrl = formatWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    'Salam Rana Jewellers, I would like to inquire about your collection.'
  );

  return (
    <aside
      aria-label="Announcement"
      className="bg-[#0A0A0A] border-b border-[#BF953F]/20 text-[#A0A0A0] text-[11px] sm:text-xs py-2 px-3 sm:px-4 transition-colors"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Location & Hours */}
        <div className="flex items-center gap-2 sm:gap-3 truncate">
          <span className="flex items-center gap-1 text-[#FCF6BA] font-light truncate">
            <MapPin className="w-3 h-3 text-[#BF953F] shrink-0" aria-hidden="true" />
            <span className="truncate">{siteConfig.location.area}, {siteConfig.location.city}</span>
          </span>
          <span className="hidden md:inline text-white/20">|</span>
          <span className="hidden md:inline text-[#E8E8E8]/70">
            Mon–Sat: {siteConfig.openingHours[0].hours}
          </span>
        </div>

        {/* Center: Highlight promo on large screens */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="text-[10px] tracking-widest uppercase border border-[#BF953F]/40 px-2 py-0.5 text-[#FCF6BA]">
            Bespoke Atelier
          </span>
          <span className="text-white/80">{navigationData.announcement.highlightText}</span>
        </div>

        {/* Right: Touch-Friendly Direct Actions */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          <a
            href={formatPhoneUrl(siteConfig.contact.phone)}
            className="hidden xs:flex items-center gap-1 text-[#E8E8E8] hover:text-[#FCF6BA] transition-colors py-1 px-1.5 focus:outline-none"
            title="Call showroom"
          >
            <Phone className="w-3 h-3 text-[#BF953F]" aria-hidden="true" />
            <span className="hidden sm:inline">{siteConfig.contact.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>

          <span className="hidden xs:inline text-white/20">|</span>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] hover:text-[#42e880] transition-colors font-medium py-1 px-1.5 focus:outline-none"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="font-semibold">WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
