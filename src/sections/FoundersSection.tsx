import React from 'react';
import { foundersData, foundersConfig } from '../data/founders';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Hammer } from 'lucide-react';

export const FoundersSection: React.FC = () => {
  if (!foundersConfig.sectionEnabled) return null;

  // Filter only verified published founders
  const publishedFounders = foundersData.filter((f) => f.isPublished);

  // If no published founders yet, render the dignified Master Karigars Atelier statement
  if (publishedFounders.length === 0) {
    return (
      <section id="craftsmanship" className="py-20 sm:py-24 bg-[#080808] border-t border-white/5 relative" aria-label="Master Craftsmen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="The Hands Behind The Gold"
            title="Generations of Master Karigars"
            subtitle="At Rana Jewellers, our heritage is shaped by the master goldsmiths and stone-setters whose lineage of artisan knowledge breathes life into every jewel."
          />

          <div className="p-8 sm:p-12 bg-[#0E0E0E] border border-[#BF953F]/30 relative shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#0E0E0E] border border-[#BF953F] flex items-center justify-center text-[#BF953F]">
              <Hammer className="w-5 h-5" />
            </div>

            <p className="font-serif italic text-lg sm:text-xl text-[#FCF6BA] max-w-2xl mx-auto leading-relaxed mt-2">
              “True luxury is not merely made; it is sculpted with honour, patience, and devotion to the craft.”
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-[#BF953F]/40" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#A0A0A0]">
                Rana Jewellers Atelier &bull; DHA Lahore
              </span>
              <span className="w-8 h-[1px] bg-[#BF953F]/40" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // When published founders are provided
  return (
    <section id="founders" className="py-20 sm:py-28 bg-[#080808] border-t border-white/5 relative" aria-label="Founders">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Leadership & Vision"
          title="The Founders"
          subtitle="Guided by an uncompromising pursuit of perfection in haute joaillerie."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {publishedFounders.map((founder) => (
            <div
              key={founder.id}
              className="bg-[#0E0E0E] border border-[#BF953F]/40 p-8 flex flex-col justify-between relative shadow-xl"
            >
              <div>
                {founder.image && (
                  <div className="aspect-square w-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#BF953F]">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h3 className="font-serif text-2xl text-white text-center">{founder.name}</h3>
                <span className="block text-xs uppercase tracking-widest text-[#BF953F] text-center mt-1">
                  {founder.title}
                </span>
                <p className="text-xs text-[#A0A0A0] font-light mt-4 leading-relaxed text-center">
                  {founder.bio}
                </p>
              </div>

              {founder.quote && (
                <blockquote className="mt-6 pt-4 border-t border-white/5 text-xs italic text-[#FCF6BA] text-center">
                  “{founder.quote}”
                </blockquote>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
