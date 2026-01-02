import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ContentSection from "@/components/home/ContentSection";
import FAQSection from "@/components/home/FAQSection";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <ContentSection />
      <FAQSection />
    </Layout>
  );
};

export default Home;