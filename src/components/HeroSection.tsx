import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const handleBook = () => toast("Demo mode — booking not yet connected");
  const scrollToSchedule = () =>
    document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });

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
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
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

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-8 sm:mb-10">
            Efficient, focused sessions — in the studio or outdoors across Barcelona. 
            Built around your schedule, not the other way around.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              onClick={handleBook}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base font-semibold shadow-[0_0_30px_hsl(24,95%,53%,0.2)]"
            >
              Book Your Session
            </Button>
            <button
              onClick={scrollToSchedule}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span>View Schedule</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
