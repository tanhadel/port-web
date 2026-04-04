'use client';

import React from 'react';
import { MapPin, Award, GraduationCap } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}

interface ResumeProps {
  experiences?: any[];
  education?: any[];
  certifications?: any[];
  skills?: any[];
  personalSkills?: any[];
}

const Resume: React.FC<ResumeProps> = ({ experiences: sanityExperiences, education: sanityEducation, certifications: sanityCertifications, skills: sanitySkills, personalSkills: sanityPersonalSkills }) => {
  const experiences: Experience[] = sanityExperiences || [];
  const education: Education[] = sanityEducation || [];
  const certifications: any[] = sanityCertifications || [];
  const professionalSkills = sanitySkills || [];
  const personalSkills = sanityPersonalSkills || [];

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-[#2c2e33] min-h-screen">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-green-500 dark:text-green-500">Resume</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Over 5 years of professional experience in web development and design
          </p>
        </div>

        {/* Resume Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ background: 'linear-gradient(to right, var(--primary), var(--primary-dark))' }}>
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                <span style={{ color: 'var(--primary)' }}>Experience</span>
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
              {experiences.length > 0 ? experiences.map((exp, index) => (
                <div key={exp._id || exp.id || index} className="mb-10 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-green-600 border-4 border-white dark:border-gray-900"></div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm font-medium rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                      <span className="font-medium mr-4">{exp.company}</span>
                      {exp.location && (
                        <>
                          <MapPin size={16} className="mr-1" />
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                    
                    {exp.description && (
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p>
                    )}
                    
                    {exp.tags && exp.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    </div>
                  </div>
               
              )) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  Ingen arbetslivserfarenhet tillgänglig
                </div>
              )}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ background: 'linear-gradient(to right, var(--primary), var(--primary-dark))' }}>
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                <span style={{ color: 'var(--primary)' }}>Education</span>
              </h3>
            </div>

            {/* Education Timeline */}
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
              {education.length > 0 ? education.map((edu, index) => (
                <div key={edu._id || edu.id || index} className="mb-10 relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[33px] w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-green-600 border-4 border-white dark:border-gray-900"></div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm font-medium rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-3">
                      <span className="font-medium mr-4">{edu.institution}</span>
                      <MapPin size={16} className="mr-1" />
                      <span>{edu.location}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                </div>
              )) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  Ingen utbildning tillgänglig
                </div>
              )}
            </div>

            {/* Certifications */}
            {certifications.length > 0 && (
              <div className="mt-6 ml-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4" style={{ background: 'linear-gradient(to right, var(--primary), var(--primary-dark))' }}>
                    <Award className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                    <span style={{ color: 'var(--primary)' }}>Certification</span>
                  </h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div
                      key={cert._id || cert.id || index}
                      className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mr-3">
                          <Award style={{ color: 'var(--primary)' }} size={20} />
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-900 dark:text-white">
                            {cert.name}
                          </h5>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Issued {cert.year}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Personal Skills */}
            {personalSkills.length > 0 && (
              <div>
                <h4 className="text-2xl font-bold text-white mb-6">
                  <span style={{ color: 'var(--primary)' }}>Personal</span> Skills
                </h4>
                
                <div className="space-y-4">
                  {personalSkills.map((skill: any, index: number) => (
                  <div key={skill._id || index} className="bg-[#3a3d42] rounded-xl p-6 h-24 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-bold text-white">
                        {skill.name}
                      </h5>
                      {skill.category && (
                        <span className="text-xs text-gray-400 capitalize">
                          {skill.category.replace('_', ' ')}
                        </span>
                      )}
                    </div>
                    <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(to right, var(--primary), var(--primary-dark))', width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            )}

            {/* Professional Skills */}
            {professionalSkills.length > 0 && (
              <div>
                <h4 className="text-2xl font-bold text-white mb-6 ">
                  <span style={{ color: 'var(--primary)' }}>Professional</span> Skills
                </h4>
                
                <div className="space-y-4">
                  {professionalSkills.map((skill: any, index: number) => (
                  <div key={skill._id || index} className="bg-[#3a3d42] rounded-xl p-6 h-24 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-bold text-white">
                        {skill.name}
                      </h5>
                      {skill.category && (
                        <span className="text-xs text-gray-400 capitalize">
                          {skill.category.replace('_', ' ')}
                        </span>
                      )}
                    </div>
                    <div className="h-2 bg-gray-600 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(to right, var(--primary), var(--primary-dark))', width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;