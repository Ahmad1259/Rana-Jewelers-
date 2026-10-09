import React from 'react';
import { benefitsData } from '../data/faqs';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ShieldCheck, Sparkles, Gem, Crown } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#BF953F]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#BF953F]" />;
      case 'Gem':
        return <Gem className="w-6 h-6 text-[#BF953F]" />;
      case 'Crown':
      default:
        return <Crown className="w-6 h-6 text-[#BF953F]" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#050505] border-t border-white/5 relative" aria-label="Why Choose Us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="The Rana Standard"
          title="Why Patrons Entrust Us"
          subtitle="Our enduring dedication to integrity, authenticity, and bespoke artistry sets every Rana Jewellers creation apart."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-[#0C0C0C] border border-white/10 hover:border-[#BF953F]/60 p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="w-12 h-12 bg-black border border-[#BF953F]/40 flex items-center justify-center mb-6 group-hover:border-[#FCF6BA] transition-colors">
                  {getIcon(benefit.iconName)}
                </div>
                <h3 className="font-serif text-lg text-white group-hover:text-gold-metallic transition-colors mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs text-[#A0A0A0] font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#BF953F]">
                <span className="tracking-widest uppercase text-[10px]">Purity Guaranteed</span>
                <span>✦</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
