import { Camera, Sparkles, BarChart3, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import tryonImage from "@/assets/tryon-concept.jpg";

const features = [
  {
    icon: Camera,
    title: "Smart Wardrobe Capture",
    description: "Upload purchases with AI-powered background removal and automatic garment detection. Tag for season, occasion, and cultural wear.",
  },
  {
    icon: Sparkles,
    title: "Virtual Try-On",
    description: "Preview outfits with confidence. Mix-and-match, compare colors, and explore accessories with support for diverse body shapes and cultural wear.",
  },
  {
    icon: BarChart3,
    title: "Insightful Analytics",
    description: "Track wear frequency, cost-per-wear, and discover gaps in your wardrobe. Make smarter purchases and maximize what you own.",
  },
  {
    icon: Lock,
    title: "Privacy by Design",
    description: "Your data stays on your device. Explicit consent for sharing. Passcode protection and one-tap privacy controls at your fingertips.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Designed for{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Every Woman
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience fashion technology that respects your privacy, celebrates your uniqueness, and empowers your confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Try-On Preview */}
        <div className="bg-card rounded-lg shadow-medium overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="inline-block bg-secondary-soft text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Virtual Try-On Preview
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  See How You'll Look
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our inclusive virtual try-on technology celebrates every body shape, skin tone, and cultural style. Preview outfits with confidence, knowing your privacy is always protected.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Supports diverse body types and skin tones</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>Cultural wear options (hijab, saree, etc.)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span>On-device processing for privacy</span>
                  </div>
                </div>
                <Button variant="confidence" className="w-full sm:w-auto">
                  Try It Now
                </Button>
              </div>
            </div>
            <div className="relative overflow-hidden">
              <img
                src={tryonImage}
                alt="Virtual try-on technology showing diverse women confidently trying on outfits"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};