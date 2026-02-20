import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Fridgify. {t('footer.rights')}</p>
        <p className="mt-2">{t('footer.motto')}</p>
      </div>
    </footer>
  );
}