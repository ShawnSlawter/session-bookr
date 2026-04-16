import * as Sentry from "@sentry/react";
import { Button } from "@/components/ui/button";
import { Bug } from "lucide-react";

const SentryTest = () => {
  const triggerError = () => {
    console.log("Triggering Sentry test error...");
    throw new Error("Sentry Verification Error: This is a manual test error triggered from the SentryTest component.");
  };

  const captureMessage = () => {
    Sentry.captureMessage("Sentry Verification Message: Manual test message captured.", "info");
    alert("Test message sent to Sentry!");
  };

  if (import.meta.env.PROD) {
    return null; // Don't show in production
  }

  return (
    <div className="fixed bottom-4 left-4 z-[9999] flex flex-col gap-2 p-3 bg-background/80 backdrop-blur-md border border-border rounded-xl shadow-lg ring-1 ring-black/5 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-1000">
      <div className="flex items-center gap-2 mb-1 px-1">
        <Bug className="w-4 h-4 text-primary" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-espresso/60">Sentry Debug</span>
      </div>
      <div className="flex gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={captureMessage}
          className="h-8 text-[10px] px-3 rounded-lg border-primary/20 hover:bg-primary/5 hover:text-primary transition-all font-semibold uppercase tracking-wider"
        >
          Capture Msg
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          onClick={triggerError}
          className="h-8 text-[10px] px-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground transition-all font-semibold uppercase tracking-wider"
        >
          Throw Error
        </Button>
      </div>
    </div>
  );
};

export default SentryTest;
