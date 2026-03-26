import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface FocusBadgeProps {
  focus: string;
  className?: string;
  iconClassName?: string;
}

const focusBadgeClasses = (focus: string) => {
  switch (focus) {
    case "High Precision":
    case "Sensitive":
      return "bg-primary/10 text-primary border border-primary/20";
    case "Efficiency":
    case "Total Coverage":
      return "bg-secondary text-secondary-foreground border border-border";
    default:
      return "bg-muted text-muted-foreground border border-border";
  }
};

const FocusBadge = ({ focus, className, iconClassName }: FocusBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        focusBadgeClasses(focus),
        className
      )}
    >
      <ShieldCheck className={cn("w-3.5 h-3.5", iconClassName)} aria-hidden="true" />
      {focus}
    </span>
  );
};

export default FocusBadge;
