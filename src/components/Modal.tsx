// Modal.tsx
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const Modal = ({ isOpen, onClose, project }: ModalProps) => {
  // Close the modal when clicking outside of it
  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).id === 'modal-overlay') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable body scroll when modal is open
    } else {
      document.body.style.overflow = 'auto'; // Re-enable body scroll when modal is closed
    }
    return () => {
      document.body.style.overflow = 'auto'; // Clean up when component unmounts
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 transition-opacity duration-300"
      onClick={handleOutsideClick}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-3/4 max-w-2xl transform scale-90 transition-transform duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span className="font-bold text-xl">X</span>
        </button>

        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-800 mb-4">{project.description}</p>

        <div className="flex gap-2 flex-wrap mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 transition-colors"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
