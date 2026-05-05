import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, ArrowUpRight } from 'lucide-react';
import SplitText from '../components/ui/SplitText';
import './Milestones.css';

gsap.registerPlugin(ScrollTrigger);

const certificationsList = [
  { title: "Anthropic AI Certification", org: "Anthropic", link: "/certifications/c3_anthropic_certificate.pdf" },
  { title: "Machine Learning Internship", org: "Prodigy InfoTech", link: "/certifications/c1_prodigy_intership_Certificate.pdf" },
  { title: "Database Management Systems", org: "Kalasalingam University", link: "/certifications/c7_kl_99230040761-212CSE2305_%20DATABASE%20MANAGEMENT%20SYSTEMS%20(1).pdf" },
  { title: "Wadhwani Foundation", org: "Entrepreneurship & Soft Skills", link: "/certifications/c11_Wadhwani%20Foundation%20Certificate%20-%2069d53cf0d69240c3ae269fe9%20(1).pdf" },
  { title: "CodeTantra Certification", org: "Technical Skills", link: "/certifications/c5+kalasalingam.codetantra.com_cert_certificate.jsp_certId=CT1695-tR12rPA-c5Q.pdf" },
  { title: "HTML Fundamentals", org: "Coddy", link: "/certifications/c6_coddy_HTML_FUNDAMENTALS_E-CERTIFICATE.pdf" },
  { title: "Table Tennis Sports", org: "Athletics", link: "/certifications/c8_TABLE_TENNIS_SPORTS_CERTIFICATE.pdf" },
  { title: "NPTEL Marklist", org: "Academic Excellence", link: "/certifications/c9_nptel_Marklist.pdf" },
  { title: "Goethe-Zertifikat A1", org: "German Language", link: "/certifications/c2_german_language_certificate.jpg" }
];

export default function Milestones() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtitle
      gsap.from('.milestones-subtitle', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2
      });

      // Certifications Stagger
      gsap.from('.cert-modern-card', {
        y: 40, opacity: 0, duration: 0.8, ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: '.certs-modern-grid', start: 'top 85%' },
        clearProps: 'all'
      });

      // Memories Parallax Reveal
      gsap.from('.masonry-card', {
        y: 60, opacity: 0, scale: 0.95, duration: 1, ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: '.masonry-awards', start: 'top 85%' },
      });

      // Image Parallax Effect
      document.querySelectorAll('.masonry-card').forEach((card) => {
        gsap.to(card.querySelector('.masonry-img'), {
          yPercent: -15,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
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
    <div className="milestones-page container" ref={containerRef}>
      {/* Hero Header */}
      <section className="milestones-hero">
        <SplitText as="h1" className="milestones-title" splitBy="char" stagger={0.02}>
          Milestones & Memories
        </SplitText>
        <p className="milestones-subtitle">
          Certifications earned, awards received, and moments that shaped my journey as a developer.
        </p>
      </section>

      {/* Certifications Grid */}
      <section className="milestones-certs-section">
        <SplitText as="h2" className="milestones-section-heading" start="top 90%">
          Certifications
        </SplitText>

        <div className="certs-modern-grid">
          {certificationsList.map((cert, i) => (
            <a href={cert.link} target="_blank" rel="noreferrer" className="cert-modern-card" key={i}>
              <div className="cert-icon-wrapper">
                <Award size={24} className="cert-icon" />
              </div>
              <div className="cert-content">
                <h4>{cert.title}</h4>
                <p>{cert.org}</p>
              </div>
              <div className="cert-arrow">
                <ArrowUpRight size={20} />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Achievements / Memories Gallery */}
      <section className="milestones-memories-section">
        <SplitText as="h2" className="milestones-section-heading" start="top 90%">
          Memorable Moments
        </SplitText>

        <div className="masonry-awards">
          <div className="masonry-card">
            <img src="/images/achievements/department_3rd_award.png" alt="Department 3rd Award" className="masonry-img" onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
          
          <div className="masonry-card">
            <img src="/images/achievements/sports.jpeg" alt="Sports Day Winners" className="masonry-img" onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
          
          <div className="masonry-card">
            <img src="/images/achievements/hacathon.jpg" alt="Hackathon Experience" className="masonry-img" onError={(e) => { e.target.style.display = 'none'; }} />
          </div>
        </div>
      </section>
    </div>
  );
}
