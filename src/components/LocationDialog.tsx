
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, X } from "lucide-react";

interface LocationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onLocationSubmit: (location: string) => void;
}

const LocationDialog = ({ isOpen, onClose, onLocationSubmit }: LocationDialogProps) => {
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    if (location.trim()) {
      onLocationSubmit(location.trim());
      setLocation("");
    }
  };

  const handleCancel = () => {
    setLocation("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-500" />
            Find Doctors Near You
          </DialogTitle>
          <DialogDescription>
            Enter your location to find available doctors in your area.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="location">Your Location</Label>
            <Input
              id="location"
              placeholder="Enter your city or area"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              className="mt-1"
            />
          </div>
          
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              disabled={!location.trim()}
              className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600"
            >
              Find Doctors
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationDialog;
