import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ForestBackground, GlassCard, Button } from "@/components/ui";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <ForestBackground>
      <main className="flex min-h-screen items-center justify-center px-4">
        <GlassCard className="text-center max-w-md">
          <h1 className="mb-4 text-4xl font-bold text-text-primary">404</h1>
          <p className="mb-6 text-xl text-text-secondary">Seite nicht gefunden</p>
          <a href="/"><Button variant="primary">Zur Startseite</Button></a>
        </GlassCard>
      </main>
    </ForestBackground>
  );
};

export default NotFound;
