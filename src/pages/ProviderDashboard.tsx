
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProviderDashboard = () => {
  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 font-inter mb-2">
            Provider Dashboard
          </h1>
          <p className="text-gray-600">Manage your services and bookings</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-inter">Active Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">12</div>
              <p className="text-sm text-gray-600">This week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-inter">Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">4.9</div>
              <p className="text-sm text-gray-600">Based on 87 reviews</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-inter">Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">$2,450</div>
              <p className="text-sm text-gray-600">This month</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-inter">Recent Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((booking) => (
                  <div key={booking} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">House Cleaning</h4>
                      <p className="text-sm text-gray-600">John Smith • Tomorrow 2:00 PM</p>
                    </div>
                    <Badge className="bg-accent text-gray-900">Confirmed</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-inter">Service Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "House Cleaning", price: "$80/hr", status: "Active" },
                  { name: "Deep Cleaning", price: "$120/hr", status: "Active" },
                  { name: "Move-in Cleaning", price: "$200", status: "Inactive" }
                ].map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{service.name}</h4>
                      <p className="text-sm text-gray-600">{service.price}</p>
                    </div>
                    <Badge variant={service.status === 'Active' ? 'default' : 'secondary'}>
                      {service.status}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                Add New Service
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
