import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { TrendingDown, AlertCircle, FileText, Database, Shield, BarChart3 } from "lucide-react";

const suppliers = [
  {
    name: "Metalltechnik Müller",
    country: "🇩🇪 Germany",
    volume: "4.8M €",
    trend: "+30%",
    riskScore: 38,
    riskTrend: "-30%",
    bonitatsindex: 155,
    bonitasTrend: "-5%",
    financialRisk: "LOW RISK",
    iso9001: "COMPLIANT",
    reach2024: "COMPLIANT",
  },
  {
    name: "Fischer GmbH",
    country: "🇩🇪 Germany",
    volume: "3.2M €",
    trend: "+15%",
    riskScore: 42,
    riskTrend: "+5%",
    bonitatsindex: 148,
    bonitasTrend: "-2%",
    financialRisk: "LOW RISK",
    iso9001: "NO DOCUMENT",
    reach2024: "OVERDUE",
  },
  {
    name: "Schneider & Co",
    country: "🇩🇪 Germany",
    volume: "5.1M €",
    trend: "+22%",
    riskScore: 35,
    riskTrend: "-12%",
    bonitatsindex: 162,
    bonitasTrend: "+3%",
    financialRisk: "LOW RISK",
    iso9001: "COMPLIANT",
    reach2024: "COMPLIANT",
  },
  {
    name: "Hoffmann & Partner",
    country: "🇩🇪 Germany",
    volume: "2.8M €",
    trend: "+8%",
    riskScore: 45,
    riskTrend: "+15%",
    bonitatsindex: 142,
    bonitasTrend: "-8%",
    financialRisk: "MEDIUM RISK",
    iso9001: "OVERDUE",
    reach2024: "COMPLIANT",
  },
  {
    name: "Bergmann & Söhne",
    country: "🇩🇪 Germany",
    volume: "4.5M €",
    trend: "+25%",
    riskScore: 32,
    riskTrend: "-18%",
    bonitatsindex: 168,
    bonitasTrend: "+7%",
    financialRisk: "LOW RISK",
    iso9001: "NO DOCUMENT",
    reach2024: "NO DOCUMENT",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl font-light mb-2">Supplier Dashboard</h1>
            <p className="text-muted-foreground">Monitor and manage your supplier ecosystem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 hover:shadow-elegant transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Database className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-medium">Data Connections</h3>
              </div>
              <p className="text-3xl font-light mb-2">24/28</p>
              <p className="text-sm text-muted-foreground">Active integrations</p>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-warning" />
                </div>
                <h3 className="font-medium">Risk Management</h3>
              </div>
              <p className="text-3xl font-light mb-2">12</p>
              <p className="text-sm text-muted-foreground">Risks identified</p>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-info" />
                </div>
                <h3 className="font-medium">Supplier Evaluation</h3>
              </div>
              <p className="text-3xl font-light mb-2">85%</p>
              <p className="text-sm text-muted-foreground">Average score</p>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-success" />
                </div>
                <h3 className="font-medium">Master Data</h3>
              </div>
              <p className="text-3xl font-light mb-2">156</p>
              <p className="text-sm text-muted-foreground">Documents verified</p>
            </Card>
          </div>

          <Card className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-light mb-2">Active Suppliers</h2>
              <p className="text-sm text-muted-foreground">Click on any supplier to view communication</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Supplier</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Volume (last 6 months)</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Risk Score</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">Bonitätsindex</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">ISO 9001</th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground">REACH 2024</th>
                  </tr>
                </thead>
                <tbody>
                  {suppliers.map((supplier, index) => (
                    <tr 
                      key={index}
                      className="border-b border-border hover:bg-muted/50 cursor-pointer transition-colors"
                      onClick={() => navigate("/communication")}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                            <span className="text-lg">⚡</span>
                          </div>
                          <div>
                            <p className="font-medium">{supplier.name}</p>
                            <p className="text-sm text-muted-foreground">{supplier.country}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="font-medium">{supplier.volume}</p>
                        <p className="text-sm text-success flex items-center gap-1">
                          <TrendingDown className="w-3 h-3 rotate-180" />
                          {supplier.trend}
                        </p>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-2xl font-light mb-1">{supplier.riskScore}</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs border-success text-success">
                            {supplier.financialRisk}
                          </Badge>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <p className="text-2xl font-light">{supplier.bonitatsindex}</p>
                        <p className="text-sm text-muted-foreground">{supplier.bonitasTrend} vs last month</p>
                      </td>
                      <td className="py-4 px-4">
                        <Badge 
                          variant={supplier.iso9001 === "COMPLIANT" ? "default" : supplier.iso9001 === "OVERDUE" ? "destructive" : "secondary"}
                          className={supplier.iso9001 === "COMPLIANT" ? "bg-success text-success-foreground" : ""}
                        >
                          {supplier.iso9001}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge 
                          variant={supplier.reach2024 === "COMPLIANT" ? "default" : supplier.reach2024 === "OVERDUE" ? "destructive" : "secondary"}
                          className={supplier.reach2024 === "COMPLIANT" ? "bg-success text-success-foreground" : ""}
                        >
                          {supplier.reach2024}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
