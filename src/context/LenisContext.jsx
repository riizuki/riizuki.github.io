
import { createContext, useContext, useEffect, useRef, useState, useCallback } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext(null);

export function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const [scrollData, setScrollData] = useState({
    progress: 0,
    velocity: 0,
    direction: 0,
    scroll: 0,
  });

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    lenis.on('scroll', (e) => {
      setScrollData({
        progress: e.progress,
        velocity: e.velocity,
        direction: e.direction,
        scroll: e.scroll,
      });
    });

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: lenisRef, scrollData }}>
      {children}
    </LenisContext.Provider>
  );
}

export function useLenisScroll() {
  const context = useContext(LenisContext);
  if (!context) {
    return { scrollData: { progress: 0, velocity: 0, direction: 0, scroll: 0 }, lenis: { current: null } };
  }
  return context;
}


export function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);
  const { scrollData } = useLenisScroll();

  const updateProgress = useCallback(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const windowH = window.innerHeight;
    
    const rawProgress = (windowH - rect.top) / (windowH + rect.height);
    setProgress(Math.max(0, Math.min(1, rawProgress)));
  }, [ref]);

  useEffect(() => {
    updateProgress();
  }, [scrollData.scroll, updateProgress]);

  return progress;
}


export function useInView(ref, margin = '-80px') {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: margin }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, margin]);

  return inView;
}
