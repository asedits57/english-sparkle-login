import { useState, useEffect } from "react";

const words = ["Read", "Speak", "Learn", "Correct", "Understand"];

const AnimatedWords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 mb-2">
      <span className="text-foreground/80 font-nunito text-lg">Start to</span>
      <span
        className={`font-fredoka text-2xl font-bold text-gradient transition-all duration-300 ${
          isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
      >
        {words[currentIndex]}
      </span>
    </div>
  );
};

export default AnimatedWords;
