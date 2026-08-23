import { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useLenisScroll } from '../context/LenisContext';
import { Starburst } from './ScrollAnimations';

export default function Navbar() {
  const { t } = useTranslation();
  const { scrollData } = useLenisScroll();
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollRef = useRef(0);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.skills'), path: '/skills' },
    { name: t('nav.certificates'), path: '/certificates' },
    { name: t('nav.journal'), path: '/journal' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) return; 
    if (scrollData.scroll > 150 && scrollData.direction === 1 && scrollData.velocity > 0.5) {
      setHidden(true);
    } else if (scrollData.direction === -1 || scrollData.scroll < 100) {
      setHidden(false);
    }
    lastScrollRef.current = scrollData.scroll;
  }, [scrollData, isMobileMenuOpen]);

  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const isScrolled = scrollData.scroll > 20;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 w-full z-50 pt-4 md:pt-6 px-4 flex justify-center pointer-events-none"
        animate={{ y: hidden ? -150 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <nav
          className={`relative pointer-events-auto flex items-center justify-between w-full max-w-7xl px-3 py-2 rounded-full transition-all duration-500 border-4 ${
            isScrolled 
              ? 'bg-mcm-mustard dark:bg-[#1F222B] border-mcm-dark dark:border-[#EBE7DF] shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] md:shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] md:dark:shadow-[6px_6px_0px_0px_#F4F1EA]' 
              : 'bg-mcm-cream dark:bg-mcm-dark border-mcm-dark dark:border-[#EBE7DF] shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] md:shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] md:dark:shadow-[8px_8px_0px_0px_#F4F1EA]'
          }`}
        >
          
          
          <div className={`flex items-center gap-2 px-4 md:px-5 py-2 rounded-full z-50 transition-colors ${
            isScrolled ? 'bg-mcm-cream dark:bg-[#EBE7DF] text-mcm-dark' : 'bg-mcm-dark dark:bg-mcm-cream text-mcm-cream dark:text-mcm-dark'
          }`}>
            <Starburst size={20} color={isScrolled ? "var(--color-mcm-teal)" : "var(--color-mcm-orange)"} className="animate-spin-slow-reverse" />
            <span className="font-display font-bold text-lg md:text-xl uppercase tracking-widest pt-1">
              Rizky
            </span>
          </div>

          
          {/* Center: Navigation Links */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 z-50">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative whitespace-nowrap font-display text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-colors duration-200 ${
                    isActive
                      ? 'bg-mcm-dark dark:bg-[#EBE7DF] text-mcm-cream dark:text-mcm-dark'
                      : 'text-mcm-dark dark:text-[#EBE7DF] hover:bg-mcm-teal/20'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right: Theme & Language */}
          <div className="flex items-center gap-2 z-50">
            <div className="bg-mcm-cream dark:bg-mcm-dark rounded-full flex items-center border-2 border-mcm-dark dark:border-[#EBE7DF] overflow-hidden h-10 hidden sm:flex">
              <LanguageSwitcher />
              <div className="w-[2px] h-full bg-mcm-dark dark:bg-mcm-cream" />
              <ThemeToggle />
            </div>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 bg-mcm-orange border-2 border-mcm-dark dark:border-[#EBE7DF] rounded-full flex items-center justify-center text-mcm-dark dark:text-[#EBE7DF] hover:bg-mcm-teal hover:text-mcm-cream dark:text-mcm-dark transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          </div>
          
        </nav>
      </motion.header>

      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-mcm-teal dark:bg-mcm-dark flex flex-col items-center justify-start pt-32 pb-12 overflow-y-auto overflow-x-hidden"
          >
            
            <Starburst size={600} color="rgba(44,43,41,0.05)" className="absolute -top-32 -left-32 animate-spin-slow pointer-events-none" />
            <Starburst size={400} color="rgba(44,43,41,0.05)" className="absolute -bottom-20 -right-20 animate-spin-slow-reverse pointer-events-none" />

            
            <div className="flex flex-col items-center gap-6 w-full max-w-sm px-6 relative z-10">
              
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  className="w-full"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block w-full text-center py-4 font-display font-bold uppercase tracking-widest text-3xl md:text-4xl border-4 border-mcm-dark dark:border-[#EBE7DF] shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] md:shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] md:dark:shadow-[6px_6px_0px_0px_#F4F1EA] transition-all ${
                        isActive ? 'bg-mcm-mustard text-mcm-dark dark:text-[#EBE7DF] translate-x-2 -translate-y-2 shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] md:shadow-[12px_12px_0px_0px_rgba(44,43,41,1)] dark:shadow-[6px_6px_0px_0px_#F4F1EA] md:dark:shadow-[12px_12px_0px_0px_#F4F1EA]' : 'bg-mcm-cream dark:bg-mcm-dark text-mcm-dark dark:text-[#EBE7DF] active:translate-x-2 active:-translate-y-2'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}

              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 sm:hidden bg-mcm-cream dark:bg-mcm-dark border-4 border-mcm-dark dark:border-[#EBE7DF] shadow-[4px_4px_0px_0px_rgba(44,43,41,1)] md:shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] md:dark:shadow-[6px_6px_0px_0px_#F4F1EA] p-2 flex gap-4 rounded-full w-fit"
              >
                 <LanguageSwitcher />
                 <ThemeToggle />
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
