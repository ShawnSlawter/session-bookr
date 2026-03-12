import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  highlight?: "New" | "Popular";
}

const schedule: Session[] = [
  { day: "Monday", time: "07:00", name: "Morning Strength", focus: "Strength", location: "Studio", format: "1-on-1", duration: "60 min", spots: 1 },
  { day: "Monday", time: "18:30", name: "Conditioning Circuit", focus: "Conditioning", location: "Outdoor", format: "Small Group", duration: "45 min", spots: 3, highlight: "Popular" },
  { day: "Tuesday", time: "08:00", name: "Movement & Mobility", focus: "Mobility", location: "Studio", format: "1-on-1", duration: "50 min", spots: 1 },
  { day: "Wednesday", time: "07:00", name: "Barbell Fundamentals", focus: "Strength", location: "Studio", format: "Small Group", duration: "60 min", spots: 2, highlight: "New" },
  { day: "Thursday", time: "17:30", name: "Beach Conditioning", focus: "Conditioning", location: "Outdoor", format: "Small Group", duration: "45 min", spots: 4 },
  { day: "Friday", time: "07:30", name: "Strength & Power", focus: "Strength", location: "Studio", format: "1-on-1", duration: "60 min", spots: 1 },
  { day: "Saturday", time: "09:00", name: "Park Training", focus: "Conditioning", location: "Outdoor", format: "Small Group", duration: "60 min", spots: 5 },
  { day: "Saturday", time: "11:00", name: "Recovery Flow", focus: "Mobility", location: "Studio", format: "1-on-1", duration: "45 min", spots: 1 },
];

const focusBadgeClasses = (focus: string) => {
  switch (focus) {
    case "Strength":
      return "bg-primary/10 text-primary";
    case "Conditioning":
      return "bg-[hsl(160,60%,50%,0.12)] text-[hsl(160,60%,75%)]";
    case "Mobility":
      return "bg-[hsl(220,60%,60%,0.12)] text-[hsl(220,70%,80%)]";
    default:
      return "bg-muted text-muted-foreground";
  }
};

type ScheduleFilter = "All" | "Studio" | "Outdoor" | "1-on-1" | "Small Group";

const ScheduleSection = () => {
  const [filter, setFilter] = useState<ScheduleFilter>("All");

  const handleBook = () =>
    toast("Demo mode — booking not yet connected");

  const filteredSchedule = useMemo(
    () =>
      schedule.filter((s) => {
        if (filter === "All") return true;
        if (filter === "Studio" || filter === "Outdoor") {
          return s.location === filter;
        }
        if (filter === "1-on-1" || filter === "Small Group") {
          return s.format === filter;
        }
        return true;
      }),
    [filter],
  );

  const sessionsByDay = useMemo(() => {
    const map = new Map<string, Session[]>();
    filteredSchedule.forEach((session) => {
      const existing = map.get(session.day) ?? [];
      existing.push(session);
      map.set(session.day, existing);
    });
    return Array.from(map.entries());
  }, [filteredSchedule]);

  return (
    <section id="schedule" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-primary" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">Weekly Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Find Your Session
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-xl">
            8 weekly sessions · Studio & Outdoor · 1-on-1 and Small Group options.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
            Not sure where to start? Try <span className="font-medium text-foreground">Barbell Fundamentals</span> or{" "}
            <span className="font-medium text-foreground">Movement &amp; Mobility</span>.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-medium">
            Filter
          </span>
          {["All", "Studio", "Outdoor", "1-on-1", "Small Group"].map((value) => {
            const v = value as ScheduleFilter;
            const isActive = filter === v;
            return (
              <button
                key={v}
                type="button"
                onClick={() => setFilter(v)}
                className={`rounded-full border px-3 py-1 text-xs sm:text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-background text-muted-foreground border-border hover:text-foreground"
                }`}
              >
                {v}
              </button>
            );
          })}
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
                {filteredSchedule.map((s, i) => (
                  <tr key={`${s.day}-${s.time}-${i}`} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                    <td className="px-5 py-4 text-sm font-medium text-foreground">{s.day}</td>
                    <td className="px-5 py-4 text-sm text-foreground tabular-nums">{s.time}</td>
                    <td className="px-5 py-4 text-sm font-medium text-foreground">
                      <div className="flex items-center gap-2">
                        <span>{s.name}</span>
                        {s.highlight && (
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                            {s.highlight}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${focusBadgeClasses(
                          s.focus,
                        )}`}
                      >
                        <Dumbbell className="w-3 h-3" />
                        {s.focus}
                      </span>
                    </td>
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
                      <div className="flex items-center justify-end gap-2">
                        <Dialog>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-8 px-2 text-[11px] text-muted-foreground hover:text-foreground hover:bg-muted/40"
                            asChild
                          >
                            <button type="button">More details</button>
                          </Button>
                          <DialogContent className="max-w-md">
                            <DialogHeader>
                              <DialogTitle>{s.name}</DialogTitle>
                              <DialogDescription>
                                High-level overview of what to expect in this session. Booking will be added later.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                              <p>
                                Focus: <span className="font-medium text-foreground">{s.focus}</span>
                              </p>
                              <p>
                                Format: <span className="font-medium text-foreground">{s.format}</span>
                              </p>
                              <p>
                                Location: <span className="font-medium text-foreground">{s.location}</span>
                              </p>
                              <p>Duration: {s.duration}</p>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button
                          size="sm"
                          onClick={handleBook}
                          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 h-8 text-xs font-semibold"
                        >
                          Book
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-4">
          {sessionsByDay.map(([day, sessions]) => (
            <div key={day} className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                {day}
              </h3>
              {sessions.map((s, i) => (
                <div key={`${s.day}-${s.time}-${i}`} className="bg-card border border-border rounded-xl p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-sm text-muted-foreground tabular-nums">{s.time}</p>
                      <h3 className="text-base font-semibold text-foreground mt-0.5">{s.name}</h3>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${focusBadgeClasses(
                          s.focus,
                        )}`}
                      >
                        <Dumbbell className="w-3 h-3" />
                        {s.focus}
                      </span>
                      {s.highlight && (
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                          {s.highlight}
                        </span>
                      )}
                    </div>
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
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 px-2 text-[11px] text-muted-foreground hover:text-foreground hover:bg-muted/40"
                          asChild
                        >
                          <button type="button">More details</button>
                        </Button>
                        <DialogContent className="max-w-md">
                          <DialogHeader>
                            <DialogTitle>{s.name}</DialogTitle>
                            <DialogDescription>
                              High-level overview of what to expect in this session. Booking will be added later.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                            <p>
                              Focus: <span className="font-medium text-foreground">{s.focus}</span>
                            </p>
                            <p>
                              Format: <span className="font-medium text-foreground">{s.format}</span>
                            </p>
                            <p>
                              Location: <span className="font-medium text-foreground">{s.location}</span>
                            </p>
                            <p>Duration: {s.duration}</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button
                        size="sm"
                        onClick={handleBook}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 h-8 text-xs font-semibold"
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
