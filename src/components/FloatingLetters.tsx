import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  content: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: "cyan" | "magenta" | "yellow";
}

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const symbols = ["?", "!", ".", ",", "'", '"', ";", ":"];
const words = ["Hello", "Read", "Speak", "Learn", "Write", "Think", "Grow"];

const FloatingLetters = () => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const generatedElements: FloatingElement[] = [];
    
    // Generate floating letters
    for (let i = 0; i < 20; i++) {
      const isSymbol = Math.random() > 0.7;
      const isWord = Math.random() > 0.85;
      
      let content: string;
      if (isWord) {
        content = words[Math.floor(Math.random() * words.length)];
      } else if (isSymbol) {
        content = symbols[Math.floor(Math.random() * symbols.length)];
      } else {
        content = letters[Math.floor(Math.random() * letters.length)];
      }

      generatedElements.push({
        id: i,
        content,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: isWord ? 0.8 + Math.random() * 0.4 : 1 + Math.random() * 1.5,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 5,
        color: ["cyan", "magenta", "yellow"][Math.floor(Math.random() * 3)] as "cyan" | "magenta" | "yellow",
      });
    }

    setElements(generatedElements);
  }, []);

  const getColorClass = (color: "cyan" | "magenta" | "yellow") => {
    switch (color) {
      case "cyan":
        return "text-primary/30";
      case "magenta":
        return "text-secondary/30";
      case "yellow":
        return "text-accent/30";
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {elements.map((el) => (
        <div
          key={el.id}
          className={`absolute font-fredoka font-bold ${getColorClass(el.color)} select-none`}
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            fontSize: `${el.size}rem`,
            animation: `float ${el.duration}s ease-in-out infinite`,
            animationDelay: `${el.delay}s`,
            opacity: 0.15 + Math.random() * 0.15,
          }}
        >
          {el.content}
        </div>
      ))}
      
      {/* Animated quotes */}
      <div 
        className="absolute left-[5%] top-[20%] text-muted-foreground/20 text-sm font-nunito italic max-w-[200px] animate-float-slow"
        style={{ animationDelay: "1s" }}
      >
        "The limits of my language are the limits of my world."
      </div>
      <div 
        className="absolute right-[8%] bottom-[25%] text-muted-foreground/20 text-sm font-nunito italic max-w-[180px] animate-float-slow"
        style={{ animationDelay: "3s" }}
      >
        "One language sets you in a corridor for life."
      </div>
    </div>
  );
};

export default FloatingLetters;
