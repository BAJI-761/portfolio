import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Home,
  FolderKanban,
  User,
  Sparkles,
  Mail,
  Settings,
} from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle.jsx';
import './Dock.css';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: Home, path: '/' },
  { id: 'projects', label: 'Projects', icon: FolderKanban, path: '/projects' },
  { id: 'about', label: 'About', icon: User, path: '/about' },
  { id: 'milestones', label: 'Milestones', icon: Sparkles, path: '/milestones' },
  { id: 'contact', label: 'Contact', icon: Mail, path: null, action: 'contact' },
  { id: 'settings', label: 'Settings', icon: Settings, path: null, action: 'settings' },
];

export default function Dock({ email = '' }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dockRef = useRef(null);

  // Close settings when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dockRef.current && !dockRef.current.contains(e.target)) {
        setSettingsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setSettingsOpen(false);
    } else if (item.action === 'settings') {
      setSettingsOpen((prev) => !prev);
    } else if (item.action === 'contact' && email) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const isActive = (item) => {
    if (!item.path) return false;
    if (item.path === '/') return location.pathname === '/';
    return location.pathname.startsWith(item.path);
  };

  return (
    <div className="dock-wrapper" ref={dockRef}>
      {/* Settings popup */}
      <AnimatePresence>
        {settingsOpen && (
          <motion.div
            className="dock-settings-popup"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <ThemeToggle />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Copied toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            className="dock-toast"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
          >
            Email copied!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dock bar */}
      <motion.nav
        className="dock"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = isActive(item);
          const hovered = hoveredId === item.id;

          return (
            <div
              key={item.id}
              className="dock-item-wrapper"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Tooltip */}
              <AnimatePresence>
                {hovered && !active && (
                  <motion.div
                    className="dock-tooltip"
                    initial={{ opacity: 0, y: 6, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.9 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 25,
                    }}
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                className={`dock-item ${active ? 'dock-item--active' : ''}`}
                onClick={() => handleClick(item)}
                whileHover={{ scale: 1.12 }}
                whileTap={{ scale: 0.92 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 28,
                }}
                aria-label={item.label}
                title={item.label}
              >
                <Icon size={20} strokeWidth={active ? 2.2 : 1.8} />
                <AnimatePresence>
                  {active && (
                    <motion.span
                      className="dock-item-label"
                      initial={{ width: 0, opacity: 0, marginLeft: 0 }}
                      animate={{ width: 'auto', opacity: 1, marginLeft: 6 }}
                      exit={{ width: 0, opacity: 0, marginLeft: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          );
        })}
      </motion.nav>
    </div>
  );
}
