import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Logo from "@/components/shared/Logo";
import { Search, Filter, MapPin, Clock, DollarSign } from "lucide-react";

const BrowsePrograms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const programs = [
    {
      id: "1",
      institution: "University of Nairobi",
      program: "Computer Science",
      category: "Technology",
      location: "Nairobi",
      duration: "4 years",
      tuitionFee: "KES 200,000/year",
      applicationFee: "KES 1,500",
      requirements: "B+ (Plus) and above",
      description: "Comprehensive computer science program covering software development, algorithms, and data structures.",
      availableSlots: 50,
      applicationDeadline: "July 31, 2024"
    },
    {
      id: "2",
      institution: "Kenyatta University",
      program: "Business Administration",
      category: "Business",
      location: "Nairobi",
      duration: "4 years",
      tuitionFee: "KES 180,000/year",
      applicationFee: "KES 1,200",
      requirements: "C+ (Plus) and above",
      description: "Business administration program focusing on management, marketing, and finance.",
      availableSlots: 75,
      applicationDeadline: "August 15, 2024"
    },
    {
      id: "3",
      institution: "Strathmore University",
      program: "Information Technology",
      category: "Technology",
      location: "Nairobi",
      duration: "4 years",
      tuitionFee: "KES 350,000/year",
      applicationFee: "KES 2,000",
      requirements: "B (Plain) and above",
      description: "Modern IT program with focus on cybersecurity, cloud computing, and mobile development.",
      availableSlots: 30,
      applicationDeadline: "June 30, 2024"
    },
    {
      id: "4",
      institution: "JKUAT",
      program: "Engineering (Mechanical)",
      category: "Engineering",
      location: "Kiambu",
      duration: "5 years",
      tuitionFee: "KES 220,000/year",
      applicationFee: "KES 1,800",
      requirements: "B+ (Plus) and above with Math & Physics",
      description: "Mechanical engineering program with strong practical component and industry partnerships.",
      availableSlots: 40,
      applicationDeadline: "July 20, 2024"
    },
    {
      id: "5",
      institution: "Moi University",
      program: "Medicine",
      category: "Health Sciences",
      location: "Eldoret",
      duration: "6 years",
      tuitionFee: "KES 400,000/year",
      applicationFee: "KES 2,500",
      requirements: "A- (Minus) and above with Biology, Chemistry, Physics",
      description: "Comprehensive medical program with clinical rotations in teaching hospitals.",
      availableSlots: 25,
      applicationDeadline: "May 31, 2024"
    },
    {
      id: "6",
      institution: "Maseno University",
      program: "Education (Science)",
      category: "Education",
      location: "Kisumu",
      duration: "4 years",
      tuitionFee: "KES 150,000/year",
      applicationFee: "KES 1,000",
      requirements: "C+ (Plus) and above with relevant subjects",
      description: "Teacher training program specializing in science education and pedagogy.",
      availableSlots: 60,
      applicationDeadline: "August 31, 2024"
    }
  ];

  const categories = ["Technology", "Business", "Engineering", "Health Sciences", "Education", "Arts", "Agriculture"];
  const locations = ["Nairobi", "Kiambu", "Eldoret", "Kisumu", "Mombasa", "Nakuru", "Thika"];

  const filteredPrograms = programs.filter(program => {
    const matchesSearch = program.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         program.institution.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || program.category === categoryFilter;
    const matchesLocation = !locationFilter || program.location === locationFilter;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <Logo />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Browse Programs</h1>
          <p className="text-muted-foreground">Discover university programs and find your perfect match</p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search programs or universities..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger>
              <SelectValue placeholder="All Locations" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All Locations</SelectItem>
              {locations.map(location => (
                <SelectItem key={location} value={location}>{location}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={() => {
            setSearchTerm("");
            setCategoryFilter("");
            setLocationFilter("");
          }}>
            Clear Filters
          </Button>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPrograms.length} of {programs.length} programs
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-6">
          {filteredPrograms.map((program) => (
            <Card key={program.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{program.program}</h3>
                      <Badge variant="outline">{program.category}</Badge>
                    </div>
                    <p className="text-lg text-muted-foreground mb-2">{program.institution}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {program.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {program.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {program.tuitionFee}
                      </div>
                    </div>
                    <p className="text-sm mb-3">{program.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Requirements:</span> {program.requirements}
                      </div>
                      <div>
                        <span className="font-medium">Application Fee:</span> {program.applicationFee}
                      </div>
                      <div>
                        <span className="font-medium">Available Slots:</span> {program.availableSlots}
                      </div>
                      <div>
                        <span className="font-medium">Deadline:</span> {program.applicationDeadline}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1">
                    Apply Now
                  </Button>
                  <Button variant="outline">
                    View Details
                  </Button>
                  <Button variant="outline">
                    Save to Wishlist
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No programs found matching your criteria</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSearchTerm("");
                setCategoryFilter("");
                setLocationFilter("");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default BrowsePrograms;