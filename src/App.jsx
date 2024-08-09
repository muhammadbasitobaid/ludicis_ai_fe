import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GridSystem from "./components/common/GridSystem";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PlanSection from "./components/PlanSection";
import ProblemSolutionSection from "./components/ProblemSolutionSection";
import TrialSection from "./components/TrialSection";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
            // markers: true,  // Enable markers for debugging
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-bgGray">
      <Navbar />
      <div ref={(el) => sectionsRef.current[0] = el}>
        <HeroSection />
      </div>
      <div ref={(el) => sectionsRef.current[1] = el}>
        <ProblemSolutionSection />
      </div>
      <div ref={(el) => sectionsRef.current[2] = el}>
        <GridSystem />
      </div>
      <div ref={(el) => sectionsRef.current[3] = el}>
        <PlanSection />
      </div>
      <div ref={(el) => sectionsRef.current[4] = el}>
        <TrialSection />
      </div>
      <div ref={(el) => sectionsRef.current[5] = el}>
        <FooterSection />
      </div>
    </div>
  );
}

export default App;
