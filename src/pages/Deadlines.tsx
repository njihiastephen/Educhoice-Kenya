import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/shared/Logo";

const Deadlines = () => {
  const navigate = useNavigate();

  const deadlines = [
    {
      institution: "University of Nairobi",
      program: "Computer Science",
      deadline: "2024-12-15",
      daysLeft: 45,
      status: "upcoming",
      applicationFee: "KES 1,500"
    },
    {
      institution: "Kenyatta University", 
      program: "Business Administration",
      deadline: "2024-12-20",
      daysLeft: 50,
      status: "upcoming",
      applicationFee: "KES 1,200"
    },
    {
      institution: "Strathmore University",
      program: "Information Technology", 
      deadline: "2024-11-30",
      daysLeft: 30,
      status: "urgent",
      applicationFee: "KES 2,000"
    },
    {
      institution: "JKUAT",
      program: "Engineering",
      deadline: "2024-11-25",
      daysLeft: 25,
      status: "urgent",
      applicationFee: "KES 1,800"
    },
    {
      institution: "Moi University",
      program: "Medicine",
      deadline: "2024-11-20",
      daysLeft: 20,
      status: "critical", 
      applicationFee: "KES 2,500"
    },
    {
      institution: "Egerton University",
      program: "Agriculture",
      deadline: "2025-01-10",
      daysLeft: 70,
      status: "upcoming",
      applicationFee: "KES 1,000"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical": return "destructive";
      case "urgent": return "secondary";
      case "upcoming": return "default";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "critical": return <AlertCircle className="h-4 w-4" />;
      case "urgent": return <Clock className="h-4 w-4" />;
      case "upcoming": return <Calendar className="h-4 w-4" />;
      default: return <Calendar className="h-4 w-4" />;
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
          <h1 className="text-3xl font-bold mb-2">Application Deadlines</h1>
          <p className="text-muted-foreground">Track important application deadlines and stay organized</p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-destructive/10 rounded-lg">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-destructive">1</p>
                  <p className="text-sm text-muted-foreground">Critical (≤20 days)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Clock className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-500">2</p>
                  <p className="text-sm text-muted-foreground">Urgent (≤30 days)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">3</p>
                  <p className="text-sm text-muted-foreground">Upcoming</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Deadlines List */}
        <div className="space-y-4">
          {deadlines.map((deadline, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{deadline.institution}</h3>
                    <p className="text-lg text-muted-foreground mb-2">{deadline.program}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Deadline: {new Date(deadline.deadline).toLocaleDateString()}</span>
                      <span>Fee: {deadline.applicationFee}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={getStatusColor(deadline.status)} className="gap-1">
                      {getStatusIcon(deadline.status)}
                      {deadline.daysLeft} days left
                    </Badge>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm">Apply Now</Button>
                  <Button size="sm" variant="outline">Set Reminder</Button>
                  <Button size="sm" variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Deadlines;