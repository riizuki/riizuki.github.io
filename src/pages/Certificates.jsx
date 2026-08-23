import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal, Starburst, VelocityText } from '../components/ScrollAnimations';

export default function Certificates() {
  const { t } = useTranslation();
  const certList = t('certificates.list', { returnObjects: true });
  
  
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col w-full bg-mcm-cream dark:bg-mcm-dark transition-colors duration-300 min-h-screen pb-32">
      
      
      <section className="w-full bg-[#1A1918] dark:bg-[#1A1918] border-b-8 border-mcm-dark dark:border-[#EBE7DF] pt-32 pb-16 px-4 md:px-8 lg:px-16 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <VelocityText>
             <h1 className="text-[50px] md:text-[90px] lg:text-[140px] font-display font-bold uppercase tracking-tighter text-[#EBE7DF] dark:text-mcm-mustard leading-[0.85] mb-6">
               {t('certificates.title')}
             </h1>
          </VelocityText>
          <p className="text-xl md:text-3xl font-display font-bold uppercase text-[#EBE7DF]/80 max-w-2xl">
            {t('certificates.subtitle')}
          </p>
        </div>
        <Starburst size={300} color="rgba(235,231,223,0.03)" className="absolute -bottom-20 -right-20 pointer-events-none" />
      </section>

      
      <div className="w-full max-w-7xl mx-auto pt-24 px-4 sm:px-8">
        <div className="flex flex-col border-t-8 border-mcm-dark dark:border-[#EBE7DF]">
          
          {Array.isArray(certList) && certList.map((cert, idx) => {
            const isExpanded = expandedIndex === idx;
            
            return (
              <ScrollReveal key={idx} variant="fade-up" delay={0.1} className="w-full">
                <div className="flex flex-col border-b-8 border-mcm-dark dark:border-[#EBE7DF] overflow-hidden">
                  
                  
                  <button 
                    onClick={() => toggleExpand(idx)}
                    className={`w-full flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-12 transition-colors duration-300 group
                      ${isExpanded ? 'bg-mcm-mustard dark:bg-[#201F1D]' : 'bg-transparent hover:bg-mcm-dark dark:hover:bg-[#EBE7DF]'}
                    `}
                  >
                    
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12 w-full md:w-1/3 mb-4 md:mb-0">
                      <span className={`font-display font-bold text-2xl md:text-3xl transition-colors duration-300
                        ${isExpanded ? 'text-mcm-dark dark:text-[#EBE7DF]' : 'text-mcm-dark/50 dark:text-[#EBE7DF]/50 group-hover:text-[#EBE7DF] dark:group-hover:text-mcm-dark'}
                      `}>
                        / 0{idx + 1}
                      </span>
                      <span className={`font-sans font-bold text-sm md:text-base uppercase tracking-widest transition-colors duration-300 text-left
                        ${isExpanded ? 'text-mcm-teal dark:text-mcm-orange' : 'text-mcm-teal dark:text-mcm-orange group-hover:text-mcm-mustard dark:group-hover:text-mcm-dark'}
                      `}>
                        {cert.issuer}
                      </span>
                    </div>

                    
                    <div className="flex-grow w-full md:w-auto text-left">
                      <h3 className={`font-display font-bold text-4xl md:text-5xl lg:text-7xl uppercase tracking-tight leading-none transition-colors duration-300
                        ${isExpanded ? 'text-mcm-dark dark:text-[#EBE7DF]' : 'text-mcm-dark dark:text-[#EBE7DF] group-hover:text-mcm-cream dark:group-hover:text-[#1A1918]'}
                      `}>
                        {cert.title}
                      </h3>
                    </div>

                    
                    <div className={`hidden md:flex ml-8 transition-colors duration-300 flex-shrink-0
                      ${isExpanded ? 'text-mcm-dark dark:text-[#EBE7DF]' : 'text-mcm-dark dark:text-[#EBE7DF] group-hover:text-mcm-mustard dark:group-hover:text-mcm-dark'}
                    `}>
                      {isExpanded ? <Minus size={48} strokeWidth={2} /> : <Plus size={48} strokeWidth={2} />}
                    </div>
                  </button>

                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-mcm-cream dark:bg-[#1A1918]"
                      >
                        <div className="p-6 md:p-16 flex justify-center">
                          <div className="relative w-full max-w-5xl border-8 border-mcm-dark dark:border-[#EBE7DF] bg-[#2C2B29] p-4 md:p-6 shadow-[16px_16px_0px_0px_rgba(44,43,41,1)] dark:shadow-[16px_16px_0px_0px_rgba(226,166,59,1)]">
                            
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-auto object-contain grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                              loading="lazy"
                            />
                            
                            
                            <div className="absolute top-0 left-0 w-8 md:w-16 h-8 md:h-16 border-b-8 border-r-8 border-mcm-dark dark:border-[#EBE7DF] bg-mcm-mustard" />
                            <div className="absolute bottom-0 right-0 w-8 md:w-16 h-8 md:h-16 border-t-8 border-l-8 border-mcm-dark dark:border-[#EBE7DF] bg-mcm-mustard" />
                            
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

    </div>
  );
}
