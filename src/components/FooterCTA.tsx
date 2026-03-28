import { Button } from "@/components/ui/button";
import { Instagram, ArrowRight } from "lucide-react";
import { useBookingDemo } from "@/context/BookingContext";

const FooterCTA = () => {
  const { openBookingDemo } = useBookingDemo();

  return (
    <>
      {/* CTA Section */}
      <section className="py-16 sm:py-24 premium-haze overflow-hidden relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-espresso mb-6 tracking-tight">
            Smooth starts here.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Experience a private, boutique approach to laser hair removal in Austin. Book your complimentary consultation and test patch today.
          </p>
          <Button
            size="lg"
            onClick={openBookingDemo}
            className="bg-primary text-primary-foreground hover:bg-primary/95 rounded-full px-12 h-14 sm:h-16 text-lg font-semibold shadow-[0_10px_30px_-10px_hsla(340,30%,48%,0.4)] hover:shadow-[0_15px_35px_-10px_hsla(340,30%,48%,0.6)] transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] border border-white/10"
          >
            Book Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Maya Alvarez · Austin, Texas
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>@mayaalvarez.laser</span>
            </a>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground/50 hidden sm:inline">
              Boutique Studio · Austin
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCTA;
