import { useEffect, useState } from "react";

export const AboutSection = () => {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      const darkNow = root.classList.contains("dark");
      setIsDark(darkNow);
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
          <span className={isDark ? "text-foreground" : "text-white"}>
            About
          </span>{" "}
          <span className="text-primary">Me</span>
        </h2>

        {/* Card */}
        <div
          className="
            group bg-white dark:bg-card rounded-2xl shadow-lg p-8 md:p-12
            transition-all duration-300 transform hover:scale-105
          "
        >
          <div className="space-y-6">
            <h3
              className={`
                relative text-2xl font-semibold inline-block 
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 
                after:transition-all after:duration-500 after:origin-left
                group-hover:after:w-full
                ${isDark ? "after:bg-white" : "after:bg-black"}
              `}
            >
              Passionate Web Developer
            </h3>

            <p className="text-muted-foreground text-justify">
              After graduating from Yos Sudarso Karawang High School, I decided
              to learn programming, and my first programming language was C++. I
              also discovered programming-related content on social media and
              finally found my interests, which were Front-end and UI/UX Design
              because I like designing and managing a lot of code! Sometimes I
              also like to share my code on GitHub, so feel free to Connect or
              Follow me on my Github where I post something about Programming
              (some of for fun, for sure).
            </p>

            <p className="text-muted-foreground text-justify">
              In 2024, I decided to continue my study at Telkom University
              Bandung with major in Informatics/Computer Science. Also, feel
              free to contact me via Instagram or Gmail, we can have chit-chat
              about some hobbies like tech, computer, programming, design,
              automotive, or even gaming related :D
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
