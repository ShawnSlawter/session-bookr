import { Star, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "./ui/SectionHeader";
import { useBookingDemo } from "@/context/BookingContext";
import beforeImg from "../assets/placeholder-before-result.jpg";
import afterImg from "../assets/placeholder-after-result.jpg";

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
  const { openBookingDemo } = useBookingDemo();
  return (
    <section id="results" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Signature Boutique Glows */}
      <div className="premium-glow-orb bg-primary/10 left-[-5%] top-[-5%] opacity-15" />
      <div className="premium-glow-orb bg-white/10 right-[-5%] bottom-[-5%] opacity-10" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 sm:mb-20">
          <SectionHeader
            label="Clinical Results"
            title={
              <>
                Real transformations. <br className="hidden sm:block" />
                Real confidence.
              </>
            }
          />
        </div>

        {/* Testimonial Cards — Cleaned Hierarchy */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mb-24 sm:mb-32">
          {reviews.map((t, i) => (
            <div
              key={i}
              className="architectural-panel border-border/10 rounded-[2.5rem] p-8 sm:p-10 flex flex-col group transition-all duration-700 hover:border-primary/20 hover:-translate-y-1 bg-white/60"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex flex-col gap-1">
                  <p className="text-base font-bold tracking-tight text-espresso leading-none">
                    {t.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest text-espresso/40 font-bold">
                    {t.sessions} Sessions Progression
                  </p>
                </div>
                {/* Refined Verified Indicator */}
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/[0.03] border border-primary/10">
                  <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                  <span className="text-[9px] uppercase tracking-tighter text-primary font-bold">Verified</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-8">
                {t.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-espresso/[0.02] text-espresso/50 text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded-full border border-border/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <blockquote className="text-base text-espresso/90 leading-relaxed mb-10 flex-1 font-normal italic">
                "{t.quote}"
              </blockquote>

              <div className="pt-6 border-t border-border/40 grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-espresso/30 font-bold">Target Area</span>
                  <span className="text-xs font-bold text-espresso/70 truncate tracking-tight">{t.treatmentArea}</span>
                </div>
                <div className="flex flex-col gap-0.5 text-right">
                  <span className="text-[10px] uppercase tracking-wider text-espresso/30 font-bold">Result Detail</span>
                  <span className="text-xs font-bold text-espresso/70 truncate tracking-tight">{t.highlight}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Before & After Viewer — Increased Contrast */}
        <div className="architectural-panel border-border/20 shadow-2xl shadow-espresso/5 bg-white overflow-hidden">
          <div className="grid lg:grid-cols-2 lg:items-center">
            <div className="p-10 sm:p-14 lg:p-20 relative z-10">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-6 h-px bg-primary/40" />
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Visual Proof</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight mb-6 text-espresso leading-[0.95]">
                Precision results <br className="hidden lg:block"/><span className="font-semibold text-primary/80 italic">for every tone.</span>
              </h3>
              <p className="text-espresso/70 mb-10 text-base leading-relaxed max-w-md font-medium">
                We specialize in laser hair removal for all skin tones, including Fitzpatrick IV–VI. See the unedited clinical results from our customized treatment plans.
              </p>
              
              <div className="flex flex-wrap items-center gap-6">
                <button
                  onClick={openBookingDemo}
                  className="bg-primary text-white px-10 py-4 rounded-full text-[12px] font-bold uppercase tracking-[0.18em] hover:bg-primary/90 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(var(--primary),0.3)] hover:-translate-y-0.5 active:scale-95"
                >
                  Book My Consultation
                </button>
                <div className="flex items-center gap-2.5">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-espresso/40 italic leading-none">Unedited Clinical Data</span>
                </div>
              </div>
            </div>
            
            <div className="relative h-[450px] lg:h-[600px] border-t lg:border-t-0 lg:border-l border-primary/5 p-8 sm:p-12 lg:p-20 bg-primary/[0.02]">
              <div className="w-full h-full relative rounded-3xl overflow-hidden shadow-2xl shadow-espresso/10 bg-white border border-border/40 group">
                {/* Images */}
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="relative h-full overflow-hidden border-r border-background/20">
                    <img 
                      src={beforeImg} 
                      alt="Before clinical treatment" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-espresso/5" />
                    <span className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md text-espresso text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-2xl shadow-sm z-20 border border-white/50">
                      Before
                    </span>
                  </div>
                  <div className="relative h-full overflow-hidden">
                    <img 
                      src={afterImg} 
                      alt="After clinical treatments" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <span className="absolute bottom-6 right-6 bg-primary text-primary-foreground text-[11px] font-bold tracking-widest uppercase px-5 py-2.5 rounded-2xl shadow-sm z-20 shadow-primary/30">
                      After
                    </span>
                  </div>
                </div>

                {/* Interaction Handle */}
                <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/80 z-10 shadow-2xl">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-white/95 backdrop-blur-xl rounded-full shadow-2xl border border-white flex items-center justify-center text-primary transition-all duration-700 group-hover:scale-110">
                    <ChevronLeft className="w-4 h-4" />
                    <ChevronRight className="w-4 h-4 -ml-0.5" />
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
