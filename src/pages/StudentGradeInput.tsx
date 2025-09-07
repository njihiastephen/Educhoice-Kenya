import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import Logo from "@/components/shared/Logo";
import { Upload } from "lucide-react";

interface Subject {
  id: string;
  name: string;
  grade: string;
}

const StudentGradeInput = () => {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<Subject[]>([
    { id: '1', name: '', grade: '' },
    { id: '2', name: '', grade: '' },
    { id: '3', name: '', grade: '' },
    { id: '4', name: '', grade: '' },
    { id: '5', name: '', grade: '' },
    { id: '6', name: '', grade: '' },
    { id: '7', name: '', grade: '' }
  ]);
  const [resultsFile, setResultsFile] = useState<File | null>(null);
  const [indexNumber, setIndexNumber] = useState("");

  const availableSubjects = [
    "Mathematics", "English", "Kiswahili", "Biology", "Chemistry", "Physics",
    "Geography", "History", "Christian Religious Education", "Islamic Religious Education",
    "Hindu Religious Education", "Computer Studies", "Business Studies", "Accounting",
    "Economics", "German", "French", "Arabic", "Music", "Art & Design", "Agriculture",
    "Home Science", "Woodwork", "Metalwork", "Building Construction", "Power Mechanics",
    "Electricity", "Drawing & Design", "Aviation Technology", "Nursing"
  ];

  const grades = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E"];

  const addSubject = () => {
    setSubjects([...subjects, { id: Date.now().toString(), name: '', grade: '' }]);
  };

  const updateSubject = (id: string, field: 'name' | 'grade', value: string) => {
    setSubjects(subjects.map(subject => 
      subject.id === id ? { ...subject, [field]: value } : subject
    ));
  };

  const removeSubject = (id: string) => {
    if (subjects.length > 7) {
      setSubjects(subjects.filter(subject => subject.id !== id));
    }
  };

  const calculateGPA = () => {
    const gradePoints: { [key: string]: number } = {
      "A": 12, "A-": 11, "B+": 10, "B": 9, "B-": 8,
      "C+": 7, "C": 6, "C-": 5, "D+": 4, "D": 3, "D-": 2, "E": 1
    };

    const validSubjects = subjects.filter(s => s.name && s.grade);
    if (validSubjects.length === 0) return 0;

    const totalPoints = validSubjects.reduce((sum, subject) => 
      sum + (gradePoints[subject.grade] || 0), 0
    );

    return (totalPoints / validSubjects.length).toFixed(2);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setResultsFile(file);
      toast({
        title: "File uploaded",
        description: `${file.name} has been uploaded successfully.`
      });
    }
  };

  const handleSubmit = () => {
    const validSubjects = subjects.filter(s => s.name && s.grade);
    
    if (validSubjects.length < 7) {
      toast({
        title: "Incomplete Information",
        description: "Please enter at least 7 subjects with grades.",
        variant: "destructive"
      });
      return;
    }

    const gpa = calculateGPA();
    
    // Store data in localStorage for now
    localStorage.setItem('studentGrades', JSON.stringify({
      subjects: validSubjects,
      gpa,
      indexNumber,
      resultsFile: resultsFile?.name || null
    }));

    toast({
      title: "Grades saved successfully!",
      description: `Your GPA is ${gpa}. Redirecting to dashboard...`
    });

    setTimeout(() => {
      navigate('/student-dashboard');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <Logo />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Enter Your KCSE Results</CardTitle>
              <CardDescription>
                Please enter your KCSE results to get personalized course recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Index Number */}
              <div className="space-y-2">
                <Label htmlFor="indexNumber">KCSE Index Number</Label>
                <Input
                  id="indexNumber"
                  placeholder="e.g., 12345678/001/2023"
                  value={indexNumber}
                  onChange={(e) => setIndexNumber(e.target.value)}
                />
              </div>

              {/* Subjects and Grades */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold">Subjects and Grades (Minimum 7 required)</Label>
                {subjects.map((subject, index) => (
                  <div key={subject.id} className="flex gap-4 items-center">
                    <div className="flex-1">
                      <Select 
                        value={subject.name} 
                        onValueChange={(value) => updateSubject(subject.id, 'name', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableSubjects.map(subjectName => (
                            <SelectItem key={subjectName} value={subjectName}>
                              {subjectName}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-24">
                      <Select 
                        value={subject.grade} 
                        onValueChange={(value) => updateSubject(subject.id, 'grade', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Grade" />
                        </SelectTrigger>
                        <SelectContent>
                          {grades.map(grade => (
                            <SelectItem key={grade} value={grade}>
                              {grade}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    {subjects.length > 7 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeSubject(subject.id)}
                      >
                        Remove
                      </Button>
                    )}
                  </div>
                ))}
                
                <Button variant="outline" onClick={addSubject}>
                  Add Another Subject
                </Button>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="resultsFile">Upload KCSE Results Slip (Optional)</Label>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <div className="mt-4">
                      <Label htmlFor="resultsFile" className="cursor-pointer">
                        <span className="text-primary font-medium">Click to upload</span>
                        {" "}or drag and drop
                      </Label>
                      <Input
                        id="resultsFile"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      PDF, JPG, PNG up to 10MB
                    </p>
                    {resultsFile && (
                      <p className="text-sm text-primary mt-2">
                        Uploaded: {resultsFile.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* GPA Display */}
              {subjects.some(s => s.name && s.grade) && (
                <div className="bg-primary/5 p-4 rounded-lg">
                  <p className="text-lg font-semibold">
                    Calculated GPA: <span className="text-primary">{calculateGPA()}</span>
                  </p>
                </div>
              )}

              <div className="flex gap-4">
                <Button onClick={handleSubmit} className="flex-1">
                  Save and Continue to Dashboard
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/student-dashboard')}
                >
                  Skip for Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default StudentGradeInput;