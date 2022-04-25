import React from 'react';
import {Star} from 'react-feather';

export default function ProjectCard({ link, title, description, stars}) {

  return (
    <a
      href={link}
      className="transform hover:scale-[1.01] transition-all md:w-1/2 rounded-sm w-full p-1 border border-slate-600 hover:border-orange"
    >
      <div className="flex flex-col justify-between h-full p-4">
        <div className="flex flex-col justify-between mb-4">
          <h4 className="md:text-lg font-medium w-full mb-1 text-gray-100 tracking-tight">
            {title}
          </h4>
          <p className="text-gray-300 text-sm">{description}</p>
        </div>
        <div className="flex items-center gap-3 text-gray-800 dark:text-orange capsize">
          <Star size={14}/>{stars}
        </div>
      </div>
    </a>
  );
}
