'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { textReveal } from '@/lib/gsap';
import PinwheelLogo from './PinwheelLogo';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the text
      if (titleRef.current) {
        textReveal('.hero-title');
      }

      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 20,
          duration: 1,
          delay: 0.5,
          ease: 'power3.out'
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-10 left-10">
        <PinwheelLogo />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 ref={titleRef} className="hero-title text-[120px] font-bold text-cream mb-6">
          Animate Anything
        </h1>
        <p ref={subtitleRef} className="text-2xl text-gray-400">
          Create stunning animations that bring your ideas to life
        </p>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}