import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const otherProjects = [
  {
    id: 1,
    title: "Designs",
    description: "Creative stuffs (poster, live report frame, etc) for university event and personal (click to find more!).",
    image: "/projects/poster.png",
    link: "https://www.canva.com/design/DAGdKbnIuVU/esOry9m3TrQX1MwusxK2Pg/view?utm_content=DAGdKbnIuVU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h04a28e1a0a",
  },
  {
    id: 2,
    title: "Photography",
    description: "A collection of candid moments, street photography, and visual snippets of life.",
    image: "/projects/photography.png",
    link: "https://www.instagram.com/stories/highlights/17987235884240554/",
  },
  {
    id: 3,
    title: "UI/UX",
    description: "Designing intuitive and visually engaging digital interfaces centered around user needs.",
    image: "/projects/uiux.png",
    link: "https://canva.link/dx439eo1uw2j9vp",
  },
];

export const OtherProject = () => {
    const [isDark, setIsDark] = useState(
        () => document.documentElement.classList.contains("dark")
    );

    useEffect(() => {
        const root = document.documentElement;
        const observer = new MutationObserver(() => {
        setIsDark(root.classList.contains("dark"));
        });
        observer.observe(root, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);

  return (
    <section id="other-projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="text-primary">Other</span> {" "}
          <span className={isDark ? "text-foreground" : "text-white"}>Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
            {otherProjects.map((project, key) => (
            <motion.a
                key={key}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: key * 0.1 }}
                viewport={{ once: true }}
                className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg 
                            transition-all duration-300 cursor-pointer block transform hover:scale-105"
            >
                <div className="overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                </div>
                <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                    {project.description}
                </p>
                </div>
            </motion.a>
            ))}
        </div>
      </div>
    </section>
  );
};