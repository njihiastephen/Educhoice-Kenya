import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, FileText, TrendingUp, Calendar, Bell, Plus, Eye } from "lucide-react";

const InstitutionDashboard = () => {
  const stats = [
    { title: "Total Programs", value: "24", icon: FileText, color: "bg-blue-500" },
    { title: "Applications", value: "156", icon: Users, color: "bg-green-500" },
    { title: "Enrolled Students", value: "1,240", icon: Users, color: "bg-purple-500" },
    { title: "Acceptance Rate", value: "78%", icon: TrendingUp, color: "bg-orange-500" },
  ];

  const recentApplications = [
    { student: "John Doe", program: "Computer Science", gpa: "3.8", status: "Pending Review", date: "2 hours ago" },
    { student: "Jane Smith", program: "Business Administration", gpa: "3.6", status: "Accepted", date: "5 hours ago" },
    { student: "Mike Johnson", program: "Engineering", gpa: "3.9", status: "Interview Scheduled", date: "1 day ago" },
    { student: "Sarah Wilson", program: "Medicine", gpa: "3.95", status: "Under Review", date: "2 days ago" },
  ];

  const programs = [
    { name: "Computer Science", applications: 45, enrolled: 120, capacity: 150, status: "Open" },
    { name: "Business Administration", applications: 38, enrolled: 98, capacity: 100, status: "Almost Full" },
    { name: "Engineering", applications: 52, enrolled: 85, capacity: 100, status: "Open" },
    { name: "Medicine", applications: 21, enrolled: 30, capacity: 30, status: "Full" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">EduChoice Kenya - Institution Portal</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">UN</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome, University of Nairobi</h2>
          <p className="text-muted-foreground">Manage your programs and student applications</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Applications */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Applications</CardTitle>
                  <CardDescription>Latest student applications requiring attention</CardDescription>
                </div>
                <Button size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentApplications.map((app, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{app.student}</h4>
                    <p className="text-sm text-muted-foreground">{app.program}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                      <span>GPA: {app.gpa}</span>
                      <span>{app.date}</span>
                    </div>
                  </div>
                  <Badge variant={
                    app.status === "Accepted" ? "default" : 
                    app.status === "Pending Review" ? "secondary" : "outline"
                  }>
                    {app.status}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Program Overview */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Program Overview</CardTitle>
                  <CardDescription>Current enrollment and capacity status</CardDescription>
                </div>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Program
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {programs.map((program, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{program.name}</h4>
                    <Badge variant={
                      program.status === "Full" ? "destructive" : 
                      program.status === "Almost Full" ? "secondary" : "default"
                    }>
                      {program.status}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Applications</p>
                      <p className="font-medium">{program.applications}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Enrolled</p>
                      <p className="font-medium">{program.enrolled}/{program.capacity}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Capacity</p>
                      <div className="w-full bg-secondary rounded-full h-2 mt-1">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all" 
                          style={{ width: `${(program.enrolled / program.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your institution efficiently</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Button className="h-auto p-4 flex flex-col items-center gap-2">
                  <Plus className="h-6 w-6" />
                  <span>Create Program</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Users className="h-6 w-6" />
                  <span>Review Applications</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <FileText className="h-6 w-6" />
                  <span>Generate Reports</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  <span>Admission Calendar</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default InstitutionDashboard;