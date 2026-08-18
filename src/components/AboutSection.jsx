import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => (
  <section id="about" className="border-t border-foreground/10 py-24 px-4 md:py-32">
    <div className="container">
      <div className="grid gap-12 md:grid-cols-[0.35fr_0.65fr]">
        <div>
          <p className="section-label">01 / About</p>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">A little<br /><span className="serif font-semibold text-primary">about me.</span></h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl border-l border-foreground/15 pl-6 md:pl-10"
        >
          <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
          <div className="mt-6 space-y-5 text-foreground/65 leading-7">
            <p>
              After graduating from Yos Sudarso Karawang High School, I started
              learning programming with C++. Over time, I found my interests in
              front-end development and UI/UX design—where visual thinking and
              code come together.
            </p>
            <p>
              In 2024, I continued my studies in Informatics at Telkom University
              Bandung. I enjoy building interfaces, experimenting with ideas, and
              sharing programming projects on GitHub. I am always open to
              conversations around technology, design, automotive, and gaming.
            </p>
          </div>
          <a href="#contact" className="mt-8 inline-flex items-center gap-2 font-medium text-primary hover:underline">
            Get in touch <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);
