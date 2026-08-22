import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full mt-24 mb-8">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gray-300 dark:bg-gray-700 rounded-full mb-8"></div>
        <div className="mt-8 flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold font-display text-doodle-ink dark:text-gray-200 mb-2 transform -rotate-1">
            {t('footer.name')}
          </h2>
          <p className="font-sans text-lg text-gray-600 dark:text-gray-400 max-w-sm">
            {t('footer.tagline')}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-2xl">
          <a href="https://github.com/riizuki" className="px-4 py-1 bg-white doodle-border transform rotate-2 hover:scale-110 transition-transform text-doodle-ink font-bold shadow-sm">GitHub</a>
          <a href="https://linkedin.com/in/rizkyalfaridhafizh" className="px-4 py-1 bg-white doodle-border transform -rotate-2 hover:scale-110 transition-transform text-doodle-ink font-bold shadow-sm">LinkedIn</a>
          <a href="https://www.instagram.com/rizky31afh_/" className="px-4 py-1 bg-white doodle-border transform rotate-1 hover:scale-110 transition-transform text-doodle-ink font-bold shadow-sm">Instagram</a>
        </div>
        
        <div className="mt-12 text-base font-sans text-gray-500 transform rotate-1 bg-doodle-yellow px-2 py-1 doodle-border border-gray-400 border-dashed">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
