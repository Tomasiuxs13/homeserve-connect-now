
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Cleaning",
    description: "House cleaning, deep cleaning, move-in/out",
    icon: "🧹",
    providers: 245
  },
  {
    name: "Handyman",
    description: "Repairs, installations, maintenance",
    icon: "🔧",
    providers: 189
  },
  {
    name: "Plumbing",
    description: "Pipe repairs, installations, drain cleaning",
    icon: "🚿",
    providers: 156
  },
  {
    name: "Electrical",
    description: "Wiring, outlets, fixture installation",
    icon: "⚡",
    providers: 134
  },
  {
    name: "Painting",
    description: "Interior/exterior painting, touch-ups",
    icon: "🎨",
    providers: 167
  },
  {
    name: "Landscaping",
    description: "Lawn care, garden design, tree service",
    icon: "🌿",
    providers: 198
  },
  {
    name: "Moving",
    description: "Local moving, packing, furniture assembly",
    icon: "📦",
    providers: 123
  },
  {
    name: "HVAC",
    description: "Heating, cooling, ventilation services",
    icon: "🌡️",
    providers: 112
  }
];

export const ServiceCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-inter mb-4">
            Popular Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our most requested home services and find the perfect professional for your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card key={category.name} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 font-inter">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {category.description}
                </p>
                <span className="text-primary text-sm font-medium">
                  {category.providers} providers available
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
