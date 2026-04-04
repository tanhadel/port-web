'use client';

import React, { useEffect, useRef } from 'react';
import { 
  Code, Palette, Smartphone, BarChart, 
  Music, Camera
} from 'lucide-react';
import SectionCard from './SectionCard';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

interface AboutProps {
  profile?: any;
  skills?: any[];
  personalSkills?: any[];
  services?: any[];
  cvUrl?: string;
  pricingPlans?: any[];
  funFacts?: any[];
  clients?: any[];
}

const About: React.FC<AboutProps> = ({ profile, skills: sanitySkills, personalSkills: sanityPersonalSkills, services: sanityServices, cvUrl, pricingPlans, funFacts, clients }) => {
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services: Service[] = sanityServices?.map((service: any) => ({
    id: service._id,
    icon: <Code size={28} />,
    title: service.title || '',
    description: service.description || ''
  })) || [];
  const personalSkills: Skill[] = sanityPersonalSkills?.map((skill: any) => ({
    name: skill.name || '',
    percentage: skill.level || 0,
    color: skill.color || 'from-green-400 to-green-600'
  })) || [];
  const professionalSkills: Skill[] = sanitySkills?.map((skill: any) => ({
    name: skill.name || '',
    percentage: skill.level || 0,
    color: skill.color || 'from-blue-400 to-blue-600'
  })) || [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLElement;
            const width = progressBar.dataset.width || '0%';
            progressBar.style.width = width;
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <SectionCard imageSrc={profile?.image || '/images/profile.jpg'} imageAlt="About">
      {/* Section Header */}
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-green-500 dark:text-green-500">Me</span>
          </h2>
          {profile?.bio && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              {profile.bio}
            </p>
          )}
          
          {/* Download CV and Social Links */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {cvUrl && (
              <a
                href={cvUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-full font-medium shadow-lg"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-white">Download CV</span>
              </a>
            )}
            
            {/* Social Links */}
            {profile?.socialLinks && (
              <>
                {profile.socialLinks.github && (
                  <a
                    href={profile.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-green-500 dark:hover:bg-green-500 flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                )}
                {profile.socialLinks.linkedin && (
                  <a
                    href={profile.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-green-500 dark:hover:bg-green-500 flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                )}
                {profile.socialLinks.twitter && (
                  <a
                    href={profile.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-green-500 dark:hover:bg-green-500 flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                )}
              </>
            )}
          </div>
        </div>

        {/* Services Grid */}
        {services.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              My <span className="text-green-500">Services</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mb-4">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hobbies Section */}
        {profile?.hobbies && profile.hobbies.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              My <span className="text-green-500">Hobbies</span>
            </h3>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {profile.hobbies.map((hobby: string, index: number) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white dark:bg-gray-800 rounded-full shadow-md"
                >
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {hobby}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pricing Tables */}
        {pricingPlans && pricingPlans.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Pricing <span className="text-green-500">Tables</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pricingPlans.map((plan: any) => (
                <div
                  key={plan._id}
                  className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center mb-6 mx-auto">
                    <span className="text-3xl">{plan.icon || '🚀'}</span>
                  </div>
                  
                  {/* Plan Name */}
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-4">
                    {plan.name}
                  </h4>
                  
                  {/* Price */}
                  <div className="text-center mb-6">
                    <span className="text-gray-500 dark:text-gray-400 text-lg">$</span>
                    <span className="text-5xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features?.map((feature: any, index: number) => (
                      <li
                        key={index}
                        className={`flex items-center justify-between ${!feature.included ? 'opacity-40 line-through' : ''}`}
                      >
                        <span className="text-gray-700 dark:text-gray-300">{feature.name}</span>
                        {feature.isNew && (
                          <span className="px-2 py-1 bg-pink-500 text-white text-xs rounded-full">new</span>
                        )}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Button */}
                  <button className="w-full py-3 rounded-full font-medium bg-transparent border-2 border-gray-300 dark:border-gray-600 hover:border-pink-500 dark:hover:border-pink-500 text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-500">
                    Buy <span className="text-pink-500">{plan.name}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Fun Facts */}
        {funFacts && funFacts.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Fun <span className="text-green-500">Facts</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {funFacts.map((fact: any) => (
                <div
                  key={fact._id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center mb-4 mx-auto">
                    <span className="text-3xl">{fact.icon || '📊'}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {fact.value}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {fact.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Our Clients */}
        {clients && clients.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Our <span className="text-green-500">Clients</span>
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {clients.map((client: any) => (
                <div
                  key={client._id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg flex items-center justify-center aspect-square group"
                >
                  {client.logo && (
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

    </SectionCard>
  );
};

export default About;

