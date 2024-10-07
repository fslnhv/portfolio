import React from 'react'
import { useParams, Link } from 'react-router-dom'

const projects = [
  { id: 1, title: "E-commerce UI", description: "A modern and intuitive user interface for an online store", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Web Development", details: "This project showcases a sleek and user-friendly e-commerce interface designed to enhance the online shopping experience. The design focuses on clear product presentation, intuitive navigation, and a seamless checkout process.", technologies: ["React", "Redux", "Styled Components"] },
  { id: 2, title: "Weather App", description: "A responsive web application for checking weather forecasts", image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Web Development", details: "This weather application provides real-time weather information and forecasts. Built with React and integrating with a weather API, it offers a responsive design that works seamlessly across devices.", technologies: ["React", "OpenWeatherMap API", "Axios"] },
  { id: 3, title: "Portfolio Template", description: "A sleek and professional portfolio website template", image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Web Development", details: "This portfolio website template is designed to showcase creative work in a clean and impactful way. It features a minimalist design, smooth animations, and a fully responsive layout.", technologies: ["HTML5", "CSS3", "JavaScript"] },
  { id: 4, title: "Data Visualization Dashboard", description: "Interactive data insights platform", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Data Analysis", details: "This dashboard provides interactive visualizations of complex datasets, allowing users to explore trends and patterns easily. It integrates multiple data sources and offers customizable views for different user roles.", technologies: ["D3.js", "React", "Node.js", "MongoDB"] },
  { id: 5, title: "Machine Learning Model", description: "Predictive analytics for business", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Data Analysis", details: "Developed a machine learning model to predict customer churn for a telecommunications company. The model uses historical customer data to identify at-risk customers, allowing the business to take proactive retention measures.", technologies: ["Python", "Scikit-learn", "Pandas", "Jupyter Notebooks"] },
  { id: 6, title: "Inventory Management System", description: "Efficient stock tracking solution", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", category: "Software Engineering", details: "A comprehensive inventory management system designed for small to medium-sized businesses. It features real-time stock tracking, automated reordering, and detailed reporting to optimize inventory levels and reduce costs.", technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"] }
]

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) return <div>Project not found</div>

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/projects" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>
      <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
      <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-lg mb-6" />
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
        <h3 className="text-2xl font-semibold mb-2">Project Overview</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <h4 className="text-xl font-semibold mb-2">Details</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.details}</p>
        <h4 className="text-xl font-semibold mb-2">Technologies Used</h4>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ProjectDetail