import PageTransition from '../components/PageTransition';
import { useAppContext } from '../context/AppContext';
import { translations } from '../utils/translations';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const { lang } = useAppContext();
  const t = translations[lang].home;

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [phase, setPhase] = useState('typing1');

  useEffect(() => {
    const full1 = "RIZKY AL FARID";
    const full2 = "HAFIZH";

    const getTypingSpeed = () => Math.random() * 60 + 40;
    const DELETING_SPEED = 30;
    const PAUSE_DURATION = 2500;

    let timeout;

    switch (phase) {
      case 'typing1':
        if (text1.length < full1.length) {
          timeout = setTimeout(() => setText1(full1.slice(0, text1.length + 1)), getTypingSpeed());
        } else {
          timeout = setTimeout(() => setPhase('typing2'), 400);
        }
        break;
      case 'typing2':
        if (text2.length < full2.length) {
          timeout = setTimeout(() => setText2(full2.slice(0, text2.length + 1)), getTypingSpeed());
        } else {
          timeout = setTimeout(() => setPhase('pausing'), PAUSE_DURATION);
        }
        break;
      case 'pausing':
        timeout = setTimeout(() => setPhase('deleting2'), 1000);
        break;
      case 'deleting2':
        if (text2.length > 0) {
          timeout = setTimeout(() => setText2(full2.slice(0, text2.length - 1)), DELETING_SPEED);
        } else {
          timeout = setTimeout(() => setPhase('deleting1'), 100);
        }
        break;
      case 'deleting1':
        if (text1.length > 0) {
          timeout = setTimeout(() => setText1(full1.slice(0, text1.length - 1)), DELETING_SPEED);
        } else {
          timeout = setTimeout(() => setPhase('pausingEmpty'), 1000);
        }
        break;
      case 'pausingEmpty':
        timeout = setTimeout(() => setPhase('typing1'), 500);
        break;
      default:
        break;
    }

    return () => clearTimeout(timeout);
  }, [text1, text2, phase]);

  const renderAnimatedText = (text, isOutline = false, showCursor = false) => {
    return (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <AnimatePresence mode="popLayout">
          {text.split('').map((char, i) => (
            <motion.span
              key={`${char}-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.05 }}
              style={{
                display: 'inline-block',
                color: isOutline ? 'var(--surface-color)' : 'inherit',
                WebkitTextStroke: isOutline ? '1px var(--text-color)' : 'none'
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </AnimatePresence>
        {showCursor && (
          <motion.span
            layoutId="active-cursor"
            className="cursor-animate"
            transition={{ type: 'spring', stiffness: 1000, damping: 50 }}
            style={{
              display: 'inline-block',
              width: 'clamp(8px, 2vw, 12px)',
              height: '1em',
              backgroundColor: 'var(--accent-color)',
              marginLeft: '4px',
              flexShrink: 0
            }}
          ></motion.span>
        )}
      </div>
    );
  };

  return (
    <PageTransition>
      <section className="section container flex-responsive pixel-box-responsive" style={{ justifyContent: 'center', gap: 'clamp(2rem, 10vw, 6rem)', alignItems: 'center', minHeight: 'calc(100vh - 120px)' }}>

        <div style={{
          width: 'clamp(300px, 50vw, 600px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          flexShrink: 0
        }}>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.8rem, 3vw, 1.2rem)', color: 'var(--accent-color)', marginBottom: '1.5rem', textShadow: '2px 2px 0px var(--shadow-color)' }}>
            &gt; {t.greeting}
          </p>

          <h1 style={{
            fontSize: 'clamp(1.1rem, 5.5vw, 3.5rem)',
            marginBottom: '1.5rem',
            textShadow: '4px 4px 0px var(--shadow-color)',
            lineHeight: '1.2',
            height: 'clamp(20px, 15vw, 180px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            width: '100%'
          }}>
            <div style={{ height: '1.5em', display: 'flex', alignItems: 'center' }} className="text-crt">
              {renderAnimatedText(text1, false, (phase === 'typing1' || phase === 'deleting1'))}
            </div>
            <div style={{ height: '1.5em', display: 'flex', alignItems: 'center' }} className="text-crt">
              {renderAnimatedText(text2, true, (phase === 'typing2' || phase === 'deleting2' || phase === 'pausing'))}
            </div>
          </h1>
          <h2 style={{ fontSize: 'clamp(0.9rem, 4vw, 1.5rem)', marginBottom: '2rem', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', display: 'inline-block', padding: '0.5rem 1rem' }}>
            {t.role}
          </h2>
          <p style={{ width: '100%', fontSize: 'clamp(1rem, 4vw, 1.4rem)', marginBottom: '3rem', backgroundColor: 'var(--surface-color)', padding: '1.5rem', border: '4px solid var(--border-color)', boxShadow: '8px 8px 0px var(--shadow-color)', lineHeight: '1.5' }}>
            {t.description}
          </p>
          <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <Link to="/projects" className="btn-primary" style={{ transition: 'all 0.1s step-end' }}>
              [ {t.cta_projects} ]
            </Link>
            <Link to="/contact" className="btn-outline">
              {t.cta_contact}
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', backgroundColor: 'var(--bg-color)', border: '4px solid var(--border-color)', padding: '1.2rem', borderLeft: '10px solid var(--accent-color)' }}>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', color: 'var(--text-color)' }}>{t.client_title}</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>&gt; {t.client_subtitle}</p>
          </div>
        </div>

        {/* OS Window Avatar with fixed sizing fix */}
        <div style={{ width: '100%', maxWidth: '350px', backgroundColor: 'var(--bg-color)', border: '4px solid var(--border-color)', boxShadow: 'clamp(6px, 2vw, 12px) clamp(6px, 2vw, 12px) 0px var(--shadow-color)', display: 'flex', flexDirection: 'column', margin: '0' }}>
          <div style={{ padding: '0.5rem 0.8rem', borderBottom: '4px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}>
            <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-heading)' }}>PROFILE.EXE</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{ width: '10px', height: '10px', border: '2px solid var(--bg-color)', backgroundColor: 'var(--surface-color)' }}></div>
              <div style={{ width: '10px', height: '10px', border: '2px solid var(--bg-color)', backgroundColor: 'var(--bg-color)' }}></div>
              <div style={{ width: '10px', height: '10px', border: '2px solid var(--bg-color)', backgroundColor: 'var(--accent-color)' }}></div>
            </div>
          </div>

          <div style={{ width: '100%', height: 'clamp(280px, 40vh, 380px)', overflow: 'hidden', backgroundColor: 'var(--surface-color)', position: 'relative' }}>
            <img
              src="/images/profile/profile.JPG"
              alt="Avatar"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

      </section>
    </PageTransition>
  );
}
