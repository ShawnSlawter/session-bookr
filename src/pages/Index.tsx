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
import SentryTest from "@/components/SentryTest";

const Index = () => {
  useRevealOnScroll();

  return (
    <BookingProvider>
      <div className="min-h-screen bg-ivory text-foreground relative selection:bg-primary/10">
        
        {/* Continuous Global Ambient Layer */}
        <style>{`
          @keyframes float-orb-1 {
            0% { transform: translate(0%, 0%) scale(1); opacity: 0.6; }
            33% { transform: translate(15%, 25%) scale(1.1); opacity: 0.8; }
            66% { transform: translate(-10%, 15%) scale(0.9); opacity: 0.7; }
            100% { transform: translate(0%, 0%) scale(1); opacity: 0.6; }
          }
          @keyframes float-orb-2 {
            0% { transform: translate(0%, 0%) scale(1.1); opacity: 0.8; }
            33% { transform: translate(-20%, -15%) scale(0.9); opacity: 0.6; }
            66% { transform: translate(10%, -25%) scale(1.2); opacity: 0.9; }
            100% { transform: translate(0%, 0%) scale(1.1); opacity: 0.8; }
          }
          @keyframes float-orb-3 {
            0% { transform: translate(0%, 0%) scale(0.9); opacity: 0.7; }
            33% { transform: translate(25%, -20%) scale(1.2); opacity: 0.9; }
            66% { transform: translate(15%, 20%) scale(1); opacity: 0.6; }
            100% { transform: translate(0%, 0%) scale(0.9); opacity: 0.7; }
          }
          @keyframes float-orb-4 {
            0% { transform: translate(0%, 0%) scale(1.2); opacity: 0.8; }
            33% { transform: translate(-15%, 20%) scale(1); opacity: 0.6; }
            66% { transform: translate(-25%, -10%) scale(0.9); opacity: 0.7; }
            100% { transform: translate(0%, 0%) scale(1.2); opacity: 0.8; }
          }
        `}</style>

        <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          {/* Top Left - Muted Rose */}
          <div
            className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsla(340, 35%, 88%, 0.85) 0%, hsla(340, 35%, 88%, 0) 65%)',
              animation: 'float-orb-1 16s ease-in-out infinite',
              willChange: 'transform, opacity'
            }}
          />
          {/* Bottom Right - Warm Taupe */}
          <div
            className="absolute bottom-[-20%] right-[-20%] w-[90vw] h-[90vw] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsla(35, 30%, 84%, 0.8) 0%, hsla(35, 30%, 84%, 0) 65%)',
              animation: 'float-orb-2 20s ease-in-out infinite',
              willChange: 'transform, opacity'
            }}
          />
          {/* Bottom Left - Pale Blush */}
          <div
            className="absolute bottom-[0%] left-[10%] w-[60vw] h-[60vw] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsla(345, 25%, 90%, 0.75) 0%, hsla(345, 25%, 90%, 0) 60%)',
              animation: 'float-orb-3 18s ease-in-out infinite',
              willChange: 'transform, opacity'
            }}
          />
          {/* Top Right - Soft Cream */}
          <div
            className="absolute top-[10%] right-[0%] w-[70vw] h-[70vw] rounded-full"
            style={{
              background: 'radial-gradient(circle, hsla(40, 40%, 92%, 0.8) 0%, hsla(40, 40%, 92%, 0) 65%)',
              animation: 'float-orb-4 22s ease-in-out infinite',
              willChange: 'transform, opacity'
            }}
          />
        </div>

        <div className="relative z-50">
          <Header />
        </div>
        
        <main className="relative z-10 w-full">
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
        <SentryTest />
      </div>
    </BookingProvider>

  );
};

export default Index;