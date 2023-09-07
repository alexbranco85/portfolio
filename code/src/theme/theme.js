const { createTheme } = require("@mui/material");

const theme = createTheme({

  palette: {
    mode: 'dark',
    primary: {
      light: '#fff',
      main: '#F55307',
      dark: '#eeee00',
      contrastText: '#000',
    },
    secondary: {
      light: '#eeee00',
      main: '#eeee00',
      dark: '#eeee00',
      contrastText: '#eeee00',
    },
  },

  typography: {
    body1: {
      marginBottom: 10,
    },

    subtitle1: {
      fontSize: 48,
      color: '#eeee00',
      marginBottom: 10,
    },
  },

});

export default theme;