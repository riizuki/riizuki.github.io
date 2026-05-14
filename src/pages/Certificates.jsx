import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight } from 'lucide-react';

export default function Certificates() {
  const { t } = useTranslation();
  const certList = t('certificates.list', { returnObjects: true });

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">{t('certificates.title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(certList) && certList.map((cert, idx) => (
            <div key={idx} className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-[2rem] p-6 transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-gray-800">
              <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm relative aspect-[4/3] mb-6">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="flex flex-col flex-grow">
                <p className="text-gray-400 dark:text-gray-500 text-xs mb-2 font-mono uppercase tracking-widest">{cert.date}</p>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white leading-tight">{cert.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs mb-6 font-medium">
                  {cert.issuer}
                </p>
                
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <a href="#" className="inline-flex items-center gap-1.5 font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors text-sm">
                    {t('certificates.view')} <ArrowUpRight size={16} />
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
