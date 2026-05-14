import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full pt-16 pb-32 md:pb-40 px-4 md:px-8 lg:px-12 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-3xl p-8 md:p-12 border border-gray-100 dark:border-gray-800/80 flex flex-col md:flex-row justify-between items-center md:items-end gap-8 md:gap-0 transition-colors">
          
          <div className="flex flex-col text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
              {t('footer.name')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm font-medium">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/rizkyalfaridhafizh" target="_blank" rel="noreferrer" className="group flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              GitHub <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
            <a href="https://linkedin.com/in/rizkyalfaridhafizh" target="_blank" rel="noreferrer" className="group flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              LinkedIn <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
            <a href="https://instagram.com/rizkyalfaridhafizh" target="_blank" rel="noreferrer" className="group flex items-center gap-1 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Instagram <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
            </a>
          </div>

        </div>

        <div className="mt-8 text-center text-[11px] uppercase tracking-widest font-semibold text-gray-400 dark:text-gray-500">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
