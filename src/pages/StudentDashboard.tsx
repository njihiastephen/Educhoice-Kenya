import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Users, TrendingUp, Calendar, Bell, Search, Star } from "lucide-react";

const StudentDashboard = () => {
  const stats = [
    { title: "Applications", value: "5", icon: BookOpen, color: "bg-blue-500" },
    { title: "Accepted", value: "2", icon: GraduationCap, color: "bg-green-500" },
    { title: "Wishlist", value: "8", icon: Star, color: "bg-yellow-500" },
    { title: "Progress", value: "67%", icon: TrendingUp, color: "bg-orange-500" },
  ];

  const applications = [
    { institution: "University of Nairobi", program: "Computer Science", status: "Under Review", date: "Applied 2 weeks ago" },
    { institution: "Kenyatta University", program: "Business Administration", status: "Accepted", date: "Applied 3 weeks ago" },
    { institution: "Strathmore University", program: "Information Technology", status: "Interview Scheduled", date: "Applied 1 month ago" },
  ];

  const recommendations = [
    { institution: "JKUAT", program: "Engineering", match: "95%", fee: "KES 200,000/year" },
    { institution: "Moi University", program: "Medicine", match: "89%", fee: "KES 300,000/year" },
    { institution: "Egerton University", program: "Agriculture", match: "82%", fee: "KES 150,000/year" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">EduChoice Kenya - Student Portal</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">JS</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, Jane!</h2>
          <p className="text-muted-foreground">Let's continue your educational journey</p>
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
              <CardTitle>Your Applications</CardTitle>
              <CardDescription>Track your application status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {applications.map((app, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{app.institution}</h4>
                    <p className="text-sm text-muted-foreground">{app.program}</p>
                    <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
                  </div>
                  <Badge variant={
                    app.status === "Accepted" ? "default" : 
                    app.status === "Under Review" ? "secondary" : "outline"
                  }>
                    {app.status}
                  </Badge>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                View All Applications
              </Button>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended for You</CardTitle>
              <CardDescription>Programs that match your profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{rec.institution}</h4>
                      <Badge variant="outline">{rec.match} match</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{rec.program}</p>
                    <p className="text-sm text-green-600 font-medium">{rec.fee}</p>
                  </div>
                  <Button size="sm">Apply</Button>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                <Search className="h-4 w-4 mr-2" />
                Browse All Programs
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks to help you get started</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Button className="h-auto p-4 flex flex-col items-center gap-2">
                  <Search className="h-6 w-6" />
                  <span>Find Programs</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  <span>Application Guide</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Users className="h-6 w-6" />
                  <span>Connect with Students</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  <span>Deadlines</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentDashboard;