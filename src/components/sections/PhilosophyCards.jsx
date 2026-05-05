import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from '../ui/SplitText';
import './PhilosophyCards.css';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { title: 'From zero to one', desc: "I don't wait for perfect specs. I take ambiguity and shape it into architecture, interfaces, and working software — iterating until the product feels inevitable." },
  { title: 'Systems over scripts', desc: "I build the rules, not just the pages. Clean APIs, component libraries, and documentation that let teams ship faster without losing coherence." },
  { title: 'Data meets intuition', desc: "Research, metrics, and user feedback inform every decision. I align what the business needs with what users actually do — not what we assume they do." },
  { title: 'Code speaks design', desc: "I think in responsive layouts, design tokens, and component APIs. The handoff isn't a wall — it's a conversation I'm fluent in." },
];

export default function PhilosophyCards() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.philosophy-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.15,
        clearProps: 'all',
        scrollTrigger: {
          trigger: '.philosophy-grid',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="philosophy-cards-section" ref={sectionRef}>
      <div className="philosophy-grid">
        {cards.map((card, i) => (
          <div key={i} className="philosophy-card" style={{ perspective: '800px' }}>
            <h3 className="philosophy-card-title">{card.title}</h3>
            <p className="philosophy-card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
