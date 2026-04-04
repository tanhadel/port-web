'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, User, Briefcase, Eye, MessageSquare, Mail,
  Github, Linkedin, Instagram, Twitter 
} from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

interface SidebarProps {
  profile?: {
    name?: string;
    logo?: string;
  };
}

const Sidebar: React.FC<SidebarProps> = ({ profile }) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const firstLetter = profile?.name?.charAt(0)?.toUpperCase() || 'T';

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Home', icon: <Home size={20} />, href: '/' },
    { id: 'about', label: 'About', icon: <User size={20} />, href: '/about' },
    { id: 'resume', label: 'Resume', icon: <Briefcase size={20} />, href: '/resume' },
    { id: 'portfolio', label: 'Portfolio', icon: <Eye size={20} />, href: '/works' },
    { id: 'blog', label: 'Blog', icon: <MessageSquare size={20} />, href: '/blog' },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} />, href: '/contacts' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Twitter size={20} />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  useEffect(() => {
    // Set active section based on pathname
    const path = pathname || '/';
    if (path === '/') {
      setActiveSection('home');
    } else if (path.startsWith('/about')) {
      setActiveSection('about');
    } else if (path.startsWith('/resume')) {
      setActiveSection('resume');
    } else if (path.startsWith('/works')) {
      setActiveSection('portfolio');
    } else if (path.startsWith('/blog')) {
      setActiveSection('blog');
    } else if (path.startsWith('/contacts')) {
      setActiveSection('contact');
    }
  }, [pathname]);

  return (
    <>
      {/* Desktop Sidebar - Always Visible */}
      <aside className="fixed left-0 top-0 h-screen w-20 lg:w-24 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-50 hidden lg:flex flex-col items-center py-8">
        {/* Logo */}
        <div className="logo mb-12">
          <Link href="/">
            <div className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden shadow-lg cursor-pointer" style={{ background: 'var(--primary)' }}>
              {profile?.logo ? (
                <img src={profile.logo} alt="Logo" className="w-full h-full object-cover" />
              ) : (
                <span className="text-white font-bold text-2xl">{firstLetter}</span>
              )}
            </div>
          </Link>
        </div>

        {/* Navigation Menu - top-menu */}
        <nav className="top-menu flex-1 flex flex-col space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group relative flex flex-col items-center justify-center w-16 h-16 rounded-lg ${
                activeSection === item.id
                  ? 'active'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
              style={activeSection === item.id ? { color: 'var(--primary)' } : {}}
            >
              <span className="icon mb-1">{item.icon}</span>
              <span className="link text-[10px] opacity-0 group-hover:opacity-100">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Social Links */}
        <div className="social flex flex-col space-y-3 mt-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              style={{ color: 'var(--primary)' }}
              aria-label={social.label}
            >
              <span className="icon">{social.icon}</span>
            </a>
          ))}
        </div>
      </aside>

      {/* Mobile Top Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#2c2e33] lg:hidden z-50">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" className="logo">
            <div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden cursor-pointer" style={{ background: 'var(--primary)' }}>
              {profile?.logo ? (
                <img src={profile.logo} alt="Logo" className="w-full h-full object-cover" />
              ) : (
                <span className="text-white font-bold text-lg">{firstLetter}</span>
              )}
            </div>
          </Link>

          <div className="flex items-center gap-6">
            {/* Social Links */}
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label={social.label}
              >
                <span className="scale-90 inline-block">{social.icon}</span>
              </a>
            ))}
            
            {/* Hamburger/Close Menu Button */}
            <button 
              onClick={toggleSidebar}
              className="text-gray-400 hover:text-white ml-2"
              aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
            >
              {isSidebarOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Expandable Navigation Menu */}
        <div 
          className={`overflow-hidden border-t border-[#20222a] ${
            isSidebarOpen ? 'max-h-[80px]' : 'max-h-0'
          }`}
        >
          <nav className="px-4 py-3">
            <div className="flex items-center justify-center gap-6">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={toggleSidebar}
                  className={`flex items-center justify-center ${
                    activeSection === item.id
                      ? 'text-green-500'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span className="scale-90">{item.icon}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
