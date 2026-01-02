import SectionHeading from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is Summertime Saga Mod APK safe to download?",
    answer:
      "Yes, our Mod APK is completely safe to download and install. We scan all files for malware and viruses before making them available. However, we always recommend downloading from trusted sources and keeping your antivirus software updated.",
  },
  {
    question: "What are the system requirements?",
    answer:
      "Summertime Saga requires Android 5.0 or higher with at least 2GB of RAM and 2GB of free storage space. For the best experience, we recommend a device with 4GB RAM or more.",
  },
  {
    question: "Will I lose my progress if I update to a new version?",
    answer:
      "No, your save files are stored separately from the game files. When you update to a new version, your progress will be preserved. However, we recommend backing up your save files before any major update.",
  },
  {
    question: "Can I play Summertime Saga offline?",
    answer:
      "Yes, Summertime Saga is a fully offline game. Once you've downloaded and installed the game, you don't need an internet connection to play. This makes it perfect for playing on the go.",
  },
  {
    question: "How do I transfer my save files to a new device?",
    answer:
      "You can find your save files in the Android/data/com.summertimesaga folder. Simply copy these files to your new device in the same location, and your progress will be restored.",
  },
  {
    question: "What's included in the Mod APK version?",
    answer:
      "Our Mod APK includes unlimited money, all cookie jars unlocked, ad-free experience, all characters unlocked, and all premium features available from the start. This lets you enjoy the full game without any restrictions.",
  },
  {
    question: "Is this game available for iOS?",
    answer:
      "Currently, the Mod APK version is only available for Android devices. iOS users can check our iOS Version page for alternative download options and compatibility information.",
  },
  {
    question: "How often is the game updated?",
    answer:
      "The developers regularly release updates with new content, bug fixes, and improvements. We update our Mod APK within 24-48 hours of any official release to ensure you always have access to the latest version.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-main">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <SectionHeading>Frequently Asked Questions</SectionHeading>
            <p className="text-muted-foreground mt-4">
              Find answers to the most commonly asked questions about Summertime Saga Mod APK.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg border border-border px-6 data-[state=open]:border-primary"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;