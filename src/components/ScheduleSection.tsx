import { useMemo, useState } from "react";
import { toast } from "sonner";
import SectionHeader from "./ui/SectionHeader";
import SessionRow, { Session } from "./schedule/SessionRow";
import SessionCard from "./schedule/SessionCard";

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

  const scheduleDescription = (
    <div className="space-y-3">
      <p>8 weekly sessions · Studio & Outdoor · 1-on-1 and Small Group options.</p>
      <p className="text-xs sm:text-sm">
        <span className="font-bold text-foreground">How it works:</span> Pick a time below. After booking, we&apos;ll have a short intake call and a movement assessment to tailor your program. No upfront commitment required.
      </p>
      <p className="text-xs sm:text-sm">
        Not sure where to start? Try <span className="font-medium text-foreground underline underline-offset-4 decoration-primary/30">Barbell Fundamentals</span> or{" "}
        <span className="font-medium text-foreground underline underline-offset-4 decoration-primary/30">Movement &amp; Mobility</span>.
      </p>
    </div>
  );

  return (
    <section id="schedule" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Weekly Schedule"
          title="Find Your Session"
          description={scheduleDescription}
        />

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-2 sm:gap-3">
          <span className="text-xs uppercase tracking-tag text-muted-foreground font-semibold mr-1">
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
                className={`rounded-full border px-4 py-1.5 text-xs font-semibold md:text-sm transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] ${
                  isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-background text-muted-foreground border-border hover:text-foreground hover:bg-muted/30"
                }`}
                aria-pressed={isActive}
                aria-label={`Filter by ${v}`}
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
                  <SessionRow key={`${s.day}-${s.time}-${i}`} session={s} onBook={handleBook} />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-10">
          {sessionsByDay.map(([day, sessions]) => (
            <div key={day} className="space-y-4">
              <div className="sticky top-[56px] sm:top-[64px] z-20 bg-background/95 backdrop-blur-md -mx-4 px-5 py-3 border-y border-border/40">
                <h3 className="text-xs font-extrabold uppercase tracking-tag text-primary flex items-center gap-2">
                  <span className="w-4 h-0.5 bg-primary/50 rounded-full" />
                  {day}
                </h3>
              </div>
              <div className="space-y-4">
                {sessions.map((s, i) => (
                  <SessionCard key={`${s.day}-${s.time}-${i}`} session={s} onBook={handleBook} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
