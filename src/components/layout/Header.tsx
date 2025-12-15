import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  userName?: string;
}

const Header = ({ userName = "Max Mustermann" }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="glass-header sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-text-on-dark font-semibold text-lg hover:opacity-80 transition-opacity">
            Hallo {userName}
          </Link>
          
          <div className="relative">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="px-5 py-2 bg-white/[0.12] hover:bg-white/[0.18] text-text-on-dark rounded-lg border border-white/[0.22] transition-all font-medium"
            >
              Menü
            </button>
            
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 glass-card py-2 animate-fade-in">
                <Link 
                  to="/" 
                  className={`block px-4 py-2 text-text-primary hover:bg-neutral-200 transition-colors ${location.pathname === '/' ? 'bg-neutral-200' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Startseite
                </Link>
                <Link 
                  to="/kontrollblatt" 
                  className={`block px-4 py-2 text-text-primary hover:bg-neutral-200 transition-colors ${location.pathname === '/kontrollblatt' ? 'bg-neutral-200' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Kontrollblatt
                </Link>
                <Link 
                  to="/stammdaten" 
                  className={`block px-4 py-2 text-text-primary hover:bg-neutral-200 transition-colors ${location.pathname === '/stammdaten' ? 'bg-neutral-200' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  Stammdatenerfassung
                </Link>
                <hr className="my-2 border-black/[0.06]" />
                <Link 
                  to="/login" 
                  className="block px-4 py-2 text-text-primary hover:bg-neutral-200 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  Abmelden
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
