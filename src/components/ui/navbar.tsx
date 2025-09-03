import { Button } from "@/components/ui/button";
import { Menu, Shield } from "lucide-react";
import wardrobeIcon from "@/assets/wardrobe-icon.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground/80 hover:text-primary transition-smooth">
              Features
            </a>
            <a href="#privacy" className="text-foreground/80 hover:text-primary transition-smooth">
              Privacy
            </a>
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-smooth">
              How It Works
            </a>
            <div className="flex items-center gap-2 text-sm text-success">
              <Shield className="w-4 h-4" />
              <span>Privacy-First</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">
              Sign In
            </Button>
            <Button variant="confidence">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};