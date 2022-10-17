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

const TITLE_FONT = "'PT Serif', serif;";
const BODY_FONT = "'Lato', sans-serif;";

export const THEME = createTheme({
  typography: {
    fontFamily: BODY_FONT,
    h1: {
      color: NEUTRALS.B900,
      fontFamily: TITLE_FONT
    },
    h2: {
      color: NEUTRALS.B900,
      fontFamily: TITLE_FONT
    },
    h3: {
      color: NEUTRALS.B700,
      fontFamily: TITLE_FONT
    },
    h4: {
      color: NEUTRALS.B700,
      fontFamily: TITLE_FONT
    },
    h5: {
      color: NEUTRALS.B700,
      fontFamily: TITLE_FONT
    },
  },
  palette: {
    background: {
      default: NEUTRALS.B100
    },
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: "#CD0E0E",
    },
    text: {
      primary: NEUTRALS.B900,
      secondary: NEUTRALS.B500
    }
  },
  neutrals: {}
});