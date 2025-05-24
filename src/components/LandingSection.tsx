
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Brain, Eye, Bone, UserCheck, Clock } from "lucide-react";

interface LandingSectionProps {
  onTryClick: () => void;
}

const LandingSection = ({ onTryClick }: LandingSectionProps) => {
  const features = [
    {
      icon: Heart,
      title: "Symptom Analysis",
      description: "Describe your symptoms in your own words"
    },
    {
      icon: Brain,
      title: "AI-Powered",
      description: "Advanced AI to understand your health concerns"
    },
    {
      icon: UserCheck,
      title: "Specialist Matching",
      description: "Get matched with the right doctor specialty"
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Get recommendations in seconds"
    }
  ];

  const specialties = [
    { icon: Heart, name: "Cardiology", color: "bg-red-100 text-red-600" },
    { icon: Brain, name: "Neurology", color: "bg-purple-100 text-purple-600" },
    { icon: Eye, name: "Ophthalmology", color: "bg-blue-100 text-blue-600" },
    { icon: Bone, name: "Orthopedics", color: "bg-green-100 text-green-600" }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent leading-tight">
            Find the Right Doctor for Your Health Concerns
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Describe your symptoms and get instant AI-powered recommendations for the most suitable medical specialist. 
            Our advanced system helps you take the first step towards better health.
          </p>
          <Button 
            onClick={onTryClick}
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Try AI Doctor Assistant
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <feature.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </Card>
        ))}
      </div>

      {/* How It Works */}
      <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 mb-16">
        <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">How It Works</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              1
            </div>
            <h4 className="font-semibold mb-2 text-gray-800">Describe Your Symptoms</h4>
            <p className="text-gray-600">Tell us about your health concerns in your own words</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              2
            </div>
            <h4 className="font-semibold mb-2 text-gray-800">AI Analysis</h4>
            <p className="text-gray-600">Our AI analyzes your symptoms and medical context</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              3
            </div>
            <h4 className="font-semibold mb-2 text-gray-800">Get Recommendations</h4>
            <p className="text-gray-600">Receive specialist recommendations and next steps</p>
          </div>
        </div>
      </div>

      {/* Specialties Preview */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-8 text-gray-800">Medical Specialties We Cover</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {specialties.map((specialty, index) => (
            <div key={index} className={`${specialty.color} px-4 py-2 rounded-full flex items-center gap-2`}>
              <specialty.icon className="h-4 w-4" />
              <span className="font-medium">{specialty.name}</span>
            </div>
          ))}
          <div className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full">
            +20 more specialties
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
