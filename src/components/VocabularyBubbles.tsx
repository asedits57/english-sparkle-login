import { useState } from "react";

interface Bubble {
  word: string;
  meaning: string;
  color: "cyan" | "magenta" | "yellow";
}

const bubbles: Bubble[] = [
  { word: "Serendipity", meaning: "Finding something good by chance", color: "cyan" },
  { word: "Ephemeral", meaning: "Lasting a very short time", color: "magenta" },
  { word: "Luminous", meaning: "Bright and shining", color: "yellow" },
  { word: "Eloquent", meaning: "Fluent and expressive", color: "cyan" },
];

const VocabularyBubbles = () => {
  const [activeBubble, setActiveBubble] = useState<number | null>(null);

  const getColorClasses = (color: "cyan" | "magenta" | "yellow", isActive: boolean) => {
    const base = {
      cyan: "bg-primary/20 border-primary/40 hover:bg-primary/30",
      magenta: "bg-secondary/20 border-secondary/40 hover:bg-secondary/30",
      yellow: "bg-accent/20 border-accent/40 hover:bg-accent/30",
    };
    
    const glow = {
      cyan: "shadow-[0_0_20px_hsl(var(--primary)/0.4)]",
      magenta: "shadow-[0_0_20px_hsl(var(--secondary)/0.4)]",
      yellow: "shadow-[0_0_20px_hsl(var(--accent)/0.4)]",
    };

    return `${base[color]} ${isActive ? glow[color] : ""}`;
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-6">
      {bubbles.map((bubble, index) => (
        <div
          key={bubble.word}
          className="relative"
          onMouseEnter={() => setActiveBubble(index)}
          onMouseLeave={() => setActiveBubble(null)}
        >
          <div
            className={`vocabulary-bubble px-4 py-2 rounded-full border backdrop-blur-sm font-nunito text-sm font-semibold text-foreground/90 ${getColorClasses(
              bubble.color,
              activeBubble === index
            )}`}
          >
            {bubble.word}
          </div>
          
          {/* Tooltip */}
          <div
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg bg-card/95 backdrop-blur-sm border border-glass-border text-xs text-foreground/80 whitespace-nowrap transition-all duration-200 ${
              activeBubble === index
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            {bubble.meaning}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-card/95" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VocabularyBubbles;
