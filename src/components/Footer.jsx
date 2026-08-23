import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, Starburst, VelocityText } from './ScrollAnimations';

export default function Footer() {
  const { t } = useTranslation();
  const [time, setTime] = useState(new Date());

  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  
  const localTime = time.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Jakarta',
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });

  const socials = [
    { name: 'GitHub', url: 'https://github.com/riizuki' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/riizuki' },
    { name: 'Instagram', url: 'https://instagram.com/riizuki' },
  ];

  return (
    <footer className="w-full flex flex-col mt-auto bg-mcm-dark dark:bg-mcm-cream border-t-8 border-mcm-dark dark:border-[#EBE7DF] overflow-hidden">
      
      
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 bg-mcm-cream dark:bg-mcm-dark">
        
        
        <div className="lg:col-span-7 p-8 md:p-16 border-b-8 lg:border-b-0 lg:border-r-8 border-mcm-dark dark:border-[#EBE7DF] flex flex-col justify-between relative overflow-hidden">
          <Starburst size={250} color="rgba(44, 43, 41, 0.03)" className="absolute -top-20 -left-20 pointer-events-none" />
          
          <ScrollReveal variant="fade-up" className="relative z-10 flex flex-col items-start">
            
            
            <div className="inline-flex items-center gap-3 bg-mcm-orange border-4 border-mcm-dark dark:border-[#EBE7DF] px-4 py-2 mb-8 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA]">
              <div className="w-3 h-3 rounded-full bg-mcm-cream dark:bg-mcm-dark animate-pulse" />
              <span className="font-display font-bold text-xs md:text-sm uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF]">
                {t('footer.available')}
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-display font-bold uppercase tracking-tighter text-mcm-dark dark:text-[#EBE7DF] leading-[0.85] mb-6">
              {t('footer.lets')} <br /> the <span className="text-transparent" style={{ WebkitTextStroke: '2px currentColor' }}>{t('footer.thefuture')}</span>
            </h2>
            
            <p className="font-sans font-bold text-lg md:text-xl text-mcm-dark/70 dark:text-[#EBE7DF]/70 max-w-md">
              {t('footer.crafting')}
            </p>
          </ScrollReveal>

          
          <div className="mt-16 pt-8 border-t-4 border-dashed border-mcm-dark/30 dark:border-[#EBE7DF]/30 flex flex-col sm:flex-row justify-between gap-6 font-display font-bold uppercase tracking-widest text-xs md:text-sm text-mcm-dark dark:text-[#EBE7DF]">
            <div className="flex flex-col gap-1">
              <span className="text-mcm-dark/50 dark:text-[#EBE7DF]/50">{t('footer.localtime')}</span>
              <span className="text-mcm-teal dark:text-mcm-orange text-lg">{localTime}</span>
            </div>
            <div className="flex flex-col gap-1 sm:text-right">
              <span className="text-mcm-dark/50 dark:text-[#EBE7DF]/50">{t('footer.location')}</span>
              <span className="text-lg">Cianjur, ID</span>
            </div>
            <div className="flex flex-col gap-1 sm:text-right">
              <span className="text-mcm-dark/50 dark:text-[#EBE7DF]/50">{t('footer.copyrighttext')}</span>
              <span className="text-lg">© {new Date().getFullYear()} Rizky</span>
            </div>
          </div>
        </div>

        
        <div className="lg:col-span-5 bg-mcm-teal dark:bg-[#1A1918] p-8 md:p-16 flex flex-col justify-center relative">
          
          <ScrollReveal variant="slide-left" delay={0.1} className="w-full flex flex-col gap-6 relative z-10">
            <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-widest text-mcm-mustard dark:text-mcm-orange mb-4 border-b-4 border-mcm-mustard/30 dark:border-mcm-orange/30 pb-4 inline-block w-fit">
              Connect
            </h3>
            
            {socials.map((link, idx) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group relative w-full bg-mcm-cream dark:bg-[#201F1D] border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] p-6 flex items-center justify-between shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] dark:shadow-[8px_8px_0px_0px_#F4F1EA] hover:translate-x-2 hover:-translate-y-2 hover:shadow-[14px_14px_0px_0px_rgba(226,166,59,1)] transition-all duration-300"
              >
                <span className="font-display font-bold text-2xl md:text-3xl uppercase text-mcm-dark dark:text-[#EBE7DF]">
                  {link.name}
                </span>
                <div className="w-12 h-12 rounded-full border-4 border-mcm-dark dark:border-[#EBE7DF] flex items-center justify-center bg-mcm-mustard dark:bg-mcm-orange text-mcm-dark group-hover:rotate-45 group-hover:bg-mcm-dark group-hover:text-mcm-cream transition-all duration-300">
                  <ArrowUpRight size={24} strokeWidth={3} />
                </div>
              </a>
            ))}
          </ScrollReveal>
          
        </div>
      </div>

      
      <div className="w-full bg-mcm-orange dark:bg-mcm-dark border-t-8 border-mcm-dark dark:border-[#EBE7DF] py-6 md:py-10 overflow-hidden flex flex-col items-center">
        <VelocityText className="mix-blend-multiply dark:mix-blend-normal w-full">
          <motion.div 
            className="flex whitespace-nowrap w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          >
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-[50px] md:text-[80px] font-display font-bold uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF] px-4">
                RIZKY AL FARID HAFIZH • SOFTWARE ENGINEER •&nbsp;
              </span>
            ))}
          </motion.div>
        </VelocityText>
      </div>

    </footer>
  );
}
