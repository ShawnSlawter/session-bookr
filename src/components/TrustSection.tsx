import { ShieldCheck, Sparkles, Target } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import laserStudioRoom from "../assets/laser-hero-bg.jpg";
import mayaPortrait from "../assets/maya-alvarez-boutique-portrait.jpg";

const TrustSection = () => {
  const philosophy = [
    {
      icon: ShieldCheck,
      text: "FDA-cleared laser technology designed for all skin tones, including deeper complexions.",
    },
    {
      icon: Sparkles,
      text: "Cooling-first comfort with pro-grade temperature management for every session.",
    },
    {
      icon: Target,
      text: "No generic settings: we calibrate for your hair density, skin tone, and treatment goals.",
    },
  ];

  return (
    <section id="provider" className="py-20 sm:py-28 relative bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Founder-Led Boutique Clinic"
          title="Maya Alvarez"
        >
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1.5 text-[10px] tracking-widest uppercase font-bold text-primary">
              Founder & Lead Specialist
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background border border-border px-3 py-1.5 text-[11px] font-medium text-muted-foreground shadow-sm">
              12+ years experience · 5,000+ treatments
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-background border border-border px-3 py-1.5 text-[11px] font-medium text-muted-foreground shadow-sm">
              Precision, Cooling, Comfort
            </span>
          </div>
        </SectionHeader>

        {/* Provider Profile — two-column */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 sm:mb-20 mt-10">
          {/* Portrait */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden coach-fade-in-up border border-border/50 shadow-lg shadow-black/5 flex items-center justify-center bg-muted/30">
            {/* Founder portrait (fictional placeholder) */}
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url(${mayaPortrait})`,
                backgroundPosition: "center 20%",
              }}
              role="img"
              aria-label="Maya Alvarez, founder and lead laser specialist inside a warm Austin boutique studio"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/92 via-background/25 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="inline-flex flex-wrap items-center gap-4 rounded-2xl bg-background/85 px-5 py-4 backdrop-blur-md shadow-xl border border-white/20">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-foreground">
                    12+ years experience
                  </span>
                  <span className="text-[11px] font-medium text-muted-foreground mt-0.5">
                    5,000+ treatments
                  </span>
                </div>
                <div className="h-8 w-px bg-border/60 hidden sm:block" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-foreground">
                    All skin tones
                  </span>
                  <span className="text-[11px] font-medium text-muted-foreground mt-0.5">
                    Cooling-first comfort.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio + Bullets */}
          <div className="flex flex-col justify-center coach-fade-in-up">
            <p className="text-xl sm:text-2xl text-foreground font-light leading-snug mb-5 max-w-xl">
              Founder-led laser expertise in <span className="font-semibold text-primary">Austin, Texas.</span>
            </p>
            <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed mb-10 max-w-prose">
              I built this boutique studio for a calmer, appointment-only laser experience. You will never feel rushed or “just scheduled.” We focus on comfort, precision, and customization—calibrating settings to your hair density and skin tone for long-term reduction.
            </p>

            <div className="space-y-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/80 px-1 border-b border-border/60 pb-2 w-fit">
                Clinic Standards
              </p>
              <div className="space-y-5">
                {philosophy.map((p, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 transition-colors hover:bg-primary/10">
                      <p.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                    </div>
                    <p className="text-[15px] text-muted-foreground leading-relaxed pt-3 max-w-prose">
                      {p.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Environment Images */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Treatment Room */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-sm transition-transform hover:-translate-y-1 duration-500 bg-muted/30">
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url(${laserStudioRoom})`,
                backgroundPosition: "center 25%",
              }}
              role="img"
              aria-label="Warm private treatment suite with premium laser equipment"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase font-bold text-foreground bg-background/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-border/50">
                Treatment Suite
              </span>
            </div>
          </div>

          {/* Consultation Area */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-border/50 shadow-sm transition-transform hover:-translate-y-1 duration-500 bg-muted/30">
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url(${laserStudioRoom})`,
                backgroundPosition: "center 60%",
              }}
              role="img"
              aria-label="Warm private consultation area inside the boutique laser studio"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span className="inline-flex items-center gap-1.5 text-[11px] tracking-wider uppercase font-bold text-foreground bg-background/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-border/50">
                Private Consultation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
