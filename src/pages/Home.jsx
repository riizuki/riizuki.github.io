import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { ScrollReveal, Starburst } from '../components/ScrollAnimations';

export default function Home() {
  const { t } = useTranslation();
  const projectList = t('projects.list', { returnObjects: true });
  const featuredProject = Array.isArray(projectList) ? projectList[0] : null;
  
  const categories = t('skills.categories', { returnObjects: true });
  const certList = t('certificates.list', { returnObjects: true });
  const featuredCerts = Array.isArray(certList) ? certList.slice(0, 2) : [];

  return (
    <div className="flex flex-col w-full pb-32">
      
      
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-mcm-cream dark:bg-mcm-dark border-b-8 border-mcm-dark dark:border-[#EBE7DF]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 h-full min-h-[calc(100vh-6rem)]">
          
          <div className="lg:col-span-5 relative w-full h-full min-h-[500px] border-r-0 lg:border-r-8 border-mcm-dark dark:border-[#EBE7DF] bg-mcm-mustard overflow-hidden flex flex-col justify-end">
            <Starburst size={300} color="var(--color-mcm-orange)" className="absolute -top-16 -left-16 animate-spin-slow-reverse" />
            <ScrollReveal variant="fade-up" className="relative w-full h-[85%] border-t-8 border-mcm-dark dark:border-[#EBE7DF] overflow-hidden bg-mcm-dark dark:bg-mcm-cream z-10 group">
              <img 
                src="/images/profile/profile.JPG" 
                className="w-full h-full object-cover object-top grayscale contrast-[1.2] sepia-[0.2] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700" 
                alt="Rizky Profile" 
              />
              <div className="absolute inset-0 bg-mcm-orange/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />
            </ScrollReveal>
            <div className="absolute top-8 right-8 bg-mcm-cream dark:bg-mcm-dark border-4 border-mcm-dark dark:border-[#EBE7DF] p-3 shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] dark:shadow-[6px_6px_0px_0px_#F4F1EA] z-20 rotate-6">
               <span className="font-display font-bold uppercase text-mcm-dark dark:text-[#EBE7DF] text-xl leading-none tracking-widest block text-center">Vol. 1 A</span>
            </div>
          </div>

          
          <div className="lg:col-span-7 flex flex-col justify-center items-start px-6 md:px-12 lg:px-16 py-16 relative">
            <div className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-mcm-orange rounded-tl-[300px] -z-10 opacity-20" />
            <ScrollReveal variant="slide-right">
              <div className="bg-mcm-teal text-mcm-cream dark:text-mcm-dark border-2 border-mcm-dark dark:border-[#EBE7DF] px-4 py-1.5 font-display font-bold uppercase tracking-widest text-sm shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA]">
                {t('hero.role')}
              </div>
            </ScrollReveal>
            <ScrollReveal variant="pop-in" delay={0.1}>
              <h1 className="font-display font-bold uppercase leading-[0.85] text-mcm-dark dark:text-[#EBE7DF] text-5xl md:text-6xl lg:text-[70px] xl:text-[80px] tracking-tight mt-8 flex flex-col gap-3">
                <span className="text-2xl md:text-3xl tracking-widest font-medium text-mcm-mustard font-sans" style={{ textShadow: '2px 2px 0 #2C2B29' }}>
                  {t('hero.greeting')}
                </span>
                <span className="w-full flex flex-col whitespace-nowrap">
                  <span>Rizky Al</span>
                  <span>Farid Hafizh</span>
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.2}>
              <p className="font-sans text-xl md:text-2xl text-mcm-dark dark:text-[#EBE7DF]/90 max-w-xl border-l-8 border-mcm-dark dark:border-[#EBE7DF] pl-6 mt-10 leading-relaxed font-bold">
                {t('hero.description')}
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fade-up" delay={0.3} className="mt-12">
              <a href="#contact" className="mcm-btn px-10 py-5 inline-flex items-center gap-4 text-xl group">
                Start a Project <ArrowRight size={28} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      
      <section className="w-full bg-mcm-teal border-y-8 border-mcm-dark dark:border-[#EBE7DF] relative overflow-hidden flex items-center py-6 md:py-8 z-20">
        <div className="absolute inset-0 flex items-center whitespace-nowrap opacity-10 pointer-events-none -z-10">
          <h2 className="text-[120px] font-display font-bold uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF]">
            ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME
          </h2>
        </div>
        
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <ScrollReveal variant="fade-up" className="flex items-center gap-6 flex-1">
            <div className="w-16 h-16 bg-mcm-orange rounded-full flex items-center justify-center border-4 border-mcm-dark dark:border-[#EBE7DF] shrink-0 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA]">
              <span className="font-display font-bold text-4xl text-mcm-dark dark:text-[#EBE7DF] mt-2">"</span>
            </div>
            <p className="font-display font-bold text-xl md:text-2xl uppercase text-mcm-cream dark:text-mcm-dark leading-snug max-w-3xl">
              {t('about.content1').substring(0, 100)}...
            </p>
          </ScrollReveal>

          <ScrollReveal variant="slide-left" delay={0.2} className="shrink-0 w-full md:w-auto">
            <NavLink to="/about" className="mcm-btn px-8 py-4 w-full md:w-auto inline-flex items-center justify-center gap-3 text-lg group bg-mcm-cream dark:bg-mcm-dark text-mcm-dark dark:text-[#EBE7DF] hover:bg-mcm-mustard border-4 shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] dark:shadow-[6px_6px_0px_0px_#F4F1EA]">
              Read Full Bio <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </ScrollReveal>
        </div>
      </section>

      
      <section className="max-w-7xl mx-auto w-full px-4 lg:px-8 mt-24 mb-12">
        <ScrollReveal variant="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 border-b-8 border-mcm-dark dark:border-[#EBE7DF] pb-6 gap-6">
            <div className="flex items-center gap-4">
              <Starburst size={40} color="var(--color-mcm-orange)" className="animate-spin-slow-reverse" />
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF]">
                {t('home.featured')}
              </h2>
            </div>
            <NavLink to="/projects" className="mcm-btn-outline px-6 py-3 font-display font-bold uppercase flex items-center gap-2 group border-4 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] bg-mcm-cream dark:bg-mcm-dark">
              {t('home.viewall')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>
        </ScrollReveal>

        {featuredProject && (
          <ScrollReveal variant="pop-in">
            <div className="relative w-full h-[500px] lg:h-[600px] flex items-center lg:items-end justify-start lg:justify-end border-8 border-mcm-dark dark:border-[#EBE7DF] shadow-[16px_16px_0px_0px_rgba(44,43,41,1)] dark:shadow-[16px_16px_0px_0px_#F4F1EA] group overflow-hidden bg-mcm-dark dark:bg-mcm-cream">
              
              
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700" 
              />

              <div className="absolute top-6 left-6 bg-mcm-mustard text-mcm-dark dark:text-[#EBE7DF] font-display font-bold px-4 py-2 border-4 border-mcm-dark dark:border-[#EBE7DF] shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] uppercase tracking-widest z-10 rotate-[-2deg]">
                Latest Edition
              </div>

              
              <div className="relative z-10 bg-mcm-cream dark:bg-mcm-dark border-t-8 lg:border-t-0 lg:border-l-8 lg:border-t-8 border-mcm-dark dark:border-[#EBE7DF] p-8 md:p-10 w-full lg:w-[600px] lg:max-w-[60%] flex flex-col justify-center transform lg:translate-x-8 lg:translate-y-8">
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredProject.tags?.map((tag, i) => (
                    <span key={i} className="text-xs font-display font-bold uppercase tracking-widest text-mcm-teal border-2 border-mcm-teal px-3 py-1 bg-mcm-teal/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="font-display font-bold text-3xl md:text-5xl uppercase mb-4 text-mcm-dark dark:text-[#EBE7DF] leading-none">
                  {featuredProject.title}
                </h3>
                
                <p className="font-sans text-base text-mcm-dark dark:text-[#EBE7DF]/90 mb-6 border-l-4 border-mcm-orange pl-4 font-medium line-clamp-2">
                  {featuredProject.description}
                </p>
                
                <div>
                  <a href={featuredProject.demoUrl} className="mcm-btn px-6 py-3 inline-flex items-center gap-2 text-sm border-4 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA]">
                    Launch Project <ArrowUpRight size={18} strokeWidth={3} />
                  </a>
                </div>

              </div>
            </div>
          </ScrollReveal>
        )}
      </section>

      
      <section className="max-w-7xl mx-auto w-full px-4 lg:px-8 mt-32 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        
        <div className="lg:col-span-7">
          <ScrollReveal variant="slide-right" className="flex items-center justify-between border-b-8 border-mcm-dark dark:border-[#EBE7DF] pb-4 mb-8">
            <h2 className="text-4xl font-display font-bold uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF]">{t('home.expertise')}</h2>
            <NavLink to="/skills" className="mcm-btn-outline px-4 py-2 font-display font-bold uppercase border-4 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] bg-mcm-cream dark:bg-mcm-dark">
              {t('home.allskills')}
            </NavLink>
          </ScrollReveal>
          
          <div className="flex flex-col gap-4">
            {Array.isArray(categories) && categories.slice(0, 3).map((cat, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 0.1}>
                <div className="bg-mcm-cream dark:bg-mcm-dark border-4 border-mcm-dark dark:border-[#EBE7DF] p-5 shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] dark:shadow-[6px_6px_0px_0px_#F4F1EA] flex flex-col md:flex-row md:items-center gap-4 hover:-translate-y-1 transition-transform">
                  <div className="bg-mcm-orange text-mcm-cream dark:text-mcm-dark font-display font-bold uppercase px-4 py-2 border-2 border-mcm-dark dark:border-[#EBE7DF] whitespace-nowrap text-center md:w-auto md:min-w-[250px] shrink-0">
                    {cat.name}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items?.slice(0, 4).map((skill, sIdx) => (
                      <span key={sIdx} className="text-sm font-sans font-bold text-mcm-dark dark:text-[#EBE7DF]/70">
                        {skill} {sIdx < 3 && '•'}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        
        <div className="lg:col-span-5">
          <ScrollReveal variant="slide-left" className="flex items-center justify-between border-b-8 border-mcm-dark dark:border-[#EBE7DF] pb-4 mb-8">
            <h2 className="text-4xl font-display font-bold uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF]">{t('home.honors')}</h2>
            <NavLink to="/certificates" className="mcm-btn-outline px-4 py-2 font-display font-bold uppercase border-4 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] bg-mcm-mustard">
              {t('home.viewall')}
            </NavLink>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {featuredCerts.map((cert, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 0.1}>
                <div className="bg-mcm-cream dark:bg-mcm-dark border-4 border-mcm-dark dark:border-[#EBE7DF] p-2 shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] dark:shadow-[6px_6px_0px_0px_#F4F1EA] rotate-1 hover:rotate-0 transition-transform">
                  <div className="border-2 border-mcm-dark dark:border-[#EBE7DF]/30 p-4 flex flex-col gap-2 relative">
                    
                    <div className="absolute top-2 right-2 w-12 h-12 border-2 border-mcm-teal rounded-full flex items-center justify-center opacity-50 rotate-12">
                      <span className="text-mcm-teal font-display font-bold text-[10px] uppercase">Verified</span>
                    </div>
                    
                    <h3 className="text-xl font-display font-bold uppercase text-mcm-dark dark:text-[#EBE7DF] leading-tight pr-10">
                      {cert.title}
                    </h3>
                    <span className="text-xs font-sans font-bold text-mcm-teal uppercase tracking-widest">
                      {cert.issuer}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </section>

    </div>
  );
}
