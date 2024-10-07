import React from 'react'
import { Link } from 'react-router-dom'

const projects = [
  { id: 1, title: "E-commerce UI", description: "A modern online store interface", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Web Development" },
  { id: 2, title: "Weather App", description: "Real-time weather forecasts", image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Web Development" },
  { id: 3, title: "Portfolio Template", description: "Sleek portfolio website design", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Web Development" },
  { id: 4, title: "Data Visualization Dashboard", description: "Interactive data insights platform", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Data Analysis" },
  { id: 5, title: "Machine Learning Model", description: "Predictive analytics for business", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Data Analysis" },
  { id: 6, title: "Inventory Management System", description: "Efficient stock tracking solution", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Software Engineering" }
]

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`} className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                  {project.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Projects