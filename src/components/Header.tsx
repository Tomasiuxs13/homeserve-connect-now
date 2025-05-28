
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary font-inter">ServiceHub</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Find Services</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Become a Provider</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">How it Works</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              <User className="h-4 w-4 mr-2" />
              Log In
            </Button>
            <Button className="bg-primary hover:bg-primary/90">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
