export interface Theme {
    background: {
      default: string;
      light: string;
      dark: string;
      primary: string;
      secondary: string;
      black_100: string;
  
    },
    colors: {
      primary: string;
      secondary: string;
      background: string;
      textPrimary: string;
      textSecondary: string;
    };
    typography: {
      fontFamily: string;
      fontSize: string;
      headingFontSize: string;
    };
  }