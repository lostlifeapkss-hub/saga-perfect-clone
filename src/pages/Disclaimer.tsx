import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";

const Disclaimer = () => {
  return (
    <Layout>
      <div className="container-main section-padding">
        <article className="max-w-3xl mx-auto space-y-6">
          <SectionHeading as="h1">Disclaimer</SectionHeading>
          
          <div className="prose prose-lg text-muted-foreground space-y-4 mt-8">
            <p>
              The information provided on Summertime Saga Mod APK website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>
            
            <p>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">External Links Disclaimer</h2>
            <p>
              The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">Affiliation Disclaimer</h2>
            <p>
              This website is not affiliated with, endorsed by, or in any way officially connected with Summertime Saga or its developers. All game assets, logos, and trademarks are the property of their respective owners.
            </p>
            
            <h2 className="text-xl font-bold text-foreground mt-8">Mod APK Usage</h2>
            <p>
              Using modified versions of applications may violate the terms of service of the original application. We do not encourage or support piracy. Users should be aware of the risks involved in downloading and installing modified applications, including potential security risks and legal implications.
            </p>
            
            <p>
              By using this website, you agree to the terms of this disclaimer. If you do not agree with these terms, please do not use this website.
            </p>
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default Disclaimer;