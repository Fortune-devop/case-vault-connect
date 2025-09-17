import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { 
  Upload, 
  Download, 
  Share, 
  UserPlus, 
  FileText,
  Clock
} from "lucide-react";

interface ActivityItem {
  id: string;
  type: 'upload' | 'download' | 'share' | 'user_added' | 'file_access';
  title: string;
  description: string;
  timestamp: string;
  user: string;
  userInitials: string;
  priority?: 'high' | 'medium' | 'low';
}

const recentActivity: ActivityItem[] = [
  {
    id: '1',
    type: 'upload',
    title: 'Contract uploaded',
    description: 'Johnson vs. Smith - Settlement Agreement.pdf',
    timestamp: '2 minutes ago',
    user: 'Sarah Mitchell',
    userInitials: 'SM',
    priority: 'high'
  },
  {
    id: '2',
    type: 'share',
    title: 'Secure link generated',
    description: 'Discovery Documents - Batch 3',
    timestamp: '15 minutes ago',
    user: 'Michael Chen',
    userInitials: 'MC',
    priority: 'medium'
  },
  {
    id: '3',
    type: 'download',
    title: 'File downloaded',
    description: 'Client Interview Notes.docx',
    timestamp: '1 hour ago',
    user: 'Emily Rodriguez',
    userInitials: 'ER'
  },
  {
    id: '4',
    type: 'user_added',
    title: 'Client access granted',
    description: 'Jane Smith added to Case #2023-045',
    timestamp: '3 hours ago',
    user: 'Sarah Mitchell',
    userInitials: 'SM'
  },
  {
    id: '5',
    type: 'file_access',
    title: 'Document reviewed',
    description: 'Deposition Transcript - Day 2.pdf',
    timestamp: '5 hours ago',
    user: 'David Park',
    userInitials: 'DP'
  }
];

const getActivityIcon = (type: ActivityItem['type']) => {
  switch (type) {
    case 'upload':
      return Upload;
    case 'download':
      return Download;
    case 'share':
      return Share;
    case 'user_added':
      return UserPlus;
    default:
      return FileText;
  }
};

const getPriorityColor = (priority?: string) => {
  switch (priority) {
    case 'high':
      return 'bg-destructive';
    case 'medium':
      return 'bg-warning';
    default:
      return 'bg-muted';
  }
};

export function ActivityFeed() {
  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Clock className="w-5 h-5 text-primary" />
            Recent Activity
          </CardTitle>
          <Badge variant="outline" className="text-xs">
            Live
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentActivity.map((activity) => {
          const Icon = getActivityIcon(activity.type);
          
          return (
            <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/30 transition-smooth group">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-primary">
                <Icon className="w-4 h-4 text-primary-foreground" />
              </div>
              
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground truncate">
                    {activity.title}
                  </p>
                  {activity.priority && (
                    <div className={`w-2 h-2 rounded-full ${getPriorityColor(activity.priority)}`} />
                  )}
                </div>
                <p className="text-sm text-muted-foreground truncate">
                  {activity.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Avatar className="w-4 h-4">
                    <AvatarFallback className="text-xs bg-muted">
                      {activity.userInitials}
                    </AvatarFallback>
                  </Avatar>
                  <span>{activity.user}</span>
                  <span>•</span>
                  <span>{activity.timestamp}</span>
                </div>
              </div>
            </div>
          );
        })}
        
        <div className="pt-2 border-t border-border/50">
          <button className="text-sm text-primary hover:text-primary-glow font-medium transition-smooth">
            View all activity →
          </button>
        </div>
      </CardContent>
    </Card>
  );
}