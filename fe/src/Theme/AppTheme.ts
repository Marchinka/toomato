import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { NEUTRALS } from './Colors';

declare module '@mui/material/styles' {
  interface Theme {
    neutrals: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    neutrals?: {
      danger?: string;
    };
  }
}

export const THEME = createTheme({
  palette: {
    background: {
      default: NEUTRALS.B100
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: "#CD0E0E",
    },
    text: {
      primary: NEUTRALS.B900
    }
  },
  neutrals: {}
});