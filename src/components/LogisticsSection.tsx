import { MapPin, Clock, Backpack, UserCheck, XCircle, ClipboardCheck, Compass } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const groups = [
  {
    title: "Location & Equipment",
    items: [
      {
        icon: MapPin,
        title: "Base Location",
        text: "Private studio in Eixample, Barcelona. 5 minutes from Passeig de Gràcia.",
      },
      {
        icon: Compass,
        title: "Outdoor Spots",
        text: "Barceloneta beach, Parc de la Ciutadella, Montjuïc, and select urban spaces.",
      },
      {
        icon: Backpack,
        title: "What to Bring",
        text: "Training shoes, water, towel. All equipment is provided — studio and outdoor.",
      },
    ],
  },
  {
    title: "Format & Commitment",
    items: [
      {
        icon: Clock,
        title: "Session Length",
        text: "45–60 minutes depending on the session type. Warm-up included, no filler.",
      },
      {
        icon: ClipboardCheck,
        title: "How Booking Works",
        text: "Every client starts with a brief intake call and a movement assessment. No upfront commitment required for the first session.",
      },
    ],
  },
  {
    title: "Match & Expectations",
    items: [
      {
        icon: UserCheck,
        title: "Who It's For",
        text: "Professionals and expats who want consistent, structured training without the gym crowd.",
      },
      {
        icon: XCircle,
        title: "Not For",
        text: "Seeking quick fixes, extreme diets, or traditional 'fitness motivation'. We prioritize objective progress and structured learning.",
        isWarning: true,
      },
    ],
  },
];

const LogisticsSection = () => {
  return (
    <section id="logistics" className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Practical Info"
          title="Before You Book"
        />

        <div className="space-y-12 sm:space-y-16">
          {groups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              <h3 className="text-[10px] sm:text-xs uppercase tracking-tag text-muted-foreground font-bold px-1">
                {group.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {group.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className={`bg-card border rounded-xl p-5 sm:p-6 transition-all duration-300 hover-lift ${
                      item.isWarning 
                        ? "border-destructive/20 bg-destructive/5 hover:border-destructive/40 hover:bg-destructive/10" 
                        : "border-border hover:border-primary/20 hover:shadow-md hover:bg-secondary/20"
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${
                      item.isWarning ? "bg-destructive/10" : "bg-primary/10"
                    }`}>
                      <item.icon className={`w-4.5 h-4.5 ${
                        item.isWarning ? "text-destructive" : "text-primary"
                      }`} aria-hidden="true" />
                    </div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;
