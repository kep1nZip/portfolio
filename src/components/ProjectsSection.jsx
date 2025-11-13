import { useEffect, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 4,
    title: "MyKafe",
    description: "MyKafe is a modern cafe website designed to bring the warmth and elegance of a coffee experience directly to the digital realm. Built with React, Tailwind CSS, and Framer Motion, this project prioritizes a seamless User Experience (UX) and a consistent aesthetic, with smooth and interactive animations.",
    image: "/projects/project4.png",
    tags: ["HTML", "CSS", "React", "vite.js"],
    demoUrl: "https://mykafe.vercel.app/",
    githubUrl: "https://github.com/kep1nZip/MyKafe",
  },
  {
    id: 1,
    title: "Simple Calculator",
    description: "My first project ever! I made this project by using HTML, CSS, and JavaScript. In this application, user can use addition ( + ), subtraction ( - ), multiplication ( * ), and division ( / ), user can also use the decimal number! I need 5 hours to made it, also glad that this project was helped by one of my friend. ",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "Vanilla Js"],
    demoUrl: "#",
    githubUrl: "https://github.com/kep1nZip/Calculator",
  },
  {
    id: 2,
    title: "E-Sports Tournament Data Management Application",
    description: "I made this project with my college friends by Go-Language. In this application, user can record/add, manage, and analyze data that related to e-sports tournaments.",
    image: "/projects/project2.png",
    tags: ["Go-language"],
    demoUrl: "#",
    githubUrl: "https://github.com/kep1nZip/tubes_alpro_2",
  },
  {
    id: 3,
    title: "Simple Rock-Scissors-Paper Game",
    description:
      "This game features three difficulty levels: normal, medium, and hard. Scores are automatically saved by local-storage, and features include player's turn highlight, score-reset, full-screen mode, and a responsive and engaging neon-look display.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "Vanilla Js"],
    demoUrl: "https://simple-rock-scissors-paper.vercel.app/",
    githubUrl: "https://github.com/kep1nZip/Rock-paper-scissors",
  },
];

export const ProjectsSection = () => {
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
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          <span className={isDark ? "text-foreground" : "text-white"}>
            Featured
          </span>{" "}
          <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          <span className={isDark ? "text-foreground" : "text-white"}>
          Some of my projects
          </span>
        </motion.p>

        <div className="flex flex-col gap-16">
          {projects.map((project, key) => {
            const isEven = key % 2 === 1;

            return (
              <div
                key={key}
                className={`group flex flex-col md:flex-row items-center bg-card rounded-lg overflow-hidden shadow-xs 
                  transition-shadow duration-500 hover:shadow-xl card-hover ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-105"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-full md:w-1/2 p-6 flex flex-col justify-between"
                >
                  <h3
                    className={`
                      relative text-2xl md:text-3xl font-bold mb-3 w-fit
                      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                      after:transition-all after:duration-300 after:origin-left
                      group-hover:after:w-full
                      ${isDark ? "after:bg-white" : "after:bg-black"}
                    `}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-base mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-auto">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="relative text-foreground/80 hover:text-primary transition-colors duration-300 
                        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary 
                        after:transition-all after:duration-300 after:origin-left hover:after:w-full"
                    >
                      <ExternalLink size={22} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="relative text-foreground/80 hover:text-primary transition-colors duration-300 
                        after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary 
                        after:transition-all after:duration-300 after:origin-left hover:after:w-full"
                    >
                      <Github size={22} />
                    </a>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/kep1nZip"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
