import React from 'react';
import { categoriesData } from '../data/categories';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ArrowUpRight } from 'lucide-react';

interface CategorySectionProps {
  onSelectCategory?: (slug: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ onSelectCategory }) => {
  const availableCategories = categoriesData.filter((c) => c.isAvailable);

  return (
    <section id="categories" className="py-14 sm:py-24 bg-[#050505] relative overflow-hidden" aria-label="Product Categories">
      {/* Decorative Gold Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-[radial-gradient(circle,rgba(191,149,63,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Curated Portfolios"
          title="Explore By Category"
          subtitle="From everyday diamond solitaires to regal ceremonial bridal gold, explore our specialized jewellery collections."
        />

        {/* Categories Grid - Mobile First */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {availableCategories.map((category, idx) => {
            const isFeaturedCard = idx === 0 || idx === 2;

            return (
              <a
                key={category.id}
                href="#collections"
                onClick={() => onSelectCategory && onSelectCategory(category.slug)}
                className={`group relative overflow-hidden bg-[#0F0F0F] border border-white/10 hover:border-[#BF953F]/60 active:border-[#BF953F] transition-all duration-300 flex flex-col justify-end ${
                  isFeaturedCard ? 'sm:col-span-2 lg:col-span-1 xl:col-span-2 min-h-[280px] sm:min-h-[360px]' : 'min-h-[260px] sm:min-h-[320px]'
                }`}
              >
                {/* Background Image with Zoom on Hover/Touch */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.5] sm:brightness-[0.55]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Top Badge */}
                {category.badge && (
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
                    <span className="text-[9px] sm:text-[10px] tracking-widest uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 bg-black/85 backdrop-blur-sm border border-[#BF953F]/40 text-[#FCF6BA]">
                      {category.badge}
                    </span>
                  </div>
                )}

                {/* Arrow Icon: Always visible on mobile, elevated on hover */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#BF953F]/90 text-black flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
                  </div>
                </div>

                {/* Bottom Content Info */}
                <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-end">
                  <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#BF953F] font-medium mb-1">
                    {category.subtitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-gold-metallic transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#B0B0B0] mt-1.5 sm:mt-2 line-clamp-2 font-light">
                    {category.description}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-[#FCF6BA] font-medium tracking-wider uppercase">
                    <span>View Designs</span>
                    <span className="text-xs">→</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
