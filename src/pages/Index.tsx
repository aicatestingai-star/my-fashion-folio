import { Navbar } from "@/components/ui/navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { FeaturesSection } from "@/components/ui/features-section";
import { PrivacySection } from "@/components/ui/privacy-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="privacy">
          <PrivacySection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
