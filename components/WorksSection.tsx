'use client';

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  _id?: string;
  title?: string;
  description?: string;
  image?: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface WorksPageProps {
  projects?: Project[];
}

const WorksPage: React.FC<WorksPageProps> = ({ projects = [] }) => {
  if (projects.length === 0) {
    return (
      <section className="py-20 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">No projects yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            My <span style={{ color: 'var(--primary)' }}>Work</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            A collection of projects I've built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project._id}
              className="group bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-900 dark:hover:border-white transition"
            >
              {/* Image */}
              {project.image && (
                <div className="aspect-video overflow-hidden bg-gray-200 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:opacity-70 transition"
                    >
                      Live <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white hover:opacity-70 transition"
                    >
                      Code <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorksPage;
