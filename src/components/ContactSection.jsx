import { Instagram, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

export const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`
    );
    window.location.href = `mailto:johaneskevina2@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="border-t border-foreground/10 py-24 px-4 md:py-32">
      <div className="container">
        <div className="grid gap-14 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="section-label">05 / Contact</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Let's work<br /><span className="serif text-primary">together.</span>
            </h2>
            <p className="mt-6 max-w-md leading-7 text-foreground/60">
              Have an idea, project, or simply want to talk about technology and design? Feel free to reach out.
            </p>

            <div className="mt-10 space-y-5 text-sm">
              <a href="mailto:johaneskevina2@gmail.com" className="flex items-center gap-4 hover:text-primary">
                <Mail size={18} /> johaneskevina2@gmail.com
              </a>
              <div className="flex items-center gap-4 text-foreground/70">
                <MapPin size={18} /> Bandung, Jawa Barat, Indonesia
              </div>
            </div>

            <div className="mt-8 flex gap-5">
              <a href="https://www.linkedin.com/in/johanes-kevin-agustahadi-0362a733a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/kep1n.zip/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary"><Instagram size={20} /></a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="border border-foreground/10 bg-card p-6 md:p-9">
            <div className="grid gap-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">Your Name</label>
                <input id="name" name="name" required className="w-full border border-foreground/15 bg-background px-4 py-3 outline-none transition-colors focus:border-primary" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">Your Email</label>
                <input id="email" name="email" type="email" required className="w-full border border-foreground/15 bg-background px-4 py-3 outline-none transition-colors focus:border-primary" placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">Your Message</label>
                <textarea id="message" name="message" required rows="6" className="w-full resize-none border border-foreground/15 bg-background px-4 py-3 outline-none transition-colors focus:border-primary" placeholder="Tell me about your project..." />
              </div>
              <button type="submit" className="primary-button w-full">Send Message <ArrowUpRight size={16} /></button>
              <p className="text-xs text-foreground/45">Submitting opens your default email application.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
