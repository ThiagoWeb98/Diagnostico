
import React from 'react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-40 bg-[#050505] relative">
      <div className="container mx-auto px-6 flex justify-center">
        <div className="max-w-4xl w-full bg-[#0e0d0f] p-16 lg:p-28 shadow-2xl relative overflow-hidden border border-[#c5a368]/10 rounded-2xl">
          <div className="relative z-10 flex flex-col items-center text-center">
            {/* Institucional Seal */}
            <div className="w-24 h-24 mb-16 relative">
              <div className="absolute inset-0 bg-[#c5a368] rounded-full shadow-[0_0_30px_rgba(197,163,104,0.3)] transform rotate-12 scale-110"></div>
              <div className="absolute inset-2 border-2 border-[#050505]/20 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-3xl text-[#050505] font-bold transform -rotate-12">B</span>
              </div>
            </div>
            
            <h2 className="font-serif italic text-4xl text-white mb-12 tracking-tight">Garantia de Satisfação Elite</h2>
            
            <p className="text-[#d4cabe]/60 text-xl leading-relaxed mb-12 font-serif italic max-w-2xl">
              "Buscamos transmitir sofisticação e segurança. Se você não sentir que o Workshop despertou uma experiência de beleza conectada à lucratividade e exclusividade, nós devolvemos 100% do seu investimento."
            </p>
            
            <div className="w-20 h-px bg-[#c5a368]/20 mb-8"></div>
            
            <div className="flex flex-col items-center">
              <span className="font-serif text-white text-lg mb-2">Dra. Bruna Mello</span>
              <span className="text-[#c5a368] uppercase tracking-[0.4em] text-[10px] font-bold">CEO Acelera Clínicas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
