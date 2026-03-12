import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
}

const SectionHeader = ({
  label,
  title,
  description,
  children,
  className,
  titleClassName,
}: SectionHeaderProps) => {
  return (
    <div className={cn("mb-10 sm:mb-14", className)}>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-8 h-px bg-primary" />
        <span className="text-xs uppercase tracking-tag text-muted-foreground font-medium">
          {label}
        </span>
      </div>
      <div className="space-y-4">
        <h2 className={cn("text-3xl sm:text-4xl font-bold text-foreground", titleClassName)}>
          {title}
        </h2>
        {description && (
          <div className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
            {description}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default SectionHeader;
