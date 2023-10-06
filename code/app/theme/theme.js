"use client"
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

    body2: {
      marginBottom: 0,
    },

    subtitle1: {
      fontSize: 48,
      lineHeight: 1,
      color: '#eeee00',
      marginBottom: 10,
    },

    h2: {
      fontSize: 24,
      color: '#F55307'
    },

    h3: {
      fontSize: 20,
      color: '#fff'
    },

    h3: {
      fontSize: 18,
      color: '#eeee00'
    }
  },

});

export default theme;