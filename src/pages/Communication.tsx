import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, TrendingUp, AlertTriangle, CheckCircle2, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Communication = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <Button 
            variant="ghost" 
            className="mb-6 gap-2"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Button>

          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <div>
                <h1 className="text-3xl font-light mb-1">Bergmann & Söhne GmbH</h1>
                <p className="text-muted-foreground">🇩🇪 Germany • Volume (last 6 months): 4.8M € ↑ 30%</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="border-success text-success">LOW RISK</Badge>
            </div>
          </div>

          <Tabs defaultValue="communication" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="communication">Supplier Communication</TabsTrigger>
              <TabsTrigger value="trends">Trends & Dashboard</TabsTrigger>
              <TabsTrigger value="history">Conversation History</TabsTrigger>
            </TabsList>

            <TabsContent value="communication">
              <Card className="p-8">
                <h2 className="text-xl font-medium mb-6">Recent Communication</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm">MA</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted/50 rounded-2xl rounded-tl-none p-4 mb-2">
                        <p className="text-sm">Dear Mr. Alvarez,</p>
                        <p className="text-sm mt-2">Can you provide the certificate for article X28H as discussed in our meeting.</p>
                      </div>
                      <p className="text-xs text-muted-foreground">10:32 AM</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 flex flex-col items-end">
                      <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-4 mb-2 max-w-md">
                        <p className="text-sm">Sure, I can send it to you by the end of the day</p>
                      </div>
                      <p className="text-xs text-muted-foreground">10:45 AM</p>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-sm">BS</span>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-end">
                    <div className="flex-1 flex flex-col items-end">
                      <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-4 mb-2 max-w-md">
                        <p className="text-sm mb-2">perfect!</p>
                      </div>
                      <p className="text-xs text-muted-foreground">10:46 AM</p>
                    </div>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-sm">BS</span>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-sm">MA</span>
                    </div>
                    <div className="flex-1">
                      <div className="bg-muted/50 rounded-2xl rounded-tl-none p-4 mb-2">
                        <p className="text-sm mb-3">Here is the certificate</p>
                        <div className="flex items-center gap-3 bg-card p-3 rounded-lg">
                          <FileText className="w-5 h-5 text-muted-foreground" />
                          <span className="text-sm">X28H_certificate.pdf</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">4:15 PM</p>
                    </div>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="trends">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">Negotiation Priorities</h3>
                    <Badge variant="destructive" className="gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      High Priority
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Payment terms negotiation</p>
                        <p className="text-sm text-muted-foreground">Current: 30 days • Target: 60 days</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded bg-warning/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4 text-warning" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Volume discount opportunity</p>
                        <p className="text-sm text-muted-foreground">Potential savings: €240K annually</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">New Information</h3>
                    <Badge variant="default" className="bg-info text-info-foreground">
                      3 Updates
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded bg-success/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-success" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">ISO 9001 certification renewed</p>
                        <p className="text-sm text-muted-foreground">Valid until Dec 2025</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                      <div className="w-8 h-8 rounded bg-info/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-4 h-4 text-info" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">Financial performance improved</p>
                        <p className="text-sm text-muted-foreground">Bonitätsindex up by 7%</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 hover:shadow-elegant transition-shadow">
                  <h4 className="text-sm text-muted-foreground mb-2">Price Competitiveness</h4>
                  <p className="text-3xl font-light mb-2">-8%</p>
                  <p className="text-sm text-muted-foreground">Below market average</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button variant="link" className="p-0 h-auto text-accent" onClick={() => navigate("/avatar-demo")}>
                      Explore leverage points →
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-elegant transition-shadow">
                  <h4 className="text-sm text-muted-foreground mb-2">Delivery Performance</h4>
                  <p className="text-3xl font-light mb-2">94%</p>
                  <p className="text-sm text-muted-foreground">On-time delivery rate</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button variant="link" className="p-0 h-auto text-accent" onClick={() => navigate("/avatar-demo")}>
                      View improvement areas →
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-elegant transition-shadow">
                  <h4 className="text-sm text-muted-foreground mb-2">Contract Terms</h4>
                  <p className="text-3xl font-light mb-2">6</p>
                  <p className="text-sm text-muted-foreground">Negotiable clauses</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button variant="link" className="p-0 h-auto text-accent" onClick={() => navigate("/avatar-demo")}>
                      Start negotiation →
                    </Button>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-elegant transition-shadow">
                  <h4 className="text-sm text-muted-foreground mb-2">Quality Score</h4>
                  <p className="text-3xl font-light mb-2">88</p>
                  <p className="text-sm text-muted-foreground">Above industry standard</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Button variant="link" className="p-0 h-auto text-accent" onClick={() => navigate("/avatar-demo")}>
                      View quality metrics →
                    </Button>
                  </div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="history">
              <Card className="p-8">
                <h2 className="text-xl font-medium mb-6">AI Agent Conversation History</h2>
                
                <div className="space-y-6">
                  <Card className="p-6 bg-muted/30">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium">Negotiation Session - Payment Terms</p>
                          <p className="text-sm text-muted-foreground">March 15, 2024 • 14:32</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-success text-success">Completed</Badge>
                    </div>
                    <div className="pl-13 space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Discussed extending payment terms from 30 to 60 days. Agent provided market benchmarks and suggested negotiation strategies based on supplier's financial position.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">Payment Terms</Badge>
                        <Badge variant="secondary" className="text-xs">Negotiation Strategy</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-muted/30">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium">Risk Assessment Review</p>
                          <p className="text-sm text-muted-foreground">March 12, 2024 • 10:15</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-success text-success">Completed</Badge>
                    </div>
                    <div className="pl-13 space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Agent analyzed supplier's financial health, certification status, and delivery performance. Provided insights on potential risks and mitigation strategies.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">Risk Analysis</Badge>
                        <Badge variant="secondary" className="text-xs">Due Diligence</Badge>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-muted/30">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                          <MessageSquare className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-medium">Contract Optimization Session</p>
                          <p className="text-sm text-muted-foreground">March 8, 2024 • 16:45</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-success text-success">Completed</Badge>
                    </div>
                    <div className="pl-13 space-y-3">
                      <p className="text-sm text-muted-foreground">
                        Reviewed existing contract terms and identified 6 negotiable clauses. Agent suggested volume discount opportunities worth €240K annually.
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="text-xs">Contract Review</Badge>
                        <Badge variant="secondary" className="text-xs">Cost Optimization</Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Communication;
