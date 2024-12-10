import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const splitText = (element: string) => {
  return new SplitType(element, {
    types: ['chars', 'words'],
    absolute: true
  });
};

export const textReveal = (element: string) => {
  const split = splitText(element);
  
  return gsap.from(split.chars, {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.02,
    ease: 'power4.out'
  });
};

export const fadeInUp = (element: string, delay = 0) => {
  return gsap.from(element, {
    y: 60,
    opacity: 0,
    duration: 1,
    delay,
    ease: 'power4.out'
  });
};

export const staggerFadeIn = (elements: string, stagger = 0.1) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 30,
    stagger,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: elements,
      start: 'top 80%'
    }
  });
};