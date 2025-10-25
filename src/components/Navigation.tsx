import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-xl font-semibold">NegotiAI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button className="text-sm hover:text-accent transition-colors">PRODUCT</button>
            <button className="text-sm hover:text-accent transition-colors">CUSTOMERS</button>
            <button className="text-sm hover:text-accent transition-colors">RESOURCES</button>
            <button className="text-sm hover:text-accent transition-colors">ABOUT US</button>
          </div>

          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-primary-foreground hover:text-accent"
              onClick={() => navigate("/login")}
            >
              LOGIN
            </Button>
            <Button 
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              onClick={() => navigate("/login")}
            >
              BOOK A MEETING
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
