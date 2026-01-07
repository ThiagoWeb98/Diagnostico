
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getAdvice = async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setResponse('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Você é o Consultor Estratégico da Dra. Bruna Mello no Workshop CEO 2026. 
        O usuário pergunta: "${query}". 
        Responda em português, com um tom sofisticado, profissional, direto e autoritário (Estilo Vogue/Editorial). 
        Use metáforas de luxo e escala. Foque em lucro, processos e mentalidade de CEO para clínicas de estética e saúde.`,
      });

      setResponse(res.text || "A conexão com a central estratégica está instável.");
    } catch (error) {
      console.error(error);
      setResponse("Os mentores estão em imersão privada. Tente em instantes.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [response]);

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full brushed-metal flex items-center justify-center shadow-2xl border border-white/10 hover:scale-110 transition-all group"
        >
          <svg className="w-8 h-8 text-white group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </button>
      ) : (
        <div className="w-[340px] md:w-[400px] glass-card rounded-xl border border-[#806248]/40 shadow-3xl flex flex-col overflow-hidden">
          <div className="p-6 bg-[#1a120b] border-b border-[#806248]/20 flex justify-between items-center">
            <div>
              <h4 className="font-serif text-[#d4cabe] text-sm uppercase tracking-[0.3em]">Sala de Estratégia</h4>
              <p className="text-[8px] text-[#806248] uppercase tracking-[0.4em] mt-1 font-bold">Consultoria AI Exclusiva</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#a5907b] hover:text-[#d4cabe]">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="p-8 h-[400px] overflow-y-auto space-y-6 bg-[#0b090c]/90">
            <div className="border-l border-[#806248] pl-4 py-2 text-[11px] text-[#a5907b] italic leading-relaxed">
              "Bem-vinda ao círculo interno. Qual decisão estratégica você precisa tomar hoje para destravar o lucro da sua clínica?"
            </div>
            
            {response && (
              <div className="text-sm text-[#d4cabe] leading-relaxed font-light first-letter:text-2xl first-letter:font-serif first-letter:text-[#806248]">
                {response}
              </div>
            )}
            
            {isLoading && (
              <div className="flex gap-1.5 items-center">
                <div className="w-1 h-1 bg-[#806248] rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-[#806248] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1 h-1 bg-[#806248] rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
            )}
          </div>
          
          <div className="p-6 bg-[#1a120b] flex gap-3">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && getAdvice()}
              placeholder="Digite sua dúvida..."
              className="flex-1 bg-[#0b090c] border border-[#806248]/30 rounded-full px-6 py-3 text-[11px] text-[#d4cabe] focus:outline-none focus:border-[#d4cabe]/40 transition-colors"
            />
            <button 
              onClick={getAdvice}
              disabled={isLoading}
              className="w-12 h-12 rounded-full brushed-metal flex items-center justify-center text-white disabled:opacity-50 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAdvisor;
