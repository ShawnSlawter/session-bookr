import { Star, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "./ui/SectionHeader";

interface Review {
  quote: string;
  name: string;
  treatmentArea: string;
  sessions: number;
  highlight: string;
  tags: string[];
}

const reviews: Review[] = [
  {
    quote:
      "I was skeptical because of my PCOS, but after 4 sessions the dark spots on my chin are gone. The cooling tech means it barely even feels like a zap.",
    name: "Elena R.",
    treatmentArea: "Full Face & Neck",
    sessions: 4,
    highlight: "PCOS-friendly · Painless",
    tags: ["PCOS", "Dark Hair", "Face"],
  },
  {
    quote:
      "I've tried other clinics in Austin and it felt like a cattle call. Maya actually took the time to map my hair growth. Six sessions in and I'm razor-free.",
    name: "Sarah M.",
    treatmentArea: "Bikini & Underarms",
    sessions: 6,
    highlight: "Razor-free · Customized",
    tags: ["Bikini", "Underarms", "Sensitive Skin"],
  },
  {
    quote:
      "As a guy, I was nervous about coming in for my back and shoulders. The space is private, professional, and the results are night and day.",
    name: "David K.",
    treatmentArea: "Back & Shoulders",
    sessions: 5,
    highlight: "Professional · Fast",
    tags: ["Men's Laser", "Back", "Shoulders"],
  },
];

const TestimonialsSection = () => {
  return (
    <section id="proof" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Soft background glow for a premium feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-3xl rounded-full pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <SectionHeader
            label="Real Results"
            title="Don't just take our word for it."
          />
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((t, i) => (
            <div
              key={i}
              className="bg-background/40 backdrop-blur-md rounded-2xl p-7 sm:p-8 flex flex-col transition-all duration-500 hover:-translate-y-1 border border-primary/10 hover:border-primary/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] relative overflow-hidden group"
            >
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-base font-medium tracking-tight text-foreground">
                      {t.name}
                    </p>
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary/60" />
                  </div>
                  <div className="flex items-center gap-1 text-primary/40">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/5 text-primary text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-[15px] sm:text-base text-foreground/80 leading-relaxed mb-6 flex-1 font-light italic">
                "{t.quote}"
              </p>

              <div className="pt-5 border-t border-border/40 flex items-center justify-between text-[11px] uppercase tracking-wider text-muted-foreground/80 font-medium">
                <div className="flex flex-col gap-1">
                  <span>Area</span>
                  <span className="text-foreground/90">{t.treatmentArea}</span>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <span>Progression</span>
                  <span className="text-foreground/90">{t.sessions} Sessions</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Proof / Before & After Section */}
        <div className="mt-20 sm:mt-24">
          <div className="bg-background/40 backdrop-blur-md border border-primary/10 rounded-3xl overflow-hidden shadow-[0_20px_40px_rgb(0,0,0,0.06)] relative">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 sm:p-14 lg:p-16 flex flex-col justify-center relative z-10">
                <Badge className="w-fit mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-none uppercase tracking-widest text-[10px] px-3 py-1 font-bold">
                  Clinical Results Viewer
                </Badge>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight mb-5 text-foreground leading-snug">
                  See the difference <br/><span className="font-semibold">for yourself.</span>
                </h3>
                <p className="text-muted-foreground mb-10 text-[15px] sm:text-base leading-relaxed max-w-md">
                  Every hair type and skin tone requires a custom approach. See our gallery of real, unedited results from clients just like you.
                </p>
                <button
                  onClick={() => document.getElementById("consultation")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-foreground text-background px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide w-fit hover:bg-foreground/90 transition-all duration-300 shadow-lg shadow-foreground/10"
                >
                  Book Free Consultation
                </button>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground/60 mt-6 font-medium">
                  Full clinical galleries shared privately during consultation.
                </p>
              </div>
              
              <div className="relative min-h-[350px] lg:min-h-full flex items-center justify-center border-t lg:border-t-0 lg:border-l border-primary/10 p-6 sm:p-10 lg:p-14 bg-card/30">
                {/* Styled Faux Slider Component */}
                <div className="w-full h-full max-w-md mx-auto relative rounded-2xl overflow-hidden shadow-2xl shadow-black/5 bg-muted/30 border border-border/50 group">
                  
                  {/* Faux Images */}
                  <div className="absolute inset-0 grid grid-cols-2">
                    {/* Before Side */}
                    <div className="relative bg-zinc-100 dark:bg-zinc-800/50 flex flex-col items-center justify-center p-6 border-r border-border/20">
                      <div className="w-16 h-16 rounded-full border border-primary/20 border-dashed flex items-center justify-center mb-3 opacity-50">
                        <span className="text-primary/40 text-xs font-semibold">B</span>
                      </div>
                      <span className="absolute top-4 left-4 bg-background/80 backdrop-blur-md text-foreground text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm shadow-sm">
                        Before
                      </span>
                    </div>
                    {/* After Side */}
                    <div className="relative bg-zinc-50 dark:bg-zinc-900/50 flex flex-col items-center justify-center p-6">
                      <div className="w-16 h-16 rounded-full border border-primary/40 border-solid flex items-center justify-center mb-3 bg-primary/5">
                        <span className="text-primary/80 text-xs font-bold">A</span>
                      </div>
                      <span className="absolute top-4 right-4 bg-background/80 backdrop-blur-md text-foreground text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm shadow-sm">
                        After 6 Sessions
                      </span>
                    </div>
                  </div>

                  {/* Faux Slider Handle */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-background shadow-[0_0_10px_rgba(0,0,0,0.1)] z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-background rounded-full shadow-md border border-border flex items-center justify-center text-muted-foreground transition-transform duration-300 group-hover:scale-110">
                      <ChevronLeft className="w-3 h-3" />
                      <ChevronRight className="w-3 h-3 -ml-1" />
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
