import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-doodle-paper dark:bg-[#1a1a1a] z-[9999]">
      <div className="flex flex-col items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-dashed border-doodle-ink dark:border-gray-300 rounded-full mb-4"
        />
        <span className="font-display font-bold text-2xl text-doodle-ink dark:text-gray-200 animate-pulse tracking-widest">
          Scribbling...
        </span>
      </div>
    </div>
  );
}
