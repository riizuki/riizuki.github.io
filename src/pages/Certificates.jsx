import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, Award, X, ZoomIn, Calendar, Building2 } from 'lucide-react';
import { useState, useRef, useCallback } from 'react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
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

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.88, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', damping: 28, stiffness: 350 },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: 16,
    transition: { duration: 0.2 },
  },
};

function CertCard({ cert, idx, onOpenLightbox, viewLabel }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 4;
    const rotateX = ((rect.height / 2 - y) / (rect.height / 2)) * 4;
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
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
        <div
          className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer"
          onClick={() => onOpenLightbox(cert)}
        >
          <motion.img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.04 : 1,
              filter: isHovered ? 'saturate(1)' : 'saturate(0.8)',
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-11 h-11 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md flex items-center justify-center shadow-lg">
              <ZoomIn size={18} className="text-gray-700 dark:text-gray-300" />
            </div>
          </motion.div>

          <div className="absolute top-3.5 left-3.5">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md text-[10px] font-bold text-gray-700 dark:text-gray-300 shadow-sm">
              {String(idx + 1).padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-grow p-5 pt-4 gap-2.5">
          <div className="flex items-center gap-1.5 text-gray-400 dark:text-gray-500">
            <Calendar size={11} />
            <span className="text-[11px] font-medium tracking-wide">{cert.date}</span>
          </div>

          <h3 className="text-[15px] font-bold text-gray-900 dark:text-white leading-snug tracking-tight">
            {cert.title}
          </h3>

          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
            <Building2 size={12} className="shrink-0" />
            <span className="text-xs font-medium truncate">{cert.issuer}</span>
          </div>

          <div className="mt-auto pt-3 border-t border-gray-100 dark:border-gray-800/60">
            <button
              onClick={() => onOpenLightbox(cert)}
              className="group/link inline-flex items-center gap-1.5 font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-xs"
            >
              <span className="relative">
                {viewLabel}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover/link:w-full" />
              </span>
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Lightbox({ cert, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        className="relative max-w-4xl w-full max-h-[90vh] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-md flex items-center justify-center shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-colors"
        >
          <X size={16} className="text-gray-600 dark:text-gray-400" />
        </button>

        <div className="flex-grow overflow-auto">
          <img src={cert.image} alt={cert.title} className="w-full h-auto object-contain" />
        </div>

        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-800/80">
          <h3 className="text-sm font-bold text-gray-900 dark:text-white">{cert.title}</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{cert.issuer} · {cert.date}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Certificates() {
  const { t } = useTranslation();
  const certList = t('certificates.list', { returnObjects: true });
  const [lightboxCert, setLightboxCert] = useState(null);

  return (
    <>
      <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Award size={20} className="text-gray-600 dark:text-gray-400" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
              {Array.isArray(certList) ? `${certList.length} Credentials` : 'Credentials'}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            {t('certificates.title')}
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Array.isArray(certList) && certList.map((cert, idx) => (
            <CertCard
              key={idx}
              cert={cert}
              idx={idx}
              onOpenLightbox={setLightboxCert}
              viewLabel={t('certificates.view')}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxCert && (
          <Lightbox cert={lightboxCert} onClose={() => setLightboxCert(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
