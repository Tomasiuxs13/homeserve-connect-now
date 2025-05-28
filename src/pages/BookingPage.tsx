
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="font-inter">Book Your Service</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl">
                    JS
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-inter">Jane Smith</h3>
                    <p className="text-gray-600">Professional House Cleaner</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                      <span className="text-sm text-gray-600">4.9 (127 reviews)</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h4 className="font-semibold font-inter mb-4">Select Date & Time</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        className="rounded-md border"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium mb-3">Available Times</h5>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM",
                          "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
                        ].map((time) => (
                          <Button
                            key={time}
                            variant="outline"
                            className="text-sm hover:bg-primary hover:text-white"
                          >
                            {time}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-inter">Service Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type
                    </label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>Standard House Cleaning</option>
                      <option>Deep Cleaning</option>
                      <option>Move-in/Move-out Cleaning</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      House Size
                    </label>
                    <select className="w-full p-3 border rounded-lg">
                      <option>1-2 bedrooms</option>
                      <option>3-4 bedrooms</option>
                      <option>5+ bedrooms</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Instructions
                    </label>
                    <textarea 
                      className="w-full p-3 border rounded-lg"
                      rows={3}
                      placeholder="Any specific requirements or areas to focus on..."
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="font-inter">Booking Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Service</span>
                    <span>House Cleaning</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date</span>
                    <span>Jan 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Time</span>
                    <span>2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration</span>
                    <span>3 hours</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$240</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <Button className="w-full bg-secondary hover:bg-secondary/90">
                    Book Now - Available
                  </Button>
                  <Button variant="outline" className="w-full">
                    Request Quote First
                  </Button>
                </div>
                
                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <p className="text-sm text-center">
                    <span className="font-medium">Live Now:</span> Instant booking available!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
