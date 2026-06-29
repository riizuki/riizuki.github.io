import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, FolderOpen } from 'lucide-react';
import { useState, useRef, useCallback } from 'react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProjectCard({ project, idx }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 3.5;
    const rotateX = ((rect.height / 2 - y) / (rect.height / 2)) * 3.5;
    setTilt({ rotateX, rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 800 }}
      className="group"
    >
      <motion.div
        animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className={`
          relative flex flex-col
          bg-white dark:bg-gray-800/80
          rounded-2xl
          border border-gray-200/60 dark:border-gray-700/40
          overflow-hidden
          transition-shadow duration-500
          ${isHovered ? 'shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)] ring-1 ring-gray-300/40 dark:ring-gray-600/30' : 'shadow-sm'}
        `}
      >
        <div className="relative w-full aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
            animate={{
              scale: isHovered ? 1.04 : 1,
              filter: isHovered ? 'grayscale(0)' : 'grayscale(1)',
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            loading="lazy"
          />
          <div className="absolute top-3.5 left-3.5">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-[10px] font-bold text-gray-700 dark:text-gray-300 shadow-sm">
              {String(idx + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-grow p-6 pt-5 gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.tags?.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-1 bg-gray-50 dark:bg-gray-700/50 border border-gray-150 dark:border-gray-600/40 text-gray-500 dark:text-gray-400 rounded-md text-[10px] font-semibold uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight leading-snug">{project.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed flex-grow">{project.description}</p>
          <div className="flex items-center gap-5 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700/60">
            <a href={project.demoUrl || "#"} className="group/link inline-flex items-center gap-1.5 font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-xs">
              <span className="relative">Demo<span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover/link:w-full" /></span>
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
            <a href={project.codeUrl || "#"} className="group/link inline-flex items-center gap-1.5 font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-xs">
              <span className="relative">Code<span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover/link:w-full" /></span>
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useTranslation();
  const projectList = t('projects.list', { returnObjects: true });

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <FolderOpen size={20} className="text-gray-600 dark:text-gray-400" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
            {Array.isArray(projectList) ? `${projectList.length} Projects` : 'Projects'}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {t('nav.projects')}
        </h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Array.isArray(projectList) && projectList.map((project, idx) => (
          <ProjectCard key={idx} project={project} idx={idx} />
        ))}
      </motion.div>
    </div>
  );
}
