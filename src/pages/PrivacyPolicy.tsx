import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="container-main section-padding">
        <article className="max-w-3xl mx-auto space-y-6">
          <SectionHeading as="h1">Privacy Policy</SectionHeading>
          
          <div className="prose prose-lg text-muted-foreground space-y-4 mt-8">
            <p>
              At Summertime Saga Mod APK, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Summertime Saga Mod APK and how we use it.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service and updates</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
            
            <h2 className="text-xl font-bold text-foreground mt-8">Cookies</h2>
            <p>
              Like any other website, Summertime Saga Mod APK uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">Third Party Privacy Policies</h2>
            <p>
              Summertime Saga Mod APK's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">Children's Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us through our Contact page.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;