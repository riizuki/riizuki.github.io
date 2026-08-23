import { useTranslation } from 'react-i18next';
import { ExternalLink, Code2 } from 'lucide-react';
import { ScrollReveal, Starburst, VelocityText } from '../components/ScrollAnimations';

export default function Projects() {
  const { t } = useTranslation();
  const projectList = t('projects.list', { returnObjects: true });

  return (
    <div className="flex flex-col w-full bg-mcm-cream dark:bg-mcm-dark transition-colors duration-300 pb-32 mt-6">


      <section className="w-full bg-mcm-orange dark:bg-[#14161C] border-b-8 border-mcm-dark dark:border-[#EBE7DF] pt-32 pb-16 px-4 md:px-8 lg:px-16 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <VelocityText>
            <h1 className="text-[55px] md:text-[90px] lg:text-[130px] font-display font-bold uppercase tracking-tighter text-mcm-cream dark:text-mcm-orange leading-[0.85] mb-6">
              {t('nav.projects')}
            </h1>
          </VelocityText>
          <p className="text-xl md:text-3xl font-display font-bold uppercase text-mcm-dark/80 dark:text-[#EBE7DF]/80 max-w-2xl mt-4 relative z-10">
            {t('projects.subtitle')}
          </p>
        </div>
        <Starburst size={400} color="rgba(44,43,41,0.05)" className="absolute -bottom-32 -right-32 pointer-events-none dark:hidden" />
        <Starburst size={200} color="rgba(44,43,41,0.05)" className="absolute top-10 -left-10 pointer-events-none dark:hidden" />
      </section>


      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 pt-20 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

        {Array.isArray(projectList) && projectList.map((project, idx) => {

          const isFullWidth = idx % 3 === 0;

          const isReversed = (idx % 6) === 3;

          return (
            <ScrollReveal
              key={idx}
              variant="fade-up"
              delay={(idx % 3) * 0.1}
              className={isFullWidth ? "md:col-span-2 h-full" : "col-span-1 h-full"}
            >

              <div className="relative h-full flex flex-col border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] md:shadow-[12px_12px_0px_0px_rgba(44,43,41,1)] dark:shadow-[6px_6px_0px_0px_#F4F1EA] md:dark:shadow-[12px_12px_0px_0px_#F4F1EA] bg-mcm-cream dark:bg-[#1F222B] overflow-hidden group">


                {isFullWidth ? (
                  <>
                    <div className="relative w-full overflow-hidden border-b-4 md:border-b-8 border-mcm-dark dark:border-[#EBE7DF]">
                      <div className="absolute top-6 left-6 bg-mcm-mustard text-mcm-dark font-display font-bold px-4 py-2 border-4 border-mcm-dark shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] uppercase tracking-widest z-20 rotate-[-2deg]">
                        No. 0{idx + 1}
                      </div>
                      <div className="absolute inset-0 bg-mcm-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-contain grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                      />
                    </div>
                  </>
                ) : (
                  <div className="relative overflow-hidden bg-mcm-dark w-full border-b-4 md:border-b-8 border-mcm-dark dark:border-[#EBE7DF]">
                    <div className="absolute inset-0 bg-mcm-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-contain grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-mcm-cream dark:bg-mcm-dark text-mcm-dark dark:text-[#EBE7DF] border-4 border-mcm-dark dark:border-[#EBE7DF] px-3 py-1 font-display font-bold text-lg md:text-xl uppercase z-20 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA]">
                      No. 0{idx + 1}
                    </div>
                  </div>
                )}


                <div className={isFullWidth ? `relative z-10 bg-mcm-cream dark:bg-[#14161C] p-8 md:p-12 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8` : `p-6 md:p-10 flex flex-col flex-grow relative bg-mcm-cream dark:bg-[#14161C]`}>


                  <Starburst size={isFullWidth ? 200 : 150} color="rgba(44,43,41,0.03)" className="absolute -bottom-5 -right-5 pointer-events-none" />

                  <div className={`flex flex-col ${isFullWidth ? 'max-w-3xl' : ''} relative z-10`}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags?.map((tag, tIdx) => (
                        <span key={tIdx} className="font-display font-bold text-xs uppercase tracking-widest text-mcm-orange border-2 border-mcm-orange px-2 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className={`font-display font-bold uppercase text-mcm-dark dark:text-[#EBE7DF] mb-4 leading-none ${isFullWidth ? 'text-4xl md:text-5xl lg:text-7xl' : 'text-3xl md:text-4xl'}`}>
                      {project.title}
                    </h3>

                    <p className={`font-sans font-medium text-mcm-dark/80 dark:text-[#EBE7DF]/80 leading-relaxed ${isFullWidth ? 'text-lg lg:text-xl' : 'text-base mb-8 flex-grow'}`}>
                      {project.description}
                    </p>
                  </div>

                  <div className={`flex flex-col sm:flex-row items-center gap-4 relative z-10 ${isFullWidth ? 'w-full md:w-auto shrink-0 md:ml-auto pt-4 md:pt-0 border-t-4 md:border-t-0 border-mcm-dark/20 dark:border-[#EBE7DF]/20' : 'mt-auto pt-6 border-t-4 border-mcm-dark/20 dark:border-[#EBE7DF]/20 w-full'}`}>
                    <a href={project.demoUrl || '#'} className="mcm-btn w-full sm:w-auto px-6 py-3 text-sm md:text-base flex justify-center items-center gap-2">
                      Launch <ExternalLink size={18} strokeWidth={2.5} />
                    </a>
                    <a href={project.codeUrl || '#'} className="mcm-btn-outline w-full sm:w-auto px-6 py-3 text-sm md:text-base flex justify-center items-center gap-2 bg-mcm-cream dark:bg-[#14161C]">
                      Code <Code2 size={18} strokeWidth={2.5} />
                    </a>
                  </div>

                </div>

              </div>

            </ScrollReveal>
          );
        })}
      </div>

    </div>
  );
}
