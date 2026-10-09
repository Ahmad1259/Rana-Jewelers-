import React from 'react';
import { GoldButton } from '../components/ui/GoldButton';
import { Sparkles, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface BridalSectionProps {
  onOpenAppointmentModal: (service?: string) => void;
}

export const BridalSection: React.FC<BridalSectionProps> = ({ onOpenAppointmentModal }) => {
  return (
    <section id="bridal" className="relative py-24 sm:py-32 bg-[#080808] border-y border-[#BF953F]/30 overflow-hidden" aria-label="Bridal Haute Joaillerie">
      {/* Editorial Split Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2000&auto=format&fit=crop"
          alt="Royal Pakistani bridal jewellery set"
          className="w-full h-full object-cover object-right md:object-center filter brightness-[0.25] contrast-[1.1]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-[#BF953F]" />
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#FCF6BA]">
              The Royal Bridal Trousseau
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight mb-6">
            Bridal Masterpieces Sculpted for Generations
          </h2>

          <p className="text-sm sm:text-base text-[#D0D0D0] font-light leading-relaxed mb-8">
            A wedding is a once-in-a-lifetime symphony. At Rana Jewellers, our bridal couture marries the ceremonial grandeur of Mughal heritage with the modern bride’s discerning taste. Each bridal necklace, matha patti, jhumar, and kangan is individually curated to harmonize seamlessly with your wedding ensemble.
          </p>

          {/* Bridal Service Highlights */}
          <div className="space-y-3 mb-10">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#BF953F] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-white">Private Bridal Suite Consultations</h4>
                <p className="text-xs text-[#A0A0A0] font-light">Experience uninterrupted viewings with family at our dedicated DHA Lahore boutique.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#BF953F] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-white">Custom Trousseau Harmonization</h4>
                <p className="text-xs text-[#A0A0A0] font-light">Bring your bridal couture swatches for custom gemstone matching and neckline balance.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#BF953F] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-white">Verified 21K &amp; 22K Purity Assurance</h4>
                <p className="text-xs text-[#A0A0A0] font-light">Complete transparency on gold weight, net bullion, and stone weight certifications.</p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <GoldButton
              variant="primary"
              size="lg"
              onClick={() => onOpenAppointmentModal('Bridal Consultation')}
              className="w-full sm:w-auto text-xs"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Book Private Bridal Viewing
            </GoldButton>

            <GoldButton
              variant="outline"
              size="lg"
              asLink
              href="#visit"
              className="w-full sm:w-auto text-xs"
            >
              <HeartHandshake className="w-4 h-4 mr-2" />
              Visit Our DHA Showroom
            </GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
};
