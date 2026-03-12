import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  age: number;
  profession: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "I've trained with coaches in London and Berlin. Alex is the first one who actually programs around my schedule and travel. No wasted sessions.",
    name: "Sarah",
    age: 36,
    profession: "Product Director",
  },
  {
    quote: "Six months in and I finally deadlift more than my bodyweight. The outdoor sessions on the beach are a bonus I didn't expect.",
    name: "Marc",
    age: 29,
    profession: "Software Engineer",
  },
  {
    quote: "I was skeptical about personal training. Alex made it simple — show up, follow the plan, get stronger. That's it.",
    name: "Julia",
    age: 41,
    profession: "Architect",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 sm:py-28 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">What Clients Say</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Real Results, No Hype
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 sm:p-7 flex flex-col"
            >
              <Quote className="w-5 h-5 text-primary/40 mb-4 flex-shrink-0" />
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-6 flex-1">
                "{t.quote}"
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}, {t.age}</p>
                <p className="text-xs text-muted-foreground">{t.profession}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Community training placeholder strip */}
        <div className="mt-10 sm:mt-14 relative rounded-xl overflow-hidden bg-card border border-border h-32 sm:h-44">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="community-bg" x1="0" y1="0" x2="1" y2="0.5">
                <stop offset="0%" stopColor="hsl(0, 0%, 8%)" />
                <stop offset="50%" stopColor="hsl(20, 15%, 10%)" />
                <stop offset="100%" stopColor="hsl(0, 0%, 8%)" />
              </linearGradient>
            </defs>
            <rect width="1200" height="200" fill="url(#community-bg)" />
            
            {/* Group of people silhouettes */}
            {[200, 350, 500, 650, 800, 950].map((x, i) => (
              <g key={i}>
                <ellipse cx={x} cy={85} rx={18 + (i % 3) * 4} ry={22 + (i % 2) * 5} fill={`hsl(0, 0%, ${14 + (i % 3) * 2}%)`} />
                <ellipse cx={x} cy={145} rx={22 + (i % 2) * 6} ry={45} fill={`hsl(0, 0%, ${12 + (i % 3) * 2}%)`} />
              </g>
            ))}
            
            {/* Subtle orange line */}
            <rect x="0" y="196" width="1200" height="4" fill="hsl(24, 95%, 53%)" opacity="0.2" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-muted-foreground/50 uppercase tracking-widest">Community Training</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
