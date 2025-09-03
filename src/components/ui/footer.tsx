import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import wardrobeIcon from "@/assets/wardrobe-icon.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={wardrobeIcon}
                alt="Wardrobe App"
                className="w-8 h-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                WardrobeWise
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering women through privacy-first fashion technology that celebrates every body and style.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-success" />
                <span>Private</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3 text-primary" />
                <span>Body-Positive</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3 text-accent" />
                <span>Inclusive</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Virtual Try-On</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Wardrobe Analytics</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Style Reports</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Privacy Tools</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Accessibility</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Community</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Feedback</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 WardrobeWise. Made with love for every woman's confidence.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Privacy Dashboard
            </Button>
            <Button variant="ghost" size="sm">
              Cookie Settings
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};