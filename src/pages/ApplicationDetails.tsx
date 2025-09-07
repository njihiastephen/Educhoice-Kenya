import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, FileText, Calendar, User, School } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "@/components/shared/Logo";

const ApplicationDetails = () => {
  const navigate = useNavigate();
  const { applicationId } = useParams();

  // Mock application data
  const application = {
    id: applicationId,
    institution: "University of Nairobi",
    program: "Computer Science",
    status: "Under Review",
    applicationDate: "2024-10-15",
    reviewDate: null,
    applicationFee: "KES 1,500",
    paymentStatus: "Paid",
    documents: [
      { name: "KCSE Certificate", uploaded: true, verified: true },
      { name: "ID Copy", uploaded: true, verified: true },
      { name: "Personal Statement", uploaded: true, verified: false },
      { name: "Academic Transcripts", uploaded: false, verified: false }
    ],
    timeline: [
      { date: "2024-10-15", event: "Application Submitted", status: "completed" },
      { date: "2024-10-16", event: "Payment Confirmed", status: "completed" },
      { date: "2024-10-17", event: "Documents Under Review", status: "current" },
      { date: null, event: "Interview Scheduled", status: "pending" },
      { date: null, event: "Admission Decision", status: "pending" }
    ],
    personalStatement: "I am passionate about computer science and technology...",
    reviewerNotes: "Strong academic background. Personal statement needs improvement."
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review": return "secondary";
      case "Accepted": return "default";
      case "Rejected": return "destructive";
      case "Interview Scheduled": return "outline";
      default: return "secondary";
    }
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

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{application.institution}</h1>
              <p className="text-xl text-muted-foreground mb-2">{application.program}</p>
              <p className="text-sm text-muted-foreground">Applied on {new Date(application.applicationDate).toLocaleDateString()}</p>
            </div>
            <Badge variant={getStatusColor(application.status)} className="text-lg py-2 px-4">
              {application.status}
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Application Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Application Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {application.timeline.map((event, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${
                        event.status === 'completed' ? 'bg-green-500' :
                        event.status === 'current' ? 'bg-blue-500' :
                        'bg-gray-300'
                      }`} />
                      <div className="flex-1">
                        <p className="font-medium">{event.event}</p>
                        {event.date && (
                          <p className="text-sm text-muted-foreground">
                            {new Date(event.date).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Documents Status */}
            <Card>
              <CardHeader>
                <CardTitle>Documents Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {application.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4" />
                        <span>{doc.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {doc.uploaded ? (
                          <>
                            <Badge variant="outline" className="text-green-600">Uploaded</Badge>
                            {doc.verified ? (
                              <Badge variant="default">Verified</Badge>
                            ) : (
                              <Badge variant="secondary">Pending Review</Badge>
                            )}
                          </>
                        ) : (
                          <Badge variant="destructive">Missing</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personal Statement */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Statement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {application.personalStatement}
                </p>
              </CardContent>
            </Card>

            {/* Reviewer Notes */}
            {application.reviewerNotes && (
              <Card>
                <CardHeader>
                  <CardTitle>Reviewer Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {application.reviewerNotes}
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Application Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <School className="h-4 w-4" />
                  <div>
                    <p className="font-medium">{application.institution}</p>
                    <p className="text-sm text-muted-foreground">{application.program}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4" />
                  <div>
                    <p className="font-medium">Application Date</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(application.applicationDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="h-4 w-4" />
                  <div>
                    <p className="font-medium">Application Fee</p>
                    <p className="text-sm text-muted-foreground">{application.applicationFee}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download Receipt
                </Button>
                <Button className="w-full" variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Upload Additional Documents
                </Button>
                <Button className="w-full">
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ApplicationDetails;