import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Menu, X, Smartphone, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  // Використовуємо реальні іконки прапорів з flagcdn
  const languages = [
    { code: 'uk', flag: 'https://flagcdn.com/w40/ua.png', name: 'Укр' },
    { code: 'en', flag: 'https://flagcdn.com/w40/gb.png', name: 'Eng' },
    { code: 'de', flag: 'https://flagcdn.com/w40/de.png', name: 'Deu' },
    { code: 'fr', flag: 'https://flagcdn.com/w40/fr.png', name: 'Fra' },
    { code: 'es', flag: 'https://flagcdn.com/w40/es.png', name: 'Esp' }
  ];

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2 font-bold text-2xl text-gray-900">
          <div className="bg-green-100 p-2 rounded-xl">
            <ChefHat className="text-green-600" size={28} />
          </div>
          Fridgify
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <Link to="/" className="hover:text-green-600 transition-colors">{t('nav.home')}</Link>
          <a href="/#how-it-works" className="hover:text-green-600 transition-colors">{t('nav.how')}</a>
          <Link to="/privacy" className="hover:text-green-600 transition-colors">{t('nav.privacy')}</Link>
          
          {/* Перемикач мови */}
          <div className="relative">
            <button onClick={() => setLangOpen(!langOpen)} className="flex items-center gap-2 hover:text-green-600 transition bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
              <Globe size={18} className="text-gray-400" />
              <img src={currentLang.flag} alt="flag" className="w-5 h-auto rounded-sm shadow-sm" />
              <span className="uppercase text-xs font-bold">{currentLang.code}</span>
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden animate-fade-in-up" style={{ animationDuration: '0.2s' }}>
                {languages.map((lng) => (
                  <button key={lng.code} onClick={() => changeLanguage(lng.code)} className="w-full text-left px-4 py-3 hover:bg-green-50 hover:text-green-600 transition flex items-center gap-3">
                    <img src={lng.flag} alt={lng.name} className="w-6 h-auto rounded-sm shadow-sm" /> 
                    {lng.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a href="/#download" className="bg-gray-900 hover:bg-green-600 text-white px-5 py-2.5 rounded-full transition flex items-center gap-2">
            <Smartphone size={18} /> {t('nav.download')}
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full shadow-lg">
          <div className="flex flex-col px-4 pt-2 pb-6 space-y-4 text-center text-lg font-medium">
            <div className="flex justify-center gap-6 border-b pb-4 pt-2">
               {languages.map(lng => (
                 <button key={lng.code} onClick={() => changeLanguage(lng.code)} className={`transition-all ${i18n.language === lng.code ? 'scale-125 shadow-md rounded-sm' : 'opacity-50 grayscale hover:grayscale-0'}`}>
                   <img src={lng.flag} alt={lng.name} className="w-8 h-auto rounded-sm" />
                 </button>
               ))}
            </div>
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-green-600">{t('nav.home')}</Link>
            <Link to="/privacy" onClick={() => setIsOpen(false)} className="hover:text-green-600">{t('nav.privacy')}</Link>
          </div>
        </div>
      )}
    </nav>
  );
}