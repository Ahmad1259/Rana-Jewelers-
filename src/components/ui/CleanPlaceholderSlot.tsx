import React from 'react';
import { Sparkles } from 'lucide-react';

interface CleanPlaceholderSlotProps {
  title?: string;
  badge?: string;
  subtitle?: string;
  minHeight?: string;
  onActionClick?: () => void;
  actionText?: string;
}

export const CleanPlaceholderSlot: React.FC<CleanPlaceholderSlotProps> = ({
  title = 'Catalogue Details Pending Approval',
  badge = 'Bespoke Private Showcase',
  subtitle = 'Photography, karat specifications, and verified diamond parameters are being uploaded to the private atelier.',
  minHeight = 'min-h-[260px]',
  onActionClick,
  actionText = 'Inquire via Concierge',
}) => {
  return (
    <div
      className={`relative w-full ${minHeight} bg-[#0A0A0A] border border-[#BF953F]/30 flex flex-col items-center justify-center p-8 text-center overflow-hidden group hover:border-[#BF953F]/60 transition-colors duration-500`}
    >
      {/* Decorative Gold Corner Borders */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-[#BF953F]/60" />
      <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-[#BF953F]/60" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-[#BF953F]/60" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-[#BF953F]/60" />

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,149,63,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Icon Emblem */}
      <div className="w-12 h-12 rounded-full border border-[#BF953F]/40 flex items-center justify-center text-[#BF953F] mb-4 bg-black/60 shadow-gold-sm">
        <Sparkles className="w-5 h-5 text-[#FCF6BA]" />
      </div>

      {/* Badge */}
      <span className="text-[10px] uppercase tracking-[0.25em] text-[#BF953F] font-medium mb-2">
        {badge}
      </span>

      {/* Title */}
      <h4 className="font-serif text-lg sm:text-xl text-white tracking-wide max-w-md">
        {title}
      </h4>

      {/* Subtitle */}
      <p className="text-xs text-[#8A8A8A] font-light max-w-lg mt-2 leading-relaxed">
        {subtitle}
      </p>

      {/* Optional action button */}
      {onActionClick && (
        <button
          type="button"
          onClick={onActionClick}
          className="mt-5 px-5 py-2.5 bg-black border border-[#BF953F]/60 hover:border-[#FCF6BA] text-[#FCF6BA] text-xs uppercase tracking-widest transition-colors font-medium"
        >
          {actionText}
        </button>
      )}
    </div>
  );
};
