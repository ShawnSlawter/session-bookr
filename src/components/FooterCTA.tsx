import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { toast } from "sonner";

const FooterCTA = () => {
  const handleBook = () => toast("Demo mode — booking not yet connected");

  return (
    <>
      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ready to Train?
          </h2>
          <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto">
            Pick a session that works for you. Show up. Get stronger.
          </p>
          <Button
            size="lg"
            onClick={handleBook}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 h-13 text-base font-semibold shadow-[0_0_40px_hsl(24,95%,53%,0.25)]"
          >
            Book Your Session
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Alex Moreno · Barcelona
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>@alexmoreno.training</span>
          </a>
        </div>
      </footer>
    </>
  );
};

export default FooterCTA;
