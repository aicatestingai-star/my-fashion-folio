import { Shield, Eye, Fingerprint, UserCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const privacyFeatures = [
  {
    icon: Shield,
    title: "Your Data Stays Yours",
    description: "All processing happens on your device. Your photos and style data never leave your control.",
  },
  {
    icon: Eye,
    title: "Explicit Consent Always",
    description: "Share only what you choose, when you choose. Every sharing action requires your explicit permission.",
  },
  {
    icon: Fingerprint,
    title: "Secure by Default",
    description: "Biometric locks, passcode protection, and encryption ensure your wardrobe data stays private.",
  },
  {
    icon: UserCheck,
    title: "Body-Positive Promise",
    description: "No weight tracking, BMI scores, or judgmental metrics. Only tools that celebrate your unique style.",
  },
];

export const PrivacySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-success/10 text-success border border-success/20 px-4 py-2 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            Privacy Guaranteed
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Your Trust is{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sacred
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We believe privacy isn't a feature—it's a fundamental right. Every design decision prioritizes your security and autonomy.
          </p>
        </div>

        {/* Privacy Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {privacyFeatures.map((feature, index) => (
            <Card
              key={index}
              className="p-6 border border-primary/10 bg-card shadow-soft hover:shadow-medium transition-smooth"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Privacy Promise Card */}
        <Card className="p-8 bg-gradient-card border-0 shadow-medium text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">Our Privacy Promise</h3>
            <p className="text-muted-foreground leading-relaxed">
              We commit to transparency in our data practices, giving you complete control over your personal information, 
              and designing every feature with privacy as the foundation, not an afterthought.
            </p>
            <Button variant="confidence" size="lg">
              Read Our Privacy Policy
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};