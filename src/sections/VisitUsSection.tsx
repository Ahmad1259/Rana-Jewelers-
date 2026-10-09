import React, { useState } from 'react';
import { siteConfig } from '../data/site';
import { faqsData } from '../data/faqs';
import { SectionHeader } from '../components/ui/SectionHeader';
import { GoldButton } from '../components/ui/GoldButton';
import { MapPin, Phone, MessageCircle, Clock, Navigation, ChevronDown, Sparkles } from 'lucide-react';
import { formatPhoneUrl, formatWhatsAppUrl } from '../lib/utils';

export const VisitUsSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<string | null>(faqsData[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const whatsappInquiryUrl = formatWhatsAppUrl(
    siteConfig.contact.whatsappNumber,
    'Salam Rana Jewellers, I would like directions or assistance visiting your DHA Lahore boutique.'
  );

  return (
    <section id="visit" className="py-20 sm:py-28 bg-[#030303] border-t border-[#BF953F]/30 relative" aria-label="Visit Our Showroom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Flagship Boutique"
          title="Visit Our DHA Lahore Showroom"
          subtitle="Experience the grandeur of our collections in person. Located prominently on Main Boulevard, DHA Lahore."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Contact & Hours Info (5 cols) */}
          <div className="lg:col-span-5 bg-[#0A0A0A] border border-[#BF953F]/40 p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#BF953F] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Showroom Concierge</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-6">
                Rana Jewellers Boutique
              </h3>

              {/* Address */}
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-none border border-[#BF953F]/50 flex items-center justify-center text-[#BF953F] shrink-0 bg-black mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-0.5">Location</span>
                    <p className="text-white font-medium">{siteConfig.location.fullAddress}</p>
                    <p className="text-xs text-[#888888] mt-0.5">DHA Phase 6 / Main Boulevard, Lahore</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-none border border-[#BF953F]/50 flex items-center justify-center text-[#BF953F] shrink-0 bg-black mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-0.5">Boutique Timings</span>
                    {siteConfig.openingHours.map((h, i) => (
                      <div key={i} className="text-xs text-[#D1D1D1]">
                        <span className="text-white font-medium">{h.days}:</span> {h.hours}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-none border border-[#BF953F]/50 flex items-center justify-center text-[#BF953F] shrink-0 bg-black mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-0.5">Direct Line</span>
                    <a
                      href={formatPhoneUrl(siteConfig.contact.phone)}
                      className="text-white hover:text-[#FCF6BA] transition-colors font-medium"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-none border border-[#25D366]/50 flex items-center justify-center text-[#25D366] shrink-0 bg-black mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-[#A0A0A0] mb-0.5">WhatsApp Concierge</span>
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline font-medium"
                    >
                      {siteConfig.contact.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direction Buttons */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3">
              <GoldButton
                variant="primary"
                size="md"
                asLink
                href={siteConfig.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full gap-2 text-xs"
              >
                <Navigation className="w-4 h-4" />
                Get Driving Directions (Google Maps)
              </GoldButton>

              <GoldButton
                variant="outline"
                size="md"
                asLink
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-xs"
              >
                Message On WhatsApp
              </GoldButton>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Map Frame */}
            <div className="w-full h-[360px] sm:h-[420px] bg-[#121212] border border-[#BF953F]/40 relative overflow-hidden shadow-2xl">
              <iframe
                title="Rana Jewellers Showroom Location on Google Maps - DHA Lahore"
                src={siteConfig.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute bottom-3 left-3 bg-black/90 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[11px] text-[#FCF6BA]">
                📍 DHA Main Boulevard, Lahore
              </div>
            </div>

            {/* Showroom Photographs Gallery from verified drive assets */}
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-[4/3] bg-black border border-white/10 overflow-hidden">
                <img
                  src="/images/store/showroom-1.jpg"
                  alt="Rana Jewellers Lahore Showroom interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] bg-black border border-white/10 overflow-hidden">
                <img
                  src="/images/store/showroom-2.jpg"
                  alt="Rana Jewellers showcase"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] bg-black border border-white/10 overflow-hidden">
                <img
                  src="/images/store/showroom-3.jpg"
                  alt="Rana Jewellers jewellery display"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Showroom FAQs Accordion */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-[10px] uppercase tracking-widest text-[#BF953F]">Guidance &amp; Concierge</span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mt-1">Frequently Inquired</h3>
          </div>

          <div className="space-y-3">
            {faqsData.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#0A0A0A] border border-white/10 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#BF953F]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-sm sm:text-base text-white">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#BF953F] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#A0A0A0] font-light leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
