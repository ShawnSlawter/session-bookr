import { Award, Target, TrendingUp } from "lucide-react";
import coachPortrait from "@/assets/coach-portrait.jpg";
import studioInterior from "@/assets/studio-interior.jpg";
import outdoorBarcelona from "@/assets/outdoor-barcelona.jpg";

const TrustSection = () => {
  const bullets = [
    { icon: Award, text: "10+ years of coaching experience across 3 countries" },
    { icon: Target, text: "NSCA-CSCS certified · Evidence-based programming" },
    { icon: TrendingUp, text: "500+ clients trained — from beginners to competitive athletes" },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Alex Moreno
          </h2>
        </div>

        {/* Coach Profile — two-column */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 sm:mb-20">
          {/* Portrait */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src={coachPortrait}
              alt="Alex Moreno, Strength & Conditioning Coach"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
          </div>

          {/* Bio + Bullets */}
          <div className="flex flex-col justify-center">
            <p className="text-lg sm:text-xl text-foreground leading-relaxed mb-4">
              Strength & Conditioning Coach based in Barcelona.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              I work with busy professionals and expats who want structured, efficient training — 
              not motivational noise. Every session has a clear purpose, progressive overload, and 
              measurable outcomes. Train in my private studio in Eixample or outdoors across 
              Barcelona's best spots.
            </p>

            <div className="space-y-5">
              {bullets.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-2">{b.text}</p>
                </div>
              ))}
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
