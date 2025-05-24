
import { useState } from "react";
import Header from "@/components/Header";
import LandingSection from "@/components/LandingSection";
import PromptSection from "@/components/PromptSection";

const Index = () => {
  const [showPrompt, setShowPrompt] = useState(false);

  const handleTryClick = () => {
    setShowPrompt(true);
  };

  const handleBackToHome = () => {
    setShowPrompt(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      {!showPrompt ? (
        <LandingSection onTryClick={handleTryClick} />
      ) : (
        <PromptSection onBackToHome={handleBackToHome} />
      )}
    </div>
  );
};

export default Index;
