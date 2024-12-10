'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { textReveal } from '@/lib/gsap';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      textReveal('.contact-title');
      
      gsap.from('.contact-form', {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%'
        }
      });

      gsap.from('.social-links a', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.social-links',
          start: 'top 90%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen bg-black py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="contact-title text-6xl md:text-8xl font-bold text-cream mb-12">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="contact-form space-y-6">
            <div>
              <label htmlFor="name" className="block text-cream mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-cream mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-pink-500 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-cream mb-2">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-pink-500 transition-colors"
              ></textarea>
            </div>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </div>
          <div>
            <p className="text-xl text-gray-400 mb-8">
              Let's collaborate on your next project or just have a conversation about web development and design.
            </p>
            <div className="social-links flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}