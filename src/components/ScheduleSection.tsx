import { Button } from "@/components/ui/button";
import { MapPin, Users, Clock, Dumbbell } from "lucide-react";
import { toast } from "sonner";

interface Session {
  day: string;
  time: string;
  name: string;
  focus: string;
  location: "Studio" | "Outdoor";
  format: "1-on-1" | "Small Group";
  duration: string;
  spots: number;
}

const schedule: Session[] = [
  { day: "Monday", time: "07:00", name: "Morning Strength", focus: "Strength", location: "Studio", format: "1-on-1", duration: "60 min", spots: 1 },
  { day: "Monday", time: "18:30", name: "Conditioning Circuit", focus: "Conditioning", location: "Outdoor", format: "Small Group", duration: "45 min", spots: 3 },
  { day: "Tuesday", time: "08:00", name: "Movement & Mobility", focus: "Mobility", location: "Studio", format: "1-on-1", duration: "50 min", spots: 1 },
  { day: "Wednesday", time: "07:00", name: "Barbell Fundamentals", focus: "Strength", location: "Studio", format: "Small Group", duration: "60 min", spots: 2 },
  { day: "Thursday", time: "17:30", name: "Beach Conditioning", focus: "Conditioning", location: "Outdoor", format: "Small Group", duration: "45 min", spots: 4 },
  { day: "Friday", time: "07:30", name: "Strength & Power", focus: "Strength", location: "Studio", format: "1-on-1", duration: "60 min", spots: 1 },
  { day: "Saturday", time: "09:00", name: "Park Training", focus: "Conditioning", location: "Outdoor", format: "Small Group", duration: "60 min", spots: 5 },
  { day: "Saturday", time: "11:00", name: "Recovery Flow", focus: "Mobility", location: "Studio", format: "1-on-1", duration: "45 min", spots: 1 },
];

const focusColor = (focus: string) => {
  switch (focus) {
    case "Strength": return "text-primary";
    case "Conditioning": return "text-[hsl(160,60%,50%)]";
    case "Mobility": return "text-[hsl(220,60%,65%)]";
    default: return "text-muted-foreground";
  }
};

const ScheduleSection = () => {
  const handleBook = () => toast("Demo mode — booking not yet connected");

  return (
    <section id="schedule" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">Weekly Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Find Your Session
          </h2>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block">
          <div className="rounded-xl border border-border overflow-hidden bg-card">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground font-medium px-5 py-4">Day</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground font-medium px-5 py-4">Time</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground font-medium px-5 py-4">Session</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground font-medium px-5 py-4">Focus</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground font-medium px-5 py-4">Location</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground font-medium px-5 py-4">Format</th>
                  <th className="text-left text-xs uppercase tracking-wider text-muted-foreground font-medium px-5 py-4">Duration</th>
                  <th className="text-right text-xs uppercase tracking-wider text-muted-foreground font-medium px-5 py-4">Spots</th>
                  <th className="px-5 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((s, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-5 py-4 text-sm font-medium text-foreground">{s.day}</td>
                    <td className="px-5 py-4 text-sm text-foreground tabular-nums">{s.time}</td>
                    <td className="px-5 py-4 text-sm font-medium text-foreground">{s.name}</td>
                    <td className={`px-5 py-4 text-sm font-medium ${focusColor(s.focus)}`}>{s.focus}</td>
                    <td className="px-5 py-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                        s.location === "Studio" 
                          ? "bg-muted text-secondary-foreground" 
                          : "bg-[hsl(160,60%,50%,0.1)] text-[hsl(160,60%,50%)]"
                      }`}>
                        <MapPin className="w-3 h-3" />
                        {s.location}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Users className="w-3 h-3" />
                        {s.format}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {s.duration}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <span className="text-sm text-primary font-semibold">{s.spots}</span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Button
                        size="sm"
                        onClick={handleBook}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 h-8 text-xs font-semibold"
                      >
                        Book
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-3">
          {schedule.map((s, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="text-sm text-muted-foreground">{s.day} · {s.time}</p>
                  <h3 className="text-base font-semibold text-foreground mt-0.5">{s.name}</h3>
                </div>
                <span className={`text-xs font-semibold ${focusColor(s.focus)}`}>{s.focus}</span>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${
                  s.location === "Studio" 
                    ? "bg-muted text-secondary-foreground" 
                    : "bg-[hsl(160,60%,50%,0.1)] text-[hsl(160,60%,50%)]"
                }`}>
                  <MapPin className="w-3 h-3" />
                  {s.location}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Users className="w-3 h-3" />{s.format}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />{s.duration}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-primary font-semibold">{s.spots} spot{s.spots > 1 ? "s" : ""} left</span>
                <Button
                  size="sm"
                  onClick={handleBook}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 h-8 text-xs font-semibold"
                >
                  Book
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
