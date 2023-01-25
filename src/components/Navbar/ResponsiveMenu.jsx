import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { MenuItems } from "./MenuItems"
import "./Navbar.css"

export const ResponsiveMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => setShowMenu(!showMenu)

  useEffect(() => {
    const bodyOverflow = showMenu ? "hidden" : "auto"
    document.body.style.overflow = bodyOverflow
  }, [showMenu])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setShowMenu(false)
    }

    window.addEventListener("keydown", handleEsc)

    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      <button onClick={handleClick}>
        <div id="nav-icon3" className={showMenu ? "open" : null}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <AnimatePresence>
        {showMenu ? (
          <motion.div
            initial={{ opacity: 0, top: 78 }}
            animate={{ opacity: 1, top: 88 }}
            exit={{ opacity: 0, top: 98 }}
            className="flex flex-col items-center gap-10 text-2xl fixed z-10 left-0 bg-white h-screen w-screen text-orange-400 pt-8 mt-12"
          >
            {MenuItems.map((e, i) => (
              <motion.a
                key={i}
                href={e.path}
                initial={{ opacity: 0.6, top: 10 }}
                animate={{ opacity: 1, top: 0 }}
                className="hover:underline hover:text-orange-400 text-black"
              >
                {e.label}
              </motion.a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
