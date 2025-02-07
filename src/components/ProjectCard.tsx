// ProjectCard.tsx
import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import Modal from './Modal';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle modal visibility
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 cursor-pointer hover:scale-105"
        onClick={handleCardClick}
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors group/link"
            >
              <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              Live Demo
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group/link"
            >
              <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
              Source Code
            </a>
          </div>
        </div>
      </div>

      {/* Modal component to show detailed project information */}
      <Modal isOpen={isModalOpen} onClose={closeModal} project={project} />
    </>
  );
}
