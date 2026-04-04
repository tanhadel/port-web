'use client';

import React from 'react';
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react';
import Link from 'next/link';
import SectionCard from './SectionCard';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

interface BlogProps {
  posts?: any[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const blogPosts: BlogPost[] = posts || [];
  
  // Find the featured post
  const featuredPost = blogPosts.find(post => post.featured);
  // Get all non-featured posts
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <SectionCard imageSrc={blogPosts[0]?.image || ''} imageAlt="Blog">
      {/* Section Header */}
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-green-500 dark:text-green-500">Blog</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development and design
          </p>
        </div>

        {/* Featured Blog Post */}
        {featuredPost && (
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={featuredPost.image || '/images/blog/featured.jpg'}
                  alt={featuredPost.title || 'Featured Post'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1 bg-white text-green-600 font-bold rounded-full text-sm">
                    Featured
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 lg:p-12 text-white">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="flex items-center text-sm">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(featuredPost.date)}
                  </span>
                  <span className="flex items-center text-sm">
                    <Clock size={14} className="mr-1" />
                    {featuredPost.readTime || '5 min read'}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  {featuredPost.title}
                </h3>
                
                <p className="mb-6 opacity-90">
                  {featuredPost.excerpt}
                </p>
                
                {featuredPost.tags && featuredPost.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 4).map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <Link
                  href={`/blog/${featuredPost.slug?.current || featuredPost._id || featuredPost.id}`}
                  className="inline-flex items-center text-white font-medium hover:underline"
                >
                  Read Full Article
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        )}

        {/* Blog Grid */}
        {regularPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {regularPosts.map((post, index) => (
            <article
              key={post._id || post.id || index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.cardImage || post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                {post.category && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(post.date)}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-500">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        <Tag size={12} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <User size={16} className="text-gray-600 dark:text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {post.author}
                    </span>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug?.current || post._id || post.id}`}
                    className="inline-flex items-center text-green-500 hover:text-green-600 font-medium text-sm"
                  >
                    Read More
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        ) : (
          <div className="text-center py-16 text-gray-500 dark:text-gray-400">
            Inga blogginlägg tillgängliga
          </div>
        )}
    </SectionCard>
  );
};

export default Blog;
