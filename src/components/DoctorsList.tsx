
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, GraduationCap, Building } from "lucide-react";

interface Doctor {
  name: string;
  specialty: string;
  education: string;
  affiliation: string;
  location: string;
}

interface DoctorsListProps {
  doctors: Doctor[];
  specialty: string;
  userLocation: string;
}

const DoctorsList = ({ doctors, specialty, userLocation }: DoctorsListProps) => {
  if (doctors.length === 0) {
    return (
      <Card className="p-6 mt-4 bg-yellow-50 border-yellow-200">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-yellow-500 mx-auto mb-3" />
          <h3 className="font-semibold text-gray-800 mb-2">No Doctors Found in {userLocation}</h3>
          <p className="text-gray-600 mb-4">
            We couldn't find any {specialty.toLowerCase()} specialists in your area.
          </p>
          <p className="text-sm text-gray-500">
            You may want to consider expanding your search to nearby cities or consult online.
          </p>
        </div>
      </Card>
    );
  }

  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <MapPin className="h-5 w-5 text-green-500" />
        <h3 className="font-semibold text-gray-800">
          {specialty} Specialists in {userLocation} ({doctors.length} found)
        </h3>
      </div>
      
      {doctors.map((doctor, index) => (
        <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-semibold text-lg text-gray-800">{doctor.name}</h4>
                <Badge variant="secondary" className="mt-1">
                  {doctor.specialty}
                </Badge>
              </div>
              <div className="flex items-center gap-1 text-sm text-gray-500">
                <MapPin className="h-4 w-4" />
                {doctor.location}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <GraduationCap className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">{doctor.education}</p>
              </div>
              
              <div className="flex items-start gap-2">
                <Building className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">{doctor.affiliation}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DoctorsList;
