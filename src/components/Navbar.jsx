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
    <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-max max-w-[95vw]">
      <nav className="flex items-center p-2 md:p-2.5 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-white/50 dark:border-gray-800/50">
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1 px-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 shadow-sm'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Links (Icons only) */}
        <div className="flex md:hidden items-center space-x-0.5 px-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                title={link.name}
                className={({ isActive }) =>
                  `p-2.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                    isActive
                      ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 shadow-sm scale-110'
                      : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`
                }
              >
                {({ isActive }) => (
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                )}
              </NavLink>
            );
          })}
        </div>

        <div className="w-[1px] h-8 bg-gray-200 dark:bg-gray-700 mx-2 md:mx-3"></div>

        <div className="flex items-center gap-1 md:gap-2 pr-1 md:pr-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
