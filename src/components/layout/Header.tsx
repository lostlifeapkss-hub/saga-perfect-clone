import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, ChevronDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gameIcon from "@/assets/game-icon.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "PC Version", path: "/pc-version" },
  { name: "Old Version", path: "/old-version" },
  { name: "iOS Version", path: "/ios-version" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-border/50"
          : "bg-gradient-to-b from-black/20 to-transparent"
      }`}
    >
      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="container-main">
        <div className="flex items-center justify-between h-18 md:h-20 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img
                src={gameIcon}
                alt="Summertime Saga"
                className="w-11 h-11 md:w-12 md:h-12 rounded-xl shadow-lg ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
            <div className="hidden sm:block">
              <motion.span 
                className={`font-bold text-lg transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'}`}
              >
                Summertime
              </motion.span>
              <motion.span 
                className="font-bold text-lg text-primary ml-1"
                animate={{ 
                  textShadow: ["0 0 0px hsl(28, 85%, 55%)", "0 0 10px hsl(28, 85%, 55%)", "0 0 0px hsl(28, 85%, 55%)"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Saga
              </motion.span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <Link
                  to={link.path}
                  className={`relative px-4 py-2.5 font-medium transition-all duration-300 rounded-xl group ${
                    location.pathname === link.path
                      ? "text-primary"
                      : scrolled 
                        ? "text-foreground hover:text-primary" 
                        : "text-white/90 hover:text-white"
                  }`}
                >
                  {/* Hover background */}
                  <span className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'bg-primary/10' 
                      : 'bg-transparent group-hover:bg-primary/10'
                  }`} />
                  
                  {/* Text */}
                  <span className="relative z-10">{link.name}</span>
                  
                  {/* Active indicator */}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-1 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            
            {/* Download Button */}
            <motion.a
              href="#download"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 relative group"
            >
              {/* Button glow */}
              <div className="absolute inset-0 gradient-primary rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Button content */}
              <span className="relative inline-flex items-center gap-2 gradient-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-xl shadow-lg">
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Download size={18} />
                </motion.span>
                Download
                <Sparkles size={14} className="opacity-70" />
              </span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-xl transition-all duration-300 ${
              scrolled 
                ? 'text-foreground hover:bg-primary/10' 
                : 'text-white hover:bg-white/10'
            } ${mobileMenuOpen ? 'bg-primary/10' : ''}`}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-4 space-y-2 border-t border-border/50 bg-background/95 backdrop-blur-xl rounded-b-2xl"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between font-medium transition-all duration-300 py-3 px-4 rounded-xl mx-2 ${
                        location.pathname === link.path
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      <span>{link.name}</span>
                      {location.pathname === link.path && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile Download Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="pt-2 px-2"
                >
                  <a
                    href="#download"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 gradient-primary text-primary-foreground font-semibold py-3.5 rounded-xl shadow-lg"
                  >
                    <Download size={18} />
                    Download Now
                    <Sparkles size={14} className="opacity-70" />
                  </a>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;