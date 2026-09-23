import { useTranslation } from 'react-i18next';
import { ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, Starburst } from '../components/ScrollAnimations';
import { journalEntries } from '../data/journalData';

export default function Journal() {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || 'en';

  return (
    <div className="flex flex-col w-full bg-mcm-cream dark:bg-mcm-dark transition-colors duration-300 pb-32 min-h-screen overflow-hidden">
      
      {/* ===== EDITORIAL HEADER ===== */}
      <section className="w-full border-b-8 border-mcm-dark dark:border-[#EBE7DF] bg-mcm-teal relative">
        <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle, rgba(44,43,41,0.2) 3px, transparent 3px)', backgroundSize: '24px 24px' }} />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-32 pb-12 md:pt-40 md:pb-20 relative z-10 flex flex-col items-center text-center">
          
          <ScrollReveal variant="fade-up" className="flex items-center gap-4 mb-8 bg-mcm-cream dark:bg-mcm-dark border-4 border-mcm-dark dark:border-[#EBE7DF] px-6 py-2 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA]">
            <BookOpen size={24} className="text-mcm-orange" strokeWidth={2.5} />
            <span className="font-display font-bold uppercase tracking-[0.2em] text-mcm-dark dark:text-[#EBE7DF] text-sm md:text-base">
              The Digital Chronicle
            </span>
          </ScrollReveal>

          <ScrollReveal variant="pop-in" delay={0.1}>
            <h1 className="text-[55px] md:text-[90px] lg:text-[130px] font-display font-bold uppercase tracking-tighter text-mcm-cream dark:text-mcm-dark leading-[0.85] mb-6 drop-shadow-[4px_4px_0px_rgba(44,43,41,1)] dark:drop-shadow-[4px_4px_0px_rgba(235,231,223,1)]">
              {t('journal.title')}
            </h1>
          </ScrollReveal>
          
          <ScrollReveal variant="fade-up" delay={0.2}>
            <p className="text-xl md:text-2xl lg:text-3xl font-display font-bold uppercase text-mcm-dark/90 dark:text-[#EBE7DF]/90 max-w-3xl mt-4 bg-mcm-mustard px-6 py-3 border-4 border-mcm-dark dark:border-[#EBE7DF] shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA]">
              {t('journal.subtitle')}
            </p>
          </ScrollReveal>

        </div>

        {/* Decorative Starbursts */}
        <Starburst size={250} color="rgba(44,43,41,0.06)" className="absolute -left-20 top-10 animate-spin-slow-reverse pointer-events-none" />
        <Starburst size={400} color="rgba(244,241,234,0.1)" className="absolute -right-32 -bottom-32 animate-spin-slow pointer-events-none" />
      </section>

      {/* ===== MARQUEE STRIP ===== */}
      <div className="w-full bg-mcm-dark dark:bg-[#14161C] border-b-8 border-mcm-dark dark:border-[#EBE7DF] py-3 md:py-4 overflow-hidden flex relative z-20">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex whitespace-nowrap items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-8 mx-3 md:mx-4">
              <span className="font-display font-bold text-lg md:text-2xl uppercase tracking-widest text-mcm-cream dark:text-[#EBE7DF]">LATEST ENTRIES</span>
              <Starburst size={16} color="var(--color-mcm-orange)" />
              <span className="font-display font-bold text-lg md:text-2xl uppercase tracking-widest text-mcm-mustard">PERSONAL STORIES</span>
              <Starburst size={16} color="var(--color-mcm-teal)" />
              <span className="font-display font-bold text-lg md:text-2xl uppercase tracking-widest text-mcm-olive">EXPERIENCES</span>
              <Starburst size={16} color="var(--color-mcm-orange)" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* ===== EDITORIAL GRID & CATEGORIES ===== */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-16 md:pt-24 w-full">
        
        {Object.entries(
          journalEntries.reduce((acc, entry) => {
            const cat = entry.category[currentLang];
            if (!acc[cat]) acc[cat] = [];
            acc[cat].push(entry);
            return acc;
          }, {})
        ).map(([category, entries], catIndex) => (
          <div key={category} className="mb-20 md:mb-32">
            
            {/* Category Divider */}
            <ScrollReveal variant="slide-right" className="flex items-center gap-4 mb-10 md:mb-16">
              <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-mcm-dark dark:text-[#EBE7DF] shrink-0">
                {category}
              </h3>
              <div className="flex-1 h-2 bg-mcm-dark dark:bg-[#EBE7DF] rounded-r-full" />
              <Starburst size={32} color="var(--color-mcm-orange)" className="animate-spin-slow shrink-0" />
            </ScrollReveal>

            {/* Entries Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12">
              {entries.map((entry, index) => {
                
                // Dynamic layout logic to ensure no empty gaps in a 12-col grid
                let colSpan = 'lg:col-span-6 md:col-span-1'; // Default half width
                
                if (index === 0) {
                  // First item: If there's an odd total number of items, make the first one span full width (12)
                  // If even, make it span full width anyway to start strong, or we can just stick to 12
                  colSpan = 'lg:col-span-12 md:col-span-2';
                } else {
                  // For subsequent items
                  // If it's the last item and it's an even index (meaning it's alone on its row since 0 was full width)
                  // Wait: index 0 is full (1 row). 
                  // index 1 and 2 are half (1 row).
                  // index 3 and 4 are half (1 row).
                  // If there is an index 1 but no index 2 (length is 2), index 1 should be full width or centered.
                  if (index === entries.length - 1 && index % 2 !== 0) {
                     colSpan = 'lg:col-span-12 md:col-span-2';
                  } else {
                     colSpan = 'lg:col-span-6 md:col-span-1';
                  }
                }

                const isFeatured = index === 0 && catIndex === 0;
                // Determine if this specific card should have a horizontal layout
                const isWide = colSpan.includes('col-span-12');

                // Alternating accent colors
                const accents = [
                  { bg: 'bg-mcm-orange', text: 'text-mcm-cream dark:text-mcm-dark', border: 'border-mcm-dark dark:border-[#EBE7DF]', line: 'border-mcm-cream/40 dark:border-mcm-dark/20' },
                  { bg: 'bg-mcm-cream dark:bg-[#14161C]', text: 'text-mcm-dark dark:text-[#EBE7DF]', border: 'border-mcm-dark dark:border-[#EBE7DF]', line: 'border-mcm-dark/20 dark:border-[#EBE7DF]/20' },
                  { bg: 'bg-mcm-mustard', text: 'text-mcm-dark', border: 'border-mcm-dark dark:border-[#EBE7DF]', line: 'border-mcm-dark/20' },
                  { bg: 'bg-mcm-teal', text: 'text-mcm-cream dark:text-mcm-dark', border: 'border-mcm-dark dark:border-[#EBE7DF]', line: 'border-mcm-cream/40 dark:border-mcm-dark/20' },
                  { bg: 'bg-mcm-cream dark:bg-[#1F222B]', text: 'text-mcm-dark dark:text-[#EBE7DF]', border: 'border-mcm-dark dark:border-[#EBE7DF]', line: 'border-mcm-dark/20 dark:border-[#EBE7DF]/20' },
                ];
                const style = accents[(index + catIndex * 2) % accents.length];
                
                return (
                  <ScrollReveal 
                    key={entry.id} 
                    variant="fade-up" 
                    delay={(index % 3) * 0.1}
                    className={`${colSpan} flex flex-col group`}
                  >
                    <div className={`w-full h-full flex flex-col ${isFeatured || isWide ? 'lg:flex-row' : ''} border-4 md:border-6 ${style.border} ${style.bg} shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] md:shadow-[10px_10px_0px_0px_rgba(44,43,41,1)] dark:shadow-[6px_6px_0px_0px_#F4F1EA] md:dark:shadow-[10px_10px_0px_0px_#F4F1EA] hover:-translate-y-2 hover:-translate-x-1 transition-all duration-300 relative overflow-hidden`}>
                      
                      {/* Dot pattern overlay for colored cards */}
                      {style.bg !== 'bg-mcm-cream dark:bg-[#14161C]' && style.bg !== 'bg-mcm-cream dark:bg-[#1F222B]' && (
                        <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
                      )}

                      {/* Image Section */}
                      <div className={`relative ${isFeatured || isWide ? 'lg:w-1/2' : 'w-full'} ${isFeatured ? 'h-72 md:h-96' : 'h-64'} border-b-4 lg:border-b-0 ${isFeatured || isWide ? 'lg:border-r-4' : ''} ${style.border} overflow-hidden shrink-0 bg-mcm-dark`}>
                        <img 
                          src={entry.image} 
                          alt={entry.title[currentLang]} 
                          className="w-full h-full object-cover grayscale contrast-[1.1] sepia-[0.2] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                        {/* Week/Tag Badge */}
                        <div className="absolute top-0 left-0 bg-mcm-dark text-mcm-cream font-display font-bold px-4 py-2 uppercase tracking-widest text-xs md:text-sm border-r-4 border-b-4 border-mcm-cream/20">
                          {entry.week}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className={`flex flex-col p-6 md:p-8 ${isFeatured || isWide ? 'lg:w-1/2 justify-center' : 'w-full'} relative z-10`}>
                        
                        {/* Meta header */}
                        <div className={`flex items-center justify-between mb-4 border-b-2 border-dashed ${style.line} pb-4`}>
                          <span className={`font-display font-bold uppercase tracking-widest text-xs md:text-sm ${style.text}`}>
                            {entry.date}
                          </span>
                          <span className={`font-display font-bold text-xs uppercase tracking-widest opacity-60 ${style.text}`}>
                            VOL.{entry.id.toString().padStart(2, '0')}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className={`font-display font-bold uppercase tracking-tighter mb-4 leading-[0.9] ${style.text} ${isFeatured ? 'text-4xl md:text-5xl lg:text-6xl' : 'text-3xl md:text-4xl'}`}>
                          {entry.title[currentLang]}
                        </h2>

                        {/* Description */}
                        <p className={`font-sans font-medium mb-8 leading-relaxed opacity-90 ${style.text} ${isFeatured ? 'text-lg' : 'text-base line-clamp-4'}`}>
                          {entry.description[currentLang]}
                        </p>

                        {/* Action button */}
                        <button className={`mt-auto w-fit group/btn flex items-center gap-3 font-display font-bold uppercase tracking-widest text-xs md:text-sm ${style.text} hover:opacity-70 transition-opacity`}>
                          {t('journal.read_more')}
                          <div className={`w-8 h-8 md:w-10 md:h-10 border-2 ${style.border} rounded-full flex items-center justify-center bg-mcm-cream dark:bg-mcm-dark text-mcm-dark dark:text-[#EBE7DF] group-hover/btn:scale-110 transition-transform`}>
                            <ArrowRight size={18} strokeWidth={3} className="-rotate-45 group-hover/btn:rotate-0 transition-transform" />
                          </div>
                        </button>

                      </div>

                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
