
import React from 'react';

const TargetAudience: React.FC = () => {
  const profile = [
    "Donas de clínicas de estética ou medicina estética",
    "Faturamento atual entre R$ 40k e R$ 80k/mês",
    "Idade entre 28 e 55 anos",
    "Desejam sair do operacional para liderar estrategicamente"
  ];

  const symptoms = [
    "Agenda lotada mas caixa sempre no limite",
    "Ausência de férias (se parar, o lucro para)",
    "Falta de clareza real sobre margem de lucro",
    "Marketing baseado apenas em indicação caótica",
    "Equipe que não multiplica seu resultado"
  ];

  return (
    <section className="py-40 bg-[#0b090c]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-28">
          <span className="text-[#c5a368] uppercase tracking-[1em] text-[10px] mb-8 block font-bold">Qualificação Elite</span>
          <h2 className="font-serif text-5xl lg:text-6xl text-white mb-12 tracking-tight">O perfil ideal para o <span className="italic text-[#d4cabe]">Webinar</span>.</h2>
          <p className="text-[#d4cabe]/40 text-xl font-light leading-relaxed italic max-w-2xl mx-auto">Este treinamento não é para iniciantes. É para quem já construiu algo e agora precisa gerenciar como CEO.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-[#1a120b] p-16 rounded-2xl border border-white/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c5a368]/5 rounded-full -translate-y-16 translate-x-16 blur-3xl"></div>
            <h3 className="font-serif text-3xl text-white mb-10 border-b border-white/10 pb-6 italic">The High Profile</h3>
            <ul className="space-y-8">
              {profile.map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c5a368] mt-2 shadow-[0_0_10px_#c5a368]"></div>
                  <span className="text-[#d4cabe]/70 text-base font-medium leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#1a120b] p-16 rounded-2xl border border-[#c5a368]/10 relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#806248]/10 rounded-full translate-y-16 -translate-x-16 blur-3xl"></div>
            <h3 className="font-serif text-3xl text-[#c5a368] mb-10 border-b border-[#c5a368]/10 pb-6 italic">Structural Friction</h3>
            <ul className="space-y-8">
              {symptoms.map((item, i) => (
                <li key={i} className="flex items-start gap-5">
                  <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-[#c5a368]/20 bg-[#c5a368]/5">
                    <span className="text-[#c5a368] font-serif text-[10px]">!</span>
                  </div>
                  <span className="text-[#d4cabe]/50 text-base font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
