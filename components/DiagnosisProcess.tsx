import React from 'react';

const DiagnosisProcess: React.FC = () => {
    return (
        <section className="py-20 lg:py-32 bg-[#0A192F] border-t border-white/5 relative overflow-hidden">
            {/* Glow Effect */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 max-w-6xl relative z-10">

                {/* PARTE 1: O que vai sair com clareza */}
                <div className="mb-24 reveal">
                    <div className="text-center mb-16">
                        <span className="text-[#D4AF37] uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">Diagnóstico Estratégico</span>
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-[3rem] text-[#F1F5F9] leading-[1.2] font-light">
                            O que você vai sair com clareza após a <span className="italic text-[#D4AF37]">Sessão</span>:
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {[
                            "Onde exatamente está o gargalo que está limitando seu faturamento hoje",
                            "Quais ajustes de precificação e posicionamento podem aumentar sua margem imediatamente",
                            "Um plano de ação prático e personalizado para os próximos 90 dias",
                            "Clareza sobre o que fazer primeiro sem perder tempo com o que não move o ponteiro"
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 lg:p-10 rounded-2xl flex items-start gap-6 hover:bg-white/10 transition-colors group">
                                <span className="text-[#D4AF37] text-2xl group-hover:scale-110 transition-transform">✦</span>
                                <p className="text-[#F1F5F9]/90 text-lg font-light leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PARTE 2: Como funciona o processo */}
                <div className="relative reveal pt-16 border-t border-white/10">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-3xl md:text-4xl lg:text-[3rem] text-[#F1F5F9] leading-[1.2] font-light italic">
                            Como funciona o <span className="not-italic text-[#D4AF37] font-normal">processo</span>:
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                        {/* Linha conectora (Desktop) */}
                        <div className="hidden lg:block absolute top-[4.5rem] left-10 right-10 h-px bg-white/10"></div>

                        {[
                            {
                                step: "1",
                                title: "Preencha o formulário",
                                desc: "Responda algumas perguntas sobre seu negócio e seus objetivos."
                            },
                            {
                                step: "2",
                                title: "Análise pela nossa equipe",
                                desc: "Avaliamos seu perfil e verificamos se essa sessão faz sentido para o seu momento."
                            },
                            {
                                step: "3",
                                title: "Se aprovada, nossa equipe entra em contato",
                                desc: "Você receberá o convite para agendar sua Sessão de Diagnóstico Estratégico diretamente com a Dra. Bruna Mello."
                            }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                                <div className="w-20 h-20 rounded-full bg-[#0A192F] border-2 border-white/20 flex items-center justify-center text-[#D4AF37] font-serif text-3xl mb-8 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                    {item.step}
                                </div>
                                <h4 className="text-white font-serif text-xl lg:text-2xl mb-4 italic">{item.title}</h4>
                                <p className="text-white/60 font-light leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 max-w-4xl mx-auto relative reveal">
                        <div className="absolute inset-0 bg-gold-gradient opacity-20 blur-3xl -z-10 rounded-full"></div>
                        <div className="bg-navy/40 backdrop-blur-2xl border border-champagne/30 rounded-[2.5rem] p-10 lg:p-14 text-center shadow-[0_20px_80px_rgba(212,175,55,0.15)] overflow-hidden relative group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>

                            <div className="inline-block bg-champagne text-navy font-black px-6 py-2 rounded-full text-xs lg:text-sm tracking-[0.2em] mb-8 shadow-xl uppercase">
                                APENAS 8 VAGAS DISPONÍVEIS NESTE MÊS
                            </div>

                            <h3 className="text-white font-serif text-2xl lg:text-4xl mb-6 italic leading-tight">
                                Esse tempo é dedicado exclusivamente para quem <br className="hidden lg:block" /> está pronta para um <span className="text-champagne underline decoration-champagne/30 underline-offset-8">próximo nível</span>.
                            </h3>

                            <div className="max-w-2xl mx-auto border-t border-white/10 pt-8">
                                <p className="text-[#F1F5F9]/80 text-base lg:text-lg font-light leading-relaxed">
                                    <span className="font-bold text-champagne block mb-2 text-xl lg:text-2xl">⚠️ Atenção:</span>
                                    Realizamos pouquíssimas sessões mensais. Toda análise é profunda e técnica por isso, você precisa ser aprovada em nossa análise de perfil para garantir seu espaço.
                                </p>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gold-gradient opacity-50"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DiagnosisProcess;
