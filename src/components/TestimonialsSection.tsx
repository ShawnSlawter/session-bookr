import { Quote } from "lucide-react";
import communityTraining from "@/assets/community-training.jpg";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface Testimonial {
  quote: string;
  name: string;
  age: number;
  profession: string;
  persona: string;
  tags: string[];
}

const testimonials: Testimonial[] = [
  {
    quote:
      "I've trained with coaches in London and Berlin. Alex is the first one who actually programs around my schedule and travel. No wasted sessions, just steady progress that fits a demanding product calendar.",
    name: "Sarah",
    age: 36,
    profession: "Product Director",
    persona: "Expat · Senior tech leader",
    tags: ["Expat", "Hybrid schedule", "Strength focus"],
  },
  {
    quote:
      "Six months in and I finally deadlift more than my bodyweight. I came in as a beginner to lifting — now I understand what we're doing and why. The outdoor sessions on the beach are a bonus I didn't expect.",
    name: "Marc",
    age: 29,
    profession: "Software Engineer",
    persona: "Beginner to lifting",
    tags: ["Beginner to lifting", "Tech professional", "Outdoor sessions"],
  },
  {
    quote:
      "After years of stop‑start training, Alex built a plan around my work and old knee injury. Simple structure, no motivational noise — just clear sessions that make me measurably stronger month to month.",
    name: "Julia",
    age: 41,
    profession: "Architect",
    persona: "Busy professional returning to training",
    tags: ["Returning to training", "Injury-aware", "Structured programming"],
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
              <div className="flex items-center gap-3 mb-4">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="text-xs font-semibold text-foreground/80">
                    {t.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}, {t.age}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.profession}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80">
                    {t.persona}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {t.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-border bg-background/60 text-[11px] font-medium px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <Quote className="w-5 h-5 text-primary/40 mb-3 flex-shrink-0" />
              <p className="text-sm sm:text-base text-foreground leading-relaxed mb-4 flex-1">
                "{t.quote}"
              </p>

              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground/80">Programme focus:</span>{" "}
                <span>Strength, confidence, and sustainable training habits.</span>
              </div>
            </div>
          ))}
        </div>

        {/* Community training image */}
        <div className="mt-10 sm:mt-14 relative rounded-xl overflow-hidden h-32 sm:h-44">
          <img
            src={communityTraining}
            alt="Small group outdoor training in a Barcelona park"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/45 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="px-4 sm:px-6 pb-3 sm:pb-4">
              <p className="text-[11px] sm:text-xs text-foreground/70 uppercase tracking-[0.2em] font-medium">
                Community Training
              </p>
              <p className="mt-1 text-sm sm:text-base text-foreground font-medium">
                Small group sessions offered on request.
              </p>
              <p className="mt-1 text-[11px] sm:text-xs text-foreground/80">
                Keep your 1:1 coaching, add occasional group energy when it helps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
