import React from 'react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="flex items-center justify-center">
          Made with <FaHeart className="text-red-500 mx-1" /> by Your Name
        </p>
        <p className="mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer