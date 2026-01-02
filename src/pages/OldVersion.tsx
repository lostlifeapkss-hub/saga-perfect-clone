import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Archive, Download, Calendar, HardDrive, AlertCircle } from "lucide-react";
import gameIcon from "@/assets/game-icon.png";

const oldVersions = [
  { version: "v20.5.0", date: "October 2024", size: "1.25 GB", changes: "New character routes, bug fixes" },
  { version: "v20.0.0", date: "August 2024", size: "1.22 GB", changes: "Major content update, new locations" },
  { version: "v19.5.0", date: "June 2024", size: "1.18 GB", changes: "Performance improvements, UI updates" },
  { version: "v19.0.0", date: "April 2024", size: "1.15 GB", changes: "New storylines, character additions" },
  { version: "v18.6.0", date: "February 2024", size: "1.10 GB", changes: "Bug fixes, stability improvements" },
  { version: "v18.5.0", date: "December 2023", size: "1.08 GB", changes: "Holiday update, new events" },
  { version: "v18.0.0", date: "October 2023", size: "1.05 GB", changes: "Major gameplay overhaul" },
  { version: "v17.5.0", date: "August 2023", size: "1.02 GB", changes: "New mini-games added" },
];

const OldVersion = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Archive size={40} className="text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Old Versions Archive
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 mt-4 max-w-2xl mx-auto"
          >
            Download previous versions of Summertime Saga if you need them for compatibility or preference
          </motion.p>
        </div>
      </section>

      <div className="container-main section-padding">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 flex items-start gap-4"
          >
            <AlertCircle className="text-blue-500 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-foreground mb-2">Why Use Old Versions?</h3>
              <p className="text-muted-foreground">
                Some players prefer older versions for various reasons: device compatibility, nostalgia, or specific features that may have changed. We keep an archive of all previous versions for your convenience. Note that older versions may lack recent bug fixes and new content.
              </p>
            </div>
          </motion.div>

          {/* Version List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading>Historical Versions</SectionHeading>
            <div className="mt-8 space-y-4">
              {oldVersions.map((version, index) => (
                <motion.div
                  key={version.version}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img src={gameIcon} alt="Version" className="w-14 h-14 rounded-xl shadow-md" />
                      <div>
                        <h3 className="font-bold text-foreground text-lg">{version.version}</h3>
                        <div className="flex flex-wrap items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {version.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <HardDrive size={14} />
                            {version.size}
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm mt-2">{version.changes}</p>
                      </div>
                    </div>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center gap-2 gradient-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl whitespace-nowrap"
                    >
                      <Download size={18} />
                      Download
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-2xl p-6 text-center"
          >
            <p className="text-muted-foreground">
              💡 <strong className="text-foreground">Pro Tip:</strong> Always backup your save files before switching versions. Save files are usually located in the Android/data folder.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default OldVersion;