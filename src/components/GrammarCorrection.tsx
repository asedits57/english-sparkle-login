import { useState } from "react";

const GrammarCorrection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative mb-6 p-4 rounded-2xl bg-muted/30 backdrop-blur-sm border border-glass-border cursor-pointer transition-all duration-500 hover:bg-muted/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className={`transition-all duration-300 ${isHovered ? "text-primary" : "text-muted-foreground"}`}>
          {isHovered ? "✔" : "❌"}
        </span>
        <span className="text-xs font-nunito text-muted-foreground uppercase tracking-wider">
          Hover to correct
        </span>
      </div>
      
      <p className="font-nunito text-foreground/90 leading-relaxed">
        <span className={`transition-all duration-300 ${!isHovered ? "text-secondary line-through decoration-secondary/50" : "text-primary"}`}>
          {isHovered ? "She doesn't" : "She don't"}
        </span>
        {" "}know how to speak English{" "}
        <span className={`transition-all duration-300 ${!isHovered ? "text-secondary line-through decoration-secondary/50" : "text-primary"}`}>
          {isHovered ? "well" : "good"}
        </span>
        .
      </p>
      
      <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full transition-all duration-300 ${isHovered ? "bg-primary animate-pulse-glow" : "bg-secondary"}`} />
    </div>
  );
};

export default GrammarCorrection;
