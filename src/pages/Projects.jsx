import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();
  const projectList = t('projects.list', { returnObjects: true });

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white">{t('nav.projects')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Array.isArray(projectList) && projectList.map((project, idx) => (
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
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
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
      </motion.div>
    </div>
  );
}
