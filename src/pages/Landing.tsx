import Navigation from "@/components/Navigation";
import IndustryCarousel from "@/components/IndustryCarousel";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Play, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [showGoatLogo, setShowGoatLogo] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "The Goat of Negotiation";
  const [supplierText, setSupplierText] = useState("");
  const supplierFullText = "Efficient supplier management";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowGoatLogo((prev) => !prev);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;
    
    const startTyping = () => {
      setIsTyping(true);
      typingInterval = setInterval(() => {
        if (index <= fullText.length) {
          setTypedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          // Wait 2 seconds before erasing
          setTimeout(startErasing, 2000);
        }
      }, 80);
    };

    const startErasing = () => {
      setIsTyping(false);
      typingInterval = setInterval(() => {
        if (index >= 0) {
          setTypedText(fullText.slice(0, index));
          index--;
        } else {
          clearInterval(typingInterval);
          // Wait 1 second before typing again
          setTimeout(() => {
            index = 0;
            startTyping();
          }, 1000);
        }
      }, 50);
    };

    startTyping();

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    let index = 0;
    let typingInterval: NodeJS.Timeout;
    
    const startTyping = () => {
      typingInterval = setInterval(() => {
        if (index <= supplierFullText.length) {
          setSupplierText(supplierFullText.slice(0, index));
          index++;
        } else {
          clearInterval(typingInterval);
          setTimeout(startErasing, 2000);
        }
      }, 80);
    };

    const startErasing = () => {
      typingInterval = setInterval(() => {
        if (index >= 0) {
          setSupplierText(supplierFullText.slice(0, index));
          index--;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            index = 0;
            startTyping();
          }, 1000);
        }
      }, 50);
    };

    startTyping();

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToContent = () => {
    document.getElementById("content")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary text-slate-200 text-center py-2 text-sm">
        NEGOTIATE FASTER, MAKE STRONGER DECISIONS → AI-POWERED PROCUREMENT INTELLIGENCE → REGISTER FOR FREE
      </div>
      
      <Navigation />
      
      <main>
        {/* Hero Section with Mouse Tracking */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-[#a94442] via-[#f19c93] to-[#b8d4e0]">
          {/* Fluid Background Effect */}
          <div
            className="absolute inset-0 opacity-90 transition-all duration-1000 ease-out"
            style={{
              background: `
                radial-gradient(circle 900px at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(169, 68, 66, 0.7),
                  rgba(198, 87, 85, 0.5) 25%,
                  transparent 60%),
                radial-gradient(circle 700px at ${mousePosition.x * 0.7}px ${mousePosition.y * 1.1}px,
                  rgba(241, 156, 147, 0.6),
                  rgba(243, 176, 169, 0.4) 30%,
                  transparent 65%),
                radial-gradient(circle 800px at ${mousePosition.x * 1.3}px ${mousePosition.y * 0.8}px,
                  rgba(184, 212, 224, 0.6),
                  rgba(200, 222, 232, 0.4) 35%,
                  transparent 70%)
              `,
              filter: 'blur(100px)',
            }}
          />
          
          {/* Overlay gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
          
          <div className="relative z-10 text-center px-6 font-morne">
            <h1 className="text-7xl md:text-9xl font-light mb-6 tracking-tight text-white">
              NegoatAI
            </h1>
            <p className="text-2xl md:text-4xl text-white/90 font-light min-h-[3rem] md:min-h-[4rem] flex items-center justify-center gap-2">
              {typedText.includes("Goat") ? (
                <>
                  {typedText.split("Goat")[0]}
                  <span className="inline-flex items-center transition-all duration-500 ease-in-out">
                    {showGoatLogo ? (
                      <span className="text-4xl md:text-5xl">🐐</span>
                    ) : (
                      "Goat"
                    )}
                  </span>
                  {typedText.split("Goat")[1]}
                </>
              ) : (
                typedText
              )}
              <span className="animate-pulse">|</span>
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
          <section className="container mx-auto px-6 py-20 md:py-32 bg-primary/5">
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

          <section className="bg-primary/5 py-20">
            <div className="container mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-light text-center mb-16 min-h-[4rem] flex items-center justify-center gap-2">
                {supplierText}
                <span className="animate-pulse">|</span>
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
