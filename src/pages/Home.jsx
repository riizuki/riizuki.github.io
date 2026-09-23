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


      <section className="relative min-h-screen flex flex-col overflow-hidden bg-mcm-cream dark:bg-mcm-dark border-b-8 border-mcm-dark dark:border-[#EBE7DF]">

        {/* Main hero content */}
        <div className="flex-grow flex items-center relative pt-20 lg:pt-24">

          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(44,43,41,0.04) 2px, transparent 2px)', backgroundSize: '32px 32px' }} />
          <Starburst size={400} color="rgba(44,43,41,0.04)" className="absolute -left-24 -bottom-24 pointer-events-none animate-spin-slow" />
          <div className="absolute top-12 right-12 w-16 md:w-24 h-16 md:h-24 bg-mcm-mustard rounded-full border-4 border-mcm-dark dark:border-[#EBE7DF] opacity-40 hidden lg:block" />
          <div className="absolute bottom-24 right-1/3 w-8 md:w-12 h-8 md:h-12 bg-mcm-orange border-4 border-mcm-dark dark:border-[#EBE7DF] opacity-30 rotate-12 hidden lg:block" />

          <div className="max-w-7xl mx-auto w-full px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 relative z-10">

            {/* Role badge */}
            <ScrollReveal variant="slide-right" className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-3">
                <Starburst size={20} color="var(--color-mcm-teal)" className="animate-spin-slow-reverse" />
                <div className="bg-mcm-teal text-mcm-cream dark:text-mcm-dark border-2 md:border-4 border-mcm-dark dark:border-[#EBE7DF] px-4 py-1.5 md:px-5 md:py-2 font-display font-bold uppercase tracking-widest text-xs md:text-sm shadow-[3px_3px_0px_0px_rgba(44,43,41,1)] md:shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[3px_3px_0px_0px_#F4F1EA] md:dark:shadow-[4px_4px_0px_0px_#F4F1EA]">
                  {t('hero.role')}
                </div>
              </div>
            </ScrollReveal>

            {/* Main layout: Name + Profile card */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-0">

              {/* Left: Name + Description */}
              <div className="flex-grow lg:pr-8">

                {/* Greeting */}
                <ScrollReveal variant="fade-up" delay={0.05}>
                  <span className="font-sans text-xl md:text-2xl lg:text-3xl font-bold text-mcm-mustard tracking-widest uppercase block mb-3 md:mb-4" style={{ textShadow: '2px 2px 0 #2C2B29' }}>
                    {t('hero.greeting')}
                  </span>
                </ScrollReveal>

                {/* Name — massive, overlapping composition */}
                <ScrollReveal variant="pop-in" delay={0.1}>
                  <h1 className="font-display font-bold uppercase leading-[0.82] text-mcm-dark dark:text-[#EBE7DF] tracking-tight">
                    <span className="block text-6xl md:text-[90px] lg:text-[110px] xl:text-[130px]">
                      Rizky Al
                    </span>
                    <span className="block text-5xl md:text-[75px] lg:text-[95px] xl:text-[110px] relative">
                      Farid
                      <span className="text-mcm-teal dark:text-mcm-teal ml-2 md:ml-4">Hafizh</span>
                      <span className="absolute -bottom-1 left-0 w-2/3 h-2 md:h-3 bg-mcm-orange opacity-60" />
                    </span>
                  </h1>
                </ScrollReveal>

                {/* Description */}
                <ScrollReveal variant="fade-up" delay={0.2}>
                  <p className="font-sans text-lg md:text-xl lg:text-2xl text-mcm-dark dark:text-[#EBE7DF]/90 max-w-xl border-l-4 md:border-l-8 border-mcm-dark dark:border-[#EBE7DF] pl-4 md:pl-6 mt-8 md:mt-12 leading-relaxed font-bold">
                    {t('hero.description')}
                  </p>
                </ScrollReveal>

                {/* CTA */}
                <ScrollReveal variant="fade-up" delay={0.3} className="mt-8 md:mt-12">
                  <a href="#contact" className="mcm-btn px-8 py-4 md:px-10 md:py-5 inline-flex items-center gap-3 md:gap-4 text-lg md:text-xl group">
                    Start a Project <ArrowRight size={24} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </ScrollReveal>
              </div>

              {/* Right: Profile card — positioned to overlap */}
              <div className="lg:w-[380px] xl:w-[420px] shrink-0 lg:-mt-4 lg:relative lg:z-20">
                <ScrollReveal variant="pop-in" delay={0.15}>
                  <div className="relative">
                    {/* Decorative elements */}
                    <Starburst size={120} color="var(--color-mcm-teal)" className="absolute -top-10 -right-10 animate-spin-slow-reverse z-0 hidden md:block" />
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-mcm-orange rounded-full border-4 border-mcm-dark dark:border-[#EBE7DF] z-0 opacity-70 hidden md:block" />

                    {/* The card */}
                    <div className="relative z-10 border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] md:shadow-[16px_16px_0px_0px_rgba(44,43,41,1)] dark:shadow-[8px_8px_0px_0px_#F4F1EA] md:dark:shadow-[16px_16px_0px_0px_#F4F1EA] bg-mcm-cream dark:bg-[#14161C] group hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(44,43,41,1)] md:hover:shadow-[20px_20px_0px_0px_rgba(44,43,41,1)] transition-all duration-500">

                      {/* Window header */}
                      <div className="w-full bg-mcm-dark dark:bg-[#EBE7DF] px-4 py-2.5 md:py-3 flex justify-between items-center">
                        <div className="flex gap-2">
                          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#F27E63] border-2 border-mcm-dark dark:border-[#14161C]" />
                          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-mcm-mustard border-2 border-mcm-dark dark:border-[#14161C]" />
                          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-mcm-teal border-2 border-mcm-dark dark:border-[#14161C]" />
                        </div>
                        <span className="font-display font-bold text-mcm-cream dark:text-[#14161C] text-[10px] md:text-xs uppercase tracking-widest">
                          USER_PROFILE.JPG
                        </span>
                      </div>

                      {/* Profile image */}
                      <div className="relative w-full aspect-[4/5] overflow-hidden bg-mcm-dark">
                        <img
                          src="/images/profile/profile.JPG"
                          className="w-full h-full object-cover object-center grayscale contrast-[1.2] sepia-[0.2] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-700 scale-105 group-hover:scale-100"
                          alt="Rizky Profile"
                        />
                        <div className="absolute inset-0 bg-mcm-orange/20 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500" />

                        {/* Corner brackets */}
                        <div className="absolute top-4 left-4 w-5 h-5 md:w-6 md:h-6 border-t-3 border-l-3 md:border-t-4 md:border-l-4 border-mcm-cream/80" />
                        <div className="absolute top-4 right-4 w-5 h-5 md:w-6 md:h-6 border-t-3 border-r-3 md:border-t-4 md:border-r-4 border-mcm-cream/80" />
                        <div className="absolute bottom-4 left-4 w-5 h-5 md:w-6 md:h-6 border-b-3 border-l-3 md:border-b-4 md:border-l-4 border-mcm-cream/80" />
                        <div className="absolute bottom-4 right-4 w-5 h-5 md:w-6 md:h-6 border-b-3 border-r-3 md:border-b-4 md:border-r-4 border-mcm-cream/80" />

                        {/* Overlay badge */}
                        <div className="absolute bottom-4 left-4 right-4 bg-mcm-dark/80 dark:bg-mcm-dark/90 border-2 border-mcm-cream/30 px-3 py-2 flex justify-between items-center">
                          <span className="font-display font-bold text-mcm-cream text-[10px] md:text-xs uppercase tracking-widest">
                            Bandung, ID
                          </span>
                          <div className="flex items-center gap-1.5">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mcm-teal opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-mcm-teal"></span>
                            </span>
                            <span className="text-mcm-teal font-display font-bold uppercase text-[10px] md:text-xs tracking-widest">
                              ONLINE
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Status bar */}
                      <div className="w-full border-t-4 md:border-t-8 border-mcm-dark dark:border-[#EBE7DF] bg-mcm-mustard dark:bg-mcm-mustard p-3 md:p-4 flex justify-between items-center">
                        <span className="font-display font-bold text-mcm-dark uppercase text-xs md:text-sm tracking-widest">
                          SYS.STATUS // OK
                        </span>
                        <Starburst size={18} color="var(--color-mcm-dark)" />
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              </div>

            </div>
          </div>
        </div>

      </section>


      <section className="w-full bg-mcm-teal border-y-8 border-mcm-dark dark:border-[#EBE7DF] relative overflow-hidden flex items-center py-6 md:py-8 z-20">
        <div className="absolute inset-0 flex items-center whitespace-nowrap opacity-10 pointer-events-none -z-10">
          <h2 className="text-[80px] md:text-[120px] font-display font-bold uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF]">
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
            <NavLink to="/about" className="mcm-btn px-8 py-4 w-full md:w-auto inline-flex items-center justify-center gap-3 text-lg group bg-mcm-cream dark:bg-mcm-dark text-mcm-dark dark:text-[#EBE7DF] hover:bg-mcm-mustard border-4 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] md:shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] md:dark:shadow-[6px_6px_0px_0px_#F4F1EA]">
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
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF]">
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
            <div className="relative w-full flex flex-col lg:flex-row lg:items-end justify-start lg:justify-end border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] md:shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] md:shadow-[16px_16px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] md:dark:shadow-[8px_8px_0px_0px_#F4F1EA] md:dark:shadow-[8px_8px_0px_0px_#F4F1EA] md:shadow-[16px_16px_0px_0px_#F4F1EA] group overflow-hidden bg-mcm-dark dark:bg-mcm-cream min-h-[500px] lg:h-[600px]">


              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute top-6 left-6 bg-mcm-mustard text-mcm-dark dark:text-[#EBE7DF] font-display font-bold px-4 py-2 border-4 border-mcm-dark dark:border-[#EBE7DF] shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] uppercase tracking-widest z-10 rotate-[-2deg]">
                Latest Edition
              </div>


              <div className="relative z-10 bg-mcm-cream dark:bg-mcm-dark border-4 lg:border-t-0 lg:border-l-8 lg:border-t-8 border-mcm-dark dark:border-[#EBE7DF] p-6 md:p-10 w-[90%] md:w-[80%] lg:w-[600px] lg:max-w-[60%] flex flex-col justify-center transform lg:translate-x-8 lg:translate-y-8 mt-auto mx-auto mb-6 lg:mt-0 lg:mx-0 lg:mb-0 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] md:shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] lg:shadow-none dark:shadow-[4px_4px_0px_0px_#F4F1EA] md:dark:shadow-[8px_8px_0px_0px_#F4F1EA] lg:dark:shadow-none">

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

        {/* ===== EXPERTISE ===== */}
        <div className="lg:col-span-7">
          <ScrollReveal variant="slide-right" className="flex flex-col sm:flex-row sm:items-center justify-between border-b-8 border-mcm-dark dark:border-[#EBE7DF] pb-4 mb-10 gap-4">
            <div className="flex items-center gap-3">
              <Starburst size={28} color="var(--color-mcm-orange)" className="animate-spin-slow-reverse" />
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF]">{t('home.expertise')}</h2>
            </div>
            <NavLink to="/skills" className="mcm-btn-outline w-fit px-4 py-2 font-display font-bold uppercase border-4 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] bg-mcm-cream dark:bg-mcm-dark text-sm flex items-center gap-2 group">
              {t('home.allskills')} <ArrowRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </ScrollReveal>

          <div className="flex flex-col gap-5">
            {Array.isArray(categories) && categories.slice(0, 3).map((cat, idx) => {
              const accents = [
                { bg: 'bg-mcm-mustard', text: 'text-mcm-dark' },
                { bg: 'bg-mcm-teal', text: 'text-mcm-cream dark:text-mcm-dark' },
                { bg: 'bg-mcm-orange', text: 'text-mcm-cream dark:text-mcm-dark' },
              ];
              const accent = accents[idx % accents.length];

              return (
                <ScrollReveal key={idx} variant="fade-up" delay={idx * 0.1}>
                  <div className="bg-mcm-cream dark:bg-[#14161C] border-4 md:border-6 border-mcm-dark dark:border-[#EBE7DF] shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] md:shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] md:dark:shadow-[8px_8px_0px_0px_#F4F1EA] overflow-hidden hover:-translate-y-1 hover:-translate-x-0.5 transition-all duration-300 group">
                    <div className="flex flex-col md:flex-row">
                      {/* Colored accent strip with category name */}
                      <div className={`${accent.bg} ${accent.text} px-5 py-4 md:py-0 md:px-6 md:min-w-[200px] flex items-center justify-center md:justify-start border-b-4 md:border-b-0 md:border-r-4 border-mcm-dark dark:border-mcm-dark shrink-0`}>
                        <h3 className="font-display font-bold uppercase text-sm md:text-base tracking-widest text-center md:text-left leading-tight">
                          {cat.name}
                        </h3>
                      </div>

                      {/* Skills pills */}
                      <div className="flex flex-wrap gap-2 p-4 md:p-5 items-center">
                        {cat.items?.slice(0, 4).map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-3 py-1.5 border-2 border-mcm-dark/20 dark:border-[#EBE7DF]/20 font-display font-bold uppercase tracking-wider text-xs text-mcm-dark dark:text-[#EBE7DF] group-hover:border-mcm-dark dark:group-hover:border-[#EBE7DF] transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}

                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>


        {/* ===== HONORS ===== */}
        <div className="lg:col-span-5">
          <ScrollReveal variant="slide-left" className="flex flex-col sm:flex-row sm:items-center justify-between border-b-8 border-mcm-dark dark:border-[#EBE7DF] pb-4 mb-10 gap-4">
            <div className="flex items-center gap-3">
              <Starburst size={28} color="var(--color-mcm-teal)" className="animate-spin-slow" />
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF]">{t('home.honors')}</h2>
            </div>
            <NavLink to="/certificates" className="mcm-btn-outline w-fit px-4 py-2 font-display font-bold uppercase border-4 shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] bg-mcm-mustard text-sm flex items-center gap-2 group">
              {t('home.viewall')} <ArrowRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {featuredCerts.map((cert, idx) => (
              <ScrollReveal key={idx} variant="fade-up" delay={idx * 0.1}>
                <div className="bg-mcm-cream dark:bg-[#14161C] border-4 md:border-6 border-mcm-dark dark:border-[#EBE7DF] shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] md:shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] md:dark:shadow-[8px_8px_0px_0px_#F4F1EA] overflow-hidden hover:-translate-y-1 transition-transform duration-300 group">
                  {/* Certificate content */}
                  <div className="p-5 md:p-6 relative">
                    {/* Inner frame border */}
                    <div className="absolute inset-3 md:inset-4 border-2 border-mcm-dark/10 dark:border-[#EBE7DF]/10 pointer-events-none group-hover:border-mcm-teal/30 transition-colors duration-500" />

                    {/* Seal stamp */}
                    <div className="absolute top-3 right-3 md:top-4 md:right-4 w-14 h-14 md:w-16 md:h-16 rounded-full border-3 md:border-4 border-mcm-teal/40 dark:border-mcm-teal/30 flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-500">
                      <div className="w-10 h-10 md:w-11 md:h-11 rounded-full border-2 border-mcm-teal/30 flex items-center justify-center">
                        <span className="text-mcm-teal font-display font-bold text-[8px] md:text-[9px] uppercase tracking-wider">Verified</span>
                      </div>
                    </div>

                    {/* Date badge */}
                    <div className="mb-3">
                      <span className="bg-mcm-dark dark:bg-[#EBE7DF] text-mcm-cream dark:text-mcm-dark font-display font-bold text-[10px] uppercase tracking-widest px-2.5 py-1">
                        {cert.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-display font-bold uppercase text-mcm-dark dark:text-[#EBE7DF] leading-tight pr-16 md:pr-20 mb-3">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <div className="flex items-center gap-2 pt-3 border-t-2 border-mcm-dark/15 dark:border-[#EBE7DF]/15">
                      <Starburst size={14} color="var(--color-mcm-teal)" />
                      <span className="text-xs font-display font-bold text-mcm-teal dark:text-mcm-teal uppercase tracking-widest">
                        {cert.issuer}
                      </span>
                    </div>
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
