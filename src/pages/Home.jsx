import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Window from '../components/Window';

const marqueeText = " CREATIVE DEVELOPER // DIGITAL EXPERIENCES // UI/UX DESIGNER // ";

export default function Home() {
  const { t } = useTranslation();
  const projectList = t('projects.list', { returnObjects: true });
  const featuredProject = Array.isArray(projectList) ? projectList[0] : null;

  return (
    <div className="flex flex-col w-full pb-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 w-full pt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Hero */}
          <Window 
            title="Hello there!" 
            className="md:col-span-8 md:row-span-2"
            bgClass="bg-white dark:bg-[#2a2a2a]"
          >
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="inline-block bg-doodle-pink text-doodle-ink font-bold text-lg px-3 py-1 mb-6 w-max doodle-border transform -rotate-2">
                {t('hero.role')}
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight font-display">
                <span className="text-doodle-ink dark:text-white">{t('hero.greeting')} </span>
                <span className="highlighter-yellow inline-block transform rotate-1 text-doodle-ink dark:text-doodle-ink">{t('hero.name')}</span>
              </h1>
              
              <p className="text-lg md:text-xl font-sans max-w-lg leading-relaxed mb-10 text-gray-700 dark:text-gray-300">
                {t('hero.description')}
              </p>
              
              <div className="mt-auto flex flex-wrap gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center bg-doodle-blue text-doodle-ink px-6 py-3 font-bold text-xl hover:scale-105 transition-transform doodle-border doodle-shadow">
                  {t('hero.cta')}
                </Link>
                <Link to="/about" className="inline-flex items-center justify-center bg-transparent text-doodle-ink dark:text-white px-6 py-3 font-bold text-xl hover:scale-105 transition-transform doodle-border">
                  More Info
                </Link>
              </div>
            </div>
          </Window>

          {/* Profile Picture */}
          <Window 
            title="Me.jpg" 
            className="md:col-span-4 md:row-span-2"
            bgClass="bg-[#fff] dark:bg-[#333]"
          >
            <div className="w-full h-full relative group flex items-center justify-center">
              <img 
                src="/images/profile/profile.JPG" 
                alt="Profile" 
                className="w-[90%] aspect-square object-cover doodle-border filter sepia-[0.3] group-hover:sepia-0 transition-all duration-500 transform rotate-2"
              />
              <div className="absolute -bottom-2 -left-2 bg-doodle-yellow text-doodle-ink px-4 py-1 font-display font-bold text-2xl doodle-border shadow-sm transform -rotate-6">
                Rizky!
              </div>
            </div>
          </Window>

          {/* Location */}
          <Window 
            title="Where am I?" 
            className="md:col-span-3 md:row-span-1 flex flex-col items-center justify-center text-center transform -rotate-1"
            bgClass="bg-[#fff] dark:bg-[#222]"
          >
            <h3 className="font-bold text-3xl mb-1 font-display mt-2">Kota Bandung</h3>
            <p className="text-xl font-sans text-gray-500 underline decoration-wavy decoration-doodle-pink">Indonesia</p>
          </Window>

          {/* Featured Project */}
          {featuredProject && (
            <Window 
              title="Latest Doodle" 
              className="md:col-span-6 md:row-span-2 p-0! group cursor-pointer transform rotate-1"
              bgClass="bg-white dark:bg-[#222]"
            >
              <Link to="/projects" className="absolute inset-0 z-20 focus:outline-none"></Link>
              <div className="p-4 flex flex-col h-full bg-doodle-yellow/20 items-center justify-center text-center">
                <div className="relative w-full aspect-video overflow-hidden border-2 border-dashed border-gray-400 bg-white p-1 doodle-border transform -rotate-1 group-hover:rotate-0 transition-transform shadow-sm flex-shrink-0">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    className="w-full h-full object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 block"
                  />
                  {/* Tape on image */}
                  <div className="absolute -top-2 -left-2 w-10 h-4 bg-gray-200/80 transform -rotate-12 shadow-sm"></div>
                  <div className="absolute -top-2 -right-2 w-10 h-4 bg-gray-200/80 transform rotate-12 shadow-sm"></div>
                </div>
                <div className="mt-6 flex flex-col items-center justify-center">
                  <h3 className="text-3xl font-bold mb-2 font-display group-hover:text-doodle-blue transition-colors">{featuredProject.title}</h3>
                  <p className="font-sans text-lg text-gray-600 dark:text-gray-400 max-w-sm">{featuredProject.description}</p>
                  <div className="mt-4 text-2xl font-bold font-display text-doodle-ink bg-doodle-pink px-4 py-1 doodle-border shadow-sm group-hover:scale-105 transition-transform">
                    Explore Project &rarr;
                  </div>
                </div>
              </div>
            </Window>
          )}

          {/* Connect */}
          <Window 
            title="Let's Talk!" 
            className="md:col-span-3 md:row-span-1 transform rotate-2"
            bgClass="bg-[#fff] dark:bg-[#2a2a2a]"
          >
            <div className="flex flex-col gap-3 justify-center h-full">
              <a href="mailto:hafizhrizky233@gmail.com" className="w-full text-center bg-doodle-green text-doodle-ink doodle-border hover:scale-105 py-2 transition-transform text-xl font-bold shadow-sm">
                Email Me
              </a>
              <div className="flex gap-3">
                <a href="https://github.com/riizuki" target="_blank" rel="noreferrer" className="flex-1 text-center bg-white dark:bg-[#333] doodle-border hover:bg-gray-100 dark:hover:bg-gray-600 py-2 transition-colors text-xl font-bold shadow-sm">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/rizkyalfaridhafizh" target="_blank" rel="noreferrer" className="flex-1 text-center bg-white dark:bg-[#333] doodle-border hover:bg-gray-100 dark:hover:bg-gray-600 py-2 transition-colors text-xl font-bold shadow-sm">
                  LinkedIn
                </a>
              </div>
            </div>
          </Window>

          {/* Skills */}
          <Window 
            title="My Toolkit" 
            className="md:col-span-8 md:row-span-1 transform -rotate-1 flex flex-col justify-center items-center text-center"
            bgClass="bg-[#fff] dark:bg-[#222]"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2 w-full h-full">
              {['React', 'Next.js', 'Tailwind', 'Node.js', 'Typescript', 'Figma'].map((skill, idx) => {
                const bgColors = ['bg-doodle-green', 'bg-doodle-pink', 'bg-doodle-blue', 'bg-doodle-yellow', 'bg-white', 'bg-gray-200'];
                return (
                  <span key={skill} className={`px-4 py-2 doodle-border text-xl font-bold ${bgColors[idx % 6]} text-doodle-ink hover:-translate-y-2 hover:rotate-3 transition-transform shadow-sm transform ${Math.random() > 0.5 ? 'rotate-2' : '-rotate-2'}`}>
                    {skill}
                  </span>
                );
              })}
            </div>
          </Window>

          {/* Certificates */}
          <Window 
            title="Trophies" 
            className="md:col-span-4 md:row-span-1 flex flex-col justify-center items-center text-center group cursor-pointer transform rotate-2"
            bgClass="bg-doodle-blue text-doodle-ink"
          >
            <Link to="/certificates" className="absolute inset-0 z-10 focus:outline-none"></Link>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <svg className="mb-2 w-10 h-10 group-hover:animate-sketch block mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              <h3 className="font-bold text-3xl font-display mb-1">Certificates</h3>
              <span className="text-xl font-sans underline decoration-wavy decoration-2 group-hover:scale-110 transition-transform">
                View All
              </span>
            </div>
          </Window>

        </div>
      </div>
    </div>
  );
}
