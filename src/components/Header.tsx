
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/UserMenu";
import { useAuth } from "@/contexts/AuthContext";

export const Header = () => {
  const { user } = useAuth();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFindServices = () => {
    scrollToSection('services-section');
  };

  const handleHowItWorks = () => {
    scrollToSection('how-it-works-section');
  };

  const handleBecomeProvider = () => {
    // Navigate to provider dashboard or show auth if not logged in
    if (user) {
      window.location.href = '/provider-dashboard';
    } else {
      window.location.href = '/auth';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold text-primary font-inter">ServiceHub</h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={handleFindServices}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Find Services
            </button>
            <button 
              onClick={handleBecomeProvider}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              Become a Provider
            </button>
            <button 
              onClick={handleHowItWorks}
              className="text-gray-700 hover:text-primary transition-colors cursor-pointer"
            >
              How it Works
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline" className="hidden sm:inline-flex">
                    Log In
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button className="bg-primary hover:bg-primary/90">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
