import React, { useEffect, useState } from 'react';

interface LuxuryPreloaderProps {
  onComplete: () => void;
}

export const LuxuryPreloader: React.FC<LuxuryPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Elegant progression timer
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onComplete, 800); // Allow fade-out transition
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] transition-opacity duration-700 ease-in-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-label="Loading Rana Jewellers"
    >
      {/* Subtle radial ambient gold glow */}
      <div className="absolute w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(191,149,63,0.15)_0%,transparent_70%)] pointer-events-none" />

      {/* Center Brand Emblem & Rotating Luxury Ring */}
      <div className="relative flex items-center justify-center mb-8">
        {/* Outer Rotating Polished Gold Ring */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-[#BF953F]/30 border-t-[#FCF6BA] border-r-[#B38728] animate-spin [animation-duration:3.5s]" />

        {/* Inner Counter-Rotating Delicate Ring */}
        <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border border-white/10 border-b-[#FCF6BA]/60 animate-spin [animation-duration:5s] [animation-direction:reverse]" />

        {/* Center Logo with Breathing Gold Light */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <img
            src="/images/brand/rana-jewellers-logo.png"
            alt="Rana Jewellers Emblem"
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain animate-pulse filter drop-shadow-[0_0_20px_rgba(191,149,63,0.5)]"
          />
        </div>
      </div>

      {/* Brand Name Typography */}
      <div className="text-center space-y-2 z-10 px-4">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.25em] uppercase text-gold-metallic font-medium">
          Rana Jewellers
        </h2>
        <p className="text-[10px] sm:text-xs tracking-[0.35em] uppercase text-[#A0A0A0] font-light">
          Haute Joaillerie &bull; DHA Lahore
        </p>
      </div>

      {/* Minimalist Gold Progress Bar */}
      <div className="w-48 sm:w-64 h-[1px] bg-white/10 mt-8 relative overflow-hidden z-10">
        <div
          className="h-full bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] transition-all duration-200 ease-out shadow-[0_0_10px_#FCF6BA]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress percentage */}
      <span className="text-[10px] tracking-widest text-[#B38728] font-mono mt-3 z-10">
        {progress}%
      </span>
    </div>
  );
};
