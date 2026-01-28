import { useState } from "react";

interface Bubble {
  word: string;
  meaning: string;
  pronunciation: string;
  color: "cyan" | "magenta" | "yellow" | "purple";
}

const bubbles: Bubble[] = [
  { word: "Euphoria", meaning: "Intense happiness", pronunciation: "/juːˈfɔːriə/", color: "magenta" },
  { word: "Crescendo", meaning: "A gradual increase", pronunciation: "/krəˈʃendəʊ/", color: "cyan" },
  { word: "Mellifluous", meaning: "Sweet sounding", pronunciation: "/meˈlɪfluəs/", color: "yellow" },
  { word: "Sonorous", meaning: "Deep, rich sound", pronunciation: "/ˈsɒnərəs/", color: "purple" },
];

const VocabularyBubbles = () => {
  const [activeBubble, setActiveBubble] = useState<number | null>(null);

  const getColorClasses = (color: Bubble["color"], isActive: boolean) => {
    const base = {
      cyan: "bg-primary/20 border-primary/40 hover:bg-primary/30",
      magenta: "bg-secondary/20 border-secondary/40 hover:bg-secondary/30",
      yellow: "bg-accent/20 border-accent/40 hover:bg-accent/30",
      purple: "bg-[hsl(280_100%_60%_/_0.2)] border-[hsl(280_100%_60%_/_0.4)] hover:bg-[hsl(280_100%_60%_/_0.3)]",
    };
    
    const glow = {
      cyan: "shadow-[0_0_25px_hsl(var(--primary)/0.5)]",
      magenta: "shadow-[0_0_25px_hsl(var(--secondary)/0.5)]",
      yellow: "shadow-[0_0_25px_hsl(var(--accent)/0.5)]",
      purple: "shadow-[0_0_25px_hsl(280_100%_60%_/_0.5)]",
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
            className={`vocabulary-bubble px-5 py-2.5 rounded-full border backdrop-blur-sm font-bricolage text-sm font-semibold text-foreground/90 ${getColorClasses(
              bubble.color,
              activeBubble === index
            )}`}
          >
            {bubble.word}
          </div>
          
          {/* Enhanced Tooltip */}
          <div
            className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-3 rounded-2xl bg-card/95 backdrop-blur-xl border border-glass-border text-foreground/90 transition-all duration-300 z-50 ${
              activeBubble === index
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-2 scale-95 pointer-events-none"
            }`}
            style={{ minWidth: "160px" }}
          >
            <p className="font-space text-xs text-muted-foreground mb-1">{bubble.pronunciation}</p>
            <p className="font-outfit text-sm">{bubble.meaning}</p>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-card/95" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VocabularyBubbles;
