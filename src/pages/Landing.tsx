import Navigation from "@/components/Navigation";
import IndustryCarousel from "@/components/IndustryCarousel";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContent = () => {
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        NEGOTIATE FASTER, MAKE STRONGER DECISIONS → AI-POWERED PROCUREMENT INTELLIGENCE → REGISTER FOR FREE
      </div>
      
      <Navigation />
      
      <main>
        {/* Hero Section with Mouse Tracking */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-30 transition-all duration-300 ease-out"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, hsl(var(--primary) / 0.15), transparent 50%)`,
            }}
          />
          
          <div className="relative z-10 text-center px-6">
            <h1 className="text-7xl md:text-9xl font-light mb-6 tracking-tight">
              NegoAI
            </h1>
            <p className="text-2xl md:text-4xl text-muted-foreground font-light">
              The Goat of Negotiation
            </p>
          </div>

          <button
            onClick={scrollToContent}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hover:text-primary transition-colors"
            aria-label="Scroll to content"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </section>

        {/* Existing Content */}
        <div id="content">
          <section className="container mx-auto px-6 py-20 md:py-32">
            <div className="max-w-4xl">
              <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8">
                Accelerate procurement negotiations with AI-powered intelligence
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
                Our live negotiation agent analyzes data in real-time, uncovers leverage points, 
                and guides you to optimal outcomes—delivering results without compromising on quality or time.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  onClick={() => navigate("/login")}
                >
                  BOOK A MEETING
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2 px-8"
                >
                  <Play className="w-4 h-4" />
                  VIEW PRODUCT
                </Button>
              </div>
            </div>
          </section>

          <IndustryCarousel />

          <section className="bg-background py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-light text-center mb-16">
                Efficient supplier management
              </h2>
              <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto">
                Manage all supplier processes in one platform: Data, risks and potentials 
                intelligently linked in one place.
              </p>
            </div>
          </section>

          <footer className="bg-secondary py-12 mt-20">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl">
                <p className="text-lg mb-2">
                  Accelerate procurement negotiations with AI-powered intelligence
                </p>
                <p className="text-sm text-muted-foreground">
                  Our live negotiation agent analyzes data in real-time, uncovers leverage points, 
                  and guides you to optimal outcomes.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Landing;
