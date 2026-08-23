import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLenisScroll, useScrollProgress } from '../context/LenisContext';





const revealVariants = {
  'fade-up': {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } },
  },
  'pop-in': {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 15, stiffness: 120 } },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', damping: 20, stiffness: 100 } },
  },
};

export function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  className = '',
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-50px 0px' });

  const v = revealVariants[variant] || revealVariants['fade-up'];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={v}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}





export function ParallaxLayer({
  children,
  speed = 0.3,
  className = '',
}) {
  const ref = useRef(null);
  const progress = useScrollProgress(ref);
  const yOffset = (progress - 0.5) * speed * 150;

  return (
    <motion.div
      ref={ref}
      style={{ y: yOffset }}
      className={className}
    >
      {children}
    </motion.div>
  );
}





export function VelocityText({ children, className = '' }) {
  const { scrollData } = useLenisScroll();
  const skew = Math.max(-5, Math.min(5, scrollData.velocity * 2));

  return (
    <motion.div
      style={{ skewX: skew }}
      className={className}
      transition={{ type: 'spring', stiffness: 400, damping: 40 }}
    >
      {children}
    </motion.div>
  );
}





const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', damping: 20, stiffness: 100 },
  },
};

export function StaggerContainer({ children, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}






export function Starburst({ size = 40, color = '#E2A63B', className = '' }) {
  return (
    <div className={`${className.includes('absolute') ? '' : 'relative'} flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <div className="absolute w-full h-[15%] rounded-full" style={{ backgroundColor: color }} />
      <div className="absolute w-full h-[15%] rounded-full rotate-45" style={{ backgroundColor: color }} />
      <div className="absolute w-full h-[15%] rounded-full rotate-90" style={{ backgroundColor: color }} />
      <div className="absolute w-full h-[15%] rounded-full rotate-[135deg]" style={{ backgroundColor: color }} />
    </div>
  );
}


export function ColorBlock({ color, className = '' }) {
  return (
    <div 
      className={`absolute top-0 left-0 w-full h-full -z-10 ${className}`} 
      style={{ backgroundColor: color }}
    />
  );
}





export function ScrollProgressBar() {
  const { scrollData } = useLenisScroll();
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? scrollData.scroll / maxScroll : 0;
  const safeProgress = Math.max(0, Math.min(1, progress));

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-mcm-cream dark:bg-mcm-dark z-[100] border-b-2 border-mcm-dark dark:border-mcm-border-light">
      <div 
        className="h-full bg-mcm-mustard border-r-2 border-mcm-dark transition-all duration-75"
        style={{ width: `${safeProgress * 100}%` }}
      />
    </div>
  );
}
