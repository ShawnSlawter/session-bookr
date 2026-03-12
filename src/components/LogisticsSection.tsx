import { MapPin, Clock, Backpack, UserCheck, XCircle } from "lucide-react";

const items = [
  {
    icon: MapPin,
    title: "Base Location",
    text: "Private studio in Eixample, Barcelona. 5 minutes from Passeig de Gràcia.",
  },
  {
    icon: MapPin,
    title: "Outdoor Spots",
    text: "Barceloneta beach, Parc de la Ciutadella, Montjuïc, and select urban spaces.",
  },
  {
    icon: Clock,
    title: "Session Length",
    text: "45–60 minutes depending on the session type. Warm-up included, no filler.",
  },
  {
    icon: Backpack,
    title: "What to Bring",
    text: "Training shoes, water, towel. All equipment is provided — studio and outdoor.",
  },
  {
    icon: UserCheck,
    title: "Who It's For",
    text: "Professionals and expats who want consistent, structured training without the gym crowd.",
  },
  {
    icon: XCircle,
    title: "Not For",
    text: "Looking for quick fixes, extreme diets, or motivational coaching. This is training, not therapy.",
  },
];

const LogisticsSection = () => {
  return (
    <section id="logistics" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">Practical Info</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Before You Book
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-5 sm:p-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-4.5 h-4.5 text-primary" />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;
