import { ArrowUp } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-foreground/10 px-4 py-8">
    <div className="container flex flex-col items-center justify-between gap-4 text-sm text-foreground/50 sm:flex-row">
      <p>© {new Date().getFullYear()} Johanes Kevin Agustahadi.</p>
      <a href="#home" className="inline-flex items-center gap-2 hover:text-primary">
        Back to top <ArrowUp size={16} />
      </a>
    </div>
  </footer>
);
