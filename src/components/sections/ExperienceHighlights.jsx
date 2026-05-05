import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../ui/ScrollReveal';
import './ExperienceHighlights.css';

const highlights = [
  "Building full-stack web applications across 3 concurrent internships (CodeAlpha, SAM AI, Alpha2)",
  "Improved ML prediction accuracy by 15% through optimized model training at Prodigy InfoTech",
  "Led the SCRS Innovative-Den chapter — organized 5+ hackathons and mentored 20+ students",
  "Shipped production apps from concept to deployment with measurable user adoption",
  "Processed 3000+ data records for ML pipelines, improving model reliability",
  "Developing real-world SaaS platforms using React, Node.js, and cloud infrastructure",
  "Serving as Campus Ambassador at Naviotech — bridging industry and student communities",
  "Built and deployed 10+ open-source projects across web development and machine learning",
  "Pursuing Minor Degree in Quantum Technology alongside B.Tech in CSE (AI & ML)",
];

export default function ExperienceHighlights() {
  return (
    <section className="exp-highlights-section">
      <ScrollReveal>
        <div className="exp-highlights-grid">
          {highlights.map((item, i) => (
            <div key={i} className="exp-highlight-item">
              <span className="highlight-dash">—</span>
              <span className="highlight-text">{item}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
