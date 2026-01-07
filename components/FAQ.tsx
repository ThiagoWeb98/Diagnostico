
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Para quem é a Imersão Workshop CEO?",
      a: "Donas de clínicas, estúdios e biomédicas que já faturam, mas se sentem estagnadas, sem margem de lucro e presas no operacional."
    },
    {
      q: "Qual a data e o local?",
      a: "13, 14 e 15 de Janeiro. 100% Online e Ao Vivo via Zoom. Você receberá o link exclusivo após a inscrição."
    },
    {
      q: "Tive um imprevisto, fica gravado?",
      a: "Sim! Você terá acesso vitalício a todas as gravações para assistir no seu ritmo e aplicar as estratégias quando quiser."
    },
    {
      q: "Posso parcelar o ingresso?",
      a: "Sim, oferecemos parcelamento em até 12x no cartão de crédito, além de Pix e outras formas de pagamento seguro."
    },
    {
      q: "Como funciona a garantia?",
      a: "Oferecemos 7 dias de satisfação total. Se por qualquer motivo você decidir que não é para você, devolvemos seu dinheiro integralmente."
    }
  ];

  return (
    <section className="py-40 bg-[#0b090c]">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-24">
          <span className="text-[#806248] uppercase tracking-[0.5em] text-[9px] mb-4 block font-bold">Dúvidas Frequentes</span>
          <h2 className="font-serif text-5xl text-[#d4cabe]">Esclareça seus <span className="italic">pontos</span>.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#806248]/10 last:border-0">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-10 text-left group"
              >
                <span className={`text-lg font-serif tracking-wide transition-colors duration-500 ${openIndex === i ? 'text-[#d4cabe]' : 'text-[#a5907b] group-hover:text-[#d4cabe]'}`}>
                  {faq.q}
                </span>
                <span className={`transition-all duration-500 transform ${openIndex === i ? 'rotate-135' : ''}`}>
                   <svg className={`w-6 h-6 transition-colors ${openIndex === i ? 'text-[#806248]' : 'text-[#806248]/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 pb-12' : 'max-h-0'}`}>
                <p className="text-[#a5907b] leading-loose font-light text-base max-w-3xl">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
