import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Users, Clock } from "lucide-react";
import FocusBadge from "./FocusBadge";
import type { Session } from "./SessionRow";

interface SessionCardProps {
  session: Session;
  onBook: () => void;
}

const SessionCard = ({ session: s, onBook }: SessionCardProps) => {
  return (
    <div className="premium-card rounded-[2rem] p-8 group border-border/10 bg-white/60 backdrop-blur-sm">
      <div className="flex items-start justify-between mb-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.15em] text-espresso/40 tabular-nums font-bold">{s.time}</p>
          <h3 className="text-xl font-bold text-espresso mt-1 tracking-tight group-hover:text-primary transition-colors duration-500">{s.name}</h3>
        </div>
        <div className="flex flex-col items-end gap-2">
          {s.highlight && (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-tag text-primary shadow-sm">
              {s.highlight}
            </span>
          )}
          <FocusBadge focus={s.focus} iconClassName="w-3 h-3" className="px-2.5 py-0.5 text-[10px] border-none shadow-sm" />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-espresso/40">
          <MapPin className="w-3 h-3" />
          {s.location}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-espresso/40">
          <Users className="w-3 h-3" />{s.format}
        </span>
        <span className="inline-flex items-center gap-2 text-[12px] text-espresso/60 font-medium">
          <Clock className="w-3.5 h-3.5 opacity-40" />{s.duration}
        </span>
      </div>
      <div className="flex items-center justify-between pt-6 border-t border-border/10">
        <span className="text-[10px] text-primary font-bold uppercase tracking-[0.15em] italic">
          {s.spots > 0 ? "Bookable" : "Consult Required"}
        </span>
        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-9 px-3 text-[10px] uppercase tracking-widest font-bold text-espresso/30 hover:text-espresso hover:bg-espresso/5 rounded-full transition-all duration-500"
              >
                Protocol
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md border-border/10">
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Clinical Protocol</span>
                  <span className="h-px flex-1 bg-border/20" />
                </div>
                <DialogTitle className="text-2xl font-bold tracking-tight text-espresso">{s.name}</DialogTitle>
                <DialogDescription className="text-sm font-medium text-espresso/60">
                  Comprehensive treatment details and session roadmap.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-2xl bg-primary/[0.03] space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-primary font-bold">Specialty</p>
                    <p className="text-sm font-bold text-espresso">{s.focus}</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-espresso/[0.03] space-y-1">
                    <p className="text-[10px] uppercase tracking-wider text-espresso/40 font-bold">Duration</p>
                    <p className="text-sm font-bold text-espresso">{s.duration}</p>
                  </div>
                </div>
                <p className="text-sm text-espresso/70 leading-relaxed font-medium">
                  Detailed session planning will be personalized during your complimentary consultation based on hair density and skin tone mapping.
                </p>
              </div>
            </DialogContent>
          </Dialog>
          <Button
            size="sm"
            onClick={onBook}
            className="bg-espresso text-white hover:bg-espresso/90 rounded-full px-6 h-9 text-[10px] uppercase tracking-[0.15em] font-bold transition-all duration-700 hover:-translate-y-0.5 shadow-xl shadow-espresso/5 active:scale-95"
          >
            Book Consult
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
