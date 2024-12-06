'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon, Palette } from 'lucide-react';

export default function Darkmode () {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    // Alterna entre light e dark mode
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="dark:text-white"
    >
      {theme === 'dark' ? <Palette className="h-5 w-5"/> : <Palette className="h-5 w-5"/>}
    </button>
  );
};

