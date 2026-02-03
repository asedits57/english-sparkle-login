import { useState, useEffect } from "react";
import { Lightbulb, Sparkles } from "lucide-react";

const tips = [
  { type: "Did you know?", content: '"OK" is the most spoken word on the planet!' },
  { type: "Word of the day", content: "Petrichor — the pleasant smell after rain" },
  { type: "Grammar tip", content: "It's vs Its: It's = it is, Its = possession" },
  { type: "Fun fact", content: "English adds a new word every 2 hours!" },
  { type: "Vocabulary", content: "Sonder — realizing everyone has a complex life" },
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

  return (
    <div className="mt-8 p-4 rounded-2xl bg-muted/20 border border-glass-border backdrop-blur-sm">
      <div
        className={`transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          {tip.type === "Word of the day" ? (
            <Sparkles size={16} className="text-accent" />
          ) : (
            <Lightbulb size={16} className="text-primary" />
          )}
          <span className="text-xs font-nunito font-bold uppercase tracking-wider text-muted-foreground">
            {tip.type}
          </span>
        </div>
        <p className="font-nunito text-sm text-foreground/80">{tip.content}</p>
      </div>
    </div>
  );
};

export default EnglishTip;
