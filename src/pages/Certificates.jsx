import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
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
  },
};

export default function Certificates() {
  const { t } = useTranslation();
  const certList = t('certificates.list', { returnObjects: true });
  const [lightboxCert, setLightboxCert] = useState(null);

  return (
    <>
      <div className="flex flex-col max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-6xl font-bold font-display underline decoration-wavy decoration-doodle-pink">
            {t('certificates.title')}
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Array.isArray(certList) && certList.map((cert, idx) => (
            <motion.div key={idx} variants={cardVariants} className="h-full">
              <Window 
                title={`Award #${idx+1}`} 
                bgClass="bg-[#fff] dark:bg-[#222] h-full"
                className="group cursor-pointer hover:-translate-y-2 transition-transform"
              >
                <div
                  className="relative w-full aspect-[4/3] overflow-hidden doodle-border mb-4"
                  onClick={() => setLightboxCert(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover filter sepia-[0.3] group-hover:sepia-0 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-doodle-yellow/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-display text-2xl font-bold text-doodle-ink transform rotate-[-10deg]">Click to View!</span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow text-center">
                  <h3 className="text-2xl font-bold font-display mb-1">
                    {cert.title}
                  </h3>
                  <span className="text-lg font-sans text-gray-500">{cert.issuer}</span>
                </div>
              </Window>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightboxCert && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setLightboxCert(null)} />

            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxCert(null)}
                className="absolute -top-1 -right-1 md:-top-3 md:-right-3 z-[70] w-10 h-10 md:w-12 md:h-12 bg-doodle-pink text-doodle-ink doodle-border shadow-sm flex items-center justify-center hover:scale-110 transition-transform font-bold text-xl"
              >
                X
              </button>
              <Window title="Viewing Certificate..." bgClass="bg-white dark:bg-[#222]">
                <div className="w-full flex justify-center p-4 doodle-border bg-gray-50">
                  <img src={lightboxCert.image} alt={lightboxCert.title} className="w-full max-h-[60vh] object-contain" />
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-3xl font-bold font-display">{lightboxCert.title}</h3>
                </div>
              </Window>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
