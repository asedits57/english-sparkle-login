import { BookOpen } from "lucide-react";
import FloatingLetters from "@/components/FloatingLetters";
import AnimatedWords from "@/components/AnimatedWords";
import VocabularyBubbles from "@/components/VocabularyBubbles";
import GrammarCorrection from "@/components/GrammarCorrection";
import LoginForm from "@/components/LoginForm";
import SocialLogins from "@/components/SocialLogins";
import EnglishTip from "@/components/EnglishTip";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Background */}
      <FloatingLetters />

      {/* Ambient Glow Effects */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md animate-fade-in-up">
        <div className="glass-card neon-border p-8 md:p-10">
          {/* Logo & Title */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 mb-4 animate-bounce-soft">
              <BookOpen size={32} className="text-primary" />
            </div>
            <h1 className="font-fredoka text-3xl font-bold text-foreground mb-2">
              <span className="text-gradient">LinguaLeap</span>
            </h1>
            <AnimatedWords />
          </div>

          {/* Vocabulary Bubbles */}
          <VocabularyBubbles />

          {/* Grammar Correction Demo */}
          <GrammarCorrection />

          {/* Login Form */}
          <LoginForm />

          {/* Social Logins */}
          <SocialLogins />

          {/* English Tip */}
          <EnglishTip />
        </div>

        {/* Footer Fun Fact */}
        <p className="text-center mt-6 font-nunito text-xs text-muted-foreground/60">
          🎉 Fun fact: "Rhythm" is the longest word without a vowel!
        </p>
      </div>
    </div>
  );
};

export default Index;
