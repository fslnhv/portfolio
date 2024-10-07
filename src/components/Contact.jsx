import React from 'react'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <p className="mb-6 text-lg">I'm always open to new opportunities and collaborations. Feel free to reach out!</p>
        <div className="space-y-6">
          <div className="flex items-center">
            <FaEnvelope className="text-2xl mr-4 text-blue-500" />
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">your.email@example.com</a>
            </div>
          </div>
          <div className="flex items-center">
            <FaLinkedin className="text-2xl mr-4 text-blue-700" />
            <div>
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/yourprofile</a>
            </div>
          </div>
          <div className="flex items-center">
            <FaGithub className="text-2xl mr-4 text-gray-700 dark:text-gray-300" />
            <div>
              <h3 className="text-xl font-semibold">GitHub</h3>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">github.com/yourusername</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact