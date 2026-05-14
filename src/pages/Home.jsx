import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const { t } = useTranslation();
  const jobs = t('experience.jobs', { returnObjects: true });

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 pb-32">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row items-start justify-start md:justify-center gap-8 md:gap-16 py-16 md:py-24"
      >
        <div className="w-32 h-32 md:w-64 md:h-64 rounded-full overflow-hidden shrink-0 bg-gray-200 dark:bg-gray-800 shadow-xl border-4 border-white dark:border-gray-900">
          <img
            src="/images/profile/profile.JPG"
            alt="Rizky Al Farid Hafizh"
            className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0"
          />
        </div>
        <div className="flex flex-col pt-2 md:pt-8 text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4 md:mb-6 leading-[1.2]">
            <span className="block">{t('hero.greeting')} {t('hero.name')}</span>
            <span className="block">{t('hero.role')}</span>
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl mb-8 leading-relaxed">
            {t('hero.description')}
          </p>
          <div>
            <Link to="/contact" className="group relative inline-flex items-center gap-2 text-base font-medium text-gray-900 dark:text-white transition-colors">
              <span className="relative pb-1">
                {t('hero.cta')}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
              <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.section>

      <hr className="border-gray-200 dark:border-gray-800 my-16" />

      {/* About Section Snippet */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white shrink-0 md:w-1/4">
          {t('about.title')}
        </h2>
        <div className="flex flex-col flex-grow">
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
            {t('about.content1')}
          </p>
          <div>
            <Link to="/about" className="group relative inline-flex items-center gap-2 font-semibold text-gray-900 dark:text-white transition-colors text-sm">
              <span className="relative pb-1">
                {t('about.more')}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.section>

      <hr className="border-gray-200 dark:border-gray-800 my-16" />

      {/* Portfolio Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col"
      >
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{t('projects.title')}</h2>
          <Link to="/projects" className="inline-flex items-center gap-2 font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors text-sm">
            {t('projects.viewAll')} <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Array.isArray(t('projects.list', { returnObjects: true })) && t('projects.list', { returnObjects: true }).slice(0, 4).map((project, idx) => (
            <div key={idx} className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-[2rem] p-6 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-gray-800 transition-all hover:-translate-y-2">
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden relative aspect-video mb-8">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              
              <div className="flex flex-col px-2 flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags && project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-md text-[10px] font-semibold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-6 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a href={project.demoUrl || "#"} className="inline-flex items-center gap-1.5 font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors text-sm">
                    Demo <ArrowUpRight size={16} />
                  </a>
                  <a href={project.codeUrl || "#"} className="inline-flex items-center gap-1.5 font-semibold text-gray-900 dark:text-white hover:text-blue-600 transition-colors text-sm">
                    Code <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
