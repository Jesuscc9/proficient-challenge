import { useCalculator } from "../context"
import { Items, Summary } from "./"

export const Calculator = () => {
  const { handleClear } = useCalculator()

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
        <Items />
        <button
          className="border border-orange-500 px-10 py-3 w-min rounded-sm text-sm"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <Summary />
    </div>
  )
}
