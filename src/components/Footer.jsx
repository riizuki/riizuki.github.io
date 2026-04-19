import { Code, Briefcase, MessageSquare, Mail } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import './Footer.css';

export default function Footer() {
  const { lang } = useAppContext();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-logo">
          RIZKY AL FARID HAFIZH <span className="footer-blinker"></span>
        </div>
        
        <div className="insert-coin">
          &gt; {lang === 'en' ? 'INSERT COIN TO CONTINUE' : 'MASUKKAN KOIN UNTUK MELANJUTKAN'} _
        </div>
        
        <div className="footer-socials">
          <a href="https://github.com/rizkyalfaridhafizh" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="GitHub">
            <Code size={24} />
          </a>
          <a href="https://linkedin.com/in/rizkyalfaridhafizh" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">
            <Briefcase size={24} />
          </a>
          <a href="mailto:hello@example.com" className="footer-social-link" aria-label="Email">
            <Mail size={24} />
          </a>
          <a href="#" className="footer-social-link" aria-label="Twitter">
            <MessageSquare size={24} />
          </a>
        </div>
        
        <div className="footer-bottom">
          <p>
            &copy; {year} RIZKY AL FARID HAFIZH. <br/>
            {lang === 'en' ? 'ALL RIGHTS RESERVED.' : 'HAK CIPTA DILINDUNGI.'}
          </p>
        </div>
      </div>
    </footer>
  );
}
