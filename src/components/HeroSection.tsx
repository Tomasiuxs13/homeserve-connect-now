
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cities } from "@/data/mockServices";

export const HeroSection = () => {
  const [service, setService] = useState("");
  const [city, setCity] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", { service, city });
    // TODO: Implement actual search functionality
  };

  return (
    <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-inter mb-6">
            Find trusted home services
            <span className="block text-accent">in your area</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Connect with vetted professionals for all your home service needs. 
            From cleaning to repairs, we've got you covered.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex-1 max-w-md">
              <Input
                type="text"
                placeholder="What service do you need?"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-6 py-4 text-gray-900 text-lg rounded-lg border-0 focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex-1 max-w-md">
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger className="w-full px-6 py-4 text-gray-900 text-lg rounded-lg border-0 focus:ring-2 focus:ring-accent">
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((cityName) => (
                    <SelectItem key={cityName} value={cityName}>
                      {cityName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-gray-900 font-semibold px-8 py-4 text-lg"
              onClick={handleSearch}
            >
              Find Services
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm opacity-80">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Background checked professionals
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Real customer reviews
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
              Secure payments
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
