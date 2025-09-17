import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Search, 
  Filter,
  Download,
  Upload,
  Share,
  UserPlus,
  Clock
} from "lucide-react";

const LogsPage = () => {
  const auditLogs = [
    {
      id: "1",
      action: "File Upload",
      description: "Settlement Agreement.pdf uploaded to Johnson vs. Smith case",
      user: "Sarah Mitchell",
      timestamp: "2023-12-15 14:32:15",
      ip_address: "192.168.1.45",
      file_size: "2.3 MB",
      type: "upload",
      status: "Success"
    },
    {
      id: "2",
      action: "Secure Link Generated",
      description: "Pre-signed URL created for Discovery Documents batch",
      user: "Michael Chen", 
      timestamp: "2023-12-15 14:15:42",
      ip_address: "192.168.1.52",
      expiry: "24 hours",
      type: "share",
      status: "Success"
    },
    {
      id: "3",
      action: "User Access Granted",
      description: "Client Jane Smith granted viewer access to Case #2023-CV-0045",
      user: "Sarah Mitchell",
      timestamp: "2023-12-15 13:45:28",
      ip_address: "192.168.1.45",
      type: "user_added",
      status: "Success"
    },
    {
      id: "4",
      action: "File Download",
      description: "Client Interview Notes.docx downloaded",
      user: "Emily Rodriguez",
      timestamp: "2023-12-15 12:18:33",
      ip_address: "10.0.1.123",
      file_size: "890 KB",
      type: "download",
      status: "Success"
    },
    {
      id: "5",
      action: "Failed Login Attempt",
      description: "Multiple failed authentication attempts detected",
      user: "unknown@suspicious.com",
      timestamp: "2023-12-15 11:52:17",
      ip_address: "203.45.67.89",
      attempts: "5",
      type: "security",
      status: "Failed"
    }
  ];

  const getActionIcon = (type: string) => {
    switch (type) {
      case "upload":
        return Upload;
      case "download":
        return Download;
      case "share":
        return Share;
      case "user_added":
        return UserPlus;
      default:
        return FileText;
    }
  };

  const getStatusColor = (status: string) => {
    return status === "Success" 
      ? "bg-success text-success-foreground"
      : "bg-destructive text-destructive-foreground";
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Audit Logs</h1>
            <p className="text-muted-foreground mt-1">Complete activity trail and compliance tracking</p>
          </div>
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export Logs
          </Button>
        </div>

        {/* Search and Filter */}
        <Card className="bg-gradient-card shadow-card border-border/50">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search logs by action, user, or description..." 
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filter by Date
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Audit Log Table */}
        <Card className="bg-gradient-card shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {auditLogs.map((log) => {
                const IconComponent = getActionIcon(log.type);
                
                return (
                  <div key={log.id} className="flex items-start gap-4 p-4 rounded-lg border border-border/50 hover:bg-muted/20 transition-smooth">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-primary mt-1">
                      <IconComponent className="w-4 h-4 text-primary-foreground" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">{log.action}</h4>
                          <p className="text-sm text-muted-foreground">{log.description}</p>
                        </div>
                        <Badge className={`text-xs ${getStatusColor(log.status)}`}>
                          {log.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs text-muted-foreground">
                        <div>
                          <span className="font-medium">User:</span> {log.user}
                        </div>
                        <div>
                          <span className="font-medium">Time:</span> {log.timestamp}
                        </div>
                        <div>
                          <span className="font-medium">IP:</span> {log.ip_address}
                        </div>
                        <div>
                          {log.file_size && (
                            <><span className="font-medium">Size:</span> {log.file_size}</>
                          )}
                          {log.expiry && (
                            <><span className="font-medium">Expires:</span> {log.expiry}</>
                          )}
                          {log.attempts && (
                            <><span className="font-medium">Attempts:</span> {log.attempts}</>
                          )}
                        </div>
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

export default LogsPage;