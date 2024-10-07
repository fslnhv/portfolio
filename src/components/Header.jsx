import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

const Header = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Your Name</Link>
        <div className="flex items-center space-x-6">
          <NavLink to="/" className={({ isActive }) => 
            isActive ? "text-blue-500 font-semibold" : "hover:text-gray-600 dark:hover:text-gray-300"
          } end>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => 
            isActive ? "text-blue-500 font-semibold" : "hover:text-gray-600 dark:hover:text-gray-300"
          }>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            isActive ? "text-blue-500 font-semibold" : "hover:text-gray-600 dark:hover:text-gray-300"
          }>Contact</NavLink>
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            {isDark ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header