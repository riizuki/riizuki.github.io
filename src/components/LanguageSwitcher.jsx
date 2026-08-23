import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const isEN = i18n.language === 'en';

  const toggleLanguage = () => {
    i18n.changeLanguage(isEN ? 'id' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="w-12 h-full flex items-center justify-center hover:bg-mcm-teal hover:text-mcm-cream transition-colors text-mcm-dark dark:text-[#EBE7DF] bg-transparent"
      aria-label="Toggle language"
    >
      <motion.span
        key={isEN ? 'EN' : 'ID'}
        initial={{ y: -5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="font-display font-bold text-sm"
      >
        {isEN ? 'EN' : 'ID'}
      </motion.span>
    </button>
  );
}
