
import { Stethoscope } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg">
            <Stethoscope className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              AI Doctor Assistant
            </h1>
            <p className="text-sm text-gray-600">Find the right specialist for you</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
