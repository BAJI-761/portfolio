import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook: registers GSAP ScrollTrigger and provides cleanup.
 * Call at the top of any page/component that uses GSAP animations.
 */
export function useGSAP(animationFn, deps = []) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      animationFn(gsap, ScrollTrigger);
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, deps);
}

/**
 * GSAP utility: Fade-up reveal on scroll
 */
export function gsapFadeUp(selector, trigger, options = {}) {
  gsap.from(selector, {
    y: options.y || 60,
    opacity: 0,
    duration: options.duration || 1,
    ease: options.ease || 'power3.out',
    stagger: options.stagger || 0,
    scrollTrigger: {
      trigger: trigger || selector,
      start: options.start || 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger,
    },
  });
}

/**
 * GSAP utility: Stagger children reveal
 */
export function gsapStagger(parentSelector, childSelector, options = {}) {
  gsap.from(`${parentSelector} ${childSelector}`, {
    y: options.y || 40,
    opacity: 0,
    duration: options.duration || 0.8,
    ease: options.ease || 'power3.out',
    stagger: options.stagger || 0.1,
    scrollTrigger: {
      trigger: parentSelector,
      start: options.start || 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

/**
 * GSAP utility: Scale-in reveal
 */
export function gsapScaleIn(selector, options = {}) {
  gsap.from(selector, {
    scale: options.scale || 0.92,
    opacity: 0,
    duration: options.duration || 1,
    ease: options.ease || 'power3.out',
    stagger: options.stagger || 0,
    scrollTrigger: {
      trigger: selector,
      start: options.start || 'top 85%',
      toggleActions: 'play none none none',
    },
  });
}

export { gsap, ScrollTrigger };
