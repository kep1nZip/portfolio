import { ArrowDown } from "lucide-react";

export const FirstSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 text-white">
        <div className="space-y-6">
          <img
            src="/cringesat.jpg"
            className="w-24 h-24 rounded-full mx-auto mb-6 shadow-lg border-2 border-primary opacity-0 animate-fade-in"
          />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Johanes
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {""}
              Kevin Agustahadi
            </span>
          </h1>

          <p className="text-lg md:text-xl opacity-0 animate-fade-in-delay-3">
            An enthusiastic beginner Front-End Developer who is 
            passionate about turning ideas into functional and engaging websites. 
            Focused on creating interactive and responsive user experiences.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>

            <a
              href="https://drive.google.com/drive/folders/1uXFwMZVTc7arGYr_47ka7uyx6ny2LGrE?usp=sharing"
              className="px-6 py-2 rounded-full border border-primary text-white hover:bg-primary/20 transition-colors duration-300 ml-4"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white">
        <span className="text-sm mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
