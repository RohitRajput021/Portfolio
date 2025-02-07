import React from 'react';
import { Github, Linkedin, Mail, Send, Code2, Phone } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-teal-100 to-indigo-200 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeIn animate__faster">
          <h2 className="text-blue-600 font-medium text-xl">Contact</h2>
          <h1 className="text-4xl font-extrabold text-gray-900">
            Get in Touch
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section: Contact Info */}
          <div className="space-y-8 animate__animated animate__fadeInUp animate__faster">
            <p className="text-gray-700 text-lg leading-relaxed">
              I'm always interested in hearing about new projects and
              opportunities. Whether you have a question or just want to say hi,
              feel free to reach out!
            </p>

            <div className="space-y-6">
              <a
                href="mailto:iamrohitrajput21@gmail.com"
                className="flex items-center gap-4 text-gray-800 hover:text-blue-600 transition-colors p-4 rounded-lg bg-white shadow-xl hover:shadow-2xl hover:bg-blue-50 backdrop-blur-md group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium">iamrohitrajput21@gmail.com</span>
              </a>
              <a
                href="tel:+917517713810"
                className="flex items-center gap-4 text-gray-800 hover:text-blue-600 transition-colors p-4 rounded-lg bg-white shadow-xl hover:shadow-2xl hover:bg-blue-50 backdrop-blur-md group"
              >
                <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium">7517713810</span>
              </a>
              <a
                href="https://github.com/RohitRajput021"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-800 hover:text-blue-600 transition-colors p-4 rounded-lg bg-white shadow-xl hover:shadow-2xl hover:bg-blue-50 backdrop-blur-md group"
              >
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium">GitHub Profile</span>
              </a>
              <a
                href="https://linkedin.com/in/rajputrohit21"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-800 hover:text-blue-600 transition-colors p-4 rounded-lg bg-white shadow-xl hover:shadow-2xl hover:bg-blue-50 backdrop-blur-md group"
              >
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium">LinkedIn Profile</span>
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/imrohitrt1ac/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-800 hover:text-blue-600 transition-colors p-4 rounded-lg bg-white shadow-xl hover:shadow-2xl hover:bg-blue-50 backdrop-blur-md group"
              >
                <Code2 className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="font-medium">GeeksforGeeks Profile</span>
              </a>
            </div>
          </div>

          {/* Right Section: Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6 animate__animated animate__fadeInUp animate__faster"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-shadow"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:translate-y-[-2px]"
            >
              Send Message
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
