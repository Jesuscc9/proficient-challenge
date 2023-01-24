import React from "react"

export const Navbar = () => {
  return (
    <nav className="bg-orange-400 px-20 py-8 text-white flex justify-between">
      <div className="text-3xl">Home</div>
      <div className="flex gap-12 text-sm items-center">
        <a href="">How We Work</a>
        <a href="">Services</a>
        <a href="">Free Quote</a>
        <a href="">Contact</a>
      </div>
    </nav>
  )
}
