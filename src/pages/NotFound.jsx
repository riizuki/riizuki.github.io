import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';
import { ScrollReveal, Starburst, VelocityText } from '../components/ScrollAnimations';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full bg-mcm-cream dark:bg-mcm-dark transition-colors duration-300 min-h-screen pt-32 pb-32 mt-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(44,43,41,0.05)_2px,transparent_2px)] dark:bg-[radial-gradient(rgba(235,231,223,0.03)_2px,transparent_2px)] [background-size:24px_24px] pointer-events-none z-0" />
      <Starburst size={400} color="var(--color-mcm-orange)" className="absolute -top-20 -left-20 animate-spin-slow opacity-20 pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center">
        
        <ScrollReveal variant="fade-up" delay={0.1} className="w-full flex flex-col items-center">
          <VelocityText>
            <h1 className="text-[120px] md:text-[200px] lg:text-[250px] font-display font-black text-mcm-dark dark:text-[#EBE7DF] leading-[0.9] tracking-tighter mix-blend-normal">
              404
            </h1>
          </VelocityText>
          
          <div className="border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] bg-mcm-mustard dark:bg-mcm-orange px-8 md:px-12 py-4 md:py-6 shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] md:shadow-[12px_12px_0px_0px_rgba(44,43,41,1)] dark:shadow-[6px_6px_0px_0px_#F4F1EA] md:dark:shadow-[12px_12px_0px_0px_#F4F1EA] mb-12 rotate-[-2deg] hover:rotate-0 transition-transform duration-300 z-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold uppercase tracking-widest text-mcm-dark text-center">
              {t('notfound.title')}
            </h2>
          </div>

          <p className="font-sans font-medium text-lg md:text-xl text-mcm-dark/70 dark:text-[#EBE7DF]/70 max-w-2xl mb-12">
            {t('notfound.description')}
          </p>

          <Link 
            to="/" 
            className="group flex items-center gap-4 bg-mcm-dark dark:bg-[#EBE7DF] text-mcm-cream dark:text-mcm-dark px-8 py-4 border-4 border-transparent hover:border-mcm-dark dark:hover:border-[#EBE7DF] hover:bg-mcm-cream dark:hover:bg-mcm-dark hover:text-mcm-dark dark:hover:text-[#EBE7DF] transition-colors duration-300 shadow-[4px_4px_0px_0px_rgba(44,43,41,0.2)] md:shadow-[8px_8px_0px_0px_rgba(44,43,41,0.2)] dark:shadow-[4px_4px_0px_0px_#F4F1EA] md:dark:shadow-[8px_8px_0px_0px_#F4F1EA] hover:shadow-none translate-x-[-4px] translate-y-[-4px] hover:translate-x-0 hover:translate-y-0"
          >
            <div className="w-10 h-10 border-2 border-mcm-cream dark:border-mcm-dark rounded-full flex items-center justify-center bg-transparent group-hover:bg-mcm-mustard group-hover:border-mcm-dark dark:group-hover:bg-mcm-orange dark:group-hover:border-[#EBE7DF] transition-colors duration-300">
              <ArrowLeft size={20} strokeWidth={2.5} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            <span className="font-display font-bold uppercase tracking-widest text-lg">
              {t('notfound.button')}
            </span>
          </Link>
        </ScrollReveal>

      </div>
    </div>
  );
}
