'use client';

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface HeroProps {
  profile?: {
    name?: string;
    title?: string;
    bio?: string;
    image?: string;
    heroBackground?: string;
    roles?: string[];
  };
}

const Hero: React.FC<HeroProps> = ({ profile }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const roles = profile?.roles || ['Web Developer.', 'System developer.', 'C# Developer.', 'software Developer.'];
    
    const typed = new Typed(typedRef.current, {
      strings: roles,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      cursorChar: '',
    });

    return () => {
      typed.destroy();
    };
  }, [profile]);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${profile?.heroBackground || profile?.image || '/images/nature-photo.jpg'})` }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-gray-900/70 to-black/80 z-0"></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto stagger-children">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-gray-600 dark:text-gray-300">
              {profile?.name?.split(' ')[0] || 'Taha'}
            </span>{' '}
            <span className="text-gray-900 dark:text-white">
              {profile?.name?.split(' ').slice(1).join(' ') || 'Taheri'}
            </span>
          </h1>
          
          {/* Typing Animation */}
          <div className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white mb-8">
            I am a{' '}
            <span ref={typedRef} className="font-medium text-gray-800 dark:text-white"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
       