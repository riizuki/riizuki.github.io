import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Window from '../components/Window';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
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
        className="mb-12"
      >
        <h1 className="text-6xl font-bold font-display inline-block highlighter-yellow text-doodle-ink transform -rotate-2">
          {t('nav.projects')}
        </h1>
        <p className="text-xl mt-4 font-sans text-gray-600 dark:text-gray-400 max-w-sm">
          A collection of things I've built.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Array.isArray(projectList) && projectList.map((project, idx) => {
          return (
            <motion.div key={idx} variants={cardVariants} className="h-full">
              <Window 
                title={`Project #${idx+1}`} 
                bgClass="bg-white dark:bg-[#222] h-full"
                className="group"
              >
                <div className="relative w-full aspect-video overflow-hidden mb-4 doodle-border">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top filter sepia-[0.2] group-hover:sepia-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col flex-grow">
                  <h3 className="text-3xl font-bold mb-2 font-display line-clamp-2 decoration-wavy decoration-doodle-blue group-hover:underline">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-lg font-sans border-2 border-dashed border-gray-400 rounded-lg text-gray-600 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-xl font-sans line-clamp-3 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <a href={project.demoUrl || "#"} className="flex-1 text-center bg-doodle-green text-doodle-ink py-2 font-bold text-xl doodle-border hover:scale-105 transition-transform">
                      Demo
                    </a>
                    <a href={project.codeUrl || "#"} className="flex-1 text-center bg-white text-doodle-ink py-2 font-bold text-xl doodle-border hover:scale-105 transition-transform">
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
