import Heading from "./components/common/Heading"

function App() {

  return (
    <>
      <div className="text-3xl text-red-500">Hello World!</div>
      <Heading variant="xl" level={1}>Heading XL</Heading>
      <Heading variant="lg" level={2}>Heading LG</Heading>
      <Heading variant="md" level={3}>Heading MD</Heading>
      <Heading variant="sm" level={4}>Heading SM</Heading>
    </>
  )
}

export default App
