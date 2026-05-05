import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../ui/ScrollReveal";
import "./Philosophy.css";

const stats = [
  { number: "10+", label: "Projects Built" },
  { number: "3+", label: "Active Internships" },
  { number: "5000+", label: "Data Records Processed" },
  { number: "20+", label: "Developers Led & Collaborated" }
];

const Philosophy = () => {
  return (
    <section className="philosophy-section">
      
      {/* Stats Row */}
      <div className="stats-container">
        {stats.map((stat, index) => (
          <ScrollReveal key={index}>
            <div className="stat-item">
              <h2>{stat.number}</h2>
              <p>{stat.label}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Philosophy Block */}
      <div className="philosophy-container">
        
        {/* Left Sticky Label */}
        <div className="philosophy-label">
          <span>PHILOSOPHY</span>
        </div>

        {/* Right Text */}
        <div className="philosophy-text">
          <ScrollReveal>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              I don’t just write code — I build systems that turn ideas into real, working products.
              <br /><br />
              Driven by consistency and curiosity, I focus on learning by building, shipping, and improving every single day.
              For me, software engineering isn’t just about solving problems — it’s about creating impact through scalable,
              efficient, and meaningful technology.
            </motion.p>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};

export default Philosophy;
