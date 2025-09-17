import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Shield, 
  Clock,
  Eye,
  X,
  CheckCircle
} from "lucide-react";

const AlertsPage = () => {
  const alerts = [
    {
      id: "1",
      title: "Unusual Download Activity Detected",
      description: "User 'unknown@external.com' attempted to download 15 files within 5 minutes from IP 203.45.67.89",
      severity: "High",
      timestamp: "2023-12-15 15:42:18",
      status: "Active",
      type: "security",
      details: {
        affected_files: 15,
        ip_address: "203.45.67.89",
        user_agent: "Chrome/120.0"
      }
    },
    {
      id: "2",
      title: "Off-Hours File Access",
      description: "Multiple files accessed outside of business hours (2:30 AM - 4:15 AM)",
      severity: "Medium", 
      timestamp: "2023-12-15 04:15:22",
      status: "Under Review",
      type: "access",
      details: {
        affected_files: 7,
        time_range: "2:30 AM - 4:15 AM",
        user: "client@example.com"
      }
    },
    {
      id: "3",
      title: "Large File Upload Warning",
      description: "File upload exceeding 50MB detected - may require additional review",
      severity: "Low",
      timestamp: "2023-12-15 13:28:45", 
      status: "Acknowledged",
      type: "compliance",
      details: {
        file_name: "Complete_Case_Archive.zip",
        file_size: "127 MB",
        uploaded_by: "sarah@lawfirm.com"
      }
    },
    {
      id: "4",
      title: "Failed Authentication Attempts",
      description: "5 consecutive failed login attempts detected for privileged account",
      severity: "High",
      timestamp: "2023-12-15 11:52:17",
      status: "Resolved",
      type: "security",
      details: {
        attempts: 5,
        target_account: "admin@lawfirm.com",
        source_ip: "192.168.1.999"
      }
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-destructive text-destructive-foreground";
      case "Medium":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-destructive text-destructive-foreground";
      case "Under Review":
        return "bg-warning text-warning-foreground";
      case "Resolved":
        return "bg-success text-success-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "security":
        return Shield;
      case "access":
        return Clock;
      default:
        return AlertTriangle;
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Security Alert Center</h1>
            <p className="text-muted-foreground mt-1">Monitor and respond to security events</p>
          </div>
          <div className="flex gap-3">
            <Badge className="bg-destructive text-destructive-foreground">
              2 Active Alerts
            </Badge>
            <Button variant="outline" size="sm">
              Mark All as Reviewed
            </Button>
          </div>
        </div>

        {/* Alert Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Active Alerts</p>
                  <h3 className="text-2xl font-bold text-destructive mt-1">2</h3>
                </div>
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Under Review</p>
                  <h3 className="text-2xl font-bold text-warning mt-1">1</h3>
                </div>
                <Eye className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Resolved Today</p>
                  <h3 className="text-2xl font-bold text-success mt-1">1</h3>
                </div>
                <CheckCircle className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts List */}
        <Card className="bg-gradient-card shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Security Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {alerts.map((alert) => {
                const IconComponent = getAlertIcon(alert.type);
                
                return (
                  <div key={alert.id} className="flex items-start gap-4 p-4 rounded-lg border border-border/50 hover:bg-muted/20 transition-smooth">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-primary">
                      <IconComponent className="w-5 h-5 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-3">
                            <h4 className="font-semibold text-foreground">{alert.title}</h4>
                            <Badge className={`text-xs ${getSeverityColor(alert.severity)}`}>
                              {alert.severity}
                            </Badge>
                            <Badge className={`text-xs ${getStatusColor(alert.status)}`}>
                              {alert.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{alert.description}</p>
                          <p className="text-xs text-muted-foreground mt-2">{alert.timestamp}</p>
                        </div>
                        
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {/* Alert Details */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs bg-muted/30 rounded-lg p-3">
                        {Object.entries(alert.details).map(([key, value]) => (
                          <div key={key}>
                            <span className="font-medium text-muted-foreground capitalize">
                              {key.replace('_', ' ')}:
                            </span>
                            <span className="ml-1 text-foreground">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default AlertsPage;