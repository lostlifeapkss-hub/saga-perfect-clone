import { Smartphone, RefreshCw, HardDrive, Gamepad2, Download, Play, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import DownloadButton from "@/components/ui/DownloadButton";
import InfoCard from "@/components/ui/InfoCard";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: window.innerHeight + 100,
              }}
              animate={{
                y: -100,
                x: Math.random() * window.innerWidth,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-main py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2"
            >
              <Zap size={16} className="text-primary" />
              <span className="text-primary font-medium text-sm">Latest Version v21.0.0</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
            >
              Summertime Saga
              <span className="block text-gradient">Mod APK</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl font-bold text-primary uppercase tracking-wider"
            >
              Unlimited Money • Unlock All Cookie Jars
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white/70 text-lg max-w-xl mx-auto lg:mx-0"
            >
              Experience the ultimate adventure game with all premium features unlocked. Download now and start your journey!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <DownloadButton variant="hero" />
              <motion.a
                href="#gameplay"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-4 rounded-xl hover:bg-white/20 transition-colors"
              >
                <Play size={20} />
                Watch Gameplay
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4"
            >
              <div className="flex items-center gap-2 text-white/60">
                <Shield size={18} className="text-green-400" />
                <span className="text-sm">Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Download size={18} className="text-blue-400" />
                <span className="text-sm">10M+ Downloads</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Zap size={18} className="text-yellow-400" />
                <span className="text-sm">Fast Install</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - MacBook Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="macbook-frame shadow-2xl"
            >
              <div className="macbook-screen">
                <img
                  src="https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=800&q=80"
                  alt="Game Screenshot"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Info Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          <InfoCard icon={Smartphone} label="Requirements" value="Android 5.0+" />
          <InfoCard icon={RefreshCw} label="Latest Version" value="v21.0.0" />
          <InfoCard icon={HardDrive} label="File Size" value="1.28 GB" />
          <InfoCard icon={Gamepad2} label="Category" value="Simulation" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;