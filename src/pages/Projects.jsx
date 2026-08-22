import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, FolderOpen } from 'lucide-react';
import Window from '../components/Window';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
  },
};

export default function Projects() {
  const { t } = useTranslation();
  const projectList = t('projects.list', { returnObjects: true });

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white font-black text-xs uppercase tracking-widest mb-4 acid-border shadow-[2px_2px_0_0_#000]">
            <FolderOpen size={14} className="text-acid-green" />
            {Array.isArray(projectList) ? `${projectList.length} ITEMS FOUND` : 'PROJECTS'}
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black dark:text-white font-display">
            {t('nav.projects')}
          </h1>
        </div>
        <div className="text-sm font-bold max-w-xs uppercase bg-acid-cyan p-2 acid-border shadow-[2px_2px_0_0_#000] text-black">
          Directory listing of recent works, side projects, and experiments.
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Array.isArray(projectList) && projectList.map((project, idx) => {
          const bgColors = ['bg-acid-green', 'bg-acid-pink', 'bg-acid-cyan', 'bg-acid-purple', 'bg-white'];
          const randomBg = bgColors[idx % bgColors.length];
          return (
            <motion.div key={idx} variants={cardVariants} className="h-full">
              <Window 
                title={`project_${idx+1}.exe`} 
                bgClass="bg-white dark:bg-black h-full"
                className="group"
              >
                <div className="relative w-full aspect-video overflow-hidden mb-4 acid-border">
                  <div className={`absolute inset-0 opacity-20 ${randomBg} mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity`}></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 z-20">
                    <span className="bg-black text-white text-[10px] font-black uppercase px-2 py-1 acid-border">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-2 font-display group-hover:text-acid-pink transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags?.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-2 py-0.5 text-[10px] font-black uppercase acid-border ${bgColors[tIdx % bgColors.length]} text-black`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm font-bold line-clamp-3 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <a href={project.demoUrl || "#"} className="flex-1 text-center bg-black text-white py-2 font-black text-xs uppercase tracking-widest acid-border hover:bg-acid-green hover:text-black transition-colors shadow-[2px_2px_0_0_#000]">
                      Demo
                    </a>
                    <a href={project.codeUrl || "#"} className="flex-1 text-center bg-white text-black py-2 font-black text-xs uppercase tracking-widest acid-border hover:bg-acid-pink hover:text-black transition-colors shadow-[2px_2px_0_0_#000]">
                      Code
                    </a>
                  </div>
                </div>
              </Window>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
