import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Send, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const navLinks = [
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Condition", path: "/terms-and-conditions" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-main py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 gradient-card rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-shadow duration-300">
                <span className="text-primary-foreground font-black text-2xl">S</span>
              </div>
              <div>
                <span className="font-bold text-xl text-foreground">Summertime</span>
                <span className="font-bold text-xl text-primary ml-1">Saga</span>
              </div>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Download the latest version of Summertime Saga Mod APK with unlimited money and all cookie jars unlocked. Experience the ultimate gaming adventure.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Navigation Hub */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="font-bold text-lg text-foreground">Navigation Hub</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Column 3: Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-bold text-lg text-foreground">Join Our Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to get the latest updates and news about Summertime Saga.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-background border-border focus:border-primary h-12 rounded-xl"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-background border-border focus:border-primary h-12 rounded-xl"
              />
              <Button type="submit" className="w-full h-12 rounded-xl gradient-primary border-0 font-semibold gap-2 hover:shadow-glow transition-shadow duration-300">
                <Send size={18} />
                Subscribe Now
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="gradient-primary py-5">
        <div className="container-main">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/90 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Summertime Saga Mod APK. All Rights Reserved.
            </p>
            <p className="text-primary-foreground/90 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="fill-current" /> for gamers worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;