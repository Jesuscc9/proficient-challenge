import React from "react"
import { useCalculator } from "../context"

export const Calculator = () => {
  const { items, handleIncrease, handleDecrease, handleClear } = useCalculator()

  console.log({ items })

  return (
    <div className="p-20">
      <div className="flex flex-col gap-10">
        <h1 className="text-center text-4xl">What items to store?</h1>
        <p className="m-auto text-center w-[453px] text-sm">
          Select which items you wish to store before moving to your new home.
          Well keep em safe!
        </p>
      </div>
      <div className="flex flex-col gap-14 mt-10">
        <div className="flex gap-20">
          {items.map((item) => {
            return (
              <div key={item.id} className="text-sm">
                <div className="shadow-lg flex flex-col items-center justify-center gap-3 w-[220px] h-[220px]">
                  <img src={item.image} alt="" />
                  <p>{item.label}</p>
                </div>
                <div className="flex h-[50px] mt-6">
                  <button
                    className="min-w-[41px] bg-gray-200"
                    onClick={() => handleDecrease(item)}
                  >
                    -
                  </button>
                  <span className="border w-full grid place-items-center text-base">
                    {item.amount}
                  </span>
                  <button
                    className="min-w-[41px] bg-gray-200"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        <button
          className="border border-orange-500 px-10 py-3 w-min rounded-sm text-sm"
          onClick={() => {
            handleClear()
          }}
        >
          Clear
        </button>
      </div>
    </div>
  )
}
