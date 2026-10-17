import React, { useState, useEffect } from 'react';
import { AzeShopLogo } from './AzeShopLogo';
import { Sparkles, ArrowRight, CheckCircle2, Clock, Zap, Maximize2, X, BellRing } from 'lucide-react';

interface HeroSectionProps {
  onOpenVipModal: () => void;
  subscriberCount: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenVipModal, subscriberCount }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 28,
    hours: 14,
    minutes: 36,
    seconds: 45,
  });

  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);

  // Live countdown ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient Cyber Grid & Glow Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Hero CTA */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Status Kicker */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.2)]">
              <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>RƏSMİ ELAN · azeshop.online</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] text-wrap:balance">
                AzeShop <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Tezliklə Sizinlə.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Azərbaycanın ən müasir, yüksək keyfiyyətli və ultra-sürətli onlayn alış-veriş ünvanı hazırlanır. İlk xüsusi endirimlərdən və VIP üstünlüklərdən xəbərdar olun.
              </p>
            </div>

            {/* Countdown Box */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-cyan-800/40 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">
                <Clock className="w-4 h-4" />
                <span>Rəsmi Açılışa Qalan Vaxt</span>
              </div>
              
              <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
                <div className="bg-slate-950/80 border border-cyan-900/50 rounded-xl p-3">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                    {timeLeft.days.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Gün</span>
                </div>
                <div className="bg-slate-950/80 border border-cyan-900/50 rounded-xl p-3">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Saat</span>
                </div>
                <div className="bg-slate-950/80 border border-cyan-900/50 rounded-xl p-3">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Dəqiqə</span>
                </div>
                <div className="bg-slate-950/80 border border-cyan-900/50 rounded-xl p-3">
                  <span className="block text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono tabular-nums">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Saniyə</span>
                </div>
              </div>
            </div>

            {/* CTAs and Subscriber counter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenVipModal}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-extrabold text-base shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <BellRing className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform" />
                <span>VIP Giriş Hədiyyəsi Al</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#deployment"
                className="px-6 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-base transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Vercel / GitHub Bələdçisi</span>
              </a>
            </div>

            {/* Trust highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>İlk 500 İstifadəçiyə Özel Endirim</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Baku Daxilində Ekspress Çatdırılma</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{subscriberCount} nəfər artıq VIP siyahıdadır</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Image showcase with Logo */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* Interactive Logo Card */}
            <div className="relative group p-6 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-cyan-800/50 shadow-[0_0_50px_rgba(6,182,212,0.25)] hover:border-cyan-400 transition-all duration-500 flex flex-col items-center">
              
              {/* Top Card Badge */}
              <div className="w-full flex items-center justify-between text-xs text-cyan-400 font-mono mb-4 px-2">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
                  PREVIEW LOGO
                </span>
                <button
                  onClick={() => setIsZoomModalOpen(true)}
                  className="hover:text-white transition-colors flex items-center gap-1 text-[11px] bg-slate-800/80 px-2 py-1 rounded-md border border-slate-700 cursor-pointer"
                  title="Yaxınlaşdır"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Böyüt</span>
                </button>
              </div>

              {/* Central Glowing Logo */}
              <div onClick={() => setIsZoomModalOpen(true)} className="py-4">
                <AzeShopLogo size="hero" showSubtext interactive />
              </div>

              {/* Subtitle card details */}
              <div className="mt-6 w-full text-center space-y-2 pt-4 border-t border-cyan-950">
                <p className="text-white font-bold text-lg">azeshop.online</p>
                <p className="text-xs text-slate-400">
                  Rəsmi Qrafik Brend İdentikliyi & Brend Loqosu
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Image Zoom Modal */}
      {isZoomModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4">
          <div className="relative max-w-2xl w-full bg-slate-950 border border-cyan-500/40 rounded-3xl p-8 flex flex-col items-center shadow-[0_0_80px_rgba(6,182,212,0.4)]">
            <button
              onClick={() => setIsZoomModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>AzeShop Rəsmi Loqo Təsviri</span>
            </h3>

            <div className="py-6">
              <AzeShopLogo size="hero" showSubtext />
            </div>

            <p className="text-sm text-slate-400 text-center mt-4 max-w-md">
              AzeShop Onlayn Mağazasının rəsmi göy neon çərçivəli, alış-veriş arabalı və estetik kiber üslublu loqo dizaynı.
            </p>

            <button
              onClick={() => setIsZoomModalOpen(false)}
              className="mt-6 px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm cursor-pointer"
            >
              Bağla
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
