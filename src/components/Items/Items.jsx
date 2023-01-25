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
      <div className="custom-shadow flex flex-col items-center justify-center gap-3 w-[220px] h-[220px]">
        <img src={item.image} alt="" />
        <p>{item.label}</p>
      </div>
      <div className="flex h-[50px] mt-6">
        <button
          className="min-w-[41px] bg-gray-200 rounded-l-md"
          onClick={() => handleDecrease(item)}
        >
          -
        </button>
        <span className="border w-full grid place-items-center text-base">
          {item.amount}
        </span>
        <button
          className="min-w-[41px] bg-gray-200 rounded-r-md"
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
