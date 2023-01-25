import HomeIcon from "../../assets/house.png"
import { MenuItems } from "./MenuItems"
import { ResponsiveMenu } from "./ResponsiveMenu"

export const Navbar = () => {
  return (
    <nav className="bg-orange-400 px-8 sm:px-20 py-6 md:py-8 md:px-32 lg:px-72 text-white flex justify-between items-center w-screen shadow-sm">
      <div className="text-3xl">
        <img src={HomeIcon} className="w-10 md:w-16 lg:w-[84px]" alt="" />
      </div>
      <div className="hidden sm:flex gap-6 sm:gap-10 lg:gap-12 text-sm items-center">
        {MenuItems.map((e, i) => (
          <a href={e.path} key={i} className="hover:underline">
            {e.label}
          </a>
        ))}
      </div>
      <div className="flex sm:hidden">
        <ResponsiveMenu />
      </div>
    </nav>
  )
}
