import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import ScrollReveal from '../components/ui/ScrollReveal';

import './About.css';

gsap.registerPlugin(ScrollTrigger);

const useToolsRow1 = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Figma", color: "#F24E1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Python", color: "#3776AB" }
];
const useToolsRow2 = [
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Git", color: "#F05032" },
  { name: "TensorFlow", color: "#FF6F00" },
  { name: "Scikit-Learn", color: "#F7931E" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Docker", color: "#2496ED" }
];
const useToolsRow3 = [
  { name: "VS Code", color: "#007ACC" },
  { name: "GitHub", color: "#FFFFFF" },
  { name: "Postman", color: "#FF6C37" },
  { name: "Jira", color: "#0052CC" },
  { name: "Slack", color: "#4A154B" },
  { name: "Vercel", color: "#000000" },
  { name: "Linux", color: "#FCC624" },
  { name: "VS Code", color: "#007ACC" },
  { name: "GitHub", color: "#FFFFFF" },
  { name: "Postman", color: "#FF6C37" }
];

const bestAtList = [
  {
    num: "01",
    title: "Full-Stack Development",
    desc: "I build responsive, high-performance web applications from the ground up, ensuring clean backend architecture and seamless frontend user experiences."
  },
  {
    num: "02",
    title: "Machine Learning Solutions",
    desc: "I apply data-driven approaches to solve real problems, from linear regression and clustering to building predictive models that scale."
  },
  {
    num: "03",
    title: "Technical Leadership",
    desc: "Whether serving as a Campus Ambassador or leading student chapters, I foster developer communities and manage project lifecycles effectively."
  }
];



export default function About() {
  const [time, setTime] = useState("");
  const ctaRef = useRef(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const [copied, setCopied] = useState(false);
  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('baji32456@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // GSAP animation for CTA section
  useEffect(() => {
    if (!ctaRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.about-cta-title', {
        y: 50, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-cta-section', start: 'top 80%' },
      });
      gsap.from('.about-cta-desc', {
        y: 30, opacity: 0, duration: 0.7, delay: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-cta-section', start: 'top 80%' },
      });
      gsap.from('.about-cta-btn', {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.1, delay: 0.3, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-cta-section', start: 'top 80%' },
      });
      gsap.from('.about-cta-location', {
        y: 15, opacity: 0, duration: 0.5, delay: 0.5, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-cta-section', start: 'top 80%' },
      });
    }, ctaRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page container">
      {/* 1. Hero Section (Replicating exact reference style) */}
      <section className="about-editorial-hero">
        <ScrollReveal>
          <div className="hero-star-wrapper" style={{ display: 'block', width: '100%', marginBottom: '32px' }}>
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="hero-star" style={{ display: 'block' }}>
              <path d="M50 0L52.5 40L100 50L52.5 60L50 100L47.5 60L0 50L47.5 40L50 0Z" fill="white" />
              <path d="M50 20L51 45L80 50L51 55L50 80L49 55L20 50L49 45L50 20Z" fill="rgba(255,255,255,0.5)" />
              <circle cx="50" cy="50" r="2" fill="white" />
              <circle cx="50" cy="50" r="15" fill="url(#starGlow)" opacity="0.4" />
              <defs>
                <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="100%" stopColor="transparent" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h1 className="editorial-title">
            Building scalable systems<br/>
            from complexity.
          </h1>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <div className="editorial-body">
            <p>
              I'm Baji Shaik—a Full-Stack Developer & ML Enthusiast based in Guntur, working globally to build products that are efficient, scalable, and intuitive.
            </p>
            <p>
              I specialize in 0→1 full-stack development and machine learning solutions, with experience across AI platforms, telemedicine, and threat intelligence. I'm currently driving engineering efforts across concurrent internships at Alpha2, SAM AI, and CodeAlpha.
            </p>
            <p>
              I believe the best way to learn software engineering isn't watching—it should feel like building systems that were always meant to exist.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <h2 className="callout-quote-large">
            Ship it, then polish.<span className="blinking-cursor">|</span>
          </h2>
        </ScrollReveal>
      </section>

      {/* 2. Bento Grid ("Details make the difference") */}
      <section className="about-bento-section">
        <ScrollReveal>
          <h2 className="section-subtitle">Details make the difference</h2>
        </ScrollReveal>

        <div className="bento-grid">
          {/* Local Time */}
          <ScrollReveal delay={0.1} className="bento-card">
            <div className="bento-content">
              <span className="bento-label">Local Time</span>
              <h3 className="bento-value time-value">{time || "12:00 PM"}</h3>
              <p className="bento-sub">Guntur, India</p>
            </div>
          </ScrollReveal>

          {/* Learning */}
          <ScrollReveal delay={0.2} className="bento-card">
            <div className="bento-content">
              <span className="bento-label">Learning</span>
              <h3 className="bento-value">Quantum Tech</h3>
              <p className="bento-sub">Minor Degree (2025-2027)</p>
            </div>
          </ScrollReveal>

          {/* Languages */}
          <ScrollReveal delay={0.3} className="bento-card">
            <div className="bento-content">
              <span className="bento-label">I speak</span>
              <h3 className="bento-value">English, Telugu, Hindi</h3>
            </div>
          </ScrollReveal>

          {/* Role */}
          <ScrollReveal delay={0.4} className="bento-card col-span-2">
            <div className="bento-content role-content">
              <div>
                <span className="bento-label">Leadership Role</span>
                <h3 className="bento-value">Campus Ambassador</h3>
                <p className="bento-sub">@ Naviotech Solution Pvt. Ltd.</p>
              </div>
              <img src="/images/logos/naviotech.jpg" alt="Naviotech Logo" className="bento-logo" onError={(e) => e.target.style.display = 'none'} />
            </div>
          </ScrollReveal>

          {/* Hobby/Interest */}
          <ScrollReveal delay={0.5} className="bento-card">
            <div className="bento-content">
              <span className="bento-label">|</span>
              <h3 className="bento-value">Table Tennis</h3>
              <p className="bento-sub">Sports</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. "What do I use" Marquee */}
      <section className="about-marquee-section">
        <ScrollReveal>
          <h2 className="about-section-heading">What do I use</h2>
        </ScrollReveal>

        <div className="marquee-wrapper">
          <div className="marquee-container">
            {/* Row 1 (Left to Right) */}
            <div className="marquee-row scroll-left">
              <div className="marquee-track">
                {[...useToolsRow1, ...useToolsRow1].map((tool, i) => (
                  <div key={i} className="tool-pill">
                    <div className="tool-icon" style={{ backgroundColor: tool.color }}></div>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 (Right to Left) */}
            <div className="marquee-row scroll-right">
              <div className="marquee-track">
                {[...useToolsRow2, ...useToolsRow2].map((tool, i) => (
                  <div key={i} className="tool-pill">
                    <div className="tool-icon" style={{ backgroundColor: tool.color }}></div>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3 (Left to Right) */}
            <div className="marquee-row scroll-left">
              <div className="marquee-track">
                {[...useToolsRow3, ...useToolsRow3].map((tool, i) => (
                  <div key={i} className="tool-pill">
                    <div className="tool-icon" style={{ backgroundColor: tool.color }}></div>
                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5. Philosophy Section */}
      <section className="about-philosophy-section">
        <ScrollReveal>
          <h2 className="about-section-heading">Engineering Philosophy</h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h3 className="philosophy-statement">
            I don’t just write code — I build systems that turn ideas into real, working products.
          </h3>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="philosophy-body">
            <p>
              Driven by consistency and curiosity, I focus on learning by building, shipping, and improving. I believe in writing clean code, designing intuitive interfaces, and building solutions that actually solve problems.
            </p>
            <p>
              Engineering is a team sport, and I actively work to foster developer communities, mentor peers, and ensure that what we build is scalable, maintainable, and deeply human-centric.
            </p>
          </div>
        </ScrollReveal>
      </section>



      {/* 4. Experience Timeline (Keep the old one? Or replace it? The user has a custom experience section. I'll just keep the custom one and maybe remove this old timeline if they prefer the component, but let's keep both or just prepend the component.) */}

      {/* 4. "What I Do Best" */}
      <section className="about-best-section">
        <ScrollReveal>
          <h2 className="about-section-heading">What I do best</h2>
        </ScrollReveal>

        <div className="best-list">
          {bestAtList.map((item, index) => (
            <ScrollReveal key={item.id} delay={0.1 * index}>
              <div className="best-item">
                <span className="best-num">{item.id}</span>
                <div className="best-text">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 5. Detailed Experience */}
      <section className="about-experience-section">
        <ScrollReveal>
          <h2 className="about-section-heading">Experience</h2>
        </ScrollReveal>

        <div className="about-exp-timeline">
          {/* CodeAlpha */}
          <ScrollReveal delay={0.1}>
            <div className="about-exp-card">
              <div className="about-exp-header">
                <div className="about-exp-logo-wrap">
                  <img src="/images/logos/codealpha.jpg" alt="CodeAlpha" className="about-exp-logo" onError={(e) => e.target.style.display = 'none'} />
                </div>
                <div className="about-exp-info">
                  <h3>CodeAlpha</h3>
                  <span className="about-exp-role">Full-Stack Dev Intern</span>
                </div>
                <div className="about-exp-date">Apr 2026 → Present</div>
              </div>
              <p className="about-exp-desc">
                Building responsive, production-grade web applications using modern frontend and backend technologies. Working on real-world client projects with cross-functional teams, applying clean code practices and component-driven architecture.
              </p>
              <div className="about-exp-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Tailwind CSS</span>
              </div>
              <ul className="about-exp-achievements">
                <li>Developed and shipped 3+ full-stack web applications from concept to deployment</li>
                <li>Implemented REST APIs with authentication, validation, and error handling</li>
                <li>Collaborated with a distributed developer community on code reviews and pair programming</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* SAM AI & Alpha2 */}
          <ScrollReveal delay={0.15}>
            <div className="about-exp-card">
              <div className="about-exp-header">
                <div className="about-exp-logo-wrap">
                  <img src="/images/logos/sam-ai.jpg" alt="SAM AI" className="about-exp-logo" onError={(e) => e.target.style.display = 'none'} />
                </div>
                <div className="about-exp-info">
                  <h3>SAM AI & Alpha2 Technologies</h3>
                  <span className="about-exp-role">Web Dev Intern</span>
                </div>
                <div className="about-exp-date">May 2026 → Present</div>
              </div>
              <p className="about-exp-desc">
                Concurrent internships focused on modern frontend frameworks and responsive UI design. Building web applications through project-based tasks involving real-time requirements, with all work maintained as public open-source repositories.
              </p>
              <div className="about-exp-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Figma</span>
                <span className="tech-tag">Vercel</span>
              </div>
              <ul className="about-exp-achievements">
                <li>Building responsive, pixel-perfect UIs from design specifications</li>
                <li>Maintaining public GitHub repositories for all internship projects</li>
                <li>Applying component-driven development with reusable design systems</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* SCRS */}
          <ScrollReveal delay={0.2}>
            <div className="about-exp-card">
              <div className="about-exp-header">
                <div className="about-exp-logo-wrap" style={{ background: '#10B981' }}>
                </div>
                <div className="about-exp-info">
                  <h3>SCRS Student Chapter</h3>
                  <span className="about-exp-role">Lead — Innovative-Den</span>
                </div>
                <div className="about-exp-date">Jan 2026 → Present</div>
              </div>
              <p className="about-exp-desc">
                Selected to lead and coordinate the Innovative-Den wing of the SCRS Student Chapter at Kalasalingam University. Driving technical events, hackathons, and mentoring programs to foster a strong developer community on campus.
              </p>
              <div className="about-exp-tech">
                <span className="tech-tag">Leadership</span>
                <span className="tech-tag">Event Management</span>
                <span className="tech-tag">Mentoring</span>
                <span className="tech-tag">Public Speaking</span>
              </div>
              <ul className="about-exp-achievements">
                <li>Organized 5+ technical events including hackathons, coding contests, and workshops</li>
                <li>Mentored 20+ students on AI and software development projects</li>
                <li>Improved team project completion rate by 30% through structured guidance</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Prodigy InfoTech */}
          <ScrollReveal delay={0.25}>
            <div className="about-exp-card">
              <div className="about-exp-header">
                <div className="about-exp-logo-wrap">
                  <img src="/images/logos/prodigy.jpg" alt="Prodigy InfoTech" className="about-exp-logo" onError={(e) => e.target.style.display = 'none'} />
                </div>
                <div className="about-exp-info">
                  <h3>Prodigy InfoTech</h3>
                  <span className="about-exp-role">Machine Learning Intern</span>
                </div>
                <div className="about-exp-date">Jul 2025 → Aug 2025</div>
              </div>
              <p className="about-exp-desc">
                Designed and optimized machine learning models using structured datasets. Focused on data preprocessing, model validation, and improving prediction accuracy through iterative training. Applied SDLC practices to the ML development workflow.
              </p>
              <div className="about-exp-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Scikit-Learn</span>
                <span className="tech-tag">Pandas</span>
                <span className="tech-tag">NumPy</span>
                <span className="tech-tag">Matplotlib</span>
              </div>
              <ul className="about-exp-achievements">
                <li>Improved prediction accuracy by 15% through model optimization techniques</li>
                <li>Processed and analyzed 3000+ data records, improving model reliability</li>
                <li>Reduced model errors by 20% through rigorous debugging and validation</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Let's Work Together CTA ── */}
      <section className="about-cta-section" ref={ctaRef}>
        <div className="about-cta-content">
          <h2 className="about-cta-title">Let's work together</h2>
          <p className="about-cta-desc">
            I'm always open to new projects, collaborations, and interesting conversations. Let's make something great.
          </p>
          <div className="about-cta-actions">
            <button onClick={handleCopyEmail} className="about-cta-btn about-cta-btn-primary" style={{ position: 'relative' }}>
              Contact Me
              <span className={`about-copied-toast ${copied ? 'visible' : ''}`}>Copied!</span>
            </button>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about-cta-btn about-cta-btn-secondary"
            >
              Download CV
            </a>
          </div>
          <p className="about-cta-location">Based in Guntur, India — building worldwide 🌍</p>
        </div>
      </section>

    </div>
  );
}
