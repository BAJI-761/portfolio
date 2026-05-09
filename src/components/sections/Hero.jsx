import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight, Download, Home, Mail, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StarfieldCanvas from '../ui/StarfieldCanvas';

export default function Hero({ email }) {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key.toLowerCase() === 'm') {
        navigator.clipboard.writeText(email).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [email]);

  // GSAP entrance timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-top-nav', { y: -30, opacity: 0, duration: 0.7 })
        .from('.hero-banner', { y: 40, opacity: 0, scale: 0.97, duration: 0.9 }, '-=0.3')
        .from('.hero-avatar-wrapper', { y: 30, opacity: 0, scale: 0.9, duration: 0.7 }, '-=0.4')
        .from('.hero-name', { y: 50, opacity: 0, duration: 0.8 }, '-=0.3')
        .from('.hero-title', { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-bio', { y: 30, opacity: 0, duration: 0.8 }, '-=0.3')
        .from('.hero-shortcut', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.hero-actions', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-divider', { scaleX: 0, duration: 0.8 }, '-=0.3');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('featured-work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" ref={sectionRef}>
      {/* Top Navigation */}
      <div className="hero-top-nav">
        <button className="nav-pill" onClick={() => navigate('/')}>
          <Home size={16} />
          <span>Home</span>
        </button>
        <div className="nav-pill-group">
          <button className="nav-pill" onClick={() => {
            navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}>
            <Mail size={16} />
            <span>Contact Me</span>
          </button>
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-pill"
          >
            <FileText size={16} />
            <span>My CV</span>
          </a>
        </div>
      </div>

      {/* Animated Starfield Banner */}
      <div className="hero-banner">
        <StarfieldCanvas />
        <div className="hero-banner-interactive" onClick={scrollToWork}>
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Overlapping Avatar */}
      <div className="hero-avatar-wrapper">
        <img src="/images/profile_pic.png" alt="Shaik Baji" className="hero-avatar" />
      </div>

      {/* Text Content */}
      <div className="hero-text-block">
        <h1 className="hero-name">
          SHAIK BAJI
        </h1>

        <h2 className="hero-title">
          Software Developer
        </h2>

        <p className="hero-bio">
          Hey, I'm Baji Shaik, a Full-Stack Developer and ML Enthusiast currently interning at{' '}
          <span className="highlight">
            <span style={{ display: 'inline-block', width: '16px', height: '16px', background: '#e11d48', borderRadius: '4px' }}></span>
            CodeAlpha
          </span>,{' '}
          <span className="highlight">
            <span style={{ display: 'inline-block', width: '16px', height: '16px', background: '#2563eb', borderRadius: '4px', textAlign: 'center', lineHeight: '16px', color: 'white', fontSize: '10px' }}>S</span>
            SAM AI Technologies
          </span>, and{' '}
          <span className="highlight">
            <span style={{ display: 'inline-block', width: '16px', height: '16px', background: '#16a34a', borderRadius: '4px', textAlign: 'center', lineHeight: '16px', color: 'white', fontSize: '10px' }}>A2</span>
            Alpha2 Technologies
          </span> — all simultaneously. I'm a B.Tech CSE student at Kalasalingam University, building real-world projects in web development and machine learning, and open-sourcing everything on GitHub. Based in Guntur, Andhra Pradesh, India 🇮🇳
        </p>

        <div className="hero-shortcut">
          Press <kbd>M</kbd> to copy my email
          <span className={`copied-toast ${copied ? 'visible' : ''}`}>Copied!</span>
        </div>

        <div className="hero-actions">
          <button onClick={scrollToWork} className="btn">
            View work <ArrowUpRight size={16} />
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Download CV <Download size={16} />
          </a>
        </div>
      </div>
      
      {/* Subtle divider line */}
      <div className="hero-divider" style={{ transformOrigin: 'left center' }}></div>
    </section>
  );
}
