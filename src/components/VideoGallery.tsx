import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Download, Play } from "lucide-react";

interface Video {
  id: string;
  prompt: string;
  thumbnail: string;
  duration: number;
  createdAt: string;
}

// Dados de exemplo
const sampleVideos: Video[] = [
  {
    id: "1",
    prompt: "Um pôr do sol sobre montanhas com nuvens em movimento",
    thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",
    duration: 5,
    createdAt: "2024-01-20"
  },
  {
    id: "2",
    prompt: "Cidade futurista com carros voadores e arranha-céus iluminados",
    thumbnail: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=450&fit=crop",
    duration: 8,
    createdAt: "2024-01-19"
  },
  {
    id: "3",
    prompt: "Oceano calmo com ondas suaves e céu estrelado",
    thumbnail: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=450&fit=crop",
    duration: 10,
    createdAt: "2024-01-18"
  }
];

export const VideoGallery = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">
          Galeria de <span className="bg-gradient-hero bg-clip-text text-transparent">Vídeos</span>
        </h2>
        <p className="text-muted-foreground">
          Explore os vídeos criados e gerencie suas criações
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleVideos.map((video) => (
          <Card key={video.id} className="overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={video.thumbnail} 
                alt={video.prompt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button size="lg" className="bg-gradient-primary">
                  <Play className="w-5 h-5 mr-2" />
                  Reproduzir
                </Button>
              </div>
              <Badge className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm">
                {video.duration}s
              </Badge>
            </div>
            
            <div className="p-4 space-y-3">
              <p className="text-sm line-clamp-2 text-muted-foreground">
                {video.prompt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {new Date(video.createdAt).toLocaleDateString('pt-BR')}
                </span>
                <Button variant="outline" size="sm" className="border-primary/30">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
