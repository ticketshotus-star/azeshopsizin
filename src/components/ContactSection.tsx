import React, { useState } from 'react';
import { MessageSquare, Send, CheckCircle2, Store, Phone, Mail, MapPin, Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [storeName, setStoreName] = useState('');
  const [storeCategory, setStoreCategory] = useState('Geyim & Dəb');
  const [sellerPhone, setSellerPhone] = useState('');
  const [submittedSeller, setSubmittedSeller] = useState(false);

  const handleSellerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!sellerPhone) return;
    setSubmittedSeller(true);
  };

  return (
    <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: FAQ & Direct Social Links */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              TEZ-TEZ VERİLƏN SUALLAR
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Sualınız Var? Cavablandırırıq.
            </h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <h4 className="text-base font-bold text-white">AzeShop tam olaraq nə vaxt fəaliyyətə başlayacaq?</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Platformamız 2026-cı ilin Q4 mövsümündə rəsmi olaraq istifadəyə veriləcək. VIP siyahıdakı istifadəçilər açılışdan 3 gün əvvəl erkən daxil olub alış-veriş edə biləcəklər.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <h4 className="text-base font-bold text-white">Çatdırılma hansı bölgələri əhatə edəcək?</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Sürətli kuryer xidmətimiz Bakı, Sumqayıt və Xırdalan ərazisini əhatə edir. Rayonlara isə poçt və ekspress karqo xidməti vasitəsilə 24-48 saat ərzində çatdırılacaq.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
              <h4 className="text-base font-bold text-white">Platformada necə satıcı (magaza) ola bilərəm?</h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Aşağıdakı "Satıcı Müraciəti" formunu dolduraraq mağazanızı qeydiyyatdan keçirə bilərsiniz. Satıcı komisiyalarımız çox əlverişlidir.
              </p>
            </div>
          </div>

          {/* Social Contact Links */}
          <div className="pt-4 space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Bizimlə Əlaqə & Sosial Şəbəkələr</span>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/994501234567"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 text-slate-200 hover:text-emerald-400 text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Dəstək</span>
              </a>

              <a
                href="https://instagram.com/azeshop.online"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500 text-slate-200 hover:text-pink-400 text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>@azeshop.online</span>
              </a>

              <a
                href="mailto:info@azeshop.online"
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-200 hover:text-cyan-400 text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>info@azeshop.online</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Seller Registration Form */}
        <div className="lg:col-span-5">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-cyan-800/40 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center">
                <Store className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">AzeShop-da Satıcı Olun</h3>
                <p className="text-xs text-slate-400">Məhsullarınızı minlərlə alıcıya təqdim edin</p>
              </div>
            </div>

            {!submittedSeller ? (
              <form onSubmit={handleSellerSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Mağaza / Brend Adı
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Məs: Baku Tech Store"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Əsas Məhsul Kateqoriyası
                  </label>
                  <select
                    value={storeCategory}
                    onChange={(e) => setStoreCategory(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Geyim & Dəb">Geyim & Dəb</option>
                    <option value="Elektronika">Elektronika & Aksessuar</option>
                    <option value="Kosmetika">Kosmetika & Parfümeriya</option>
                    <option value="Ev & Mətbəx">Ev & Mətbəx</option>
                    <option value="Digər">Digər</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Əlaqə Nömrəniz (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+994 50 123 45 67"
                    value={sellerPhone}
                    onChange={(e) => setSellerPhone(e.target.value)}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Satıcı Müraciətini Göndər</span>
                </button>
              </form>
            ) : (
              <div className="p-6 rounded-2xl bg-cyan-950/60 border border-cyan-800 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white">Müraciətiniz Qəbul Olundu!</h4>
                <p className="text-xs text-slate-300">
                  AzeShop satıcı mərkəzinin mütəxəssisləri {sellerPhone} nömrənizlə 24 saat ərzində əlaqə saxlayacaqlar.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>

    </section>
  );
};
