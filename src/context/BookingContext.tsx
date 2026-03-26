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
import { Calendar, Info, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

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
        <DialogContent className="sm:max-w-[550px] rounded-[2.5rem] border-none bg-white p-0 overflow-hidden shadow-[0_50px_100px_-20px_rgba(26,22,20,0.15)] focus:outline-none">
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
                    <DialogTitle className="text-4xl font-semibold text-espresso tracking-tight mb-4 leading-tight">
                      Start your <br />
                      <span className="italic font-light text-primary/80 text-3xl">consultation request</span>
                    </DialogTitle>
                    <DialogDescription className="text-base text-espresso/70 leading-relaxed font-medium">
                      Choose how you'd like to receive the next steps for your consultation. In the live version, this flow would connect to the clinic's scheduler, intake form, and follow-up sequence.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 w-full mb-10">
                    <button 
                      onClick={handleSelection}
                      className="w-full flex items-center justify-between group architectural-panel border-border/40 p-5 rounded-2xl bg-white hover:border-primary/20 hover:shadow-lg transition-all duration-500"
                    >
                      <span className="text-sm font-bold text-espresso group-hover:text-primary transition-colors">Send details to email</span>
                      <ArrowRight className="w-4 h-4 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <button 
                      onClick={handleSelection}
                      className="w-full flex items-center justify-between group architectural-panel border-border/40 p-5 rounded-2xl bg-white hover:border-primary/20 hover:shadow-lg transition-all duration-500"
                    >
                      <span className="text-sm font-bold text-espresso group-hover:text-primary transition-colors">Text me the next steps</span>
                      <ArrowRight className="w-4 h-4 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                    </button>
                    <button 
                      onClick={handleSelection}
                      className="w-full flex items-center justify-between group architectural-panel border-border/40 p-5 rounded-2xl bg-white hover:border-primary/20 hover:shadow-lg transition-all duration-500"
                    >
                      <span className="text-sm font-bold text-espresso group-hover:text-primary transition-colors">Continue to intake form</span>
                      <ArrowRight className="w-4 h-4 text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="py-12 animate-in fade-in zoom-in-95 duration-700">
                  <div className="w-20 h-20 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center mb-8 mx-auto shadow-sm">
                    <ShieldCheck className="w-10 h-10 text-primary/60" />
                  </div>
                  <h3 className="text-3xl font-semibold text-espresso tracking-tight mb-4">Consultation details prepared</h3>
                  <p className="text-base text-espresso/70 max-w-sm mx-auto mb-10 leading-relaxed">
                    Next-step instructions sent. Intake flow would continue from here in the live version of the studio's booking ecosystem.
                  </p>
                  <Button 
                    onClick={() => setIsOpen(false)}
                    className="bg-primary hover:bg-primary/95 text-white rounded-full px-12 h-16 text-base font-bold uppercase tracking-widest shadow-[0_20px_40px_-10px_hsla(340,30%,48%,0.4)] hover:shadow-[0_25px_50px_-10px_hsla(340,30%,48%,0.6)] hover:-translate-y-1 transition-all duration-700 active:scale-95 w-full sm:w-auto"
                  >
                    Close Booking
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

