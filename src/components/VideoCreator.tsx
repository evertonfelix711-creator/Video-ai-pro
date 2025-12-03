import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import { Plus, Trash2, Wand2 } from "lucide-react";
import { toast } from "sonner";

interface VideoPrompt {
  id: string;
  prompt: string;
  duration: number;
}

export const VideoCreator = () => {
  const [prompts, setPrompts] = useState<VideoPrompt[]>([
    { id: "1", prompt: "", duration: 5 }
  ]);
  const [isGenerating, setIsGenerating] = useState(false);

  const addPrompt = () => {
    setPrompts([...prompts, { id: Date.now().toString(), prompt: "", duration: 5 }]);
  };

  const removePrompt = (id: string) => {
    if (prompts.length > 1) {
      setPrompts(prompts.filter(p => p.id !== id));
    }
  };

  const updatePrompt = (id: string, field: keyof VideoPrompt, value: string | number) => {
    setPrompts(prompts.map(p => p.id === id ? { ...p, [field]: value } : p));
  };

  const generateVideos = async () => {
    const validPrompts = prompts.filter(p => p.prompt.trim());
    
    if (validPrompts.length === 0) {
      toast.error("Adicione pelo menos um prompt para gerar vídeos");
      return;
    }

    setIsGenerating(true);
    
    // Simulação - aqui você integraria com uma API de geração de vídeos
    toast.success(`Gerando ${validPrompts.length} vídeo(s)...`);
    
    setTimeout(() => {
      setIsGenerating(false);
      toast.success("Vídeos gerados com sucesso!");
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="text-center space-y-4 mb-8">
        <h2 className="text-4xl font-bold">
          Crie Seus <span className="bg-gradient-hero bg-clip-text text-transparent">Vídeos</span>
        </h2>
        <p className="text-muted-foreground">
          Adicione múltiplos prompts e gere vários vídeos de uma só vez
        </p>
      </div>

      <div className="space-y-4">
        {prompts.map((prompt, index) => (
          <Card key={prompt.id} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                {index + 1}
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <Label htmlFor={`prompt-${prompt.id}`}>Descrição do Vídeo</Label>
                  <Textarea
                    id={`prompt-${prompt.id}`}
                    placeholder="Descreva o vídeo que você quer criar..."
                    value={prompt.prompt}
                    onChange={(e) => updatePrompt(prompt.id, "prompt", e.target.value)}
                    className="mt-2 min-h-[100px] bg-background/50"
                  />
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <Label htmlFor={`duration-${prompt.id}`}>Duração (segundos)</Label>
                    <Input
                      id={`duration-${prompt.id}`}
                      type="number"
                      min="3"
                      max="30"
                      value={prompt.duration}
                      onChange={(e) => updatePrompt(prompt.id, "duration", parseInt(e.target.value))}
                      className="mt-2 bg-background/50"
                    />
                  </div>
                  
                  {prompts.length > 1 && (
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removePrompt(prompt.id)}
                      className="mt-8 border-destructive/30 hover:bg-destructive/10"
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="outline"
          onClick={addPrompt}
          className="flex-1 border-primary/30 hover:bg-primary/10"
        >
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Outro Vídeo
        </Button>
        
        <Button
          onClick={generateVideos}
          disabled={isGenerating}
          className="flex-1 bg-gradient-primary hover:shadow-glow transition-all"
        >
          <Wand2 className="w-4 h-4 mr-2" />
          {isGenerating ? "Gerando..." : `Gerar ${prompts.length} Vídeo(s)`}
        </Button>
      </div>
    </div>
  );
};
