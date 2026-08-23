import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Plus, Minus, ShieldCheck } from 'lucide-react';
import { ScrollReveal, Starburst, VelocityText } from '../components/ScrollAnimations';

export default function Certificates() {
  const { t } = useTranslation();
  const certList = t('certificates.list', { returnObjects: true });

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="flex flex-col w-full bg-mcm-cream dark:bg-mcm-dark transition-colors duration-300 min-h-screen pb-32 mt-6">

      <section className="w-full bg-[#14161C] dark:bg-[#14161C] border-b-8 border-mcm-dark dark:border-[#EBE7DF] pt-32 pb-16 px-4 md:px-8 lg:px-16 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <VelocityText>
            <h1 className="text-[50px] md:text-[90px] lg:text-[140px] font-display font-bold uppercase tracking-tighter text-[#EBE7DF] dark:text-mcm-mustard leading-[0.85] mb-6">
              {t('certificates.title')}
            </h1>
          </VelocityText>
          <p className="text-xl md:text-3xl font-display font-bold uppercase text-[#EBE7DF]/80 max-w-2xl mt-4">
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
                    className={`w-full flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 md:p-8 lg:p-12 transition-colors duration-300 group relative 
                      ${isExpanded ? 'bg-mcm-orange dark:bg-[#1F222B]' : 'bg-transparent hover:bg-mcm-dark dark:hover:bg-[#EBE7DF]'}
                    `}
                  >
                    
                    {/* Hover Reveal Massive Number */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0 hidden md:block">
                      <div className={`absolute -left-4 top-1/2 -translate-y-1/2 text-[150px] lg:text-[200px] font-display font-black transition-opacity duration-300 ease-out
                        ${isExpanded ? 'text-mcm-dark/10 dark:text-mcm-orange/10' : 'text-transparent group-hover:text-mcm-cream/10 dark:group-hover:text-mcm-dark/10'}
                      `}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 w-full">
                      
                      {/* Left: Number and Issuer */}
                      <div className={`flex flex-col items-start w-full md:w-1/4 shrink-0 border-l-4 md:border-l-8 pl-4 transition-colors duration-300
                        ${isExpanded ? 'border-mcm-dark dark:border-[#EBE7DF]' : 'border-transparent group-hover:border-mcm-mustard dark:group-hover:border-mcm-orange'}
                      `}>
                        <span className={`font-display font-bold text-2xl md:text-3xl mb-3 transition-colors duration-300
                          ${isExpanded ? 'text-mcm-dark dark:text-[#EBE7DF]' : 'text-mcm-dark dark:text-[#EBE7DF] group-hover:text-mcm-cream dark:group-hover:text-mcm-dark'}
                        `}>
                          NO. {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className={`font-sans font-bold text-xs md:text-sm uppercase tracking-widest px-3 py-1 transition-colors duration-300
                          ${isExpanded ? 'bg-mcm-dark text-mcm-cream dark:bg-[#EBE7DF] dark:text-mcm-dark' : 'bg-mcm-dark/10 dark:bg-[#EBE7DF]/10 text-mcm-dark/80 dark:text-[#EBE7DF]/80 group-hover:bg-mcm-mustard group-hover:text-mcm-dark dark:group-hover:bg-mcm-orange dark:group-hover:text-mcm-dark'}
                        `}>
                          {cert.issuer}
                        </span>
                      </div>

                      {/* Center: Massive Title */}
                      <div className="flex-grow text-left">
                        <h3 className={`font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-[72px] uppercase tracking-tighter leading-[0.9] transition-colors duration-300
                          ${isExpanded ? 'text-mcm-dark dark:text-[#EBE7DF]' : 'text-mcm-dark dark:text-[#EBE7DF] group-hover:text-mcm-cream dark:group-hover:text-mcm-dark'}
                        `}>
                          {cert.title}
                        </h3>
                      </div>

                      {/* Right: Icon */}
                      <div className={`hidden lg:flex shrink-0 items-center justify-center w-20 h-20 xl:w-24 xl:h-24 rounded-full border-4 transition-colors duration-300
                        ${isExpanded 
                          ? 'border-mcm-dark dark:border-[#EBE7DF] bg-mcm-dark dark:bg-[#EBE7DF] text-mcm-cream dark:text-mcm-dark' 
                          : 'border-mcm-dark/20 dark:border-[#EBE7DF]/20 text-mcm-dark dark:text-[#EBE7DF] group-hover:border-mcm-mustard dark:group-hover:border-mcm-orange group-hover:bg-mcm-mustard dark:group-hover:bg-mcm-orange group-hover:text-mcm-dark dark:group-hover:text-mcm-dark'}
                      `}>
                        {isExpanded ? <Minus size={40} strokeWidth={2.5} /> : <Plus size={40} strokeWidth={2.5} />}
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="bg-mcm-cream dark:bg-mcm-dark"
                      >
                        <div className="w-full bg-[radial-gradient(rgba(44,43,41,0.1)_2px,transparent_2px)] dark:bg-[radial-gradient(rgba(235,231,223,0.05)_2px,transparent_2px)] [background-size:24px_24px] border-t-8 border-mcm-dark dark:border-[#EBE7DF] p-6 md:p-12 lg:p-24 flex flex-col items-center relative overflow-hidden">
                          
                          {/* Inner Certificate Display Card */}
                          <div className="relative w-full max-w-5xl group">
                            <div className="border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] bg-mcm-cream dark:bg-[#14161C] p-4 md:p-8 lg:p-12 shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] md:shadow-[16px_16px_0px_0px_rgba(44,43,41,1)] dark:shadow-[8px_8px_0px_0px_#F4F1EA] md:dark:shadow-[16px_16px_0px_0px_#F4F1EA] transition-colors duration-500 group-hover:border-mcm-orange dark:group-hover:border-mcm-mustard group-hover:shadow-[8px_8px_0px_0px_rgba(255,77,0,1)] md:group-hover:shadow-[16px_16px_0px_0px_rgba(255,77,0,1)] group-hover:shadow-[8px_8px_0px_0px_#FFD600] md:group-hover:shadow-[16px_16px_0px_0px_#FFD600]">
                              
                              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 sm:mb-8 border-b-4 border-mcm-dark dark:border-[#EBE7DF] pb-4 gap-4 transition-colors duration-500 group-hover:border-mcm-orange dark:group-hover:border-mcm-mustard">
                                <div className="flex flex-col">
                                  <span className="font-sans font-bold text-xs uppercase tracking-widest text-mcm-dark/60 dark:text-[#EBE7DF]/60 mb-1">Date Issued</span>
                                  <span className="font-display font-bold text-2xl md:text-4xl uppercase text-mcm-dark dark:text-[#EBE7DF] transition-colors duration-500 group-hover:text-mcm-orange dark:group-hover:text-mcm-mustard">
                                    {cert.date}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2 bg-mcm-mustard px-4 py-2 border-2 border-mcm-dark transition-colors duration-500 group-hover:bg-mcm-orange group-hover:border-mcm-orange dark:group-hover:bg-mcm-mustard dark:group-hover:border-mcm-mustard">
                                  <ShieldCheck size={20} className="text-mcm-dark transition-colors duration-500 group-hover:text-mcm-cream dark:group-hover:text-mcm-dark" strokeWidth={2.5} />
                                  <span className="font-display font-bold text-sm md:text-base text-mcm-dark transition-colors duration-500 group-hover:text-mcm-cream dark:group-hover:text-mcm-dark tracking-widest uppercase">
                                    Verified
                                  </span>
                                </div>
                              </div>

                              <div className="relative border-4 border-mcm-dark/20 dark:border-[#EBE7DF]/20 overflow-hidden bg-mcm-dark/5 dark:bg-mcm-cream/5 transition-colors duration-500 group-hover:border-mcm-orange/50 dark:group-hover:border-mcm-mustard/50">
                                <img
                                  src={cert.image}
                                  alt={cert.title}
                                  className="w-full h-auto object-contain grayscale-[40%] contrast-125 sepia-[20%] group-hover:grayscale-0 group-hover:contrast-100 group-hover:sepia-0 transition-all duration-700"
                                  loading="lazy"
                                />
                                {/* Cool Static Scanline Overlay */}
                                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:100%_4px]"></div>
                              </div>
                              
                            </div>
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
