import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const otherProjects = [
  { title: "Designs", description: "Posters, live-report frames, and creative work for university events and personal projects.", image: "/projects/poster.png", link: "https://www.canva.com/design/DAGdKbnIuVU/esOry9m3TrQX1MwusxK2Pg/view?utm_content=DAGdKbnIuVU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h04a28e1a0a" },
  { title: "Photography", description: "A collection of candid moments, street photography, and visual snippets of everyday life.", image: "/projects/photography.png", link: "https://www.instagram.com/stories/highlights/17987235884240554/" },
  { title: "UI/UX", description: "Interface explorations centered on intuitive interaction and visual communication.", image: "/projects/uiux.png", link: "https://canva.link/dx439eo1uw2j9vp" },
];

export const OtherProject = () => (
  <section id="other-projects" className="border-t border-foreground/10 py-24 px-4 md:py-28">
    <div className="container">
      <div className="mb-10">
        <p className="section-label">04 / More</p>
        <h2 className="mt-4 text-3xl font-bold md:text-4xl">Other things I <span className="serif text-primary">create.</span></h2>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {otherProjects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="group border border-foreground/10 bg-card card-hover"
          >
            <div className="overflow-hidden">
              <img src={project.image} alt={project.title} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <ArrowUpRight size={18} className="text-primary" />
              </div>
              <p className="mt-3 text-sm leading-6 text-foreground/60">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);
