import React from 'react';
import { motion } from 'framer-motion'; // Smooth animations
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/Rohit_Rajput.jpg'; // Import the image

export default function Home() {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-200 via-indigo-300 to-purple-400">
      {/* Background Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/3 -top-1/3 w-2/3 h-2/3 bg-blue-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-40 animate-blob"></div>
        <div className="absolute -bottom-1/3 -left-1/3 w-2/3 h-2/3 bg-purple-500 rounded-full mix-blend-overlay filter blur-[120px] opacity-40 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-36 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-indigo-900 font-semibold text-lg tracking-wide uppercase">
                Welcome to My Portfolio
              </p>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 drop-shadow-lg">
                Hi, I'm <span className="text-indigo-800">Rohit Rajput</span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Electronics & Telecommunication Engineer
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed max-w-xl font-medium">
                Passionate engineer specializing in front-end development, software testing, and data analytics.
                Focused on building exceptional digital experiences with innovation-driven technology.
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-indigo-800 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-indigo-900 transition-all duration-300 transform hover:translate-x-2"
                >
                  View My Work
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-gray-600 text-gray-800 text-lg font-semibold rounded-full hover:border-indigo-900 hover:text-indigo-900 transition-colors duration-300"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Section - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-800 to-purple-700 rounded-full opacity-40 blur-[80px] transform rotate-12 animate-pulse"></div>

            {/* Profile Image */}
            <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-80 md:h-80 shadow-2xl ring-4 ring-indigo-500 transform hover:scale-105 transition-transform duration-300">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
