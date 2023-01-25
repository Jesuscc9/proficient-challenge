import { useCalculator } from "../../context"

export const Summary = () => {
  const { totalItems, totalMeters, subtotal, tax, total } = useCalculator()

  return (
    <div className="m-auto">
      <h1 className="text-3xl mt-6 text-center">Summary</h1>
      <div className="flex flex-col gap-4 bg-gray-100 p-8 mt-6 m-auto w-[400px] max-w-full text-black dark:bg-gray-700 dark:text-white">
        <div className="flex">
          <p className="w-full">Total items</p>
          <p className="w-[100px]">{totalItems}</p>
        </div>
        <div className="flex">
          <p className="w-full">Total M2</p>
          <p className="w-[100px]">{totalMeters}</p>
        </div>
        <div className="flex">
          <p className="w-full">Subtotal</p>
          <p className="w-[100px]">${subtotal}</p>
        </div>
        <div className="flex">
          <p className="w-full">Tax</p>
          <p className="w-[100px]">${tax}</p>
        </div>
        <div className="flex">
          <p className="w-full font-bold">Total</p>
          <p className="w-[100px] font-bold">${total}</p>
        </div>
        <div className="flex">
          <p className="w-full font-bold">Due today 50%</p>
          <p className="w-[100px] font-bold">${total / 2}</p>
        </div>
      </div>
    </div>
  )
}
