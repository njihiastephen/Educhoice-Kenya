import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, FileText, Calendar, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/shared/Logo";

const ApplicationGuide = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: "Prepare Your Documents",
      description: "Gather all required documents including KCSE results, transcripts, and identification",
      icon: FileText,
      requirements: ["KCSE Certificate", "ID Copy", "Birth Certificate", "Passport Photos"]
    },
    {
      title: "Research Programs",
      description: "Browse available programs and check admission requirements",
      icon: CheckCircle,
      requirements: ["Check minimum grades", "Review program details", "Compare tuition fees", "Check application deadlines"]
    },
    {
      title: "Submit Application",
      description: "Complete the online application form and upload required documents",
      icon: Upload,
      requirements: ["Fill application form", "Upload documents", "Pay application fee", "Submit before deadline"]
    },
    {
      title: "Track Progress",
      description: "Monitor your application status and respond to any requests",
      icon: Calendar,
      requirements: ["Check application status", "Respond to queries", "Attend interviews if required", "Accept admission offers"]
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
          <h1 className="text-3xl font-bold mb-2">Application Guide</h1>
          <p className="text-muted-foreground">Step-by-step guide to applying for university programs</p>
        </div>

        <div className="grid gap-6">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle>Step {index + 1}: {step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {step.requirements.map((req, reqIndex) => (
                    <li key={reqIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Contact our support team for assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Email Support</h4>
                  <p className="text-sm text-muted-foreground">support@educhoice.ke</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Phone Support</h4>
                  <p className="text-sm text-muted-foreground">+254 700 123 456</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ApplicationGuide;