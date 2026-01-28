import { Music, Sparkles } from "lucide-react";

const MelodyLogo = () => {
  return (
    <div className="relative flex items-center justify-center mb-8">
      {/* Orbiting particles */}
      <div className="absolute w-32 h-32">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: `hsl(${180 + i * 30} 100% 60%)`,
              boxShadow: `0 0 10px hsl(${180 + i * 30} 100% 60%)`,
              animation: `orbit ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
              top: "50%",
              left: "50%",
              marginTop: "-4px",
              marginLeft: "-4px",
            }}
          />
        ))}
      </div>

      {/* Main logo container */}
      <div className="relative">
        {/* Glow ring */}
        <div 
          className="absolute inset-0 rounded-3xl animate-morph"
          style={{
            background: "linear-gradient(135deg, hsl(280 100% 60% / 0.4), hsl(320 100% 60% / 0.4), hsl(180 100% 60% / 0.4))",
            filter: "blur(20px)",
            transform: "scale(1.5)",
          }}
        />
        
        {/* Logo box */}
        <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 border border-glass-border backdrop-blur-xl flex items-center justify-center group cursor-pointer hover:scale-110 transition-transform duration-500">
          <Music 
            size={36} 
            className="text-primary group-hover:text-secondary transition-colors duration-500" 
            style={{ filter: "drop-shadow(0 0 10px currentColor)" }}
          />
          
          {/* Sparkles */}
          <Sparkles 
            size={16} 
            className="absolute -top-1 -right-1 text-accent animate-sparkle"
            style={{ filter: "drop-shadow(0 0 5px hsl(var(--accent)))" }}
          />
          <Sparkles 
            size={12} 
            className="absolute -bottom-1 -left-1 text-secondary animate-sparkle"
            style={{ animationDelay: "0.5s", filter: "drop-shadow(0 0 5px hsl(var(--secondary)))" }}
          />
        </div>
      </div>

      {/* Title */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <h1 className="font-syne text-4xl md:text-5xl font-bold tracking-tight">
          <span className="text-gradient-melody">Melody</span>
          <span className="text-muted-foreground mx-1">·</span>
          <span className="text-gradient-verse">Verse</span>
        </h1>
        <p className="text-center mt-2 font-space text-sm text-muted-foreground tracking-widest uppercase">
          Where Words Come Alive
        </p>
      </div>
    </div>
  );
};

export default MelodyLogo;
