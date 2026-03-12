import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { toast } from "sonner";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBook = () => {
    toast("Demo mode — booking not yet connected");
  };

  const navLinks = [
    { label: "Schedule", id: "schedule" },
    { label: "About", id: "trust" },
    { label: "Location", id: "logistics" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-foreground font-bold text-lg tracking-[0.2em] uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Alex Moreno
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button
              size="sm"
              onClick={handleBook}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 text-sm font-semibold"
            >
              Book Your Session
            </Button>
          </nav>

          {/* Mobile toggle */}
          <div className="flex md:hidden items-center gap-3">
            <Button
              size="sm"
              onClick={handleBook}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 text-xs font-semibold h-8"
            >
              Book
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground p-1"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm text-muted-foreground hover:text-foreground py-2 text-left transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
