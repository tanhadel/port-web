'use client';

import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-8">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-xl mr-3">
                T
              </div>
              <h3 className="text-xl font-bold">Taha Taheri</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Passionate web developer creating beautiful and functional digital experiences.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-green-500 flex items-center justify-center"
                  aria-label={social}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Resume', href: '/resume' },
                { label: 'Portfolio', href: '/works' },
                { label: 'Blog', href: '/blog' },
                { label: 'Contact', href: '/contacts' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 mr-3"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Web Development',
                'UI/UX Design',
                'Mobile Apps',
                'API Development',
                'Consulting',
                'Maintenance',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400 hover:text-green-500 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to my newsletter for the latest updates and tips.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-green-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Taha Taheri. All rights reserved.
            </p>
            
            <p className="text-gray-400 flex items-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> 
              by Taha
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
