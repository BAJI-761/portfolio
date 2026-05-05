import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * MagneticButton — GSAP magnetic hover effect for buttons.
 * The element follows the mouse with a spring physics effect.
 */
export default function MagneticButton({ children, className = '', strength = 0.3, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className} style={{ display: 'inline-block', willChange: 'transform' }} {...props}>
      {children}
    </div>
  );
}
