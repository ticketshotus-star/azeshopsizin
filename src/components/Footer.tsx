import React from 'react';
import { ShoppingBag, ArrowUp, Code2, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-black border border-cyan-400 flex items-center justify-center text-cyan-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                AzeShop<span className="text-cyan-400 font-normal text-sm">.online</span>
              </span>
              <span className="text-xs text-slate-500 block">
                Azərbaycanın Onlayn Sürətli Mağazası
              </span>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex items-center gap-6 text-xs sm:text-sm text-slate-400 font-medium">
            <a href="#top" className="hover:text-cyan-400 transition-colors">Ana Səhifə</a>
            <a href="#haqqinda" className="hover:text-cyan-400 transition-colors">AzeShop Nədir?</a>
            <a href="#deployment" className="hover:text-cyan-400 transition-colors">Vercel & GitHub</a>
            <a href="#faq" className="hover:text-cyan-400 transition-colors">Suallar</a>
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Yuxarı Qayıt"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom copyright & tech stack badge */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AzeShop.online · Bütün hüquqlar qorunur.</p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>azeshop.online</span>
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Code2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Vercel & GitHub Ready</span>
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
