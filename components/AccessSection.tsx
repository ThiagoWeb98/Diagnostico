
import React, { useEffect, useRef } from 'react';

const AccessSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const items = containerRef.current?.querySelectorAll('.slide-reveal');
    items?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const deliverables = [
    {
      id: "01",
      title: "Imersão Ao Vivo",
      desc: "3 noites de mentoria direta com Dra. Bruna Mello sobre escala e lucro.",
      bg: "bg-[#f2f2f0]"
    },
    {
      id: "02",
      title: "Dashboard de CEO",
      desc: "Ferramenta exclusiva para controle de margem líquida e previsibilidade.",
      bg: "bg-white"
    },
    {
      id: "03",
      title: "Scripts de Alto Ticket",
      desc: "Modelos de conversão para vendas de tickets acima de R$ 5.000,00.",
      bg: "bg-[#f2f2f0]"
    },
    {
      id: "04",
      title: "Manual de Processos",
      desc: "Como delegar o operacional e focar apenas na estratégia do negócio.",
      bg: "bg-white"
    },
    {
      id: "05",
      title: "Networking Elite",
      desc: "Acesso a um grupo seleto de donas de clínicas com a mesma ambição.",
      bg: "bg-[#f2f2f0]"
    },
    {
      id: "06",
      title: "Acesso Vitalício",
      desc: "Gravações completas para você revisar sua estratégia quando desejar.",
      bg: "bg-white"
    }
  ];

  return (
    <section ref={containerRef} className="relative">
      {/* Header da Seção */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white text-center px-8 slide-reveal">
        <span className="text-[#bb917e] uppercase tracking-[0.8em] text-[10px] mb-8 block font-bold">The Strategic Blueprint</span>
        <h2 className="font-serif text-5xl lg:text-8xl text-[#2d2e28] tracking-tighter leading-none mb-4">
          O que você terá <span className="italic text-[#949a71]">acesso</span>.
        </h2>
        <div className="w-px h-24 bg-gradient-to-b from-[#949a71] to-transparent mt-12"></div>
      </div>

      {/* Seções de Slide */}
      <div className="relative">
        {deliverables.map((item, i) => (
          <div 
            key={i} 
            className={`min-h-[85vh] sticky top-0 flex items-center justify-center ${item.bg} border-t border-[#949a71]/10 slide-reveal transition-all duration-1000 overflow-hidden shadow-[0_-10px_30px_rgba(0,0,0,0.02)]`}
          >
            <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-center relative z-10 py-20">
              <div className="text-center md:text-left">
                <span className="font-serif italic text-[10rem] lg:text-[18rem] text-[#949a71]/10 leading-none block">
                  {item.id}
                </span>
              </div>
              
              <div className="max-w-3xl text-center md:text-left">
                <div className="h-px w-24 bg-[#bb917e] mb-12 mx-auto md:mx-0"></div>
                <h3 className="font-serif text-4xl lg:text-7xl text-[#2d2e28] mb-10 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-[#7b7f65] text-xl lg:text-2xl font-light leading-relaxed mb-12 italic">
                  {item.desc}
                </p>
                <div className="flex items-center gap-6 justify-center md:justify-start">
                  <div className="w-12 h-px bg-[#949a71]/30"></div>
                  <span className="text-[#949a71] text-[9px] uppercase tracking-[0.5em] font-bold">Smart CEO Content</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#f2f2f0]/40 to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccessSection;
