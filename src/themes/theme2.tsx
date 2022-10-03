import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#81D4FA',
    },
    secondary: {
      main: '#3949ab',
    },
    error: {
      main: '#b71c1c',
    },
    success: {
      main: '#C8E6C9'
    },
    text: {
        primary: '#fafafa',
    }
  },
  typography: {
    fontFamily: "IBMPlexSans, sans-serif",
    h1: {
      fontWeight: 'bolder',
      fontSize: 72,
      whiteSpace: 'nowrap'
    },
    h2: {
      fontWeight: 'bold',
    },
    h6: {
      fontWeight: 'normal',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      `
    }
  }
});

export default theme;