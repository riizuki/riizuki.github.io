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
      className="text-lg font-bold hover:scale-110 transition-transform hover:animate-sketch text-doodle-ink dark:text-gray-300 font-sans px-1"
      aria-label="Toggle language"
    >
      {i18n.language === 'en' ? 'EN' : 'ID'}
    </button>
  );
}
