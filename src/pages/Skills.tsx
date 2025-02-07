import React from 'react';
import { skills } from '../data';

export default function Skills() {
  const categories = [
    'Languages',
    'Frameworks',
    'Tools',
    'Core Technologies',
    'Soft Skills',
    'Technical Skills',
  ] as const;

  return (
    <div className="min-h-screen py-40 bg-gradient-to-br from-green-400 to-blue-500">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-indigo-700 font-medium text-lg uppercase tracking-wider">
            Expertise & Skills
          </h2>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Technical & Professional Mastery
          </h1>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <div key={category}>
              <h2 className="text-3xl font-bold mb-8 text-gray-800 capitalize">
                {category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div
                      key={index}
                      className="relative bg-white rounded-lg shadow-md transition-all duration-300 p-4 flex flex-col items-center justify-center
                      transform hover:scale-105 hover:bg-blue-50 hover:shadow-xl hover:border hover:border-blue-400"
                    >
                      {/* Skill Icon */}
                      <div className="mb-3 flex items-center justify-center">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-14 h-14 object-contain transition-transform duration-300 hover:scale-110"
                        />
                      </div>

                      {/* Skill Name */}
                      <span className="text-lg font-semibold text-gray-900">
                        {skill.name}
                      </span>

                      {/* Skill Level Bar */}
                      <div className="mt-3 w-full">
                        <div className="text-sm font-medium text-gray-600">
                          {skill.name}
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div
                            className="h-2 rounded-full transition-all duration-500 ease-in-out"
                            style={{
                              width: `${skill.level}%`,
                              backgroundColor:
                                skill.level > 80
                                  ? '#5A67D8' // Deep Purple for high-level skills
                                  : skill.level > 50
                                  ? '#48BB78' // Green for moderate skills
                                  : '#F56565', // Red for lower levels
                            }}
                          />
                        </div>
                        <div className="text-xs text-gray-500 text-right">
                          {skill.level}%
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button Section */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="relative inline-block px-10 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg 
            hover:from-indigo-600 hover:to-purple-500 transition-all duration-300 transform hover:scale-110 active:scale-95"
            style={{
              boxShadow: '0px 4px 15px rgba(94, 92, 230, 0.4)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
            }}
          >
            Contact Me
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-600 opacity-20 blur-xl rounded-full"></span>
          </a>
        </div>
      </div>
    </div>
  );
}
