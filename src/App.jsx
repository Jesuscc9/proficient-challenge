import { Calculator, Footer, Navbar } from "./components"
import { CalculatorProvider } from "./context"

function App() {
  return (
    <>
      <Navbar />
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
      <Footer />
    </>
  )
}

export default App
