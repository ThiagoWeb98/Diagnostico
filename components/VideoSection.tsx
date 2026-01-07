
import React from 'react';

const VideoSection: React.FC = () => {
  const testimonials = [
    { label: "Triplicou o faturamento", name: "Dra. Luciana" },
    { label: "Dobrou o lucro em 1 ano", name: "Dra. Marina" },
    { label: "Resultados em 90 dias", name: "Dr. André", error: true },
    { label: "Evolução de Posicionamento", name: "Dr. André" },
    { label: "Domínio de Gestão", name: "Dra. Renata" },
    { label: "Aumento de 4x real", name: "Dr. Paulo" }
  ];

  return (
    <section className="py-32 bg-[#1a120b]">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <div className="reveal mb-24">
          <h2 className="font-serif text-3xl lg:text-5xl text-[#f2f0ed] leading-snug">
            Elite que <span className="italic text-[#c8a178]">executou</span> o Plano:
          </h2>
          <div className="w-24 h-px bg-[#c8a178]/30 mx-auto mt-10"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t, i) => (
            <div key={i} className={`reveal reveal-delay-${(i % 3) + 1} relative aspect-video rounded-[1.5rem] overflow-hidden shadow-2xl group cursor-pointer ${t.error ? 'bg-[#261b12] border border-[#c8a178]/10' : 'bg-[#000]'}`}>
               {!t.error ? (
                  <>
                    <img 
                      src={`https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400&h=225&sig=${i}`}
                      className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                      alt={t.name}
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all flex items-center justify-center">
                        <div className="w-16 h-16 bg-[#f2f0ed]/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transform transition-all duration-700 group-hover:scale-110 group-hover:bg-[#c8a178]">
                          <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent translate-x-1"></div>
                        </div>
                    </div>
                    <div className="absolute bottom-6 left-6 text-left opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <span className="text-[9px] text-[#c8a178] font-bold uppercase tracking-widest">{t.label}</span>
                    </div>
                  </>
               ) : (
                  <div className="flex flex-col items-center justify-center h-full gap-4 px-8">
                    <p className="text-[#c5a689] text-[10px] uppercase tracking-widest font-bold opacity-30">Privado</p>
                    <div className="w-8 h-8 rounded-full border border-[#c8a178]/20 border-t-[#c8a178] animate-spin"></div>
                  </div>
               )}
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-3">
          <button 
            onClick={() => document.getElementById('application')?.scrollIntoView({behavior: 'smooth'})}
            className="group bg-[#f2f0ed] text-[#1a120b] px-14 py-7 rounded-full font-extrabold uppercase tracking-widest text-[10px] shadow-2xl transition-all duration-700 hover:bg-[#c8a178] hover:text-[#1a120b] relative overflow-hidden"
          >
            <span className="relative z-10">Solicitar acesso gratuito</span>
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;