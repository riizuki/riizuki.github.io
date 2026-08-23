import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal, Starburst } from '../components/ScrollAnimations';
import { journalEntries } from '../data/journalData';

export default function Journal() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  return (
    <div className="flex flex-col w-full bg-mcm-cream dark:bg-mcm-dark transition-colors duration-300 pb-32 pt-24 md:pt-32 min-h-screen">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
        <ScrollReveal variant="fade-up" className="mb-12 md:mb-20 border-b-8 border-mcm-dark dark:border-[#EBE7DF] pb-12 relative">
          <Starburst size={200} color="var(--color-mcm-orange)" className="absolute -top-10 -right-10 animate-spin-slow-reverse opacity-20 dark:opacity-10 pointer-events-none" />
          
          <div className="flex items-center gap-4 mb-6">
            <div className="h-4 w-4 bg-mcm-teal dark:bg-mcm-orange rounded-full animate-pulse" />
            <span className="font-display font-bold uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF] text-sm md:text-base">
              Volume I • Edition 2026
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-display font-bold uppercase tracking-tighter text-mcm-dark dark:text-[#EBE7DF] leading-[0.85] mb-6">
            {t('journal.title')}
          </h1>
          
          <p className="text-xl md:text-2xl font-sans font-medium text-mcm-dark/70 dark:text-[#EBE7DF]/70 max-w-3xl border-l-8 border-mcm-teal pl-6">
            {t('journal.subtitle')}
          </p>
        </ScrollReveal>

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 relative">
          
          {journalEntries.map((entry, index) => {
            // Determine column span to create an irregular/magazine layout
            const isFeatured = index === 0;
            const colSpan = isFeatured ? 'lg:col-span-12' : 'lg:col-span-6';
            
            return (
              <ScrollReveal 
                key={entry.id} 
                variant="fade-up" 
                delay={index * 0.1}
                className={`${colSpan} flex flex-col group`}
              >
                <div className={`w-full flex flex-col ${isFeatured ? 'lg:flex-row' : ''} border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] bg-mcm-cream dark:bg-[#14161C] shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] dark:shadow-[8px_8px_0px_0px_#F4F1EA] overflow-hidden hover:-translate-y-2 transition-transform duration-300`}>
                  
                  {/* Image Container */}
                  <div className={`relative ${isFeatured ? 'lg:w-1/2' : 'w-full'} h-64 md:h-80 lg:h-96 border-b-4 lg:border-b-0 ${isFeatured ? 'lg:border-r-8' : ''} border-mcm-dark dark:border-[#EBE7DF] overflow-hidden bg-mcm-mustard`}>
                    <img 
                      src={entry.image} 
                      alt={entry.title[currentLang]} 
                      className="w-full h-full object-cover grayscale contrast-[1.2] group-hover:grayscale-0 transition-all duration-700 mix-blend-multiply dark:mix-blend-normal"
                    />
                    <div className="absolute top-4 left-4 bg-mcm-orange text-mcm-cream dark:text-mcm-dark font-display font-bold px-4 py-2 uppercase tracking-widest text-sm border-2 border-mcm-dark dark:border-[#EBE7DF]">
                      {entry.week}
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className={`flex flex-col p-6 md:p-8 ${isFeatured ? 'lg:w-1/2 justify-center' : 'w-full'}`}>
                    <div className="flex items-center justify-between mb-4 border-b-2 border-dashed border-mcm-dark/30 dark:border-[#EBE7DF]/30 pb-4">
                      <span className="font-display font-bold uppercase tracking-widest text-mcm-teal dark:text-mcm-mustard text-sm">
                        {entry.date}
                      </span>
                      <span className="font-serif italic text-mcm-dark/50 dark:text-[#EBE7DF]/50 text-sm">
                        Entry #{entry.id.toString().padStart(2, '0')}
                      </span>
                    </div>

                    <h2 className={`font-display font-bold uppercase tracking-tighter text-mcm-dark dark:text-[#EBE7DF] mb-4 leading-none ${isFeatured ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl'}`}>
                      {entry.title[currentLang]}
                    </h2>

                    <p className={`font-sans font-medium text-mcm-dark/80 dark:text-[#EBE7DF]/80 mb-8 leading-relaxed ${isFeatured ? 'text-lg md:text-xl' : 'text-base md:text-lg'}`}>
                      {entry.description[currentLang]}
                    </p>

                    <button className="mt-auto w-fit group/btn flex items-center gap-3 font-display font-bold uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF] text-sm hover:text-mcm-orange transition-colors">
                      {t('journal.read_more')}
                      <div className="w-10 h-10 border-2 border-mcm-dark dark:border-[#EBE7DF] rounded-full flex items-center justify-center bg-mcm-cream dark:bg-mcm-dark group-hover/btn:bg-mcm-orange group-hover/btn:border-mcm-orange group-hover/btn:text-mcm-cream transition-colors">
                        <ArrowRight size={20} strokeWidth={2.5} className="group-hover/btn:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}

        </div>
      </div>
    </div>
  );
}
