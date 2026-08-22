import { motion } from 'framer-motion';

export default function Window({ title, children, className, bgClass = "bg-white dark:bg-black", titleBg = "bg-white dark:bg-black text-black dark:text-white" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`acid-border acid-shadow flex flex-col ${bgClass} ${className} transition-all duration-300 hover:acid-shadow-hover`}
    >
      <div className={`border-b-2 border-black dark:border-white ${titleBg} px-3 py-2 flex justify-between items-center select-none`}>
        <span className="font-black text-xs uppercase tracking-widest">{title}</span>
        <div className="flex gap-1.5">
          <div className="w-3.5 h-3.5 border-2 border-black bg-acid-cyan"></div>
          <div className="w-3.5 h-3.5 border-2 border-black bg-acid-pink rounded-full"></div>
          <div className="w-3.5 h-3.5 border-2 border-black bg-black flex items-center justify-center">
            <span className="text-white text-[10px] font-bold leading-none">×</span>
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow relative overflow-hidden">
        {children}
      </div>
    </motion.div>
  );
}
