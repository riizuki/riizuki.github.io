import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full mt-auto bg-black text-white border-t-4 border-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl font-black tracking-tighter uppercase font-display mb-1 text-acid-cyan">
            {t('footer.name')}
          </h2>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            {t('footer.tagline')}
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          <a href="https://github.com/riizuki" target="_blank" rel="noreferrer" className="px-4 py-2 bg-acid-green text-black font-black text-xs uppercase tracking-widest acid-border hover:bg-white transition-colors flex items-center gap-1 shadow-[2px_2px_0_0_#fff]">
            GitHub <ArrowUpRight size={14} strokeWidth={3} />
          </a>
          <a href="https://linkedin.com/in/rizkyalfaridhafizh" target="_blank" rel="noreferrer" className="px-4 py-2 bg-acid-pink text-black font-black text-xs uppercase tracking-widest acid-border hover:bg-white transition-colors flex items-center gap-1 shadow-[2px_2px_0_0_#fff]">
            LinkedIn <ArrowUpRight size={14} strokeWidth={3} />
          </a>
          <a href="https://www.instagram.com/rizky31afh_/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-acid-purple text-white font-black text-xs uppercase tracking-widest acid-border hover:bg-white hover:text-black transition-colors flex items-center gap-1 shadow-[2px_2px_0_0_#fff]">
            Instagram <ArrowUpRight size={14} strokeWidth={3} />
          </a>
        </div>

        <div className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}
