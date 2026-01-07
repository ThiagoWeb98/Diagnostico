
import React from 'react';

const Offer: React.FC = () => {
  const benefits = [
    "Mentoria Ao Vivo: O Plano CEO 2026",
    "Dashboard Dinâmico de Gestão Clínica",
    "Script de Vendas de Alto Ticket (SPA/Clin)",
    "Networking com Donas de Clínicas Premium",
    "Checklist de Processos Operacionais",
    "Acesso Vitalício em Plataforma Exclusiva"
  ];

  return (
    <section className="py-60 bg-[#050505] relative overflow-hidden flex items-center justify-center">
      {/* Background Soft Blends */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px] bg-[#c5a368]/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">

          <div className="relative w-full max-w-[480px] perspective-[2000px]">

            {/* Aesthetic Glass 3D Ticket */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-80 h-48 z-30 transition-all duration-1000 hover:scale-110">
              <div
                className="w-full h-full rounded-3xl flex flex-col p-8 relative overflow-hidden border border-[#c5a368]/40 animate-float"
                style={{
                  background: 'linear-gradient(135deg, rgba(14, 13, 15, 0.98) 0%, rgba(197, 163, 104, 0.2) 100%)',
                  transform: 'rotateY(-12deg) rotateX(12deg)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.8), inset 0 0 40px rgba(197, 163, 104, 0.1)'
                }}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-5"></div>

                <div className="flex justify-between items-start relative z-10">
                  <div className="flex flex-col">
                    <span className="text-[#c5a368] text-[8px] uppercase tracking-[0.6em] font-bold">CEO Pass</span>
                    <span className="text-white font-serif italic text-sm">Dra. Bruna Mello</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#c5a368]/10 backdrop-blur-md flex items-center justify-center border border-[#c5a368]/20">
                    <div className="w-6 h-6 bg-[#c5a368]/20 rounded-full blur-md"></div>
                  </div>
                </div>

                <div className="mt-auto relative z-10">
                  <h4 className="font-serif text-white text-4xl tracking-tighter mb-1">SMART PASS</h4>
                  <div className="flex justify-between items-end border-t border-white/10 pt-4">
                    <p className="text-[#d4cabe]/40 text-[8px] uppercase tracking-[0.5em] font-semibold">Workshop 2026</p>
                    <span className="text-white/10 font-serif text-[40px] leading-none">VIP</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dark Offer Card */}
            <div className="bg-[#0e0d0f] rounded-3xl shadow-3xl p-14 pt-44 relative overflow-hidden border border-white/5">
              <div className="text-center">
                <span className="text-[#c5a368] text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">Acesso Círculo Interno</span>
                <h3 className="font-serif text-5xl text-white mb-14 tracking-tight leading-none">Workshop CEO</h3>

                <ul className="space-y-7 mb-16 text-left border-y border-white/5 py-14">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blend-niche flex items-center justify-center shadow-lg">
                        <svg className="w-3 h-3 text-[#050505]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[#d4cabe]/60 text-[14px] font-medium leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-14">
                  <p className="text-[#c5a368] text-[10px] uppercase tracking-[0.5em] font-bold mb-5">Valor Exclusivo de Lançamento</p>
                  <div className="flex items-baseline justify-center gap-3">
                    <span className="text-[#d4cabe]/20 text-3xl font-serif italic">12x</span>
                    <span className="text-white text-8xl font-serif tracking-tighter leading-none shadow-sm">R$ 14,70</span>
                  </div>
                  <p className="text-[#d4cabe]/10 text-[11px] mt-6 font-bold tracking-[0.4em] uppercase italic">Investimento em Ativo</p>
                </div>

                <button onClick={() => window.open('https://bnrfxmop3u8.typeform.com/to/BRLBKgfi', '_blank')} className="w-full bg-blend-niche text-[#050505] py-7 rounded-full font-bold uppercase tracking-[0.5em] text-[11px] shadow-[0_20px_40px_rgba(197,163,104,0.3)] hover:shadow-[0_25px_60px_rgba(197,163,104,0.5)] transition-all transform hover:scale-[1.02] active:scale-95 group relative overflow-hidden">
                  <span className="relative z-10">Garantir Minha Vaga VIP</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>

                <div className="mt-12 flex flex-col items-center gap-4 opacity-30">
                  <div className="h-[1px] w-12 bg-white/10"></div>
                  <span className="text-white text-[8px] uppercase tracking-widest font-bold">Protocolo de Segurança Bancária</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
