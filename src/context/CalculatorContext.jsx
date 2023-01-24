import React, { createContext, useContext, useState } from "react"
import BedIcon from "../assets/beds.png"
import RefrigeratorIcon from "../assets/refrigerator.png"

const initialItems = [
  {
    slug: "beds",
    label: "Beds",
    image: BedIcon,
    price: 1.2,
    id: 1,
    amount: 0
  },
  {
    id: 2,
    slug: "refri",
    label: "Refrigerator",
    image: RefrigeratorIcon,
    price: 5.1,
    amount: 0
  }
]

const initialValues = {
  items: initialItems,
  setItems: () => {},
  handleDecrease: (item) => {},
  handleIncrease: (item) => {}
}

const MINIMUM_AMOUNT = 0

const CalculatorContext = createContext(initialValues)

export const CalculatorProvider = ({ children }) => {
  const [items, setItems] = useState(initialItems)

  const handleDecrease = (item) => {
    const newItems = items.map((e) =>
      e.id === item.id
        ? {
            ...e,
            amount: e.amount <= MINIMUM_AMOUNT ? e.amount : e.amount - 1
          }
        : e
    )

    setItems(newItems)
  }

  const handleIncrease = (item) => {
    const newItems = items.map((e) =>
      e.id === item.id
        ? {
            ...e,
            amount: e.amount + 1
          }
        : e
    )

    setItems(newItems)
  }

  const contextValues = {
    items,
    setItems,
    handleDecrease,
    handleIncrease
  }

  return (
    <CalculatorContext.Provider value={contextValues}>
      {children}
    </CalculatorContext.Provider>
  )
}

export const useCalculator = () => {
  return useContext(CalculatorContext)
}
