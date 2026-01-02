import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-20" />
        <div className="container-main relative z-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <AlertTriangle size={40} className="text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Disclaimer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 mt-4 max-w-2xl mx-auto"
          >
            Important information about our website and services
          </motion.p>
        </div>
      </section>

      <div className="container-main section-padding">
        <article className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg space-y-8"
          >
            <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
              <p className="text-muted-foreground leading-relaxed">
                The information provided on Summertime Saga Mod APK website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <p className="text-muted-foreground leading-relaxed">
                Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
              </p>
            </div>

            <div className="space-y-6">
              <SectionHeading as="h2">External Links Disclaimer</SectionHeading>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <SectionHeading as="h2">Affiliation Disclaimer</SectionHeading>
              <div className="bg-primary/10 rounded-2xl p-8 border-2 border-primary">
                <p className="text-foreground leading-relaxed">
                  <strong>This website is not affiliated with, endorsed by, or in any way officially connected with Summertime Saga or its developers.</strong> All game assets, logos, and trademarks are the property of their respective owners.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <SectionHeading as="h2">Mod APK Usage</SectionHeading>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <p className="text-muted-foreground leading-relaxed">
                  Using modified versions of applications may violate the terms of service of the original application. We do not encourage or support piracy. Users should be aware of the risks involved in downloading and installing modified applications, including potential security risks and legal implications.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8 text-center">
              <p className="text-muted-foreground">
                By using this website, you agree to the terms of this disclaimer. If you do not agree with these terms, please do not use this website.
              </p>
            </div>
          </motion.div>
        </article>
      </div>
    </Layout>
  );
};

export default Disclaimer;