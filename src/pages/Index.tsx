
import { HeroSection } from "@/components/HeroSection";
import { ServiceCategories } from "@/components/ServiceCategories";
import { ServicesList } from "@/components/ServicesList";
import { HowItWorks } from "@/components/HowItWorks";
import { TrustSection } from "@/components/TrustSection";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SearchProvider } from "@/contexts/SearchContext";

const Index = () => {
  return (
    <SearchProvider>
      <div className="min-h-screen">
        <Header />
        <HeroSection />
        <ServiceCategories />
        <ServicesList />
        <div id="how-it-works-section">
          <HowItWorks />
        </div>
        <TrustSection />
        <Footer />
      </div>
    </SearchProvider>
  );
};

export default Index;
