import SectionHeading from "@/components/ui/SectionHeading";
import TableOfContents from "@/components/ui/TableOfContents";
import DataTable from "@/components/ui/DataTable";
import DownloadButton from "@/components/ui/DownloadButton";
import { Check, Star } from "lucide-react";

const tocItems = [
  { id: "about", title: "About Summertime Saga" },
  { id: "features", title: "Mod APK Features" },
  { id: "gameplay", title: "Gameplay Overview" },
  { id: "download", title: "How to Download" },
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
  "Unlimited Money - Get unlimited in-game currency",
  "All Cookie Jars Unlocked - Access all secret content",
  "No Ads - Enjoy ad-free gameplay experience",
  "All Characters Unlocked - Interact with all characters",
  "Premium Features - Access all premium content for free",
  "Save Game Support - Save and load your progress anytime",
  "High Quality Graphics - Enhanced visuals and animations",
  "Regular Updates - Get the latest content and bug fixes",
];

const ContentSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-main">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Table of Contents */}
          <TableOfContents items={tocItems} />

          {/* About Section */}
          <div id="about" className="scroll-mt-24 space-y-4">
            <SectionHeading>About Summertime Saga</SectionHeading>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Summertime Saga is a high-quality dating simulation game developed by Kompas Productions. The game follows the story of a young man whose father has recently passed away, leaving him with unanswered questions and a mysterious debt. As the protagonist, you'll navigate through school life, relationships, and uncover the secrets behind your father's death.
              </p>
              <p>
                With stunning visuals, engaging storylines, and multiple character routes to explore, Summertime Saga has become one of the most popular adult simulation games available. The game features over 65 unique characters, 30+ locations to explore, and hundreds of hours of gameplay content.
              </p>
              <p>
                Our Mod APK version enhances your gaming experience by providing unlimited money and unlocking all cookie jars, allowing you to enjoy all the premium content without any restrictions.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div id="features" className="scroll-mt-24 space-y-4">
            <SectionHeading>Mod APK Features</SectionHeading>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-secondary rounded-lg border border-border"
                >
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gameplay Section */}
          <div id="gameplay" className="scroll-mt-24 space-y-4">
            <SectionHeading>Gameplay Overview</SectionHeading>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                In Summertime Saga, you'll experience an open-world adventure where your choices matter. The game combines elements of visual novels, dating simulators, and adventure games to create a unique and immersive experience.
              </p>
              <p>
                <strong className="text-foreground">Key Gameplay Elements:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Explore a vast open world with multiple locations</li>
                <li>Build relationships with various characters</li>
                <li>Complete quests and mini-games to progress the story</li>
                <li>Make choices that affect the outcome of the game</li>
                <li>Discover hidden secrets and easter eggs throughout the game</li>
                <li>Customize your character and living space</li>
              </ul>
              <p>
                The game features a day-night cycle and weekly schedule system, making the world feel alive and dynamic. Each character has their own unique storyline that you can pursue, with multiple endings based on your choices.
              </p>
            </div>
          </div>

          {/* Download Section */}
          <div id="download" className="scroll-mt-24 space-y-4">
            <SectionHeading>How to Download</SectionHeading>
            <div className="mt-6 bg-primary/10 border-2 border-primary rounded-xl p-6 space-y-4">
              <p className="text-foreground">
                Follow these simple steps to download Summertime Saga Mod APK:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                <li>Click the <strong className="text-primary">"Download Now"</strong> button below</li>
                <li>Wait for the download to complete (file size: 1.28 GB)</li>
                <li>Enable "Install from Unknown Sources" in your device settings</li>
                <li>Open the downloaded APK file and tap "Install"</li>
                <li>Wait for the installation to complete</li>
                <li>Launch the game and enjoy!</li>
              </ol>
              <div className="pt-4">
                <DownloadButton />
              </div>
            </div>
          </div>

          {/* Installation Guide */}
          <div id="install" className="scroll-mt-24 space-y-4">
            <SectionHeading>Installation Guide</SectionHeading>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Step 1: Enable Unknown Sources</strong>
              </p>
              <p>
                Go to Settings → Security → Unknown Sources and enable it. This allows you to install apps from sources other than the Google Play Store.
              </p>
              <p>
                <strong className="text-foreground">Step 2: Download the APK</strong>
              </p>
              <p>
                Click the download button on this page to start downloading the Summertime Saga Mod APK file. Make sure you have at least 2GB of free storage space.
              </p>
              <p>
                <strong className="text-foreground">Step 3: Install the Game</strong>
              </p>
              <p>
                Once the download is complete, open your file manager and navigate to the Downloads folder. Tap on the APK file and select "Install" when prompted.
              </p>
              <p>
                <strong className="text-foreground">Step 4: Launch and Play</strong>
              </p>
              <p>
                After installation, you can find the game icon in your app drawer. Tap to launch and start your adventure!
              </p>
            </div>
          </div>

          {/* Additional Information Table */}
          <div id="info" className="scroll-mt-24 space-y-4">
            <SectionHeading>Additional Information</SectionHeading>
            <div className="mt-6">
              <DataTable title="App Details" data={additionalInfo} />
            </div>
          </div>

          {/* Rating Box */}
          <div className="bg-secondary rounded-xl p-6 border border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={24}
                      className={star <= 4 ? "text-primary fill-primary" : "text-primary"}
                    />
                  ))}
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">4.8 / 5.0</p>
                  <p className="text-muted-foreground text-sm">Based on 15,000+ reviews</p>
                </div>
              </div>
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;