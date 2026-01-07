
import React from 'react';

const Testimonials: React.FC = () => {
  const cards = [
    {
      tag: "Lucratividade",
      text: "Eu faturava bem, mas no fim do mês não sobrava quase nada. A Bruna me ensinou a enxergar os números. Ajustamos a precificação e hoje dobro meu lucro atendendo menos pacientes.",
      author: "Dra. Camila S.",
      specialty: "Harmonização Facial"
    },
    {
      tag: "Liberdade de Tempo",
      text: "Trabalhava 12 horas por dia e não via meus filhos. O diagnóstico da Bruna abriu meus olhos. Implementamos processos e hoje consigo folgas semanais. Recuperei minha vida.",
      author: "Dra. Fernanda L.",
      specialty: "Estética Corporal"
    },
    {
      tag: "Gestão de Equipe",
      text: "Minha clínica era uma bagunça, eu fazia tudo sozinha. A mentoria me deu o passo a passo para contratar e treinar. Hoje minha equipe entrega tudo com excelência.",
      author: "Dra. Patrícia R.",
      specialty: "Biomédica Esteta"
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#e9e4df] text-[#1a120b]">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-24 reveal">
          <span className="text-[#9b6d4b] uppercase tracking-[0.5em] text-[10px] font-black mb-6 block">Resultados de Elite</span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-[4rem] text-[#1a120b] leading-[1.2] font-light italic">
            Onde a estratégia encontra o <br/><span className="italic font-normal text-[#c8a178]">resultado real</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className={`reveal reveal-delay-${i + 1} bg-white/40 backdrop-blur-md p-10 lg:p-12 rounded-[2.5rem] border border-white/60 flex flex-col justify-between shadow-[0_10px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative transition-all duration-1000 group hover:-translate-y-2`}
            >
              <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-12 h-12 text-[#c8a178]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/50 text-[#c8a178] text-[8px] lg:text-[9px] uppercase tracking-[0.2em] font-black mb-8 border border-[#c8a178]/10 group-hover:bg-[#c8a178] group-hover:text-white transition-all">
                  {card.tag}
                </span>
                <p className="text-[#1a120b]/80 text-lg leading-relaxed italic mb-10 font-light leading-[1.6]">
                  "{card.text}"
                </p>
              </div>
              
              <div className="pt-8 border-t border-black/[0.03]">
                <p className="text-[#1a120b] font-serif text-xl font-light italic">{card.author}</p>
                <p className="text-[#9b6d4b] text-[8px] lg:text-[9px] uppercase tracking-widest font-black mt-2">{card.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
