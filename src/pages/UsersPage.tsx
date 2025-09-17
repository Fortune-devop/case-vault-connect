import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserPlus, Mail, Shield, Settings, MoreVertical } from "lucide-react";

const UsersPage = () => {
  const users = [
    {
      id: "1",
      name: "Sarah Mitchell",
      email: "sarah@lawfirm.com",
      role: "Senior Partner",
      access_level: "Admin",
      cases: 12,
      last_login: "2 hours ago",
      status: "Active",
      initials: "SM"
    },
    {
      id: "2", 
      name: "Michael Chen",
      email: "michael@lawfirm.com",
      role: "Associate",
      access_level: "Editor",
      cases: 8,
      last_login: "1 day ago",
      status: "Active",
      initials: "MC"
    },
    {
      id: "3",
      name: "Jane Smith",
      email: "jane.smith@email.com",
      role: "Client",
      access_level: "Viewer",
      cases: 1,
      last_login: "3 days ago",
      status: "Active",
      initials: "JS"
    }
  ];

  const getRoleBadgeColor = (access_level: string) => {
    switch (access_level) {
      case "Admin":
        return "bg-destructive text-destructive-foreground";
      case "Editor":
        return "bg-warning text-warning-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">User Management</h1>
            <p className="text-muted-foreground mt-1">Manage team members and client access</p>
          </div>
          <Button className="bg-gradient-primary">
            <UserPlus className="w-4 h-4 mr-2" />
            Invite User
          </Button>
        </div>

        <Card className="bg-gradient-card shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Active Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 rounded-lg border border-border/50 hover:bg-muted/20 transition-smooth">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold">
                        {user.initials}
                      </AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground">{user.name}</h4>
                        <Badge className={`text-xs ${getRoleBadgeColor(user.access_level)}`}>
                          {user.access_level}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                        <span>{user.role}</span>
                        <span>•</span>
                        <span>{user.cases} cases</span>
                        <span>•</span>
                        <span>Last login: {user.last_login}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs">
                      {user.status}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default UsersPage;