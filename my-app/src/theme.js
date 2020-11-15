
import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = (prefersDarkMode) =>
  createMuiTheme({
    typography: {
      button: {
        fontSize: '1rem',
      },
    },
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: prefersDarkMode? '#fff':'#f00',
    },

    },
  });
  


export default theme;