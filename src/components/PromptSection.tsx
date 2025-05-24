
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Send, Loader2, User, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import LocationDialog from "./LocationDialog";
import DoctorsList from "./DoctorsList";
import { doctorsData, DoctorSpecialty } from "@/data/doctors";

interface PromptSectionProps {
  onBackToHome: () => void;
}

const PromptSection = ({ onBackToHome }: PromptSectionProps) => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showLocationDialog, setShowLocationDialog] = useState(false);
  const [userLocation, setUserLocation] = useState("");
  const [detectedSpecialty, setDetectedSpecialty] = useState<string>("");
  const [filteredDoctors, setFilteredDoctors] = useState<any[]>([]);
  const { toast } = useToast();

  const extractSpecialtyFromResponse = (aiResponse: string): string => {
    const specialties = Object.keys(doctorsData);
    const lowerResponse = aiResponse.toLowerCase();
    
    for (const specialty of specialties) {
      if (lowerResponse.includes(specialty.toLowerCase()) || 
          lowerResponse.includes(specialty.toLowerCase().slice(0, -1))) {
        return specialty;
      }
    }
    
    // Additional checks for common medical terms
    if (lowerResponse.includes('heart') || lowerResponse.includes('cardiac')) {
      return 'Cardiology';
    }
    if (lowerResponse.includes('brain') || lowerResponse.includes('neuro')) {
      return 'Neurology';
    }
    if (lowerResponse.includes('skin') || lowerResponse.includes('dermat')) {
      return 'Dermatology';
    }
    
    return "";
  };

  const handleSubmit = async () => {
    if (!input.trim()) {
      toast({
        title: "Please enter your symptoms",
        description: "Describe your health concerns to get recommendations.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    console.log("Sending request with input:", input);

    try {
      const prompt = `You are a medical assistant helping people identify which type of doctor they should visit based on their symptoms. The user may describe their problem vaguely, emotionally, or with unclear language.

Your task is:
1. Analyze the description and identify the most likely medical issue.
2. Suggest an appropriate doctor specialty (e.g., dermatologist, cardiologist, general physician, etc.).
3. If the input is confusing, unclear, or not related to a medical issue, advise them to visit a general physician or nearby physical clinic.

Respond in a friendly and respectful tone. Keep the response short and direct.

---

User's description:
"${input}"

---

Your response:`;

      const ollamaResponse = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gemma2:latest',
          prompt: prompt,
          stream: false
        })
      });

      if (!ollamaResponse.ok) {
        throw new Error(`HTTP error! status: ${ollamaResponse.status}`);
      }

      const data = await ollamaResponse.json();
      console.log("Ollama response:", data);
      
      setResponse(data.response);
      
      // Extract specialty and show location dialog
      const specialty = extractSpecialtyFromResponse(data.response);
      if (specialty) {
        setDetectedSpecialty(specialty);
        setShowLocationDialog(true);
      }
      
      toast({
        title: "Analysis Complete",
        description: "Your symptoms have been analyzed successfully.",
      });

    } catch (error) {
      console.error('Error calling Ollama:', error);
      toast({
        title: "Connection Error",
        description: "Unable to connect to the AI model. Please ensure Ollama is running on localhost:11434 with the gemma2:latest model.",
        variant: "destructive"
      });
      
      // Fallback response for demo purposes
      setResponse("I'm having trouble connecting to the AI model. Please ensure that:\n\n1. Ollama is running locally (ollama serve)\n2. The gemma2:latest model is installed (ollama pull gemma2:latest)\n3. The service is accessible on localhost:11434\n\nFor now, I recommend consulting with a general physician who can properly evaluate your symptoms and refer you to a specialist if needed.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLocationSubmit = (location: string) => {
    setUserLocation(location);
    setShowLocationDialog(false);
    
    // Filter doctors based on location and specialty
    if (detectedSpecialty && doctorsData[detectedSpecialty as DoctorSpecialty]) {
      const specialtyDoctors = doctorsData[detectedSpecialty as DoctorSpecialty];
      const locationDoctors = specialtyDoctors.filter(
        doctor => doctor.location.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredDoctors(locationDoctors);
    }
  };

  const handleLocationCancel = () => {
    setShowLocationDialog(false);
    setDetectedSpecialty("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleSubmit();
    }
  };

  return (
    <div className="container mx-auto px-6 py-8 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button 
          variant="ghost" 
          onClick={onBackToHome}
          className="flex items-center gap-2 hover:bg-blue-50"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Describe Your Symptoms</h2>
          <p className="text-gray-600">Tell us about your health concerns and get specialist recommendations</p>
        </div>
      </div>

      {/* Input Section */}
      <Card className="p-6 mb-6 bg-white/70 backdrop-blur-sm border-0 shadow-lg">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="h-4 w-4 text-white" />
          </div>
          <div className="flex-1">
            <label htmlFor="symptoms" className="block text-sm font-medium text-gray-700 mb-2">
              Your Symptoms
            </label>
            <Textarea
              id="symptoms"
              placeholder="Describe your symptoms, pain, or health concerns in detail. For example: 'I have been experiencing chest pain and shortness of breath for the past few days..'"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="min-h-[120px] resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isLoading}
            />
            <p className="text-xs text-gray-500 mt-2">
              Press Ctrl + Enter to submit or click the send button
            </p>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleSubmit}
            disabled={isLoading || !input.trim()}
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white flex items-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Get Recommendation
              </>
            )}
          </Button>
        </div>
      </Card>

      {/* Response Section */}
      {(response || isLoading) && (
        <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-0 shadow-lg">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 mb-2">AI Doctor Assistant</h3>
              {isLoading ? (
                <div className="flex items-center gap-2 text-gray-600">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Analyzing your symptoms...
                </div>
              ) : (
                <div className="prose prose-sm max-w-none">
                  <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{response}</p>
                </div>
              )}
            </div>
          </div>
          
          {response && !isLoading && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Disclaimer:</strong> This is an AI-generated recommendation and should not replace professional medical advice. 
                Please consult with a qualified healthcare provider for proper diagnosis and treatment.
              </p>
            </div>
          )}
        </Card>
      )}

      {/* Doctors List */}
      {userLocation && detectedSpecialty && (
        <DoctorsList 
          doctors={filteredDoctors}
          specialty={detectedSpecialty}
          userLocation={userLocation}
        />
      )}

      {/* Instructions */}
      {!response && !isLoading && (
        <Card className="p-4 bg-blue-50 border-blue-200">
          <h4 className="font-medium text-blue-800 mb-2">Tips for better results:</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Be specific about your symptoms and when they started</li>
            <li>• Mention any pain levels or severity</li>
            <li>• Include relevant medical history if applicable</li>
            <li>• Describe how symptoms affect your daily activities</li>
          </ul>
        </Card>
      )}

      {/* Location Dialog */}
      <LocationDialog 
        isOpen={showLocationDialog}
        onClose={handleLocationCancel}
        onLocationSubmit={handleLocationSubmit}
      />
    </div>
  );
};

export default PromptSection;
