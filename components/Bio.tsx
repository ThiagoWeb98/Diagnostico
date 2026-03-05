
import React from 'react';
import bioImage from '../assets/bruna-sobre.PNG';

const Bio: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-[#0A192F] relative overflow-hidden">
      {/* Glow decorativo de fundo para profundidade */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-24 items-center">

          {/* LADO DA IMAGEM - PRIORIDADE VISUAL NO MOBILE */}
          <div className="order-1 relative reveal">
            <div className="aspect-[3/4] md:aspect-[4/5] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-[#D4AF37]/20 shadow-[0_50px_100px_rgba(0,0,0,0.5)] group">
              <img
                src={bioImage}
                className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
                alt="Dra. Bruna Mello"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-transparent to-transparent opacity-70"></div>
            </div>

            {/* Badge de Autoridade */}
            <div className="absolute -bottom-6 -right-2 lg:-right-8 bg-[#F1F5F9] p-6 lg:p-10 rounded-2xl border border-white/20 shadow-3xl z-20 hover:scale-105 transition-transform duration-500">
              <p className="text-[#0A192F] font-serif text-2xl lg:text-4xl italic leading-none mb-2">Estratégica</p>
              <div className="w-12 h-0.5 bg-[#D4AF37] mb-3"></div>
              <p className="text-[#B38F22] text-[8px] lg:text-[10px] uppercase tracking-[0.3em] font-black">Método Acelera Clínicas®</p>
            </div>
          </div>

          {/* LADO DO TEXTO - NARRATIVA IMPACTANTE */}
          <div className="order-2 reveal max-w-xl">
            <span className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-bold mb-8 block border-l-2 border-[#D4AF37] pl-5">A Especialista</span>
            <h2 className="font-serif text-[2.2rem] lg:text-[3.5rem] text-[#F1F5F9] mb-10 leading-[1.1]">Quem é a <br /><span className="italic text-[#D4AF37]">Dra. Bruna Mello?</span></h2>

            <div className="space-y-8 text-[#F1F5F9]/80 text-[18px] lg:text-[20px] leading-[1.8] font-light italic">
              <p>
                Filha de cabeleireira, cresceu literalmente debaixo da escada de um salão. Buscou excelência técnica em <span className="text-white font-normal not-italic">Londres</span>, tornando-se referência premiada.
              </p>

              <div className="py-4 px-6 border-l border-[#D4AF37]/40 bg-white/5 rounded-r-xl">
                <p className="text-[#F1F5F9] font-normal not-italic">
                  A virada veio com seu filho, <span className="text-[#D4AF37] font-bold">Gabi</span>. Com agenda lotada e faturando alto, percebeu que aquele "sucesso" sem tempo era uma prisão.
                </p>
              </div>

              <p>
                Transformou essa dor em método. Hoje, lidera um ecossistema de <span className="text-white font-bold not-italic">R$ 1 Milhão/mês</span>.
              </p>

              <p className="text-[#F1F5F9]/90 leading-[1.8]">
                Sua missão é ensinar donas de clínicas a construírem negócios autogerenciáveis unindo a autoridade de uma especialista premiada com a liberdade de uma <span className="italic text-[#D4AF37] font-normal underline underline-offset-8 decoration-[#D4AF37]/30">mãe presente</span>.
              </p>
            </div>

            <div className="mt-14 flex justify-start">
              <button
                onClick={() => window.open('https://bnrfxmop3u8.typeform.com/to/BRLBKgfi', '_blank')}
                className="group relative flex items-center justify-center bg-gold-gradient text-[#0A192F] px-10 lg:px-12 py-5 lg:py-6 rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-[0_20px_40px_rgba(200,161,120,0.3)] transition-all duration-700 hover:scale-105 active:scale-95 overflow-hidden border border-white/10"
              >
                <span className="relative z-10">APLICAR PARA UMA VAGA</span>
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
