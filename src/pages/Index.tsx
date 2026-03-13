import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ScheduleSection from "@/components/ScheduleSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LogisticsSection from "@/components/LogisticsSection";
import FooterCTA from "@/components/FooterCTA";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";

const Index = () => {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <div id="schedule" className="reveal-on-scroll">
        <ScheduleSection />
      </div>
      <div id="trust" className="reveal-on-scroll">
        <TrustSection />
      </div>
      <div id="testimonials" className="reveal-on-scroll">
        <TestimonialsSection />
      </div>
      <div id="logistics" className="reveal-on-scroll">
        <LogisticsSection />
      </div>
      <FooterCTA />
    </div>
  );
};

export default Index;
