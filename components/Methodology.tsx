
import React from 'react';

const Methodology: React.FC = () => {
  const pillars = [
    { title: "Mkt & Vendas", desc: "Funil 24/7 de clientes Triple A." },
    { title: "Gestão & Finanças", desc: "Cockpit com 5 números essenciais." },
    { title: "Liderança", desc: "Equipe que multiplica seu tempo." },
    { title: "Estratégia", desc: "Plano de 90 dias para escala real." }
  ];

  return (
    <section className="py-40 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[#c5a368] uppercase tracking-[0.8em] text-[10px] mb-8 block font-bold">Metodologia</span>
          <h2 className="font-serif text-5xl text-white mb-12 tracking-tight">Os 4 Pilares da <span className="italic text-[#d4cabe]">Aceleração</span>.</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="p-10 bg-[#0e0d0f] border border-white/5 rounded-2xl text-center hover:border-[#c5a368]/30 transition-all group">
               <div className="w-12 h-12 rounded-full bg-blend-niche flex items-center justify-center text-[#050505] font-serif mx-auto mb-8 shadow-lg">
                 {i+1}
               </div>
               <h3 className="font-serif text-xl text-white mb-4 group-hover:text-[#c5a368] transition-colors">{pillar.title}</h3>
               <p className="text-[#d4cabe]/30 text-xs font-light tracking-wide italic">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
