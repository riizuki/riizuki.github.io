import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-1 hover:scale-110 transition-transform hover:animate-sketch text-doodle-ink dark:text-gray-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={22} strokeWidth={2.5} /> : <Sun size={22} strokeWidth={2.5} />}
    </button>
  );
}
