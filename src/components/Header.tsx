
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { UserMenu } from "@/components/UserMenu";
import { useAuth } from "@/contexts/AuthContext";

export const Header = () => {
  const { user } = useAuth();

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
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Find Services</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Become a Provider</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">How it Works</a>
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
