
import React from 'react';

const ApplicationCriteria: React.FC = () => {
  const criteria = [
    {
      num: "I",
      title: "Para você, que quer ultrapassar os 6 dígitos por mês,",
      desc: "E sabe que o que trouxe até aqui não vai te levar sozinha para o próximo nível. Você precisa de estratégia, método e um olhar de fora para desbloquear o que está travando seu crescimento."
    },
    {
      num: "II",
      title: "Para você, que quer ter liberdade de verdade,",
      desc: "Não a liberdade que \"deveria\" ter, mas que na prática ainda é escrava da agenda. Você quer uma clínica que funciona com ou sem você presente em tudo."
    },
    {
      num: "III",
      title: "Para você, que quer uma equipe rodando com excelência,",
      desc: "Cansada de resolver tudo sozinha, quer ter profissionais treinados, processos claros e uma operação que entrega resultado sem depender do seu controle em cada detalhe."
    },
    {
      num: "IV",
      title: "Para você, que pensa em abrir sua próxima unidade,",
      desc: "Já provou que consegue gerar resultado agora quer escalar. Mas antes de crescer, precisa ter a base sólida: gestão, margem e time no lugar certo."
    }
  ];

  return (
    <section id="qualificacao" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Elements for White Theme */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cobalt/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-navy/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="max-w-4xl mb-16 lg:mb-20 reveal">
          <span className="text-champagne uppercase tracking-[0.5em] text-[10px] font-black mb-6 block border-l-2 border-champagne pl-5">PARA QUEM É ESSA SESSÃO?</span>
          <h2 className="font-serif text-[2rem] md:text-3xl lg:text-[3.5rem] text-navy mb-8 leading-[1.2] font-semibold italic">
            Esta sessão é para você que já está em movimento...
          </h2>
          <p className="text-navy/80 text-lg lg:text-2xl font-light leading-[1.6] max-w-2xl">
            ...e quer acelerar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {criteria.map((item, i) => (
            <div
              key={i}
              className="reveal bg-navy/[0.03] backdrop-blur-xl p-10 lg:p-14 rounded-[3rem] border border-navy/10 shadow-[0_15px_50px_rgba(10,17,40,0.05)] hover:shadow-[0_20px_60px_rgba(47,75,122,0.15)] hover:border-cobalt/30 hover:bg-navy/5 transition-all duration-700 hover:-translate-y-2 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cobalt/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <span className="font-serif text-6xl lg:text-7xl text-champagne italic leading-none opacity-20 group-hover:opacity-40 transition-opacity">
                  {item.num}
                </span>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-cobalt border border-cobalt/30 group-hover:bg-cobalt group-hover:text-white transition-all shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h4 className="text-navy font-serif text-2xl lg:text-3xl mb-5 italic font-bold leading-tight group-hover:text-cobalt transition-colors relative z-10">{item.title}</h4>
              <p className="text-navy/70 text-base lg:text-lg leading-[1.7] font-light relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center reveal">
          <button
            onClick={() => window.open('https://app.lightforms.io/JFOoBrF', '_blank')}
            className="group relative flex items-center justify-center bg-gold-gradient text-navy px-10 lg:px-16 py-5 lg:py-6 rounded-full font-black uppercase tracking-[0.25em] text-[10px] shadow-[0_20px_50px_rgba(212,175,55,0.3)] transition-all duration-700 hover:scale-105 active:scale-95 overflow-hidden border border-white/20"
          >
            <span className="relative z-10">👉 QUERO APLICAR PARA UMA VAGA</span>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationCriteria;
