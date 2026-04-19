import PageTransition from '../components/PageTransition';
import { useAppContext } from '../context/AppContext';
import { translations } from '../utils/translations';

export default function Skills() {
  const { lang } = useAppContext();
  const t = translations[lang].skills;

  // Upgraded data structure holding direct references to official vector logos
  const skillCategories = [
    {
      title: t.frontend,
      skills: [
        { name: 'React.js', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
        { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
        { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26' },
        { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3/1572B6' },
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
        { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' }
      ]
    },
    {
      title: t.backend,
      skills: [
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
        { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express/000000' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
        { name: 'Firebase', icon: 'https://cdn.simpleicons.org/firebase/FFCA28' },
        { name: 'REST APIs', icon: 'https://cdn.simpleicons.org/json/000000' }
      ]
    },
    {
      title: t.tools,
      skills: [
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/000000' },
        { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
        { name: 'VS Code', icon: 'https://cdn.simpleicons.org/visualstudiocode/007ACC' },
        { name: 'Webpack', icon: 'https://cdn.simpleicons.org/webpack/8DD6F9' },
        { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000' }
      ]
    }
  ];

  return (
    <PageTransition>
      <section className="section container">
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', marginBottom: '3rem', borderBottom: '8px solid var(--border-color)', paddingBottom: '1rem', display: 'inline-block', textShadow: '4px 4px 0px var(--shadow-color)' }}>
          {t.title}
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 8vw, 5rem)' }}>
          {skillCategories.map((category, idx) => (
            <div key={idx} style={{ position: 'relative' }} className="pixel-box-responsive">
              
              {/* Category Bracket Label */}
              <h2 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', marginBottom: '2.5rem', fontFamily: 'var(--font-heading)', backgroundColor: 'var(--text-color)', color: 'var(--bg-color)', display: 'inline-block', padding: '0.8rem 1.2rem', border: '4px solid var(--border-color)', boxShadow: '6px 6px 0px var(--shadow-color)' }}>
                {category.title}_
              </h2>
              
              {/* Tech Cards Grid */}
              <div className="grid-responsive" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(140px, 45%, 200px), 1fr))', gap: 'clamp(1rem, 3vw, 2rem)' }}>
                {category.skills.map(skill => (
                  <div key={skill.name} style={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 'clamp(1rem, 3vw, 1.5rem)',
                    padding: 'clamp(1rem, 4vw, 2rem) 1rem', 
                    border: '4px solid var(--border-color)',
                    backgroundColor: 'var(--surface-color)',
                    boxShadow: '8px 8px 0px var(--shadow-color)',
                    transition: 'all 0.1s step-end'
                  }} className="skill-card">
                    {/* Icon Base */}
                    <div style={{ width: 'clamp(40px, 10vw, 60px)', height: 'clamp(40px, 10vw, 60px)', backgroundColor: '#fff', border: '4px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
                      <img src={skill.icon} alt={skill.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                    
                    <span style={{ fontSize: 'clamp(0.9rem, 3vw, 1.2rem)', fontWeight: 'bold', textAlign: 'center', letterSpacing: '1px' }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
