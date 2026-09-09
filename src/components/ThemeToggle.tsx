import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-onyx-800 dark:hover:bg-onyx-700 text-neutral-800 dark:text-neutral-200 border border-neutral-300/80 dark:border-neutral-700/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-volt-gold flex items-center justify-center shadow-sm"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDarkMode ? (
        <Sun size={18} className="text-volt-yellow transition-transform duration-300 rotate-0 hover:rotate-45" />
      ) : (
        <Moon size={18} className="text-neutral-700 transition-transform duration-300" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
