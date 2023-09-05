const { createTheme } = require("@mui/material");

const theme = createTheme({

  palette: {
    primary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      contrastText: '#fff',
    },
    common: {
      black: '#fff',
      white: '#fff',
    },
    grey: {
      50: '#fafafa',
      100: '#fafafa',
      200: '#fafafa',
      300: '#fafafa',
      400: '#fafafa',
      500: '#fafafa',
      600: '#fafafa',
      700: '#fafafa',
      800: '#fafafa',
      900: '#fafafa',
      A100: '#fafafa',
      A200: '#fafafa',
      A400: '#fafafa',
      A700: '#fafafa',
    },
    action: {
      active: '#fff',
      hover: '#fff',
      hoverOpacity: '#fff',
      selected: '#fff',
      selectedOpacity: '#fff',
      disabled: '#fff',
      disabledBackground: '#fff',
      disabledOpacity: '#fff',
      focus: '#fff',
      focusOpacity: '#fff',
      activatedOpacity: '#fff',
    },
  },

  typography: {
    body1: {
      color: '#fff',
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