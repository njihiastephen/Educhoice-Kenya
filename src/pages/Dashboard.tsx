import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Users, TrendingUp, Calendar, Bell } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { title: "Active Courses", value: "12", icon: BookOpen, color: "bg-blue-500" },
    { title: "Completed", value: "8", icon: GraduationCap, color: "bg-green-500" },
    { title: "Study Groups", value: "3", icon: Users, color: "bg-purple-500" },
    { title: "Progress", value: "67%", icon: TrendingUp, color: "bg-orange-500" },
  ];

  const recentCourses = [
    { title: "Computer Science Fundamentals", progress: 85, status: "In Progress" },
    { title: "Mathematics for Engineers", progress: 92, status: "Near Completion" },
    { title: "Digital Marketing Basics", progress: 45, status: "In Progress" },
    { title: "Project Management", progress: 100, status: "Completed" },
  ];

  const upcomingDeadlines = [
    { title: "CS Assignment 3", date: "Tomorrow", type: "Assignment" },
    { title: "Math Midterm Exam", date: "Next Week", type: "Exam" },
    { title: "Marketing Project", date: "2 days", type: "Project" },
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
              <h1 className="text-2xl font-bold">EduChoice Kenya</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome back, John!</h2>
          <p className="text-muted-foreground">Ready to continue your learning journey?</p>
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
          {/* Recent Courses */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Courses</CardTitle>
              <CardDescription>Continue where you left off</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentCourses.map((course, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium">{course.title}</h4>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex-1 bg-secondary rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all" 
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">{course.progress}%</span>
                    </div>
                  </div>
                  <Badge variant={course.status === "Completed" ? "default" : "secondary"}>
                    {course.status}
                  </Badge>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                View All Courses
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Deadlines */}
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Deadlines</CardTitle>
              <CardDescription>Stay on track with your assignments</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingDeadlines.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">Due {item.date}</p>
                  </div>
                  <Badge variant="outline">{item.type}</Badge>
                </div>
              ))}
              <Button className="w-full" variant="outline">
                View Calendar
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Get started with common tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-auto p-4 flex flex-col items-center gap-2">
                  <BookOpen className="h-6 w-6" />
                  <span>Browse Courses</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Users className="h-6 w-6" />
                  <span>Join Study Group</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Calendar className="h-6 w-6" />
                  <span>Schedule Study Session</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;