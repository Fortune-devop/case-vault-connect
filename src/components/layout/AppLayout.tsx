import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Shield, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-subtle">
        {/* Professional Header */}
        <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-card/95 backdrop-blur-sm border-b border-border shadow-subtle">
          <div className="flex items-center justify-between h-full px-6">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-primary">
                  <Shield className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-foreground">Secure File Vault</h1>
                  <p className="text-xs text-muted-foreground">Professional Legal Portal</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-4 h-4" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-destructive">
                  3
                </Badge>
              </Button>
              
              <div className="flex items-center gap-3 pl-3 border-l border-border">
                <div className="text-right">
                  <p className="text-sm font-medium">Sarah Mitchell</p>
                  <p className="text-xs text-muted-foreground">Senior Partner</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary-foreground">SM</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <main className="flex-1 pt-16 transition-smooth">
          <div className="container mx-auto p-6 max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}