import { Award, Target, TrendingUp } from "lucide-react";
import coachPortrait from "@/assets/coach-portrait.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import outdoorBarcelona from "@/assets/outdoor-barcelona.jpg";
import SectionHeader from "./ui/SectionHeader";

const TrustSection = () => {
  const philosophy = [
    {
      icon: Target,
      text: "Structured, evidence-based programming — no guesswork or random workouts.",
    },
    {
      icon: Award,
      text: "Clear progress markers so you always know what you're working toward.",
    },
    {
      icon: TrendingUp,
      text: "Sessions that fit around real-life schedules, not the other way around.",
    },
  ];

  return (
    <section id="trust" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Your Coach"
          title="Alex Moreno"
        >
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary border border-primary/20">
              NSCA-CSCS · Strength & Conditioning
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-muted border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
              10+ years coaching · 500+ clients
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-muted border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
              English & Spanish
            </span>
          </div>
        </SectionHeader>

        {/* Coach Profile — two-column */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 sm:mb-20">
          {/* Portrait */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden coach-fade-in-up">
            <img
              src={coachPortrait}
              alt="Alex Moreno wearing sports gear, standing confidently - Principal Coach"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="inline-flex flex-wrap items-center gap-3 rounded-2xl bg-background/70 px-4 py-3 backdrop-blur-sm">
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground">
                    10+ years coaching
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    500+ clients · 3 countries
                  </span>
                </div>
                <div className="h-8 w-px bg-border/60 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-foreground">
                    Focused on busy professionals
                  </span>
                  <span className="text-[11px] text-muted-foreground">
                    Structured strength, conditioning, and mobility.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio + Bullets */}
          <div className="flex flex-col justify-center coach-fade-in-up">
            <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed mb-4 max-w-xl">
              Strength & Conditioning Coach based in Barcelona.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-prose">
              I work with busy professionals and expats who want structured, efficient training — 
              not motivational noise. Every session has a clear purpose, progressive overload, and 
              measurable outcomes. Train in my private studio in Eixample or outdoors across 
              Barcelona's best spots.
            </p>

            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-tag text-muted-foreground px-1">
                Philosophy
              </p>
              <div className="space-y-4">
                {philosophy.map((p, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/10">
                      <p.icon className="w-4.5 h-4.5 text-primary" aria-hidden="true" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1.5 max-w-prose">
                      {p.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Training Environment Images */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Studio */}
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
            <img
              src={studioInterior}
              alt="Modern private training studio in Barcelona with high-quality strength equipment"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/90 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                Private Studio · Eixample
              </span>
            </div>
          </div>

          {/* Outdoor */}
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
            <img
              src={outdoorBarcelona}
              alt="Outdoor training session setup at a scenic location in Barcelona"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/90 bg-background/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                Outdoor · Barceloneta & Parks
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
