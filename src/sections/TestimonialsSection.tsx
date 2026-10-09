import React from 'react';
import { testimonialsData, testimonialsConfig } from '../data/testimonials';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  if (!testimonialsConfig.sectionEnabled) return null;

  const verifiedReviews = testimonialsData.filter((t) => t.isVerified);

  if (verifiedReviews.length === 0) return null;

  return (
    <section className="py-20 sm:py-28 bg-[#000000] border-t border-white/5 relative" aria-label="Client Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Patron Commendations"
          title={testimonialsConfig.headline}
          subtitle={testimonialsConfig.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {verifiedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#0C0C0C] border border-[#BF953F]/30 p-8 sm:p-10 flex flex-col justify-between relative shadow-xl"
            >
              <div className="absolute top-6 right-6 text-[#BF953F]/20">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* 5-Star Gold Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FCF6BA] text-[#BF953F]" />
                  ))}
                </div>

                <p className="font-serif italic text-base sm:text-lg text-[#E8E8E8] leading-relaxed">
                  “{review.reviewText}”
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-sm text-white">{review.author}</h4>
                  {review.location && (
                    <span className="text-xs text-[#888888] font-light">{review.location}</span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-[#FCF6BA] bg-[#141414] px-2.5 py-1 border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#BF953F]" />
                  <span>{review.date || 'Verified Patron'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
