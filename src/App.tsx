import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import StudentDashboard from "./pages/StudentDashboard";
import StudentGradeInput from "./pages/StudentGradeInput";
import Applications from "./pages/Applications";
import BrowsePrograms from "./pages/BrowsePrograms";
import Notifications from "./pages/Notifications";
import InstitutionDashboard from "./pages/InstitutionDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Landing from "./pages/Landing";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import ApplicationGuide from "./pages/ApplicationGuide";
import ConnectStudents from "./pages/ConnectStudents";
import Deadlines from "./pages/Deadlines";
import ApplyProgram from "./pages/ApplyProgram";
import ApplicationDetails from "./pages/ApplicationDetails";
import ProfileSettings from "./pages/ProfileSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/student-grade-input" element={<StudentGradeInput />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/applications/:applicationId" element={<ApplicationDetails />} />
          <Route path="/browse-programs" element={<BrowsePrograms />} />
          <Route path="/apply/:programId" element={<ApplyProgram />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/application-guide" element={<ApplicationGuide />} />
          <Route path="/connect-students" element={<ConnectStudents />} />
          <Route path="/deadlines" element={<Deadlines />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/institution-dashboard" element={<InstitutionDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
