import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Building2, Shield, Users } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

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
      {/* Hero Section with Background Image */}
      <div 
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})` 
        }}
      >
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Parallel Students Placement System Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8">
              <GraduationCap className="h-5 w-5 text-white" />
              <span className="text-white font-medium">Parallel Students Placement System</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
              EduChoice
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
              Kenya
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover your perfect university match through our intelligent placement system. Access 
              parallel programs, compare options, and secure your academic future with confidence.
            </p>
            
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-green-600 hover:bg-green-700 text-white"
                onClick={() => setShowRoleSelection(true)}
              >
                <span className="mr-2">→</span>
                Start Application
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16 bg-background">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Why Choose EduChoice Kenya?</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide comprehensive tools and resources for students, institutions, and administrators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-10 w-10 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-4">For Students</h4>
            <p className="text-muted-foreground">
              Discover programs, track applications, and connect with institutions that match your goals.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Building2 className="h-10 w-10 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-4">For Institutions</h4>
            <p className="text-muted-foreground">
              Manage programs, track applications, and connect with qualified prospective students.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-4">Comprehensive Support</h4>
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