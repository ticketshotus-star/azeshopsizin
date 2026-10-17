import React from 'react';
import { AzeShopLogo } from './components/AzeShopLogo';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Center Container: Logo & Text Only */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-8 max-w-lg mx-auto">
        {/* AzeShop Neon Logo */}
        <div className="transform hover:scale-105 transition-transform duration-500 cursor-default">
          <AzeShopLogo size="hero" />
        </div>

        {/* Text requested by user */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.4)]">
          AzeShop Tezliklə Sizinlə!
        </h1>
      </div>
    </div>
  );
}
