import { motion } from 'framer-motion';

export default function Window({ title, children, className, bgClass = "bg-white dark:bg-[#222]", titleBg = "" }) {
  // Random slight rotation for the tape
  const tapeRotation = Math.random() > 0.5 ? 'rotate-2' : '-rotate-2';
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`doodle-border doodle-shadow flex flex-col ${bgClass} ${className} relative mt-4`}
    >
      {/* Hand-drawn Tape */}
      <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray-300/60 dark:bg-gray-600/60 backdrop-blur-sm ${tapeRotation} shadow-sm z-10`} style={{ clipPath: 'polygon(5% 0%, 95% 5%, 98% 95%, 2% 100%)' }}></div>
      
      {title && (
        <div className={`pt-4 pb-2 px-6 flex justify-center items-center ${titleBg}`}>
          <span className="font-display font-bold text-lg text-doodle-ink dark:text-gray-200">{title}</span>
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow relative overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}
