import { Navbar } from "../components/Navbar";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "Free",
    description: "Perfeito para começar e testar a plataforma",
    price: "R$ 0",
    period: "/mês",
    icon: Sparkles,
    features: [
      "5 vídeos por mês",
      "Resolução 720p",
      "Marca d'água VideoAI",
      "Suporte por email",
      "Templates básicos",
    ],
    cta: "Começar Grátis",
    popular: false,
    gradient: "from-muted to-secondary",
    link: "/create", // fluxo grátis
  },
  {
    name: "Pro",
    description: "Ideal para criadores de conteúdo e pequenos negócios",
    price: "R$ 97",
    period: "/mês",
    icon: Zap,
    features: [
      "100 vídeos por mês",
      "Resolução 1080p Full HD",
      "Sem marca d'água",
      "Suporte prioritário 24/7",
      "Todos os templates premium",
      "Criação em batch",
      "API de integração",
      "Analytics avançado",
    ],
    cta: "Assinar Pro",
    popular: true,
    gradient: "from-primary to-primary-glow",
    link: "https://pay.kirvano.com/3c491b8a-96e8-4f25-89c5-8b4e64fe9ab7",
  },
  {
    name: "Business",
    description: "Para agências e empresas que precisam de escala",
    price: "R$ 199",
    period: "/mês",
    icon: Crown,
    features: [
      "Vídeos ilimitados",
      "Resolução 4K Ultra HD",
      "Sem marca d'água",
      "Gerente de conta dedicado",
      "Templates personalizados",
      "Criação em batch ilimitada",
      "API com prioridade",
      "White-label disponível",
      "Treinamento da equipe",
      "SLA garantido",
    ],
    cta: "Assinar Business",
    popular: false,
    gradient: "from-accent to-accent-glow",
    link: "https://pay.kirvano.com/ee469971-5e40-4a60-8669-4bf1b455cd44",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Planos e Preços
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano perfeito para suas necessidades.
              Cancele quando quiser, sem compromisso.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col bg-card border-border hover:border-primary/50 transition-all duration-300 ${
                  plan.popular
                    ? "ring-2 ring-primary shadow-glow scale-105"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                      Mais Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-2">
                  <div
                    className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}
                  >
                    <plan.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1">
                  <div className="text-center mb-6">
                    <span className="text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/90">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <a
                    href={plan.link}
                    target={plan.name === "Free" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button
                      className={`w-full h-12 text-base font-semibold transition-all ${
                        plan.popular
                          ? "bg-gradient-primary hover:shadow-glow"
                          : plan.name === "Business"
                          ? "bg-gradient-accent hover:shadow-accent-glow"
                          : "bg-secondary hover:bg-secondary/80"
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Trust */}
          <div className="mt-20 text-center">
            <p className="text-muted-foreground mb-6">
              Todos os planos incluem garantia de 7 dias.
              Não gostou? Devolvemos seu dinheiro.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Pagamento seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-primary" />
                <span>Suporte em português</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;
