import { Shield, Mail } from 'lucide-react';
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

        <div className="space-y-8 text-gray-700 leading-relaxed">
          
          <section>
            <p className="text-lg">{t('privacy.intro')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.t1')}</h2>
            <p className="mb-4">{t('privacy.p1')}</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>{t('privacy.l1_1')}</strong> {t('privacy.l1_1d')}</li>
              <li><strong>{t('privacy.l1_2')}</strong> {t('privacy.l1_2d')}</li>
              <li><strong>{t('privacy.l1_3')}</strong> {t('privacy.l1_3d')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.t2')}</h2>
            <p className="mb-4">{t('privacy.p2')}</p>
            <ul className="list-disc pl-6 space-y-2 text-green-600 font-medium">
              <li><a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer" className="hover:underline">Google Play Services</a></li>
              <li><a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noreferrer" className="hover:underline">AdMob</a></li>
              <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer" className="hover:underline">Google Analytics & Crashlytics</a></li>
              <li><a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noreferrer" className="hover:underline">OpenAI</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.t3')}</h2>
            <p>{t('privacy.p3')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.t4')}</h2>
            <p>{t('privacy.p4')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.t5')}</h2>
            <p>{t('privacy.p5')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('privacy.t6')}</h2>
            <p>{t('privacy.p6')}</p>
          </section>

          <div className="mt-12 p-6 bg-green-50 rounded-2xl border border-green-100">
            <h2 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Mail className="text-green-600" size={24} /> {t('privacy.contactTitle')}
            </h2>
            <p className="text-gray-700">
              {t('privacy.contactDesc')} <br/>
              <a href="mailto:pasalugovij@gmail.com" className="text-green-600 font-bold hover:underline mt-2 inline-block">pasalugovij@gmail.com</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}