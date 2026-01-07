
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import ApplicationCriteria from './components/ApplicationCriteria';
import Bio from './components/Bio';
import Testimonials from './components/Testimonials';
import DiscountTicker from './components/DiscountTicker';
import AIAdvisor from './components/AIAdvisor';
import TheProblem from './components/TheProblem';
import PainPleasure from './components/PainPleasure';
import Methodology from './components/Methodology';
import Schedule from './components/Schedule';
import AccessSection from './components/AccessSection';
import TargetAudience from './components/TargetAudience';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import RegistrationForm from './components/RegistrationForm';

const App: React.FC = () => {
  useEffect(() => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#c8a178] selection:text-[#1a120b] bg-[#1a120b]">
      <Hero />
      
      <DiscountTicker text="✦ MÉTODO ACELERA CLÍNICAS ✦ GESTÃO PREMIUM ✦ LUCRO REAL ✦" light={false} />

      <TheProblem />
      
      <PainPleasure />

      <div className="bg-[#f2ede7]">
        <ApplicationCriteria />
        
        <div className="py-12 lg:py-16 px-6 text-center reveal">
           <div className="max-w-3xl mx-auto relative">
             <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[#c8a178] opacity-10">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
             </div>
             <h3 className="font-serif text-2xl lg:text-3xl text-[#1a120b] italic font-light leading-relaxed relative z-10">
               "Você terá acesso a um direcionamento prático, que independente do seu momento atual, te levará para um patamar <span className="text-[#9b6d4b] font-normal underline decoration-1 underline-offset-[10px] decoration-[#c8a178]/40">maior e melhor</span>."
             </h3>
           </div>
        </div>
      </div>

      <Methodology />
      
      <Schedule />

      <Bio />

      <AccessSection />

      <TargetAudience />

      <div className="bg-[#e9e4df] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a120b]/5 to-transparent h-40 pointer-events-none"></div>
        <DiscountTicker text="✦ RESULTADOS REAIS ✦ 100K POR MÊS ✦ ESCALA INTELIGENTE ✦" light={true} />
        <Testimonials />
      </div>

      <Offer />

      <RegistrationForm />

      <Guarantee />
      
      <FAQ />
      
      <section className="py-24 lg:py-32 bg-[#1a120b] text-center px-6 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#c8a178]/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto reveal relative z-10">
          <span className="text-[#c8a178] uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block">Próximo Passo</span>
          <h2 className="font-serif text-3xl lg:text-[3.5rem] text-[#f2f0ed] mb-12 italic font-light leading-tight">
            Sua clínica merece o <br/><span className="text-[#c8a178] not-italic font-normal">padrão ouro</span> de gestão.
          </h2>
          
          <div className="flex justify-center w-full">
            <button 
              onClick={() => window.open('https://wa.me/seu-numero', '_blank')}
              className="group relative flex items-center justify-center bg-gold-gradient text-[#1a120b] px-10 lg:px-14 py-5 lg:py-6 rounded-full font-black uppercase tracking-[0.3em] text-[10px] shadow-[0_20px_50px_rgba(200,161,120,0.3)] transition-all duration-700 hover:scale-105 active:scale-95 overflow-hidden border border-white/5"
            >
              <span className="relative z-10">👉 CLIQUE AQUI PARA APLICAR A UMA VAGA GRATUITA</span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
          
          <p className="text-[#f2f0ed]/30 text-[9px] uppercase tracking-[0.3em] font-medium mt-10 italic">
            Vagas limitadas para garantir exclusividade na análise.
          </p>
        </div>
      </section>

      <footer className="bg-[#140d08] py-16 px-6 text-center border-t border-white/5 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16 text-[#c5a689] text-[9px] uppercase tracking-[0.3em] font-bold mb-10">
            <a href="#" className="hover:text-white transition-colors duration-500">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors duration-500">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors duration-500">Suporte VIP</a>
          </div>
          <div className="w-12 h-px bg-white/5 mx-auto mb-10"></div>
          <div className="text-[#c5a689]/20 text-[8px] tracking-[0.5em] font-medium uppercase">
            © Dra. Bruna Mello • Acelera Clínicas • Todos os Direitos Reservados
          </div>
        </div>
      </footer>

      <AIAdvisor />
    </div>
  );
};

export default App;
