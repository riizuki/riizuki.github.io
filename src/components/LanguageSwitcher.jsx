import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'id' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm font-medium transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 uppercase"
      aria-label="Toggle language"
    >
      {i18n.language === 'en' ? 'EN' : 'ID'}
    </button>
  );
}
