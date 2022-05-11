import HomePage from './pages/home/homePage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react';

const darkTheme = createTheme({
  palette: {
      mode: 'dark'
  }
})

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div><HomePage /></div>
    </ThemeProvider>
  );
}

  