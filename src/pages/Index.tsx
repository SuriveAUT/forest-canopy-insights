import { Link } from "react-router-dom";
import { ForestBackground, Header, GlassCard } from "@/components/ui";

const Index = () => (
  <ForestBackground>
    <Header />
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-text-on-dark mb-12 text-center animate-fade-in">
        Baumkataster Marchfeldkanal
      </h1>
      
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-3xl">
        <Link to="/kontrollblatt" className="flex-1 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <GlassCard variant="dark" className="h-full hover:bg-white/[0.12] transition-all duration-300 cursor-pointer group">
            <h2 className="text-xl md:text-2xl font-bold text-text-on-dark mb-2 group-hover:text-forest-green transition-colors">Zum Kontrollblatt</h2>
            <p className="text-text-on-dark/80 text-sm md:text-base">Kontrollblatt öffnen und Einträge prüfen</p>
          </GlassCard>
        </Link>
        
        <Link to="/stammdaten" className="flex-1 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <GlassCard variant="dark" className="h-full hover:bg-white/[0.12] transition-all duration-300 cursor-pointer group">
            <h2 className="text-xl md:text-2xl font-bold text-text-on-dark mb-2 group-hover:text-forest-green transition-colors">Stammdatenerfassung</h2>
            <p className="text-text-on-dark/80 text-sm md:text-base">Neue Stammdaten erfassen oder bearbeiten</p>
          </GlassCard>
        </Link>
      </div>
    </main>
  </ForestBackground>
);

export default Index;
