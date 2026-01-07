
import React from 'react';

const TheProblem: React.FC = () => {
  return (
    <section className="py-40 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
             <div className="aspect-[4/5] bg-[#0e0d0f] rounded-2xl shadow-2xl overflow-hidden border border-[#c5a368]/10">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                <div className="absolute bottom-12 left-12 right-12 text-center">
                   <p className="font-serif italic text-2xl text-white mb-4">"Você é a empresa, não tem uma empresa."</p>
                   <div className="w-12 h-px bg-[#c5a368] mx-auto"></div>
                </div>
             </div>
             {/* Decorative element */}
             <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#c5a368]/5 rounded-full blur-3xl"></div>
          </div>

          <div>
            <span className="text-[#c5a368] uppercase tracking-[0.6em] text-[10px] mb-8 block font-bold">O Ponto de Inflexão</span>
            <h2 className="font-serif text-4xl lg:text-6xl text-white mb-10 leading-tight">A Armadilha da <span className="italic text-[#d4cabe]">Dona de Sucesso</span>.</h2>
            
            <div className="space-y-8 text-[#d4cabe]/50 text-lg font-light leading-relaxed">
              <p>
                Você trabalha 60h por semana. Faz todos os procedimentos complexos. Atende as intercorrências. Faz o marketing. Paga as contas.
              </p>
              <p className="font-medium text-white italic">
                O resultado? Um faturamento razoável, mas uma vida caótica e lucro líquido invisível.
              </p>
              <p>
                Se você parar 15 dias para viajar, o seu negócio quebra? Se a resposta é sim, você não é uma CEO, você é a principal funcionária da sua clínica.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="p-8 border border-white/10 rounded-xl bg-[#0e0d0f]">
                  <span className="block text-[#c5a368] font-serif text-2xl mb-2">Opção A</span>
                  <p className="text-[11px] uppercase tracking-widest text-[#d4cabe]/40 font-bold">Manter o status quo e o esgotamento.</p>
               </div>
               <div className="p-8 bg-blend-niche rounded-xl shadow-lg transform scale-105">
                  <span className="block text-[#050505] font-serif text-2xl mb-2">Opção B</span>
                  <p className="text-[11px] uppercase tracking-widest text-[#050505]/80 font-bold">Virar CEO e construir um ativo autogerenciável.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
