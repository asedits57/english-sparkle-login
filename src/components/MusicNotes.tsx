import { useEffect, useState } from "react";

interface Note {
  id: number;
  content: string;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const musicSymbols = ["♪", "♫", "♬", "♩", "𝄞", "𝄢"];
const englishWords = ["rhythm", "melody", "harmony", "lyrics", "tempo", "verse", "chorus", "beat"];

const MusicNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const colors = [
      "hsl(var(--primary))",
      "hsl(var(--secondary))",
      "hsl(var(--accent))",
    ];

    const generated: Note[] = [];
    
    // Music symbols
    for (let i = 0; i < 15; i++) {
      generated.push({
        id: i,
        content: musicSymbols[Math.floor(Math.random() * musicSymbols.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1.5 + Math.random() * 2,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // English words
    for (let i = 15; i < 25; i++) {
      generated.push({
        id: i,
        content: englishWords[Math.floor(Math.random() * englishWords.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 0.7 + Math.random() * 0.4,
        duration: 12 + Math.random() * 8,
        delay: Math.random() * 5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setNotes(generated);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {notes.map((note) => (
        <div
          key={note.id}
          className="absolute font-syne font-bold select-none"
          style={{
            left: `${note.x}%`,
            top: `${note.y}%`,
            fontSize: `${note.size}rem`,
            color: note.color,
            opacity: 0.2,
            animation: `float ${note.duration}s ease-in-out infinite, wave ${note.duration / 2}s ease-in-out infinite`,
            animationDelay: `${note.delay}s`,
            textShadow: `0 0 20px ${note.color}`,
          }}
        >
          {note.content}
        </div>
      ))}

      {/* Floating quotes */}
      <div 
        className="absolute left-[3%] top-[15%] text-muted-foreground/15 text-sm font-bricolage italic max-w-[220px] animate-float-slow"
        style={{ animationDelay: "1s" }}
      >
        "Music gives a soul to the universe, wings to the mind."
      </div>
      <div 
        className="absolute right-[5%] bottom-[20%] text-muted-foreground/15 text-sm font-bricolage italic max-w-[200px] animate-float-slow"
        style={{ animationDelay: "3s" }}
      >
        "Where words fail, music speaks."
      </div>
      <div 
        className="absolute left-[8%] bottom-[30%] text-muted-foreground/15 text-sm font-bricolage italic max-w-[180px] animate-float-slow"
        style={{ animationDelay: "5s" }}
      >
        "Learn the melody of language."
      </div>
    </div>
  );
};

export default MusicNotes;
