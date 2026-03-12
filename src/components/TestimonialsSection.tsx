import { Quote } from "lucide-react";
import communityTraining from "@/assets/community-training.jpg";

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

        {/* Community training image */}
        <div className="mt-10 sm:mt-14 relative rounded-xl overflow-hidden h-32 sm:h-44">
          <img
            src={communityTraining}
            alt="Small group outdoor training in a Barcelona park"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-background/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs text-foreground/60 uppercase tracking-widest font-medium">Community Training</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
