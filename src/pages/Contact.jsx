import PageTransition from '../components/PageTransition';
import { useAppContext } from '../context/AppContext';
import { translations } from '../utils/translations';
import { Mail, Briefcase, Phone, MapPin, Send, Code } from 'lucide-react';

export default function Contact() {
  const { lang } = useAppContext();
  const t = translations[lang].contact;

  return (
    <PageTransition>
      <section className="section container">
        <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2rem)', marginBottom: '3rem', borderBottom: '8px solid var(--border-color)', paddingBottom: '1rem', display: 'inline-block', textShadow: '4px 4px 0px var(--shadow-color)' }}>
          {t.title}
        </h1>
        
        <div className="grid-responsive pixel-box-responsive" style={{ gap: 'clamp(2rem, 5vw, 4rem)' }}>
          <div>
            <div style={{ backgroundColor: 'var(--surface-color)', border: '4px solid var(--border-color)', padding: 'clamp(1rem, 3vw, 2rem)', boxShadow: '8px 8px 0px var(--shadow-color)', marginBottom: '3rem' }}>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.6' }}>
                &gt; {t.description}
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: 'clamp(1rem, 3vw, 2rem)', border: '4px solid var(--border-color)', backgroundColor: 'var(--bg-color)' }}>
              <a href={`mailto:${t.email}`} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 3vw, 1.5rem)', fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: 'bold' }}>
                <div style={{ width: 'clamp(50px, 10vw, 60px)', height: 'clamp(50px, 10vw, 60px)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--accent-color)', border: '4px solid var(--border-color)', color: 'var(--bg-color)' }}>
                  <Mail size={24} />
                </div>
                <span style={{ wordBreak: 'break-all', paddingRight: '1rem' }}>{t.email}</span>
              </a>

              <a href={`tel:${t.phone}`} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 3vw, 1.5rem)', fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: 'bold' }}>
                <div style={{ width: 'clamp(50px, 10vw, 60px)', height: 'clamp(50px, 10vw, 60px)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--surface-color)', border: '4px solid var(--border-color)' }}>
                  <Phone size={24} />
                </div>
                <span>{t.phone}</span>
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem, 3vw, 1.5rem)', fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontWeight: 'bold' }}>
                <div style={{ width: 'clamp(50px, 10vw, 60px)', height: 'clamp(50px, 10vw, 60px)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--surface-color)', border: '4px solid var(--border-color)' }}>
                  <MapPin size={24} />
                </div>
                <span>{t.location}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
               <a href="https://github.com/rizkyalfaridhafizh" target="_blank" rel="noreferrer" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--surface-color)', border: '4px solid var(--border-color)', boxShadow: '4px 4px 0px var(--shadow-color)' }}>
                 <Code size={28} />
               </a>
               <a href="https://linkedin.com/in/rizkyalfaridhafizh" target="_blank" rel="noreferrer" style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--surface-color)', border: '4px solid var(--border-color)', boxShadow: '4px 4px 0px var(--shadow-color)' }}>
                 <Briefcase size={28} />
               </a>
            </div>
          </div>
          
          <div>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: 'var(--bg-color)', border: '4px solid var(--border-color)', padding: 'clamp(1.5rem, 5vw, 3rem)', boxShadow: 'clamp(8px, 2vw, 12px) clamp(8px, 2vw, 12px) 0px var(--shadow-color)' }} onSubmit={(e) => e.preventDefault()}>
              {/* Form Window header */}
              <div style={{ marginBottom: '1rem', borderBottom: '4px dashed var(--border-color)', paddingBottom: '1rem' }}>
                 <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.9rem, 3vw, 1.2rem)' }}>&gt; SEND_MSG.EXE</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <label style={{ fontSize: '0.9rem', fontFamily: 'var(--font-heading)' }}>{t.form_name}</label>
                <input type="text" style={{ 
                  padding: '1rem', 
                  backgroundColor: 'var(--surface-color)', 
                  color: 'var(--text-color)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.1rem',
                  outline: 'none',
                  width: '100%'
                }} required />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <label style={{ fontSize: '0.9rem', fontFamily: 'var(--font-heading)' }}>{t.form_email}</label>
                <input type="email" style={{ 
                  padding: '1rem', 
                  backgroundColor: 'var(--surface-color)', 
                  color: 'var(--text-color)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.1rem',
                  outline: 'none',
                  width: '100%'
                }} required />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <label style={{ fontSize: '0.9rem', fontFamily: 'var(--font-heading)' }}>{t.form_message}</label>
                <textarea rows="5" style={{ 
                  padding: '1rem', 
                  backgroundColor: 'var(--surface-color)', 
                  color: 'var(--text-color)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.1rem',
                  outline: 'none',
                  resize: 'vertical',
                  width: '100%'
                }} required></textarea>
              </div>
              <button type="submit" className="btn-primary" style={{ display: 'flex', alignItems: 'center', alignSelf: 'flex-start', justifyContent: 'center', gap: '1rem', marginTop: '1rem', width: 'auto' }}>
                {t.send} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
