'use client';

import React from 'react';

interface TechStackProps {
  skills?: Array<{
    _id?: string;
    name?: string;
    level?: number;
  }>;
}

const TechStack: React.FC<TechStackProps> = ({ skills = [] }) => {
  if (skills.length === 0) return null;

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill._id}
              className="px-5 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-700 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
