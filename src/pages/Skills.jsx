import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Monitor, Server, Smartphone, Wrench, Layers } from 'lucide-react';
import Window from '../components/Window';

const categoryIcons = [Monitor, Server, Smartphone, Wrench];

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

export default function Skills() {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true });

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white font-black text-xs uppercase tracking-widest mb-4 acid-border shadow-[2px_2px_0_0_#000]">
            <Layers size={14} className="text-acid-pink" />
            TECH STACK DATABASE
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black dark:text-white font-display">
            {t('skills.title')}
          </h1>
        </div>
        <div className="text-sm font-bold max-w-xs uppercase bg-acid-green p-2 acid-border shadow-[2px_2px_0_0_#000] text-black">
          Primary tools, languages, and frameworks.
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Array.isArray(categories) && categories.map((cat, idx) => {
          const Icon = categoryIcons[idx % categoryIcons.length];
          const windowBgClasses = ['bg-acid-pink', 'bg-acid-cyan', 'bg-acid-purple text-white', 'bg-white'];
          const randomBg = windowBgClasses[idx % windowBgClasses.length];

          return (
            <motion.div key={idx} variants={cardVariants} className="h-full">
              <Window 
                title={`category_0${idx+1}.sys`} 
                bgClass={`${randomBg} h-full`}
              >
                <div className="flex items-center gap-4 mb-6 pb-4 border-b-4 border-black dark:border-white border-dotted">
                  <div className="w-14 h-14 bg-black text-white rounded-none flex items-center justify-center acid-border shadow-[2px_2px_0_0_#000]">
                    <Icon size={28} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-black uppercase tracking-tight font-display">{cat.name}</h2>
                    <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-0.5 acid-border">
                      {cat.items.length} SKILLS
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {cat.items?.map((skill, sIdx) => {
                    const pillBgClasses = ['bg-white', 'bg-black text-white', 'bg-acid-green', 'bg-acid-cyan'];
                    const pillBg = pillBgClasses[sIdx % pillBgClasses.length];
                    return (
                      <div
                        key={sIdx}
                        className={`px-3 py-2 ${pillBg} acid-border text-sm font-black uppercase shadow-[2px_2px_0_0_#000] hover:-translate-y-1 transition-transform cursor-crosshair text-black dark:text-black`}
                      >
                        {skill}
                      </div>
                    );
                  })}
                </div>
              </Window>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
