import Button from "./components/common/Button"
import Heading from "./components/common/Heading"
import Image from "./components/common/Image"

function App() {

  return (
    <>
      <div className="text-3xl text-red-500">Hello World!</div>
      <Heading variant="xl" level={1}>Heading XL</Heading>
      <Heading variant="lg" level={2}>Heading LG</Heading>
      <Heading variant="md" level={3}>Heading MD</Heading>
      <Heading variant="sm" level={4}>Heading SM</Heading>
      <Button variant="primary" iconEnd={<Image src={"/icons/arrow_right_white.svg"} alt="arrow_right_white"/>}>Get Started</Button>
      <Button variant="secondary">Book a Demo</Button>
      <Button variant="gradient" iconStart={<Image src={"/icons/sparkles.svg"} alt="sparkles"/>} iconEnd={<Image src={"/icons/arrow_right_black.svg"} alt="arrow_right_black"/>}>Gradient Button</Button>
    </>
  )
}

export default App
