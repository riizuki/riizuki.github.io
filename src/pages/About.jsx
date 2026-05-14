import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const jobs = t('experience.jobs', { returnObjects: true });

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16"
      >
        <div className="md:col-span-5 flex flex-col gap-8">
          <div className="w-full aspect-square rounded-[2.5rem] overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-sm">
            <img 
              src="/images/profile/profile.JPG" 
              alt="Rizky Al Farid Hafizh" 
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">
              {t('about.title')}
            </h1>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>{t('about.content1')}</p>
              <p>{t('about.content2')}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col mt-8 md:mt-0">
          <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">{t('experience.title')}</h2>
          <div className="space-y-8">
            {Array.isArray(jobs) && jobs.map((job, idx) => (
              <div key={idx} className="flex flex-col border-l border-gray-200 dark:border-gray-800 pl-6 relative pb-2">
                <div className="absolute w-2.5 h-2.5 bg-gray-900 dark:bg-white rounded-full -left-[5px] top-1.5 shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#111827]"></div>
                <h3 className="font-semibold text-base text-gray-900 dark:text-white">{job.role}</h3>
                <p className="text-gray-900 dark:text-white font-medium mt-1 text-sm">{job.company}</p>
                <p className="text-gray-400 dark:text-gray-500 text-xs my-1.5 font-mono uppercase tracking-wider">{job.period}</p>
                {job.description && (
                  <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm leading-relaxed">{job.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
