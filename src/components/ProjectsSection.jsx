import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "MyKafe",
    description: "A modern café website focused on warmth, visual hierarchy, smooth interaction, and a consistent user experience.",
    image: "/projects/project4.png",
    tags: ["React", "Tailwind CSS", "Vite"],
    demoUrl: "https://mykafe.vercel.app/",
    githubUrl: "https://github.com/kep1nZip/MyKafe",
  },
  {
    title: "Simple Calculator",
    description: "My first programming project, built with vanilla web technologies and supporting basic arithmetic and decimal numbers.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "https://github.com/kep1nZip/Calculator",
  },
  {
    title: "E-Sports Tournament Data Management",
    description: "A collaborative Go application for recording, managing, and analyzing data related to e-sports tournaments.",
    image: "/projects/project2.png",
    tags: ["Go"],
    demoUrl: "#",
    githubUrl: "https://github.com/kep1nZip/tubes_alpro_2",
  },
  {
    title: "Rock-Paper-Scissors",
    description: "A responsive game with difficulty levels, local score persistence, player-turn highlights, reset controls, and fullscreen mode.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://simple-rock-scissors-paper.vercel.app/",
    githubUrl: "https://github.com/kep1nZip/Rock-paper-scissors",
  },
  {
    title: "LeadEstate",
    description: "A reminder and follow-up management application that helps real-estate agents maintain relationships with prospective buyers.",
    image: "/projects/project5.png",
    tags: ["React", "Java", "Spring Boot", "SQL"],
    demoUrl: "https://leadestate-six.vercel.app/",
    githubUrl: "https://github.com/kep1nZip/LeadEstate",
  },
  {
    title: "LeadEstate — JSP Version",
    description: "The OOP-course version of LeadEstate using JSP and Servlets with XAMPP and MySQL for server-side data management.",
    image: "/projects/project6.jpeg",
    tags: ["JSP", "Java", "MySQL"],
    demoUrl: "https://github.com/kep1nZip/LeadEstate-for-OOP-course",
    githubUrl: "https://github.com/kep1nZip/LeadEstate-for-OOP-course",
  },
];

export const ProjectsSection = () => (
  <section id="projects" className="border-t border-foreground/10 py-24 px-4 md:py-32">
    <div className="container">
      <div className="mb-14">
        <p className="section-label">03 / Selected work</p>
        <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
          Projects built with <span className="serif font-semibold text-primary">purpose.</span>
        </h2>
      </div>

      <div className="divide-y divide-foreground/10 border-y border-foreground/10">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-7 py-10 md:grid-cols-[72px_0.9fr_1.1fr] md:items-center"
          >
            <div className="text-sm font-semibold text-primary">0{index + 1}</div>
            <div className="overflow-hidden border border-foreground/10 bg-card">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="aspect-[16/9] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">{project.title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-foreground/60">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-foreground/15 px-3 py-1 text-xs text-foreground/60">{tag}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-5">
                {project.demoUrl !== "#" && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                    Live project <ArrowUpRight size={16} />
                  </a>
                )}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold hover:text-primary">
                  GitHub <Github size={16} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10">
        <a href="https://github.com/kep1nZip" target="_blank" rel="noopener noreferrer" className="outline-button">
          View all on GitHub <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  </section>
);
