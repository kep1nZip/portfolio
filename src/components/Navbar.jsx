import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-all duration-300",
        isScrolled
          ? "border-foreground/10 bg-background/85 py-3 backdrop-blur-xl"
          : "border-transparent bg-background/45 py-4 backdrop-blur-md"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-baseline gap-1 text-lg font-bold tracking-tight">
          <span className="text-primary">kep1n</span><span>.zip</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              {item.name}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="rounded-full p-2 text-foreground md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl transition-opacity md:hidden",
            isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
          )}
        >
          <div className="flex flex-col items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-medium text-foreground transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
