import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import NavbarOnlyLogo from './components/NavbarOnlyLogo'
import { motion } from 'framer-motion'

function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0}}
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
