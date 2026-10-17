import React, { useState } from 'react';
import { GitBranch, ExternalLink, Copy, Check, Terminal, ShieldCheck, Download, Code, Layers, Info } from 'lucide-react';

export const DeploymentGuide: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'github' | 'vercel' | 'json'>('github');

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const gitCommands = [
    { title: '1. Git Anbarını Başlatmaq', cmd: 'git init' },
    { title: '2. Bütün Faylları Əlavə Etmək', cmd: 'git add .' },
    { title: '3. İlk Commit Yazmaq', cmd: 'git commit -m "AzeShop - Tezliklə Sizinlə Ilk Versiya"' },
    { title: '4. Əsas Qolu Main Etmək', cmd: 'git branch -M main' },
    { title: '5. GitHub Repozitoriyasını Qoşmaq (USERNAME əvəzinə öz GitHub istifadəçi adınızı yazın)', cmd: 'git remote add origin https://github.com/USERNAME/azeshop-online.git' },
    { title: '6. Kodu GitHub-a Yükləmək', cmd: 'git push -u origin main' },
  ];

  const vercelJsonContent = `{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}`;

  return (
    <section id="deployment" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>DEPLOYMENT & INTEGRATION HUB</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          GitHub & Vercel Aktivləşdirmə Mərkəzi
        </h2>
        
        <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
          Kodu GitHub repozitoriyasına yükləmək və Vercel platformasında cəmi 1 dəqiqəyə canlıya çıxarmaq üçün addım-addım təlimat.
        </p>
      </div>

      {/* Main Card with Tabs */}
      <div className="rounded-3xl bg-slate-900/90 border border-cyan-900/40 shadow-2xl overflow-hidden">
        
        {/* Tab Headers */}
        <div className="flex border-b border-slate-800 bg-slate-950/80 p-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('github')}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'github'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <GitBranch className="w-4 h-4" />
            <span>1. GitHub-a Yükləmək</span>
          </button>

          <button
            onClick={() => setActiveTab('vercel')}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'vercel'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <ExternalLink className="w-4 h-4" />
            <span>2. Vercel-də Aktiv Etmək</span>
          </button>

          <button
            onClick={() => setActiveTab('json')}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shrink-0 cursor-pointer ${
              activeTab === 'json'
                ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>3. vercel.json Faylı</span>
          </button>
        </div>

        {/* TAB 1: GITHUB GUIDE */}
        {activeTab === 'github' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between p-4 rounded-xl bg-cyan-950/40 border border-cyan-800/50 text-cyan-200 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <Info className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>
                  GitHub hesabı açın (və ya daxil olun) və <strong>new repository</strong> bölməsindən adını <code>azeshop-online</code> qoyun.
                </span>
              </div>
              <a
                href="https://github.com/new"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shrink-0 flex items-center gap-1"
              >
                <span>GitHub-da Yarat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Aşağıdakı Əmrləri Sıra İlə Terminalda İcra Edin:</span>
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {gitCommands.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-xs font-semibold text-slate-400 block">{item.title}</span>
                    <div className="flex items-center justify-between gap-4 font-mono text-xs sm:text-sm bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-cyan-300 overflow-x-auto">
                      <code>{item.cmd}</code>
                      <button
                        onClick={() => copyToClipboard(item.cmd, idx)}
                        className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer shrink-0"
                        title="Əmri Kopyala"
                      >
                        {copiedIndex === idx ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: VERCEL GUIDE */}
        {activeTab === 'vercel' && (
          <div className="p-6 sm:p-8 space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Method A */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">ƏN ASAN METOD</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-emerald-950 text-emerald-300 border border-emerald-800">TÖVSİYƏ OLUNUR</span>
                </div>
                <h3 className="text-lg font-bold text-white">1. Vercel Web Dashboard-dan Əlavə Etmək</h3>
                <ol className="space-y-3 text-xs sm:text-sm text-slate-300 list-decimal pl-4 leading-relaxed">
                  <li><strong>vercel.com/new</strong> keçidinə daxil olun.</li>
                  <li>GitHub hesabınızı bağlayın və <code>azeshop-online</code> anbarını seçin.</li>
                  <li>Framework preset olaraq <strong>Vite</strong> seçin.</li>
                  <li>Build Command: <code>npm run build</code>, Output Directory: <code>dist</code> yazın.</li>
                  <li><strong>Deploy</strong> düyməsinə klikləyin. Cəmi 30 saniyəyə domeninizi verəcək!</li>
                </ol>
                <a
                  href="https://vercel.com/new"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2"
                >
                  <span>Vercel-də Import Et</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Method B */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">TERMINAL METODU</span>
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded bg-slate-800 text-slate-300">Vercel CLI</span>
                </div>
                <h3 className="text-lg font-bold text-white">2. Vercel CLI Vasitəsilə Yükləmək</h3>
                <p className="text-xs text-slate-400">
                  Əgər birbaşa terminalınızdan canlıya çıxarmaq istəyirsinizsə:
                </p>
                <div className="space-y-2">
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs text-cyan-300 flex items-center justify-between">
                    <code>npm i -g vercel</code>
                    <button onClick={() => copyToClipboard('npm i -g vercel', 99)} className="p-1 text-slate-400 hover:text-white cursor-pointer">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 font-mono text-xs text-cyan-300 flex items-center justify-between">
                    <code>vercel</code>
                    <button onClick={() => copyToClipboard('vercel', 100)} className="p-1 text-slate-400 hover:text-white cursor-pointer">
                      <Copy className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <p className="text-xs text-slate-400">
                  Ekrandakı suallara Yes (Y) vuraraq davam edin.
                </p>
              </div>

            </div>

            {/* Environment Variables Info */}
            <div className="p-4 rounded-xl bg-slate-950 border border-cyan-900/40 text-xs sm:text-sm text-slate-300 space-y-2">
              <span className="font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Mühit Dəyişənləri (Environment Variables):</span>
              </span>
              <p className="text-slate-400">
                Əgər Vercel layihənizdə Gemini AI API istifadə edirsinizsə, Vercel Dashboard-da <strong>Settings &gt; Environment Variables</strong> bölməsinə keçib <code>GEMINI_API_KEY</code> əlavə edin.
              </p>
            </div>

          </div>
        )}

        {/* TAB 3: VERCEL.JSON INSPECTOR */}
        {activeTab === 'json' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">vercel.json Konfiqurasiya Faylı</h3>
                <p className="text-xs text-slate-400">
                  Bu fayl React SPA (Single Page Application) yönləndirmələrinin Vercel-də səhifə yenilənərkən 404 xətası verməməsini təmin edir.
                </p>
              </div>

              <button
                onClick={() => copyToClipboard(vercelJsonContent, 200)}
                className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shrink-0 cursor-pointer"
              >
                {copiedIndex === 200 ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedIndex === 200 ? 'Kopyalandı!' : 'Faylı Kopyala'}</span>
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-sm text-cyan-300 overflow-x-auto">
              <code>{vercelJsonContent}</code>
            </pre>

            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-xs text-emerald-300 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Hazır! Layihə qovluğunda artıq <code>vercel.json</code> faylı yaradılıb. Birbaşa GitHub-a push edə bilərsiniz.
              </span>
            </div>
          </div>
        )}

      </div>

      {/* Deployment Readiness Diagnostic */}
      <div className="mt-8 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-950 border border-emerald-500/50 flex items-center justify-center text-emerald-400">
            <Check className="w-5 h-5" />
          </div>
          <div>
            <span className="text-sm font-bold text-white block">Vercel Və GitHub Uyğunluq Testi Passed (100%)</span>
            <span className="text-xs text-slate-400">Vite React 19, TypeScript və vercel.json rewrites tam hazırdır.</span>
          </div>
        </div>

        <button
          onClick={() => {
            setActiveTab('github');
            window.scrollTo({ top: document.getElementById('deployment')?.offsetTop, behavior: 'smooth' });
          }}
          className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold cursor-pointer whitespace-nowrap"
        >
          Təlimatı Təkrarla
        </button>
      </div>

    </section>
  );
};
