import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Monitor, Server, Smartphone, Wrench, Layers } from 'lucide-react';
import { useState, useRef, useCallback } from 'react';

const skillIconMap = {
  "React.js": "react",
  "Next.js": "nextjs",
  "Vite": "vite",
  "HTML5": "html",
  "CSS3": "css",
  "JavaScript": "js",
  "Tailwind CSS": "tailwind",
  "Node.js": "nodejs",
  "Express.js": "express",
  "MySQL": "mysql",
  "MongoDB": "mongodb",
  "Firebase": "firebase",
  "Android Studio": "androidstudio",
  "Dart": "dart",
  "Flutter": "flutter",
  "Git": "git",
  "GitHub": "github",
  "Figma": "figma",
  "VS Code": "vscode",
  "Webpack": "webpack",
  "Vercel": "vercel",
  "REST APIs": null,
};

const categoryIcons = [Monitor, Server, Smartphone, Wrench];

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

const pillStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.03, delayChildren: 0.15 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

function CategoryCard({ cat, idx }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const Icon = categoryIcons[idx % categoryIcons.length];

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
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 900 }}
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
        <div className="flex items-center gap-4 px-7 pt-7 pb-5">
          <motion.div
            className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400"
            animate={{ rotate: isHovered ? 6 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
          >
            <Icon size={20} strokeWidth={2} />
          </motion.div>
          <div>
            <h2 className="text-base font-bold text-gray-900 dark:text-white tracking-tight">{cat.name}</h2>
            <span className="text-[11px] text-gray-400 dark:text-gray-500 font-medium">{cat.items.length} skills</span>
          </div>
        </div>

        <div className="mx-7 h-px bg-gray-100 dark:bg-gray-700/60" />

        <motion.div
          className="flex flex-wrap gap-2 px-7 py-6"
          variants={pillStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {cat.items?.map((skill, sIdx) => {
            const iconName = skillIconMap[skill];
            return (
              <motion.div
                key={sIdx}
                variants={pillVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-150 dark:border-gray-600/40 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 cursor-default"
              >
                {iconName && (
                  <img
                    src={`https://skillicons.dev/icons?i=${iconName}`}
                    alt={`${skill} icon`}
                    className="w-5 h-5 object-contain"
                    loading="lazy"
                  />
                )}
                {!iconName && <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500 shrink-0" />}
                {skill}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true });

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
            <Layers size={20} className="text-gray-600 dark:text-gray-400" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
            Tech Stack
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {t('skills.title')}
        </h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Array.isArray(categories) && categories.map((cat, idx) => (
          <CategoryCard key={idx} cat={cat} idx={idx} />
        ))}
      </motion.div>
    </div>
  );
}
