import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Dock from './components/layout/Dock.jsx';
import Footer from './components/layout/Footer.jsx';
import PageTransition from './components/layout/PageTransition.jsx';
import { useSmoothScroll } from './hooks/useSmoothScroll.js';
import { useTheme } from './hooks/useTheme.js';

import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Milestones from './pages/Milestones.jsx';

import TopNav from './components/layout/TopNav.jsx';

function AppContent() {
  const location = useLocation();
  useSmoothScroll();
  useTheme(); // Initialize theme on mount

  return (
    <>
      <TopNav />
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <PageTransition key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/milestones" element={<Milestones />} />
          </Routes>
        </PageTransition>
      </AnimatePresence>

      <Footer />
      <Dock email="baji32456@gmail.com" />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
