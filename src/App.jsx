import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import NavbarOnlyLogo from './components/NavbarOnlyLogo'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function App() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div>
          {/* <Navbar /> */}
          <NavbarOnlyLogo />
        </div>
        <Outlet />
      </motion.div>
    </>
  )
}

export default App
