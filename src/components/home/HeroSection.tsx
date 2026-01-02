import { Smartphone, RefreshCw, HardDrive, Gamepad2, Download } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import gameIcon from "@/assets/game-icon.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Summertime Saga Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-main text-center py-20">
        {/* Game Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="mb-8"
        >
          <img
            src={gameIcon}
            alt="Summertime Saga Icon"
            className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-3xl shadow-2xl border-4 border-white/20"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 drop-shadow-lg"
        >
          Summertime Saga Mod APK
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl font-bold text-primary uppercase tracking-wider mb-8"
        >
          UNLIMITED MONEY, UNLOCK ALL COOKIE JARS
        </motion.p>

        {/* Download Button */}
        <motion.a
          href="#download"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-3 bg-white text-primary font-bold text-lg md:text-xl px-10 py-5 rounded-full shadow-2xl hover:shadow-[0_0_40px_rgba(230,126,34,0.5)] transition-all duration-300"
        >
          <Download size={24} />
          DOWNLOAD NOW
        </motion.a>

        {/* Info Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-12 max-w-4xl mx-auto"
        >
          {[
            { icon: Smartphone, label: "Requirements", value: "Android 5.0+" },
            { icon: RefreshCw, label: "Latest Version", value: "v21.0.0-wip.6705" },
            { icon: HardDrive, label: "File Size", value: "1.28 GB" },
            { icon: Gamepad2, label: "Category", value: "Simulation Game" },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-primary/90 backdrop-blur-sm rounded-2xl p-4 md:p-5 text-center shadow-xl border border-primary-foreground/10 cursor-pointer group"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                <item.icon className="text-white" size={20} />
              </div>
              <p className="text-white/80 text-xs md:text-sm font-medium">{item.label}</p>
              <p className="text-white font-bold text-sm md:text-base mt-1">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="hsl(var(--background))"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;