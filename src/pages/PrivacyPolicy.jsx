import { Shield, Mail, Camera, Lock, Eye, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 animate-fade-in-up">
        
        <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100">
          <div className="bg-green-100 p-3 rounded-2xl text-green-600">
            <Shield size={32} />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">{t('privacy.title')}</h1>
            <p className="text-gray-500 mt-2">{t('privacy.update')}</p>
          </div>
        </div>

        <div className="space-y-10 text-gray-700 leading-relaxed">
          
          <section>
            <p className="text-lg">{t('privacy.intro')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Eye size={24} className="text-green-600" /> {t('privacy.t1')}
            </h2>
            <p className="mb-4">{t('privacy.p1')}</p>
          </section>

          <section className="bg-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <Camera size={26} /> {t('privacy.t2')}
            </h2>
            <p className="text-blue-800">
              {t('privacy.p2')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Globe size={24} className="text-green-600" /> {t('privacy.t3')}
            </h2>
            <p className="mb-4">{t('privacy.p3')}</p>
            <ul className="list-disc pl-6 space-y-2 text-green-600 font-medium">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="hover:underline">Google Play Services & Firebase</a></li>
              <li><a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noreferrer" className="hover:underline">Google Gemini AI</a></li>
              <li><a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noreferrer" className="hover:underline">AdMob</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lock size={24} className="text-green-600" /> {t('privacy.t4')}
            </h2>
            <p>{t('privacy.p4')}</p>
          </section>

          <div className="mt-12 p-8 bg-green-50 rounded-3xl border border-green-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Mail className="text-green-600" size={24} /> {t('privacy.contactTitle')}
            </h2>
            <p className="text-gray-700">
              {t('privacy.contactDesc')} <br/>
              <a href="mailto:pasalugovij@gmail.com" className="text-green-600 font-bold hover:underline mt-2 inline-block text-lg">pasalugovij@gmail.com</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}