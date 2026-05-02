'use client';

import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

interface HeroProps {
  profile?: {
    name?: string;
    title?: string;
    bio?: string;
    image?: string;
    socialLinks?: {
      github?: string;
      linkedin?: string;
      email?: string;
    };
  };
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  const firstName = profile?.name?.split(' ')[0] || 'Developer';
  const lastName = profile?.name?.split(' ').slice(1).join(' ') || '';

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-2xl mx-auto">
        {/* Brief Intro */}
        <div className="mb-8">
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Welcome
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
          {firstName}
          <br />
          <span style={{ color: 'var(--primary)' }}>{lastName}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          {profile?.title || 'Full Stack Developer'}
        </p>

        {/* Bio */}
        {profile?.bio && (
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-xl">
            {profile.bio}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:opacity-90 transition"
          >
            View My Work
            <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 items-center">
          {profile?.socialLinks?.github && (
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
            >
              <Github size={24} />
            </a>
          )}
          {profile?.socialLinks?.linkedin && (
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
            >
              <Linkedin size={24} />
            </a>
          )}
          {profile?.socialLinks?.email && (
            <a
              href={`mailto:${profile.socialLinks.email}`}
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
            >
              <Mail size={24} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
       