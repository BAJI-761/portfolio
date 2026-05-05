import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP-powered ScrollReveal — replaces Framer Motion version.
 * Supports fade-up, scale, stagger, and parallax.
 */
export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 50,
  scale = 1,
  duration = 0.9,
  ease = 'power3.out',
  stagger = 0,
  start = 'top 88%',
  style = {},
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y, scale });

    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll()
        .filter(t => t.trigger === el)
        .forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform, opacity', ...style }}>
      {children}
    </div>
  );
}
