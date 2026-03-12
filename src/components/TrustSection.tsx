import { Award, Target, TrendingUp } from "lucide-react";
import coachPortrait from "@/assets/coach-portrait.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import outdoorBarcelona from "@/assets/outdoor-barcelona.jpg";

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
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">Your Coach</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Alex Moreno
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                NSCA-CSCS · Strength &amp; Conditioning
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-[11px] font-medium text-muted-foreground">
                10+ years coaching · 500+ clients
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-[11px] font-medium text-muted-foreground">
                English &amp; Spanish
              </span>
            </div>
          </div>
        </div>

        {/* Coach Profile — two-column */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 sm:mb-20">
          {/* Portrait */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden coach-fade-in-up">
            <img
              src={coachPortrait}
              alt="Alex Moreno, Strength & Conditioning Coach"
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
            <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-4">
              Strength & Conditioning Coach based in Barcelona.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              I work with busy professionals and expats who want structured, efficient training — 
              not motivational noise. Every session has a clear purpose, progressive overload, and 
              measurable outcomes. Train in my private studio in Eixample or outdoors across 
              Barcelona's best spots.
            </p>

            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                Philosophy
              </p>
              <div className="space-y-4">
                {philosophy.map((p, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <p.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1.5">
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
              alt="Private strength training studio in Eixample, Barcelona"
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
              alt="Outdoor training setup at Barcelona beach"
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
