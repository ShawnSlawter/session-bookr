import { useMemo, useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import SessionRow, { Session } from "./schedule/SessionRow";
import SessionCard from "./schedule/SessionCard";
import { useBookingDemo } from "@/context/BookingContext";

const schedule: Session[] = [
  { day: "Precision Areas", time: "15 min", name: "Upper Lip & Chin", focus: "High Precision", location: "Studio", format: "Cooling-First", duration: "6–8 sessions", spots: 1 },
  { day: "Precision Areas", time: "20 min", name: "Underarms", focus: "Sensitive", location: "Studio", format: "Cooling-First", duration: "6–8 sessions", spots: 1, highlight: "Popular" },
  { day: "Essential Areas", time: "30 min", name: "Bikini Line (French/Brazilian)", focus: "High Precision", location: "Studio", format: "Cooling-First", duration: "6–8 sessions", spots: 1 },
  { day: "Essential Areas", time: "40 min", name: "Half Legs or Arms", focus: "Efficiency", location: "Studio", format: "Cooling-First", duration: "6–8 sessions", spots: 1 },
  { day: "Full Coverage", time: "60 min", name: "Full Legs", focus: "Total Coverage", location: "Studio", format: "Cooling-First", duration: "8–10 sessions", spots: 1 },
  { day: "Full Coverage", time: "75 min", name: "Full Back or Chest", focus: "Total Coverage", location: "Studio", format: "Cooling-First", duration: "8–10 sessions", spots: 1 },
];

type ScheduleFilter = "All" | "Precision Areas" | "Essential Areas" | "Full Coverage";

const ScheduleSection = () => {
  const [filter, setFilter] = useState<ScheduleFilter>("All");
  const { openBookingDemo } = useBookingDemo();

  const handleBook = () => openBookingDemo();

  const filteredSchedule = useMemo(
    () =>
      schedule.filter((s) => {
        if (filter === "All") return true;
        return s.day === filter;
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
    <div className="space-y-4 max-w-3xl">
      <p className="text-espresso font-medium text-base sm:text-lg leading-relaxed">
        Boutique care · Dedicated Austin Studio · Consultation-First Approach.
      </p>
      <div className="grid sm:grid-cols-2 gap-6 sm:gap-10 pt-2">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-primary font-bold">The Process</p>
          <p className="text-sm text-espresso/80 leading-relaxed font-medium">
            Every permanent reduction plan starts with a clinical consultation. We assess your density and skin tone to build a custom schedule.
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-primary font-bold">New Clients</p>
          <p className="text-sm text-espresso/80 leading-relaxed font-medium">
            Not sure where to start? Most clients begin with a <span className="font-bold text-espresso italic underline underline-offset-4 decoration-primary/30">Face or Precision Area</span> to experience our cooling technology.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="schedule" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Treatment Areas"
          title="Curated precision for every curve."
          description={scheduleDescription}
        />

        {/* Filters — Increased Clarity */}
        <div className="mb-12 flex flex-wrap items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-espresso/40 font-bold mr-2">
            Filter View
          </span>
          {["All", "Precision Areas", "Essential Areas", "Full Coverage"].map((value) => {
            const v = value as ScheduleFilter;
            const isActive = filter === v;
            return (
              <button
                key={v}
                type="button"
                onClick={() => setFilter(v)}
                className={`rounded-full border px-6 py-2.5 text-xs font-bold tracking-wide transition-all duration-700 hover:-translate-y-0.5 active:scale-[0.98] ${
                  isActive
                    ? "bg-primary text-white border-primary shadow-[0_15px_30px_-10px_hsla(340,30%,48%,0.4)]"
                    : "bg-white text-espresso/60 border-border/60 hover:text-espresso hover:border-primary/40 hover:shadow-lg hover:shadow-black/[0.02]"
                }`}
                aria-pressed={isActive}
                aria-label={`Filter by ${v}`}
              >
                {v}
              </button>
            );
          })}
        </div>

        {/* Desktop Table — Architectural Polish */}
        <div className="hidden lg:block coach-fade-in-up">
          <div className="architectural-panel border-border/10 shadow-[0_48px_100px_-24px_rgba(0,0,0,0.08)] bg-white/40">
            <table className="w-full text-espresso">
              <thead>
                <tr className="border-b border-border/20 bg-white/60 backdrop-blur-xl">
                  <th className="text-left text-[10px] uppercase tracking-[0.15em] text-espresso/40 font-bold px-6 py-5">Category</th>
                  <th className="text-left text-[10px] uppercase tracking-[0.15em] text-espresso/40 font-bold px-6 py-5">Est. Time</th>
                  <th className="text-left text-[10px] uppercase tracking-[0.15em] text-espresso/40 font-bold px-6 py-5">Treatment Area</th>
                  <th className="text-left text-[10px] uppercase tracking-[0.15em] text-espresso/40 font-bold px-6 py-5">Clinical Specialty</th>
                  <th className="text-left text-[10px] uppercase tracking-[0.15em] text-espresso/40 font-bold px-6 py-5">Location</th>
                  <th className="text-left text-[10px] uppercase tracking-[0.15em] text-espresso/40 font-bold px-6 py-5">Technology</th>
                  <th className="text-left text-[10px] uppercase tracking-[0.15em] text-espresso/40 font-bold px-6 py-5">Typical Plan</th>
                  <th className="text-right text-[10px] uppercase tracking-[0.15em] text-espresso/40 font-bold px-6 py-5">Status</th>
                  <th className="px-6 py-5"></th>
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
