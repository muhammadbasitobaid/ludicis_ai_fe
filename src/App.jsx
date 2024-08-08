import Button from "./components/common/Button"
import GridSystem from "./components/common/GridSystem"
import Heading from "./components/common/Heading"
import Image from "./components/common/Image"
import Link from "./components/common/Link"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div  className="bg-bgGray">
    <Navbar />
    <HeroSection/>
    <GridSystem/>
    <div>

      <div className="text-3xl text-red-500">Hello World!</div>
      <Heading variant="xl" level={1}>Heading XL</Heading>
      <Heading variant="lg" level={2}>Heading LG</Heading>
      <Heading variant="md" level={3}>Heading MD</Heading>
      <Heading variant="sm" level={4}>Heading SM</Heading>
      <Button variant="primary" iconEnd={<Image src={"/icons/arrow_right_white.svg"} alt="arrow_right_white"/>}>Get Started</Button>
      <Button variant="secondary">Book a Demo</Button>
      <Button variant="gradient" iconStart={<Image src={"/icons/sparkles.svg"} alt="sparkles"/>} iconEnd={<Image src={"/icons/arrow_right_black.svg"} alt="arrow_right_black"/>}>Gradient Button</Button>
    <div className="p-4 space-y-4">
      <Link text="Primary Link" href="#" />
      <Link text="Secondary Link" href="#" />
    </div>
    <br/>

      <Heading variant="xl" level={1}>Heading XL</Heading>
      <Heading variant="lg" level={2}>Heading LG</Heading>
      <Heading variant="md" level={3}>Heading MD</Heading>
      <Heading variant="sm" level={4}>Heading SM</Heading>
      <Button variant="primary" iconEnd={<Image src={"/icons/arrow_right_white.svg"} alt="arrow_right_white"/>}>Get Started</Button>
      <Button variant="secondary">Book a Demo</Button>
      <Button variant="gradient" iconStart={<Image src={"/icons/sparkles.svg"} alt="sparkles"/>} iconEnd={<Image src={"/icons/arrow_right_black.svg"} alt="arrow_right_black"/>}>Gradient Button</Button>
    <div className="p-4 space-y-4">
      <Link text="Primary Link" href="#" />
      <Link text="Secondary Link" href="#" />
    </div>


      <Heading variant="xl" level={1}>Heading XL</Heading>
      <Heading variant="lg" level={2}>Heading LG</Heading>
      <Heading variant="md" level={3}>Heading MD</Heading>
      <Heading variant="sm" level={4}>Heading SM</Heading>
      <Button variant="primary" iconEnd={<Image src={"/icons/arrow_right_white.svg"} alt="arrow_right_white"/>}>Get Started</Button>
      <Button variant="secondary">Book a Demo</Button>
      <Button variant="gradient" iconStart={<Image src={"/icons/sparkles.svg"} alt="sparkles"/>} iconEnd={<Image src={"/icons/arrow_right_black.svg"} alt="arrow_right_black"/>}>Gradient Button</Button>
    <div className="p-4 space-y-4">
      <Link text="Primary Link" href="#" />
      <Link text="Secondary Link" href="#" />
    </div>
    </div>
    </div>
  )
}

export default App
