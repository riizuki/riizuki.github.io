import { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [clicks, setClicks] = useState([]);

  // Main cursor position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for the "snappy" trail
  const springConfig = { damping: 25, stiffness: 400 };
  const mainX = useSpring(mouseX, springConfig);
  const mainY = useSpring(mouseY, springConfig);

  // Multi-step trail positions
  const trail1X = useSpring(mouseX, { damping: 30, stiffness: 250 });
  const trail1Y = useSpring(mouseY, { damping: 30, stiffness: 250 });
  const trail2X = useSpring(mouseX, { damping: 35, stiffness: 150 });
  const trail2Y = useSpring(mouseY, { damping: 35, stiffness: 150 });

  const handleMouseDown = useCallback((e) => {
    const id = Date.now();
    setClicks((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
    setTimeout(() => {
      setClicks((prev) => prev.filter((click) => click.id !== id));
    }, 600);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsMobile(true);
      return;
    }

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a') || 
                            target.closest('button') || 
                            target.closest('input') || 
                            target.closest('textarea') || 
                            target.closest('.skill-card') || 
                            target.closest('.project-card') ||
                            target.closest('.certificate-card');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, [mouseX, mouseY, handleMouseDown]);

  if (isMobile) return null;

  return (
    <>
      {/* Click Shockwave (Pixel Particles) */}
      <AnimatePresence>
        {clicks.map((click) => (
          <div
            key={click.id}
            style={{
              position: 'fixed',
              top: click.y,
              left: click.x,
              pointerEvents: 'none',
              zIndex: 99997,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{
                  x: (i % 2 === 0 ? 1 : -1) * Math.random() * 50,
                  y: (i < 4 ? 1 : -1) * Math.random() * 50,
                  opacity: 0,
                  scale: 0.2,
                  rotate: 90,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                  position: 'absolute',
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'var(--accent-color)',
                }}
              />
            ))}
          </div>
        ))}
      </AnimatePresence>

      {/* Trail 2 (Deepest) */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '12px',
          height: '12px',
          backgroundColor: 'var(--accent-hover)',
          opacity: 0.2,
          pointerEvents: 'none',
          zIndex: 99996,
          x: trail2X,
          y: trail2Y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Trail 1 (Middle) */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '18px',
          height: '18px',
          backgroundColor: 'var(--accent-color)',
          opacity: 0.4,
          pointerEvents: 'none',
          zIndex: 99997,
          x: trail1X,
          y: trail1Y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Main Cursor Wrapper */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '40px',
          height: '40px',
          pointerEvents: 'none',
          zIndex: 99999,
          x: mainX,
          y: mainY,
          translateX: '-50%',
          translateY: '-50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Cursor Shape */}
        <motion.div
          animate={{
            rotate: isHovered ? 135 : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          style={{
            width: '24px',
            height: '24px',
            position: 'relative',
          }}
        >
          {/* Pixel Crosshair / Pointer */}
          {!isHovered ? (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M4 4V20L8 16L12 20L14 18L10 14L16 14L4 4Z" fill="var(--text-color)" stroke="var(--bg-color)" strokeWidth="1" />
              <path d="M6 7V16.5L9 13.5L12 17.5L13 16.5L10 12.5L13.5 12.5L6 7Z" fill="var(--accent-color)" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none">
              <rect x="11" y="0" width="2" height="8" fill="var(--accent-color)" />
              <rect x="11" y="16" width="2" height="8" fill="var(--accent-color)" />
              <rect x="0" y="11" width="8" height="2" fill="var(--accent-color)" />
              <rect x="16" y="11" width="8" height="2" fill="var(--accent-color)" />
              <rect x="8" y="8" width="8" height="8" stroke="var(--accent-color)" strokeWidth="2" strokeDasharray="2 2" />
            </svg>
          )}
        </motion.div>

        {/* Floating Pixels (Orbiting while hovered) */}
        {isHovered && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            style={{ position: 'absolute', width: '40px', height: '40px' }}
          >
            <div style={{ position: 'absolute', top: 0, left: '50%', width: '4px', height: '4px', background: 'var(--accent-hover)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: '50%', width: '4px', height: '4px', background: 'var(--accent-hover)' }} />
          </motion.div>
        )}
      </motion.div>
    </>
  );
}


