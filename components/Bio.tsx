
import React from 'react';

const Bio: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#1a120b] relative overflow-hidden">
      {/* Glow decorativo de fundo para profundidade */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#c8a178]/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">
          
          {/* LADO DA IMAGEM - PRIORIDADE VISUAL NO MOBILE */}
          <div className="order-1 relative reveal">
             <div className="aspect-[3/4] md:aspect-[4/5] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-[#c8a178]/20 shadow-[0_50px_100px_rgba(0,0,0,0.5)] group">
                <img 
                  src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/dra_bruna_mello_hero.jpg"
                  className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                  alt="Dra. Bruna Mello"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b]/90 via-transparent to-transparent opacity-70"></div>
             </div>
             
             {/* Badge de Autoridade */}
             <div className="absolute -bottom-6 -right-2 lg:-right-8 bg-[#e9e4df] p-6 lg:p-10 rounded-2xl border border-white/20 shadow-3xl z-20 hover:scale-105 transition-transform duration-500">
                <p className="text-[#1a120b] font-serif text-2xl lg:text-4xl italic leading-none mb-2">Estratégica</p>
                <div className="w-12 h-0.5 bg-[#c8a178] mb-3"></div>
                <p className="text-[#9b6d4b] text-[8px] lg:text-[10px] uppercase tracking-[0.3em] font-black">Método Acelera Clínicas®</p>
             </div>
          </div>

          {/* LADO DO TEXTO - NARRATIVA IMPACTANTE */}
          <div className="order-2 reveal max-w-xl">
            <span className="text-[#c8a178] uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block border-l-2 border-[#c8a178] pl-5">A Especialista</span>
            <h2 className="font-serif text-[2.2rem] lg:text-[3.5rem] text-[#f2f0ed] mb-10 leading-[1.1]">Quem é a <br/><span className="italic text-[#c8a178]">Dra. Bruna Mello?</span></h2>
            
            <div className="space-y-8 text-[#f2f0ed]/80 text-[18px] lg:text-[20px] leading-[1.8] font-light italic">
              <p>
                Filha de cabeleireira, cresceu literalmente debaixo da escada de um salão. Buscou excelência técnica em <span className="text-white font-normal not-italic">Londres</span>, tornando-se referência premiada.
              </p>
              
              <div className="py-4 px-6 border-l border-[#c8a178]/40 bg-white/5 rounded-r-xl">
                <p className="text-[#f2f0ed] font-normal not-italic">
                  A virada veio com seu filho, <span className="text-[#c8a178] font-bold">Gabi</span>. Com agenda lotada e faturando alto, percebeu que aquele "sucesso" sem tempo era uma prisão.
                </p>
              </div>

              <p>
                Transformou essa dor em método. Hoje, lidera um ecossistema de <span className="text-white font-bold not-italic">R$ 1 Milhão/mês</span>. 
              </p>
              
              <p className="text-[#f2f0ed]/90 leading-[1.8]">
                Sua missão é ensinar donas de clínicas a construírem impérios autogerenciáveis, unindo a autoridade de uma especialista premiada com a liberdade de uma <span className="italic text-[#c8a178] font-normal underline underline-offset-8 decoration-[#c8a178]/30">mãe presente</span>.
              </p>
            </div>

            <div className="mt-14 flex justify-start">
              <button 
                onClick={() => window.open('https://wa.me/seu-numero', '_blank')}
                className="group relative flex items-center justify-center bg-gold-gradient text-[#1a120b] px-10 lg:px-12 py-5 lg:py-6 rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-[0_20px_40px_rgba(200,161,120,0.3)] transition-all duration-700 hover:scale-105 active:scale-95 overflow-hidden border border-white/10"
              >
                <span className="relative z-10">APLICAR PARA VAGA GRATUITA</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
