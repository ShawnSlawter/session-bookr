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
      <div className="min-h-screen bg-ivory text-foreground selection:bg-primary/10">
        <Header />
        <HeroSection />
      
      {/* Section 1: Trust Strip (Ivory) */}
      <div className="relative">
        <div className="absolute inset-0 bg-ivory" />
        <div className="relative z-10 reveal-on-scroll">
          <TrustStrip />
        </div>
      </div>

      {/* Junction 1: Ivory -> Cream */}
      <div className="atmospheric-junction -mt-48 bg-gradient-to-b from-ivory to-cream" />

      {/* Section 2: Schedule (Cream) */}
      <div id="schedule" className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-cream" />
        <div className="relative z-10 reveal-on-scroll">
          <ScheduleSection />
        </div>
      </div>

      {/* Junction 2: Cream -> Taupe */}
      <div className="atmospheric-junction -mt-48 bg-gradient-to-b from-cream to-taupe" />

      {/* Section 3: Trust (Taupe) */}
      <div id="trust" className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-taupe" />
        <div className="relative z-10 reveal-on-scroll">
          <TrustSection />
        </div>
      </div>

      {/* Junction 3: Taupe -> Blush */}
      <div className="atmospheric-junction -mt-48 bg-gradient-to-b from-taupe to-blush" />

      {/* Section 4: Testimonials (Blush) */}
      <div id="testimonials" className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-blush" />
        <div className="relative z-10 reveal-on-scroll">
          <TestimonialsSection />
        </div>
      </div>

      {/* Junction 4: Blush -> Stone */}
      <div className="atmospheric-junction -mt-48 bg-gradient-to-b from-blush to-stone" />

      {/* Section 5: Logistics (Stone) */}
      <div id="logistics" className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-stone" />
        <div className="relative z-10 reveal-on-scroll">
          <LogisticsSection />
        </div>
      </div>

      {/* Junction 5: Stone -> Taupe (Footer transition) */}
      <div className="atmospheric-junction -mt-48 bg-gradient-to-b from-stone to-taupe" />

      <div className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-taupe" />
        <div className="relative z-10 reveal-on-scroll">
          <FooterCTA />
        </div>
        </div>
      </div>
    </BookingProvider>
  );
};

export default Index;
