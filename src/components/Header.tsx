import React from 'react';
import { ShoppingBag, Rocket, ShieldCheck, HelpCircle, Code2 } from 'lucide-react';

interface HeaderProps {
  onOpenVipModal: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenVipModal, onNavigate }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    onNavigate(sectionId);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-4 sm:px-6 py-3.5">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          onClick={(e) => handleClick(e, 'top')}
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-8 h-8 rounded-full bg-black border border-cyan-400 flex items-center justify-center text-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-all">
            <ShoppingBag className="w-4 h-4" />
          </div>
          <span>
            AzeShop<span className="text-cyan-400 font-normal text-sm ml-1">.online</span>
          </span>
        </a>

        {/* Zone 2: 4 Clean Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <a
            href="#haqqinda"
            onClick={(e) => handleClick(e, 'haqqinda')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-cyan-500" />
            <span>Niyə AzeShop?</span>
          </a>
          <a
            href="#kateqoriyalar"
            onClick={(e) => handleClick(e, 'kateqoriyalar')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <ShoppingBag className="w-4 h-4 text-cyan-500" />
            <span>Kateqoriyalar</span>
          </a>
          <a
            href="#deployment"
            onClick={(e) => handleClick(e, 'deployment')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">GitHub & Vercel</span>
          </a>
          <a
            href="#faq"
            onClick={(e) => handleClick(e, 'faq')}
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <HelpCircle className="w-4 h-4 text-cyan-500" />
            <span>Suallar</span>
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenVipModal}
            className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Rocket className="w-4 h-4" />
            <span>VIP Bildiriş Alın</span>
          </button>
        </div>
      </div>
    </header>
  );
};
