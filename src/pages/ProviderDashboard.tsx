
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useProviderBookings, useProviderServices, useProviderStats } from "@/hooks/useProviderData";
import { format } from "date-fns";

const ProviderDashboard = () => {
  const { data: bookings, isLoading: bookingsLoading } = useProviderBookings();
  const { data: services, isLoading: servicesLoading } = useProviderServices();
  const { data: stats, isLoading: statsLoading } = useProviderStats();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'in_progress':
        return 'bg-purple-100 text-purple-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatStatus = (status: string) => {
    return status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

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
              <div className="text-3xl font-bold text-primary">
                {statsLoading ? '...' : stats?.activeBookings || 0}
              </div>
              <p className="text-sm text-gray-600">This week</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-inter">Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">
                {statsLoading ? '...' : stats?.rating ? stats.rating.toFixed(1) : '0.0'}
              </div>
              <p className="text-sm text-gray-600">
                Based on {statsLoading ? '...' : stats?.reviewCount || 0} reviews
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-inter">Earnings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">
                ${statsLoading ? '...' : stats?.monthlyEarnings ? stats.monthlyEarnings.toFixed(0) : '0'}
              </div>
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
                {bookingsLoading ? (
                  <div className="text-center py-4">Loading bookings...</div>
                ) : bookings && bookings.length > 0 ? (
                  bookings.slice(0, 5).map((booking) => (
                    <div key={booking.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{booking.services?.title}</h4>
                        <p className="text-sm text-gray-600">
                          {format(new Date(booking.booking_date), 'MMM dd, yyyy • h:mm a')}
                        </p>
                        <p className="text-sm font-medium text-green-600">
                          ${Number(booking.total_price).toFixed(0)}
                        </p>
                      </div>
                      <Badge className={getStatusColor(booking.status || 'pending')}>
                        {formatStatus(booking.status || 'pending')}
                      </Badge>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500">
                    No bookings yet
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="font-inter">Service Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {servicesLoading ? (
                  <div className="text-center py-4">Loading services...</div>
                ) : services && services.length > 0 ? (
                  services.map((service) => (
                    <div key={service.id} className="flex justify-between items-center p-4 border rounded-lg">
                      <div>
                        <h4 className="font-semibold">{service.title}</h4>
                        <p className="text-sm text-gray-600">
                          ${Number(service.price).toFixed(0)} • {service.duration_minutes}min
                        </p>
                      </div>
                      <Badge variant={service.is_active ? 'default' : 'secondary'}>
                        {service.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4 text-gray-500">
                    No services listed yet
                  </div>
                )}
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
