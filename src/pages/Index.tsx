import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductShowcase />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
