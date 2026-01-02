import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const TermsAndConditions = () => {
  return (
    <Layout>
      <div className="container-main section-padding">
        <article className="max-w-3xl mx-auto space-y-6">
          <SectionHeading as="h1">Terms & Conditions</SectionHeading>
          
          <div className="prose prose-lg text-muted-foreground space-y-4 mt-8">
            <p>
              Welcome to Summertime Saga Mod APK. These terms and conditions outline the rules and regulations for the use of our website.
            </p>
            
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use Summertime Saga Mod APK if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">1. License</h2>
            <p>
              Unless otherwise stated, Summertime Saga Mod APK and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this from Summertime Saga Mod APK for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Republish material from Summertime Saga Mod APK</li>
              <li>Sell, rent, or sub-license material from Summertime Saga Mod APK</li>
              <li>Reproduce, duplicate, or copy material from Summertime Saga Mod APK</li>
              <li>Redistribute content from Summertime Saga Mod APK</li>
            </ul>
            
            <h2 className="text-xl font-bold text-foreground mt-8">2. User Comments</h2>
            <p>
              Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Summertime Saga Mod APK does not filter, edit, publish, or review Comments prior to their presence on the website.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">3. Hyperlinking to our Content</h2>
            <p>
              The following organizations may link to our Website without prior written approval: Government agencies, Search engines, News organizations, Online directory distributors, and System-wide Accredited Businesses.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">4. iFrames</h2>
            <p>
              Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">5. Content Liability</h2>
            <p>
              We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">6. Reservation of Rights</h2>
            <p>
              We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">7. Disclaimer</h2>
            <p>
              To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default TermsAndConditions;