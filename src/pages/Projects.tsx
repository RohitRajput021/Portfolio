import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

export default function ProjectShowcase() {
  return (
    <section className="min-h-screen py-32 bg-gradient-to-br from-indigo-200 via-indigo-300 to-indigo-400">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-indigo-600 font-semibold text-xl tracking-wide uppercase">
            My Work
          </h2>
          <h1 className="text-4xl font-extrabold text-gray-900">
            Featured Projects
          </h1>
        </div>

        {/* Grid with subtle hover effect on cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
