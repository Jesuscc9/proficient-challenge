import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import { MenuItems } from "./MenuItems"

export const ResponsiveMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => setShowMenu(!showMenu)

  return (
    <>
      <button onClick={handleClick}>{showMenu ? "Cerrar" : "Mostrar"}</button>
      <AnimatePresence>
        {showMenu ? (
          <motion.div
            initial={{ opacity: 0, top: 78 }}
            animate={{ opacity: 1, top: 88 }}
            exit={{ opacity: 0, top: 98 }}
            className="flex flex-col items-center gap-10 text-xl absolute z-10 left-0 bg-white h-screen w-screen text-orange-400 pt-8"
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
