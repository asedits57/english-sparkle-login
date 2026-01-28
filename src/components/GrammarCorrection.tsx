import { useState } from "react";
import { Wand2 } from "lucide-react";

const GrammarCorrection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative mb-6 p-5 rounded-2xl bg-gradient-to-br from-muted/30 via-muted/20 to-muted/30 backdrop-blur-sm border border-glass-border cursor-pointer transition-all duration-500 hover:border-primary/40 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 mb-3">
        <Wand2 
          size={16} 
          className={`transition-all duration-500 ${isHovered ? "text-primary rotate-12 scale-110" : "text-muted-foreground"}`} 
        />
        <span className="text-xs font-space text-muted-foreground uppercase tracking-widest">
          {isHovered ? "✨ Corrected!" : "Hover to harmonize"}
        </span>
      </div>
      
      <p className="font-bricolage text-base text-foreground/90 leading-relaxed">
        <span className={`inline-block transition-all duration-500 ${!isHovered ? "text-secondary line-through decoration-secondary/50 decoration-2" : "text-primary"}`}>
          {isHovered ? "The symphony" : "The symphonies"}
        </span>
        {" "}of language{" "}
        <span className={`inline-block transition-all duration-500 ${!isHovered ? "text-secondary line-through decoration-secondary/50 decoration-2" : "text-primary"}`}>
          {isHovered ? "resonates" : "resonate"}
        </span>
        {" "}within us.
      </p>
      
      <div 
        className={`absolute -top-1 -right-1 w-4 h-4 rounded-full transition-all duration-500 ${
          isHovered 
            ? "bg-primary scale-125" 
            : "bg-secondary scale-100"
        }`}
        style={{
          boxShadow: isHovered ? "0 0 20px hsl(var(--primary))" : "none",
        }}
      />
      
      {/* Sparkle effect on hover */}
      <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-sparkle"
            style={{
              top: `${20 + i * 25}%`,
              right: `${10 + i * 15}%`,
              animationDelay: `${i * 0.2}s`,
              boxShadow: "0 0 6px hsl(var(--primary))",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GrammarCorrection;
