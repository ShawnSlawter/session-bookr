import { Button } from "@/components/ui/button";
import { ArrowDown, Dumbbell, Clock, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSchedule = () =>
    document
      .getElementById("schedule")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="relative min-h-[100svh] flex items-end pb-16 sm:pb-20 pt-24 overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Barbell on gym floor with dramatic lighting"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlays for readability */}
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-6 sm:mb-8">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
              Barcelona · Studio & Outdoor
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-foreground mb-5 sm:mb-6">
            Structured Strength Training That Fits Your Life
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-6 sm:mb-8">
            Efficient, focused sessions — in the studio or outdoors across Barcelona.
            Built around your schedule, not the other way around.
          </p>

          {/* Session type hints */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs sm:text-sm text-foreground">
              <Dumbbell className="h-3.5 w-3.5 text-primary" />
              <span>Strength</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(160,60%,50%,0.12)] px-3 py-1 text-xs sm:text-sm text-[hsl(160,60%,75%)]">
              <Clock className="h-3.5 w-3.5" />
              <span>Conditioning</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(220,60%,60%,0.12)] px-3 py-1 text-xs sm:text-sm text-[hsl(220,70%,80%)]">
              <MapPin className="h-3.5 w-3.5" />
              <span>Mobility</span>
            </span>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              onClick={scrollToSchedule}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base font-semibold shadow-[0_0_30px_hsl(24,95%,53%,0.2)]"
            >
              View This Week&apos;s Schedule
            </Button>
            <button
              onClick={scrollToSchedule}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              aria-label="Scroll to schedule"
            >
              <span>Scroll to schedule</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Promise strip */}
          <div className="mt-6 grid gap-2 text-xs sm:text-sm text-muted-foreground sm:grid-cols-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>3–5 focused sessions per week around your schedule.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>Private studio equipment plus outdoor options across Barcelona.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span>No motivational noise — just structured, evidence-based training.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
