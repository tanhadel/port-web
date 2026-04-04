'use client';

import React, { useState } from 'react';
import { Video } from 'lucide-react';
import PortfolioModal from './PortfolioModal';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  _id?: string;
}

interface PortfolioProps {
  projects?: any[];
  heroImage?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ projects: sanityProjects, heroImage }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = sanityProjects || [];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'photo', label: 'Photo' },
    { id: 'video', label: 'Video' },
    { id: 'music', label: 'Music' },
    { id: 'design', label: 'Design' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Funktion för att få rätt storlek baserat på index (masonry-stil)
  const getCardSize = (index: number) => {
    const pattern = index % 6;
    if (pattern === 0) return 'md:col-span-1 md:row-span-2'; // Tall
    if (pattern === 1) return 'md:col-span-1 md:row-span-1'; // Normal
    if (pattern === 2) return 'md:col-span-1 md:row-span-1'; // Normal
    if (pattern === 3) return 'md:col-span-1 md:row-span-1'; // Normal
    if (pattern === 4) return 'md:col-span-1 md:row-span-2'; // Tall
    return 'md:col-span-1 md:row-span-1'; // Normal
  };

  const getCategoryIcon = (category: string) => {
    if (category === 'video') {
      return <Video className="w-5 h-5" />;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex">
      {/* Left Side - Portfolio Grid */}
      <div className="w-full lg:w-1/2 overflow-y-auto">
        <div className="px-6 py-8 lg:px-12 lg:py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="text-green-500">My</span> Portfolio
            </h1>
            
            {/* Filter Buttons */}
            <div className="flex gap-4">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-3 py-1 font-semibold text-sm md:text-base ${
                    activeFilter === filter.id
                      ? 'text-green-500'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Masonry Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[280px]">
              {filteredProjects.map((project, index) => (
                <div
                  key={project._id || project.id || index}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer ${getCardSize(index)}`}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Category Icon */}
                    {project.category === 'video' && (
                      <div className="absolute top-6 right-6 text-white/80">
                        {getCategoryIcon(project.category)}
                      </div>
                    )}
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    
                    {/* Category */}
                    <p className="text-sm text-gray-400 capitalize">
                      {project.category}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-gray-400">
              Inga projekt tillgängliga
            </div>
          )}
        </div>
      </div>

      {/* Right Side - Hero Image */}
      {heroImage && (
        <div className="hidden lg:block lg:w-1/2 relative">
          <div className="sticky top-0 h-screen">
            <img
              src={heroImage}
              alt="Portfolio Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1a1a1a]/50"></div>
          </div>
        </div>
      )}

      {/* Modal */}
      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
