import { useState, useEffect } from "react";
import { Music2, Sparkles, Headphones, Mic } from "lucide-react";

const tips = [
  { type: "Melody tip", content: '"Rhythm" has no traditional vowels - yet sounds beautiful!', icon: Music2 },
  { type: "Word of the day", content: "Serenade — a piece of music sung or played at night", icon: Headphones },
  { type: "Harmony hint", content: "Crescendo: gradually getting louder, like your confidence!", icon: Mic },
  { type: "Fun fact", content: "The word 'music' comes from the Greek 'mousikē'", icon: Sparkles },
  { type: "Vocabulary", content: "Mellifluous — sweet and musical, pleasant to hear", icon: Music2 },
];

const EnglishTip = () => {
  const [currentTip, setCurrentTip] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentTip((prev) => (prev + 1) % tips.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const tip = tips[currentTip];
  const Icon = tip.icon;

  return (
    <div className="mt-8 p-5 rounded-2xl bg-gradient-to-br from-muted/30 via-muted/20 to-primary/10 border border-glass-border backdrop-blur-sm relative overflow-hidden group">
      {/* Animated background glow */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: "radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.1), transparent 70%)",
        }}
      />
      
      <div
        className={`relative transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <Icon size={16} className="text-primary" />
          <span className="text-xs font-space font-semibold uppercase tracking-widest text-gradient">
            {tip.type}
          </span>
        </div>
        <p className="font-bricolage text-sm text-foreground/90 leading-relaxed">{tip.content}</p>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {tips.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentTip 
                ? "bg-primary w-4" 
                : "bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EnglishTip;
