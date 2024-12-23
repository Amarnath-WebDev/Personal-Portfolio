import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveDemo: "https://example.com",
    github: "https://github.com"
  },
  {
    title: "Task Management System",
    description: "A collaborative project management tool with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveDemo: "https://example.com",
    github: "https://github.com"
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts and interactive maps.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80",
    technologies: ["React", "OpenWeather API", "Mapbox"],
    liveDemo: "https://example.com",
    github: "https://github.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-2">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a href={project.liveDemo} className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                  <a href={project.github} className="flex items-center text-gray-600 hover:text-gray-800">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}