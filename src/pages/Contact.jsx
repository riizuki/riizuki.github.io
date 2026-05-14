import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-16"
      >
        <div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6 text-gray-900 dark:text-white">
            {t('contact.title')}
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 mb-12">
            Have a project in mind, or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">Email</span>
              <a href="mailto:alfaridrizky69@gmail.com" className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 transition-colors">
                alfaridrizky69@gmail.com
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-1">Location</span>
              <p className="text-lg font-medium text-gray-900 dark:text-white">
                Cianjur, Jawa Barat, Indonesia
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-900 rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] border border-gray-100 dark:border-gray-800">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border-none bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-800 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border-none bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-800 outline-none transition-all placeholder-gray-400 dark:placeholder-gray-600 text-sm"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border-none bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-gray-800 outline-none transition-all resize-none placeholder-gray-400 dark:placeholder-gray-600 text-sm"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg text-sm"
            >
              {t('contact.send')}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
