import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Window from '../components/Window';

export default function About() {
  const { t } = useTranslation();
  const jobs = t('experience.jobs', { returnObjects: true });

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12"
      >
        <div className="md:col-span-5 flex flex-col gap-8">
          <Window title="About Me" bgClass="bg-[#fff] dark:bg-[#222]" className="h-full">
            <div className="mb-6">
              <img
                src="/images/profile/profile.JPG"
                alt="Rizky Al Farid Hafizh"
                className="w-full aspect-square object-cover object-top doodle-border filter sepia-[0.2] transform -rotate-1"
              />
            </div>
            <h1 className="text-4xl font-bold mb-4 font-display">
              {t('about.title')}
            </h1>
            <div className="space-y-4 text-xl font-sans text-gray-700 dark:text-gray-300">
              <p className="highlighter-yellow inline text-doodle-ink">{t('about.content1')}</p>
              <br/><br/>
              <p>{t('about.content2')}</p>
            </div>
          </Window>
        </div>

        <div className="md:col-span-7 flex flex-col h-full">
          <Window title="Experience Log" bgClass="bg-white dark:bg-[#2a2a2a]" className="h-full scribble-bg">
            <h2 className="text-4xl font-bold mb-8 font-display">{t('experience.title')}</h2>
            <div className="space-y-8 relative">
              {Array.isArray(jobs) && jobs.map((job, idx) => (
                <div key={idx} className="flex flex-col relative pl-6 border-l-2 border-dashed border-gray-400">
                  <div className="absolute w-4 h-4 rounded-full bg-doodle-pink -left-[9px] top-1 doodle-border"></div>
                  <div>
                    <h3 className="inline-block max-w-full font-bold text-2xl font-display break-words">{job.role}</h3>
                  </div>
                  <div>
                    <p className="inline-block max-w-full text-xl text-doodle-ink dark:text-white bg-doodle-yellow px-2 py-0.5 break-words transform rotate-1 my-1">{job.company}</p>
                  </div>
                  <p className="text-lg my-1 font-sans text-gray-500">{job.period}</p>
                  {job.description && (
                    <p className="text-xl font-sans mt-2 text-gray-700 dark:text-gray-300">{job.description}</p>
                  )}
                </div>
              ))}
            </div>
          </Window>
        </div>
      </motion.div>
    </div>
  );
}
