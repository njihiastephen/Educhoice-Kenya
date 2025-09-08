import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Building2, Shield, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${heroBackground})` 
        }}
      >
        {/* Top Badge */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-6 py-3 text-sm font-medium">
            Parallel Students Placement System
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto px-4">
          {/* Main Title */}
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-2">
            EduChoice
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold text-green-600 mb-12">
            Kenya
          </h2>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Discover your perfect university match through our intelligent placement system. Access 
            parallel programs, compare options, and secure your academic future with confidence.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="text-xl px-10 py-8 h-auto bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setShowRoleSelection(true)}
          >
            Start Application
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;