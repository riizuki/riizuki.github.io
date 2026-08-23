import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Starburst } from '../components/ScrollAnimations';
import { ScrollReveal } from '../components/ScrollAnimations';

export default function About() {
  const { t } = useTranslation();
  const jobs = t('experience.jobs', { returnObjects: true });

  const bioText = t('about.content1') || "";
  const firstLetter = bioText.charAt(0);
  const restText = bioText.slice(1);
  const words = restText.trim().split(' ');
  const highlightedText = " " + words.slice(0, 3).join(' ');
  const normalText = " " + words.slice(3).join(' ');

  return (
    <div className="flex flex-col w-full bg-mcm-cream dark:bg-mcm-dark transition-colors duration-300">


      <section className="w-full bg-mcm-orange dark:bg-mcm-dark border-b-8 border-mcm-dark dark:border-[#EBE7DF] pt-24 pb-8 px-4 md:px-8 lg:px-12 relative overflow-hidden z-10 mt-6">
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-center gap-6 md:gap-10">

          <ScrollReveal variant="slide-left" className="shrink-0">
            <h1 className="text-[40px] md:text-[60px] lg:text-[80px] font-display font-bold uppercase tracking-tighter text-mcm-cream leading-none">
              {t('about.behind')} <span className="text-mcm-dark dark:text-mcm-orange">{t('about.design')}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="pop-in" delay={0.2} className="w-full md:max-w-sm lg:max-w-md z-20 md:mb-4">
            <div className="bg-mcm-cream dark:bg-[#1F222B] p-5 md:p-6 border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] dark:shadow-[8px_8px_0px_0px_#F4F1EA] rotate-2 hover:rotate-0 transition-transform">
              <p className="font-display font-bold text-lg md:text-xl uppercase text-mcm-dark dark:text-[#EBE7DF] leading-snug border-l-4 md:border-l-8 border-mcm-teal pl-4">
                {t('about.quote')}
              </p>
            </div>
          </ScrollReveal>

        </div>

        <Starburst size={600} color="rgba(44,43,41,0.08)" className="absolute -right-32 -bottom-48 pointer-events-none animate-spin-slow" />
      </section>


      <div className="w-full bg-mcm-dark dark:bg-[#14161C] border-b-8 border-mcm-dark dark:border-[#EBE7DF] py-4 overflow-hidden flex z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="flex whitespace-nowrap items-center"
        >
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4">
              <span className="font-display font-bold text-3xl md:text-5xl uppercase tracking-widest text-mcm-mustard">{t('about.marquee.experience')}</span>
              <Starburst size={32} color="var(--color-mcm-teal)" />
              <span className="font-display font-bold text-3xl md:text-5xl uppercase tracking-widest text-mcm-cream">{t('about.marquee.background')}</span>
              <Starburst size={32} color="var(--color-mcm-orange)" />
              <span className="font-display font-bold text-3xl md:text-5xl uppercase tracking-widest text-mcm-teal">{t('about.marquee.history')}</span>
              <Starburst size={32} color="var(--color-mcm-mustard)" />
            </div>
          ))}
        </motion.div>
      </div>


      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-20 pb-12">
        <ScrollReveal variant="fade-up">

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 border-8 border-mcm-dark dark:border-[#EBE7DF] shadow-[16px_16px_0px_0px_rgba(44,43,41,1)] dark:shadow-[16px_16px_0px_0px_#F4F1EA] bg-mcm-cream dark:bg-[#14161C] overflow-hidden">


            <div className="lg:col-span-5 relative border-b-8 lg:border-b-0 lg:border-r-8 border-mcm-dark dark:border-[#EBE7DF] group overflow-hidden">
              <img
                src="/images/profile/profile.JPG"
                alt="Rizky Al Farid Hafizh"
                className="w-full h-full object-cover min-h-[400px] grayscale contrast-125 sepia-[0.3] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 bg-mcm-mustard border-4 border-mcm-dark font-display font-bold uppercase px-4 py-2 text-mcm-dark text-sm tracking-widest shadow-[4px_4px_0px_0px_rgba(44,43,41,1)]">
                EST. 2004
              </div>
            </div>


            <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center">
              <h2 className="font-display font-bold uppercase text-2xl tracking-widest text-mcm-teal dark:text-mcm-orange mb-8 flex items-center gap-4">
                <Starburst size={24} color="currentColor" />
                The Architect
              </h2>

              <div className="font-sans text-xl md:text-2xl text-mcm-dark dark:text-[#EBE7DF] leading-relaxed font-medium mb-8">
                <span className="float-left font-sans font-bold text-[100px] md:text-[130px] leading-[0.75] text-mcm-dark dark:text-[#EBE7DF] mr-4 mt-2">
                  {firstLetter}
                </span>
                <span className="uppercase font-display font-bold tracking-wider text-mcm-teal dark:text-mcm-mustard">
                  {highlightedText}
                </span>
                {normalText}
              </div>

              <div className="border-t-4 border-mcm-dark dark:border-[#EBE7DF] pt-8">
                <p className="font-sans text-lg md:text-xl text-mcm-dark/80 dark:text-[#EBE7DF]/80 max-w-2xl">
                  {t('about.content2')}
                </p>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>


      <div className="w-full max-w-4xl mx-auto px-4 md:px-8 lg:px-12 pt-16 pb-32">

        <ScrollReveal variant="fade-up" className="flex items-center gap-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter text-mcm-dark dark:text-[#EBE7DF]">
            {t('about.career')}
          </h2>
          <div className="h-1 md:h-2 flex-grow bg-mcm-dark dark:bg-[#EBE7DF]"></div>
        </ScrollReveal>


        <div className="relative pl-6 md:pl-16 ml-10 md:ml-12 border-l-8 border-mcm-dark dark:border-[#EBE7DF]">
          {Array.isArray(jobs) && jobs.map((job, idx) => {

            const colors = [
              'bg-mcm-cream dark:bg-[#1F222B]',
              'bg-mcm-mustard dark:bg-[#14161C]',
              'bg-[#F27E63] dark:bg-[#25221F]'
            ];
            const cardBgClass = colors[idx % colors.length];

            return (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 0.1} className="relative mb-12 last:mb-0 group">


                <div className="absolute -left-[20px] md:-left-[32px] top-0 bg-mcm-cream dark:bg-[#14161C] p-1 md:p-2 rounded-full border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] z-10 group-hover:rotate-90 group-hover:scale-110 transition-transform duration-500 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA]">
                  <Starburst size={24} className="md:w-8 md:h-8 text-mcm-orange" color="currentColor" />
                </div>


                <div className="absolute -left-6 md:-left-16 top-6 md:top-6 w-6 md:w-16 h-1 md:h-2 bg-mcm-dark dark:bg-[#EBE7DF]"></div>


                <div className={`relative ${cardBgClass} border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] md:shadow-[12px_12px_0px_0px_rgba(44,43,41,1)] dark:shadow-[6px_6px_0px_0px_#F4F1EA] md:dark:shadow-[12px_12px_0px_0px_#F4F1EA] p-5 md:p-6 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] md:hover:shadow-[16px_16px_0px_0px_rgba(44,43,41,1)] hover:dark:shadow-[8px_8px_0px_0px_#F4F1EA] md:hover:dark:shadow-[16px_16px_0px_0px_#F4F1EA] transition-all duration-300 overflow-hidden`}>


                  <Starburst size={200} color="rgba(44,43,41,0.03)" className="absolute -right-10 -top-10 pointer-events-none" />

                  <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <span className="font-sans font-bold text-xs md:text-sm text-mcm-dark/60 dark:text-[#EBE7DF]/50 uppercase tracking-widest block mb-1">
                        {job.period}
                      </span>
                      <h4 className="font-display font-bold text-2xl md:text-3xl text-mcm-dark dark:text-[#EBE7DF] uppercase leading-none">
                        {job.company}
                      </h4>
                    </div>


                    <div className="bg-mcm-dark dark:bg-[#EBE7DF] px-3 py-1.5 md:px-4 md:py-2 self-start transform rotate-[-2deg] shadow-[3px_3px_0px_0px_var(--color-mcm-teal)] dark:shadow-[3px_3px_0px_0px_var(--color-mcm-orange)] mt-3 md:mt-0">
                      <h3 className="font-display font-bold text-base md:text-lg uppercase text-mcm-cream dark:text-mcm-dark leading-none">
                        {job.role}
                      </h3>
                    </div>
                  </div>

                  {job.description && (
                    <div className="relative z-10 border-t-2 md:border-t-4 border-mcm-dark/20 dark:border-[#EBE7DF]/20 pt-4 mt-2">
                      <p className="font-sans font-medium text-base md:text-lg text-mcm-dark/90 dark:text-[#EBE7DF]/80 max-w-2xl leading-relaxed">
                        {job.description}
                      </p>
                    </div>
                  )}

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

    </div>
  );
}
