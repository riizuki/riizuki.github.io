import { useTranslation } from 'react-i18next';
import { ScrollReveal, Starburst } from '../components/ScrollAnimations';
import { Terminal, Database, Smartphone, Wrench } from 'lucide-react';

export default function Skills() {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true });

  const categoryStyles = [
    { 
      bg: 'bg-mcm-mustard dark:bg-[#FFD600]', 
      text: 'text-mcm-dark dark:text-mcm-dark',
      icon: <Terminal size={48} strokeWidth={2.5} className="text-current" />,
      bentoClass: 'md:col-span-2 lg:row-span-2 flex flex-col justify-between'
    },
    { 
      bg: 'bg-mcm-teal dark:bg-[#00F0FF]', 
      text: 'text-mcm-cream dark:text-mcm-dark',
      icon: <Database size={40} strokeWidth={2.5} className="text-current" />,
      bentoClass: 'md:col-span-2 lg:row-span-1 flex flex-col justify-between'
    },
    { 
      bg: 'bg-mcm-orange dark:bg-[#FF4D00]', 
      text: 'text-mcm-cream dark:text-mcm-dark',
      icon: <Smartphone size={40} strokeWidth={2.5} className="text-current" />,
      bentoClass: 'md:col-span-1 lg:col-span-2 lg:row-span-1 flex flex-col justify-between'
    },
    { 
      bg: 'bg-mcm-olive dark:bg-[#39FF14]', 
      text: 'text-mcm-cream dark:text-mcm-dark',
      icon: <Wrench size={40} strokeWidth={2.5} className="text-current" />,
      bentoClass: 'md:col-span-2 lg:col-span-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8'
    }
  ];

  return (
    <div className="flex flex-col w-full bg-mcm-cream dark:bg-mcm-dark transition-colors duration-300 pb-32 mt-6">
      
      {/* Page Header (Minimalist) */}
      <section className="w-full pt-32 pb-12 px-6 lg:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b-8 border-mcm-dark dark:border-[#EBE7DF]">
        <ScrollReveal variant="slide-right">
          <div className="flex items-center gap-4">
            <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter text-mcm-dark dark:text-[#EBE7DF] leading-none">
              {t('skills.title')}
            </h1>
            <Starburst size={48} color="var(--color-mcm-orange)" className="animate-spin-slow-reverse" />
          </div>
        </ScrollReveal>
        
        <ScrollReveal variant="slide-left" delay={0.2} className="md:w-1/3">
          <p className="text-lg md:text-xl font-sans font-bold uppercase text-mcm-dark/80 dark:text-[#EBE7DF]/80 border-l-4 border-mcm-orange pl-4">
            {t('skills.subtitle')}
          </p>
        </ScrollReveal>
      </section>

      {/* Bento Grid Layout */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(280px,auto)]">
          {Array.isArray(categories) && categories.map((cat, idx) => {
            const style = categoryStyles[idx % categoryStyles.length];
            return (
              <ScrollReveal 
                key={idx} 
                variant="fade-up" 
                delay={idx * 0.1}
                className={style.bentoClass}
              >
                <div className={`w-full h-full border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] p-6 md:p-10 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] md:shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] md:dark:shadow-[8px_8px_0px_0px_#F4F1EA] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] md:hover:shadow-[16px_16px_0px_0px_rgba(44,43,41,1)] hover:shadow-[8px_8px_0px_0px_#F4F1EA] md:hover:shadow-[16px_16px_0px_0px_#F4F1EA] transition-all duration-300 group ${style.bg} ${style.text}`}>
                  
                  {/* Category Header */}
                  <div className={`flex flex-col gap-4 md:gap-6 mb-8 w-full ${idx === 3 ? 'md:w-1/2 lg:w-2/5' : ''}`}>
                    <div className="w-16 h-16 bg-mcm-cream dark:bg-mcm-dark text-mcm-dark dark:text-[#EBE7DF] border-4 border-mcm-dark dark:border-[#EBE7DF] flex items-center justify-center shadow-[4px_4px_0px_0px_currentColor] group-hover:scale-110 transition-transform duration-300 shrink-0">
                      {style.icon}
                    </div>
                    <h3 className={`font-display font-bold uppercase leading-tight ${idx === 0 ? 'text-4xl md:text-5xl lg:text-7xl' : idx === 3 ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl lg:text-5xl'}`}>
                      {cat.name}
                    </h3>
                  </div>

                  {/* Skills Pills */}
                  <div className={`flex flex-wrap gap-3 ${idx === 3 ? 'md:w-1/2 lg:w-3/5 md:justify-end mt-0' : 'mt-auto'}`}>
                    {cat.items?.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-4 py-2 border-2 md:border-4 border-mcm-dark dark:border-mcm-dark bg-mcm-cream dark:bg-mcm-dark text-mcm-dark dark:text-[#EBE7DF] font-display font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] group-hover:bg-transparent group-hover:text-current group-hover:border-current group-hover:shadow-[4px_4px_0px_0px_currentColor] transition-all duration-300`}
                      >
                        {skill}
                      </span>
                    ))}
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
