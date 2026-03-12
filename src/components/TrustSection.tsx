import { Award, Target, TrendingUp } from "lucide-react";

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
          {/* Portrait placeholder */}
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
              {/* Warm gradient background */}
              <defs>
                <linearGradient id="portrait-bg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(20, 30%, 12%)" />
                  <stop offset="100%" stopColor="hsl(0, 0%, 8%)" />
                </linearGradient>
                <radialGradient id="portrait-glow" cx="0.5" cy="0.4" r="0.5">
                  <stop offset="0%" stopColor="hsl(24, 95%, 53%)" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <rect width="400" height="500" fill="url(#portrait-bg)" />
              <rect width="400" height="500" fill="url(#portrait-glow)" />
              
              {/* Silhouette suggestion */}
              <ellipse cx="200" cy="160" rx="55" ry="65" fill="hsl(0, 0%, 18%)" />
              <ellipse cx="200" cy="350" rx="90" ry="130" fill="hsl(0, 0%, 16%)" />
              
              {/* Subtle structural lines */}
              <line x1="50" y1="480" x2="350" y2="480" stroke="hsl(24, 95%, 53%)" strokeWidth="2" opacity="0.3" />
              <line x1="50" y1="475" x2="50" y2="485" stroke="hsl(24, 95%, 53%)" strokeWidth="2" opacity="0.3" />
              <line x1="350" y1="475" x2="350" y2="485" stroke="hsl(24, 95%, 53%)" strokeWidth="2" opacity="0.3" />
            </svg>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Coach Portrait</span>
            </div>
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
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-card border border-border">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="studio-bg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="hsl(220, 15%, 10%)" />
                  <stop offset="100%" stopColor="hsl(220, 10%, 6%)" />
                </linearGradient>
              </defs>
              <rect width="640" height="400" fill="url(#studio-bg)" />
              
              {/* Structured gym elements — rack-like verticals */}
              <rect x="80" y="60" width="8" height="280" fill="hsl(220, 10%, 20%)" rx="2" />
              <rect x="160" y="60" width="8" height="280" fill="hsl(220, 10%, 20%)" rx="2" />
              <rect x="76" y="140" width="96" height="4" fill="hsl(220, 10%, 25%)" rx="2" />
              <rect x="76" y="220" width="96" height="4" fill="hsl(220, 10%, 25%)" rx="2" />
              
              {/* Floor line */}
              <rect x="0" y="340" width="640" height="1" fill="hsl(220, 10%, 18%)" />
              
              {/* Weights */}
              <circle cx="400" cy="250" r="45" stroke="hsl(220, 10%, 22%)" strokeWidth="6" fill="none" />
              <circle cx="400" cy="250" r="30" stroke="hsl(220, 10%, 19%)" strokeWidth="4" fill="none" />
              <circle cx="480" cy="260" r="40" stroke="hsl(220, 10%, 20%)" strokeWidth="5" fill="none" />

              {/* Cool accent */}
              <rect x="0" y="396" width="640" height="4" fill="hsl(220, 60%, 50%)" opacity="0.4" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 bg-background/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                Private Studio · Eixample
              </span>
            </div>
          </div>

          {/* Outdoor */}
          <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-card border border-border">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="outdoor-bg" x1="0" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stopColor="hsl(35, 30%, 12%)" />
                  <stop offset="100%" stopColor="hsl(25, 20%, 7%)" />
                </linearGradient>
                <radialGradient id="sun-glow" cx="0.8" cy="0.2" r="0.4">
                  <stop offset="0%" stopColor="hsl(40, 80%, 50%)" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
              <rect width="640" height="400" fill="url(#outdoor-bg)" />
              <rect width="640" height="400" fill="url(#sun-glow)" />
              
              {/* Horizon / sea line */}
              <rect x="0" y="260" width="640" height="1" fill="hsl(200, 30%, 25%)" />
              
              {/* Beach / park suggestion */}
              <ellipse cx="320" cy="350" rx="400" ry="80" fill="hsl(35, 30%, 14%)" />
              
              {/* Palm tree silhouette */}
              <rect x="520" y="160" width="6" height="180" fill="hsl(30, 20%, 16%)" rx="3" />
              <ellipse cx="540" cy="160" rx="50" ry="20" fill="hsl(120, 20%, 14%)" />
              <ellipse cx="510" cy="150" rx="40" ry="18" fill="hsl(120, 20%, 12%)" />
              
              {/* Warm accent */}
              <rect x="0" y="396" width="640" height="4" fill="hsl(24, 95%, 53%)" opacity="0.4" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 bg-background/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
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
