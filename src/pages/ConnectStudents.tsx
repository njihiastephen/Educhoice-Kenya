import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, MessageCircle, Users, School } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/shared/Logo";

const ConnectStudents = () => {
  const navigate = useNavigate();

  const students = [
    {
      name: "Alice Wanjiku",
      school: "Alliance High School",
      grade: "A-",
      interests: ["Computer Science", "Engineering"],
      county: "Nairobi"
    },
    {
      name: "Brian Ochieng",
      school: "Mangu High School", 
      grade: "B+",
      interests: ["Business", "Economics"],
      county: "Kiambu"
    },
    {
      name: "Catherine Njoki",
      school: "Kenya High School",
      grade: "A",
      interests: ["Medicine", "Biology"],
      county: "Nairobi"
    },
    {
      name: "David Kimani",
      school: "Starehe Boys Centre",
      grade: "B+",
      interests: ["Law", "Political Science"],
      county: "Nairobi"
    }
  ];

  const studyGroups = [
    {
      name: "KCSE 2024 Preparation",
      members: 156,
      description: "Final preparation for KCSE exams",
      subject: "General"
    },
    {
      name: "Engineering Aspirants",
      members: 89,
      description: "Connect with future engineers",
      subject: "Engineering"
    },
    {
      name: "Medical School Bound",
      members: 67,
      description: "Support group for medical aspirants",
      subject: "Medicine"
    },
    {
      name: "Business & Economics",
      members: 112,
      description: "Discuss business opportunities",
      subject: "Business"
    }
  ];

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
          <h1 className="text-3xl font-bold mb-2">Connect with Students</h1>
          <p className="text-muted-foreground">Network with fellow students and join study groups</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search students or groups..." 
              className="max-w-md pl-10"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Students */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Students Near You</h2>
            <div className="space-y-4">
              {students.map((student, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold">{student.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <School className="h-4 w-4" />
                          {student.school}
                        </p>
                        <p className="text-sm text-muted-foreground">{student.county} County</p>
                      </div>
                      <Badge variant="outline">{student.grade}</Badge>
                    </div>
                    <div className="mb-3">
                      <p className="text-sm font-medium mb-1">Interests:</p>
                      <div className="flex flex-wrap gap-1">
                        {student.interests.map((interest, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {interest}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button size="sm" className="w-full">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Connect
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Study Groups */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Study Groups</h2>
            <div className="space-y-4">
              {studyGroups.map((group, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                        <CardDescription>{group.description}</CardDescription>
                      </div>
                      <Badge variant="outline">
                        <Users className="h-3 w-3 mr-1" />
                        {group.members}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge>{group.subject}</Badge>
                      <Button size="sm">Join Group</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ConnectStudents;