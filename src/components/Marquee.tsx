import { Compass } from 'lucide-react';

export default function Marquee() {
  const words = [
    'Your destiny begins with the right guidance',
    'Love & Relationships',
    'Marriage & Matchmaking',
    'Career Growth & Timing',
    'Financial Stability',
    'Family Harmony',
    'Business Vastu',
    'Health & Wellness Remedies',
  ];

  // Repeat items to ensure seamless loop
  const repeatedItems = [...words, ...words, ...words];

  return (
    <div className="relative w-full py-5 bg-dark-card border-y border-gold border-opacity-15 overflow-hidden z-20">
      {/* Left/Right fading gradient mask */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-dark-pure to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-dark-pure to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex gap-12 items-center animate-marquee">
          {repeatedItems.map((word, idx) => (
            <div key={idx} className="flex items-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold font-cinzel text-sm sm:text-base font-bold uppercase tracking-widest">
              <span>{word}</span>
              <Compass size={14} className="text-gold opacity-60 animate-spin-slow inline-block shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
