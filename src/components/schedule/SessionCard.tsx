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
    <div className="bg-card border border-border rounded-xl p-5 shadow-sm transition-all duration-300 hover-lift hover:border-primary/20 hover:shadow-md">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-xs text-muted-foreground tabular-nums font-medium">{s.time}</p>
          <h3 className="text-base font-bold text-foreground mt-0.5">{s.name}</h3>
        </div>
        <div className="flex flex-col items-end gap-1.5">
          <FocusBadge focus={s.focus} iconClassName="w-3 h-3" className="px-2 py-0.5 text-[10px]" />
          {s.highlight && (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-tag text-primary">
              {s.highlight}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full border border-border ${
          s.location === "Studio" 
            ? "bg-secondary text-secondary-foreground" 
            : "bg-muted text-muted-foreground"
        }`}>
          <MapPin className="w-3.5 h-3.5" />
          {s.location}
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground font-medium">
          <Users className="w-3.5 h-3.5" />{s.format}
        </span>
        <span className="inline-flex items-center gap-1 text-[11px] text-muted-foreground font-medium">
          <Clock className="w-3.5 h-3.5" />{s.duration}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-primary font-semibold">{s.spots} spot{s.spots > 1 ? "s" : ""} left</span>
        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-[11px] text-muted-foreground hover:text-foreground hover:bg-muted/40"
              >
                More details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>{s.name}</DialogTitle>
                <DialogDescription>
                  High-level overview of what to expect in this session. Booking will be added later.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                <p>Focus: <span className="font-medium text-foreground">{s.focus}</span></p>
                <p>Format: <span className="font-medium text-foreground">{s.format}</span></p>
                <p>Location: <span className="font-medium text-foreground">{s.location}</span></p>
                <p>Duration: {s.duration}</p>
              </div>
            </DialogContent>
          </Dialog>
          <Button
            size="sm"
            onClick={onBook}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 h-8 text-xs font-semibold transition-all duration-300 hover:scale-[1.05] active:scale-[0.95]"
          >
            Book
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
