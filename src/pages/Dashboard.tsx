import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { TrendingDown, AlertCircle, FileText, Database, Shield, BarChart3 } from "lucide-react";

const suppliers = [
  {
    name: "Astra Components Ltd.",
    country: "🇩🇪 Germany",
    volume: "8.5M $",
    trend: "+6%",
    riskScore: 12,
    riskTrend: "-30%",
    bonitatsindex: 87,
    bonitasTrend: "-0.8%",
    financialRisk: "LOW RISK",
    iso9001: "COMPLIANT",
    reach2024: "COMPLIANT",
  },
  {
    name: "Helios SolarTech",
    country: "🇺🇸 USA",
    volume: "9.0M $",
    trend: "+7%",
    riskScore: 10,
    riskTrend: "-25%",
    bonitatsindex: 90,
    bonitasTrend: "-1.0%",
    financialRisk: "LOW RISK",
    iso9001: "COMPLIANT",
    reach2024: "COMPLIANT",
  },
  {
    name: "Nova Alloys GmbH",
    country: "🇦🇹 Austria",
    volume: "7.2M $",
    trend: "+5%",
    riskScore: 15,
    riskTrend: "-15%",
    bonitatsindex: 82,
    bonitasTrend: "+0.3%",
    financialRisk: "LOW RISK",
    iso9001: "COMPLIANT",
    reach2024: "NO DOCUMENT",
  },
  {
    name: "Orbital Dynamics Co.",
    country: "🇯🇵 Japan",
    volume: "10.5M $",
    trend: "+4%",
    riskScore: 8,
    riskTrend: "-35%",
    bonitatsindex: 94,
    bonitasTrend: "-0.5%",
    financialRisk: "LOW RISK",
    iso9001: "COMPLIANT",
    reach2024: "COMPLIANT",
  },
  {
    name: "Vega Composites",
    country: "🇫🇷 France",
    volume: "6.4M $",
    trend: "+8%",
    riskScore: 20,
    riskTrend: "-10%",
    bonitatsindex: 79,
    bonitasTrend: "-1.2%",
    financialRisk: "LOW RISK",
    iso9001: "COMPLIANT",
    reach2024: "COMPLIANT",
  },
  {
    name: "Zenith Optics",
    country: "🇨🇦 Canada",
    volume: "7.7M $",
    trend: "+5%",
    riskScore: 9,
    riskTrend: "-28%",
    bonitatsindex: 91,
    bonitasTrend: "-0.6%",
    financialRisk: "LOW RISK",
    iso9001: "COMPLIANT",
    reach2024: "COMPLIANT",
  },
  {
    name: "Titan Metals",
    country: "🇬🇧 United Kingdom",
    volume: "6.9M $",
    trend: "+6%",
    riskScore: 18,
    riskTrend: "-12%",
    bonitatsindex: 83,
    bonitasTrend: "-0.4%",
    financialRisk: "LOW RISK",
    iso9001: "COMPLIANT",
    reach2024: "NO DOCUMENT",
  },
  {
    name: "Polar Electronics",
    country: "🇸🇪 Sweden",
    volume: "7.3M $",
    trend: "+7%",
    riskScore: 13,
    riskTrend: "-20%",
    bonitatsindex: 86,
    bonitasTrend: "-0.9%",
    financialRisk: "LOW RISK",
    iso9001: "COMPLIANT",
    reach2024: "COMPLIANT",
  },
  {
    name: "Quantum Thermal Systems",
    country: "🇮🇹 Italy",
    volume: "7.8M $",
    trend: "+5%",
    riskScore: 10,
    riskTrend: "-25%",
    bonitatsindex: 89,
    bonitasTrend: "-0.7%",
    financialRisk: "LOW RISK",
    iso9001: "COMPLIANT",
    reach2024: "COMPLIANT",
  },
  {
    name: "Stellar MicroTech",
    country: "🇰🇷 South Korea",
    volume: "9.8M $",
    trend: "+3%",
    riskScore: 7,
    riskTrend: "-40%",
    bonitatsindex: 95,
    bonitasTrend: "-0.3%",
    financialRisk: "LOW RISK",
    iso9001: "COMPLIANT",
    reach2024: "COMPLIANT",
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
