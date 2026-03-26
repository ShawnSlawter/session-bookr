import { Star, ShieldCheck, Activity, Users } from "lucide-react";

const TrustStrip = () => {
  return (
    <section className="border-b border-border/60 bg-background py-8 relative z-20 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-x-0 md:divide-x md:divide-border/40">
          
          {/* Signal 1: Reviews */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="flex items-center gap-1 mb-2 text-primary/80">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-sm font-semibold tracking-tight text-foreground">5.0 Star Rated</p>
            <p className="text-xs text-muted-foreground mt-1 font-medium">420+ verified reviews</p>
          </div>

          {/* Signal 2: Experience */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 mb-2">
              <Activity className="w-4 h-4 text-primary" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold tracking-tight text-foreground">8,500+ Treatments</p>
            <p className="text-xs text-muted-foreground mt-1 font-medium">Proven clinical results</p>
          </div>

          {/* Signal 3: Credibility */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 mb-2">
              <ShieldCheck className="w-4 h-4 text-primary" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold tracking-tight text-foreground">Licensed Professionals</p>
            <p className="text-xs text-muted-foreground mt-1 font-medium">Advanced laser certification</p>
          </div>

          {/* Signal 4: Safety */}
          <div className="flex flex-col items-center text-center px-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 border border-primary/20 mb-2">
              <Users className="w-4 h-4 text-primary" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold tracking-tight text-foreground">All Skin Tones</p>
            <p className="text-xs text-muted-foreground mt-1 font-medium">Fitzpatrick I–VI safe</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
