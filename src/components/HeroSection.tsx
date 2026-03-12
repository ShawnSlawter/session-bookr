import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { toast } from "sonner";

const HeroSection = () => {
  const handleBook = () => toast("Demo mode — booking not yet connected");
  const scrollToSchedule = () =>
    document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-[100svh] flex items-end pb-16 sm:pb-20 pt-24 overflow-hidden">
      {/* Hero background — abstract training environment */}
      <div className="absolute inset-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(0,0%,7%)] to-background" />
        
        {/* Geometric shapes suggesting structure / gym environment */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          {/* Barbell-like horizontal lines */}
          <rect x="100" y="300" width="400" height="3" fill="hsl(24, 95%, 53%)" rx="1.5" />
          <rect x="700" y="300" width="400" height="3" fill="hsl(24, 95%, 53%)" rx="1.5" />
          <circle cx="500" cy="301" r="40" stroke="hsl(24, 95%, 53%)" strokeWidth="3" fill="none" />
          <circle cx="700" cy="301" r="40" stroke="hsl(24, 95%, 53%)" strokeWidth="3" fill="none" />
          
          {/* Grid pattern */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`v${i}`} x1={150 * (i + 1)} y1="0" x2={150 * (i + 1)} y2="800" stroke="hsl(0,0%,30%)" strokeWidth="0.5" />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={160 * (i + 1)} x2="1200" y2={160 * (i + 1)} stroke="hsl(0,0%,30%)" strokeWidth="0.5" />
          ))}
          
          {/* Diagonal energy lines */}
          <line x1="0" y1="800" x2="600" y2="200" stroke="hsl(24, 95%, 53%)" strokeWidth="1" opacity="0.5" />
          <line x1="1200" y1="800" x2="600" y2="200" stroke="hsl(24, 95%, 53%)" strokeWidth="1" opacity="0.5" />
        </svg>

        {/* Warm gradient overlay from bottom-right */}
        <div className="absolute inset-0 bg-gradient-to-tl from-[hsl(24,95%,53%,0.06)] via-transparent to-transparent" />
        
        {/* Bottom fade for content readability */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background via-background/80 to-transparent" />
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
