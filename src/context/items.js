import BedIcon from "../assets/beds.png"
import FurnitureIcon from "../assets/furniture.png"
import RefrigeratorIcon from "../assets/refrigerator.png"

const INITIAL_AMOUNT = 0

const randomId = () => window.crypto.randomUUID()

export const initialItems = [
  {
    id: randomId(),
    slug: "beds",
    label: "Beds",
    image: BedIcon,
    meters: 1.2,
    amount: INITIAL_AMOUNT
  },
  {
    id: randomId(),
    slug: "refri",
    label: "Refrigerator",
    image: RefrigeratorIcon,
    meters: 1,
    amount: INITIAL_AMOUNT
  },
  {
    id: randomId(),
    slug: "furniture",
    label: "Furniture",
    image: FurnitureIcon,
    meters: 0.5,
    amount: INITIAL_AMOUNT
  }
]
