import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect in various ways, including to provide, operate, and maintain our website, improve and personalize your experience, understand how you use our website, develop new products and features, communicate with you for updates and customer service, send you emails, and find and prevent fraud."
    },
    {
      title: "Cookies",
      content: "Like any other website, Summertime Saga Mod APK uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information."
    },
    {
      title: "Third Party Privacy Policies",
      content: "Summertime Saga Mod APK's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information."
    },
    {
      title: "Children's Information",
      content: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity."
    },
  ];

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
            <Shield size={40} className="text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 mt-4 max-w-2xl mx-auto"
          >
            How we collect, use, and protect your information
          </motion.p>
        </div>
      </section>

      <div className="container-main section-padding">
        <article className="max-w-3xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl p-8 border border-border shadow-lg"
          >
            <p className="text-muted-foreground leading-relaxed">
              At Summertime Saga Mod APK, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Summertime Saga Mod APK and how we use it.
            </p>
          </motion.div>

          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <SectionHeading as="h2">{section.title}</SectionHeading>
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors">
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/10 rounded-2xl p-8 border-2 border-primary text-center"
          >
            <h3 className="font-bold text-foreground text-lg mb-2">Contact Us</h3>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us through our Contact page.
            </p>
          </motion.div>
        </article>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;