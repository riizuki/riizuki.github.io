import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { ScrollReveal, Starburst } from '../components/ScrollAnimations';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex flex-col w-full bg-mcm-cream dark:bg-mcm-dark transition-colors duration-300 pb-32 pt-24 md:pt-32 min-h-screen">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full">
        
        
        <ScrollReveal variant="fade-up" className="mb-16">
          <h1 className="text-6xl md:text-8xl lg:text-[120px] font-display font-bold uppercase tracking-tighter text-mcm-dark dark:text-[#EBE7DF] leading-none mb-4">
            {t('nav.contact')}
          </h1>
          <p className="text-xl md:text-2xl font-sans font-medium text-mcm-dark/70 dark:text-[#EBE7DF]/70 max-w-2xl">
            {t('contact.desc')}
          </p>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 relative">
          
          
          <div className="w-full lg:w-1/3 flex flex-col gap-10">
            <ScrollReveal variant="slide-right" delay={0.1} className="flex flex-col gap-8">
              
              <div className="bg-mcm-mustard dark:bg-[#14161C] border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] p-8 shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] dark:shadow-[8px_8px_0px_0px_#F4F1EA]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-mcm-orange p-3 border-4 border-mcm-dark dark:border-[#EBE7DF]">
                    <Mail size={24} className="text-mcm-cream dark:text-mcm-dark" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase text-mcm-dark dark:text-[#EBE7DF]">Email</h3>
                </div>
                <a href="mailto:alfaridrizky69@gmail.com" className="font-sans font-bold text-lg md:text-xl text-mcm-dark/90 dark:text-[#EBE7DF]/90 hover:text-mcm-teal dark:hover:text-mcm-orange transition-colors break-all">
                  alfaridrizky69@gmail.com
                </a>
              </div>

              <div className="bg-mcm-teal dark:bg-[#1F222B] border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] p-8 shadow-[8px_8px_0px_0px_rgba(44,43,41,1)] dark:shadow-[8px_8px_0px_0px_#F4F1EA]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-mcm-cream dark:bg-mcm-dark p-3 border-4 border-mcm-dark dark:border-[#EBE7DF]">
                    <MapPin size={24} className="text-mcm-teal dark:text-mcm-orange" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase text-mcm-cream dark:text-[#EBE7DF]">{t('contact.location')}</h3>
                </div>
                <p className="font-sans font-bold text-lg md:text-xl text-mcm-cream/90 dark:text-[#EBE7DF]/90">
                  Kota Bandung, Jawa Barat, Indonesia
                </p>
              </div>

            </ScrollReveal>
          </div>

          
          <div className="w-full lg:w-2/3">
            <ScrollReveal variant="slide-left" delay={0.2} className="h-full">
              <form 
                onSubmit={handleSubmit} 
                className="bg-mcm-cream dark:bg-mcm-dark border-4 md:border-8 border-mcm-dark dark:border-[#EBE7DF] p-8 md:p-12 shadow-[16px_16px_0px_0px_rgba(44,43,41,1)] dark:shadow-[16px_16px_0px_0px_#F4F1EA] flex flex-col gap-8 relative z-10"
              >
                
                
                <div className="flex flex-col gap-3">
                  <label htmlFor="name" className="font-display font-bold text-xl uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF]">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#F4F1EA] dark:bg-[#14161C] border-4 border-mcm-dark dark:border-[#EBE7DF] px-6 py-4 font-sans font-bold text-lg text-mcm-dark dark:text-[#EBE7DF] outline-none focus:border-mcm-orange focus:bg-mcm-cream dark:focus:border-mcm-orange dark:focus:bg-mcm-dark transition-colors placeholder:text-mcm-dark/30 dark:placeholder:text-[#EBE7DF]/30"
                    placeholder="John Doe"
                    required
                  />
                </div>

                
                <div className="flex flex-col gap-3">
                  <label htmlFor="email" className="font-display font-bold text-xl uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF]">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#F4F1EA] dark:bg-[#14161C] border-4 border-mcm-dark dark:border-[#EBE7DF] px-6 py-4 font-sans font-bold text-lg text-mcm-dark dark:text-[#EBE7DF] outline-none focus:border-mcm-orange focus:bg-mcm-cream dark:focus:border-mcm-orange dark:focus:bg-mcm-dark transition-colors placeholder:text-mcm-dark/30 dark:placeholder:text-[#EBE7DF]/30"
                    placeholder="hello@example.com"
                    required
                  />
                </div>

                
                <div className="flex flex-col gap-3">
                  <label htmlFor="message" className="font-display font-bold text-xl uppercase tracking-widest text-mcm-dark dark:text-[#EBE7DF]">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-[#F4F1EA] dark:bg-[#14161C] border-4 border-mcm-dark dark:border-[#EBE7DF] px-6 py-4 font-sans font-bold text-lg text-mcm-dark dark:text-[#EBE7DF] outline-none focus:border-mcm-orange focus:bg-mcm-cream dark:focus:border-mcm-orange dark:focus:bg-mcm-dark transition-colors placeholder:text-mcm-dark/30 dark:placeholder:text-[#EBE7DF]/30 resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                
                <button 
                  type="submit" 
                  className="w-full bg-mcm-orange hover:bg-mcm-dark dark:hover:bg-[#EBE7DF] text-mcm-cream dark:text-mcm-dark border-4 border-mcm-dark dark:border-[#EBE7DF] px-8 py-5 mt-4 font-display font-bold uppercase text-2xl flex items-center justify-center gap-3 transition-colors shadow-[6px_6px_0px_0px_rgba(44,43,41,1)] dark:shadow-[6px_6px_0px_0px_rgba(235,231,223,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]"
                >
                  {t('contact.send')} <ArrowRight size={28} strokeWidth={3} />
                </button>
                
              </form>
            </ScrollReveal>
          </div>

          <Starburst size={250} color="rgba(44,43,41,0.03)" className="absolute -bottom-20 -left-10 pointer-events-none dark:hidden z-0" />
          
        </div>
      </div>
    </div>
  );
}
