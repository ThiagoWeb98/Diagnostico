
import React from 'react';

const Schedule: React.FC = () => {
  const days = [
    {
      title: "Dia 1 – Diagnóstico, Marketing e Finanças",
      items: [
        { label: "Diagnóstico CEO", desc: "Como identificar os gargalos que drenam seu lucro." },
        { label: "Pilar 1: Marketing & Vendas", desc: "Funil previsível para 20+ novos clientes qualificados/mês." },
        { label: "Pilar 2: Cockpit Financeiro", desc: "Os 5 KPIs que determinam se sua clínica prospera." }
      ]
    },
    {
      title: "Dia 2 – Equipe, Estratégia e Plano de 90 dias",
      items: [
        { label: "Pilar 3: Liderança Elite", desc: "Como delegar o operacional sem perder a qualidade." },
        { label: "Pilar 4: Estratégia de Expansão", desc: "Plano para saltar de 80k para 150k com margem de 30%." },
        { label: "O Plano de 90 Dias", desc: "Cronograma prático para implementar sua nova estrutura." }
      ]
    }
  ];

  return (
    <section className="py-40 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-[#c5a368] uppercase tracking-[0.8em] text-[10px] mb-8 block font-bold">Conteúdo Prático</span>
          <h2 className="font-serif text-5xl text-white mb-12 tracking-tight">O que você vai dominar em <span className="italic text-[#d4cabe]">2 dias</span>.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {days.map((day, i) => (
            <div key={i} className="bg-[#0e0d0f] p-12 rounded-2xl border border-white/5 relative overflow-hidden group">
               <div className="absolute -top-10 -right-10 font-serif text-[12rem] text-white/5 leading-none group-hover:text-[#c5a368]/10 transition-colors">0{i+1}</div>
               <h3 className="font-serif text-3xl text-white mb-12 relative z-10 italic">{day.title}</h3>
               <div className="space-y-10 relative z-10">
                  {day.items.map((item, idx) => (
                    <div key={idx} className="flex gap-6">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#c5a368] mt-2 flex-shrink-0 shadow-[0_0_8px_#c5a368]"></div>
                       <div>
                          <p className="text-white text-xs uppercase tracking-[0.3em] font-extrabold mb-2">{item.label}</p>
                          <p className="text-[#d4cabe]/40 text-sm font-light leading-relaxed italic">{item.desc}</p>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
