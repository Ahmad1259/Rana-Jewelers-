import React from 'react';
import { cn } from '../../lib/utils';

export interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export const GoldButton: React.FC<GoldButtonProps> = ({
  variant = 'primary',
  size = 'md',
  asLink = false,
  href,
  target,
  rel,
  className,
  children,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium tracking-widest uppercase transition-all duration-300 rounded-none focus:outline-none focus:ring-2 focus:ring-[#BF953F] focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none text-xs";

  const sizeClasses = {
    sm: "px-4 py-2.5 min-h-[44px]",
    md: "px-6 py-3.5 min-h-[48px]",
    lg: "px-8 py-4 min-h-[52px] text-sm",
  }[size];

  const variantClasses = {
    primary: "bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black font-semibold shadow-gold-sm hover:shadow-gold-md hover:brightness-110 active:scale-[0.98]",
    outline: "border border-[#BF953F]/60 text-[#FCF6BA] bg-black/40 hover:bg-[#BF953F]/10 hover:border-[#FCF6BA] active:scale-[0.98]",
    ghost: "text-[#E8E8E8] hover:text-[#FCF6BA] hover:bg-white/5 active:scale-[0.98]",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20ba59] font-semibold active:scale-[0.98]",
  }[variant];

  const combinedClasses = cn(baseClasses, sizeClasses, variantClasses, className);

  if (asLink && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
