import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!email.trim() || !password.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10"
        style={{
          background: 'linear-gradient(135deg, hsl(0, 0%, 100%) 0%, hsl(0, 0%, 98%) 50%, hsl(14, 100%, 95%) 100%)'
        }}
      />
      
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-card rounded-2xl p-12 shadow-elegant">
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 bg-gradient-orange rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl font-light text-center mb-2">Welcome</h1>
          <p className="text-center text-muted-foreground mb-8">Log in to NegotiAI</p>
          
          <div className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder="Password*"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12"
              />
            </div>
            
            <Button 
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
