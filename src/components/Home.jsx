import React from 'react'
import { Link } from 'react-router-dom'
import { FaCode, FaChartBar, FaLaptopCode } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">Your Name</h1>
        <p className="text-xl mb-8">Full-Stack Developer & Data Analyst</p>
        <Link to="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
          View My Work
        </Link>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <FaCode className="text-4xl mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p>Creating responsive and user-friendly web applications using modern technologies.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <FaChartBar className="text-4xl mb-4 text-green-500" />
            <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
            <p>Extracting insights from complex datasets to drive informed decision-making.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <FaLaptopCode className="text-4xl mb-4 text-purple-500" />
            <h3 className="text-xl font-semibold mb-2">Software Engineering</h3>
            <p>Designing and implementing efficient, scalable software solutions.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/project/1" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="E-commerce UI" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">E-commerce UI</h3>
                <p className="text-gray-600 dark:text-gray-300">A modern online store interface</p>
              </div>
            </div>
          </Link>
          <Link to="/project/4" className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Data Visualization Dashboard" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Data Visualization Dashboard</h3>
                <p className="text-gray-600 dark:text-gray-300">Interactive data insights platform</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home