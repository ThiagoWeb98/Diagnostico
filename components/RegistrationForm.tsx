
import React, { useState } from 'react';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    revenue: '',
    teamSize: '',
    mainPain: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Inscrição confirmada! Verifique seu WhatsApp.');
  };

  return (
    <section id="registration" className="py-60 bg-[#0b090c] relative overflow-hidden flex items-center justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[#c5a368]/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          
          <div className="relative w-full max-w-[580px]">
            <div className="glass-dark rounded-3xl shadow-[0_50px_100px_rgba(0,0,0,0.5)] p-12 lg:p-16 relative overflow-hidden border border-[#c5a368]/20">
               <div className="text-center mb-14">
                  <span className="text-[#c5a368] text-[10px] uppercase tracking-[0.8em] font-bold block mb-6">Acesso ao Círculo Interno</span>
                  <h3 className="font-serif text-5xl text-white mb-4 tracking-tight">Smart Pass</h3>
                  <p className="text-[#d4cabe]/40 text-sm font-light italic">Preencha seus dados para a análise de perfil.</p>
               </div>

               <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c5a368] ml-2">Nome Completo</label>
                       <input 
                         required
                         type="text" 
                         className="w-full bg-[#1a120b] border border-white/10 rounded-xl px-6 py-5 text-sm text-white focus:outline-none focus:border-[#c5a368]/50 transition-all shadow-inner"
                         value={formData.name}
                         onChange={e => setFormData({...formData, name: e.target.value})}
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c5a368] ml-2">WhatsApp</label>
                       <input 
                         required
                         type="tel" 
                         className="w-full bg-[#1a120b] border border-white/10 rounded-xl px-6 py-5 text-sm text-white focus:outline-none focus:border-[#c5a368]/50 transition-all shadow-inner"
                         placeholder="(00) 00000-0000"
                         value={formData.whatsapp}
                         onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                       />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c5a368] ml-2">E-mail Profissional</label>
                     <input 
                       required
                       type="email" 
                       className="w-full bg-[#1a120b] border border-white/10 rounded-xl px-6 py-5 text-sm text-white focus:outline-none focus:border-[#c5a368]/50 transition-all shadow-inner"
                       value={formData.email}
                       onChange={e => setFormData({...formData, email: e.target.value})}
                     />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c5a368] ml-2">Faturamento Médio</label>
                       <select 
                         required
                         className="w-full bg-[#1a120b] border border-white/10 rounded-xl px-6 py-5 text-sm text-[#d4cabe] focus:outline-none focus:border-[#c5a368]/50 transition-all appearance-none cursor-pointer shadow-inner"
                         value={formData.revenue}
                         onChange={e => setFormData({...formData, revenue: e.target.value})}
                       >
                         <option value="">Selecione...</option>
                         <option value="under_40k">Abaixo de R$ 40k</option>
                         <option value="40_80k">R$ 40k - R$ 80k</option>
                         <option value="80_120k">R$ 80k - R$ 120k</option>
                         <option value="above_120k">Acima de R$ 120k</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c5a368] ml-2">Profissionais na Equipe</label>
                       <input 
                         required
                         type="number" 
                         className="w-full bg-[#1a120b] border border-white/10 rounded-xl px-6 py-5 text-sm text-white focus:outline-none focus:border-[#c5a368]/50 transition-all shadow-inner"
                         value={formData.teamSize}
                         onChange={e => setFormData({...formData, teamSize: e.target.value})}
                       />
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#c5a368] ml-2">Principal Desafio Hoje</label>
                     <textarea 
                       required
                       className="w-full bg-[#1a120b] border border-white/10 rounded-xl px-6 py-5 text-sm text-white focus:outline-none focus:border-[#c5a368]/50 transition-all h-28 resize-none shadow-inner"
                       value={formData.mainPain}
                       onChange={e => setFormData({...formData, mainPain: e.target.value})}
                     />
                  </div>

                  <button className="w-full bg-blend-niche text-[#0b090c] py-7 rounded-full font-bold uppercase tracking-[0.5em] text-[11px] shadow-[0_20px_40px_rgba(197,163,104,0.3)] hover:shadow-[0_25px_60px_rgba(197,163,104,0.5)] transition-all transform hover:scale-[1.02] active:scale-95 group relative overflow-hidden mt-6">
                    <span className="relative z-10">Solicitar Minha Inscrição VIP</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </button>
               </form>
               
               <div className="mt-14 flex flex-col items-center gap-4 opacity-40">
                 <div className="h-px w-20 bg-[#c5a368]/30"></div>
                 <span className="text-white text-[9px] uppercase tracking-widest font-bold">Ambiente de Segurança Triple A</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
