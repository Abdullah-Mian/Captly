import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import Logo from '../ui/Logo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-sm">
      <div className="container py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Log In
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Start Free Trial
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden rounded-md p-2 text-gray-600 hover:text-blue-600 dark:text-gray-300"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
        >
          <div className="container py-4 flex flex-col space-y-4">
            <NavLinks mobile />
            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Link 
                to="/login" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 py-2"
                onClick={() => setIsOpen(false)}
              >
                Log In
              </Link>
              <Link 
                to="/signup" 
                className="btn btn-primary py-3"
                onClick={() => setIsOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}

const NavLinks = ({ mobile }: { mobile?: boolean }) => {
  const baseClasses = "transition-colors duration-200"
  const mobileClasses = mobile
    ? "block py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
    : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
  
  const links = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]
  
  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className={`${baseClasses} ${mobileClasses}`}
        >
          {link.name}
        </a>
      ))}
    </>
  )
}

export default Navbar
