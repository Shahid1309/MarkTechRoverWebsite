import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    if (typeof window !== 'undefined') {
      if (newTheme === 'dark') {
        window.document.documentElement.classList.add('dark');
      } else {
        window.document.documentElement.classList.remove('dark');
      }
    }
  };

  // Initialize theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === 'dark') {
        window.document.documentElement.classList.add('dark');
      } else {
        window.document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}