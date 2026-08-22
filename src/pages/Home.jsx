import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, MapPin, Mail, Briefcase, Award, Code, User, Asterisk, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const marqueeText = " CREATIVE DEVELOPER // DIGITAL EXPERIENCES // ACID GRAPHIC // Y2K AESTHETIC // ";

function Window({ title, children, className, bgClass = "bg-white dark:bg-black", titleBg = "bg-white dark:bg-black text-black dark:text-white" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`acid-border acid-shadow flex flex-col ${bgClass} ${className} transition-all duration-300 hover:acid-shadow-hover`}
    >
      <div className={`border-b-2 border-black dark:border-white ${titleBg} px-3 py-2 flex justify-between items-center`}>
        <span className="font-black text-xs uppercase tracking-widest">{title}</span>
        <div className="flex gap-1.5">
          <div className="w-3.5 h-3.5 border-2 border-black bg-acid-cyan"></div>
          <div className="w-3.5 h-3.5 border-2 border-black bg-acid-pink rounded-full"></div>
          <div className="w-3.5 h-3.5 border-2 border-black bg-black flex items-center justify-center">
            <span className="text-white text-[10px] font-bold leading-none">×</span>
          </div>
        </div>
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow relative overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const projectList = t('projects.list', { returnObjects: true });
  const featuredProject = Array.isArray(projectList) ? projectList[0] : null;

  return (
    <div className="flex flex-col w-full pb-32">
      
      {/* Infinite Marquee Tape */}
      <div className="w-full overflow-hidden bg-acid-green border-y-4 border-black py-2 mb-8 md:mb-16 transform -rotate-1 scale-105 shadow-[0_4px_0_0_#000]">
        <div className="whitespace-nowrap flex w-[200%] animate-marquee">
          <span className="text-black font-black uppercase tracking-widest text-lg md:text-2xl mx-4">{marqueeText.repeat(5)}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Hero - spans 8 cols */}
          <Window 
            title="system32/hero.exe" 
            className="md:col-span-8 md:row-span-2"
            bgClass="bg-acid-cyan dark:bg-acid-cyan text-black"
            titleBg="bg-black text-white"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-stripes opacity-20 transform rotate-45 translate-x-10 -translate-y-10"></div>
            
            <div className="absolute bottom-6 right-6 animate-spin-slow">
              <Asterisk size={120} strokeWidth={1} className="text-black opacity-30" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-black font-black text-xs uppercase tracking-widest mb-6 w-max acid-border shadow-[2px_2px_0_0_#000]">
                <Sparkles size={14} className="text-acid-pink fill-acid-pink" />
                {t('hero.role')}
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black uppercase tracking-tighter mb-4 leading-[0.85] font-display flex flex-col">
                <span className="text-black">{t('hero.greeting')}</span>
                <span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>{t('hero.name')}</span>
              </h1>
              
              <p className="text-sm md:text-base font-bold max-w-lg leading-relaxed mb-10 text-black/80">
                {t('hero.description')}
              </p>
              
              <div className="mt-auto flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-acid-pink text-black px-8 py-4 font-black text-sm uppercase tracking-widest hover:bg-black hover:text-acid-pink transition-colors acid-border shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] active:shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:translate-x-0.5">
                  <Mail size={18} strokeWidth={3} />
                  {t('hero.cta')}
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 font-black text-sm uppercase tracking-widest hover:bg-acid-green transition-colors acid-border shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000] active:shadow-[2px_2px_0_0_#000] active:translate-y-0.5 active:translate-x-0.5">
                  <User size={18} strokeWidth={3} />
                  More Info
                </Link>
              </div>
            </div>
          </Window>

          {/* Profile Picture - spans 4 cols */}
          <Window 
            title="avatar.jpg" 
            className="md:col-span-4 md:row-span-2 p-0!"
            bgClass="bg-acid-purple dark:bg-acid-purple"
          >
            <div className="w-full h-full p-4 relative group">
              <div className="absolute inset-0 bg-checkerboard opacity-10"></div>
              <img 
                src="/images/profile/profile.JPG" 
                alt="Profile" 
                className="w-full h-full object-cover acid-border filter grayscale contrast-150 mix-blend-luminosity group-hover:mix-blend-normal group-hover:grayscale-0 transition-all duration-500"
              />
              {/* Barcode Sticker */}
              <div className="absolute top-6 left-6 bg-white p-2 acid-border shadow-[4px_4px_0_0_#000] transform -rotate-12 group-hover:rotate-0 transition-transform">
                <svg width="60" height="20" viewBox="0 0 100 30" fill="black">
                  <rect x="0" width="4" height="30" />
                  <rect x="6" width="2" height="30" />
                  <rect x="12" width="6" height="30" />
                  <rect x="22" width="2" height="30" />
                  <rect x="28" width="8" height="30" />
                  <rect x="40" width="2" height="30" />
                  <rect x="46" width="4" height="30" />
                  <rect x="54" width="6" height="30" />
                  <rect x="64" width="2" height="30" />
                  <rect x="70" width="8" height="30" />
                  <rect x="82" width="4" height="30" />
                  <rect x="90" width="2" height="30" />
                  <rect x="96" width="4" height="30" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-acid-green text-black px-4 py-2 font-black text-xl uppercase acid-border shadow-[4px_4px_0_0_#000] transform -rotate-12 group-hover:rotate-6 transition-transform">
                Rizky!
              </div>
            </div>
          </Window>

          {/* Location & Status - spans 3 cols */}
          <Window 
            title="location.exe" 
            className="md:col-span-3 md:row-span-1 text-center items-center justify-center relative overflow-visible"
            bgClass="bg-[#fff] dark:bg-black"
          >
            {/* Smiley Face Sticker */}
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-acid-pink rounded-full flex items-center justify-center acid-border shadow-[4px_4px_0_0_#000] z-20 hover:scale-110 transition-transform">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" stroke="black" strokeWidth="8">
                <circle cx="35" cy="35" r="5" fill="black" />
                <circle cx="65" cy="35" r="5" fill="black" />
                <path d="M30 65 Q 50 85 70 65" strokeLinecap="round" />
              </svg>
            </div>
            
            <div className="w-16 h-16 bg-acid-green text-black rounded-full flex items-center justify-center mb-4 acid-border shadow-[4px_4px_0_0_#000] animate-bounce">
              <MapPin size={32} strokeWidth={2.5} />
            </div>
            <h3 className="font-black text-2xl uppercase tracking-tighter mb-1 font-display">Bandung</h3>
            <p className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1">GMT+7 Time</p>
          </Window>

          {/* Featured Project - spans 6 cols */}
          {featuredProject && (
            <Window 
              title="latest_project.zip" 
              className="md:col-span-6 md:row-span-2 p-0! group cursor-pointer"
              bgClass="bg-acid-pink dark:bg-acid-pink"
            >
              <Link to="/projects" className="absolute inset-0 z-20 focus:outline-none"></Link>
              <div className="relative h-1/2 overflow-hidden border-b-2 border-black dark:border-white">
                <div className="absolute inset-0 bg-stripes opacity-30 z-10 pointer-events-none mix-blend-overlay"></div>
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title} 
                  className="w-full h-full object-cover object-top filter grayscale contrast-[1.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 z-10 bg-black text-white px-3 py-1.5 text-xs font-black uppercase tracking-widest acid-border shadow-[2px_2px_0_0_#ccff00]">
                  New!
                </div>
                {/* 100% Genuine Sticker */}
                <div className="absolute bottom-4 left-4 z-10 bg-acid-green text-black w-16 h-16 rounded-full flex items-center justify-center text-center font-black text-[10px] uppercase acid-border shadow-[2px_2px_0_0_#000] transform rotate-12 group-hover:-rotate-12 transition-transform leading-tight">
                  100%<br/>GENUINE
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-white dark:bg-black justify-between relative">
                <div>
                  <h3 className="text-3xl font-black uppercase tracking-tight mb-3 font-display group-hover:text-acid-pink transition-colors line-clamp-1">{featuredProject.title}</h3>
                  <p className="font-bold text-sm line-clamp-2 md:line-clamp-3 p-2 bg-gray-100 dark:bg-gray-900 acid-border">{featuredProject.description}</p>
                </div>
                <div className="inline-flex items-center justify-between mt-6 pt-4 border-t-2 border-black dark:border-white border-dashed">
                  <span className="text-sm font-black uppercase tracking-widest text-black dark:text-white group-hover:underline">Explore Project</span>
                  <div className="w-10 h-10 bg-acid-green text-black flex items-center justify-center rounded-full acid-border shadow-[2px_2px_0_0_#000] group-hover:translate-x-2 transition-transform">
                    <ArrowUpRight size={24} strokeWidth={3} />
                  </div>
                </div>
              </div>
            </Window>
          )}

          {/* Connect / Socials - spans 3 cols */}
          <Window 
            title="connect.bat" 
            className="md:col-span-3 md:row-span-1 relative overflow-visible"
            bgClass="bg-[#fff] dark:bg-black"
          >
            {/* Eye Sticker */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center acid-border shadow-[4px_4px_0_0_#000] z-20 hover:scale-110 transition-transform">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </div>
            
            <h3 className="font-black uppercase text-xl font-display mb-6 text-center">{t('contact.title')}</h3>
            <div className="flex flex-col gap-3 mt-auto">
              <a href="mailto:hafizhrizky233@gmail.com" className="w-full bg-acid-green text-black acid-border hover:bg-black hover:text-acid-green flex items-center justify-center py-3 transition-colors shadow-[2px_2px_0_0_#000]">
                <Mail size={20} strokeWidth={2.5} />
              </a>
              <div className="flex gap-3">
                <a href="https://github.com/riizuki" target="_blank" rel="noreferrer" className="flex-1 bg-white dark:bg-black acid-border hover:bg-acid-cyan dark:hover:bg-acid-cyan dark:hover:text-black flex items-center justify-center py-3 transition-colors shadow-[2px_2px_0_0_#000]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path></svg>
                </a>
                <a href="https://linkedin.com/in/rizkyalfaridhafizh" target="_blank" rel="noreferrer" className="flex-1 bg-white dark:bg-black acid-border hover:bg-acid-purple dark:hover:bg-acid-purple dark:hover:text-white flex items-center justify-center py-3 transition-colors shadow-[2px_2px_0_0_#000]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </Window>

          {/* Skills - spans 6 cols */}
          <Window 
            title="skills.dll" 
            className="md:col-span-6 md:row-span-1"
            bgClass="bg-[#fff] dark:bg-black"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-black uppercase text-2xl font-display flex items-center gap-2">
                <Code size={24} className="text-acid-pink" strokeWidth={3} />
                {t('nav.skills')}
              </h3>
              <Link to="/skills" className="hover:text-acid-cyan transition-colors">
                <ArrowUpRight size={28} strokeWidth={3} />
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              {['React', 'Next.js', 'Tailwind', 'Node.js', 'Typescript', 'Figma'].map((skill, idx) => {
                const bgColors = ['bg-acid-green', 'bg-acid-pink', 'bg-acid-cyan', 'bg-acid-purple', 'bg-white', 'bg-black text-white'];
                return (
                  <span key={skill} className={`px-3 py-1.5 acid-border text-sm font-black uppercase ${bgColors[idx % 6]} text-black shadow-[2px_2px_0_0_#000] hover:-translate-y-1 transition-transform cursor-crosshair`}>
                    {skill}
                  </span>
                );
              })}
            </div>
          </Window>

          {/* Certificates - spans 3 cols */}
          <Window 
            title="awards.txt" 
            className="md:col-span-3 md:row-span-1 flex flex-col justify-center items-center text-center group/cert cursor-pointer"
            bgClass="bg-acid-green dark:bg-acid-green text-black"
          >
            <Link to="/certificates" className="absolute inset-0 z-10 focus:outline-none focus-visible:ring-4 focus-visible:ring-acid-purple"></Link>
            <div className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center mb-4 acid-border shadow-[4px_4px_0_0_#000] group-hover/cert:rotate-[360deg] transition-transform duration-700">
              <Award size={32} strokeWidth={2.5} />
            </div>
            <h3 className="font-black uppercase text-xl font-display mb-1">{t('nav.certificates')}</h3>
            <span className="text-xs font-black uppercase tracking-widest flex items-center gap-1 group-hover/cert:underline underline-offset-4">
              View All
            </span>
          </Window>

        </div>
      </div>
    </div>
  );
}
