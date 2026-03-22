import { Sparkles, Bell, Utensils, Smartphone, ArrowRight, Camera, Cpu, Heart, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.pavlo.smart_fridge";

  return (
    <div className="flex flex-col items-center overflow-hidden">
      
      {/* 1. Головний екран (Hero) */}
      <section className="w-full bg-gradient-to-b from-green-50 to-white pt-24 pb-32 px-4 text-center relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-200 rounded-full blur-3xl"></div>
            <div className="absolute top-40 -right-20 w-80 h-80 bg-green-100 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col items-center animate-fade-in-up">
          <div className="bg-green-100 text-green-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 flex items-center gap-2">
            <Sparkles size={16} /> {t('hero.badge')}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8 leading-tight">
            {t('hero.title1')} <br />
            <span className="bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text">{t('hero.title2')}</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
            {t('hero.desc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={playStoreLink} target="_blank" rel="noreferrer" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
              <Smartphone size={24} />
              {t('hero.btnMain')}
            </a>
            <a href="#how-it-works" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold py-4 px-8 rounded-full shadow-sm transition-all flex items-center justify-center gap-3 text-lg">
              {t('hero.btnHow')} <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* 🔥 НОВА СЕКЦІЯ: AI SCANNER */}
      <section className="w-full py-24 bg-white px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:row items-center gap-16 md:flex-row">
          <div className="flex-1 relative order-2 md:order-1">
            <div className="bg-green-400/20 absolute -inset-4 rounded-[3rem] blur-2xl"></div>
            <img 
              src="/scan-preview.png" 
              alt="Fridgify AI Scanner" 
              className="relative rounded-[2.5rem] shadow-2xl border-8 border-gray-900 w-full max-w-[300px] mx-auto"
            />
          </div>
          <div className="flex-1 space-y-8 text-left order-1 md:order-2">
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              {t('scan.badge')}
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-none">
              {t('scan.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {t('scan.desc')}
            </p>
            <div className="space-y-4">
               {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 text-gray-800 font-bold text-lg">
                  <div className="bg-green-100 p-1 rounded-full"><CheckCircle className="text-green-600" size={20} /></div>
                  {t(`scan.feat${i}`)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Блок "Як це працює" */}
      <section id="how-it-works" className="w-full py-24 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{t('how.title')}</h2>
            <p className="text-xl text-gray-500">{t('how.sub')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-12 left-[16%] w-[68%] h-1 border-t-2 border-dashed border-green-200 -z-10"></div>

            {[
              { icon: <Camera size={32} />, title: t('how.s1Title'), desc: t('how.s1Desc') },
              { icon: <Cpu size={32} />, title: t('how.s2Title'), desc: t('how.s2Desc') },
              { icon: <Heart size={32} />, title: t('how.s3Title'), desc: t('how.s3Desc') }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center relative group">
                <div className="bg-white border-4 border-green-100 p-6 rounded-3xl mb-6 shadow-xl group-hover:scale-110 group-hover:border-green-400 transition-all duration-300">
                  <div className="text-green-600">{step.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Заклик до дії (CTA) */}
      <section id="download" className="w-full bg-gray-900 py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">{t('cta.title')}</h2>
          <p className="text-gray-400 mb-12 text-xl md:text-2xl max-w-2xl mx-auto">{t('cta.sub')}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href={playStoreLink} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-[0_0_40px_rgba(74,222,128,0.4)] hover:shadow-[0_0_60px_rgba(74,222,128,0.6)] hover:-translate-y-1 transition-all flex items-center gap-3">
               <Smartphone size={28} /> {t('cta.btn')}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}