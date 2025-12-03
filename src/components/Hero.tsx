import { Button } from "./ui/button";
import { Sparkles, Video, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">Geração de Vídeos com IA</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Crie Vídeos Incríveis com{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">
            Inteligência Artificial
          </span>
        </h1>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transforme suas ideias em vídeos profissionais instantaneamente. 
          Crie múltiplos vídeos simultaneamente e monetize sua criatividade.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/create">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8">
              <Video className="w-5 h-5 mr-2" />
              Começar Agora
            </Button>
          </Link>
          <Link to="/gallery">
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 text-lg px-8">
              Ver Exemplos
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Criação em Batch</h3>
            <p className="text-sm text-muted-foreground">
              Gere múltiplos vídeos de uma só vez e economize tempo
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mb-4">
              <Video className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">IA Avançada</h3>
            <p className="text-sm text-muted-foreground">
              Tecnologia de ponta para resultados profissionais
            </p>
          </div>
          
          <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Monetize</h3>
            <p className="text-sm text-muted-foreground">
              Ofereça o serviço para seus clientes e gere renda
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
