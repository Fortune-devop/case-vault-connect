import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  description?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
}

export function StatsCard({ title, value, description, icon: Icon, trend }: StatsCardProps) {
  return (
    <Card className="bg-gradient-card shadow-card border-border/50 hover:shadow-professional transition-elegant">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {title}
            </p>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold text-foreground">
                {value}
              </h3>
              {trend && (
                <span className={`text-sm font-medium ${
                  trend.isPositive ? 'text-success' : 'text-destructive'
                }`}>
                  {trend.isPositive ? '+' : ''}{trend.value}
                </span>
              )}
            </div>
            {description && (
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>
          
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-primary">
            <Icon className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}