import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Users } from "lucide-react";
import heroImage from "@/assets/hero-wardrobe.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Diverse women confidently expressing themselves through fashion"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center min-h-screen justify-center">
        <div className="max-w-4xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-soft/80 backdrop-blur-sm text-primary border border-primary/20 px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            Privacy-First • Body-Positive • Inclusive
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Your Wardrobe,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Confidence
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Visualize outfits, organize your closet, and track your style journey with complete privacy and respect for your body.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="hero" size="lg" className="w-full sm:w-auto">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="soft" size="lg" className="w-full sm:w-auto">
              Learn About Privacy
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-sm text-foreground/60">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>100% Private</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-primary" />
              <span>Body-Positive</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Size Inclusive</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
    </section>
  );
};