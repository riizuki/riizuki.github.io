import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { translations } from '../utils/translations';
import './Navbar.css';

export default function Navbar() {
  const { theme, toggleTheme, lang, toggleLang } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;

  // Simple active link styling logic
  const linkClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          Port<span>folio.</span>
        </NavLink>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" className={linkClass} onClick={closeMenu}>{t.home}</NavLink>
          <NavLink to="/about" className={linkClass} onClick={closeMenu}>{t.about}</NavLink>
          <NavLink to="/projects" className={linkClass} onClick={closeMenu}>{t.projects}</NavLink>
          <NavLink to="/skills" className={linkClass} onClick={closeMenu}>{t.skills}</NavLink>
          <NavLink to="/certificates" className={linkClass} onClick={closeMenu}>{t.certificates}</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={closeMenu}>{t.contact}</NavLink>
          
          {/* Mobile Actions in Menu */}
          <div className="mobile-actions show-mobile">
            <button className="action-btn" onClick={() => { toggleTheme(); closeMenu(); }}>
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button className="action-btn" onClick={() => { toggleLang(); closeMenu(); }}>
              <span className="lang-text">{lang === 'en' ? 'ID' : 'EN'}</span>
            </button>
          </div>
        </div>

        <div className="nav-actions">
          <button 
            className="action-btn hide-mobile" 
            onClick={toggleTheme} 
            title={lang === 'en' ? 'Toggle Theme' : 'Ganti Tema'}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <button 
            className="action-btn hide-mobile" 
            onClick={toggleLang}
            title={lang === 'en' ? 'Switch Language' : 'Ganti Bahasa'}
          >
            <span className="lang-text">{lang === 'en' ? 'ID' : 'EN'}</span>
          </button>

          {/* Burger Menu Button */}
          <button className="action-btn burger show-mobile" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

