import { ShieldCheck, Sparkles, Target } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import treatmentSuite from "../assets/placeholder-treatment-suite.jpg";
import consultationSpace from "../assets/placeholder-consultation-space.jpg";
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
    <section id="provider" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Ambient Contrast Drift — Subtle Mauve & Champagne haze */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] -left-[10%] w-[800px] h-[800px] bg-primary/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-[0%] -right-[15%] w-[900px] h-[900px] bg-cream/40 rounded-full blur-[160px]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeader
          label="The Studio Founder"
          title={
            <>
              Clinical Excellence. <br />
              Individual Care.
            </>
          }
        >
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 text-primary border border-primary/20 px-4 py-1.5 text-[10px] tracking-[0.15em] font-bold uppercase">
              Maya Alvarez
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/40 border border-border/40 px-4 py-1.5 text-[10px] font-bold text-espresso/40 uppercase tracking-[0.15em] italic">
              Lead Clinical Specialist
            </span>
          </div>
        </SectionHeader>

        {/* Provider Profile — two-column */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24 sm:mb-32 mt-16 items-center">
          {/* Portrait */}
          <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden coach-fade-in-up architectural-panel group shadow-[0_64px_128px_-32px_rgba(26,22,20,0.1)] border border-border/10">
            {/* Founder portrait */}
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-[3s] group-hover:scale-110"
              style={{
                backgroundImage: `url(${mayaPortrait})`,
                backgroundPosition: "center 20%",
              }}
              role="img"
              aria-label="Maya Alvarez, founder and lead laser specialist"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="grid grid-cols-2 gap-px bg-white/20 backdrop-blur-2xl rounded-3xl overflow-hidden border border-white/30 shadow-2xl">
                <div className="bg-white/95 p-5 flex flex-col items-center text-center">
                  <span className="text-xl font-bold text-espresso leading-none mb-1">12+</span>
                  <span className="text-[9px] uppercase tracking-widest text-espresso/40 font-bold">Years Practice</span>
                </div>
                <div className="bg-white/90 p-5 flex flex-col items-center text-center border-l border-espresso/5">
                  <span className="text-xl font-bold text-espresso leading-none mb-1">5k+</span>
                  <span className="text-[9px] uppercase tracking-widest text-espresso/40 font-bold">Treatments Done</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio + Bullets */}
          <div className="flex flex-col justify-center coach-fade-in-up">
            <div className="space-y-6 mb-12">
              <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-espresso leading-tight">
                Refining the laser experience <br />
                <span className="font-semibold text-primary/80 italic">for the modern patient.</span>
              </h3>
              <p className="text-base sm:text-lg text-espresso/70 leading-relaxed max-w-prose font-medium">
                I founded this boutique studio to escape the volume-first model. Here, you are never "just an appointment." We focus on high-fidelity precision, cooling comfort, and anatomical customization—calibrating every zap to your unique profile.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-espresso/20 font-bold">Clinic Standards</span>
                <span className="h-px flex-1 bg-border/20" />
              </div>
              
              <div className="grid gap-8">
                {philosophy.map((p, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-white flex items-center justify-center border border-border/60 transition-all duration-500 group-hover:border-primary/20 group-hover:shadow-xl group-hover:shadow-primary/5">
                      <p.icon className="w-4.5 h-4.5 text-primary/40" aria-hidden="true" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[14px] text-espresso/80 font-bold leading-relaxed pt-2.5">
                        {p.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Clinic Environment Images */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-12">
          {/* Treatment Room */}
          <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden architectural-panel transition-all hover:-translate-y-2 duration-700 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url(${treatmentSuite})`,
                backgroundPosition: "center",
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
          <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden architectural-panel transition-all hover:-translate-y-2 duration-700 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)]">
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{
                backgroundImage: `url(${consultationSpace})`,
                backgroundPosition: "center",
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
