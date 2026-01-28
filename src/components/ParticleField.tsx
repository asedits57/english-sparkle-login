import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  type: "dot" | "ring" | "star";
}

const ParticleField = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(180 100% 60%)",
      "hsl(280 100% 65%)",
      "hsl(320 100% 60%)",
      "hsl(50 100% 60%)",
      "hsl(200 100% 65%)",
    ];

    const types: ("dot" | "ring" | "star")[] = ["dot", "ring", "star"];

    const generated: Particle[] = [];
    for (let i = 0; i < 40; i++) {
      generated.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: 10 + Math.random() * 20,
        delay: Math.random() * 10,
        type: types[Math.floor(Math.random() * types.length)],
      });
    }
    setParticles(generated);
  }, []);

  const renderParticle = (particle: Particle) => {
    const baseStyle = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      animation: `float ${particle.duration}s ease-in-out infinite`,
      animationDelay: `${particle.delay}s`,
    };

    switch (particle.type) {
      case "ring":
        return (
          <div
            key={particle.id}
            className="absolute rounded-full border-2"
            style={{
              ...baseStyle,
              width: `${particle.size * 2}px`,
              height: `${particle.size * 2}px`,
              borderColor: particle.color,
              boxShadow: `0 0 ${particle.size}px ${particle.color}`,
              opacity: 0.4,
            }}
          />
        );
      case "star":
        return (
          <div
            key={particle.id}
            className="absolute"
            style={{
              ...baseStyle,
              fontSize: `${particle.size * 2}px`,
              color: particle.color,
              textShadow: `0 0 ${particle.size}px ${particle.color}`,
              opacity: 0.5,
            }}
          >
            ✦
          </div>
        );
      default:
        return (
          <div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              ...baseStyle,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              opacity: 0.5,
            }}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map(renderParticle)}
    </div>
  );
};

export default ParticleField;
