
import { Badge } from "@/components/ui/badge";

export const TrustSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-inter mb-6">
              Your safety is our priority
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Every service provider on our platform is thoroughly vetted to ensure 
              you receive quality service from trusted professionals.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 font-inter">Background Checks</h4>
                  <p className="text-gray-600">All providers undergo comprehensive background screening</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 font-inter">Licensed & Insured</h4>
                  <p className="text-gray-600">Verified credentials and insurance coverage</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 font-inter">Customer Reviews</h4>
                  <p className="text-gray-600">Real reviews from verified customers</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-muted p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary font-inter mb-2">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="bg-muted p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary font-inter mb-2">2.5K+</div>
              <div className="text-gray-600">Verified Providers</div>
            </div>
            <div className="bg-muted p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary font-inter mb-2">4.8</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="bg-muted p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary font-inter mb-2">99%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
