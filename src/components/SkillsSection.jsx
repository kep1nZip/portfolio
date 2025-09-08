import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // FE
  { name: "HTML", icon: "/logos/html.png", category: "frontend" },
  { name: "CSS", icon: "/logos/css.png", category: "frontend" },
  { name: "JavaScript", icon: "/logos/javascript.png", category: "frontend" },
  { name: "React", icon: "/logos/react.png", category: "frontend" },
  { name: "Tailwind CSS", icon: "/logos/tailwind.png", category: "frontend" },

  // BE
  { name: "MongoDB", icon: "/logos/mongodb.png", category: "backend" },
  { name: "MySQL", icon: "/logos/sql.png", category: "backend" },
  { name: "C++", icon: "/logos/cpp.png", category: "backend" },
  { name: "Go-Language", icon: "/logos/golang.png", category: "backend" },

  // APK
  { name: "Figma", icon: "/logos/figma.png", category: "tools" },
  { name: "Microsoft Office 365", icon: "/logos/365.png", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
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

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className={isDark ? "text-foreground" : "text-white"}>
            My
          </span>{" "}
          <span className="text-primary">Skills</span>
        </h2>

        <div className="bg-white dark:bg-card rounded-2xl shadow-lg p-8 md:p-12">

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredSkills.map((skill, key) => (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center text-center space-y-3 
                transition duration-300 hover:shadow-[0_0_20px] hover:shadow-primary/70"
              >
                <h3 className="font-medium text-sm text-foreground">{skill.name}</h3>
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
