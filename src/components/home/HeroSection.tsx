import { Smartphone, RefreshCw, HardDrive, Gamepad2 } from "lucide-react";
import DownloadButton from "@/components/ui/DownloadButton";
import InfoCard from "@/components/ui/InfoCard";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-main text-center py-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Summertime Saga Mod APK
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-primary uppercase tracking-wide">
            UNLIMITED MONEY, UNLOCK ALL COOKIE JARS
          </p>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Download the latest version of Summertime Saga with all premium features unlocked. Experience the ultimate adventure game on your Android device.
          </p>
          
          <div className="pt-4">
            <DownloadButton variant="hero" />
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          <InfoCard
            icon={Smartphone}
            label="Requirements"
            value="Android 5.0+"
          />
          <InfoCard
            icon={RefreshCw}
            label="Latest Version"
            value="v21.0.0"
          />
          <InfoCard
            icon={HardDrive}
            label="File Size"
            value="1.28 GB"
          />
          <InfoCard
            icon={Gamepad2}
            label="Category"
            value="Simulation"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;