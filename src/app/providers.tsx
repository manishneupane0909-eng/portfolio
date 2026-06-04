import React, { useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { ThemeMode } from '@/shared/types';

interface ProvidersProps {
  mode: ThemeMode;
  children: React.ReactNode;
}

export const Providers: React.FC<ProvidersProps> = ({ mode, children }) => {
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: mode === 'dark' ? '#7aa2f7' : '#3b5bdb' },
          secondary: { main: mode === 'dark' ? '#bb9af7' : '#7048e8' },
          background: {
            default: mode === 'dark' ? '#1a1b26' : '#f7f8fc',
            paper: mode === 'dark' ? 'rgba(36,40,59,0.9)' : 'rgba(255,255,255,0.95)',
          },
          text: {
            primary: mode === 'dark' ? '#c0caf5' : '#1a1b26',
            secondary: mode === 'dark' ? '#787c99' : '#6b7280',
          },
        },
        typography: {
          fontFamily: "'Outfit', system-ui, -apple-system, sans-serif",
          h1: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
          h2: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
          h3: { fontFamily: "'Outfit', sans-serif", fontWeight: 800 },
          h4: { fontFamily: "'Outfit', sans-serif", fontWeight: 700 },
          h5: { fontFamily: "'Outfit', sans-serif", fontWeight: 700 },
          h6: { fontFamily: "'Outfit', sans-serif", fontWeight: 600 },
          overline: { fontFamily: "'Source Code Pro', monospace", letterSpacing: '0.08em' },
        },
        shape: { borderRadius: 12 },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                backgroundColor: mode === 'dark' ? '#1a1b26' : '#f7f8fc',
              },
            },
          },
          MuiButton: {
            styleOverrides: {
              root: { textTransform: 'none', borderRadius: 8 },
            },
          },
        },
      }),
    [mode]
  );

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};


