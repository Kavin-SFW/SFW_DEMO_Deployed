import { Zap, Brain, Settings, Shield, Github, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast Integration",
      description: "Get started in minutes with our intuitive APIs and comprehensive documentation.",
    },
    {
      icon: Brain,
      title: "AI-Driven Insights",
      description: "Leverage machine learning for smarter sales decisions and predictive analytics.",
    },
    {
      icon: Settings,
      title: "Customizable Matching",
      description: "Fine-tune matching algorithms to fit your specific business requirements.",
    },
    {
      icon: Shield,
      title: "Secure Financial Dashboard",
      description: "Enterprise-grade security with real-time financial data visualization.",
    },
    {
      icon: Github,
      title: "Open Source Ecosystem",
      description: "Built on open-source principles with active community contributions.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Architecture",
      description: "Grow from prototype to production with infrastructure that scales with you.",
    },
  ];

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose SFW?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for performance, designed for developers, trusted by businesses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-6 bg-card hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
