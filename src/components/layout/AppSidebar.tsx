import { 
  LayoutDashboard, 
  FolderOpen, 
  Users, 
  FileText, 
  Settings, 
  Shield,
  Clock,
  AlertTriangle
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Files & Cases", url: "/files", icon: FolderOpen },
  { title: "User Management", url: "/users", icon: Users },
  { title: "Audit Logs", url: "/logs", icon: FileText },
];

const securityItems = [
  { title: "Alert Center", url: "/alerts", icon: AlertTriangle },
  { title: "Activity Timeline", url: "/activity", icon: Clock },
  { title: "Compliance", url: "/compliance", icon: Shield },
];

const settingsItems = [
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  const getNavClassName = (path: string) => {
    const baseClasses = "transition-smooth group";
    return isActive(path) 
      ? `${baseClasses} bg-accent text-accent-foreground font-medium shadow-subtle`
      : `${baseClasses} hover:bg-muted/50 text-muted-foreground hover:text-foreground`;
  };

  const renderMenuGroup = (items: typeof mainItems, label: string) => (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
        {label}
      </SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink to={item.url} className={getNavClassName(item.url)}>
                  <item.icon className={`w-4 h-4 transition-smooth ${isActive(item.url) ? 'text-accent-foreground' : 'text-muted-foreground group-hover:text-foreground'}`} />
                  {state === "expanded" && (
                    <span className="font-medium">{item.title}</span>
                  )}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );

  return (
    <Sidebar 
      className={`${state === "collapsed" ? "w-16" : "w-64"} transition-elegant border-r border-border bg-card/50 backdrop-blur-sm`}
      collapsible="icon"
    >
      <SidebarContent className="py-6">
        {renderMenuGroup(mainItems, "Main")}
        {renderMenuGroup(securityItems, "Security")}
        {renderMenuGroup(settingsItems, "System")}
      </SidebarContent>
    </Sidebar>
  );
}