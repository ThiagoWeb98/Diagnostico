
import React from 'react';
import heroImage from '../assets/bruna-hero.JPEG';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen lg:min-h-[90vh] flex flex-col bg-navy overflow-hidden">
      {/* Background Banner Image com Overlay Refinado */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-30 grayscale scale-105"
          alt="Luxury Office Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cobalt/20 rounded-full blur-[150px] pointer-events-none"></div>
      </div>

      {/* BARRA NO TOPO - DESTAQUE MÁXIMO */}
      <div className="w-full bg-gold-gradient py-3 px-6 z-50 relative border-b border-white/10 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-white/10 animate-pulse opacity-30"></div>
        <p className="text-center text-[10px] md:text-[11px] lg:text-[12px] tracking-[0.12em] text-white font-medium uppercase leading-relaxed max-w-5xl mx-auto relative z-10">
          <span className="font-black border-r border-white/30 pr-3 mr-3 text-[11px] md:text-[13px]">ATENÇÃO:</span>
          Exclusivo para profissionais da estética prontas para construir uma clínica de alto padrão.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center relative z-10 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20 items-center">

          {/* Lado Direito - Expert Visual (PRIMEIRO NO MOBILE) */}
          <div className="reveal reveal-delay-2 active relative order-1 lg:order-2 block">
            <div className="relative aspect-[4/5] w-full max-w-[260px] md:max-w-[380px] mx-auto rounded-[2.5rem] overflow-hidden border border-white/20 shadow-[0_40px_100px_rgba(10,17,40,0.8)] group">
              <img
                src={heroImage}
                className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110"
                alt="Dra. Bruna Mello"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent"></div>
            </div>

            {/* Glassmorphism Badge */}
            <div className="absolute bottom-10 -left-6 lg:-left-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl z-20 animate-pulse">
              <p className="text-white text-xs font-bold uppercase tracking-widest">Gestão Premium</p>
              <p className="text-champagne text-[9px] uppercase mt-1">Para Clínicas</p>
            </div>

            <div className="hidden lg:block absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-champagne/40 rounded-tr-[3rem] pointer-events-none"></div>
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-champagne/40 rounded-bl-[3rem] pointer-events-none"></div>
          </div>

          {/* Lado Esquerdo - Copy (SEGUNDO NO MOBILE COM LEGIBILIDADE MELHORADA) */}
          <div className="reveal active text-center lg:text-left max-w-3xl order-2 lg:order-1 pt-4 lg:pt-0">
            <h1 className="font-serif text-[1.8rem] md:text-2xl lg:text-[2.2rem] leading-[1.4] mb-4 lg:mb-6 text-white font-light reveal reveal-delay-1 active">
              Se você já tem resultados, mas sente que sua clínica pode ir muito além <span className="italic text-champagne font-semibold underline decoration-champagne/30 underline-offset-8">essa sessão estratégica</span> foi criada para quem está pronta para atingir o próximo nível.
            </h1>

            <p className="text-white/80 text-[15px] md:text-base leading-[1.8] mb-8 lg:mb-10 font-light max-w-2xl reveal reveal-delay-2 active mx-auto lg:mx-0">
              Juntas, vamos mapear exatamente onde estão os gargalos do seu negócio e traçar um plano de ação real para escalar seu faturamento, aumentar sua margem de lucro e construir uma operação que cresce sem depender só de você.
            </p>

            <div className="reveal reveal-delay-3 active flex justify-center lg:justify-start">
              <button
                onClick={() => window.location.href = 'https://app.lightforms.io/JFOoBrF'}
                className="group relative flex items-center justify-center bg-gold-gradient text-navy px-10 lg:px-14 py-5 lg:py-6 rounded-full font-black uppercase tracking-[0.25em] text-[10px] shadow-[0_10px_40px_rgba(212,175,55,0.4)] transition-all duration-700 hover:scale-105 active:scale-95 overflow-hidden border border-white/20"
              >
                <span className="relative z-10">👉 PREENCHER O FORMULÁRIO DE APLICAÇÃO</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
