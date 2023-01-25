import PropTypes from "prop-types"
import { useCalculator } from "../../context"

export const Items = () => {
  const { items } = useCalculator()

  return (
    <div className="flex flex-wrap justify-center sm:justify-between gap-8 mt-20">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  )
}

export const Item = ({ item }) => {
  const { handleDecrease, handleIncrease } = useCalculator()

  return (
    <article key={item.id} className="text-sm">
      <div className="custom-shadow flex flex-col items-center justify-center gap-3 w-[220px] h-[220px] text-black dark:border border-gray-700 border-opacity-50">
        <img src={item.image} alt="" />
        <p className="dark:text-white">{item.label}</p>
      </div>
      <div className="flex h-[50px] mt-6 bg-white dark:bg-gray-800">
        <button
          className="min-w-[41px] bg-gray-200 dark:bg-gray-600 dark:border-r-0 dark:border border-gray-700 rounded-l-md text-3xl font-thin"
          onClick={() => handleDecrease(item)}
        >
          -
        </button>
        <span className="border dark:border-gray-700 w-full grid place-items-center text-base text-black dark:text-orange-400">
          {item.amount}
        </span>
        <button
          className="min-w-[41px] bg-gray-200 dark:bg-gray-600 dark:border-l-0 dark:border border-gray-700 rounded-r-md text-3xl font-thin"
          onClick={() => handleIncrease(item)}
        >
          +
        </button>
      </div>
    </article>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    label: PropTypes.string,
    amount: PropTypes.number
  })
}
