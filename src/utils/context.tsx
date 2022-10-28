import React, { createContext, ReactElement, useEffect, useMemo, useState } from 'react';

interface IContextType {
  theme: string;
  setTheme: (theme: string) => void;
}

interface ContextProps {
  children: ReactElement;
}

export const ThemeContext = createContext<IContextType>({
  theme: 'light',
  setTheme: () => {
    // left blank
  },
});

function ThemeProvider({ children }: ContextProps): ReactElement {
  const [theme, setTheme] = useState<string>('');
  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };
  const themeValues = useMemo(() => ({ theme, setTheme }), [theme]);
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches &&
      !localTheme
    ) {
      setMode('dark');
    } else if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode('light');
    }
  }, []);
  useEffect(() => {
    if (theme !== '') {
      setMode(theme);
    }
  }, [theme]);
  return <ThemeContext.Provider value={themeValues}>{children}</ThemeContext.Provider>;
}

export default ThemeProvider;
