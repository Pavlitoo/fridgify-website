import { Sparkles, Bell, Utensils, Smartphone, ArrowRight, Camera, Cpu, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center overflow-hidden">
      
      {/* 1. Головний екран (Hero) */}
      <section className="w-full bg-gradient-to-b from-green-50 to-white pt-24 pb-32 px-4 text-center relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
            {/* Декоративні кола на фоні */}
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
            <a href="#download" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
              <Smartphone size={24} />
              {t('hero.btnMain')}
            </a>
            <a href="#how-it-works" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold py-4 px-8 rounded-full shadow-sm transition-all flex items-center justify-center gap-3 text-lg">
              {t('hero.btnHow')} <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* 2. Блок "Як це працює" */}
      <section id="how-it-works" className="w-full py-24 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
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
              <div key={index} className="flex flex-col items-center text-center animate-fade-in-up opacity-0 relative group" style={{ animationDelay: `${(index + 2) * 100}ms`, animationFillMode: 'forwards' }}>
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

      {/* 3. Блок переваг */}
      <section className="w-full py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Sparkles size={32} />, title: t('feat.f1Title'), desc: t('feat.f1Desc') },
            { icon: <Bell size={32} />, title: t('feat.f2Title'), desc: t('feat.f2Desc') },
            { icon: <Utensils size={32} />, title: t('feat.f3Title'), desc: t('feat.f3Desc') }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-10 rounded-[2rem] text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 border border-gray-100 group">
              <div className="bg-green-50 w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors text-green-600">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Заклик до дії */}
      <section id="download" className="w-full bg-gray-900 py-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-green-500/10 blur-[100px] rounded-full"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">{t('cta.title')}</h2>
          <p className="text-gray-400 mb-12 text-xl md:text-2xl max-w-2xl mx-auto">{t('cta.sub')}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="bg-green-500 hover:bg-green-400 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-[0_0_40px_rgba(74,222,128,0.4)] hover:shadow-[0_0_60px_rgba(74,222,128,0.6)] hover:-translate-y-1 transition-all flex items-center gap-3">
               <Smartphone size={28} /> {t('cta.btn')}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}