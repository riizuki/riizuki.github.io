import PageTransition from '../components/PageTransition';
import { useAppContext } from '../context/AppContext';
import { translations } from '../utils/translations';
import { ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const { lang } = useAppContext();
  const t = translations[lang].projects;

  return (
    <PageTransition>
      <section className="section container">
        <h1 style={{ fontSize: 'clamp(1.8rem, 5vw, 2rem)', marginBottom: '3rem', borderBottom: '4px solid var(--border-color)', paddingBottom: '1rem', display: 'inline-block', textShadow: '3px 3px 0px var(--shadow-color)' }}>
          {t.title}
        </h1>
        
        <div className="grid-responsive">
          {t.items.map((project) => (
            <div key={project.id} style={{ 
              border: '4px solid var(--border-color)', 
              padding: 'clamp(1rem, 4vw, 2rem)', 
              backgroundColor: 'var(--surface-color)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '8px 8px 0px var(--shadow-color)',
              transition: 'transform 0.1s step-end'
            }}
             className="project-card"
            >
              <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.2rem)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>{project.name}</h3>
              
              <div style={{ width: '100%', height: 'clamp(150px, 30vw, 180px)', border: '4px solid var(--border-color)', marginBottom: '1.5rem', overflow: 'hidden', backgroundColor: 'var(--bg-color)' }}>
                <img src={project.img} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>

              <p style={{ flex: 1, marginBottom: '2rem', fontSize: 'clamp(1.1rem, 3vw, 1.2rem)' }}>{project.desc}</p>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ 
                    fontSize: '0.9rem', 
                    padding: '0.3rem 0.6rem', 
                    backgroundColor: 'var(--text-color)', 
                    color: 'var(--bg-color)',
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1.5rem', borderTop: '4px dashed var(--border-color)', paddingTop: '1.5rem', flexWrap: 'wrap' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  <ExternalLink size={18} /> {t.view_project}
                </a>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  <Code size={18} /> {t.source_code}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
