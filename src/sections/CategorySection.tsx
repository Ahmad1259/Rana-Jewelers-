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
    <section id="categories" className="py-20 sm:py-28 bg-[#050505] relative overflow-hidden" aria-label="Product Categories">
      {/* Decorative Gold Radial Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(191,149,63,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Curated Portfolios"
          title="Explore By Category"
          subtitle="From everyday diamond solitaires to regal ceremonial bridal gold, explore our specialized jewellery collections."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {availableCategories.map((category, idx) => {
            // First item (Gold) or third item (Bridal) can be styled with subtle prominence
            const isFeaturedCard = idx === 0 || idx === 2;

            return (
              <a
                key={category.id}
                href="#collections"
                onClick={() => onSelectCategory && onSelectCategory(category.slug)}
                className={`group relative overflow-hidden bg-[#0F0F0F] border border-white/10 hover:border-[#BF953F]/60 transition-all duration-500 flex flex-col justify-end ${
                  isFeaturedCard ? 'sm:col-span-2 lg:col-span-1 xl:col-span-2 min-h-[360px]' : 'min-h-[320px]'
                }`}
              >
                {/* Background Image with Zoom on Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.55] group-hover:brightness-[0.4]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>

                {/* Top Badge */}
                {category.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[10px] tracking-widest uppercase px-2.5 py-1 bg-black/80 backdrop-blur-sm border border-[#BF953F]/40 text-[#FCF6BA]">
                      {category.badge}
                    </span>
                  </div>
                )}

                {/* Hover Arrow Icon */}
                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-[#BF953F] text-black flex items-center justify-center transform translate-y-1 group-hover:translate-y-0 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Content Info */}
                <div className="relative z-10 p-6 flex flex-col justify-end">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#BF953F] font-medium mb-1">
                    {category.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl text-white group-hover:text-gold-metallic transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-[#A0A0A0] mt-2 line-clamp-2 font-light opacity-90 group-hover:opacity-100 transition-opacity">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-[#FCF6BA] font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
