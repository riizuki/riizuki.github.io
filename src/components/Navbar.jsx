import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, User, Briefcase, Zap, Award, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t } = useTranslation();

  const navLinks = [
    { name: t('nav.home'), path: '/', icon: Home },
    { name: t('nav.about'), path: '/about', icon: User },
    { name: t('nav.projects'), path: '/projects', icon: Briefcase },
    { name: t('nav.skills'), path: '/skills', icon: Zap },
    { name: t('nav.certificates'), path: '/certificates', icon: Award },
    { name: t('nav.contact'), path: '/contact', icon: Mail },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-4 py-2 bg-[#d1d1d1] dark:bg-[#111] border-b-4 border-black dark:border-white shadow-[0_4px_0_0_#000]">
        
        {/* Left side: Logo/Brand */}
        <div className="flex items-center gap-2 mr-4">
          <div className="w-6 h-6 bg-acid-green border-2 border-black animate-spin-slow"></div>
          <span className="font-black font-display uppercase tracking-tighter text-xl hidden md:block">rizky_alfarid</span>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex flex-grow items-center justify-center space-x-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1 text-sm font-black uppercase tracking-widest transition-all duration-300 border-2 border-transparent ${
                  isActive
                    ? 'bg-acid-pink text-black border-black acid-shadow-active translate-y-[1px] translate-x-[1px]'
                    : 'text-black dark:text-white hover:bg-white dark:hover:bg-black hover:border-black dark:hover:border-white hover:acid-shadow-hover'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Center: Mobile Menu */}
        <div className="flex md:hidden flex-grow justify-center space-x-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                title={link.name}
                className={({ isActive }) =>
                  `p-2 transition-all duration-300 flex items-center justify-center border-2 border-transparent ${
                    isActive
                      ? 'bg-acid-pink text-black border-black acid-shadow-active translate-y-[1px] translate-x-[1px]'
                      : 'text-black dark:text-white hover:bg-white dark:hover:bg-black hover:border-black dark:hover:border-white hover:acid-shadow-hover'
                  }`
                }
              >
                {({ isActive }) => (
                  <Icon size={18} strokeWidth={3} />
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Right side: Tools */}
        <div className="flex items-center gap-2 ml-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
