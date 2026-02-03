import { useState } from "react";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const placeholders = {
    email: ["Enter your email", "your@email.com", "student@learn.com"],
    password: ["Enter password", "••••••••", "Your secret key"],
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
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
            focusedInput === "email" ? "text-primary" : "text-muted-foreground"
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
          className="glow-input w-full pl-12 pr-4 py-4 rounded-2xl bg-input/50 border border-glass-border text-foreground placeholder:text-muted-foreground/50 font-nunito focus:outline-none focus:border-primary transition-all duration-300"
        />
        <div
          className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 ${
            focusedInput === "email" ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.1), transparent)",
          }}
        />
      </div>

      {/* Password Input */}
      <div className="relative group">
        <div
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
            focusedInput === "password" ? "text-primary" : "text-muted-foreground"
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
          className="glow-input w-full pl-12 pr-12 py-4 rounded-2xl bg-input/50 border border-glass-border text-foreground placeholder:text-muted-foreground/50 font-nunito focus:outline-none focus:border-primary transition-all duration-300"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Forgot Password */}
      <div className="text-right">
        <a
          href="#"
          className="relative inline-block font-nunito text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
        >
          Forgot Password?
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="btn-bounce w-full py-4 rounded-2xl font-fredoka font-bold text-lg text-primary-foreground relative overflow-hidden group"
        style={{
          background: "var(--gradient-primary)",
        }}
      >
        <span className="relative z-10">Start Learning</span>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary-glow)), hsl(var(--primary)))",
          }}
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-shimmer"
          style={{
            background: "linear-gradient(90deg, transparent, hsl(0 0% 100% / 0.2), transparent)",
            backgroundSize: "200% 100%",
          }}
        />
      </button>

      {/* Sign Up Link */}
      <p className="text-center font-nunito text-muted-foreground">
        New to English?{" "}
        <a
          href="#"
          className="relative inline-block text-primary hover:text-primary-glow transition-colors duration-300 font-semibold group"
        >
          Sign Up
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
