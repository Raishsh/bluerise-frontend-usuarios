import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/useAuthStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Stethoscope, Users, Shield, TrendingUp } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const features = [
    {
      icon: Users,
      title: "Gestão de Usuários",
      description: "Controle completo sobre usuários do sistema médico"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção avançada para dados médicos sensíveis"
    },
    {
      icon: TrendingUp,
      title: "Relatórios",
      description: "Insights e métricas em tempo real"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-medical relative">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="mx-auto w-20 h-20 bg-card rounded-3xl flex items-center justify-center shadow-medical">
              <Stethoscope className="w-10 h-10 text-primary" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Blue<span className="text-accent">Rise</span>
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Sistema completo de gestão médica para profissionais de saúde
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/login")}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-card"
              >
                Fazer Login
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
