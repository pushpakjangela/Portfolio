import { createContext, ReactNode, useContext } from 'react';
import { Theme } from '../../interface/Theme/Theme';



const defaultTheme: Theme = {
  background: {
    default: '#000000',
    black_100:"#0A0E15",
    light: '#f0f0f0',
    dark: '#000000',
    primary: '#007bff',
    secondary: '#6c757d',
  },
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#f8f9fa',
    textPrimary: '#212529',
    textSecondary: '#6c757d',
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    headingFontSize: '2rem',
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const ThemeProviderWrapper = ({ children }: ThemeProviderWrapperProps) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
