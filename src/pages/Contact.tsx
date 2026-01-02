import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="container-main section-padding">
        <article className="max-w-3xl mx-auto space-y-8">
          <SectionHeading as="h1">Contact Us</SectionHeading>
          
          <div className="prose prose-lg text-muted-foreground space-y-6 mt-8">
            <p>
              We'd love to hear from you! Whether you have questions, feedback, or inquiries about Summertime Saga Mod APK, feel free to reach out to us through the following channels.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 mt-8">
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Mail className="text-primary-foreground" size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Email Us</h2>
                </div>
                <p className="text-muted-foreground mb-3">
                  For general inquiries and support:
                </p>
                <a
                  href="mailto:contact@summertimesagasdl.com"
                  className="text-primary hover:underline font-medium"
                >
                  contact@summertimesagasdl.com
                </a>
              </div>
              
              <div className="bg-secondary rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <MessageSquare className="text-primary-foreground" size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Guest Posts</h2>
                </div>
                <p className="text-muted-foreground mb-3">
                  Interested in contributing content?
                </p>
                <a
                  href="mailto:guestpost@summertimesagasdl.com"
                  className="text-primary hover:underline font-medium"
                >
                  guestpost@summertimesagasdl.com
                </a>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-xl p-6 mt-8 border-2 border-primary">
              <h2 className="text-xl font-bold text-foreground mb-3">Response Time</h2>
              <p className="text-muted-foreground">
                We typically respond to all inquiries within 24-48 hours. Please be patient and we'll get back to you as soon as possible. For urgent matters, please indicate so in your email subject line.
              </p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-bold text-foreground mb-4">Before You Contact Us</h2>
              <p className="text-muted-foreground">
                Please check our frequently asked questions and other pages before reaching out. You might find the answer you're looking for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>
                  <a href="/disclaimer" className="text-primary hover:underline">
                    Disclaimer
                  </a>
                  {" "}- Legal information and usage terms
                </li>
                <li>
                  <a href="/privacy-policy" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  {" "}- How we handle your data
                </li>
                <li>
                  <a href="/terms-and-conditions" className="text-primary hover:underline">
                    Terms & Conditions
                  </a>
                  {" "}- Rules for using our website
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Contact;