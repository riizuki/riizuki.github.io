import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Monitor, Server, Smartphone, Wrench } from 'lucide-react';

const skillIconMap = {
  "React.js": "react",
  "Next.js": "nextjs",
  "Vite": "vite",
  "HTML5": "html",
  "CSS3": "css",
  "JavaScript": "js",
  "Tailwind CSS": "tailwind",
  "Node.js": "nodejs",
  "Express.js": "express",
  "MySQL": "mysql",
  "MongoDB": "mongodb",
  "Firebase": "firebase",
  "Android Studio": "androidstudio",
  "Dart": "dart",
  "Flutter": "flutter",
  "Git": "git",
  "GitHub": "github",
  "Figma": "figma",
  "VS Code": "vscode",
  "Webpack": "webpack",
  "Vercel": "vercel"
};

const categoryIcons = [Monitor, Server, Smartphone, Wrench];

export default function Skills() {
  const { t } = useTranslation();
  const categories = t('skills.categories', { returnObjects: true });

  return (
    <div className="flex flex-col max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-16 text-gray-900 dark:text-white">{t('skills.title')}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {Array.isArray(categories) && categories.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div key={idx} className="group flex flex-col bg-white dark:bg-gray-900 rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-gray-800 transition-all hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-8 border-b border-gray-100 dark:border-gray-800 pb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-gray-900 dark:text-white group-hover:scale-110 transition-transform duration-500">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">{cat.name}</h2>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {cat.items && cat.items.map((skill, sIdx) => {
                    const iconName = skillIconMap[skill];
                    return (
                      <div 
                        key={sIdx} 
                        className="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 rounded-xl font-medium text-sm border border-gray-200 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all cursor-default group/skill"
                      >
                        {iconName && (
                          <img 
                            src={`https://skillicons.dev/icons?i=${iconName}`} 
                            alt={`${skill} icon`} 
                            className="w-6 h-6 object-contain group-hover/skill:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        )}
                        <span className="group-hover/skill:text-gray-900 dark:group-hover/skill:text-white transition-colors">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
