import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Building2, TrendingUp, Calendar, Bell, Settings, AlertTriangle } from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { title: "Total Users", value: "2,847", icon: Users, color: "bg-blue-500" },
    { title: "Institutions", value: "45", icon: Building2, color: "bg-green-500" },
    { title: "Active Applications", value: "1,234", icon: TrendingUp, color: "bg-purple-500" },
    { title: "System Health", value: "99.8%", icon: Shield, color: "bg-orange-500" },
  ];

  const recentActivity = [
    { action: "New Institution Registration", entity: "Strathmore University", time: "2 minutes ago", type: "institution" },
    { action: "Bulk Student Import", entity: "Kenyatta University", time: "15 minutes ago", type: "data" },
    { action: "System Backup Completed", entity: "Database", time: "1 hour ago", type: "system" },
    { action: "Policy Update", entity: "Admission Requirements", time: "3 hours ago", type: "policy" },
  ];

  const systemAlerts = [
    { type: "warning", message: "High application volume detected", details: "Consider scaling resources", time: "5 minutes ago" },
    { type: "info", message: "Weekly backup scheduled", details: "Starting at 2:00 AM", time: "1 hour ago" },
    { type: "error", message: "Email service timeout", details: "Resolved automatically", time: "2 hours ago", resolved: true },
  ];

  const userStats = [
    { type: "Students", count: 2156, growth: "+12%", status: "active" },
    { type: "Institutions", count: 45, growth: "+3%", status: "active" },
    { type: "Administrators", count: 8, growth: "0%", status: "active" },
    { type: "Pending Approvals", count: 23, growth: "-5%", status: "pending" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold">EduChoice Kenya - Admin Portal</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-primary-foreground">AD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">System Overview</h2>
          <p className="text-muted-foreground">Monitor and manage the EduChoice Kenya platform</p>
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
          {/* System Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                System Alerts
              </CardTitle>
              <CardDescription>Important system notifications and status updates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {systemAlerts.map((alert, index) => (
                <div key={index} className={`p-4 border rounded-lg ${alert.resolved ? 'opacity-60' : ''}`}>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant={
                      alert.type === "error" ? "destructive" : 
                      alert.type === "warning" ? "secondary" : "outline"
                    }>
                      {alert.type.toUpperCase()}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                  <h4 className="font-medium text-sm">{alert.message}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{alert.details}</p>
                  {alert.resolved && (
                    <Badge variant="outline" className="mt-2 text-xs">Resolved</Badge>
                  )}
                </div>
              ))}
              <Button className="w-full" variant="outline" size="sm">
                View All Alerts
              </Button>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest system and user activities</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div className={`p-2 rounded-lg ${
                    activity.type === "institution" ? "bg-green-100" :
                    activity.type === "data" ? "bg-blue-100" :
                    activity.type === "system" ? "bg-purple-100" : "bg-orange-100"
                  }`}>
                    {activity.type === "institution" ? <Building2 className="h-4 w-4 text-green-600" /> :
                     activity.type === "data" ? <Users className="h-4 w-4 text-blue-600" /> :
                     activity.type === "system" ? <Shield className="h-4 w-4 text-purple-600" /> :
                     <Settings className="h-4 w-4 text-orange-600" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{activity.action}</h4>
                    <p className="text-sm text-muted-foreground">{activity.entity}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
              <Button className="w-full" variant="outline" size="sm">
                View Activity Log
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* User Management Overview */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Overview of platform users and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {userStats.map((user, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-sm">{user.type}</h4>
                      <Badge variant={user.status === "pending" ? "secondary" : "default"}>
                        {user.growth}
                      </Badge>
                    </div>
                    <p className="text-2xl font-bold">{user.count}</p>
                    <p className="text-xs text-muted-foreground">
                      {user.status === "pending" ? "Awaiting approval" : "Active users"}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Button className="h-auto p-4 flex flex-col items-center gap-2">
                  <Users className="h-6 w-6" />
                  <span>Manage Users</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Building2 className="h-6 w-6" />
                  <span>Institution Approvals</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <Shield className="h-6 w-6" />
                  <span>Security Settings</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  <span>Analytics</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;