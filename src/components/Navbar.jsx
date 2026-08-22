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
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-max max-w-[95vw] z-50">
      <nav className="flex items-center justify-between px-3 md:px-6 py-2 bg-doodle-paper dark:bg-[#222] doodle-border doodle-shadow overflow-x-auto no-scrollbar">
        
        {/* Left side: Logo */}
        <div className="flex items-center gap-2 mr-2 md:mr-6">
          <span className="font-display font-bold text-xl md:text-2xl animate-sketch hidden sm:block">Rizky</span>
          <span className="font-display font-bold text-xl animate-sketch sm:hidden">R.</span>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden md:flex flex-grow items-center justify-center space-x-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1 font-sans text-lg transition-all duration-300 ${
                  isActive
                    ? 'highlighter-yellow text-doodle-ink dark:text-doodle-ink font-bold animate-sketch inline-block'
                    : 'text-doodle-ink dark:text-gray-300 hover:text-gray-500'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Center: Mobile Menu */}
        <div className="flex md:hidden flex-grow justify-center space-x-1 sm:space-x-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                title={link.name}
                className={({ isActive }) =>
                  `p-1.5 transition-all duration-300 flex items-center justify-center rounded-full ${
                    isActive
                      ? 'highlighter-yellow text-doodle-ink dark:text-doodle-ink animate-sketch'
                      : 'text-doodle-ink dark:text-gray-300 hover:text-gray-500'
                  }`
                }
              >
                {({ isActive }) => (
                  <Icon size={18} strokeWidth={isActive ? 3 : 2} className={isActive ? "animate-sketch" : ""} />
                )}
              </NavLink>
            );
          })}
        </div>

        {/* Right side: Tools */}
        <div className="flex items-center gap-2 md:gap-3 ml-2 pl-2 md:ml-6 border-l-2 border-dashed border-gray-400 md:pl-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
