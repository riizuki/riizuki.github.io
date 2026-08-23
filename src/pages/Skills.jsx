import { useTranslation } from 'react-i18next';
import { ScrollReveal, Starburst } from '../components/ScrollAnimations';

export default function Skills() {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true });

  const bgColors = [
    'bg-mcm-orange',
    'bg-mcm-teal',
    'bg-mcm-mustard',
    'bg-mcm-olive'
  ];

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-16 py-20 pb-32">
      
      
      <ScrollReveal variant="slide-left" className="mb-20">
        <div className="flex items-center gap-6 border-b-4 border-mcm-dark dark:border-[#EBE7DF] pb-6">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-mcm-dark dark:text-[#EBE7DF]">
            {t('skills.title')}
          </h1>
          <Starburst size={48} color="var(--color-mcm-orange)" className="animate-spin-slow" />
        </div>
        <p className="text-xl md:text-3xl font-display font-bold uppercase text-mcm-dark/80 dark:text-[#EBE7DF]/80 max-w-2xl">
          {t('skills.subtitle')}
        </p>
      </ScrollReveal>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {Array.isArray(categories) && categories.map((cat, idx) => {
          const bgColorClass = bgColors[idx % bgColors.length];
          return (
            <ScrollReveal key={idx} variant="fade-up" delay={idx * 0.1}>
              <div className={`mcm-card h-full ${bgColorClass} !border-4 p-8 md:p-10 flex flex-col`}>
                
                <div className="flex items-start justify-between mb-8 border-b-4 border-mcm-dark dark:border-[#EBE7DF] pb-4">
                  <h3 className="text-3xl md:text-4xl font-display font-bold uppercase text-mcm-dark dark:text-[#EBE7DF]">
                    {cat.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {cat.items?.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 bg-mcm-cream dark:bg-mcm-dark border-2 border-mcm-dark dark:border-[#EBE7DF] text-mcm-dark dark:text-[#EBE7DF] font-display font-bold uppercase tracking-wider text-sm shadow-[3px_3px_0px_0px_rgba(44,43,41,1)] dark:shadow-[3px_3px_0px_0px_#F4F1EA] hover:translate-y-[-2px] hover:shadow-[5px_5px_0px_0px_rgba(44,43,41,1)] dark:shadow-[5px_5px_0px_0px_#F4F1EA] transition-all cursor-default"
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
  );
}
