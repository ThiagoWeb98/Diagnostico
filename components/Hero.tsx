
import React from 'react';
import heroImage from '../assets/bruna-hero.JPEG';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen lg:min-h-[90vh] flex flex-col bg-[#120c08] overflow-hidden">
      {/* Background Banner Image com Overlay Refinado */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
          className="w-full h-full object-cover opacity-20 grayscale scale-105"
          alt="Luxury Office Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a120b] via-[#1a120b]/95 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b] via-transparent to-transparent"></div>
      </div>

      {/* BARRA NO TOPO - DESTAQUE MÁXIMO */}
      <div className="w-full bg-gold-gradient py-3 px-6 z-50 relative border-b border-white/10 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-white/10 animate-pulse opacity-30"></div>
        <p className="text-center text-[10px] md:text-[11px] lg:text-[12px] tracking-[0.12em] text-white font-medium uppercase leading-relaxed max-w-5xl mx-auto relative z-10">
          <span className="font-black border-r border-white/30 pr-3 mr-3 text-[11px] md:text-[13px]">ATENÇÃO:</span>
          Exclusivo para profissionais que querem ultrapassar o faturamento de 100 mil por mês nos próximos 6 meses.
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-12 flex-1 flex flex-col justify-center relative z-10 py-8 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20 items-center">

          {/* Lado Direito - Expert Visual (PRIMEIRO NO MOBILE) */}
          <div className="reveal reveal-delay-2 active relative order-1 lg:order-2 block">
            <div className="relative aspect-[4/5] w-full max-w-[260px] md:max-w-[380px] mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7)] group">
              <img
                src={heroImage}
                className="w-full h-full object-cover transition-transform duration-[6s] group-hover:scale-110"
                alt="Dra. Bruna Mello"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b]/70 via-transparent to-transparent"></div>
            </div>
            <div className="hidden lg:block absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-[#c8a178]/40 rounded-tr-[3rem] pointer-events-none"></div>
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-[#c8a178]/40 rounded-bl-[3rem] pointer-events-none"></div>
          </div>

          {/* Lado Esquerdo - Copy (SEGUNDO NO MOBILE COM LEGIBILIDADE MELHORADA) */}
          <div className="reveal active text-center lg:text-left max-w-4xl order-2 lg:order-1 pt-4 lg:pt-0">
            <h1 className="font-serif text-[1.8rem] md:text-3xl lg:text-[2.8rem] leading-[1.3] mb-6 lg:mb-8 text-[#f2f0ed] font-light reveal reveal-delay-1 active">
              Se você é profissional da estética e sente que sua clínica pode render muito mais, <span className="italic text-[#c8a178] font-normal underline decoration-[#c8a178]/30 underline-offset-8">essa sessão estratégica</span> é a peça que faltava para você organizar seu crescimento.
            </h1>

            <p className="text-[#e9e4df]/80 text-[16px] md:text-lg leading-[1.7] mb-8 lg:mb-12 font-light max-w-2xl reveal reveal-delay-2 active mx-auto lg:mx-0">
              Juntas, vamos identificar o momento atual do seu negócio e desenhar as ações práticas para aumentar seu faturamento e preparar sua clínica para um novo patamar de lucro.
            </p>

            <div className="reveal reveal-delay-3 active flex justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('qualificacao')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative flex items-center justify-center bg-gold-gradient text-[#1a120b] px-10 lg:px-14 py-5 lg:py-6 rounded-full font-black uppercase tracking-[0.25em] text-[10px] shadow-[0_20px_50px_rgba(200,161,120,0.3)] transition-all duration-700 hover:scale-105 active:scale-95 overflow-hidden border border-white/20"
              >
                <span className="relative z-10">👉 QUERO APLICAR AGORA</span>
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
