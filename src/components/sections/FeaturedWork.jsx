import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { projectsData } from '../../data/projects';
import { Link } from 'react-router-dom';
import SplitText from '../ui/SplitText';
import MagneticButton from '../ui/MagneticButton';
import './FeaturedWork.css';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedWork() {
  const featuredProjects = projectsData.filter(project => project.featured);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtitle fade
      gsap.from('.section-subtitle', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.section-subtitle', start: 'top 90%' },
      });

      // Card stagger with scale
      gsap.from('.project-card-wrapper', {
        y: 80, opacity: 0, scale: 0.95, duration: 1, ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' },
      });

      // Image parallax inside cards
      document.querySelectorAll('.project-image-container').forEach(container => {
        gsap.to(container.querySelector('.project-image'), {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      });

      // View all button
      gsap.from('.view-all-container', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.view-all-container', start: 'top 90%' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="featured-work" className="featured-work-section" ref={sectionRef}>
      <div className="section-header">
        <SplitText as="h2" className="section-title" splitBy="char" stagger={0.02}>
          Selected Work
        </SplitText>
        <p className="section-subtitle">A collection of my recent technical projects and startup builds.</p>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project) => (
          <div key={project.id} className="project-card-wrapper">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-image-container">
                {project.video ? (
                  <video src={project.video} autoPlay loop muted playsInline className="project-image" />
                ) : (
                  <img src={project.image} alt={project.title} className="project-image" />
                )}
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-arrow">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className="project-desc">{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
      
      <div className="view-all-container">
        <MagneticButton strength={0.2}>
          <Link to="/projects" className="view-all-btn">
            View All Projects
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
}
