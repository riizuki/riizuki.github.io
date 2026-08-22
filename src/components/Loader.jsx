import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          return 100;
        }
        return old + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black z-[9999] cursor-wait">
      
      {/* Background decorations */}
      <div className="absolute inset-0 bg-stripes opacity-20"></div>
      <div className="absolute top-10 left-10 text-6xl font-black opacity-10 font-display">*</div>
      <div className="absolute bottom-10 right-10 text-6xl font-black opacity-10 font-display">*</div>

      <div className="relative z-10 w-full max-w-md px-6">
        <div className="bg-acid-green border-4 border-black p-1 shadow-[8px_8px_0_0_#000] mb-4">
          <div className="border-b-4 border-black pb-2 mb-2 flex justify-between items-center px-2">
            <span className="font-black text-black uppercase tracking-widest text-sm">boot_sequence.exe</span>
            <div className="flex gap-2">
              <div className="w-4 h-4 bg-black"></div>
              <div className="w-4 h-4 bg-acid-pink border-2 border-black"></div>
            </div>
          </div>
          
          <div className="p-4 bg-black text-acid-green font-sans text-xs md:text-sm h-48 overflow-hidden flex flex-col justify-end">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="space-y-1"
            >
              <p>{'>'} SYSTEM BOOT INITIATED...</p>
              <p>{'>'} LOADING MODULES...</p>
              <p>{'>'} ASSETS FETCHED [OK]</p>
              <p className="animate-pulse">{'>'} COMPILING UI: {Math.min(progress, 100)}%</p>
            </motion.div>
          </div>
        </div>

        {/* Big chunky progress bar */}
        <div className="w-full h-8 bg-white border-4 border-black shadow-[4px_4px_0_0_#000] p-1 relative overflow-hidden">
          <div className="absolute inset-0 bg-checkerboard opacity-20 z-0"></div>
          <motion.div 
            className="h-full bg-acid-pink relative z-10 border-r-4 border-black"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
        
        <div className="text-center mt-4">
          <span className="bg-black text-white px-4 py-1 font-black uppercase tracking-widest text-sm">
            Please Wait
          </span>
        </div>
      </div>

    </div>
  );
}
