
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ServiceCard } from "./ServiceCard";
import { mockServices, cities, type MockService } from "@/data/mockServices";

export const ServicesList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(mockServices.map(service => service.category)));
    return uniqueCategories.sort();
  }, []);

  const filteredServices = useMemo(() => {
    return mockServices.filter(service => {
      const matchesSearch = !searchTerm || 
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.provider.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCity = !selectedCity || selectedCity === "all" || service.city === selectedCity;
      const matchesCategory = !selectedCategory || selectedCategory === "all" || service.category === selectedCategory;
      
      return matchesSearch && matchesCity && matchesCategory && service.isActive;
    });
  }, [searchTerm, selectedCity, selectedCategory]);

  const handleBookService = (service: MockService) => {
    console.log("Booking service:", service);
    // TODO: Implement booking functionality
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-inter mb-4">
            Available Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse and book from our selection of trusted service providers
          </p>
        </div>
        
        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Input
            type="text"
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="text-base"
          />
          
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All cities</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBook={handleBookService}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No services found matching your criteria.
            </p>
          </div>
        )}
        
        <div className="text-center mt-8 text-gray-600">
          Showing {filteredServices.length} of {mockServices.length} services
        </div>
      </div>
    </section>
  );
};
