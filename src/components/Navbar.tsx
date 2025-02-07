// import React from 'react';
// import { Menu, X } from 'lucide-react';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex items-center">
//             <Link to="/" className="text-xl font-bold">Portfolio</Link>
//           </div>

//           <div className="hidden md:flex items-center space-x-8">
//             <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
//             <Link to="/about" className="hover:text-blue-600 transition-colors">About</Link>
//             <Link to="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
//             <Link to="/skills" className="hover:text-blue-600 transition-colors">Skills</Link>
//             <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
//           </div>

//           <div className="md:hidden flex items-center">
//             <button onClick={() => setIsOpen(!isOpen)} className="p-2">
//               {isOpen ? <X /> : <Menu />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
//             <Link to="/" className="block px-3 py-2 hover:bg-gray-50">Home</Link>
//             <Link to="/about" className="block px-3 py-2 hover:bg-gray-50">About</Link>
//             <Link to="/projects" className="block px-3 py-2 hover:bg-gray-50">Projects</Link>
//             <Link to="/skills" className="block px-3 py-2 hover:bg-gray-50">Skills</Link>
//             <Link to="/contact" className="block px-3 py-2 hover:bg-gray-50">Contact</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 shadow-lg transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-3xl font-bold text-gray-900 hover:text-blue-700 transition-colors duration-300 ease-in-out"
            >
              Portfolio
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-900 hover:bg-blue-700 hover:text-white px-5 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-900 hover:bg-blue-700 hover:text-white px-5 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-gray-900 hover:bg-blue-700 hover:text-white px-5 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out"
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className="text-gray-900 hover:bg-blue-700 hover:text-white px-5 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out"
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className="text-gray-900 hover:bg-blue-700 hover:text-white px-5 py-3 rounded-lg text-lg font-medium transition-all duration-300 ease-in-out"
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 text-gray-900 hover:text-blue-700 transition-colors duration-300 ease-in-out"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md transition-all duration-300 ease-in-out">
          <div className="px-4 pt-4 pb-4 space-y-2 sm:px-5">
            <Link
              to="/"
              className="block px-5 py-3 text-gray-900 hover:bg-blue-700 hover:text-white rounded-lg text-lg font-medium transition-all duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-5 py-3 text-gray-900 hover:bg-blue-700 hover:text-white rounded-lg text-lg font-medium transition-all duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="block px-5 py-3 text-gray-900 hover:bg-blue-700 hover:text-white rounded-lg text-lg font-medium transition-all duration-300 ease-in-out"
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className="block px-5 py-3 text-gray-900 hover:bg-blue-700 hover:text-white rounded-lg text-lg font-medium transition-all duration-300 ease-in-out"
            >
              Skills
            </Link>
            <Link
              to="/contact"
              className="block px-5 py-3 text-gray-900 hover:bg-blue-700 hover:text-white rounded-lg text-lg font-medium transition-all duration-300 ease-in-out"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
