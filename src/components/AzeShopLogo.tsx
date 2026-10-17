import React from 'react';

interface AzeShopLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showSubtext?: boolean;
  className?: string;
  interactive?: boolean;
}

export const AzeShopLogo: React.FC<AzeShopLogoProps> = ({
  size = 'md',
  showSubtext = false,
  className = '',
  interactive = false,
}) => {
  const dimensions = {
    sm: 'w-10 h-10',
    md: 'w-20 h-20',
    lg: 'w-36 h-36',
    xl: 'w-56 h-56',
    hero: 'w-72 h-72 sm:w-96 sm:h-96',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-xl',
    xl: 'text-3xl',
    hero: 'text-4xl sm:text-5xl',
  };

  return (
    <div className={`relative inline-flex flex-col items-center justify-center select-none ${className}`}>
      {/* Glow Backdrop Effect */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl animate-pulse -z-10" />

      {/* Main Container Badge matching the uploaded image */}
      <div
        className={`${dimensions[size]} relative rounded-full bg-black border-2 border-cyan-400 p-4 shadow-[0_0_35px_rgba(6,182,212,0.45)] flex flex-col items-center justify-center overflow-hidden transition-all duration-300 ${
          interactive ? 'hover:scale-105 hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] cursor-pointer' : ''
        }`}
      >
        {/* Orbital Swoosh Graphic - Top */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Ring Accent */}
          <circle cx="100" cy="100" r="92" stroke="#00d8ff" strokeWidth="3" className="opacity-90" />
          
          {/* Top Orbital Swoosh */}
          <path
            d="M 30,105 C 50,60 150,50 180,90 C 150,65 60,75 30,105 Z"
            fill="url(#swooshGradientTop)"
            className="opacity-90"
          />

          {/* Bottom Orbital Swoosh */}
          <path
            d="M 170,95 C 150,140 50,150 20,110 C 50,135 140,125 170,95 Z"
            fill="url(#swooshGradientBottom)"
            className="opacity-90"
          />

          <defs>
            <linearGradient id="swooshGradientTop" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0052ff" />
              <stop offset="50%" stopColor="#00c8ff" />
              <stop offset="100%" stopColor="#0052ff" />
            </linearGradient>
            <linearGradient id="swooshGradientBottom" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d8ff" />
              <stop offset="100%" stopColor="#0040ff" />
            </linearGradient>
          </defs>
        </svg>

        {/* Top Cart Icon */}
        <div className="relative z-10 mb-1 flex items-center justify-center">
          <svg
            className={`${size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-7 h-7' : size === 'lg' ? 'w-12 h-12' : 'w-16 h-16 sm:w-20 sm:h-20'} text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.9)]`}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z" />
          </svg>
        </div>

        {/* Main Typography Text: azeshop.online */}
        <div className="relative z-10 flex items-center tracking-tight font-black font-sans text-center">
          <span className={`text-white italic ${textSizes[size]} drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]`}>
            azeshop
          </span>
          <span className={`text-cyan-400 italic ${textSizes[size]} drop-shadow-[0_0_12px_rgba(6,182,212,0.9)]`}>
            .online
          </span>
        </div>
      </div>

      {showSubtext && (
        <div className="mt-3 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            Tezliklə Sizinlə
          </span>
        </div>
      )}
    </div>
  );
};
