import GridSystem from "./components/common/GridSystem"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import PlanSection from "./components/PlanSection"
import ProblemSolutionSection from "./components/ProblemSolutionSection"

function App() {
  return (
    <div className="bg-bgGray">
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <GridSystem />
      <PlanSection/>
    </div>
  )
}

export default App
