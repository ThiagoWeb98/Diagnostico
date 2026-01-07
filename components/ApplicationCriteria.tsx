
import React from 'react';

const ApplicationCriteria: React.FC = () => {
  const criteria = [
    {
      num: "I",
      title: "Para você, dona de clínica,",
      desc: "Que quer ter mais previsibilidade de faturamento mês a mês e ver o lucro sobrando na conta de verdade, saindo de vez da operação excessiva."
    },
    {
      num: "II",
      title: "Para você, profissional dedicada,",
      desc: "Que quer transformar seu consultório em uma empresa estável, segura e que não dependa 100% da sua presença física para faturar."
    },
    {
      num: "III",
      title: "Para você, que já fatura bem,",
      desc: "E deseja um plano de ação prático para romper novas barreiras de faturamento com uma margem de lucro saudável e processos claros."
    },
    {
      num: "IV",
      title: "Para você, que busca gestão,",
      desc: "Que quer liderar uma equipe engajada e ter processos bem definidos para crescer com tranquilidade, organização e tempo livre."
    }
  ];

  return (
    <section id="qualificacao" className="py-20 lg:py-32 bg-[#f2ede7] text-[#1a120b]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-4xl mb-16 lg:mb-20 reveal">
          <span className="text-[#9b6d4b] uppercase tracking-[0.5em] text-[10px] font-black mb-6 block border-l-2 border-[#c8a178] pl-5">QUEM DEVE REALIZAR A APLICAÇÃO?</span>
          <h2 className="font-serif text-[2rem] md:text-3xl lg:text-[3.5rem] text-[#1a120b] mb-8 leading-[1.2] font-light italic">
            Esta consultoria gratuita é ideal para você que deseja construir um negócio sólido...
          </h2>
          <p className="text-[#1a120b]/70 text-lg lg:text-2xl font-light leading-[1.6] max-w-2xl">
            ...que permita ter mais liberdade. Atendendo com mais qualidade e faturando muito mais com inteligência estratégica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {criteria.map((item, i) => (
            <div
              key={i}
              className="reveal bg-white p-10 lg:p-14 rounded-[3rem] border border-black/[0.03] shadow-[0_15px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(200,161,120,0.15)] transition-all duration-700 hover:-translate-y-2 group"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-serif text-6xl lg:text-7xl text-[#d4b494] italic leading-none opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.num}
                </span>
                <div className="w-12 h-12 rounded-full bg-[#f2ede7] flex items-center justify-center text-[#c8a178] border border-[#c8a178]/10 group-hover:bg-[#c8a178] group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h4 className="text-[#1a120b] font-serif text-2xl lg:text-3xl mb-5 italic font-bold leading-tight group-hover:text-[#9b6d4b] transition-colors">{item.title}</h4>
              <p className="text-[#1a120b]/60 text-base lg:text-lg leading-[1.7] font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center reveal">
          <button
            onClick={() => window.open('https://bnrfxmop3u8.typeform.com/to/BRLBKgfi', '_blank')}
            className="group relative flex items-center justify-center bg-gold-gradient text-[#1a120b] px-10 lg:px-16 py-5 lg:py-6 rounded-full font-black uppercase tracking-[0.25em] text-[10px] shadow-[0_20px_50px_rgba(200,161,120,0.3)] transition-all duration-700 hover:scale-105 active:scale-95 overflow-hidden border border-black/5"
          >
            <span className="relative z-10">👉 QUERO APLICAR PARA UMA SESSÃO GRATUITA</span>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationCriteria;
