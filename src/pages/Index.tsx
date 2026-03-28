import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ScheduleSection from "@/components/ScheduleSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LogisticsSection from "@/components/LogisticsSection";
import FooterCTA from "@/components/FooterCTA";
import { useRevealOnScroll } from "@/hooks/use-reveal-on-scroll";
import { BookingProvider } from "@/context/BookingContext";

const Index = () => {
  useRevealOnScroll();

  return (
    <BookingProvider>
      <div className="min-h-screen bg-ivory text-foreground relative selection:bg-primary/10">
        <Header />
        
        <main>
          <HeroSection />
          
          <div className="reveal-on-scroll">
            <TrustStrip />
          </div>

          <section id="schedule" className="reveal-on-scroll">
            <ScheduleSection />
          </section>

          <section id="trust" className="reveal-on-scroll">
            <TrustSection />
          </section>

          <section id="testimonials" className="reveal-on-scroll">
            <TestimonialsSection />
          </section>

          <section id="logistics" className="reveal-on-scroll">
            <LogisticsSection />
          </section>

          <div className="reveal-on-scroll">
            <FooterCTA />
          </div>
        </main>
      </div>
    </BookingProvider>
  );
};

export default Index;