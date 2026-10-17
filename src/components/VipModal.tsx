import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Ticket, Send, Shield, Smartphone, Mail } from 'lucide-react';

interface VipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const VipModal: React.FC<VipModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [contactType, setContactType] = useState<'email' | 'whatsapp'>('email');
  const [contactValue, setContactValue] = useState('');
  const [fullName, setFullName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactValue) return;

    const randomTicket = 'AZE-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setIsSubmitted(true);
    onSuccess();

    // Store in localStorage
    const existing = JSON.parse(localStorage.getItem('azeshop_vips') || '[]');
    existing.push({ name: fullName, contact: contactValue, type: contactType, ticket: randomTicket, date: new Date().toISOString() });
    localStorage.setItem('azeshop_vips', JSON.stringify(existing));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 overflow-y-auto">
      <div className="relative w-full max-w-lg bg-slate-950 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(6,182,212,0.35)] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-900 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 text-xs font-semibold border border-cyan-800/60">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>İLK AÇILIŞ HƏDİYYƏSİ</span>
              </div>
              <h3 className="text-2xl font-black text-white">VIP Giriş Bileti Alın</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                AzeShop açılan gün siza xüsusi <strong>20₼ Hədiyyə Kuponu</strong> və ilk sifarişdə pulsuz çatdırılma göndəriləcək.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Adınız və Soyadınız
                </label>
                <input
                  type="text"
                  required
                  placeholder="Məs: Əli Məmmədov"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {/* Contact Switcher */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Xəbərdarlıq üsulunu seçin
                </label>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <button
                    type="button"
                    onClick={() => setContactType('email')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      contactType === 'email'
                        ? 'bg-cyan-500 text-slate-950'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>E-poçt</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setContactType('whatsapp')}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      contactType === 'whatsapp'
                        ? 'bg-emerald-500 text-slate-950'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </button>
                </div>

                <input
                  type={contactType === 'email' ? 'email' : 'tel'}
                  required
                  placeholder={contactType === 'email' ? 'ornek@mail.com' : '+994 50 123 45 67'}
                  value={contactValue}
                  onChange={(e) => setContactValue(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-2 text-[11px] text-slate-400">
                <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Məlumatlarınız tam məxfi saxlanılır, heç bir spama icazə verilmir.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-extrabold text-sm shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>VIP Biletini Təsdiqlə</span>
              </button>
            </form>
          </div>
        ) : (
          /* VIP TICKET GENERATED CONFIRMATION */
          <div className="text-center space-y-6 py-4">
            
            <div className="w-16 h-16 rounded-full bg-cyan-950 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-black text-white">Təbriklər, VIP Biletiniz Aktivleşdi!</h3>
              <p className="text-xs text-slate-300">
                AzeShop komandası açılış günü sizinlə təmasda olacaq.
              </p>
            </div>

            {/* Virtual Ticket Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-2 border-dashed border-cyan-500/60 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-cyan-400 font-mono mb-4 border-b border-slate-800 pb-2">
                <span className="flex items-center gap-1 font-bold">
                  <Ticket className="w-4 h-4" />
                  AZE-VIP PASS
                </span>
                <span>azeshop.online</span>
              </div>

              <div className="text-left space-y-1">
                <span className="text-[10px] text-slate-500 uppercase block">Sahibi</span>
                <p className="text-lg font-extrabold text-white">{fullName || 'VIP İstifadəçi'}</p>
                <p className="text-xs text-cyan-300 font-mono">{contactValue}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[10px] text-slate-500 block">Bilet Nömrəsi</span>
                  <span className="text-sm font-black font-mono text-cyan-400">{ticketId}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block">Kupon Dəyəri</span>
                  <span className="text-sm font-black text-emerald-400">20 ₼ GIFT</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm cursor-pointer"
            >
              Bağla
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
