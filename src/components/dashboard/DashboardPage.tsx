import { StatsCard } from "@/components/dashboard/StatsCard";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Upload, 
  Users, 
  Shield, 
  AlertTriangle,
  TrendingUp,
  Calendar,
  Clock
} from "lucide-react";
import heroVault from "@/assets/hero-vault.jpg";

const statsData = [
  {
    title: "Total Files",
    value: "2,847",
    description: "Across 45 active cases",
    icon: FileText,
    trend: { value: "12%", isPositive: true }
  },
  {
    title: "Active Users",
    value: "23",
    description: "8 lawyers, 15 clients",
    icon: Users,
    trend: { value: "3", isPositive: true }
  },
  {
    title: "Storage Used",
    value: "847 GB",
    description: "68% of 1.2TB capacity",
    icon: Shield
  },
  {
    title: "Security Alerts",
    value: "3",
    description: "2 pending review",
    icon: AlertTriangle,
    trend: { value: "2", isPositive: false }
  }
];

const recentCases = [
  {
    id: "1",
    name: "Johnson vs. Smith",
    case_number: "2023-CV-0045",
    last_activity: "2 hours ago",
    file_count: 23,
    status: "Active",
    priority: "High"
  },
  {
    id: "2", 
    name: "Estate of Williams",
    case_number: "2023-PR-0112",
    last_activity: "1 day ago",
    file_count: 8,
    status: "Active",
    priority: "Medium"
  },
  {
    id: "3",
    name: "ABC Corp Contract Review",
    case_number: "2023-BL-0089",
    last_activity: "3 days ago",
    file_count: 15,
    status: "Review",
    priority: "Low"
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-destructive text-destructive-foreground";
    case "Medium":
      return "bg-warning text-warning-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-xl">
        <div 
          className="h-32 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroVault})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80" />
          <div className="relative h-full flex items-center justify-between px-8">
            <div>
              <h1 className="text-2xl font-bold text-primary-foreground">
                Welcome back, Sarah
              </h1>
              <p className="text-primary-foreground/90 mt-1">
                Here's what's happening with your secure files today
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Upload Documents
              </Button>
              <Button variant="outline" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Calendar className="w-4 h-4 mr-2" />
                View Calendar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Cases */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Active Cases
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentCases.map((case_item) => (
                  <div key={case_item.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/20 transition-smooth group cursor-pointer">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-smooth">
                          {case_item.name}
                        </h4>
                        <Badge className={`text-xs ${getPriorityColor(case_item.priority)}`}>
                          {case_item.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {case_item.case_number} • {case_item.file_count} files
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>Last activity: {case_item.last_activity}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {case_item.status}
                      </Badge>
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-border/50 mt-6">
                <Button variant="ghost" className="w-full text-primary hover:text-primary-glow">
                  View All Cases →
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity Feed */}
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}