import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 acid-border bg-white dark:bg-black text-black dark:text-white transition-all hover:acid-shadow-hover hover:bg-acid-cyan dark:hover:bg-acid-cyan dark:hover:text-black active:acid-shadow-active active:translate-y-[2px] active:translate-x-[2px]"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon size={20} strokeWidth={3} /> : <Sun size={20} strokeWidth={3} />}
    </button>
  );
}
