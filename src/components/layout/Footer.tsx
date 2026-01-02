import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend
  };

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-xl text-foreground">
                Summertime Saga
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Download the latest version of Summertime Saga Mod APK with unlimited money and all cookie jars unlocked. Experience the ultimate gaming adventure on your Android device.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Hub */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Navigation Hub</h3>
            <nav className="flex flex-col gap-3">
              <Link
                to="/disclaimer"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Disclaimer
              </Link>
              <Link
                to="/privacy-policy"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-conditions"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms & Condition
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-foreground">Join Our Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get the latest updates and news about Summertime Saga.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-background"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-background"
              />
              <Button type="submit" className="w-full">
                <Mail size={18} />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-primary py-4">
        <div className="container-main">
          <p className="text-primary-foreground text-sm text-center">
            © {new Date().getFullYear()} Summertime Saga Mod APK. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;