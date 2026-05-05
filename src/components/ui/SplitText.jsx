import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SplitText — GSAP-powered text reveal animation.
 * Splits text into words/chars and animates them in with stagger.
 */
export default function SplitText({
  children,
  as: Tag = 'h2',
  className = '',
  delay = 0,
  stagger = 0.03,
  duration = 0.8,
  ease = 'power3.out',
  splitBy = 'word', // 'word' or 'char'
  start = 'top 88%',
  y = 40,
  style = {},
}) {
  const containerRef = useRef(null);

  // Parse children into a string
  const text = typeof children === 'string' ? children : String(children || '');
  const units = splitBy === 'char' ? text.split('') : text.split(' ');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const splitUnits = container.querySelectorAll('.split-unit');

    gsap.set(splitUnits, { y, opacity: 0 });

    const tween = gsap.to(splitUnits, {
      y: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease,
      clearProps: 'all',
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: 'play none none none',
      },
    });

    return () => {
      tween.kill();
      ScrollTrigger.getAll()
        .filter(t => t.trigger === container)
        .forEach(t => t.kill());
    };
  }, [text, delay, stagger, duration, ease, start, y]);

  return (
    <Tag ref={containerRef} className={className} style={{ overflow: 'hidden', ...style }}>
      {units.map((unit, i) => {
        const isSpace = unit === ' ';
        const displayUnit = splitBy === 'word' && i < units.length - 1 ? unit + '\u00A0' : (isSpace ? '\u00A0' : unit);

        return (
          <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
            <span className="split-unit" style={{ display: 'inline-block', whiteSpace: 'pre' }}>
              {displayUnit}
            </span>
          </span>
        );
      })}
    </Tag>
  );
}
