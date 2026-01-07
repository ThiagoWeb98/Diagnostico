
import React from 'react';

const PainPleasure: React.FC = () => {
  return (
    <section className="py-40 relative bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-28 max-w-4xl mx-auto">
          <span className="text-[#c5a368] uppercase tracking-[0.8em] text-[10px] mb-8 block font-bold">The Vision</span>
          <h2 className="font-serif text-5xl lg:text-6xl text-white mb-10 tracking-tight">
            Saia do operacional e assuma o seu <span className="italic text-[#c5a368]">trono</span>.
          </h2>
          <p className="text-[#d4cabe]/40 max-w-2xl mx-auto italic font-light">Uma CEO não apenas executa, ela orquestra experiências e lucratividade.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* A Sobrecarga (Dark Gray Surface) */}
          <div className="bg-[#0e0d0f] border border-white/5 p-16 relative overflow-hidden rounded-2xl group shadow-sm">
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
             <h3 className="text-white/40 font-serif text-3xl mb-14 tracking-tight italic">A Sobrecarga Atual</h3>
             <ul className="space-y-12">
              {[
                "Agenda lotada que não se traduz em caixa livre",
                "Ausência de processos que geram dependência de você",
                "Dificuldade em cobrar o preço que sua entrega merece",
                "Sentimento de exaustão ao final de cada dia"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-6 border-l border-white/5 pl-8">
                  <span className="text-[#d4cabe]/30 text-[15px] font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* O Império (Gold Accented Surface) */}
          <div className="bg-[#0e0d0f] p-16 relative shadow-2xl rounded-2xl border border-[#c5a368]/20">
             <h3 className="text-[#c5a368] font-serif text-3xl mb-14 tracking-tight italic">O Império de Elite</h3>
             <ul className="space-y-12">
              {[
                "Lucratividade previsível e escala inteligente",
                "Posicionamento que atrai o público Triple A",
                "Equipe treinada e processos automatizados",
                "Liberdade de tempo para viver sua essência"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-6">
                  <div className="mt-1 w-6 h-6 bg-[#c5a368]/10 backdrop-blur-sm flex items-center justify-center rounded-full border border-[#c5a368]/20">
                    <svg className="w-3.5 h-3.5 text-[#c5a368]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white text-[13px] uppercase tracking-[0.4em] font-bold leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPleasure;
