import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Window from '../components/Window';

export default function About() {
  const { t } = useTranslation();
  const jobs = t('experience.jobs', { returnObjects: true });

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12"
      >
        <div className="md:col-span-5 flex flex-col gap-8">
          <Window title="about_me.txt" bgClass="bg-[#fff] dark:bg-black" className="h-full">
            <div className="mb-6 relative group">
              <div className="absolute inset-0 bg-stripes opacity-30 mix-blend-overlay"></div>
              <img
                src="/images/profile/profile.JPG"
                alt="Rizky Al Farid Hafizh"
                className="w-full aspect-square object-cover object-top acid-border filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tighter mb-4 text-black dark:text-white font-display">
              {t('about.title')}
            </h1>
            <div className="space-y-4 text-sm text-black dark:text-white leading-relaxed font-bold">
              <p className="bg-acid-green dark:bg-acid-green text-black p-2">{t('about.content1')}</p>
              <p className="border-l-4 border-black dark:border-white pl-4 italic">{t('about.content2')}</p>
            </div>
          </Window>
        </div>

        <div className="md:col-span-7 flex flex-col h-full">
          <Window title="experience.log" bgClass="bg-acid-pink dark:bg-acid-pink text-black" titleBg="bg-black text-white" className="h-full">
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter font-display">{t('experience.title')}</h2>
            <div className="space-y-6">
              {Array.isArray(jobs) && jobs.map((job, idx) => (
                <div key={idx} className="flex flex-col border-b-2 border-black pb-6 relative group">
                  <div>
                    <h3 className="inline-block max-w-full font-black text-lg uppercase bg-black text-white px-2 py-1 mb-2 break-words">{job.role}</h3>
                  </div>
                  <div>
                    <p className="inline-block max-w-full font-bold text-base bg-white dark:bg-white text-black px-2 py-1 acid-border break-words">{job.company}</p>
                  </div>
                  <p className="text-xs my-2 font-black uppercase tracking-widest">{job.period}</p>
                  {job.description && (
                    <p className="text-sm leading-relaxed font-bold mt-2 p-3 bg-white/50 acid-border shadow-[2px_2px_0_0_#000]">{job.description}</p>
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
