import { Button } from "@/components/ui/button";
import { ArrowDown, ShieldCheck, Sparkles, Zap } from "lucide-react";
import heroBg from "@/assets/laser-hero-bg.jpg";

const HeroSection = () => {
  const scrollToBooking = () =>
    document
      .getElementById("trust")
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
        {/* Lighter, warmer overlays for readability */}
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-tag text-primary font-semibold">
              Austin, TX · Boutique Laser Studio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-foreground mb-5 sm:mb-6">
            Permanent Hair Removal.<br/>Clinically Safe.<br/>Beautifully Done.
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-6 sm:mb-8 font-medium">
            Maya Alvarez and her team specialize in laser hair removal for all skin tones — in a private Austin studio built around safety, real results, and your comfort.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1.5 text-xs font-semibold text-primary">
              <ShieldCheck className="h-4 w-4" />
              <span>FDA-Cleared Technology</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background border border-border px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-sm">
              <Sparkles className="h-4 w-4 text-primary/70" />
              <span>All Skin Tones Welcome</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background border border-border px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-sm">
              <Zap className="h-4 w-4 text-primary/70" />
              <span>No Downtime</span>
            </span>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-5">
            <Button
              size="lg"
              onClick={scrollToBooking}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-12 sm:h-14 text-[15px] font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
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
          <div className="mt-8 grid gap-3 text-sm text-foreground/80 sm:grid-cols-3 max-w-xl font-medium">
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
