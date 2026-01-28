import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const placeholders = {
    email: ["your@melody.com", "learner@verse.com", "artist@music.com"],
    password: ["••••••••••", "Your secret melody", "Compose your key"],
  };

  const [emailPlaceholder, setEmailPlaceholder] = useState(0);
  const [passwordPlaceholder, setPasswordPlaceholder] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Email Input */}
      <div className="relative group">
        <div
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-10 ${
            focusedInput === "email" ? "text-primary scale-110" : "text-muted-foreground"
          }`}
        >
          <Mail size={20} />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => {
            setFocusedInput("email");
            setEmailPlaceholder((prev) => (prev + 1) % placeholders.email.length);
          }}
          onBlur={() => setFocusedInput(null)}
          placeholder={placeholders.email[emailPlaceholder]}
          className="glow-input w-full pl-12 pr-4 py-4 rounded-2xl bg-input/50 border border-glass-border text-foreground placeholder:text-muted-foreground/50 font-outfit focus:outline-none focus:border-primary transition-all duration-300"
        />
        <div
          className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${
            focusedInput === "email" ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(90deg, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.1), hsl(var(--primary) / 0.1))",
            backgroundSize: "200% 100%",
            animation: focusedInput === "email" ? "shimmer 2s linear infinite" : "none",
          }}
        />
      </div>

      {/* Password Input */}
      <div className="relative group">
        <div
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 z-10 ${
            focusedInput === "password" ? "text-secondary scale-110" : "text-muted-foreground"
          }`}
        >
          <Lock size={20} />
        </div>
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => {
            setFocusedInput("password");
            setPasswordPlaceholder((prev) => (prev + 1) % placeholders.password.length);
          }}
          onBlur={() => setFocusedInput(null)}
          placeholder={placeholders.password[passwordPlaceholder]}
          className="glow-input w-full pl-12 pr-12 py-4 rounded-2xl bg-input/50 border border-glass-border text-foreground placeholder:text-muted-foreground/50 font-outfit focus:outline-none focus:border-secondary transition-all duration-300"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-secondary transition-all duration-300 hover:scale-110 z-10"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
        <div
          className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${
            focusedInput === "password" ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(90deg, hsl(var(--secondary) / 0.1), hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.1))",
            backgroundSize: "200% 100%",
            animation: focusedInput === "password" ? "shimmer 2s linear infinite" : "none",
          }}
        />
      </div>

      {/* Forgot Password */}
      <div className="text-right">
        <a
          href="#"
          className="relative inline-block font-space text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
        >
          Forgot your melody?
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
        </a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="btn-bounce w-full py-4 rounded-2xl font-syne font-bold text-lg text-primary-foreground relative overflow-hidden group"
        style={{
          background: "linear-gradient(135deg, hsl(280 100% 60%), hsl(320 100% 60%), hsl(350 100% 60%))",
        }}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          Begin Your Verse
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
        </span>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, hsl(320 100% 65%), hsl(280 100% 65%), hsl(240 100% 70%))",
          }}
        />
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
          style={{
            background: "linear-gradient(90deg, transparent 0%, hsl(0 0% 100% / 0.3) 50%, transparent 100%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s linear infinite",
          }}
        />
      </button>

      {/* Sign Up Link */}
      <p className="text-center font-outfit text-muted-foreground">
        New to the melody?{" "}
        <a
          href="#"
          className="relative inline-block text-gradient-verse font-semibold group hover:opacity-80 transition-opacity duration-300"
        >
          Join the Verse
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
