
import React from 'react';

interface TickerProps {
  text?: string;
  light?: boolean;
}

const DiscountTicker: React.FC<TickerProps> = ({ 
  text = "✦ VAGAS DISPONÍVEIS ✦ 100K ✦ GESTÃO PREMIUM ✦ LUCRO REAL ✦",
  light = false 
}) => {
  return (
    <div className={`${light ? 'bg-[#e9e4df] border-y border-black/5' : 'bg-[#1a120b] border-y border-white/5'} overflow-hidden py-8 relative`}>
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center gap-16 px-12">
            <span className={`${light ? 'text-[#9b6d4b]' : 'text-[#c8a178]'} font-serif text-3xl opacity-50`}>✦</span>
            <span className={`${light ? 'text-[#1a120b]' : 'text-[#f2f0ed]'} font-bold tracking-[0.4em] uppercase text-[10px] lg:text-xs`}>
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountTicker;
