import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Logo from "@/components/shared/Logo";
import { Search, Filter, Eye, Download, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Applications = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const applications = [
    { 
      id: "1",
      institution: "University of Nairobi", 
      program: "Computer Science", 
      status: "Under Review", 
      date: "Applied 2 weeks ago",
      applicationFee: "KES 1,500",
      documents: ["Academic Transcripts", "Personal Statement", "ID Copy"]
    },
    { 
      id: "2",
      institution: "Kenyatta University", 
      program: "Business Administration", 
      status: "Accepted", 
      date: "Applied 3 weeks ago",
      applicationFee: "KES 1,200",
      documents: ["Academic Transcripts", "Personal Statement", "Birth Certificate"]
    },
    { 
      id: "3",
      institution: "Strathmore University", 
      program: "Information Technology", 
      status: "Interview Scheduled", 
      date: "Applied 1 month ago",
      applicationFee: "KES 2,000",
      documents: ["Academic Transcripts", "Personal Statement", "Portfolio"]
    },
    { 
      id: "4",
      institution: "JKUAT", 
      program: "Engineering", 
      status: "Pending Documents", 
      date: "Applied 1 week ago",
      applicationFee: "KES 1,800",
      documents: ["Academic Transcripts"]
    },
    { 
      id: "5",
      institution: "Moi University", 
      program: "Medicine", 
      status: "Rejected", 
      date: "Applied 2 months ago",
      applicationFee: "KES 2,500",
      documents: ["Academic Transcripts", "Personal Statement", "Medical Certificate"]
    }
  ];

  const filteredApplications = applications.filter(app => {
    const matchesSearch = searchQuery === "" || 
      app.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.program.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === "all" || app.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepted": return "default";
      case "Under Review": return "secondary";
      case "Interview Scheduled": return "outline";
      case "Pending Documents": return "destructive";
      case "Rejected": return "destructive";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Logo />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Applications</h1>
          <p className="text-muted-foreground">Track and manage all your university applications</p>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search applications..." 
              className="max-w-sm pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select 
            className="px-3 py-2 border rounded-md"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="Under Review">Under Review</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Pending Documents">Pending Documents</option>
          </select>
        </div>

        {/* Applications Grid */}
        <div className="grid gap-6">
          {filteredApplications.map((app) => (
            <Card key={app.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{app.institution}</h3>
                    <p className="text-lg text-muted-foreground mb-2">{app.program}</p>
                    <p className="text-sm text-muted-foreground">{app.date}</p>
                    <p className="text-sm font-medium text-primary">Fee: {app.applicationFee}</p>
                  </div>
                  <Badge variant={getStatusColor(app.status)}>
                    {app.status}
                  </Badge>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Documents Submitted:</h4>
                  <div className="flex flex-wrap gap-2">
                    {app.documents.map((doc, index) => (
                      <Badge key={index} variant="outline">{doc}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => navigate(`/applications/${app.id}`)}
                  >
                    <Eye className="h-4 w-4" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Receipt
                  </Button>
                  {app.status === "Pending Documents" && (
                    <Button size="sm" className="gap-2">
                      Upload Documents
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Applications;