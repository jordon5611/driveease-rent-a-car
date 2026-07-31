import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FleetSection from "@/components/FleetSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { homeSchema } from "@/lib/seo";

export default function Home() {
  return (
    <main>
      <JsonLd schema={homeSchema} />
      <Navbar />
      <HeroSection />
      <FleetSection />
      <ServicesSection />
      <WhyChooseUs />
      <HowItWorks />
      <ServiceAreas />
      <Testimonials />
      <FAQSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
