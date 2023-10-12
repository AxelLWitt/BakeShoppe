import React, { createContext, useContext, useState } from 'react';

// Define the context type
type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

// Create the context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a custom hook for accessing the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// Create a provider component to wrap your app with
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
