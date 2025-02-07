import React from 'react';
import { TimelineItem } from '../types';
import { Briefcase, GraduationCap } from 'lucide-react';

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>
      <div className="space-y-12">
        {items.map((item, index) => (
          <div key={index} className="relative pl-12 group">
            <div className="absolute left-2 -translate-x-1/2 bg-white p-2 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
              {item.type === 'work' ? (
                <Briefcase className="w-5 h-5 text-blue-600" />
              ) : (
                <GraduationCap className="w-5 h-5 text-green-600" />
              )}
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
              <p className="text-blue-600 font-medium mb-2">{item.company}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}