import GridSystem from "./components/common/GridSystem"
import FooterSection from "./components/FooterSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import PlanSection from "./components/PlanSection"
import ProblemSolutionSection from "./components/ProblemSolutionSection"
import TrialSection from "./components/TrialSection"

function App() {
  return (
    <div className="bg-bgGray">
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <GridSystem />
      <PlanSection/>
      <TrialSection/>
      <FooterSection/>
    </div>
  )
}

export default App
