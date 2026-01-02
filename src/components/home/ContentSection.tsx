import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import TableOfContents from "@/components/ui/TableOfContents";
import DataTable from "@/components/ui/DataTable";
import DownloadButton from "@/components/ui/DownloadButton";
import { Check, Star, Sparkles, Smartphone, Monitor, Apple, MapPin, Users, Gamepad, Trophy, Gift, Zap, Shield, Clock, Globe } from "lucide-react";
import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import screenshot3 from "@/assets/screenshot-3.jpg";
import screenshot4 from "@/assets/screenshot-4.jpg";
import gameIcon from "@/assets/game-icon.png";

const tocItems = [
  { id: "about", title: "About Summertime Saga" },
  { id: "cookie-jar", title: "Cookie Jar Frustration" },
  { id: "features", title: "Mod APK Features" },
  { id: "screenshots", title: "Game Screenshots" },
  { id: "gameplay", title: "Gameplay Overview" },
  { id: "walkthrough", title: "Game Walkthrough" },
  { id: "whats-new", title: "What's New in v21.0.0" },
  { id: "download", title: "How to Download" },
  { id: "versions", title: "All Versions" },
  { id: "install", title: "Installation Guide" },
  { id: "info", title: "Additional Information" },
];

const additionalInfo = [
  { label: "App Name", value: "Summertime Saga Mod APK" },
  { label: "Version", value: "v21.0.0-wip.6705 (Latest)" },
  { label: "Size", value: "1.28 GB" },
  { label: "Developer", value: "Kompas Productions" },
  { label: "Category", value: "Simulation / Adventure / Dating Sim" },
  { label: "MOD Features", value: "Unlimited Money, All Cookie Jars Unlocked, All Characters" },
  { label: "Requires Android", value: "5.0 and up" },
  { label: "Languages", value: "English, Spanish, French, German, Portuguese, Russian, Chinese" },
  { label: "Last Updated", value: "December 2024" },
  { label: "Downloads", value: "10,000,000+" },
];

const features = [
  { icon: Gift, title: "Unlimited Money", desc: "Get unlimited in-game currency to unlock everything instantly" },
  { icon: Trophy, title: "All Cookie Jars Unlocked", desc: "Access all secret content and collectibles from the start" },
  { icon: Shield, title: "No Ads Experience", desc: "Enjoy completely ad-free gameplay without interruptions" },
  { icon: Users, title: "All 65+ Characters Unlocked", desc: "Interact with every character immediately without grinding" },
  { icon: Zap, title: "Premium Features Free", desc: "Access all premium content without any payment" },
  { icon: Clock, title: "Save Game Support", desc: "Save and load your progress anytime, anywhere" },
  { icon: Sparkles, title: "HD Graphics Enhanced", desc: "Enhanced visuals with smooth 60fps animations" },
  { icon: Globe, title: "All Regions Unlocked", desc: "Explore all 30+ locations from the beginning" },
];

const screenshots = [screenshot1, screenshot2, screenshot3, screenshot4];

const versions = [
  { platform: "Android", icon: Smartphone, version: "v21.0.0", size: "1.28 GB", color: "bg-green-500" },
  { platform: "PC Version", icon: Monitor, version: "v21.0.0", size: "2.1 GB", color: "bg-blue-500" },
  { platform: "iOS Version", icon: Apple, version: "v20.5.0", size: "1.5 GB", color: "bg-gray-800" },
];

const walkthroughFeatures = [
  { icon: Gamepad, title: "Interactive Storyline", desc: "Experience a branching narrative with multiple endings based on your choices" },
  { icon: MapPin, title: "30+ Diverse Locations", desc: "Explore the town, beach, school, mall, and many more unique locations" },
  { icon: Users, title: "65+ Unique Characters", desc: "Build relationships with over 65 fully voiced NPCs with unique storylines" },
  { icon: Trophy, title: "Treasure Hunts & Quests", desc: "Complete dozens of side quests and discover hidden secrets" },
  { icon: Zap, title: "Stats & Skill System", desc: "Track your charisma, strength, and intelligence as you progress" },
  { icon: Sparkles, title: "25+ Mini-Games", desc: "Enjoy various arcade games, puzzles, and interactive challenges" },
];

const whatsNew = [
  "New story content with extended character arcs",
  "Additional locations: Downtown area and new beach zones",
  "Improved graphics and UI redesign",
  "Bug fixes and performance optimizations",
  "New mini-games and interactive events",
  "Enhanced save system with cloud backup support",
  "Additional dialogue options and story branches",
  "Improved character animations and expressions",
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

          {/* Cookie Jar Frustration Section */}
          <motion.div
            id="cookie-jar"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-primary/10 border-2 border-primary rounded-3xl p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                <img src={gameIcon} alt="Game Icon" className="w-20 h-20 rounded-2xl shadow-lg" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">Tired of Grinding for Cookie Jars?</h2>
                  <p className="text-primary font-semibold mt-1">We've got the solution for you!</p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Are you frustrated with spending countless hours trying to unlock all the Cookie Jars in Summertime Saga? The vanilla game requires extensive grinding, completing repetitive tasks, and following strict timelines just to access all the content.
                </p>
                <p>
                  Our <strong className="text-foreground">Mod APK</strong> eliminates this frustration completely! With unlimited money and all Cookie Jars pre-unlocked, you can dive straight into the full experience without any barriers. Enjoy the complete storyline, all character interactions, and every secret the game has to offer – right from the start.
                </p>
              </div>
            </div>
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
                  <strong className="text-foreground">Summertime Saga</strong> is a high-quality dating simulation and visual novel game developed by Kompas Productions. Set in a small suburban town, the game follows the story of a young man navigating life after the sudden death of his father.
                </p>
                <p>
                  The game features an engaging narrative filled with mystery, romance, and adventure. As you progress, you'll uncover the truth behind your father's mysterious debt while building relationships with over <span className="text-primary font-semibold">65 unique characters</span>.
                </p>
                <p>
                  With stunning hand-drawn artwork, fully voiced characters, and hundreds of hours of gameplay content, Summertime Saga has become one of the most popular games in its genre with over <span className="text-primary font-semibold">10 million downloads</span> worldwide.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={screenshot3}
                  alt="Game Environment"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
              <SectionHeading centered>Mod APK Features</SectionHeading>
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
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex items-start gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 gradient-card rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon size={22} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{feature.title}</h3>
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
              <SectionHeading centered>Game Screenshots</SectionHeading>
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
                  className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer aspect-[4/3]"
                >
                  <img
                    src={src}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
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
                In Summertime Saga, you'll experience an open-world adventure where every choice you make shapes your story. The game masterfully blends visual novel storytelling with dating sim mechanics and adventure game exploration.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl my-8"
              >
                <img
                  src={screenshot2}
                  alt="Beach Gameplay"
                  className="w-full h-auto"
                />
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h4 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                    <Gamepad className="text-primary" size={20} />
                    Core Mechanics
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Day-night cycle with weekly schedule system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Relationship building with multiple characters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Stat management (Charisma, Strength, Intelligence)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Branching storylines with multiple endings</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h4 className="font-bold text-foreground text-lg mb-4 flex items-center gap-2">
                    <MapPin className="text-primary" size={20} />
                    Exploration
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>30+ unique locations to discover</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Hidden secrets and easter eggs throughout</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Interactive environments and objects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check size={16} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>Dynamic world that changes with your progress</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Walkthrough Section */}
          <motion.div
            id="walkthrough"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-10">
              <SectionHeading centered>Game Walkthrough</SectionHeading>
              <p className="text-muted-foreground mt-4">
                Everything you'll experience in Summertime Saga
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {walkthroughFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 gradient-card rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* What's New Section */}
          <motion.div
            id="whats-new"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>What's New in v21.0.0</SectionHeading>
            <div className="mt-8 bg-card rounded-3xl p-8 border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 gradient-card rounded-xl flex items-center justify-center">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Latest Update</h3>
                  <p className="text-muted-foreground text-sm">Released December 2024</p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-3">
                {whatsNew.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
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
                <p className="text-white/90 mb-6 text-lg">
                  Follow these simple steps to download Summertime Saga Mod APK:
                </p>
                <ol className="space-y-4">
                  {[
                    'Click the "Download Now" button below',
                    "Wait for the download to complete (1.28 GB)",
                    'Go to Settings → Security → Enable "Unknown Sources"',
                    "Open the downloaded APK file from your file manager",
                    'Tap "Install" and wait for installation to complete',
                    "Launch the game and enjoy all unlocked features!",
                  ].map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-white/90 pt-2">{step}</span>
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
              <SectionHeading centered>All Versions</SectionHeading>
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
                { step: "Step 1", title: "Enable Unknown Sources", desc: "Go to Settings → Security → Unknown Sources and enable it to allow installation from external sources." },
                { step: "Step 2", title: "Download the APK", desc: "Click the download button and wait for the 1.28GB file to complete. Ensure you have enough storage space." },
                { step: "Step 3", title: "Install the Game", desc: "Open your file manager, navigate to Downloads folder, and tap on the APK file to begin installation." },
                { step: "Step 4", title: "Launch and Play", desc: "Find the Summertime Saga icon in your app drawer, tap to launch, and enjoy all the unlocked features!" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors"
                >
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-3">{item.step}</span>
                  <h4 className="font-bold text-foreground text-lg">{item.title}</h4>
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
            whileHover={{ scale: 1.01 }}
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