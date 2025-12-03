import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Video, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-all">
              <Video className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              VideoAI Pro
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Início
            </Link>
            <Link to="/create" className="text-foreground hover:text-primary transition-colors">
              Criar Vídeos
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">
              Galeria
            </Link>
            <Button className="bg-gradient-accent hover:shadow-accent-glow transition-all">
              Começar Grátis
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link
              to="/create"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Criar Vídeos
            </Link>
            <Link
              to="/gallery"
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Galeria
            </Link>
            <Button className="w-full bg-gradient-accent">
              Começar Grátis
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
