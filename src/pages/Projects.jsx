import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projects';
import PageTransition from '../components/layout/PageTransition';
import SplitText from '../components/ui/SplitText';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtitle fade
      gsap.from('.page-subtitle', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2
      });

      // Card reveals
      gsap.from('.project-list-card', {
        y: 60, opacity: 0, duration: 0.9, ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: '.projects-list', start: 'top 85%' },
        clearProps: 'all'
      });

      // Image parallax
      document.querySelectorAll('.project-list-image-container').forEach(container => {
        gsap.to(container.querySelector('img'), {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div className="page-container" ref={containerRef}>
        <section className="projects-page-header">
          <SplitText as="h1" className="page-title" splitBy="char" stagger={0.02}>
            All Projects
          </SplitText>
          <p className="page-subtitle">A comprehensive index of my technical builds, hackathon MVPs, and academic research.</p>
        </section>

        <section className="projects-list-section">
          <div className="projects-list">
            {projectsData.map((project) => (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-list-card" key={project.id}>
                <div className="project-list-image-container">
                  <img src={project.image} alt={project.title} />
                </div>
                
                <div className="project-list-content">
                  <div className="project-list-header">
                    <h3 className="project-list-title">{project.title}</h3>
                    <div className="project-list-arrow">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                  <p className="project-list-desc">{project.longDescription || project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
