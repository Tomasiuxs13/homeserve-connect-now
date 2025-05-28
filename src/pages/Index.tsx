
import { HeroSection } from "@/components/HeroSection";
import { ServiceCategories } from "@/components/ServiceCategories";
import { ServicesList } from "@/components/ServicesList";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustSection } from "@/components/TrustSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServiceCategories />
      <ServicesList />
      <HowItWorks />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
