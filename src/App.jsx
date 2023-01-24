import React from "react"
import { Calculator, Navbar } from "./components"
import { CalculatorProvider } from "./context"

function App() {
  return (
    <div className="App">
      <Navbar />
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </div>
  )
}

export default App
