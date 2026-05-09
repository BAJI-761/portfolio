import React from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Home, Archive, CornerUpLeft } from 'lucide-react';
import './TopNav.css';

export default function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="top-nav">
      <div className="nav-left">
        <NavLink to="/" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
          <Home size={16} />
          <span className="pill-text">Home</span>
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => `nav-pill ${isActive ? 'active' : ''}`}>
          <Archive size={16} />
          <span className="pill-text">Projects</span>
        </NavLink>
        <button onClick={() => navigate(-1)} className="nav-pill icon-only" aria-label="Go back">
          <CornerUpLeft size={16} />
        </button>
      </div>
      
      <div className="nav-right">
        <a href="#contact" className="nav-pill">
          <span className="pill-text">Contact Me</span>
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-pill">
          <span className="pill-text">My CV</span>
        </a>
      </div>
    </nav>
  );
}
