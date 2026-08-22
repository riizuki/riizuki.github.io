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
      className="px-3 py-2 acid-border bg-white dark:bg-black text-black dark:text-white text-sm font-black transition-all hover:acid-shadow-hover hover:bg-acid-green dark:hover:bg-acid-green dark:hover:text-black active:acid-shadow-active active:translate-y-[2px] active:translate-x-[2px] uppercase"
      aria-label="Toggle language"
    >
      {i18n.language === 'en' ? 'EN' : 'ID'}
    </button>
  );
}
