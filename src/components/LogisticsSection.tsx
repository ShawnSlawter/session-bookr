import { ShieldCheck, Sparkles, Calendar, UserCheck, Heart, ClipboardCheck, ArrowRight } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";
import { Button } from "./ui/button";
import { useBookingDemo } from "@/context/BookingContext";

const groups = [
  {
    title: "Core Safety & Results",
    items: [
      {
        icon: ShieldCheck,
        title: "Is it safe for my skin tone?",
        text: "Yes. We use FDA-cleared technology specifically designed to be safe and effective for all skin tones, including deeper complexions. We perform a test patch during your consultation to calibrate settings perfectly for you.",
      },
      {
        icon: Sparkles,
        title: "Does it hurt?",
        text: "Most clients describe it as a quick 'rubber band snap.' Our device features an advanced sapphire cooling tip that stays cold throughout the session to significantly reduce any discomfort.",
      },
      {
        icon: Calendar,
        title: "How many sessions will I need?",
        text: "Most see significant reduction after 6-8 sessions. Since hair grows in cycles, consistent spacing is key to catching every follicle in its active phase for long-term results.",
      },
    ],
  },
  {
    title: "The Experience & Prep",
    items: [
      {
        icon: UserCheck,
        title: "What happens at the consultation?",
        text: "We review your goals, perform a skin analysis, and run a test patch. You'll get a personalized treatment plan so you know exactly how the laser feels before your first full session.",
      },
      {
        icon: Heart,
        title: "Can I treat sensitive areas?",
        text: "Absolutely. We specialize in sensitive areas like the bikini line, underarms, and face. Our private, boutique environment ensures you feel comfortable and respected throughout every treatment.",
      },
      {
        icon: ClipboardCheck,
        title: "How should I prepare?",
        text: "Please shave the area 12-24 hours before your visit. Avoid sun exposure and self-tanner for 2 weeks, and ensure skin is clean of any lotions or perfumes on the day of treatment.",
      },
    ],
  },
];

const LogisticsSection = () => {
  const { openBookingDemo } = useBookingDemo();

  return (
    <section id="logistics" className="py-24 sm:py-36 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Safety & Assurance"
          title={
            <>
              Clinical standards. <br />
              Honest answers.
            </>
          }
        />

        <div className="space-y-16 sm:space-y-24 mt-16 sm:mt-24">
          {groups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-10">
              <div className="flex items-center gap-4 px-1">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-espresso/30 font-bold whitespace-nowrap">
                  {group.title}
                </h3>
                <span className="h-px w-full bg-border/20" />
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                {group.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex} 
                    className="architectural-panel rounded-[2.5rem] p-8 sm:p-10 hover:border-primary/20 transition-all duration-700 ease-in-out group bg-white/40 shadow-[0_24px_48px_-12px_rgba(26,22,20,0.03)]"
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-8 bg-white border border-border/60 shadow-sm group-hover:border-primary/20 transition-all duration-500">
                      <item.icon className="w-4.5 h-4.5 text-primary/40" aria-hidden="true" />
                    </div>
                    <h4 className="text-[16px] font-bold text-espresso mb-4 tracking-tight leading-snug">{item.title}</h4>
                    <p className="text-[14px] text-espresso/60 leading-relaxed font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* conversion cta — Integrated Architecture */}
          <div className="pt-16 sm:pt-24 flex flex-col items-center text-center">
            <div className="architectural-panel border-border/10 p-12 sm:p-20 max-w-4xl w-full shadow-[0_64px_128px_-32px_rgba(26,22,20,0.08)] bg-white/60 backdrop-blur-xl relative overflow-hidden">
              <div className="premium-glow-orb bg-primary/10 -top-20 -right-20 opacity-20" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-6 h-px bg-primary/40" />
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold">Still have questions?</span>
                </div>
                <h4 className="text-3xl sm:text-4xl font-light tracking-tight text-espresso mb-6 leading-tight">
                  Every skin journey <br className="hidden sm:block"/><span className="font-semibold text-primary/80 italic">is unique.</span>
                </h4>
                <p className="text-base sm:text-lg text-espresso/70 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                  Let's discuss your specific goals during a complimentary, no-pressure consultation at my personal Austin studio.
                </p>
                <Button 
                  onClick={openBookingDemo}
                  className="bg-primary hover:bg-primary/95 text-white rounded-full px-12 h-16 sm:h-18 text-base font-bold uppercase tracking-widest shadow-[0_25px_50px_-12px_hsla(340,30%,48%,0.5)] hover:shadow-[0_30px_60px_-12px_hsla(340,30%,48%,0.7)] hover:-translate-y-1 transition-all duration-700 active:scale-95"
                >
                  Book Free Consultation
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;
