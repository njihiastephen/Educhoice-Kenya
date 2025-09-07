import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Building2, Shield, Users } from "lucide-react";

const Welcome = () => {
  const [showRoleSelection, setShowRoleSelection] = useState(false);
  const navigate = useNavigate();

  const roles = [
    {
      id: "student",
      title: "Student",
      description: "Access courses, track progress, and join study groups",
      icon: GraduationCap,
      color: "bg-blue-500",
      path: "/student-dashboard"
    },
    {
      id: "institution",
      title: "Institution", 
      description: "Manage courses, track student progress, and create programs",
      icon: Building2,
      color: "bg-green-500",
      path: "/institution-dashboard"
    },
    {
      id: "admin",
      title: "Administrator",
      description: "System administration, user management, and platform oversight",
      icon: Shield,
      color: "bg-red-500", 
      path: "/admin-dashboard"
    }
  ];

  const handleRoleSelect = (path: string) => {
    navigate(path);
  };

  if (showRoleSelection) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-primary-foreground" />
              </div>
              <h1 className="text-3xl font-bold">EduChoice Kenya</h1>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Choose Your Role</h2>
            <p className="text-muted-foreground">Select how you'll be using the platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role) => (
              <Card key={role.id} className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-2">
                  <div className={`w-16 h-16 ${role.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <role.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">{role.description}</CardDescription>
                  <Button 
                    onClick={() => handleRoleSelect(role.path)}
                    className="w-full"
                  >
                    Continue as {role.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button 
              variant="ghost" 
              onClick={() => setShowRoleSelection(false)}
            >
              ← Back
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-16 w-16 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="h-9 w-9 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">EduChoice Kenya</h1>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Your Gateway to Quality Education
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with top educational institutions, explore diverse programs, and make informed decisions about your academic future.
            </p>
            
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => setShowRoleSelection(true)}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">Why Choose EduChoice Kenya?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive tools and resources for students, institutions, and administrators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">For Students</h4>
            <p className="text-muted-foreground">
              Discover programs, track applications, and connect with institutions that match your goals.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Building2 className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">For Institutions</h4>
            <p className="text-muted-foreground">
              Manage programs, track applications, and connect with qualified prospective students.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Comprehensive Support</h4>
            <p className="text-muted-foreground">
              Get guidance, resources, and support throughout your educational journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;