import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Award, Layers, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
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

function HeroImage() {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 3;
    const rotateX = ((rect.height / 2 - y) / (rect.height / 2)) * 3;
    setTilt({ rotateX, rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 800 }}
      className="shrink-0 w-44 h-44 md:w-64 md:h-64 self-center md:self-start"
    >
      <motion.div
        animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className={`w-full h-full rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/80 transition-shadow duration-500 ${isHovered ? 'shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)]' : 'shadow-sm'}`}
      >
        <motion.img
          src="/images/profile/profile.JPG"
          alt="Rizky Al Farid Hafizh"
          className="w-full h-full object-cover object-top"
          animate={{
            scale: isHovered ? 1.05 : 1,
            filter: isHovered ? 'grayscale(0)' : 'grayscale(1)',
          }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </div>
  );
}

export default function Home() {
  const { t } = useTranslation();
  const projectList = t('projects.list', { returnObjects: true });

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 pb-32">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row items-start gap-10 md:gap-16 py-16 md:py-24"
      >
        <HeroImage />
        <div className="flex flex-col text-left justify-center flex-grow pt-2 md:pt-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-5 w-max">
            Software Engineer
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-5 leading-tight">
            Hello, I am {t('hero.name')}.
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl mb-8 leading-relaxed font-medium">
            {t('hero.description')}
          </p>
          <div>
            <Link to="/contact" className="group/link inline-flex items-center gap-1.5 font-bold text-gray-900 dark:text-white transition-colors text-sm">
              <span className="relative">
                {t('hero.cta')}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover/link:w-full" />
              </span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </motion.section>

      <hr className="border-gray-200 dark:border-gray-850 my-16" />

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
      >
        <div className="shrink-0 md:w-1/4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-900 dark:bg-white" />
            {t('about.title')}
          </h2>
        </div>
        <div className="flex flex-col flex-grow">
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6 font-medium">
            {t('about.content1')}
          </p>
          <div>
            <Link to="/about" className="group/link inline-flex items-center gap-1.5 font-bold text-gray-950 dark:text-white transition-colors text-sm">
              <span className="relative">
                {t('about.more')}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover/link:w-full" />
              </span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </motion.section>

      <hr className="border-gray-200 dark:border-gray-850 my-16" />

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col"
      >
        <div className="flex justify-between items-end mb-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <FolderOpen size={20} className="text-gray-600 dark:text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t('projects.title')}</h2>
          </div>
          <Link to="/projects" className="group/link inline-flex items-center gap-1.5 font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm">
            <span className="relative">
              {t('projects.viewAll')}
              <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover/link:w-full" />
            </span>
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Array.isArray(projectList) && projectList.slice(0, 4).map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
