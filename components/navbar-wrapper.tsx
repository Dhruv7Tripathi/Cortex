// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { Navbar } from "./navbar"
// import Navbar2 from "./navbar-2"

// export default function ScrollNavbarWrapper() {
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [lastScrollY, setLastScrollY] = useState(0)
//   const [isScrollingDown, setIsScrollingDown] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY
//       const scrollThreshold = 100

//       if (currentScrollY > scrollThreshold) {
//         if (currentScrollY > lastScrollY) {
//           // Scrolling down
//           setIsScrollingDown(true)
//         } else {
//           // Scrolling up
//           setIsScrollingDown(false)
//         }
//       } else {
//         // Back at top
//         setIsScrollingDown(false)
//       }

//       setLastScrollY(currentScrollY)
//     }

//     window.addEventListener("scroll", handleScroll, { passive: true })
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [lastScrollY])

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50">
//       <AnimatePresence mode="wait">
//         {!isScrollingDown && (
//           <motion.div
//             key="navbar"
//             initial={{ y: -100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -100, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Navbar />
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <AnimatePresence mode="wait">
//         {isScrollingDown && (
//           <motion.div
//             key="navbar2"
//             initial={{ y: -100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -100, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Navbar2 />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navbar } from "./navbar"
import Navbar2 from "./navbar-2"

export default function ScrollNavbarWrapper() {
  const [showNavbar2, setShowNavbar2] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollThreshold = 100

      if (currentScrollY > scrollThreshold && currentScrollY > lastScrollY) {
        // Scrolling down past threshold
        setShowNavbar2(true)
      } else if (currentScrollY <= scrollThreshold) {
        // Back near the top
        setShowNavbar2(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <AnimatePresence mode="wait">
        {!showNavbar2 ? (
          <motion.div
            key="navbar"
            initial={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Navbar />
          </motion.div>
        ) : (
          <motion.div
            key="navbar2"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <Navbar2 />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}