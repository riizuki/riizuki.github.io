import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-50 dark:bg-gray-900 z-[9999]">
      <div className="flex gap-2">
        {[0, 1, 2].map((idx) => (
          <motion.span
            key={idx}
            className="w-3.5 h-3.5 rounded-full bg-gray-900 dark:bg-white"
            initial={{ opacity: 0.25, y: 0 }}
            animate={{ opacity: 1, y: -6 }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: idx * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
}
