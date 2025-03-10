'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D214AF',
    },
  },
  typography: {
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white',
          },
        },
        input: {
          color: 'white',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: 'white',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: 'white',
        },
      },
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
