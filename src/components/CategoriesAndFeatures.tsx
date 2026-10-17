import React, { useState } from 'react';
import { Smartphone, Shirt, Home, Sparkles, Watch, Truck, ShieldCheck, CreditCard, Headphones, Search, ArrowUpRight } from 'lucide-react';

export const CategoriesAndFeatures: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'Bütün Kateqoriyalar', icon: Sparkles },
    { id: 'elektronika', name: 'Elektronika & Qadcet', icon: Smartphone },
    { id: 'deb', name: 'Dəb & Stil', icon: Shirt },
    { id: 'ev', name: 'Ev & Yaşam', icon: Home },
    { id: 'kosmetika', name: 'Kosmetika & Ətir', icon: Sparkles },
    { id: 'aksessuar', name: 'Aksessuarlar', icon: Watch },
  ];

  const sampleProducts = [
    {
      id: 1,
      title: 'Wireless Cyber Pro Headphones',
      category: 'elektronika',
      price: '189 ₼',
      tag: 'VIP Eksklüziv',
      imageDesc: 'Ultra-səslənmə və aktiv kənar küy ləğvi (ANC)',
    },
    {
      id: 2,
      title: 'AzeShop Premium Minimal Hoodie',
      category: 'deb',
      price: '65 ₼',
      tag: 'Bestseller',
      imageDesc: '100% Pambıq, xüsusi örtüklü rahat dizayn',
    },
    {
      id: 3,
      title: 'Smart OLED Ambient Lamp',
      category: 'ev',
      price: '45 ₼',
      tag: 'Yeni',
      imageDesc: 'Çoxrəngli kiber işıqlandırma və telefonla idarə',
    },
    {
      id: 4,
      title: 'AzeShop Midnight Perfume 100ml',
      category: 'kosmetika',
      price: '120 ₼',
      tag: 'Məhdud Sayda',
      imageDesc: 'Uzunmüddətli qalıcı fransız ətir formulası',
    },
    {
      id: 5,
      title: 'Ağıllı Fitnes Qolbağı V2',
      category: 'aksessuar',
      price: '79 ₼',
      tag: 'Top Reytinq',
      imageDesc: 'Ürək döyüntüsü, addım və yuxu analizi',
    },
    {
      id: 6,
      title: 'Ultra-fast GaN Fast Charger 100W',
      category: 'elektronika',
      price: '55 ₼',
      tag: 'Aksessuar',
      imageDesc: 'Smartfon və Noutbuk üçün eyni vaxtda tez doldurma',
    },
  ];

  const filteredProducts = sampleProducts.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.imageDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-24 py-16">
      
      {/* SECTION 1: Features Highlights */}
      <section id="haqqinda" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Niyə Bizi Seçməlisiniz?
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            AzeShop sizə yalnız keyfiyyətli məhsullar deyil, rahat və xoş onlayn alış-veriş təcrübəsi təqdim edəcək.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">1-2 Saat Çatdırılma</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Bakı və Sumqayıt ərazisində sifarişləriniz birbaşa ünvanınıza ekspress çatdırılır.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">100% Orijinal Zəmanət</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Bütün məhsullara rəsmi zəmanət verilir. Saxta və ya keyfiyyətsiz məhsula yer yoxdur.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Rahat Ödəniş Üsulları</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Qapıda nağd, kuryerdə Pos-terminal, onlayn kartla və ya taksitlə rahatlıqla ödəyin.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">24/7 Canlı Dəstək</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sualınız var? Canlı çat və ya WhatsApp vasitəsilə 24/7 operativ dəstək xidməti aktivdir.
            </p>
          </div>
        </div>
      </section>


      {/* SECTION 2: Category Preview & Sample Search */}
      <section id="kateqoriyalar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-cyan-900/40 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                SNEAK PEEK PREVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Gələcək Kateqoriyalar Və Məhsullar
              </h2>
            </div>

            {/* Interactive Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Məhsul axtarın..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          {/* Interactive Filter Control Buttons (Segmented Controls) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : 'bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Sample Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-5 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-medium text-cyan-400">{product.category.toUpperCase()}</span>
                      <span className="px-2.5 py-0.5 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800/60 font-semibold">
                        {product.tag}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {product.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {product.imageDesc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-900 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-slate-500 block">Planlaşdırılan qiymət</span>
                      <span className="text-xl font-black text-white font-mono tabular-nums">{product.price}</span>
                    </div>

                    <button
                      onClick={() => alert(`AzeShop açıldıqda '${product.title}' üçün xüsusi bildiriş alacaqsınız!`)}
                      className="p-2.5 rounded-lg bg-slate-900 hover:bg-cyan-500 text-slate-300 hover:text-slate-950 transition-colors cursor-pointer"
                      title="Siyahıya Əlavə Et"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center space-y-2">
                <p className="text-slate-400">Axtarışa uyğun məhsul tapılmadı.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="text-xs text-cyan-400 underline cursor-pointer"
                >
                  Axtarışı sıfırla
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
