import { Star, ShieldCheck, Activity, Users } from "lucide-react";

const signals = [
  {
    icon: (
      <div className="flex items-center gap-0.5 text-primary/90 transition-all duration-700 group-hover:scale-110">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-current" />
        ))}
      </div>
    ),
    id: "reviews",
    title: "5.0 Star Rated",
    subtitle: "420+ verified reviews",
  },
  {
    icon: <Activity className="w-6 h-6 text-primary/90 transition-transform duration-700 group-hover:scale-110" />,
    id: "treatments",
    title: "8,500+ Treatments",
    subtitle: "Proven clinical results",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-primary/90 transition-transform duration-700 group-hover:scale-110" />,
    id: "licensing",
    title: "Licensed Practice",
    subtitle: "Advanced certification",
  },
  {
    icon: <Users className="w-6 h-6 text-primary/90 transition-transform duration-700 group-hover:scale-110" />,
    id: "safety",
    title: "Safe for All Tones",
    subtitle: "Fitzpatrick I–VI Certified",
  },
];

const TrustStrip = () => {
  return (
    <section className="py-20 sm:py-24 relative z-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Architectural Shelf — grouping signals for a more intentional, richer feel */}
        <div className="relative architectural-panel bg-white/10 border-white/40 shadow-[0_45px_100px_-30px_rgba(26,22,20,0.06)] px-8 py-12 sm:py-16 rounded-[2.5rem] overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-x-0 relative z-10">
            
            {signals.map((s, i) => (
              <div key={s.id} className="flex flex-col items-center text-center px-4 group relative">
                {/* Refined icon baseline architecture */}
                <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/30 border border-border/20 shadow-sm mb-5 transition-all duration-700 ease-in-out group-hover:bg-white group-hover:shadow-[0_20px_40px_-10px_rgba(30,20,15,0.06)] group-hover:border-primary/10 group-hover:-translate-y-1.5 active:scale-95">
                  {s.icon}
                </div>
                
                <div className="space-y-1.5 px-2 transition-all duration-700 group-hover:translate-y-0.5">
                  <h4 className="text-[12px] sm:text-[13px] font-bold tracking-[0.12em] text-espresso/90 uppercase leading-tight">{s.title}</h4>
                  <p className="text-[10px] sm:text-[11px] text-espresso/40 font-bold uppercase tracking-[0.15em] italic leading-tight">{s.subtitle}</p>
                </div>

                {/* Refined internal clinical dividers */}
                {i < signals.length - 1 && (
                  <div className="hidden lg:block absolute -right-0.5 top-1/2 -translate-y-1/2 h-14 w-px bg-gradient-to-b from-transparent via-border/20 to-transparent" />
                )}
              </div>
            ))}

          </div>

          {/* Localized atmospheric subtle glow inside the shelf */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 blur-[80px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
