import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const FirstSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center px-4 pt-20">
      <div className="container">
        <div className="grid items-center gap-14 md:grid-cols-[1.35fr_0.65fr]">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-label mb-6"
            >
              Front-end Developer · UI/UX Designer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="text-5xl font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl"
            >
              Johanes Kevin
              <span className="serif block font-semibold text-primary">
                Agustahadi.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-7 max-w-2xl text-base leading-7 text-foreground/65 md:text-lg"
            >
              I design and build responsive digital experiences with a focus on
              clarity, interaction, and thoughtful visual details.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a href="#projects" className="primary-button">
                View My Work <ArrowRight size={16} />
              </a>
              <a
                href="https://drive.google.com/drive/folders/1uXFwMZVTc7arGYr_47ka7uyx6ny2LGrE?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button"
              >
                Download CV
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden border border-foreground/15 bg-card shadow-2xl">
              <img
                src="/cringesat.jpg"
                alt="Johanes Kevin Agustahadi"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-6 pt-24 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Based in</p>
                <p className="mt-1 font-medium">Bandung, Indonesia</p>
              </div>
            </div>
          </motion.div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground/45 transition-colors hover:text-primary"
        >
          Scroll <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
};
