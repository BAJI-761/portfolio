import { useTheme } from '../../hooks/useTheme.js';
import { Monitor, Sun, Moon } from 'lucide-react';
import './ThemeToggle.css';

const THEME_OPTIONS = [
  { id: 'system', label: 'System', icon: Monitor },
  { id: 'light', label: 'Light', icon: Sun },
  { id: 'dark', label: 'Dark', icon: Moon },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-toggle">
      <div className="theme-toggle-header">THEME</div>
      <div className="theme-toggle-options">
        {THEME_OPTIONS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`theme-toggle-btn ${theme === id ? 'theme-toggle-btn--active' : ''}`}
            onClick={() => setTheme(id)}
            aria-label={`Set ${label} theme`}
          >
            <Icon size={14} strokeWidth={2} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
