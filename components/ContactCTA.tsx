'use client';

import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

interface ContactCTAProps {
  profile?: {
    email?: string;
    socialLinks?: {
      github?: string;
      linkedin?: string;
    };
  };
}

const ContactCTA: React.FC<ContactCTAProps> = ({ profile }) => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Got a project in mind?
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
          I'm always interested in hearing about new opportunities and collaborations.
        </p>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-4">
          {profile?.email && (
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition"
            >
              <Mail size={20} />
              Send Email
            </a>
          )}
          {profile?.socialLinks?.github && (
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition"
            >
              <Github size={20} />
              GitHub
            </a>
          )}
          {profile?.socialLinks?.linkedin && (
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
          )}
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-12">
          © 2024. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactCTA;
