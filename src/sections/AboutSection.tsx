import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#030303] relative overflow-hidden" aria-label="About Rana Jewellers">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Narrative */}
          <div>
            <SectionHeader
              align="left"
              badge="Atelier Heritage"
              title="A Legacy of Precision & Pure Gold"
              subtitle="Sculpting heirloom jewellery with uncompromising dedication to authentic karigari and gold purity."
              className="mb-8"
            />

            <div className="space-y-4 text-sm sm:text-base text-[#B0B0B0] font-light leading-relaxed">
              <p>
                Nestled on the prestigious <strong className="text-white font-medium">Main Boulevard in DHA Lahore</strong>, Rana Jewellers has earned its distinction through an unyielding commitment to excellence, artistic integrity, and absolute purity.
              </p>
              <p>
                In a world of mass-manufactured jewellery, our workshop preserves the time-honoured techniques of traditional Pakistani craftsmanship: intricate hand-filigree, royal polki setting, and precision diamond pave. Every creation begins with certified bullion, sculpted under the watchful eyes of master goldsmiths.
              </p>
              <p>
                Whether welcoming a bride embarking on her new journey or a collector commissioning a bespoke diamond ring, we provide a warm, transparent, and private luxury experience.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-none border border-[#BF953F]/40 flex items-center justify-center text-[#BF953F] shrink-0 bg-[#0E0E0E]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Uncompromised Karatage</h4>
                  <p className="text-xs text-[#888888] font-light mt-0.5">Every gram is verified with hallmark precision and full weight transparency.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-none border border-[#BF953F]/40 flex items-center justify-center text-[#BF953F] shrink-0 bg-[#0E0E0E]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white">Bespoke Atelier</h4>
                  <p className="text-xs text-[#888888] font-light mt-0.5">Custom sketches transformed into 3D waxes and finished gold masterworks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase using Real Store & Craftsmanship Imagery */}
          <div className="relative">
            {/* Main Visual */}
            <div className="relative z-10 aspect-[4/5] bg-[#0E0E0E] border border-[#BF953F]/40 overflow-hidden shadow-2xl">
              <img
                src="/images/store/showroom-2.jpg"
                alt="Rana Jewellers DHA Lahore Showroom"
                className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1531995811006-35cb42e1a022?q=80&w=1000&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/80 backdrop-blur-md border border-[#BF953F]/40 text-[#FCF6BA] text-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#BF953F]" />
                  <span>Flagship Boutique • DHA Lahore</span>
                </div>
              </div>
            </div>

            {/* Overlapping Secondary Image */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 z-20 w-3/5 aspect-[4/3] bg-black border-2 border-[#BF953F] shadow-2xl overflow-hidden">
              <img
                src="/images/store/showroom-1.jpg"
                alt="Rana Jewellers Interior"
                className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1611591475879-11f8e1785501?q=80&w=600&auto=format&fit=crop';
                }}
              />
            </div>

            {/* Decorative Gold Border Frame Accent */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#BF953F]/20 pointer-events-none z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};
