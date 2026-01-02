import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactCards = [
    {
      icon: Mail,
      title: "Email Us",
      description: "For general inquiries and support",
      link: "mailto:contact@summertimesagasdl.com",
      linkText: "contact@summertimesagasdl.com",
      color: "bg-blue-500"
    },
    {
      icon: MessageSquare,
      title: "Guest Posts",
      description: "Interested in contributing content?",
      link: "mailto:guestpost@summertimesagasdl.com",
      linkText: "guestpost@summertimesagasdl.com",
      color: "bg-green-500"
    }
  ];

  const quickLinks = [
    { name: "Disclaimer", path: "/disclaimer", desc: "Legal information and usage terms" },
    { name: "Privacy Policy", path: "/privacy-policy", desc: "How we handle your data" },
    { name: "Terms & Conditions", path: "/terms-and-conditions", desc: "Rules for using our website" },
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
            <Mail size={40} className="text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/80 mt-4 max-w-2xl mx-auto"
          >
            We'd love to hear from you! Get in touch with us.
          </motion.p>
        </div>
      </section>

      <div className="container-main section-padding">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you have questions, feedback, or inquiries about Summertime Saga Mod APK, feel free to reach out to us through the following channels.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <card.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{card.title}</h2>
                    <p className="text-muted-foreground mt-1">{card.description}</p>
                    <a
                      href={card.link}
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium mt-3 group"
                    >
                      {card.linkText}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="gradient-primary rounded-3xl p-8 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock size={32} className="text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">Response Time</h2>
                <p className="text-white/90">
                  We typically respond to all inquiries within 24-48 hours. Please be patient and we'll get back to you as soon as possible. For urgent matters, please indicate so in your email subject line.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <SectionHeading>Before You Contact Us</SectionHeading>
            <p className="text-muted-foreground">
              Please check our frequently asked questions and other pages before reaching out. You might find the answer you're looking for:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                >
                  <Link
                    to={link.path}
                    className="block bg-card rounded-2xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                  >
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{link.desc}</p>
                    <ArrowRight size={16} className="text-primary mt-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;