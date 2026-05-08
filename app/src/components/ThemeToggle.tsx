import { motion } from 'framer-motion';
import { MoonStar, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isAurora = mounted && theme === 'theme-aurora';

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isAurora ? 'theme-midnight' : 'theme-aurora')}
      data-cursor="button"
      data-cursor-label="Theme"
      aria-label={isAurora ? 'Switch to Midnight theme' : 'Switch to Aurora theme'}
      className="interactive-surface theme-toggle group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-[color:var(--text-primary)]"
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="theme-toggle__icon">
        {isAurora ? <MoonStar size={16} /> : <Sparkles size={16} />}
      </span>
      <span className="hidden sm:inline">{isAurora ? 'Midnight' : 'Aurora'}</span>
    </motion.button>
  );
};

export default ThemeToggle;
