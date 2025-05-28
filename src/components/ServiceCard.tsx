
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, MapPin } from "lucide-react";
import type { MockService } from "@/data/mockServices";

interface ServiceCardProps {
  service: MockService;
  onBook?: (service: MockService) => void;
}

export const ServiceCard = ({ service, onBook }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {service.description}
            </p>
          </div>
          <Badge variant="secondary" className="ml-2">
            {service.category}
          </Badge>
        </div>
        
        <div className="flex items-center mb-4">
          <img
            src={service.provider.image}
            alt={service.provider.name}
            className="w-8 h-8 rounded-full mr-3"
          />
          <div className="flex-1">
            <p className="font-medium text-sm">{service.provider.name}</p>
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span className="text-sm text-gray-600">
                {service.provider.rating} ({service.provider.reviewCount} reviews)
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-600 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {service.duration} min
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            {service.city}, {service.state}
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            ${service.price}
          </div>
          <Button 
            onClick={() => onBook?.(service)}
            className="bg-primary hover:bg-primary/90"
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
