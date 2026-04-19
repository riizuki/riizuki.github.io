import PageTransition from '../components/PageTransition';
import { useAppContext } from '../context/AppContext';
import { translations } from '../utils/translations';

export default function About() {
  const { lang } = useAppContext();
  const t = translations[lang].about;

  return (
    <PageTransition>
      <section className="section container">
        <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', marginBottom: '3rem', borderBottom: '8px solid var(--border-color)', paddingBottom: '1rem', display: 'inline-block', textShadow: '4px 4px 0px var(--shadow-color)' }}>
          {t.title}
        </h1>
        
        <div className="grid-responsive" style={{ alignItems: 'start' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Description Text Box */}
            <div style={{ backgroundColor: 'var(--surface-color)', border: '4px solid var(--border-color)', padding: 'clamp(1rem, 4vw, 2rem)', boxShadow: '8px 8px 0px var(--shadow-color)' }}>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                &gt; {t.description1}
              </p>
              <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', lineHeight: '1.6' }}>
                &gt; {t.description2}
              </p>
              <div style={{ marginTop: '2rem', width: '20px', height: '20px', backgroundColor: 'var(--accent-color)' }} className="cursor-blink"></div>
            </div>
            
            {/* Elegant Retro Timeline for Education */}
            <div style={{ marginTop: '2rem', padding: 'clamp(1rem, 4vw, 2rem)', border: '4px solid var(--border-color)', backgroundColor: 'var(--bg-color)', boxShadow: '8px 8px 0px var(--shadow-color)' }}>
              <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontFamily: 'var(--font-heading)', marginBottom: '2rem', display: 'inline-block', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', padding: '0.8rem 1.2rem' }}>
                {t.education_title}
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '1rem', borderLeft: '4px dashed var(--border-color)' }}>
                {t.education.map(edu => (
                  <div key={edu.id} style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                    {/* Timeline Dot */}
                    <div style={{ position: 'absolute', left: '-12px', top: '4px', width: '20px', height: '20px', backgroundColor: 'var(--accent-color)', border: '4px solid var(--border-color)' }}></div>
                    
                    <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontFamily: 'var(--font-heading)', marginBottom: '0.8rem', lineHeight: '1.4' }}>{edu.school}</h3>
                    <p style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>// {edu.degree}</p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{edu.detail}</p>
                    <p style={{ opacity: 0.7, fontSize: '0.9rem', fontFamily: 'var(--font-heading)' }}>[ {edu.year} ]</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Improved OS Window for About Image */}
          <div style={{ width: '100%', backgroundColor: 'var(--bg-color)', border: '4px solid var(--border-color)', boxShadow: '12px 12px 0px var(--shadow-color)', display: 'flex', flexDirection: 'column' }} className="hide-mobile">
            <div style={{ padding: '0.6rem 1rem', borderBottom: '4px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)' }}>
              <span style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>ABOUT_ME.JPG</span>
              <div style={{ display: 'flex', gap: '6px' }}>
                <div style={{ width: '12px', height: '12px', border: '2px solid var(--bg-color)', backgroundColor: 'var(--surface-color)' }}></div>
                <div style={{ width: '12px', height: '12px', border: '2px solid var(--bg-color)', backgroundColor: 'var(--bg-color)' }}></div>
                <div style={{ width: '12px', height: '12px', border: '2px solid var(--bg-color)', backgroundColor: 'var(--accent-color)' }}></div>
              </div>
            </div>
            
            <div style={{ width: '100%', height: '500px', backgroundColor: 'var(--surface-color)', overflow: 'hidden' }}>
               <img 
                 src="/images/profile/about.jpeg" 
                 alt="About Rizky" 
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                 onError={(e) => { 
                   e.target.onerror = null; 
                   e.target.style.display = 'none';
                 }} 
               />
            </div>
          </div>

          {/* Show image for mobile in a simpler container if needed, or just let it stack */}
          <div className="show-mobile" style={{ border: '4px solid var(--border-color)', boxShadow: '8px 8px 0px var(--shadow-color)' }}>
               <img 
                 src="/images/profile/about.jpeg" 
                 alt="About Rizky" 
                 style={{ width: '100%', height: 'auto', display: 'block' }} 
               />
          </div>

        </div>
      </section>
    </PageTransition>
  );
}
