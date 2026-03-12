import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Users, Clock } from "lucide-react";
import FocusBadge from "./FocusBadge";

export interface Session {
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

interface SessionRowProps {
  session: Session;
  onBook: () => void;
}

const SessionRow = ({ session: s, onBook }: SessionRowProps) => {
  return (
    <tr className="border-b border-border/50 last:border-0 hover:bg-muted/30 transition-all duration-300 group/row">
      <td className="px-5 py-4 text-sm font-medium text-foreground">{s.day}</td>
      <td className="px-5 py-4 text-sm text-foreground tabular-nums">{s.time}</td>
      <td className="px-5 py-4 text-sm font-medium text-foreground">
        <div className="flex items-center gap-2">
          <span>{s.name}</span>
          {s.highlight && (
            <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-tag text-primary">
              {s.highlight}
            </span>
          )}
        </div>
      </td>
      <td className="px-5 py-4">
        <FocusBadge focus={s.focus} />
      </td>
      <td className="px-5 py-4">
        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border border-border ${
          s.location === "Studio" 
            ? "bg-secondary text-secondary-foreground" 
            : "bg-muted text-muted-foreground"
        }`}>
          <MapPin className="w-3.5 h-3.5" />
          {s.location}
        </span>
      </td>
      <td className="px-5 py-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Users className="w-3.5 h-3.5" />
          {s.format}
        </span>
      </td>
      <td className="px-5 py-4">
        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          <Clock className="w-3.5 h-3.5" />
          {s.duration}
        </span>
      </td>
      <td className="px-5 py-4 text-right">
        <span className="text-sm text-primary font-semibold">{s.spots}</span>
      </td>
      <td className="px-5 py-4 text-right">
        <div className="flex items-center justify-end gap-2">
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
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 h-8 text-xs font-semibold transition-all duration-300 hover:scale-[1.05] active:scale-[0.95] hover:shadow-[0_0_20px_hsl(24,95%,53%,0.3)]"
          >
            Book
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default SessionRow;
