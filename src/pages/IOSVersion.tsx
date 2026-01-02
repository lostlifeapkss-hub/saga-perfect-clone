import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import DataTable from "@/components/ui/DataTable";
import DownloadButton from "@/components/ui/DownloadButton";
import { motion } from "framer-motion";
import { Apple, Download, Smartphone, AlertTriangle, Check } from "lucide-react";
import iosHero from "@/assets/ios-hero.jpg";

const compatibilityInfo = [
  { label: "iOS Version", value: "iOS 12.0 or later" },
  { label: "Compatible Devices", value: "iPhone 6s and later, all iPad Pro models" },
  { label: "File Size", value: "1.5 GB" },
  { label: "Game Version", value: "v20.5.0" },
  { label: "Sideload Method", value: "AltStore, Scarlet, or TrollStore" },
  { label: "Jailbreak Required", value: "No (for AltStore/Scarlet)" },
];

const sideloadSteps = [
  { title: "Install AltStore", desc: "Download AltStore from altstore.io on your PC/Mac and install it on your iPhone" },
  { title: "Download the IPA", desc: "Download the Summertime Saga .ipa file from the button above" },
  { title: "Open with AltStore", desc: "Open the IPA file with AltStore app on your device" },
  { title: "Trust the App", desc: "Go to Settings → General → Device Management and trust the developer" },
  { title: "Launch & Play", desc: "Find the app on your home screen and enjoy!" },
];

const IOSVersion = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={iosHero} alt="iOS Device" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center">
                <Apple size={28} className="text-white" />
              </div>
              <span className="text-gray-300 font-semibold text-lg">iOS Version</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Summertime Saga
              <span className="block text-gray-300">For iPhone & iPad</span>
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Play on your iOS device with our specially optimized version. Requires sideloading via AltStore or similar tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <DownloadButton variant="hero" />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-main section-padding">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Warning Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-yellow-500/10 border-2 border-yellow-500/50 rounded-2xl p-6 flex items-start gap-4"
          >
            <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-foreground mb-2">Important Notice for iOS Users</h3>
              <p className="text-muted-foreground">
                Due to Apple's restrictions, this app is not available on the App Store. You'll need to use a sideloading tool like AltStore, Scarlet, or TrollStore to install it. No jailbreak is required for most methods.
              </p>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading centered>Download for iOS</SectionHeading>
            <div className="mt-8 bg-card rounded-3xl p-8 border border-border text-center">
              <div className="w-20 h-20 bg-gray-800 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Apple size={40} className="text-white" />
              </div>
              <h3 className="font-bold text-xl text-foreground mb-2">Summertime Saga iOS</h3>
              <p className="text-primary font-semibold">Version 20.5.0</p>
              <p className="text-muted-foreground mt-1 mb-6">File size: 1.5 GB (.ipa)</p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 gradient-primary text-primary-foreground font-bold px-8 py-4 rounded-xl text-lg"
              >
                <Download size={20} />
                Download IPA
              </motion.a>
            </div>
          </motion.div>

          {/* Sideloading Guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Sideloading Guide (AltStore)</SectionHeading>
            <div className="mt-8 space-y-4">
              {sideloadSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border flex items-start gap-4"
                >
                  <span className="w-10 h-10 gradient-card rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-foreground">{step.title}</h4>
                    <p className="text-muted-foreground mt-1">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Compatibility Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Compatibility Information</SectionHeading>
            <div className="mt-8">
              <DataTable title="Device Requirements" data={compatibilityInfo} />
            </div>
          </motion.div>

          {/* Alternative Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading centered>Alternative Installation Methods</SectionHeading>
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                { name: "AltStore", desc: "Most popular and reliable sideloading tool", recommended: true },
                { name: "Scarlet", desc: "No computer required for installation", recommended: false },
                { name: "TrollStore", desc: "Permanent install (iOS 14.0-15.4.1)", recommended: false },
              ].map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className={`bg-card rounded-2xl p-6 border ${method.recommended ? 'border-primary' : 'border-border'} text-center`}
                >
                  {method.recommended && (
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-3">
                      Recommended
                    </span>
                  )}
                  <h4 className="font-bold text-foreground text-lg">{method.name}</h4>
                  <p className="text-muted-foreground text-sm mt-2">{method.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default IOSVersion;