import PageTransition from '../components/PageTransition';
import { useAppContext } from '../context/AppContext';
import { translations } from '../utils/translations';
import { Award } from 'lucide-react';

export default function Certificates() {
  const { lang } = useAppContext();
  const t = translations[lang].certificates;

  return (
    <PageTransition>
      <section className="section container">
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', textShadow: '4px 4px 0px var(--shadow-color)' }}>
          {t.title}
        </h1>

        <div className="grid-responsive">
          {t.items.map((cert) => (
            <div key={cert.id} style={{
              display: 'flex',
              flexDirection: 'column',
              border: 'clamp(4px, 1vw, 8px) solid var(--border-color)',
              backgroundColor: 'var(--surface-color)',
              boxShadow: '8px 8px 0px var(--shadow-color)',
              position: 'relative',
              width: '100%'
            }}>

              {/* Image Canvas matching portrait/landscape organically */}
              <div style={{
                width: '100%',
                height: 'clamp(180px, 40vw, 280px)',
                backgroundColor: '#1a1a1a',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0.5rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Background grid pattern simulating texture */}
                <div style={{ position: 'absolute', inset: 0, opacity: 0.1, backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>

                <img
                  src={cert.img}
                  alt={cert.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', zIndex: 2 }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                  }}
                />

                <Award size={48} color="#333" style={{ position: 'absolute', zIndex: 1 }} />
              </div>

              {/* Prestigious Plaque / Text Plate */}
              <div style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                backgroundColor: 'var(--surface-color)',
                borderTop: '4px solid var(--border-color)'
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontFamily: 'var(--font-heading)', lineHeight: '1.4', flex: '1 1 180px' }}>
                      {cert.name}
                    </h3>
                    <div style={{
                      padding: '0.4rem 0.8rem',
                      backgroundColor: 'var(--accent-color)',
                      color: 'var(--bg-color)',
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.7rem',
                      border: '2px solid var(--border-color)',
                      textAlign: 'center',
                      whiteSpace: 'nowrap'
                    }}>
                      {cert.year}
                    </div>
                  </div>
                  <p style={{ fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', fontWeight: 'bold', color: 'var(--text-color)', opacity: 0.9 }}>
                    // {cert.issuer}
                  </p>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
                  <button className="btn-outline" style={{ width: '100%', letterSpacing: '1px', fontSize: '0.8rem', padding: '1rem' }}>
                    [ {t.view} ]
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
