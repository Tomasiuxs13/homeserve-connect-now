
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    step: 1,
    title: "Tell us what you need",
    description: "Describe your project and we'll connect you with qualified professionals in your area.",
    icon: "📝"
  },
  {
    step: 2,
    title: "Compare quotes & profiles",
    description: "Review provider profiles, ratings, and competitive quotes to find the perfect match.",
    icon: "⭐"
  },
  {
    step: 3,
    title: "Book & get it done",
    description: "Schedule your service, communicate with your pro, and get the job done right.",
    icon: "✅"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-inter mb-4">
            How ServiceHub Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting quality home services has never been easier
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <Card className="mb-6 mx-auto w-20 h-20 flex items-center justify-center bg-primary">
                <CardContent className="p-0">
                  <span className="text-3xl">{step.icon}</span>
                </CardContent>
              </Card>
              <div className="mb-4">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-accent text-gray-900 rounded-full font-bold text-sm">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-inter">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
