'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactData {
  email: string;
  phone: string;
  location: string;
  address: string;
  freelanceAvailable: boolean;
}

interface ContactProps {
  contactData?: ContactData;
}

const Contact = ({ contactData }: ContactProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1a1a] text-gray-900 dark:text-white">
      {/* Large Background Title */}
      <div className="absolute top-20 left-0 right-0 text-center overflow-hidden pointer-events-none">
        <h1 className="text-[120px] md:text-[200px] lg:text-[280px] font-black text-gray-100 dark:text-[#252525] leading-none tracking-tighter">
          CONTACTS
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 py-20">
        {/* Get in Touch Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span style={{ color: 'var(--primary)' }}>Get</span> in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Info & Form */}
          <div className="space-y-8">
            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Address */}
              <div className="bg-gray-50 dark:bg-[#2a2a2a] p-6 rounded-xl border border-gray-200 dark:border-[#333333]">
                <MapPin style={{ color: 'var(--primary)' }} className="mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2">Address</h3>
                <p className="text-gray-600 dark:text-[#b8b8b8]">{contactData?.address || 'Sweden, Stockholm.'}</p>
              </div>

              {/* Email */}
              <div className="bg-gray-50 dark:bg-[#2a2a2a] p-6 rounded-xl border border-gray-200 dark:border-[#333333]">
                <Mail style={{ color: 'var(--primary)' }} className="mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-600 dark:text-[#b8b8b8]">{contactData?.email || 'adiard@example.com'}</p>
              </div>

              {/* Phone */}
              <div className="bg-gray-50 dark:bg-[#2a2a2a] p-6 rounded-xl border border-gray-200 dark:border-[#333333]">
                <Phone style={{ color: 'var(--primary)' }} className="mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-[#b8b8b8]">{contactData?.phone || '+123 654 78900'}</p>
              </div>

              {/* Freelance */}
              <div className="bg-gray-50 dark:bg-[#2a2a2a] p-6 rounded-xl border border-gray-200 dark:border-[#333333]">
                <CheckCircle style={{ color: 'var(--primary)' }} className="mb-3" size={32} />
                <h3 className="text-lg font-semibold mb-2">Freelance</h3>
                <p style={{ color: 'var(--primary)' }}>{contactData?.freelanceAvailable ? 'Available' : 'Not Available'}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 dark:bg-[#2a2a2a] p-8 rounded-xl border border-gray-200 dark:border-[#333333]">
              <h3 className="text-2xl font-bold mb-6">
                Contact <span style={{ color: 'var(--primary)' }}>Form</span>
              </h3>

              {isSubmitted && (
                <div className="mb-6 p-4 rounded-xl" style={{ backgroundColor: 'color-mix(in srgb, var(--primary) 20%, transparent)', borderColor: 'var(--primary)', borderWidth: '1px', borderStyle: 'solid' }}>
                  <p style={{ color: 'var(--primary)' }}>Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-300 dark:border-red-800 rounded-xl">
                  <p className="text-red-600 dark:text-red-400">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#333333] rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#666666] focus:outline-none"
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--tw-prose-body')}
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#333333] rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#666666] focus:outline-none"
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--tw-prose-body')}
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#333333] rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#666666] focus:outline-none"
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--tw-prose-body')}
                      placeholder="Phone Number (Optional)"
                    />
                  </div>
                  <div>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#333333] rounded-lg text-gray-900 dark:text-white focus:outline-none"
                      onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.currentTarget.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--tw-prose-body')}
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Discussion">Project Discussion</option>
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-300 dark:border-[#333333] rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#666666] focus:outline-none resize-none"
                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.currentTarget.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--tw-prose-body')}
                    placeholder="Your Message"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-8 py-3 font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: 'var(--primary)', color: '#000' }}
                  onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0.9)'}
                  onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="h-[600px] lg:h-full min-h-[500px]">
            <div className="w-full h-full bg-gray-50 dark:bg-[#2a2a2a] rounded-xl border border-gray-200 dark:border-[#333333] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35664.35198245169!2d18.07003175586743!3d59.32188496047478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm!5e1!3m2!1ssv!2sse!4v1768578364251!5m2!1ssv!2sse"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

