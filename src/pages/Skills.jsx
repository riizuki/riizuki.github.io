import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ScrollReveal, Starburst } from '../components/ScrollAnimations';
import { Terminal, Database, Smartphone, Wrench } from 'lucide-react';

export default function Skills() {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true });

  const categoryStyles = [
    {
      bg: 'bg-mcm-mustard',
      headerBg: 'bg-mcm-dark dark:bg-[#EBE7DF]',
      headerText: 'text-mcm-mustard dark:text-mcm-dark',
      text: 'text-mcm-dark',
      pillHover: 'hover:bg-mcm-mustard hover:text-mcm-dark hover:border-mcm-dark hover:shadow-[2px_2px_0px_0px_rgba(44,43,41,1)]',
      icon: <Terminal size={32} strokeWidth={2.5} />,
      dotPattern: 'radial-gradient(circle, rgba(44,43,41,0.12) 2px, transparent 2px)',
      starburstColor: 'var(--color-mcm-teal)',
    },
    {
      bg: 'bg-mcm-teal',
      headerBg: 'bg-mcm-dark dark:bg-[#EBE7DF]',
      headerText: 'text-mcm-teal dark:text-mcm-dark',
      text: 'text-mcm-cream',
      pillHover: 'hover:bg-mcm-teal hover:text-mcm-cream hover:border-mcm-dark hover:shadow-[2px_2px_0px_0px_rgba(44,43,41,1)]',
      icon: <Database size={32} strokeWidth={2.5} />,
      dotPattern: 'radial-gradient(circle, rgba(244,241,234,0.12) 2px, transparent 2px)',
      starburstColor: 'var(--color-mcm-mustard)',
    },
    {
      bg: 'bg-mcm-orange',
      headerBg: 'bg-mcm-dark dark:bg-[#EBE7DF]',
      headerText: 'text-mcm-orange dark:text-mcm-dark',
      text: 'text-mcm-cream',
      pillHover: 'hover:bg-mcm-orange hover:text-mcm-cream hover:border-mcm-dark hover:shadow-[2px_2px_0px_0px_rgba(44,43,41,1)]',
      icon: <Smartphone size={32} strokeWidth={2.5} />,
      dotPattern: 'radial-gradient(circle, rgba(244,241,234,0.12) 2px, transparent 2px)',
      starburstColor: 'var(--color-mcm-olive)',
    },
    {
      bg: 'bg-mcm-olive',
      headerBg: 'bg-mcm-dark dark:bg-[#EBE7DF]',
      headerText: 'text-mcm-olive dark:text-mcm-dark',
      text: 'text-mcm-cream',
      pillHover: 'hover:bg-mcm-olive hover:text-mcm-cream hover:border-mcm-dark hover:shadow-[2px_2px_0px_0px_rgba(44,43,41,1)]',
      icon: <Wrench size={32} strokeWidth={2.5} />,
      dotPattern: 'radial-gradient(circle, rgba(244,241,234,0.12) 2px, transparent 2px)',
      starburstColor: 'var(--color-mcm-orange)',
    },
  ];

  return (
    <div className="flex flex-col w-full bg-mcm-cream dark:bg-mcm-dark transition-colors duration-300 pb-32 mt-6">

      {/* ===== PAGE HEADER ===== */}
      <section className="w-full bg-mcm-teal dark:bg-mcm-dark border-b-8 border-mcm-dark dark:border-[#EBE7DF] pt-28 md:pt-32 pb-10 md:pb-14 px-4 md:px-8 lg:px-12 relative overflow-hidden z-10">
        {/* Dot pattern background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(44,43,41,0.08) 3px, transparent 3px)', backgroundSize: '24px 24px' }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-16">

            {/* Title with Starburst */}
            <ScrollReveal variant="slide-right" className="shrink-0">
              <div className="flex items-center gap-5 md:gap-8">
                <h1 className="text-[52px] md:text-7xl lg:text-[100px] font-display font-bold uppercase tracking-tighter text-mcm-cream dark:text-mcm-teal leading-none">
                  {t('skills.title')}
                </h1>
                <Starburst size={64} color="var(--color-mcm-mustard)" className="animate-spin-slow-reverse shrink-0 hidden md:block" />
              </div>
            </ScrollReveal>

            {/* Subtitle quote card */}
            <ScrollReveal variant="pop-in" delay={0.2} className="lg:max-w-md">
              <div className="bg-mcm-cream dark:bg-[#1F222B] p-4 md:p-6 border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] md:shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] md:dark:shadow-[8px_8px_0px_0px_#F4F1EA] rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
                <p className="font-display font-bold text-base md:text-lg uppercase text-mcm-dark dark:text-[#EBE7DF] leading-snug border-l-4 md:border-l-8 border-mcm-mustard pl-4">
                  {t('skills.subtitle')}
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* Background starbursts */}
        <Starburst size={500} color="rgba(44,43,41,0.06)" className="absolute -right-40 -bottom-40 pointer-events-none animate-spin-slow" />
        <Starburst size={180} color="rgba(244,241,234,0.08)" className="absolute top-8 -left-8 pointer-events-none" />
      </section>


      {/* ===== MARQUEE STRIP ===== */}
      <div className="w-full bg-mcm-dark dark:bg-[#14161C] border-b-8 border-mcm-dark dark:border-[#EBE7DF] py-3 md:py-4 overflow-hidden flex z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="flex whitespace-nowrap items-center"
        >
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 md:gap-8 mx-3 md:mx-4">
              <span className="font-display font-bold text-2xl md:text-4xl uppercase tracking-widest text-mcm-mustard">FRONTEND</span>
              <Starburst size={20} color="var(--color-mcm-teal)" />
              <span className="font-display font-bold text-2xl md:text-4xl uppercase tracking-widest text-mcm-cream dark:text-[#EBE7DF]">BACKEND</span>
              <Starburst size={20} color="var(--color-mcm-orange)" />
              <span className="font-display font-bold text-2xl md:text-4xl uppercase tracking-widest text-mcm-teal">MOBILE</span>
              <Starburst size={20} color="var(--color-mcm-mustard)" />
              <span className="font-display font-bold text-2xl md:text-4xl uppercase tracking-widest text-mcm-orange">TOOLS</span>
              <Starburst size={20} color="var(--color-mcm-olive)" />
            </div>
          ))}
        </motion.div>
      </div>


      {/* ===== SKILLS BENTO GRID ===== */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-12 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">

          {Array.isArray(categories) && categories.map((cat, idx) => {
            const style = categoryStyles[idx % categoryStyles.length];
            const isHero = idx === 0;

            return (
              <ScrollReveal
                key={idx}
                variant="fade-up"
                delay={idx * 0.1}
                className={isHero ? "md:col-span-2" : "col-span-1"}
              >
                <div
                  className={`relative w-full border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] md:shadow-[12px_12px_0px_0px_rgba(44,43,41,1)] dark:shadow-[6px_6px_0px_0px_#F4F1EA] md:dark:shadow-[12px_12px_0px_0px_#F4F1EA] overflow-hidden group hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 ${style.bg} ${style.text}`}
                >
                  {/* Dot pattern overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: style.dotPattern, backgroundSize: '20px 20px' }}
                  />

                  {/* Background Starburst */}
                  <Starburst
                    size={isHero ? 300 : 200}
                    color="rgba(44,43,41,0.04)"
                    className="absolute -right-12 -bottom-12 pointer-events-none group-hover:rotate-45 transition-transform duration-700"
                  />

                  {/* Card Header Strip */}
                  <div className={`relative z-10 ${style.headerBg} px-4 md:px-6 py-3 md:py-4 flex items-center justify-between`}>
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`${style.headerText}`}>
                        {style.icon}
                      </div>
                      <h3 className={`font-display font-bold uppercase tracking-widest text-sm md:text-base ${style.headerText}`}>
                        {cat.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`font-display font-bold text-xs uppercase tracking-widest ${style.headerText} opacity-50`}>
                        {cat.items?.length || 0} skills
                      </span>
                    </div>
                  </div>

                  {/* Skills Content */}
                  <div className={`relative z-10 p-5 md:p-8 ${isHero ? 'lg:p-10' : ''}`}>

                    {/* Category title — big and bold */}
                    <div className={`mb-6 md:mb-8 ${isHero ? 'flex flex-col md:flex-row md:items-end md:justify-between gap-4' : ''}`}>
                      <h2 className={`font-display font-bold uppercase leading-[0.85] tracking-tighter ${isHero ? 'text-5xl md:text-6xl lg:text-8xl' : 'text-4xl md:text-5xl'}`}>
                        {cat.name.split(' ')[0]}
                        <span className="block opacity-40">
                          {cat.name.split(' ').slice(1).join(' ')}
                        </span>
                      </h2>
                      {isHero && (
                        <Starburst size={56} color="currentColor" className="opacity-30 animate-spin-slow hidden md:block" />
                      )}
                    </div>

                    {/* Skill Pills */}
                    <div className={`flex flex-wrap gap-2.5 md:gap-3 ${isHero ? 'lg:gap-4' : ''}`}>
                      {cat.items?.map((skill, sIdx) => (
                        <motion.span
                          key={sIdx}
                          initial={{ opacity: 0, y: 15 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: sIdx * 0.04, type: 'spring', stiffness: 200, damping: 20 }}
                          viewport={{ once: true }}
                          className={`
                            px-4 py-2 md:px-5 md:py-2.5
                            border-2 md:border-4 border-mcm-dark dark:border-mcm-dark
                            bg-mcm-cream dark:bg-mcm-dark text-mcm-dark dark:text-[#EBE7DF]
                            font-display font-bold uppercase tracking-widest text-xs md:text-sm
                            shadow-[3px_3px_0px_0px_rgba(44,43,41,1)] dark:shadow-[3px_3px_0px_0px_rgba(44,43,41,0.5)]
                            ${style.pillHover}
                            transition-all duration-200 cursor-default select-none
                            ${isHero ? 'lg:px-6 lg:py-3 lg:text-base' : ''}
                          `}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent bar */}
                  <div className="relative z-10 h-2 md:h-3 bg-mcm-dark/15" />

                </div>
              </ScrollReveal>
            );
          })}

        </div>
      </div>

    </div>
  );
}
