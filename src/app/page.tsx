import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FleetSection from "@/components/FleetSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FleetSection />
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
