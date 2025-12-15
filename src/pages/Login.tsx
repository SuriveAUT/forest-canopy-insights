import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ForestBackground from "@/components/layout/ForestBackground";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/ForestButton";
import FormInput from "@/components/forms/FormInput";
import FormCheckbox from "@/components/forms/FormCheckbox";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to home on submit
    navigate("/");
  };

  return (
    <ForestBackground>
      {/* Header */}
      <header className="glass-header">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-text-on-dark font-bold text-xl">Baumkataster</h1>
            <span className="text-text-on-dark/80">Hallo Max Mustermann</span>
          </div>
        </div>
      </header>

      {/* Login Form */}
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <GlassCard className="w-full max-w-md animate-slide-up">
          <h2 className="text-3xl font-bold text-text-primary mb-8">Einloggen</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              id="username"
              label="Benutzername"
              type="text"
              placeholder="max.mustermann"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            
            <FormInput
              id="password"
              label="Passwort"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            
            <div className="flex items-center justify-between">
              <FormCheckbox
                id="rememberMe"
                label="Angemeldet bleiben"
                checked={formData.rememberMe}
                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
              />
              
              <button type="button" className="text-warm-brown hover:text-warm-brown-hover font-medium text-sm transition-colors">
                Passwort vergessen?
              </button>
            </div>
            
            <div className="flex gap-4 pt-2">
              <Button type="button" variant="outline" className="flex-1">
                Abbrechen
              </Button>
              <Button type="submit" variant="secondary" className="flex-1">
                Anmelden
              </Button>
            </div>
          </form>
          
          <p className="text-center text-text-secondary mt-6">
            Noch kein Konto?{" "}
            <Link to="/" className="text-text-primary font-semibold hover:text-forest-green transition-colors">
              Zur Startseite
            </Link>
          </p>
        </GlassCard>
      </main>
    </ForestBackground>
  );
};

export default Login;
