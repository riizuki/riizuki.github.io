import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import Window from '../components/Window';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white font-black text-xs uppercase tracking-widest mb-4 acid-border shadow-[2px_2px_0_0_#000]">
            <Mail size={14} className="text-acid-pink" />
            GET IN TOUCH
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black dark:text-white font-display">
            {t('contact.title')}
          </h1>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Left — Info */}
        <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-8">
          <div className="text-lg font-bold text-black dark:text-white leading-relaxed p-4 bg-acid-cyan acid-border shadow-[4px_4px_0_0_#000]">
            Have a project in mind, or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
          </div>

          <div className="flex flex-col gap-6">
            <Window title="email.cfg" bgClass="bg-[#fff] dark:bg-black" className="hover:rotate-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black text-acid-green flex items-center justify-center shrink-0 acid-border">
                  <Mail size={24} strokeWidth={2.5} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Email Address</span>
                  <a
                    href="mailto:alfaridrizky69@gmail.com"
                    className="flex items-center gap-1.5 mt-1 text-base font-black text-black dark:text-white hover:text-acid-pink transition-colors"
                  >
                    <span className="truncate">alfaridrizky69@gmail.com</span>
                    <ArrowUpRight size={18} strokeWidth={3} className="shrink-0" />
                  </a>
                </div>
              </div>
            </Window>

            <Window title="location.cfg" bgClass="bg-[#fff] dark:bg-black" className="hover:-rotate-1">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-black text-acid-pink flex items-center justify-center shrink-0 acid-border">
                  <MapPin size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Location</span>
                  <p className="mt-1 text-base font-black text-black dark:text-white">
                    Cianjur, Jawa Barat, ID
                  </p>
                </div>
              </div>
            </Window>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div variants={fadeUp} className="lg:col-span-3">
          <Window title="contact_form.exe" bgClass="bg-acid-green text-black" titleBg="bg-black text-white">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-black uppercase tracking-widest text-black">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 acid-border bg-white text-black outline-none focus:ring-4 focus:ring-black placeholder-gray-400 font-bold"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-black">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 acid-border bg-white text-black outline-none focus:ring-4 focus:ring-black placeholder-gray-400 font-bold"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-black uppercase tracking-widest text-black">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 acid-border bg-white text-black outline-none focus:ring-4 focus:ring-black placeholder-gray-400 font-bold resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-4 bg-black text-acid-green font-black text-base uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors acid-border shadow-[4px_4px_0_0_#000] active:shadow-[2px_2px_0_0_#000] active:translate-y-[2px] active:translate-x-[2px]"
              >
                <Send size={20} strokeWidth={3} />
                {t('contact.send')}
              </button>
            </form>
          </Window>
        </motion.div>
      </motion.div>
    </div>
  );
}
