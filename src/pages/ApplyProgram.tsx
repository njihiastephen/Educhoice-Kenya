import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Upload, FileText, CreditCard } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "@/components/shared/Logo";
import { toast } from "sonner";

const ApplyProgram = () => {
  const navigate = useNavigate();
  const { programId } = useParams();
  const [applicationData, setApplicationData] = useState({
    personalStatement: "",
    documents: [] as File[],
    additionalInfo: ""
  });

  // Mock program data - in real app this would come from API
  const program = {
    id: programId,
    title: "Computer Science",
    institution: "University of Nairobi",
    fee: "KES 1,500",
    requirements: ["KCSE Certificate", "ID Copy", "Personal Statement", "Academic Transcripts"]
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setApplicationData(prev => ({
      ...prev,
      documents: [...prev.documents, ...files]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully!");
    navigate("/applications");
  };

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

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Apply for {program.title}</h1>
          <p className="text-muted-foreground">{program.institution}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Statement */}
              <Card>
                <CardHeader>
                  <CardTitle>Personal Statement</CardTitle>
                  <CardDescription>Write a compelling personal statement (max 500 words)</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Tell us why you want to pursue this program..."
                    value={applicationData.personalStatement}
                    onChange={(e) => setApplicationData(prev => ({
                      ...prev,
                      personalStatement: e.target.value
                    }))}
                    className="min-h-32"
                    required
                  />
                </CardContent>
              </Card>

              {/* Document Upload */}
              <Card>
                <CardHeader>
                  <CardTitle>Required Documents</CardTitle>
                  <CardDescription>Upload all required documents</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="documents">Upload Documents</Label>
                    <Input
                      id="documents"
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                      className="mt-2"
                    />
                  </div>
                  
                  {applicationData.documents.length > 0 && (
                    <div>
                      <h4 className="font-medium mb-2">Uploaded Files:</h4>
                      <ul className="space-y-1">
                        {applicationData.documents.map((file, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <FileText className="h-4 w-4" />
                            {file.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Additional Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Additional Information</CardTitle>
                  <CardDescription>Any additional information you'd like to share</CardDescription>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Optional additional information..."
                    value={applicationData.additionalInfo}
                    onChange={(e) => setApplicationData(prev => ({
                      ...prev,
                      additionalInfo: e.target.value
                    }))}
                  />
                </CardContent>
              </Card>

              <Button type="submit" className="w-full" size="lg">
                Submit Application
              </Button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Application Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium">{program.title}</h4>
                  <p className="text-sm text-muted-foreground">{program.institution}</p>
                </div>
                <div>
                  <h4 className="font-medium">Application Fee</h4>
                  <p className="text-lg font-bold text-primary">{program.fee}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {program.requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      {req}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Pay Application Fee
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplyProgram;