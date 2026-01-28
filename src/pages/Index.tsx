import MelodyLogo from "@/components/MelodyLogo";
import ParticleField from "@/components/ParticleField";
import MusicNotes from "@/components/MusicNotes";
import AnimatedWords from "@/components/AnimatedWords";
import VocabularyBubbles from "@/components/VocabularyBubbles";
import GrammarCorrection from "@/components/GrammarCorrection";
import LoginForm from "@/components/LoginForm";
import SocialLogins from "@/components/SocialLogins";
import EnglishTip from "@/components/EnglishTip";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Layers */}
      <ParticleField />
      <MusicNotes />

      {/* Ambient Glow Effects */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-[hsl(280_100%_50%_/_0.15)] rounded-full blur-[150px] pointer-events-none animate-morph" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-[hsl(320_100%_50%_/_0.12)] rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(180_100%_50%_/_0.08)] rounded-full blur-[180px] pointer-events-none" />
      <div className="fixed top-1/4 right-1/4 w-[300px] h-[300px] bg-[hsl(50_100%_50%_/_0.1)] rounded-full blur-[100px] pointer-events-none animate-float-slow" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md animate-fade-in-up">
        <div className="glass-card neon-border p-8 md:p-10">
          {/* Logo & Title */}
          <div className="text-center mb-6">
            <MelodyLogo />
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
        <div className="text-center mt-6">
          <p className="font-space text-xs text-muted-foreground/60 tracking-wider">
            ♪ Where every word becomes a <span className="text-gradient">melody</span> ♪
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
