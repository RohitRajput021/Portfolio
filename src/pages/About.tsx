import React, { useState } from 'react';
import Timeline from '../components/Timeline';
import { timeline } from '../data';
import { FileText, ChevronRight, X } from 'lucide-react';

export default function About() {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [selectedFileUrl, setSelectedFileUrl] = useState<string | null>(null);
  const [fileId, setFileId] = useState<string | null>(null);

  // Function to handle resume preview
  const handlePreviewResume = (resumeUrl: string) => {
    const regex = /(?:https?:\/\/(?:drive\.google\.com\/file\/d\/([^\/]+)))/;
    const match = resumeUrl.match(regex);
    if (match && match[1]) {
      setFileId(match[1]);
      setIsPreviewing(true);
      setSelectedFileUrl(resumeUrl);
    }
  };

  // Function to close the preview modal
  const handleClosePreview = () => {
    setIsPreviewing(false);
    setSelectedFileUrl(null);
    setFileId(null);
  };

  // Function to handle resume download
  const handleDownloadResume = () => {
    if (selectedFileUrl) {
      window.open(selectedFileUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen py-24 bg-gradient-to-r from-teal-200 via-blue-200 to-indigo-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="space-y-2 mb-12 text-center">
          <h2 className="text-amber-500 font-medium text-lg">About Me</h2>
          <h1 className="text-4xl font-bold text-gray-900 animate__animated animate__fadeIn">
            My Journey
          </h1>
        </div>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-10 mb-16 animate__animated animate__fadeInUp">
          {/* Left Section: Text */}
          <div className="space-y-6 flex flex-col justify-center">
            <p className="text-gray-700 leading-relaxed text-lg">
              I am a highly motivated Electronics and Telecommunication
              Engineering student with extensive experience in software
              development, front-end technologies, software testing, and data
              analytics.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              My technical expertise includes Python, JavaScript, and C/C++,
              with a deep understanding of frameworks like React JS, Django, and
              Flask. My goal is to contribute to innovative software solutions
              by leveraging my technical skills and problem-solving ability.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() =>
                  handlePreviewResume(
                    'https://drive.google.com/file/d/1N4_OoXcW5L5kKIAl-e7eqACw99loIM9y/view?usp=sharing'
                  )
                }
                className="group inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-gray-900 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <FileText className="w-5 h-5" /> Preview Resume
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500 rounded-2xl opacity-10 blur-2xl transform -rotate-6"></div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Workspace"
              className="relative rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Experience & Education Section */}
        <div className="animate__animated animate__fadeInUp">
          <h2 className="text-2xl font-bold mb-8 text-center text-amber-500">
            Experience & Education
          </h2>
          <Timeline items={timeline} />
        </div>
      </div>

      {/* Resume Preview Modal */}
      {isPreviewing && fileId && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center animate__animated animate__fadeIn">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg max-w-3xl max-h-[80%] w-full overflow-hidden">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-amber-500 text-center">
                Resume Preview
              </h3>
              <button
                onClick={handleClosePreview}
                className="text-gray-400 hover:text-red-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Resume Preview */}
            <iframe
              src={`https://drive.google.com/file/d/${fileId}/preview`}
              title="Resume Preview"
              className="w-full h-[600px] border-0 rounded-md"
            />

            {/* Download Button */}
            <button
              onClick={handleDownloadResume}
              className="mt-4 px-6 py-3 bg-yellow-500 text-gray-900 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Download Resume
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
