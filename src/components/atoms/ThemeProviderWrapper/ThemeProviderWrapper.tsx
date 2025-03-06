'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { purple, green } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D214AF',
    },
    secondary: {
      main: '#FFC9F5',
    },
  },
  typography: {
    button: {
      fontWeight: 600,
    },
  },
});

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export { ThemeProviderWrapper };
