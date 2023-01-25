import { Items, Summary } from ".."
import { useCalculator } from "../../context"

export const Calculator = () => {
  const { handleClear } = useCalculator()

  return (
    <section className="py-10 px-10 sm:px-20 md:px-20 lg:px-40 xl:px-52 2xl:px-[332px] mt-20">
      <div className="flex flex-col gap-10">
        <h1 className="text-center text-4xl">What items to store?</h1>
        <p className="m-auto text-center w-auto sm:w-[453px] text-sm">
          Select which items you wish to store before moving to your new home.
          Well keep em safe!
        </p>
      </div>
      <div className="flex flex-col gap-14 mt-10">
        <Items />
        <button
          className="border border-orange-400 hover:text-white hover:bg-orange-400 px-10 py-3 w-min rounded-md   "
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
      <Summary />
    </section>
  )
}
