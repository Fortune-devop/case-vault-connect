import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  Search, 
  Filter, 
  FolderOpen, 
  FileText,
  Download,
  Share,
  Archive,
  MoreVertical
} from "lucide-react";

export function FilesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Files & Cases</h1>
          <p className="text-muted-foreground mt-1">Manage documents and case files</p>
        </div>
        <Button className="bg-gradient-primary">
          <Upload className="w-4 h-4 mr-2" />
          Upload Documents
        </Button>
      </div>

      {/* Search and Filter Bar */}
      <Card className="bg-gradient-card shadow-card border-border/50">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search files, cases, or clients..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Files Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* File Card */}
        <Card className="bg-gradient-card shadow-card border-border/50 hover:shadow-professional transition-elegant group">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <FolderOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-base font-semibold">Johnson vs. Smith</CardTitle>
                  <p className="text-sm text-muted-foreground">Case #2023-CV-0045</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">23 files</span>
              <Badge className="bg-success text-success-foreground">Active</Badge>
            </div>
            
            <div className="space-y-2">
              {[
                { name: "Settlement Agreement.pdf", size: "2.3 MB", type: "pdf" },
                { name: "Discovery Documents.zip", size: "15.7 MB", type: "zip" },
                { name: "Client Interview.docx", size: "890 KB", type: "doc" }
              ].map((file, index) => (
                <div key={index} className="flex items-center gap-2 p-2 rounded hover:bg-muted/30 transition-smooth">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{file.size}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-2 border-t border-border/50">
              <Button variant="outline" size="sm" className="flex-1">
                <Download className="w-3 h-3 mr-1" />
                Download
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Share className="w-3 h-3 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Archive className="w-3 h-3 mr-1" />
                Archive
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Repeat for other cases... */}
        <Card className="bg-gradient-card shadow-card border-border/50 hover:shadow-professional transition-elegant group">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <FolderOpen className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <CardTitle className="text-base font-semibold">Estate of Williams</CardTitle>
                  <p className="text-sm text-muted-foreground">Case #2023-PR-0112</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">8 files</span>
              <Badge className="bg-warning text-warning-foreground">Review</Badge>
            </div>
            
            <div className="space-y-2">
              {[
                { name: "Will Document.pdf", size: "1.2 MB", type: "pdf" },
                { name: "Estate Inventory.xlsx", size: "456 KB", type: "excel" }
              ].map((file, index) => (
                <div key={index} className="flex items-center gap-2 p-2 rounded hover:bg-muted/30 transition-smooth">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <p className="text-xs text-muted-foreground">{file.size}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2 pt-2 border-t border-border/50">
              <Button variant="outline" size="sm" className="flex-1">
                <Download className="w-3 h-3 mr-1" />
                Download
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Share className="w-3 h-3 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Archive className="w-3 h-3 mr-1" />
                Archive
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}