import { useState, useEffect } from "react";

const words = ["Harmonize", "Resonate", "Compose", "Express", "Flourish"];

const AnimatedWords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 400);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-1 mt-16 mb-4">
      <span className="text-muted-foreground font-space text-sm tracking-wider uppercase">Your journey to</span>
      <div className="relative h-12 flex items-center justify-center overflow-hidden">
        <span
          className={`font-syne text-3xl md:text-4xl font-bold text-shimmer transition-all duration-400 ${
            isAnimating ? "opacity-0 translate-y-4 scale-95" : "opacity-100 translate-y-0 scale-100"
          }`}
        >
          {words[currentIndex]}
        </span>
      </div>
    </div>
  );
};

export default AnimatedWords;
