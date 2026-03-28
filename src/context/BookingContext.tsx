import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Info, ShieldCheck, Sparkles, ArrowRight, Check, Clock } from "lucide-react";

interface BookingContextType {
  openBookingDemo: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBookingDemo = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingDemo must be used within a BookingProvider");
  }
  return context;
};

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const openBookingDemo = () => {
    setIsOpen(true);
    setIsSuccess(false);
  };

  const handleSelection = () => {
    setIsSuccess(true);
  };

  return (
    <BookingContext.Provider value={{ openBookingDemo }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[550px] rounded-[2.5rem] border-none bg-white p-0 overflow-hidden shadow-[0_50px_100px_-20px_rgba(26,22,20,0.15)] focus:outline-none [&>button]:right-7 [&>button]:top-7 [&>button]:bg-espresso/5 [&>button]:h-9 [&>button]:w-9 [&>button]:rounded-full [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:opacity-40 [&>button]:hover:opacity-100 [&>button]:hover:bg-espresso/10 [&>button]:transition-all">
          <div className="relative p-8 sm:p-12 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/5 blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              {!isSuccess ? (
                <>
                  {/* Premium Label */}
                  <div className="inline-flex items-center gap-2 mb-8 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 self-center">
                    <Calendar className="w-3.5 h-3.5 text-primary/60" />
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Consultation Booking</span>
                  </div>

                  <DialogHeader className="mb-10 text-center items-center">
                    <DialogTitle className="text-4xl font-semibold text-espresso tracking-tight mb-4 leading-[1.1]">
                      Choose your <br />
                      <span className="italic font-light text-primary/80 text-3xl">consultation path</span>
                    </DialogTitle>
                    <DialogDescription className="text-base text-espresso/70 leading-relaxed font-medium max-w-sm mx-auto">
                      Select how you'd like to receive your consultation next steps. We'll prepare your details and continue your journey.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-3 w-full mb-10">
                    <button 
                      onClick={handleSelection}
                      className="w-full flex items-center justify-between group p-6 rounded-2xl bg-white border border-border/10 hover:border-primary/20 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 text-left"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-espresso group-hover:text-primary transition-colors">Send details to email</span>
                        <span className="text-xs text-espresso/50 font-normal">consultation summary + prep instructions</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                    <button 
                      onClick={handleSelection}
                      className="w-full flex items-center justify-between group p-6 rounded-2xl bg-white border border-border/10 hover:border-primary/20 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 text-left"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-espresso group-hover:text-primary transition-colors">Text me the next steps</span>
                        <span className="text-xs text-espresso/50 font-normal">booking link + response guidance</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                    <button 
                      onClick={handleSelection}
                      className="w-full flex items-center justify-between group p-6 rounded-2xl bg-white border border-border/10 hover:border-primary/20 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 text-left"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-espresso group-hover:text-primary transition-colors">Continue to intake form</span>
                        <span className="text-xs text-espresso/50 font-normal">treatment goals + skin profile questions</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-espresso/40 uppercase tracking-widest font-bold">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Used for consultation scheduling and follow-up only</span>
                  </div>
                </>
              ) : (
                <div className="py-8 w-full animate-in fade-in zoom-in-95 duration-700 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center mb-8 shadow-sm">
                    <ShieldCheck className="w-10 h-10 text-primary/60" />
                  </div>
                  <h3 className="text-3xl font-semibold text-espresso tracking-tight mb-4 leading-tight">Consultation details prepared</h3>
                  <p className="text-base text-espresso/70 max-w-sm mx-auto mb-10 leading-relaxed font-medium">
                    Your consultation details are ready and your next step has been queued.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-12 px-2">
                    <div className="flex flex-col items-center p-5 rounded-2xl bg-primary/[0.02] border border-primary/5">
                      <Check className="w-4 h-4 text-primary/60 mb-2" />
                      <span className="text-[10px] uppercase tracking-wider font-bold text-espresso/60 text-center leading-tight">Consultation summary ready</span>
                    </div>
                    <div className="flex flex-col items-center p-5 rounded-2xl bg-primary/[0.02] border border-primary/5">
                      <Sparkles className="w-4 h-4 text-primary/60 mb-2" />
                      <span className="text-[10px] uppercase tracking-wider font-bold text-espresso/60 text-center leading-tight">Intake flow prepared</span>
                    </div>
                    <div className="flex flex-col items-center p-5 rounded-2xl bg-primary/[0.02] border border-primary/5">
                      <Clock className="w-4 h-4 text-primary/60 mb-2" />
                      <span className="text-[10px] uppercase tracking-wider font-bold text-espresso/60 text-center leading-tight">Next-step delivery confirmed</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => setIsOpen(false)}
                    className="bg-primary hover:bg-primary/95 text-white rounded-full px-12 h-16 text-base font-bold uppercase tracking-widest shadow-[0_20px_40px_-10px_hsla(340,30%,48%,0.4)] hover:shadow-[0_25px_50px_-10px_hsla(340,30%,48%,0.6)] hover:-translate-y-1 transition-all duration-700 active:scale-95 w-full sm:w-auto"
                  >
                    Return to Studio
                  </Button>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </BookingContext.Provider>
  );
};

