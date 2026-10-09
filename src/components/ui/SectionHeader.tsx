import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#BF953F]" />
          <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-[#BF953F]">
            {badge}
          </span>
          <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#BF953F]" />
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-wide text-white mb-4">
        {title}
      </h2>

      {/* Decorative luxury divider */}
      <div className={cn(
        "flex items-center gap-3 my-4",
        align === 'center' ? 'justify-center' : 'justify-start'
      )}>
        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent via-[#BF953F] to-[#FCF6BA]" />
        <span className="w-1.5 h-1.5 rotate-45 border border-[#BF953F] bg-[#FCF6BA]" />
        <span className="w-12 h-[1px] bg-gradient-to-l from-transparent via-[#BF953F] to-[#FCF6BA]" />
      </div>

      {subtitle && (
        <p className="text-sm sm:text-base text-[#A0A0A0] font-light leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
