import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Award, Trophy, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from '../ui/MagneticButton';
import './MilestonesPreview.css';

gsap.registerPlugin(ScrollTrigger);

const previewItems = [
  { icon: Award, label: 'Anthropic AI Certified' },
  { icon: Trophy, label: 'Department 3rd Award' },
  { icon: Globe, label: 'Goethe-Zertifikat A1' },
];

export default function MilestonesPreview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.milestone-preview-title', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.milestones-preview-section', start: 'top 85%' },
      });
      gsap.from('.milestone-preview-item', {
        y: 30, opacity: 0, duration: 0.7, ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.milestone-preview-items', start: 'top 88%' },
        clearProps: 'all'
      });
      gsap.from('.milestone-preview-cta', {
        y: 20, opacity: 0, duration: 0.6, ease: 'power3.out',
        scrollTrigger: { trigger: '.milestone-preview-cta', start: 'top 92%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="milestones-preview-section" ref={sectionRef}>
      <h2 className="milestone-preview-title">Milestones & Certifications</h2>
      
      <div className="milestone-preview-items">
        {previewItems.map((item, i) => (
          <div key={i} className="milestone-preview-item">
            <item.icon size={20} className="milestone-preview-icon" />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="milestone-preview-cta">
        <MagneticButton strength={0.2}>
          <Link to="/milestones" className="milestone-preview-link">
            View all milestones <ArrowUpRight size={16} />
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
}
