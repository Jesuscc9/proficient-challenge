import React, { createContext, useContext, useState } from "react"
import { initialItems } from "./items"

const initialValues = {
  items: initialItems,
  setItems: () => {},
  handleDecrease: (item) => {},
  handleIncrease: (item) => {},
  handleClear: () => {},
  totalItems: 0,
  totalMeters: 0,
  subtotal: 0,
  tax: 0,
  total: 0
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

  const handleClear = () => {
    const newItems = items.map((e) => ({ ...e, amount: 0 }))
    setItems(newItems)
  }

  const totalItems = items.reduce((acc, val) => acc + val.amount, 0)

  const totalMeters = items
    .reduce((acc, val) => acc + val.amount * val.meters, 0)
    .toFixed(2)

  const subtotal = Number((totalMeters * 200).toFixed(2))

  const tax = Number((subtotal * 0.16).toFixed(2))

  const total = Number((subtotal + tax).toFixed(2))

  const contextValues = {
    items,
    setItems,
    handleDecrease,
    handleIncrease,
    handleClear,
    totalItems,
    totalMeters,
    subtotal,
    tax,
    total
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
