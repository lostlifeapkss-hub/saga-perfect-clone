import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const TermsAndConditions = () => {
  const sections = [
    {
      number: "1",
      title: "License",
      content: "Unless otherwise stated, Summertime Saga Mod APK and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from Summertime Saga Mod APK for your own personal use subjected to restrictions set in these terms and conditions.",
      list: [
        "Republish material from Summertime Saga Mod APK",
        "Sell, rent, or sub-license material",
        "Reproduce, duplicate, or copy material",
        "Redistribute content from Summertime Saga Mod APK"
      ]
    },
    {
      number: "2",
      title: "User Comments",
      content: "Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Summertime Saga Mod APK does not filter, edit, publish, or review Comments prior to their presence on the website."
    },
    {
      number: "3",
      title: "Hyperlinking to our Content",
      content: "The following organizations may link to our Website without prior written approval: Government agencies, Search engines, News organizations, Online directory distributors, and System-wide Accredited Businesses."
    },
    {
      number: "4",
      title: "iFrames",
      content: "Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website."
    },
    {
      number: "5",
      title: "Content Liability",
      content: "We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website."
    },
    {
      number: "6",
      title: "Reservation of Rights",
      content: "We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request."
    },
    {
      number: "7",
      title: "Disclaimer",
      content: "To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website."
    }
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
            <FileText size={40} className="text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 mt-4 max-w-2xl mx-auto"
          >
            Rules and regulations for using our website
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
              Welcome to Summertime Saga Mod APK. These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions.
            </p>
          </motion.div>

          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 gradient-card rounded-xl flex items-center justify-center text-white font-bold">
                  {section.number}
                </span>
                <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors ml-0 md:ml-13">
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                {section.list && (
                  <ul className="mt-4 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </article>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;