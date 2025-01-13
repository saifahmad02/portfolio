import { Experience } from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center bg-black">
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects" className="w-full">
          <Projects />
        </section>
        <section id="footer">
          <Footer />
        </section>
        <Dock /> 
    </div>
  );
}
