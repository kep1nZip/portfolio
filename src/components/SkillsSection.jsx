import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/logos/html.png", category: "frontend" },
  { name: "CSS", icon: "/logos/css.png", category: "frontend" },
  { name: "JavaScript", icon: "/logos/javascript.png", category: "frontend" },
  { name: "React", icon: "/logos/react.png", category: "frontend" },
  { name: "Tailwind CSS", icon: "/logos/tailwind.png", category: "frontend" },
  { name: "MongoDB", icon: "/logos/mongodb.png", category: "backend" },
  { name: "MySQL", icon: "/logos/sql.png", category: "backend" },
  { name: "C++", icon: "/logos/cpp.png", category: "backend" },
  { name: "Go-Language", icon: "/logos/golang.png", category: "backend" },
  { name: "Figma", icon: "/logos/figma.png", category: "tools" },
  { name: "Microsoft Office 365", icon: "/logos/365.png", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="border-t border-foreground/10 py-24 px-4 md:py-32">
      <div className="container">
        <div className="mb-12 md:flex md:items-end md:justify-between">
          <div>
            <p className="section-label">02 / Expertise</p>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Tools I <span className="serif font-semibold text-primary">work with.</span>
            </h2>
          </div>
          <div className="mt-7 flex flex-wrap gap-2 md:mt-0">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                  activeCategory === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-foreground/15 text-foreground/60 hover:border-primary hover:text-primary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 border-l border-t border-foreground/10 sm:grid-cols-3 md:grid-cols-4">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="group flex min-h-40 flex-col items-center justify-center border-b border-r border-foreground/10 p-6 text-center transition-colors hover:bg-primary/5"
            >
              <img src={skill.icon} alt="" className="h-12 w-12 object-contain grayscale transition-all duration-300 group-hover:grayscale-0" />
              <h3 className="mt-4 text-sm font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
