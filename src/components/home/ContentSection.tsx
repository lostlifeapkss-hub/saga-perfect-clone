import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TableOfContents from "@/components/ui/TableOfContents";
import DataTable from "@/components/ui/DataTable";
import DownloadButton from "@/components/ui/DownloadButton";
import { Check, Star, Sparkles, Smartphone, Monitor, Apple } from "lucide-react";

const tocItems = [
  { id: "about", title: "About Summertime Saga" },
  { id: "features", title: "Mod APK Features" },
  { id: "screenshots", title: "Game Screenshots" },
  { id: "gameplay", title: "Gameplay Overview" },
  { id: "download", title: "How to Download" },
  { id: "versions", title: "All Versions" },
  { id: "install", title: "Installation Guide" },
  { id: "info", title: "Additional Information" },
];

const additionalInfo = [
  { label: "App Name", value: "Summertime Saga Mod APK" },
  { label: "Version", value: "v21.0.0 (Latest)" },
  { label: "Size", value: "1.28 GB" },
  { label: "Developer", value: "Kompas Productions" },
  { label: "Category", value: "Simulation / Adventure" },
  { label: "MOD Features", value: "Unlimited Money, All Cookie Jars Unlocked" },
  { label: "Requires Android", value: "5.0 and up" },
  { label: "Last Updated", value: "December 2024" },
];

const features = [
  { title: "Unlimited Money", desc: "Get unlimited in-game currency to unlock everything" },
  { title: "All Cookie Jars", desc: "Access all secret content from the start" },
  { title: "No Ads", desc: "Enjoy completely ad-free gameplay" },
  { title: "All Characters", desc: "Interact with every character immediately" },
  { title: "Premium Features", desc: "Access all premium content for free" },
  { title: "Save Support", desc: "Save and load your progress anytime" },
  { title: "HD Graphics", desc: "Enhanced visuals and smooth animations" },
  { title: "Regular Updates", desc: "Get the latest content and fixes" },
];

const screenshots = [
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
  "https://images.unsplash.com/photo-1493711662062-fa541f7f3d24?w=600&q=80",
  "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=600&q=80",
  "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=600&q=80",
];

const versions = [
  { platform: "Android", icon: Smartphone, version: "v21.0.0", size: "1.28 GB", color: "bg-green-500" },
  { platform: "PC Version", icon: Monitor, version: "v21.0.0", size: "2.1 GB", color: "bg-blue-500" },
  { platform: "iOS Version", icon: Apple, version: "v20.5.0", size: "1.5 GB", color: "bg-gray-800" },
];

const ContentSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-main relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <TableOfContents items={tocItems} />
          </motion.div>

          {/* About Section */}
          <motion.div
            id="about"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>About Summertime Saga</SectionHeading>
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Summertime Saga is a high-quality dating simulation game developed by Kompas Productions. The game follows the story of a young man whose father has recently passed away, leaving him with unanswered questions and a mysterious debt.
                </p>
                <p>
                  With stunning visuals, engaging storylines, and multiple character routes to explore, Summertime Saga has become one of the most popular adult simulation games available.
                </p>
                <p>
                  The game features over <span className="text-primary font-semibold">65 unique characters</span>, <span className="text-primary font-semibold">30+ locations</span> to explore, and hundreds of hours of gameplay content.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="phone-frame mx-auto max-w-[280px]"
              >
                <div className="phone-screen">
                  <img
                    src="https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=400&q=80"
                    alt="Game Preview"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            id="features"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <SectionHeading>Mod APK Features</SectionHeading>
              <p className="text-muted-foreground mt-4">
                Everything you need for the ultimate gaming experience
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 gradient-card rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Check size={18} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Screenshots Section */}
          <motion.div
            id="screenshots"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <SectionHeading>Game Screenshots</SectionHeading>
              <p className="text-muted-foreground mt-4">
                Take a peek at the stunning visuals and gameplay
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {screenshots.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Sparkles className="text-white" size={32} />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gameplay Section */}
          <motion.div
            id="gameplay"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Gameplay Overview</SectionHeading>
            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                In Summertime Saga, you'll experience an open-world adventure where your choices matter. The game combines elements of visual novels, dating simulators, and adventure games to create a unique and immersive experience.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="macbook-frame max-w-2xl mx-auto my-8"
              >
                <div className="macbook-screen">
                  <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80"
                    alt="Gameplay"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h4 className="font-bold text-foreground mb-3">🎮 Key Features</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Explore a vast open world with multiple locations</li>
                    <li>• Build relationships with various characters</li>
                    <li>• Complete quests and mini-games</li>
                    <li>• Make choices that affect outcomes</li>
                  </ul>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h4 className="font-bold text-foreground mb-3">⚡ Game Mechanics</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Day-night cycle and weekly schedule</li>
                    <li>• Multiple character storylines</li>
                    <li>• Hidden secrets and easter eggs</li>
                    <li>• Character customization options</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            id="download"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>How to Download</SectionHeading>
            <div className="mt-8 gradient-primary rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <p className="text-white/90 mb-6">
                  Follow these simple steps to download Summertime Saga Mod APK:
                </p>
                <ol className="space-y-4">
                  {[
                    'Click the "Download Now" button below',
                    "Wait for the download to complete (1.28 GB)",
                    'Enable "Install from Unknown Sources" in settings',
                    'Open the APK file and tap "Install"',
                    "Launch the game and enjoy!",
                  ].map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-white/90 pt-1">{step}</span>
                    </motion.li>
                  ))}
                </ol>
                <div className="mt-8">
                  <DownloadButton variant="hero" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* All Versions Section */}
          <motion.div
            id="versions"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <SectionHeading>All Versions</SectionHeading>
              <p className="text-muted-foreground mt-4">
                Download for your preferred platform
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {versions.map((v, index) => (
                <motion.div
                  key={v.platform}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 ${v.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <v.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{v.platform}</h3>
                  <p className="text-primary font-semibold mt-1">{v.version}</p>
                  <p className="text-muted-foreground text-sm mt-1">{v.size}</p>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block mt-4 gradient-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-xl text-sm"
                  >
                    Download
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Installation Guide */}
          <motion.div
            id="install"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Installation Guide</SectionHeading>
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {[
                { step: "Step 1", title: "Enable Unknown Sources", desc: "Go to Settings → Security → Unknown Sources and enable it." },
                { step: "Step 2", title: "Download the APK", desc: "Click download and ensure 2GB+ free storage space." },
                { step: "Step 3", title: "Install the Game", desc: "Open file manager, navigate to Downloads, tap APK to install." },
                { step: "Step 4", title: "Launch and Play", desc: "Find the game icon in app drawer and start your adventure!" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
                >
                  <span className="text-primary font-bold text-sm">{item.step}</span>
                  <h4 className="font-bold text-foreground text-lg mt-2">{item.title}</h4>
                  <p className="text-muted-foreground mt-2">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Additional Information Table */}
          <motion.div
            id="info"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Additional Information</SectionHeading>
            <div className="mt-8">
              <DataTable title="App Details" data={additionalInfo} />
            </div>
          </motion.div>

          {/* Rating Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-3xl p-8 border border-border shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 gradient-card rounded-2xl flex items-center justify-center">
                  <span className="text-3xl font-black text-white">4.8</span>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={24}
                        className={star <= 4 ? "text-primary fill-primary" : "text-primary"}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground">Based on 15,000+ reviews</p>
                </div>
              </div>
              <DownloadButton />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;