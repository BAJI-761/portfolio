import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import './Experience.css';

const experiences = [
  {
    id: 1,
    company: "Prodigy InfoTech",
    role: "Machine Learning Intern",
    type: "Internship",
    date: "Jul 2025 → Aug 2025",
    location: "Remote",
    logoColor: "#4A90E2",
    logoImage: "/images/logos/prodigy.jpg",
    bullets: [
      "Improved prediction accuracy by 15% by optimizing ML models using structured datasets.",
      "Processed and analyzed 3000+ data records, improving model reliability.",
      "Applied debugging, validation, and SDLC practices to reduce model errors by 20%."
    ]
  },
  {
    id: 2,
    company: "SCRS Student Chapter",
    role: "Lead (Innovative-Den)",
    type: "Leadership",
    date: "Jan 2026 → Present",
    location: "Kalasalingam University",
    logoColor: "#10B981",
    bullets: [
      "Selected to lead and collaborate with 20+ students on AI and software projects.",
      "Organized 5+ technical events, including hackathons and workshops.",
      "Mentored teams, improving project completion rate by 30%."
    ]
  },
  {
    id: 3,
    company: "CodeAlpha",
    role: "Full-Stack Dev Intern",
    type: "Internship",
    date: "Apr 2026 → Present",
    location: "Remote",
    logoColor: "#F59E0B",
    logoImage: "/images/logos/codealpha.jpg",
    bullets: [
      "Building responsive web applications using modern technologies.",
      "Working on real-world projects to strengthen frontend and backend skills.",
      "Collaborating with a developer community and improving problem-solving skills."
    ]
  },
  {
    id: 4,
    company: "SAM AI & Alpha2",
    role: "Web Dev Intern",
    type: "Internship",
    date: "May 2026 → Present",
    location: "Remote",
    logoColor: "#8B5CF6",
    logoImage: "/images/logos/sam-ai.jpg",
    bullets: [
      "Concurrent internships focusing on modern frontend frameworks and responsive UI design.",
      "Building web applications through project-based tasks assigned in real-time.",
      "Maintaining public GitHub repositories for all internship projects."
    ]
  }
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="experience-section">
      <ScrollReveal>
        <h2 className="section-title">Experience</h2>
      </ScrollReveal>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <ScrollReveal key={exp.id}>
            <div 
              className={`experience-item ${expandedId === exp.id ? 'expanded' : ''}`}
              onClick={() => toggleExpand(exp.id)}
            >
              {/* Header Row */}
              <div className="exp-header">
                <div className="exp-left">
                  <div className="exp-logo" style={!exp.logoImage ? { backgroundColor: exp.logoColor } : {}}>
                    {exp.logoImage ? (
                      <img src={exp.logoImage} alt={exp.company} className="exp-logo-img" />
                    ) : (
                      <div className="exp-logo-inner"></div>
                    )}
                  </div>
                  <div className="exp-title-group">
                    <h3 className="exp-company">{exp.company}</h3>
                    <span className="exp-separator">-</span>
                    <span className="exp-role">{exp.role}</span>
                  </div>
                </div>
                <div className="exp-right">
                  <ChevronDown 
                    className="exp-chevron" 
                    size={20} 
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Meta Row (Type, Date, Location) */}
              <div className="exp-meta">
                <span>{exp.type}</span>
                <span className="meta-dot"></span>
                <span>{exp.date}</span>
                <span className="meta-dot"></span>
                <span className="meta-location">{exp.location}</span>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedId === exp.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="exp-content"
                  >
                    <ul className="exp-bullets">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
