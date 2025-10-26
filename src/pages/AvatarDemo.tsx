import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AvatarDemo = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I'm your AI negotiation assistant. I've analyzed the supplier data and can help you identify negotiation opportunities. What would you like to know?",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    setChatMessages([
      ...chatMessages,
      { role: "user", content: message },
      {
        role: "assistant",
        content: "Based on the datalake analysis, I've identified that Bergmann & Söhne has consistently delivered 94% on-time performance, which is 8% above their contractual obligation. This presents an opportunity to negotiate for volume discounts while maintaining quality standards. Their recent financial improvement (Bonitätsindex up 7%) suggests they're in a strong position to offer competitive pricing.",
      },
    ]);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6 max-w-5xl">
          <Button 
            variant="ghost" 
            className="mb-6 gap-2"
            onClick={() => navigate("/communication")}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Communication
          </Button>

          <div className="mb-8">
            <h1 className="text-3xl font-light mb-2">AI Negotiation Assistant</h1>
            <p className="text-muted-foreground">Get real-time insights from your procurement datalake</p>
          </div>

          <Card className="p-8 mb-6">
            <iframe
              src="https://app.beyondpresence.io/agent?key=sk-oJCDoRk6yXQFzBIOn_iv8YvHOQrBntj5yTZcBn6PucM"
              className="w-full aspect-video rounded-xl"
              allow="microphone; camera"
              title="Beyond Presence AI Avatar"
            />
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-medium mb-6">Chat with AI Assistant</h2>
            
            <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-10 h-10 rounded-full bg-gradient-orange flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div
                    className={`rounded-2xl p-4 max-w-2xl ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none"
                        : "bg-muted/50 rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.content}</p>
                  </div>
                  {msg.role === "user" && (
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                      <span className="text-sm">You</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Ask about negotiation strategies, supplier insights, or market data..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                className="flex-1"
              />
              <Button onClick={handleSend} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Send className="w-4 h-4" />
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Suggested questions:</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMessage("What are the key leverage points for negotiation?")}
                >
                  Key leverage points?
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMessage("How does their pricing compare to market?")}
                >
                  Price comparison?
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMessage("What contract terms should I focus on?")}
                >
                  Contract terms?
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setMessage("What are the risk factors I should consider?")}
                >
                  Risk factors?
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

const Badge = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${className}`}>
    {children}
  </span>
);

export default AvatarDemo;
