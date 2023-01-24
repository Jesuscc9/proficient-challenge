import BedIcon from "../assets/beds.png"
import DeskIcon from "../assets/desk.png"
import DiningIcon from "../assets/dining.png"
import FurnitureIcon from "../assets/furniture.png"
import OvenIcon from "../assets/oven.png"
import RefrigeratorIcon from "../assets/refrigerator.png"
import SofaIcon from "../assets/sofa.png"
import TVIcon from "../assets/tv.png"
import WardrobeIcon from "../assets/wardrobe.png"
import WasherDryerIcon from "../assets/washer-dryer.png"

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
  },
  {
    id: randomId(),
    slug: "oven",
    label: "Oven",
    image: OvenIcon,
    meters: 0.6,
    amount: INITIAL_AMOUNT
  },
  {
    id: randomId(),
    slug: "sofa",
    label: "sofa",
    image: SofaIcon,
    meters: 1.5,
    amount: INITIAL_AMOUNT
  },
  {
    id: randomId(),
    slug: "tv",
    label: "TV",
    image: TVIcon,
    meters: 0.25,
    amount: INITIAL_AMOUNT
  },
  {
    id: randomId(),
    slug: "washer-dryer",
    label: "Washer-Dryer",
    image: WasherDryerIcon,
    meters: 0.5,
    amount: INITIAL_AMOUNT
  },
  {
    id: randomId(),
    slug: "dining",
    label: "Dining",
    image: DiningIcon,
    meters: 2,
    amount: INITIAL_AMOUNT
  },
  {
    id: randomId(),
    slug: "desk",
    label: "Desk",
    image: DeskIcon,
    meters: 0.75,
    amount: INITIAL_AMOUNT
  },
  {
    id: randomId(),
    slug: "wardrobe",
    label: "Wardrobe",
    image: WardrobeIcon,
    meters: 3.2,
    amount: INITIAL_AMOUNT
  }
]
