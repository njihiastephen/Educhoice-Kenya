import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Logo from "@/components/shared/Logo";
import { Bell, CheckCheck, Trash2, Settings, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();
  const notifications = [
    // Empty array to show empty state
  ];

  const EmptyState = () => (
    <div className="text-center py-12">
      <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
        <Bell className="h-12 w-12 text-muted-foreground" />
      </div>
      <h3 className="text-xl font-semibold mb-2">No notifications yet</h3>
      <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
        When you receive updates about your applications, deadlines, or other important information, they'll appear here.
      </p>
      <Button variant="outline">
        <Settings className="h-4 w-4 mr-2" />
        Notification Settings
      </Button>
    </div>
  );

  const NotificationCard = ({ notification }: { notification: any }) => (
    <Card className={`${notification.read ? '' : 'border-primary/50 bg-primary/5'}`}>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold">{notification.title}</h4>
              {!notification.read && (
                <Badge variant="default" className="text-xs">New</Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
            <p className="text-xs text-muted-foreground">{notification.time}</p>
          </div>
          <div className="flex gap-1">
            <Button size="sm" variant="ghost">
              <CheckCheck className="h-4 w-4" />
            </Button>
            <Button size="sm" variant="ghost">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

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
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Notifications</h1>
              <p className="text-muted-foreground">Stay updated with your application status and important announcements</p>
            </div>
            {notifications.length > 0 && (
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  Mark all as read
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {notifications.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-4">
              {notifications.map((notification, index) => (
                <NotificationCard key={index} notification={notification} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Notifications;