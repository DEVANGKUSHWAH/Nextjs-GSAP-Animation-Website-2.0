'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { staggerFadeIn, textReveal } from '@/lib/gsap';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      textReveal('.about-title');
      staggerFadeIn('.skill-item', 0.1);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const skills = [
    'Frontend Development',
    'UI/UX Design',
    'Animation',
    'React & Next.js',
    'TypeScript',
    'GSAP'
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-black py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="about-title text-6xl md:text-8xl font-bold text-cream mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-xl text-gray-400 leading-relaxed">
              I'm a creative developer passionate about building beautiful, interactive experiences on the web. With a focus on animation and user experience, I bring designs to life through code.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              My approach combines technical expertise with creative vision to create memorable digital experiences that engage and inspire.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-cream mb-6">Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="skill-item p-4 bg-gray-900 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}