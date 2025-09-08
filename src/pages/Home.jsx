import { Navbar } from "../components/Navbar";
import { Background } from "../components/Background";
import { FirstSection } from "../components/FirstSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { OtherProject } from "../components/OtherProject";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative">
      {/* Background Effects */}
      <Background/>

      {/* Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <FirstSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <OtherProject />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
