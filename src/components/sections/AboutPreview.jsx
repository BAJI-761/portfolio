import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';
import './AboutPreview.css';

export default function AboutPreview() {
  return (
    <section className="about-preview-section">
      <ScrollReveal>
        <h2 className="about-preview-heading">About me</h2>
      </ScrollReveal>
      
      <ScrollReveal delay={0.1}>
        <p className="about-preview-text">
          I'm a full-stack developer with a background in machine learning, which shapes how I approach systems, constraints, and collaboration with engineering teams. Recently, I've been focused on building production-ready web applications and ML-powered solutions, with most of my work spanning SaaS platforms, AI tools, and data-driven products.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <ul className="about-preview-points">
          <li>I start with constraints — understanding the business model, data, and technical realities before writing code.</li>
          <li>I build in systems — architectures that can scale across products, not just one-off scripts.</li>
          <li>I stay close to delivery — shipping fast, iterating with feedback, and owning the full stack.</li>
        </ul>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <Link to="/about" className="about-preview-link">
          Read full story <ArrowUpRight size={16} />
        </Link>
      </ScrollReveal>
    </section>
  );
}
