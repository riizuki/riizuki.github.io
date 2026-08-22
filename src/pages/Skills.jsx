import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
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

export default function Skills() {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true });

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-6xl font-bold font-display inline-block bg-doodle-pink text-doodle-ink px-4 py-2 transform rotate-1 doodle-border shadow-sm">
          {t('skills.title')}
        </h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Array.isArray(categories) && categories.map((cat, idx) => {
          return (
            <motion.div key={idx} variants={cardVariants} className="h-full">
              <Window 
                title={cat.name} 
                bgClass="bg-white dark:bg-[#222] h-full"
              >
                <div className="flex flex-wrap gap-3 mt-4">
                  {cat.items?.map((skill, sIdx) => {
                    const pillBgClasses = ['bg-doodle-yellow', 'bg-doodle-blue', 'bg-doodle-green', 'bg-doodle-pink', 'bg-white'];
                    const pillBg = pillBgClasses[sIdx % pillBgClasses.length];
                    return (
                      <div
                        key={sIdx}
                        className={`px-3 py-1 ${pillBg} doodle-border text-xl font-sans text-doodle-ink shadow-sm hover:scale-110 transition-transform cursor-crosshair transform ${Math.random() > 0.5 ? 'rotate-2' : '-rotate-1'}`}
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
