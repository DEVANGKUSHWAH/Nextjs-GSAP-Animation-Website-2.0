'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function PinwheelLogo() {
  const logoRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create an infinite rotation animation
      gsap.to(logoRef.current, {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-16 h-16">
      <svg
        ref={logoRef}
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ transformOrigin: 'center' }}
      >
        <path
          d="M50 0 L100 50 L50 100 L0 50 Z"
          fill="url(#gradient)"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#FF9A8B' }} />
            <stop offset="50%" style={{ stopColor: '#FF6B95' }} />
            <stop offset="100%" style={{ stopColor: '#FF3F7C' }} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}