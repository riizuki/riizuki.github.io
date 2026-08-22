import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, X, ZoomIn } from 'lucide-react';
import { useState } from 'react';
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
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white font-black text-xs uppercase tracking-widest mb-4 acid-border shadow-[2px_2px_0_0_#000]">
              <Award size={14} className="text-acid-green" />
              {Array.isArray(certList) ? `${certList.length} ACHIEVEMENTS` : 'CERTIFICATES'}
            </div>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black dark:text-white font-display">
              {t('certificates.title')}
            </h1>
          </div>
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
                title={`cert_0${idx+1}.png`} 
                bgClass="bg-[#fff] dark:bg-black h-full"
                className="group cursor-pointer"
              >
                <div
                  className="relative w-full aspect-[4/3] overflow-hidden acid-border mb-4"
                  onClick={() => setLightboxCert(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover filter grayscale contrast-[1.2] group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-acid-green/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-black text-acid-green rounded-full flex items-center justify-center acid-border shadow-[4px_4px_0_0_#000]">
                      <ZoomIn size={24} strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-black text-white text-[10px] font-black uppercase px-2 py-1 acid-border">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-acid-cyan text-black w-max px-2 py-0.5 acid-border mb-2">{cert.date}</span>
                  <h3 className="text-lg font-black uppercase tracking-tight text-black dark:text-white leading-tight font-display mb-1 group-hover:text-acid-pink transition-colors">
                    {cert.title}
                  </h3>
                  <span className="text-xs font-bold uppercase italic text-gray-500">{cert.issuer}</span>
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
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setLightboxCert(null)} />

            <motion.div
              className="relative max-w-5xl w-full"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Window title="image_viewer.exe" bgClass="bg-white dark:bg-black">
                <button
                  onClick={() => setLightboxCert(null)}
                  className="absolute -top-3 -right-3 z-10 w-10 h-10 bg-acid-pink text-black acid-border shadow-[2px_2px_0_0_#000] flex items-center justify-center hover:bg-black hover:text-acid-pink transition-colors"
                >
                  <X size={24} strokeWidth={3} />
                </button>
                <div className="w-full flex justify-center p-2 bg-checkerboard opacity-90">
                  <img src={lightboxCert.image} alt={lightboxCert.title} className="w-full max-h-[70vh] object-contain acid-border bg-white" />
                </div>
                <div className="mt-4 pt-4 border-t-4 border-black dark:border-white border-dashed">
                  <h3 className="text-xl font-black uppercase text-black dark:text-white font-display">{lightboxCert.title}</h3>
                  <p className="text-sm font-bold uppercase text-gray-500 mt-1">{lightboxCert.issuer} // {lightboxCert.date}</p>
                </div>
              </Window>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
