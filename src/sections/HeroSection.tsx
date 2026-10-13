import React from 'react';
import { siteConfig } from '../data/site';
import { GoldButton } from '../components/ui/GoldButton';
import { Sparkles, MapPin, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenAppointmentModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100svh-56px)] sm:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#000000] border-b border-[#BF953F]/20"
      aria-label="Hero Section"
    >
      {/* Background Cinematic Visual with dark luxury overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop"
          alt="Exquisite gold and diamond jewellery masterwork"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.28] contrast-[1.15]"
          loading="eager"
        />
        {/* Radial Dark & Gold Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,149,63,0.12)_0%,transparent_70%)]" />
      </div>

      {/* Decorative Gold Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-15">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-2 md:grid-cols-4 border-x border-[#BF953F]/30">
          <div className="border-r border-[#BF953F]/20" />
          <div className="hidden md:block border-r border-[#BF953F]/20" />
          <div className="hidden md:block border-r border-[#BF953F]/20" />
          <div />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center flex flex-col items-center">
        {/* Prestigious Crest Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#BF953F]/40 bg-black/70 backdrop-blur-md mb-5 sm:mb-8 shadow-gold-sm max-w-[95%]">
          <Sparkles className="w-3.5 h-3.5 text-[#BF953F] shrink-0" aria-hidden="true" />
          <span className="text-[9px] xs:text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#FCF6BA] font-medium truncate">
            Bespoke Gold &amp; Diamond Masterpieces
          </span>
          <span className="w-1.5 h-1.5 rotate-45 bg-[#BF953F] shrink-0" />
        </div>

        {/* Brand Name Presentation */}
        <h1 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-[0.06em] sm:tracking-[0.08em] uppercase text-white mb-3 sm:mb-4 leading-[1.12]">
          <span className="block text-gold-metallic drop-shadow-md">
            Rana Jewellers
          </span>
        </h1>

        {/* Location & Heritage Tagline */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#E8E8E8]/90 font-light mb-4 sm:mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#BF953F]" />
          <span>Main Boulevard, DHA Lahore</span>
        </div>

        {/* Editorial Subtitle */}
        <p className="max-w-2xl text-xs sm:text-base md:text-lg text-[#C0C0C0] font-light leading-relaxed mb-8 sm:mb-10 px-2">
          {siteConfig.shortDescription}
        </p>

        {/* Mobile-Optimized Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto px-2">
          <GoldButton
            variant="primary"
            size="lg"
            asLink
            href="#collections"
            className="w-full sm:w-auto min-w-[220px] min-h-[48px]"
          >
            Explore Collections
          </GoldButton>

          <GoldButton
            variant="outline"
            size="lg"
            onClick={onOpenAppointmentModal}
            className="w-full sm:w-auto min-w-[220px] min-h-[48px]"
          >
            Book Private Viewing
          </GoldButton>
        </div>

        {/* Trust Pillars Grid */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-[#BF953F]/20 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-8 w-full text-center">
          <div className="p-2 sm:p-0">
            <span className="block font-serif text-base sm:text-xl text-[#FCF6BA]">21K &amp; 22K</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A8A8A]">Hallmarked Gold</span>
          </div>
          <div className="p-2 sm:p-0">
            <span className="block font-serif text-base sm:text-xl text-[#FCF6BA]">Certified</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A8A8A]">Solitaires</span>
          </div>
          <div className="p-2 sm:p-0">
            <span className="block font-serif text-base sm:text-xl text-[#FCF6BA]">Haute Bridal</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A8A8A]">Custom Sets</span>
          </div>
          <div className="p-2 sm:p-0">
            <span className="block font-serif text-base sm:text-xl text-[#FCF6BA]">DHA Lahore</span>
            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8A8A8A]">Boutique</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#categories"
          className="mt-8 sm:mt-10 inline-flex flex-col items-center text-[#8A8A8A] hover:text-[#FCF6BA] transition-colors group p-2"
          aria-label="Scroll to Categories"
        >
          <span className="text-[9px] uppercase tracking-widest mb-1 group-hover:tracking-[0.3em] transition-all">Discover</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#BF953F]" />
        </a>
      </div>
    </section>
  );
};
