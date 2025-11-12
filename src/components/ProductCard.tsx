import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles } from "lucide-react";

interface ProductCardProps {
  name: string;
  description: string;
  features: string[];
  demoUrl: string;
  delay?: number;
}

const ProductCard = ({ name, description, features, demoUrl, delay = 0 }: ProductCardProps) => {
  return (
    <Card
      className="group relative overflow-hidden bg-white/10 backdrop-blur-md hover:shadow-2xl hover:bg-white/15 transition-all duration-300 animate-fade-in-up border-white/20"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors drop-shadow">
              {name}
            </h3>
            <p className="text-sm text-white/80 line-clamp-2">
              {description}
            </p>
          </div>
          <Sparkles className="h-5 w-5 text-white/70" />
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-white/90">
              <span className="text-white mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="pt-4">
          <Button
            asChild
            className="w-full bg-white text-purple-900 hover:bg-white/90 shadow-lg group/btn"
          >
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              Open Live Demo
              <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
