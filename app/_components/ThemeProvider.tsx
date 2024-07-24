// components/ThemeProvider.tsx
"use client";

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
// import { ReactNode } from 'react';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//   },
// });

const defaultTheme = createTheme();

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>);
};

export default ThemeProvider;
