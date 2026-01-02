import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import DataTable from "@/components/ui/DataTable";
import DownloadButton from "@/components/ui/DownloadButton";
import { motion } from "framer-motion";
import { Monitor, Download, HardDrive, Cpu, MemoryStick, Check } from "lucide-react";
import pcHero from "@/assets/pc-hero.jpg";

const systemRequirements = [
  { label: "Operating System", value: "Windows 7/8/10/11 (64-bit) or Linux" },
  { label: "Processor", value: "Intel Core i3 or AMD equivalent" },
  { label: "Memory (RAM)", value: "4 GB minimum, 8 GB recommended" },
  { label: "Storage Space", value: "3 GB available space" },
  { label: "Graphics", value: "DirectX 11 compatible GPU" },
  { label: "Additional", value: "Mouse, Keyboard required" },
];

const downloadOptions = [
  { platform: "Windows", version: "v21.0.0", size: "2.1 GB", color: "bg-blue-500" },
  { platform: "Linux", version: "v21.0.0", size: "2.0 GB", color: "bg-orange-500" },
  { platform: "Mac", version: "v21.0.0", size: "2.2 GB", color: "bg-gray-700" },
];

const installSteps = [
  "Download the .zip file from the button above",
  "Extract the contents using WinRAR or 7-Zip",
  "Open the extracted folder",
  "Double-click on 'SummertimeSaga.exe' to launch",
  "If prompted by Windows Defender, click 'More Info' then 'Run Anyway'",
  "Enjoy the game with all features unlocked!",
];

const PCVersion = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={pcHero} alt="PC Gaming Setup" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center">
                <Monitor size={28} className="text-white" />
              </div>
              <span className="text-blue-400 font-semibold text-lg">PC Version</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Summertime Saga
              <span className="block text-blue-400">For PC & Desktop</span>
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Experience the full game on your Windows, Mac, or Linux computer with enhanced graphics and larger screen gameplay.
            </p>
            <div className="flex flex-wrap gap-4">
              <DownloadButton variant="hero" />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-main section-padding">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Download Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading centered>Download for PC</SectionHeading>
            <p className="text-muted-foreground text-center mt-4 mb-10">
              Choose your operating system and download the latest version
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {downloadOptions.map((option, index) => (
                <motion.div
                  key={option.platform}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Monitor size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{option.platform}</h3>
                  <p className="text-primary font-semibold mt-1">{option.version}</p>
                  <p className="text-muted-foreground text-sm mt-1">{option.size}</p>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 mt-4 gradient-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-xl text-sm"
                  >
                    <Download size={16} />
                    Download
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Installation Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>PC Installation Guide</SectionHeading>
            <div className="mt-8 bg-card rounded-3xl p-8 border border-border">
              <p className="text-muted-foreground mb-6">
                Follow these steps to install Summertime Saga on your PC:
              </p>
              <ol className="space-y-4">
                {installSteps.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="w-8 h-8 gradient-card rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-foreground pt-1">{step}</span>
                  </motion.li>
                ))}
              </ol>
            </div>
          </motion.div>

          {/* System Requirements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>System Requirements</SectionHeading>
            <div className="mt-8">
              <DataTable title="Minimum Requirements" data={systemRequirements} />
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading centered>PC Version Features</SectionHeading>
            <div className="mt-8 grid md:grid-cols-2 gap-4">
              {[
                "Full HD graphics support up to 4K resolution",
                "Keyboard and mouse controls optimized",
                "Faster loading times compared to mobile",
                "Save game cloud sync support",
                "Mod support for community content",
                "No ads or interruptions",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <Check className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default PCVersion;