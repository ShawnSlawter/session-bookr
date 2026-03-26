import { Button } from "@/components/ui/button";
import { ArrowDown, ShieldCheck, Sparkles, Zap } from "lucide-react";
import heroBg from "@/assets/laser-hero-bg.jpg";

import { useBookingDemo } from "@/context/BookingContext";

const HeroSection = () => {
  const { openBookingDemo } = useBookingDemo();
  
  const scrollToBooking = () =>
    document
      .getElementById("schedule")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="hero-section relative min-h-[100svh] flex items-end pb-16 sm:pb-20 pt-24 overflow-hidden bg-background">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Warm, softly lit boutique laser hair removal treatment room"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Surgical Text-Zone Shield — ensures high contrast for all content without washing out the room detail */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-gradient-to-r from-background via-background/90 to-transparent opacity-95 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-70 z-0" />
        <div className="absolute inset-0 backdrop-blur-[0.5px] opacity-40 z-0" />
        
        {/* Controlled Light Blooms */}
        <div className="premium-glow-orb bg-primary/5 left-[-5%] top-[10%] opacity-20" />
        <div className="premium-glow-orb bg-white/10 right-[-5%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-8 h-px bg-primary/40" />
            <span className="text-xs uppercase tracking-tag text-primary font-bold">
              Austin, TX · Boutique Laser Studio
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold leading-[0.9] tracking-tight text-espresso mb-6 sm:mb-8">
            <span className="block font-light text-espresso/60 mb-1">Permanent</span>
            <span className="block text-primary italic leading-[0.8]">Hair Removal.</span>
            <div className="flex items-center gap-3 mt-6 sm:mt-8">
              <span className="h-px w-8 bg-primary/30 hidden sm:block" />
              <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-espresso/90 tracking-tight">
                Safe. Precise. <span className="text-primary/95">Beautifully done.</span>
              </p>
            </div>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-6 sm:mb-8 font-medium">
            Maya Alvarez and her team specialize in laser hair removal for all skin tones — in a private Austin studio built around safety, real results, and your comfort.
          </p>

          {/* Trust markers — tightened premium signals */}
          <div className="flex flex-wrap items-center gap-2.5 mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/[0.03] border border-primary/10 flex-shrink-0 px-4 py-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-primary shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5 opacity-80" />
              <span>FDA-Cleared</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/40 backdrop-blur-sm border border-border/40 px-4 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-espresso/80 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary/60" />
              <span>All skin tones</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/40 backdrop-blur-md border border-border/40 px-4 py-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-espresso/80 shadow-sm">
              <Zap className="h-3.5 w-3.5 text-primary/60" />
              <span>Cooling-first comfort</span>
            </span>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-5">
            <Button
              size="lg"
              onClick={openBookingDemo}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-10 h-14 sm:h-16 text-base font-semibold shadow-[0_20px_50px_-12px_hsla(340,30%,48%,0.45)] hover:shadow-[0_25px_60px_-12px_hsla(340,30%,48%,0.6)] transition-all duration-700 hover:scale-[1.02] active:scale-[0.98] border border-white/20"
            >
              Book My Free Consultation
            </Button>
            <button
              onClick={scrollToBooking}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground font-medium transition-all duration-300 hover-lift group"
              aria-label="Scroll down to learn more about Maya Alvarez Laser Studio"
            >
              <span>See how it works</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300 text-primary/60" aria-hidden="true" />
            </button>
          </div>

          {/* Promise strip */}
          <div className="mt-8 grid gap-3 text-sm text-espresso/90 sm:grid-cols-3 max-w-xl font-medium">
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary mt-1.5" />
              <span className="leading-tight">Permanent reduction — not just temporary smoothing.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary mt-1.5" />
              <span className="leading-tight">Safe for all skin tones, including Fitzpatrick IV–VI.</span>
            </div>
            <div className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary mt-1.5" />
              <span className="leading-tight">Free consultation. No commitment. No pressure.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
