import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { useState, useRef, useCallback } from 'react';

/* ── animation variants ── */

const fadeUp = {
  hidden: { opacity: 0, y: 16, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/* ── Tilt wrapper ── */

function TiltCard({ children, className = '' }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 2.5;
    const rotateX = ((rect.height / 2 - y) / (rect.height / 2)) * 2.5;
    setTilt({ rotateX, rotateY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 900 }}
    >
      <motion.div
        animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        transition={{ type: 'spring', stiffness: 280, damping: 20 }}
        className={`
          transition-shadow duration-500
          ${isHovered ? 'shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-gray-300/40 dark:ring-gray-600/30' : 'shadow-sm'}
          ${className}
        `}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ── Main Page ── */

export default function Contact() {
  const { t } = useTranslation();
  const [focused, setFocused] = useState(null);

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <Mail size={20} className="text-gray-600 dark:text-gray-400" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
            Get In Touch
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
          {t('contact.title')}
        </h1>
      </motion.div>

      {/* Content */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        {/* Left — Info */}
        <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-8">
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            Have a project in mind, or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities.
          </p>

          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            <TiltCard className="bg-white dark:bg-gray-900/80 rounded-2xl border border-gray-200/60 dark:border-gray-700/40 p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-gray-600 dark:text-gray-400" />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">Email</span>
                  <a
                    href="mailto:alfaridrizky69@gmail.com"
                    className="group/link flex items-center gap-1.5 mt-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    <span className="relative truncate">
                      alfaridrizky69@gmail.com
                      <span className="absolute left-0 -bottom-0.5 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover/link:w-full" />
                    </span>
                    <ArrowUpRight size={13} className="shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </TiltCard>

            <TiltCard className="bg-white dark:bg-gray-900/80 rounded-2xl border border-gray-200/60 dark:border-gray-700/40 p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">Location</span>
                  <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">
                    Cianjur, Jawa Barat, Indonesia
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div variants={fadeUp} className="lg:col-span-3">
          <TiltCard className="bg-white dark:bg-gray-900/80 rounded-2xl border border-gray-200/60 dark:border-gray-700/40 overflow-hidden">
            <form className="p-7 md:p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {t('contact.name')}
                  </label>
                  <div className={`relative rounded-xl transition-all duration-300 ${focused === 'name' ? 'ring-2 ring-gray-300 dark:ring-gray-600' : ''}`}>
                    <input
                      type="text"
                      id="name"
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3 rounded-xl border-none bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-600 text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                    {t('contact.email')}
                  </label>
                  <div className={`relative rounded-xl transition-all duration-300 ${focused === 'email' ? 'ring-2 ring-gray-300 dark:ring-gray-600' : ''}`}>
                    <input
                      type="email"
                      id="email"
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3 rounded-xl border-none bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white outline-none transition-colors placeholder-gray-400 dark:placeholder-gray-600 text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {t('contact.message')}
                </label>
                <div className={`relative rounded-xl transition-all duration-300 ${focused === 'message' ? 'ring-2 ring-gray-300 dark:ring-gray-600' : ''}`}>
                  <textarea
                    id="message"
                    rows={5}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    className="w-full px-4 py-3 rounded-xl border-none bg-gray-50 dark:bg-gray-800/50 text-gray-900 dark:text-white outline-none transition-colors resize-none placeholder-gray-400 dark:placeholder-gray-600 text-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="w-full py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <Send size={15} />
                {t('contact.send')}
              </motion.button>
            </form>
          </TiltCard>
        </motion.div>
      </motion.div>
    </div>
  );
}
