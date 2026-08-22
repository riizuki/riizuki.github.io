import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Window from '../components/Window';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-6xl font-bold font-display underline decoration-wavy decoration-doodle-green mb-4">
          {t('contact.title')}
        </h1>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-5 gap-12"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Left — Info */}
        <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-8">
          <div className="text-2xl font-sans text-gray-700 dark:text-gray-300">
            Have a project in mind, or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
          </div>

          <div className="flex flex-col gap-6">
            <Window title="Email" bgClass="bg-doodle-yellow text-doodle-ink" className="transform rotate-2">
              <a href="mailto:alfaridrizky69@gmail.com" className="text-2xl font-bold font-sans hover:underline decoration-wavy break-all">
                alfaridrizky69@gmail.com
              </a>
            </Window>

            <Window title="Location" bgClass="bg-doodle-pink text-doodle-ink" className="transform -rotate-1">
              <p className="text-2xl font-bold font-sans">
                Cianjur, Jawa Barat, ID
              </p>
            </Window>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div variants={fadeUp} className="lg:col-span-3">
          <Window title="Send a message!" bgClass="bg-white dark:bg-[#222]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xl font-bold font-display">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 doodle-border-sm bg-transparent outline-none focus:bg-doodle-yellow/20 text-xl font-sans"
                    placeholder="Your Name..."
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xl font-bold font-display">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 doodle-border-sm bg-transparent outline-none focus:bg-doodle-yellow/20 text-xl font-sans"
                    placeholder="you@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xl font-bold font-display">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 doodle-border-sm bg-transparent outline-none focus:bg-doodle-yellow/20 text-xl font-sans resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-doodle-blue text-doodle-ink font-bold text-2xl font-display doodle-border hover:scale-105 transition-transform"
              >
                {t('contact.send')} &rarr;
              </button>
            </form>
          </Window>
        </motion.div>
      </motion.div>
    </div>
  );
}
